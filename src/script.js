var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = addZero(date.getDate()),
    months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
(document.getElementById("month").innerHTML = months[month]),
(document.getElementById("date").innerHTML = day);
document.getElementById("year").innerHTML = year;
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function newTime() {
    var d = new Date();
    var h = addZero(d.getHours());
    var ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var x = document.getElementById("hourminute");
    x.innerHTML = h + ":" + m + ":" + s + " " + ampm;
}
newTime();
setInterval(newTime, 1000);
const fullscreenButtonDiv = document.getElementById("fullscreenButtonDiv");
const enterFullscreenButton = document.getElementById("enterFullscreenButton");
const exitFullscreenButton = document.getElementById("exitFullscreenButton");
function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { 
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
enterFullscreenButton.addEventListener("click", function() {
    enterFullscreen();
});
exitFullscreenButton.addEventListener("click", function() {
    exitFullscreen();
});
document.addEventListener("fullscreenchange", handleFullscreenChange);
document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
document.addEventListener("mozfullscreenchange", handleFullscreenChange);
document.addEventListener("MSFullscreenChange", handleFullscreenChange);
function handleFullscreenChange() {
    if (document.fullscreenElement || document.mozFullScreenElement ||
        document.webkitFullscreenElement || document.msFullscreenElement) {
        enterFullscreenButton.style.display = "none";
        exitFullscreenButton.style.display = "block";
    } else {
        exitFullscreenButton.style.display = "none";
        enterFullscreenButton.style.display = "block";
    }
}
