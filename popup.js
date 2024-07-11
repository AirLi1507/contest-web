const popup = document.getElementById("aiPrompt");


function showAI() {
    popup.classList.remove("fade-out");
    popup.style.display = "flex";
    popup.classList.add('fade-in');
}

function closeAI() {
    popup.classList.remove("fade-in");
    popup.classList.add("fade-out");
    setTimeout(() => {
    popup.style.display = "none";
    }, 200);
}