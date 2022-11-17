const clock = document.getElementById ("clock");

// new Date.getHours() --> Gets time (hour)

function getClock () {
    const date = new Date();
    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `Right now, you're at ${hh}:${mm}:${ss}`;
}
//padStart --> padStart(how long the number should be, "puts this number in front if it is shorter than it should be")

getClock();
setInterval(getClock, 1000);
// 1000 ms = 1 s