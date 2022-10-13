let finger = document.querySelector('.vibr');
console.log("finger", finger)

function vibrFinger(ms) {
    navigator.vibrate(ms)
}