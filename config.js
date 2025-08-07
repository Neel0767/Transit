const config = {
    development: {
        host: 'localhost',
        port: 3000
    },
    production: {
        host: '0.0.0.0',  // Listen on all network interfaces
        port: 80          // Standard HTTP port
    },
    // Add your custom server configuration
    custom: {
        host: '192.168.1.100',  // Your specific IP
        port: 8080              // Your specific port
    }
};

// Get environment from NODE_ENV (defaults to 'development')
const env = process.env.NODE_ENV || 'development';

module.exports = config[env]; 