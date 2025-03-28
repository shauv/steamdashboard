// Function to load Steam avatar
async function loadAvatar() {
    try {
        // Fetch avatar URL from the server
        const response = await fetch('/avatar');
        const data = await response.json();

        // Set the avatar URL in the image tag
        const avatarImg = document.getElementById('avatar');
        avatarImg.src = data.avatarUrl; // Assign the fetched URL
        avatarImg.onload = () => {
            avatarImg.style.opacity = 1; // Fade in the avatar
        };
    } catch (error) {
        console.error('Failed to load avatar:', error);
    }
}

// Execute the function when the page loads
window.onload = loadAvatar;