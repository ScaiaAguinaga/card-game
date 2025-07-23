import os
from flask import Flask
from dotenv import load_dotenv
from app.routes import bp

load_dotenv()

# Factory function used to create and configure Flask isntance of application
def create_app():
  # Creates the Flask appication object
  app = Flask(__name__)
  # Sets secret for session token
  app.secret_key = os.environ.get("SECRET_KEY")

  # Registers blueprint of routes with the app
  # Configured to make route url prefix /api
  app.register_blueprint(bp, url_prefix="/api")

  return app