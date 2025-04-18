import os
from app import create_app

# Create the Flask application instance
app = create_app()

if __name__ == "__main__":
    # Get port from environment variable or default to 5000
    port = int(os.environ.get("PORT", 5000))
    
    # Get host from environment variable or default to localhost
    host = os.environ.get("HOST", "127.0.0.1")
    
    try:
        # Run the Flask application
        app.run(
            host=host,
            port=port,
            debug=True,  # Set to False in production
            use_reloader=True  # Automatically reloads the app on code changes
        )
    except Exception as e:
        # Print the error and exit gracefully
        print(f"Error starting the application: {e}")
        os._exit(1)  # Exit with an error code