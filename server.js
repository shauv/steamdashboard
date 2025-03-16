const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Default route for serving the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});