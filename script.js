const quotes = [
    '"Dreaming of that 36 LPA package starts with debugging today\'s code."',
    '"A future MBBS doctor doesn\'t stop learning when college ends at 4:30 PM."',
    '"Stethoscopes and compilers: Building our future, one line and one heartbeat at a time."',
    '"The secret to clearing NEET and VTU is consistency. Keep pushing."',
    '"Panda system initialized. Ready to conquer the syllabus."'
];

window.onload = function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-display").innerText = quotes[randomIndex];
};

function startApp() {
    const welcomeScreen = document.getElementById("welcome-screen");
    welcomeScreen.style.opacity = "0"; 
    setTimeout(function() {
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
    const API_KEY = "AIzaSyBhnWAGcS-oY8fgaQUIGjPcneVqW28NrAY"; 
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