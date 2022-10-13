let btn = document.querySelector('.vibra');

function vibrate (e) {
    e.preventDefault();
    navigator.vibrate([300, 100, 300, 100]);
}

btn.addEventListener("touch", (e) => {
    e.preventDefault();
    vibrate()
}

)

function vibrFinger(ms) {
    window.navigator.vibrate(ms)
}