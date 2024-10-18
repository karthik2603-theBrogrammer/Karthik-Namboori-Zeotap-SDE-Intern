from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)

    @app.before_first_request
    def create_tables():
        db.create_all()


    # Configuring the database URI
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI', 'postgresql://postgres:postgres@localhost:5432/postgres')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    # Register blueprints or routes here
    from . import main
    app.register_blueprint(main.bp)

    return app
