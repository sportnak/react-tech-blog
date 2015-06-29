from flask.ext.wtf import Form
from flask import session
from wtforms import StringField, BooleanField, TextAreaField, PasswordField, SubmitField, FileField
from wtforms.validators import DataRequired, Length, EqualTo
from werkzeug import generate_password_hash, check_password_hash
from .models import User, Card

class LoginForm(Form):
	username = StringField('Username', validators=[DataRequired()])
	password = PasswordField('Password', validators=[DataRequired()])
	remember_me = BooleanField('remember_me', default=False)

	def validate(self):
		if not Form.validate(self):
			return False
		user = User.query.filter_by(username=self.username.data).first()
		if user == None:
			self.username.errors.append('Incorrect username or password')
			return False
		if check_password_hash(user.password, self.password.data):
			return True
		self.username.errors.append('Incorrect username or password')
		return False

class RegisterForm(Form):
	email = StringField('Email', validators=[
		DataRequired(),
		Length(min=1, max=120)])
	password = PasswordField('Password', validators=[
		DataRequired(),
		Length(min=7, max=54, message='Password must be at least 7 characters'),
		EqualTo('confirm', message='Passwords must match')])
	confirm = PasswordField('Confirm Password')
	username = StringField('Username', validators=[DataRequired()])

	def validate(self):
		if not Form.validate(self):
			return False
		user = User.query.filter_by(username=self.username.data).first()
		if user != None:
			self.username.errors.append('This nickname is already in user. Please choose another one')
			return False
		return True

class PostForm(Form):
	title = StringField('Title', validators=[
		DataRequired()])
	content = StringField('Content', validators=[
		DataRequired()])
	category = StringField('Type')

	def validate(self):
		if not Form.validate(self):
			return False
		return True
		


