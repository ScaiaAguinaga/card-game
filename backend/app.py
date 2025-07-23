from app import create_app

# Calls create_app to initialize Flask app
# App includes reigstered routes and blueprints
app = create_app()

# If file is executed directly starts a dev server
if __name__ == "__main__":
    app.run(debug=True, port=5000)