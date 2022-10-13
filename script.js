let btn = document.querySelector('.vibra');

function vibrate (e) {
    e.preventDefault();
    window.navigator.vibrate([300, 100, 300, 100]);
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    vibrate()
})
