const steamData = require('./server'); // Import steamData from server.js

// Simulate checking the avatar URL
setInterval(() => {
    console.log('Avatar URL from steamData:', steamData.avatarUrl || 'Not yet set');
}, 2000); // Log every 2 seconds