// IMG DRAGGING
// const track = document.getElementById("image-track");

// const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

// const handleOnUp = () => {
//     track.dataset.mouseDownAt = "0";
//     track.dataset.prevPercentage = track.dataset.percentage;
// }

// const handleOnMove = e => {
//     if (track.dataset.mouseDownAt === "0") return;

//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//         maxDelta = window.innerWidth / 2;

//     const percentage = (mouseDelta / maxDelta) * -100,
//         nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
//         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100); /*25), -65 */

//     track.dataset.percentage = nextPercentage;

//     track.animate({
//         transform: `translate(${nextPercentage}%, -50%)` /*0% */
//     }, { duration: 1200, fill: "forwards" });

//     for (const image of track.getElementsByClassName("image")) {
//         image.animate({
//             objectPosition: `${100 + nextPercentage}% center` /*65*/
//         }, { duration: 1200, fill: "forwards" });
//     }
// }

/* -- Had to add extra lines for touch events -- */

// window.onmousedown = e => handleOnDown(e);

// window.ontouchstart = e => handleOnDown(e.touches[0]);

// window.onmouseup = e => handleOnUp(e);

// window.ontouchend = e => handleOnUp(e.touches[0]);

// window.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);


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
