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
<<<<<<< HEAD
        heart.remove();
    }, 1000);
});
=======
        welcomeScreen.style.display = "none"; 
    }, 1000); 
}

function checkPassword() {
    var typedPassword = document.getElementById("passcode").value;
    var secretPassword = "143"; 

    if (typedPassword === secretPassword) {
        document.getElementById("lock-screen").style.display = "none";
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}

// Toggles the Bot window open and closed
function toggleBot() {
    const bot = document.getElementById("ai-bot-container");
    bot.style.display = (bot.style.display === "none" || bot.style.display === "") ? "flex" : "none";
}

// 🧠 THE AI BRAIN
async function sendMessage() {
    const inputField = document.getElementById("user-input");
    const userText = inputField.value;
    const chatBox = document.getElementById("chat-box");

    if (userText.trim() === "") return; 

    // Put user message on screen
    chatBox.innerHTML += `<div class="message user-msg">${userText}</div>`;
    inputField.value = ""; 
    chatBox.scrollTop = chatBox.scrollHeight;

    // Loading message
    const loadingId = "loading-" + Date.now();
    chatBox.innerHTML += `<div class="message bot-msg" id="${loadingId}">Panda is thinking...</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    // =========================================================
    // 🔑 PASTE YOUR REAL API KEY BELOW
    // =========================================================
    const API_KEY = "AIzaSyBhnWAGcS-oY8fgaQUIGjPcwndneVqW28NrAY"; 
    // =========================================================

    // Using the official v1 production server
    const url = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" + API_KEY;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ 
                    parts: [{ 
                        text: userText + " (You are Panda, an AI assistant for a student studying for NEET MBBS and VTU CSE Engineering. Keep answers very short and encouraging. No markdown formatting.)" 
                    }] 
                }]
            })
        });

        const data = await response.json();

        // Error catching
        if (data.error) {
            throw new Error(data.error.message);
        }

        // Read bot answer
        const botReply = data.candidates[0].content.parts[0].text;

        document.getElementById(loadingId).remove();
        chatBox.innerHTML += `<div class="message bot-msg">${botReply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {
        console.error(error);
        document.getElementById(loadingId).remove();
        chatBox.innerHTML += `<div class="message bot-msg" style="color: #ffcccc;"><b>System Error:</b> ${error.message}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
>>>>>>> 066f26aa26d387cadabd0cfe198412f41a2741b5
