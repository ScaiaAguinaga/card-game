from flask import Flask
from app.routes import bp

# Factory function used to create and configure Flask isntance of application
def create_app():
  # Creates the Flask appication object
  app = Flask(__name__)

  # Registers blueprint of routes with the app
  # Configured to make route url prefix /api
  app.register_blueprint(bp, url_prefix="/api")

  return app