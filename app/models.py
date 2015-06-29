from app import db

class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	email = db.Column(db.String(120), index=True, unique = True)
	password = db.Column(db.String(54))
	is_admin = db.Column(db.Boolean)

	def is_authenticated(self):
		return True

	def is_admin(self):
		if self.is_admin is None:
			return False
		return True

	def is_active(self):
		return True

	def is_anonymous(self):
		return False

	def get_id(self):
		try:
			return unicode(self.id) #python 2
		except NameError:
			return str(self.id) #python 3

class Post(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	content = db.Column(db.String)
	author = db.Column(db.String)
	date_created = db.Column(db.DateTime)
	title = db.Column(db.String)
	category = db.Column(db.String)

class Card(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	value = db.Column(db.String(1000), unique = True)
	color = db.Column(db.Boolean) #will be true for black and false for white

class Game(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	player = db.Column(db.Integer, db.ForeignKey('user.id'))
	started = db.Column(db.Boolean)