from datetime import datetime
from flask import send_from_directory, make_response, render_template, flash, redirect, session, url_for, request, g
from app import app, db, lm
from .forms import LoginForm, RegisterForm, PostForm
from werkzeug import generate_password_hash, check_password_hash
from flask.ext.login import login_user, logout_user, current_user, login_required
from .models import User, Card, Post
import sys
import logging

app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)

@app.route('/resume')
def resume():
	return render_template('resume.html')

@app.route('/', methods=['GET', 'POST'])
@app.route('/index/<string:category>', methods=['GET', 'POST'])
def index(category = "None"):
	category = category.lower()
	return render_template('index.html',
							title='Home',
							category = category)

@login_required
@app.route('/home', methods=['GET', 'POST'])
def home():

	if g.user is not None and g.user.is_authenticated():
		session['user_id'] = g.user.id
		user = g.user
		users = User.query.all();
		games = [i for i in users[0].player if not i.started]
		return render_template('home.html',
								user=user,
								game=games)
	else:
		return redirect(url_for('login'))

@app.before_request
def before_request():
	g.user = current_user
	print(g.user.is_anonymous())
	if not g.user.is_anonymous() and g.user.username is not None:
		g.user.anonymous = False
	if g.user.is_authenticated():
		g.user.last_seen = datetime.utcnow()
		db.session.add(g.user)
		db.session.commit()

@lm.user_loader
def load_user(id):
	return User.query.get(int(id))

@app.route('/logout')
def logout():
	g.user.anonymous = True;
	logout_user()
	return redirect(url_for('index'))

@app.route('/login', methods=['GET', 'POST'])
def login():
	if not g.user.is_anonymous() and g.user.is_authenticated():
		return redirect(url_for('index'))
	form = LoginForm()
	if form.validate_on_submit() and 'register' not in request.form:
		session['remember_me'] = form.remember_me.data
		if form.validate():
			remember_me = False
			user = User.query.filter_by(username=form.username.data).first()
			if 'remember_me' in session:
				remember_me = session['remember_me']
				session.pop('remember_me', None)
			login_user(user, remember = remember_me)
			return redirect(request.args.get('next') or url_for('index'))
		return redirect(url_for('index'))
	if 'register' in request.form:
		return redirect(url_for('register'))
	return render_template('login.html',
							title='Sign In',
							form = form)

@app.route('/register', methods=['GET', 'POST'])
def register():
	if not g.user.is_anonymous() and g.user.is_authenticated():
		return redirect(url_for('index'))

	form = RegisterForm()
	if form.validate_on_submit():
		if form.validate():
			g.user.username = form.username.data
			g.user.email = form.email.data
			g.user.password = generate_password_hash(form.password.data)
			u = User(email = form.email.data, password = g.user.password, username = form.username.data)
			db.session.add(u)
			db.session.commit()

			flash('You have been registered!')
			return redirect(request.args.get('next') or url_for('index'))
		return redirect(url_for('index'))
	return render_template('register.html',
							title='Register',
							form = form)

@login_required
@app.route('/post', methods=['GET', 'POST'])
def post():
	if not g.user.is_anonymous() and g.user.username == 'sportnak':
		form = PostForm()
		if form.validate_on_submit():
			if form.validate():
				post = Post(title = form.title.data, 
					content = form.content.data, 
					author = 'Michael Nakayama', 
					date_created = datetime.utcnow(),
					category = form.category.data)
				db.session.add(post)
				db.session.commit()

				flash('Your post has been sent!')
				return redirect(url_for('index'))
			else:
				flash('The validation failed')
				return render_template('post.html',
					form = form)
		return render_template('post.html',
			form = form)
	else:
		return redirect(url_for('index'))

@app.route('/posts')
@app.route('/posts/<string:category>')
def posts(category = "None"):
	category = category.lower()
	list = []
	posts = Post.query.all();
	i = 0
	for post in reversed(posts):
		if str(post.category).lower() == category or category == "none":
			data = {}
			data['title'] = post.title
			data['content'] = post.content
			data['author'] = post.author
			data['date_created'] = post.date_created.strftime("%Y-%m-%d %H:%M:%S")
			data['category'] = str(post.category).lower()
			list.append(data)

		
	return str(list);

@app.route('/view/<int:postid>')
def view(postid="0"):
	post = Post.query.all().filter_by(id=postid).first()
	return render_template('view.html',
		post = post)