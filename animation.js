// ANIMATED TITLE
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
document.getElementById("title").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iterations >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, 30);
}


// LOADING DISPLAY
// Show the loading overlay when the page starts loading
document.getElementById("loading-overlay").style.display = "flex";

// Listen for the load event to hide the loading overlay
window.addEventListener("load", function () {
    document.getElementById("loading-overlay").style.display = "none";
});

// Fallback: hide the loading overlay after 10 seconds if the load event hasn't fired
setTimeout(function () {
    console.log("Fallback: hiding loading overlay after 10 seconds");
    document.getElementById("loading-overlay").style.display = "none";
}, 10000); // 10 seconds
