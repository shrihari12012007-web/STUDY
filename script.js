// This script creates a floating heart animation wherever the user clicks

document.addEventListener('click', function(event) {
    // 1. Create a new div element
    const heart = document.createElement('div');
    
    // 2. Set the content to a heart emoji
    heart.innerHTML = '❤️';
    
    // 3. Add the CSS class we defined in style.css
    heart.classList.add('click-heart-anim');
    
    // 4. Position the heart exactly where the mouse clicked
    // We subtract 12 so the center of the heart aligns with the mouse pointer
    heart.style.left = (event.pageX - 12) + 'px';
    heart.style.top = (event.pageY - 12) + 'px';
    
    // 5. Add the heart to the webpage
    document.body.appendChild(heart);
    
    // 6. Remove the heart from the code after 1 second (when the animation finishes)
    // This keeps the computer running fast so it doesn't get cluttered with invisible hearts
    setTimeout(function() {
        heart.remove();
    }, 1000);
});