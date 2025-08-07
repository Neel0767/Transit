const express = require('express');
const path = require('path');
const app = express();

// Configuration
const host = process.env.HOST || '0.0.0.0';  // Default to all network interfaces
const port = process.env.PORT || 3000;       // Default port 3000

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'PB-2.html'));
});

// Start the server
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
    console.log(`1. Local: http://localhost:${port}`);
    console.log(`2. Network: http://${require('os').networkInterfaces()['Ethernet']?.[0]?.address || host}:${port}`);
}); 