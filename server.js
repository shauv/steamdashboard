require('dotenv').config();
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

// Access API key and User ID from .env
const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_USER_ID = process.env.STEAM_USER_ID;

// Steam data assignment
const steamData = {}; // Object to store data

// Route to fetch avatar
app.get('/avatar', async (req, res) => {
    try {
        const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${STEAM_USER_ID}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.response.players && data.response.players.length > 0) {
            steamData.avatarUrl = data.response.players[0].avatarfull;
            res.json({ avatarUrl: steamData.avatarUrl });
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch avatar' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});