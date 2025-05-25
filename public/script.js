const audioSrc = `data:audio/mpeg;base64,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Zt2ZBcDHgkXiPCgEkOaUFMbbxhdJ6twZMXJlMJaXBcD/84Rk7A0kXRAAd9hgEKjGOBDW0nDvXlQakctsRqtZ1zDO5aNf0ltfT/////u+7/////DnbClTFe8w2GzgKTCCcQhwUBWFv8xGtXp70MSCH24VIbiTdEyTFgQzXVGQEvKy5UrW49PjgN0/WPD3TtuxPoEboVVaIFCbIGFQuZucK5UYyyyakVZZACrntTdTTj67G3TpS2EgKvwAiAqB88dmzFRTNIT3EvC4amDDYLW7DU7GGvt0lFLYv6ysDhKUc///84Rk6wv0bRAAb7lgD/CyNAjm2Dn/////////6P2/Rt/S2JWoRgEVJp9hnBhWMIgglAKnCXS8mZv46863kQZi76RbahwFRAU0S3Hm4cxCJx0mjGXCcZSp5x0GocHSqzAUVqvpJoYDWSv//////////+nX2/Tsk4bHgSm+YEOJpOeGVAEysbHAipn1dnrV0qn4SujbD3ICyACRKYRgAYUjEZXwEYoi0CQKDghWGyeNfC6olRPK7mEdq9lf0+IZWCj/84Rk9gr8XxQAY5gMFUi+KADmXuA5X/f////////V3eZ///vf0UPVXa+FwTAAJGtqOhAWBgNo/K8bk6zZIrIV6LuW08DO6RAIvEZARwTCYbDOipDAEWguoRJDLq4UwflKEokk1W3R5s8X6641QshP79/////////+n/3/r//6VWRULUkARviZg0PiRIWnRyxRok78Po2Vs0qXUxZM9JgMEy4IqHA4NM3zzpgpKYKCgcAtSX44jLXBhyQ9oaxGihj/84Rk9At8XRAAcx0YFdjGKADuGOBK6/ZNj///////////27v///5OUp7iQRuYbDIYTDIUACrO1h63Ed5lTePa9jOGWuSy9YcYAtS4RgaYAAqcYm2DncEFgj2Qmug1180aMOQVGyJpCiaMOYwTOd////////2f/+/9/9VulX1AIDQMA7KgARjFmGGF2C2YPgNwYC24w6BKXnGADUBRgFAHGAeAStRS8wCwBwsBaguYCABpgOgGmA8AsYDIPhgwBGn/84Rk6wpYaRIAc2YeFTC2KADuUuCBG1OYF4EZjVBmix4HJjzIMGDAhrAXBLic94W5O9LFUb0Wsx2ba1GY1H6a5nP///8785/8F//oT//oT85HX+pv//qd+ef/yN6n//////AR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`;

const
    timerButtons = document.querySelectorAll(".timer-buttons button"),
    startTimer = document.getElementById("start-pause-timer"),
    resetTimer = document.getElementById("reset-timer"),
    timerDisplay = document.getElementById("display"),
    tabs = document.querySelectorAll(".tab"),
    timerButtonsParent = document.getElementById("timer-buttons"),
    timeInput = document.getElementById("time-input"),
    timerProgress = document.getElementById("timer-progress");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

let 
    stopwatchInt = null,
    timerInt = null,
    isActive = false,
    selectedTab = 0;

let setTime = 0,
    timerStartingTime = 0,
    selectTime = false,
    timerRunningTime = 0,
    timerDisplayProgress = 0,
    inputTime = 0,
    lastTimeInput = 0,
    isPaused = false,
    audioBeep = new Audio();

audioBeep.src = audioSrc;
hrToMs = 1000 * 60 * 60;
mToMs = 1000 * 60;
sToMs = 1000;

const root = document.documentElement;
const styles = getComputedStyle(root);
// Example: styles.getPropertyValue("--variable");

resetTimer.addEventListener("click", reset);

startTimer.addEventListener("click", () => {
    toggleStopTimer();
});

function toggleStopTimer() {
    if (isPaused && timerStartingTime <= 0) isPaused = false;
    else if (isActive && timerStartingTime > 0) isPaused = true;

    isActive = !isActive;

    let totalInMs = (hours * hrToMs) + (minutes * mToMs) + (seconds * sToMs);
    if (!isPaused) {
        timerStartingTime = totalInMs;
    }

    if (totalInMs <= 0 && !isActive) {
        reset();
        return;
    }

    if (selectedTab === 0) updateStopwatch();
    else if (selectedTab === 1 && (totalInMs > 0 || selectTime)) updateTimer();

    if (!(totalInMs > 0) && selectedTab === 1) isActive = false;
}

function updateTimer() {
    if (isActive) {
        startTimer.textContent = "Pause";

        if (timerInt != null) clearInterval(timerInt);

        if (!isPaused) {
            timerRunningTime = 0;
        }

        timerInt = setInterval(displayTimer, 10);
    } else {
        startTimer.textContent = "Start";

        clearInterval(timerInt);
    }
}

function updateStopwatch() {
    if (isActive) {
        startTimer.textContent = "Pause";

        if (stopwatchInt != null) clearInterval(stopwatchInt);

        stopwatchInt = setInterval(updateSetTime, 10);
        document.addEventListener("keypress", function (e) {
            if (e.key == "m") {
                minutes += 1;
            }
        })
    } else {
        startTimer.textContent = "Start";

        clearInterval(stopwatchInt);
    }
}

function updateSetTime() {
    if (hours + minutes + seconds > 0 && !isActive) {
        timerProgress.style.transition = "width 0.5s ease";
        timerProgress.style.width = "100%";
    } else {
        timerProgress.style.transition = "none";
    }

    if (selectedTab == 0) {
        milliseconds += 10;

        ({ hours, minutes, seconds, milliseconds } = normalizeTimer(hours, minutes, seconds, milliseconds));
    }

    let h = hours ?? "00";
    h = String(h).padStart(2, "0");
    let m = minutes ?? "00";
    m = String(m).padStart(2, "0");
    let s = seconds ?? "00";
    s = String(s).padStart(2, "0");
    let ms = milliseconds ?? "00";
    ms = String(ms / 10).padStart(2, "0");
    timerDisplay.textContent = `${h}:${m}:${s}`;
    if (selectedTab == 0) {
        timerDisplay.textContent = h != "00" ? `${h}:${m}:${s}` : `${m}:${s}.${ms}`;
    }
}

function displayTimer() {
    timerRunningTime += 10;

    timerProgress.style.transition = "none";
    let progressTime = (hours * hrToMs) + (minutes * mToMs) + ((seconds * sToMs) - timerRunningTime);
    let progress = (((progressTime) / timerStartingTime) * 100);
    timerProgress.style.width = `${progress}%`;

    if (timerRunningTime < 1000) return;
    timerRunningTime -= 1000;

    let totalInMs = (hours * hrToMs) + (minutes * mToMs) + (seconds * sToMs);

    if (totalInMs <= -1000 * 10) {
        isActive = false;
        updateStopwatch();
        updateTimer();

        [milliseconds, seconds, minutes, hours] = [0, 0, 0];
        timerDisplay.textContent = "00:00:00";
        return;
    }

    seconds -= 1;
    if (seconds < 0) {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        }

        if (minutes <= 0 && hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        }
    }

    if (totalInMs <= 1000 && (totalInMs / sToMs) % 2 !== 0) {
        audioBeep.play();
        timerDisplay.style.opacity = 1;
        timerDisplay.textContent = `00:00:00`;
        isPaused = false;
    } else if (totalInMs <= 1000) timerDisplay.style.opacity = 0.25;
    else updateSetTime();
}

function reset() {
    isActive = false;
    updateStopwatch();
    updateTimer();

    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    isPaused = false;

    timerDisplay.textContent = selectedTab === 0 ? "00:00.00" : "00:00:00";
    timerDisplay.style.opacity = 1;
    timerProgress.style.transition = "none";
    timerProgress.style.width = 0;
}

for (let element of timerButtons) {
    element.addEventListener("click", () => {
        if (isActive) return;
        let value = element.value;
        let [newS, newM, newH] = [0, 0, 0];

        newH = value >= hrToMs ? Math.floor(value / hrToMs) : 0;
        value -= newH * hrToMs;
        newH += hours

        newM = value >= mToMs ? Math.floor(value / mToMs) : 0;
        value -= newM * mToMs;
        newM += minutes;

        newS = value >= sToMs ? Math.floor(value / sToMs) : 0;
        newS += seconds;

        hours = newH;
        minutes = newM;
        seconds = newS;

        ({ hours, minutes, seconds, milliseconds } = normalizeTimer(hours, minutes, seconds, milliseconds));

        updateSetTime();
    });
};

timerDisplay.addEventListener("click", () => {
    if (selectedTab !== 1) return;
    selectTime = true;
    if (isActive) toggleStopTimer();
    [hours, minutes, seconds] = [0, 0, 0];
    timeInput.focus();

    timerDisplay.style.opacity = "0.75";

    timeInput.value = `${hours}${minutes}${seconds}`;
    lastTimeInput = timeInput.value;
});

document.addEventListener("click", (event) => {
    if (selectTime && !timerDisplay.contains(event.target)) {
        selectTime = false;
        timerDisplay.style.opacity = "1";

        ({ hours, minutes, seconds, milliseconds } = normalizeTimer(hours, minutes, seconds, milliseconds));

        updateSetTime();
    }
});

timeInput.addEventListener("input", () => {
    if (!selectTime) return;
    const key = timeInput.value.slice(timeInput.value.length - 1);
    let newTime = timeInput.value;

    newTime = String(newTime).padStart(6, "0");

    seconds = newTime.slice(newTime.length - 2);
    minutes = newTime.slice(newTime.length - 4, newTime.length - 2);
    hours = newTime.slice(newTime.length - 6, newTime.length - 4);

    seconds = parseInt(seconds) ?? 0;
    minutes = parseInt(minutes) ?? 0;
    hours = parseInt(hours) ?? 0;

    updateSetTime();

    lastTimeInput = timeInput.value;
});

function normalizeTimer(h, m, s, ms) {
    if (ms >= 1000) {
        s += Math.floor(ms / 1000);
        ms %= 1000;
    }

    if (s >= 60) {
        if (m >= 59 && h >= 99) s = 59;
        else {
            m += Math.floor(s / 60);
            s %= 60;
        }
    }

    if (m >= 60) {
        if (h >= 99) m = 59;
        else {
            h += Math.floor(m / 60);
            m %= 60;
        }
    }

    if (h > 99) {
        h = 99;
        m = 59;
        s = 59;
    }

    return { hours: h, minutes: m, seconds: s, milliseconds: ms };
}

// Toggle between tabs
tabs.forEach((element, index) => {
    element.addEventListener("click", () => {
        if (index === selectedTab) return;

        showTab(index);

        reset();
    });
});

function showTab(index) {
    selectedTab = index;

    tabs.forEach(el => el.classList.remove("selected"));
    tabs[index].classList.add("selected");

    timerButtonsParent.style.visibility = "hidden";
    timerDisplay.style.opacity = 1;
    timerProgress.style.visibility = "hidden";

    if (selectedTab === 0) {
        timerDisplay.style.borderBottom = "2px solid transparent";
    } else {
        timerButtonsParent.style.visibility = "visible";
        timerDisplay.style.borderBottom = "2px solid rgba(240, 249, 255, 0.5)";
        timerProgress.style.visibility = "visible";
    }
}

document.addEventListener("DOMContentLoaded", showTab(selectedTab));

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}