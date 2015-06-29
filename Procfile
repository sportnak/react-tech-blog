web: gunicorn --log-file=- app:app
init: python db_create.py | python db_migrate.py
upgrade: python db_upgrade.py