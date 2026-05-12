// This listens for any click on the page
document.addEventListener('click', function(event) {
    
    // Create a new heart element
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    
    // Add the animation class defined in style.css
    heart.classList.add('click-heart-anim');
    
    // Position the heart exactly where the mouse clicked
    heart.style.left = (event.pageX - 12) + 'px';
    heart.style.top = (event.pageY - 12) + 'px';
    
    // Add the heart to the screen
    document.body.appendChild(heart);
    
    // Remove the heart from the computer's memory after 1 second so it doesn't slow down the browser
    setTimeout(function() {
        heart.remove();
    }, 1000);
});