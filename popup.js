const popup = document.getElementById("aiPrompt");


function showAI() {
    popup.classList.remove("fade-out");
    popup.style.display = "flex";
    popup.classList.add('fade-in');
    $('#poe').load("https://www.google.com");
}

function closeAI() {
    popup.classList.remove("fade-in");
    popup.classList.add("fade-out");
    setTimeout(() => {
    popup.style.display = "none";
    }, 200);
}

/* This script is abandoned as Poe dropped support for iframe embeds */