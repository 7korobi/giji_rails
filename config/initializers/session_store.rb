# Be sure to restart your server when you modify this file.
Giji::Application.config.session_store :redis_session_store, servers: "redis://utage.sytes.net:6379/0"
