
// 🚀 Initialize the Lock Screen Cyber Rain (Study Symbols)
const symbols = ['{ }', '< >', '🧬', '💊', '∞', '01', '∫', 'log', 'π', '🩺', '⚕️', '[]', '()', '=>', '++'];
const container = document.getElementById('bg-structures');

for (let i = 0; i < 95; i++) {
    const el = document.createElement('div');
    el.className = 'floating-icon';
    el.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (Math.random() * 25 + 10) + 'px';
    el.style.animationDuration = (Math.random() * 12 + 8) + 's';
    el.setAttribute('animationDelay', (Math.random() * -20) + 's');
    container.appendChild(el);
}

// 🚀 Navigation Functions
function proceedToLock() {
    document.getElementById('welcome-screen').style.transform = 'translateY(-100%)';
}

function checkPass() {
    const typedPassword = document.getElementById("passcode").value;
    const secretPassword = "143"; // Your secret passcode
    const errorMsg = document.getElementById("error-msg");

    if (typedPassword === secretPassword) {
        // Unlock sequence:
        
        // 1. Hide the Lock Screen
        document.getElementById('lock-screen').style.transform = 'translatex(+100%)';
        
        // 2. Show the main dashboard content
        const dashboard = document.getElementById('main-dashboard');
       dashboard.style.display = 'block';
        // Allow time for display:flex to apply before changing opacity
        setTimeout(() => {
             dashboard.style.opacity = '1';
        }, 0);
        document.body.style.backgroundColor = '#cc92ff'; // Change background color to a lighter shade
        errorMsg.style.display = "none"; // Hide error message if it was previously shown
       fetch('https://api.quotable.io/random?tags=education|inspirational')
            .then(response => response.json())
            .then(data => {
                // 1. Find the subtitle element on your page
                const subtitleElement = document.querySelector('.subtitle');
                console.log("Fetched quote:", data.content, "—", data.author);
                const quoteText = `"${data.content}" — ${data.author}`;
                 console.log("Formatted quote:", quoteText);
                // 2. Change its text to the new quote and the author
                subtitleElement.innerText = `"${data.content}" — ${data.author}`;
            })
            .catch(error => {
                // Just in case the internet disconnects, keep a backup message!
                console.log("Couldn't fetch quote. Using default.");
            });
        // 3. Show the nav bar
        document.querySelector('.iphone-bar').style.display = 'flex';
        document.querySelector('.iphone-bar').style.opacity = '1';
        // alert("Psst... Check out the new tabs for Notes & Resources and Home & Lifestyle! 🏠📚" );
        buttons = document.querySelectorAll('.tab');
        buttons.forEach(button => {
            button.style.pointerEvents = 'auto'; // Enable clicking on tabs
        });
        
        // 4. Slightly blur the background image so text is easy to read
        document.getElementById('main-bg-container').classList.add('unlocked');
        console.log("Background image blurred for better readability.");

        
        // 5. Allow main page scrolling for study notes
        document.body.style.overflowY = 'auto';
        document.documentElement.style.overflowY = 'auto';
        titleAnimation(); // Start the title shimmer animation
        console.log("Title shimmer animation started.");

        function showInfo(title, description) {

    const infoBox = document.getElementById("info-box");

    infoBox.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
    `;

}
        
    } else {
        errorMsg.style.display = "block";
        document.getElementById("passcode").value = ""; // clear box
        console.log("Incorrect passcode entered.");
    }
}