function helloAmy() {
    document.getElementById("hilol").animate([
        // keyframes
        { opacity: 0 },
        { opacity: 100 }
    ], {
        // timing options
        duration: 420,
        iterations: 1
    });
    document.getElementById("hilol").style.opacity = 1;
}