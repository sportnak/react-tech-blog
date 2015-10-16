var express = require('express');
var path = require('path');
var pg = require('pg');
var React = require('react');
var Router = require('react-router');
var BodyParser = require('body-parser');
var moment = require('moment');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var LocalStrategy = require('passport-local');
var routes = require('../routes');

const app = express();
app.use(express.static(__dirname + '/../../public'));
const connectionString = process.env.DATABASE_URL || 'postgres://bxujcozubyosgb:m1rgVoS1lEpdCZVRos6uWZVouU@ec2-54-235-146-58.compute-1.amazonaws.com:5432/d42dnjskegivlt?ssl=true';
const port = process.env.PORT || 3000;

// set up Jade
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

app.use(session({ 
	secret: 'TheAssyrianCameDownLikeAWolfOnTheFold',
	resave: false,
	saveUninitialized: false
})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.set('views', './views');
app.set('view engine', 'jade');

passport.serializeUser(function(user, done) {
	console.log('serialize: ' + user);
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	console.log('deserializing');
	ConnectToDb(connectionString, function(connection){
		if(connection.status == 'SUCCESS'){
			var user;
			connection.client
			.query("SELECT * FROM public.user WHERE id = " + id + ";")
			.on('row', function(row){
				user = row;
				if(user){
					done(null, user);
				}
				connection.fin();
			});
		} else {
			done(null, false);
		}
	})
});

passport.use(new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password',
	session: true
},
function(username, password, done){
	ConnectToDb(connectionString, function(connection){
		if(connection.status == 'SUCCESS'){
			var user;
			connection.client
			.query("SELECT * FROM public.user WHERE email = '" + username + "';")
			.on('row', function(row){
				user = row;
				connection.fin();
				if (!user){
					return done(null, false);
				} else {
					if(validatePassword(password, user.password)){
						return done(null, user);
					} else {
						return done(null, false);
					}
				}
			});
		}
	});
}));

app.post('/login', passport.authenticate('local', {
	failureRedirect : '/login'
}), function(req, res){
	res.redirect('/post');
});

app.post('/database/post', isLoggedIn, function(req, res){
	if(req.isAuthenticated()){
		var json = '';
		for(var key in req.body){
			json = json + '' + key;
		}
		json = JSON.parse(json);
		ConnectToDb(connectionString, function(connection){
			if(connection.status == 'SUCCESS'){
				var result = [];
				connection.client
				.query('INSERT INTO post (id, content, title, category, author, date_created) ' +
					"VALUES (((SELECT MAX(id) FROM post) + 1), '" + 
						json.content + "', '" + 
						json.title + "', '" + 
						json.type + "', 'Michael Nakayama', '" + 
						moment(Date.now()).utc().format("YYYY-MM-DD HH:mm") + "');")
				.on('error', function(err){
					connection.fin();
				});
				connection.fin();
				res.redirect('/');
			}
		});
	} else {
		res.redirect(404, '/');
	}
});

app.get('/database/posts-after/:category/:start_id', function (req, res) {
	if (!req.params.start_id || !req.params.category) {
		res.status(400).send();
	} else { 
		var id = req.params.start_id === '-1' ? '' : 'id < ' + req.params.start_id + ' AND ';
		ConnectToDb(connectionString, function(connection){
			if(connection.status == 'SUCCESS'){
				var rows = [];
				connection.client
				.query('SELECT * FROM post WHERE ' + id + ' category = \'' + req.params.category + '\' ORDER BY id DESC;')
				.on('row', function(row){
					rows.push(row);
				})
				.on('end', function(result){
					if(rows.length > 5){
						res.send(rows.slice(0, 5));
					} else  {
						res.send(rows);
					}
					connection.fin();
				});
			} else {
				DbConnectionFail(res);
				res.status(500).send();
			}
		});	
	}
});

app.get('/database/posts/:page/:limit', function (req, res){
	var limit;
	if(!req.params.limit){
		limit = 10;
	} else {
		limit = req.params.limit;
	}
	ConnectToDb(connectionString, function(connection){
		if(connection.status == 'SUCCESS'){
			var rows = [];
			connection.client
			.query('SELECT * FROM post WHERE id > ((SELECT MAX(id) FROM post) - ' + (req.params.page) * 5 + ') AND id <= ((SELECT MAX(id) FROM post) - ' + (req.params.page - 1) * (req.params.page == 2 ? 0 : 5) + ');')
			.on('row', function(row){
				rows.push(row);
			})
			.on('end', function(result){
				res.send(rows);
				connection.fin();
			});
		} else {
			DbConnectionFail(res);
			res.status(500).send();
		}
	});	
});

app.get('/*', function (req, res) {
	if(req.path.indexOf('.css') != -1){
		res.header('content-type', 'text/css');
	}
	if(req.path.indexOf('/database') == -1){
		Router.run(routes, req.url, Handler => {
			let content = React.renderToString(<Handler />);
			res.render('index', { content: content });
		});
	} 
	else if(req.path.indexOf('/database') == 0){
		console.log('API request was made')
	} 
	else {
		console.log('Db connection fail');
	}
});

var server = app.listen(port, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

function ConnectToDb(connectionString, callback){
	pg.connect(connectionString, function(err, client, done) {
		var error;
		if (err){
			error = err;
		}
		var client = err ? { status : 'ERROR', error : error } : { status : 'SUCCESS', client : client, fin: done };
		if(callback){
			callback(client);
			return;
		}
		return client;
	});
}

function DbConnectionFail (res){
	var connection;
	res.status(500).send('ERR:Database not connected. Attempting to restart.');
	//attempt to restart the db
	connection = ConnectToDb(connectionString);
	if (connection.status === 'ERROR'){
		console.log('Connection failed. Email Michael.');
		connection = null;
	} else {
		console.log('Successful reconnect');
	}
}

function isLoggedIn(req, res, next){
	if (req.path.indexOf('/post') == 0){
		if (req.isAuthenticated()){
			return next();
		} else {
			res.redirect('/');
		}
	}
	next();
}