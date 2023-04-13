const systemIcons = {
    bookmark: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.85388 5.75V20.75L12 15.1253L19.1461 20.75V5.75C19.1461 4.36929 18.0268 3.25 16.6461 3.25H7.35388C5.97317 3.25 4.85388 4.36929 4.85388 5.75Z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
</svg>
`,
    download: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 15.5625V18.0625C4.5 19.1671 5.39543 20.0625 6.5 20.0625H17.5C18.6046 20.0625 19.5 19.1671 19.5 18.0625V15.5625" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M12 3.9375V13.7079M7.40332 9.84356L12 14.4375L16.5967 9.84356" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
`,
    reload: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8336 6.16637C16.6147 4.94747 15.0446 4.14099 13.3439 3.86019C11.6431 3.5794 9.89713 3.83839 8.35112 4.6008C6.8051 5.36321 5.53673 6.59074 4.72415 8.11098C3.91156 9.63122 3.59558 11.3678 3.82058 13.0768C4.04558 14.7859 4.80026 16.3815 5.97862 17.6396C7.15699 18.8978 8.69984 19.7552 10.3905 20.0915C12.0812 20.4278 13.8347 20.226 15.4048 19.5146C16.975 18.8032 18.2828 17.6178 19.1447 16.125" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M21.25 9V4.41421C21.25 3.52331 20.1729 3.07714 19.5429 3.70711L17.25 6L14.9571 8.29289C14.3271 8.92286 14.7733 10 15.6642 10H20.25C20.8023 10 21.25 9.55228 21.25 9Z" fill="currentColor"/>
</svg>
`,
    upload: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 15.5625V18.0625C4.5 19.1671 5.39543 20.0625 6.5 20.0625H17.5C18.6046 20.0625 19.5 19.1671 19.5 18.0625V15.5625" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M12 14.4375V4.66713M7.40332 8.53144L12 3.9375L16.5967 8.53144" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
`,
    delete: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5901 1.55728H12.4099C12.802 1.55727 13.1476 1.55725 13.4337 1.58063C13.738 1.60548 14.0512 1.66107 14.3555 1.81614C14.8024 2.04384 15.1657 2.40717 15.3934 2.85406C15.5485 3.1584 15.6041 3.4716 15.6289 3.77583C15.6523 4.06193 15.6523 4.40749 15.6523 4.79959L15.6523 4.83807H21.125V6.58807H2.875V4.83807H8.34772L8.34772 4.79966C8.34771 4.40754 8.34769 4.06195 8.37107 3.77583C8.39592 3.4716 8.45151 3.1584 8.60658 2.85406C8.83428 2.40717 9.19761 2.04384 9.6445 1.81614C9.94884 1.66107 10.262 1.60548 10.5663 1.58063C10.8524 1.55725 11.198 1.55727 11.5901 1.55728ZM10.0977 4.83807H13.9023V4.83228C13.9023 4.39781 13.9016 4.12457 13.8847 3.91834C13.8687 3.72232 13.8426 3.66506 13.8342 3.64854C13.7742 3.53094 13.6786 3.43533 13.561 3.37541C13.5445 3.36699 13.4872 3.34083 13.2912 3.32481C13.085 3.30796 12.8118 3.30728 12.3773 3.30728H11.6227C11.1882 3.30728 10.915 3.30796 10.7088 3.32481C10.5128 3.34083 10.4555 3.36699 10.439 3.37541C10.3214 3.43533 10.2258 3.53094 10.1658 3.64854C10.1574 3.66506 10.1313 3.72232 10.1153 3.91834C10.0984 4.12457 10.0977 4.39781 10.0977 4.83228V4.83807Z" fill="currentColor"/>
<path d="M10.8975 17.0458V10.247H9.14746V17.0458H10.8975Z" fill="currentColor"/>
<path d="M14.8527 17.0458V10.247H13.1027V17.0458H14.8527Z" fill="currentColor"/>
<path d="M6.56153 18.3677V8.335H4.81152V18.4023C4.81151 18.9329 4.8115 19.3832 4.84168 19.7526C4.87335 20.1402 4.94256 20.5151 5.12488 20.873C5.40052 21.4139 5.84034 21.8537 6.3813 22.1294C6.73912 22.3117 7.11406 22.3809 7.50168 22.4126C7.87107 22.4428 8.32135 22.4427 8.85191 22.4427H15.148C15.6786 22.4427 16.1288 22.4428 16.4982 22.4126C16.8858 22.3809 17.2608 22.3117 17.6186 22.1294C18.1596 21.8537 18.5994 21.4139 18.875 20.873C19.0573 20.5151 19.1266 20.1402 19.1582 19.7526C19.1884 19.3832 19.1884 18.933 19.1884 18.4025V8.335H17.4384V18.3677C17.4384 18.9422 17.4377 19.3205 17.414 19.6101C17.3912 19.8895 17.3514 20.0085 17.3158 20.0785C17.2079 20.2902 17.0358 20.4623 16.8241 20.5701C16.7541 20.6058 16.6351 20.6456 16.3557 20.6684C16.0661 20.6921 15.6879 20.6927 15.1134 20.6927H8.88653C8.31203 20.6927 7.93379 20.6921 7.64418 20.6684C7.36479 20.6456 7.24579 20.6058 7.17579 20.5701C6.9641 20.4623 6.792 20.2902 6.68414 20.0785C6.64847 20.0085 6.6087 19.8895 6.58587 19.6101C6.56221 19.3205 6.56153 18.9422 6.56153 18.3677Z" fill="currentColor"/>
</svg>
`,
    settings: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8.125C9.8599 8.125 8.12501 9.8599 8.12501 12C8.12501 14.1401 9.8599 15.875 12 15.875C14.1401 15.875 15.875 14.1401 15.875 12C15.875 9.8599 14.1401 8.125 12 8.125Z" fill="black"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.125C11.2475 2.125 10.5137 2.20932 9.80782 2.36938C9.46743 2.44657 9.20547 2.71867 9.14126 3.06174L8.81921 4.78236C8.69229 5.46048 7.9905 5.86566 7.33976 5.63652L5.69061 5.05581C5.36177 4.94001 4.99556 5.03048 4.75847 5.2861C3.76486 6.35733 3.00537 7.65042 2.56289 9.08388C2.46005 9.41702 2.56481 9.77941 2.82952 10.0063L4.15897 11.1458C4.68278 11.5948 4.68278 12.4052 4.15897 12.8542L2.82952 13.9937C2.56481 14.2206 2.46005 14.583 2.56289 14.9161C3.00537 16.3496 3.76486 17.6427 4.75847 18.7139C4.99556 18.9695 5.36177 19.06 5.69062 18.9442L7.33976 18.3635C7.99049 18.1343 8.69229 18.5395 8.81921 19.2176L9.14126 20.9383C9.20547 21.2813 9.46743 21.5534 9.80783 21.6306C10.5137 21.7907 11.2475 21.875 12 21.875C12.7525 21.875 13.4863 21.7907 14.1922 21.6306C14.5326 21.5534 14.7945 21.2813 14.8587 20.9383L15.1808 19.2176C15.3077 18.5395 16.0095 18.1343 16.6603 18.3634L18.3094 18.9442C18.6383 19.06 19.0045 18.9695 19.2416 18.7139C20.2352 17.6426 20.9946 16.3496 21.4371 14.9161C21.54 14.583 21.4352 14.2206 21.1705 13.9937L19.841 12.8542C19.3172 12.4052 19.3172 11.5948 19.841 11.1458L21.1705 10.0063C21.4352 9.77941 21.54 9.41702 21.4371 9.08388C20.9946 7.65043 20.2352 6.35735 19.2416 5.28613C19.0045 5.03052 18.6383 4.94004 18.3094 5.05584L16.6603 5.63656C16.0095 5.86571 15.3077 5.46053 15.1808 4.7824L14.8587 3.06174C14.7945 2.71866 14.5326 2.44656 14.1922 2.36938C13.4863 2.20932 12.7525 2.125 12 2.125ZM10.5393 5.10431L10.7516 3.97019C11.1582 3.90755 11.575 3.875 12 3.875C12.425 3.875 12.8418 3.90755 13.2484 3.97019L13.4607 5.10435C13.785 6.83734 15.5785 7.87281 17.2415 7.28722L18.3289 6.90431C18.8503 7.55101 19.2743 8.27882 19.5791 9.06544L18.7022 9.81714C17.3635 10.9645 17.3635 13.0355 18.7022 14.1829L19.5791 14.9346C19.2743 15.7212 18.8503 16.449 18.3289 17.0957L17.2415 16.7128C15.5785 16.1272 13.785 17.1627 13.4607 18.8956L13.2484 20.0298C12.8418 20.0924 12.425 20.125 12 20.125C11.575 20.125 11.1582 20.0924 10.7516 20.0298L10.5393 18.8957C10.215 17.1627 8.42151 16.1272 6.75851 16.7128L5.67116 17.0957C5.14972 16.449 4.72568 15.7212 4.42087 14.9346L5.29785 14.1829C6.63648 13.0355 6.63648 10.9645 5.29785 9.81714L4.42087 9.06544C4.72568 8.2788 5.14972 7.55099 5.67116 6.90428L6.75851 7.28717C8.42151 7.87276 10.215 6.8373 10.5393 5.10431Z" fill="black"></path>
                            </svg>`,
};

const accentColors = [
    "red",
    "gold",
    "green",
    "turquoise",
    "blue",
    "magenta",
    "black",
];
function createAccentColorSelectionBlock() {
    const container = document.createElement("div");
    container.className = "accentColorSelectionCt";

    accentColors.forEach((color) => {
        const colorEl = document.createElement("input");
        colorEl.type = "radio";
        colorEl.name = "accentColor";
        colorEl.value = color;
        colorEl.style.background = `var(--${color}-accent)`;
        colorEl.className = "accentColorCircle";
        colorEl.setAttribute("data-color", accentColors.indexOf(color));
        container.append(colorEl);
        const index = accentColors.indexOf(color);

        if (getSettings().themeColor == index) {
            colorEl.checked = true;
        }

        colorEl.addEventListener("click", () => {
            settingsValues.themeColor = index;
            updateSettings();
        });
    });

    return container;
}

let settingsValues = {
    displayName: "",
    darkMode: false,
    backSpacing: true,
    mobileKeyboard: false,
    themeColor: 4,
    narrator: false,
    textSize: 17,
    boldText: false,
    capsLockNotif: true,
};

let stats;
const loadedStats = localStorage.getItem("userStats");
if (loadedStats) {
    stats = JSON.parse(loadedStats);
} else {
    stats = {
        bestVerse: 0, // Based on score.
        versesCompleted: 0,
        totalCharactersTyped: 0, // correct characters
        avgCPS: 0,
        gradebook: [
            // max grades: 10
            /* {
                date: new Date(),
                verse: '',
                grade: 0.0,
                incorrect: 0,
                avgCPS: 0
            } */
        ],
        troubleKeys: [
            /* {
                key: 'a',
                incorrectHistory: [3,4,0,2,6,0,0,1] //each are verses. number of how many times incorrect in a verse. every verse is here, including ones with 0 incorrect.
            } */
        ],
    };
    localStorage.setItem("userStats", JSON.stringify(stats));
}

const tkInp = document.querySelector(".touckKeyboardInp");

if (!localStorage.getItem("userSettings")) {
    localStorage.setItem("userSettings", JSON.stringify(settingsValues));
}

let random = Math.floor(Math.random() * randomVerses.length);

let verse = `${randomVerses[random].verse} `;
let reference = randomVerses[random].ref;

const refContainer = document.querySelector(".msgRef");
const verseContainer = document.querySelector(".msgText");

const verseSplit = verse.split("");
const refSplit = reference.split("");

const extract = (array, outputEl) => {
    array.forEach((char) => {
        let txt = char;
        let el = document.createElement("div");
        el.className = "character";
        if (char == " ") {
            txt = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity: .4;" class="spaceBarSymbol">
<path d="M2.75 10V13C2.75 13.8284 3.42157 14.5 4.25 14.5H19.75C20.5784 14.5 21.25 13.8284 21.25 13V10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
            el.style.paddingBottom = "5px";
        }
        el.innerHTML = txt;
        outputEl.append(el);
    });
};
extract(verseSplit, verseContainer);
extract(refSplit, refContainer);

const timer = {
    start: () => {
        timer.isOn = true;
        function advance() {
            if (timer.isOn) {
                setTimeout(() => {
                    if (timer.seconds == 59) {
                        timer.minutes++;
                        timer.seconds = 0;
                    } else {
                        timer.seconds++;
                    }
                    document.querySelector(
                        ".statTag.time > span"
                    ).textContent = `${timer.getTime()}`;
                    advance();
                }, 1000);
            }
        }
        advance();
    },
    pause: () => {
        timer.isOn = false;
    },
    reset: () => {
        timer.isOn = false;
        timer.seconds = 0;
        timer.minutes = 0;
    },
    seconds: 0,
    minutes: 0,
    isOn: false,
    getTime: () => {
        return `${timer.minutes}:${timer.seconds < 10 ? 0 : ""}${timer.seconds}`;
    },
};
let backspaceAllowed = true;
let incorrectChars = 0;
let charactersTyped = 0;
let keyboardLock = true;
let currentCt;
let currentChar = 0;

let countedKeys =
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()-=+-_`~[]\\|}{;':\"<>?/., ";
countedKeys = countedKeys.split("");

function startTyping(ct, array) {
    let activeCharNum = 0;
    currentCt = ct;
    document.title = `BiblePuzzle | ${reference}`;
    document.querySelector("footer #footerVerseRef").textContent = reference;
    ct.children[activeCharNum].classList.add("active");

    const cpsTest = {
        cps: 0,
        isSampling: undefined,
        allTests: [],

        stop: () => {
            cpsTest.isSampling = false;
            cpsTest.allTests.push(cps);
            console.log(cpsTest.allTests);
            cps = 0;
            cpsTest.isSampling = undefined;
            cpsTest.start();
        },
        start: () => {
            cpsTest.isSampling = true;
            if (cpsTest.isSampling == true) {
                setTimeout(() => {
                    cpsTest.stop();
                }, 1000);
            }
        },
        average: () => {
            let init = 0;
            const sum = cpsTest.allTests.reduce((prev, curr) => prev + curr, init);
            const mean = sum / cpsTest.allTests.length;

            return mean;
        },
    };
    let cps = 0;
    let allCps = [];
    let cpsSampleOver = undefined;
    window.onkeydown = (e) => {
        type(e);
    };
    tkInp.addEventListener("input", (e) => {
        type(e);
    });
    function type(e) {
        charactersTyped++;
        if (!keyboardLock) {
            if (cpsTest.isSampling == true) {
                cps++;
            }
            setTimeout(() => {
                cpsSampleOver = true;
                allCps.push(cps);
                console.log(cps);
                cps = 0;
                cpsSampleOver = false;
            }, 1000);
            if (activeCharNum == 0) {
                if (!timer.isOn) {
                    timer.start();
                    cpsTest.start();
                }
            }
            if (activeCharNum > 0) {
                ct.children[activeCharNum - 1].style.borderTopRightRadius = "0px";
                ct.children[activeCharNum - 1].style.borderBottomRightRadius = "0px";
                ct.children[activeCharNum].style.borderTopLeftRadius = "0px";
                ct.children[activeCharNum].style.borderBottomLeftRadius = "0px";
            }
            if (activeCharNum == array.length) {
                ct.children[activeCharNum - 1].style.borderTopRightRadius = "";
                ct.children[activeCharNum - 1].style.borderBottomRightRadius = "";
            }
            if (countedKeys.indexOf(e.key) > -1) {
                if (e.key == array[activeCharNum]) {
                    ct.children[activeCharNum].classList.add("correct");
                    ct.children[activeCharNum].classList.remove("active");
                    stats.totalCharactersTyped++;
                    updateStats();
                    activeCharNum++;
                    currentChar = activeCharNum;
                    if (activeCharNum !== array.length) {
                        ct.children[activeCharNum].classList.add("active");
                    }
                } else {
                    ct.children[activeCharNum].classList.add("incorrectChar");
                    ct.children[activeCharNum].classList.remove("active");
                    activeCharNum++;
                    incorrectChars++;
                    currentChar = activeCharNum;
                    document.querySelectorAll(".incorrect span")[0].textContent =
                        incorrectChars;
                    if (incorrectChars == 1) {
                        document.querySelectorAll(".incorrect span")[1].textContent = "";
                    } else {
                        document.querySelectorAll(".incorrect span")[1].textContent = "s";
                    }
                    if (activeCharNum !== array.length) {
                        ct.children[activeCharNum].classList.add("active");
                    }
                }
                // const d = document.createElement('div')
                try {
                    // from here
                    ct.children[activeCharNum - 5].scrollIntoView({
                        inline: "start",
                        behavior: "smooth",
                    });
                } catch (e) { }
            }
            if (activeCharNum == array.length) {
                if (ct == refContainer) {
                    completeTest();
                    stats.versesCompleted++;
                    updateStats();
                    keyboardLock = true;
                } else {
                    startTyping(refContainer, refSplit);
                }
            }
            if (e.key == "Backspace") {
                if (backspaceAllowed) {
                    if (activeCharNum > 0) {
                        activeCharNum--;
                        ct.children[activeCharNum].classList.remove("incorrectChar");
                        ct.children[activeCharNum].classList.add("active");
                        ct.children[activeCharNum].classList.remove("correct");
                        ct.children[activeCharNum + 1].classList.remove("active");
                        ct.children[activeCharNum - 1].style.borderTopRightRadius = "";
                        ct.children[activeCharNum - 1].style.borderBottomRightRadius = "";
                        ct.children[activeCharNum].style.borderTopRightRadius = "";
                        ct.children[activeCharNum].style.borderBottomRightRadius = "";
                        try {
                            ct.children[activeCharNum - 5].scrollIntoView({
                                inline: "start",
                                behavior: "smooth",
                            });
                        } catch (e) { }
                    }
                }
            }
            if (getSettings().capsLockNotif) {
                if (e.getModifierState("CapsLock")) {
                    document.querySelector(".capsLockWarning").style.display = "flex";
                } else {
                    document.querySelector(".capsLockWarning").style.display = "none";
                }
            }
        }
    }
}
let percent;

const popups = document.querySelector(".popups");
function askForName() {
    popups
        .querySelectorAll(".popup")
        .forEach((el) => (el.style.display = "none"));
    const namePopup = popups.querySelector("form.namePopup");
    namePopup.style.display = "";
    namePopup.addEventListener("submit", () => {
        keyboardLock = false;
        popups.style.display = "none";
        username = namePopup.querySelector("#playerName").value;
        document.querySelector("#playerNameOp").value = username;
        settingsValues.displayName = username;
        updateSettings();
    });
}
const preloadedUserName = getSettings().displayName;
let username = preloadedUserName;
if (!preloadedUserName) {
    askForName();
} else {
    settingsValues.displayName = preloadedUserName;
    popups.style.display = "none";
    keyboardLock = false;
}
/**
 *
 * @param {boolean} showOrHide true to show popup
 * @param {string} popupId query selector of the popup
 */
function showPopup(showOrHide, popupId) {
    popups
        .querySelectorAll(".popup")
        .forEach((el) => (el.style.display = "none"));
    popups.style.display = showOrHide == true ? "flex" : "none";

    popups.querySelector(popupId).style.display =
        showOrHide == true ? "flex" : "none";
}

function completeTest() {
    timer.pause();
    showPanel(true, "completion", true);
    const panelView = getPanelView("completion");
    panelView.style.display = "flex";

    const total = charactersTyped;
    percent = ((total - incorrectChars) / total) * 100;

    const time = timer.getTime();

    const scoreText = panelView.querySelector(".graph-content .score");
    const subscoreText = panelView.querySelector(".graph-content .subscore");

    subscoreText.innerHTML = `<span class="${Math.round(percent) >= 75
            ? "green"
            : Math.round(percent) >= 50
                ? "orange"
                : "red"
        }" style="font-weight: 600">${charactersTyped - incorrectChars
        }</span>/${charactersTyped}`;
    scoreText.textContent = `${Math.round(percent)}%`;

    stats.gradebook.unshift({
        date: new Date(),
        verse: reference,
        grade: Math.round(percent) / 100,
        incorrect: incorrectChars,
        avgCPS: 0,
    });
    if (stats.gradebook.length > 10) {
        stats.gradebook = stats.gradebook.slice(0, 10);
    }
    updateStats();

    const circle = panelView.querySelector("circle#chart-score");
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    function setProgress(pc) {
        const offset = circumference - (pc / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    setProgress(percent);

    const completeHeading = panelView.querySelector(".panelTitle");

    if (Math.round(percent) >= 75) {
        completeHeading.textContent = `Congratulations, you completed the test${username !== null ? ", " + username : ""
            }!`;
    } else if (Math.round(percent) < 75 && Math.round(percent) >= 50) {
        completeHeading.textContent = `Good job${username !== null ? ", " + username : ""
            }!`;
        circle.parentElement.classList.add("avg");
    } else {
        completeHeading.textContent = `Nice try${username !== null ? ", " + username : ""
            }!`;
        circle.parentElement.classList.add("low");
    }
    const verseMeta = panelView.querySelector(".verseDescription");

    const vGroup = document.createElement("div");
    vGroup.className = "verseTextGroup";
    const refLab = document.createElement("div");
    refLab.classList.add("panel-heading", "verseReferenceLb");
    refLab.append(document.createTextNode(reference));

    const verseLab = document.createElement("p");
    verseLab.append(document.createTextNode(verse));

    const imgGroup = document.createElement("div");
    imgGroup.className = "imgGroup";
    const img = document.createElement("img");
    img.src = randomVerses[random].imageURL;
    img.alt = reference;
    const cap = document.createElement("caption");
    cap.append(document.createTextNode(`Source: ${randomVerses[random].source}`));

    const addToJournalBtn = createButtonElement(
        "default",
        "Add to journal",
        systemIcons.bookmark
    );
    addToJournalBtn.classList.add("addToJournalBtn");

    imgGroup.append(img, cap);
    vGroup.append(refLab, verseLab, addToJournalBtn);

    // until implemented: coming soon
    addToJournalBtn.remove();

    const typingFinalStats = panelView.querySelector(".testStats");

    typingFinalStats.querySelector("#totalTime .cellVal").textContent = time;
    typingFinalStats.querySelector("#incChars .cellVal").textContent =
        incorrectChars;

    window.onresize = () => {
        checkChartSize();
    };
    function checkChartSize() {
        const graphSet = panelView.querySelector(".graph.score");

        graphSet.style.width = "100%";
        const size = graphSet.getBoundingClientRect();

        graphSet.style.height = size.width + "px";
    }

    verseMeta.append(imgGroup, vGroup);

    checkChartSize();
}

startTyping(verseContainer, verseSplit);

const darkTheme = () => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
};
const lightTheme = () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
};
function toggleDarkTheme() {
    if (document.body.classList.contains("dark")) {
        lightTheme();
        document.querySelector(".nightBtn").classList.remove("active");
    } else {
        darkTheme();
        document.querySelector(".nightBtn").classList.add("active");
    }
}
function clearProgress() {
    if (
        window.confirm(
            "Are you sure you want to clear your progress? You may get a different verse."
        ) == true
    ) {
        location.reload();
    }
}
function createModal(config) { }
createModal({
    title: "Hello, world",
    lightDismiss: true,
    content: `<p>Hello, world!</p>`,
});

let currentPanel;
/**
 *
 * @param {boolean} showPanel
 * @param {string} viewId
 * @param {boolean} lightDismiss
 */
function showPanel(showPanel, viewId, lightDismiss) {
    const panel = document.querySelector("main aside.panel-ct");

    panel.style.display = showPanel == true ? "block" : "none";

    if (viewId) {
        panel
            .querySelectorAll(".panel .panelView")
            .forEach((view) => (view.style.display = "none"));

        panel.querySelector(`.panelView#${viewId}`).style.display =
            showPanel == true ? "flex" : "none";

        if (showPanel == true) {
            currentPanel = viewId;
            keyboardLock = true;
        } else {
            currentPanel = "";
            keyboardLock = false;
        }

        panel.addEventListener("click", (e) => {
            if (lightDismiss) {
                if (
                    !document
                        .elementsFromPoint(e.x, e.y)
                        .includes(panel.querySelector(".panel"))
                ) {
                    panel.style.display = "none";
                    currentPanel = "";
                    keyboardLock = false;
                }
            }
        });
    }
}
/**
 * Returns a panel view
 * @param {string} viewId Panel view id
 * @returns {Element} The panel view element
 */
function getPanelView(viewId) {
    const panel = document.querySelector("main aside.panel-ct .panel");

    return panel.querySelector(`.panelView#${viewId}`);
}

function playAgain() {
    location.reload();
}

function showStats() {
    showPanel(true, "stats", true);
    loadStats();
}
function showHelpPanel() {
    showPanel(true, "help", true);
}
function showSettingsPanel() {
    showPanel(true, "settings", true);
}

document.querySelector(".toolbar .statsBtn").addEventListener("click", () => {
    const e = document.querySelector(".toolbar .statsBtn");
    if (e.classList.contains("active")) {
        showPanel(false, "stats");
        e.classList.remove("active");
    } else {
        e.classList.add("active");
        showPanel(true, "stats", true);
    }
});
document
    .querySelector(".toolbar .settingsBtn")
    .addEventListener("click", () => {
        const e = document.querySelector(".toolbar .settingsBtn");
        if (e.classList.contains("active")) {
            showPanel(false, "settings");
            e.classList.remove("active");
        } else {
            e.classList.add("active");
            showPanel(true, "settings", true);
        }
    });
document.querySelector(".toolbar .helpBtn").addEventListener("click", () => {
    const e = document.querySelector(".toolbar .helpBtn");
    if (e.classList.contains("active")) {
        showPanel(false, "help");
        e.classList.remove("active");
    } else {
        e.classList.add("active");
        showPanel(true, "help", true);
    }
});

function createButtonElement(style, text, icon) {
    /**@param {'primary'|'dangerous'|'default'|'actionButton'} style */

    const button = document.createElement("button");
    button.className = `btn${style !== "default" ? `-${style}` : ""}`;
    button.innerHTML = `
    ${icon ? icon : ""}
    ${text}
    `;
    return button;
}
// max 8 trouble keys. Minimum 2 mistakes to go onto trouble keys and the 8 highest ones are shown

const backupButton = createButtonElement(
    "default",
    "Create backup",
    systemIcons.download
);
const restoreButton = createButtonElement(
    "default",
    "Import data",
    systemIcons.upload
);
const resetButton = createButtonElement(
    "dangerous",
    "Reset all data",
    systemIcons.reload
);

const settingsModel = [
    {
        id: "personalization",
        name: "Personalization",
        settings: [
            {
                type: "input",
                title: "Display name",
                description:
                    "We will refer to you using your display name. Leave blank to disable.",
                value: "displayName",
            },
            {
                type: "toggle",
                title: "Dark mode",
                value: "darkMode",
            },
            {
                title: "Theme color",
                type: "etc",
                block: createAccentColorSelectionBlock(),
            },
        ],
    },
    {
        id: "typing",
        name: "Typing",
        settings: [
            {
                type: "toggle",
                title: "Allow backspacing",
                value: "backSpacing",
                description: "Enable for a more natural typing experience.",
            },
            {
                type: "toggle",
                title: "Touch keyboard",
                value: "mobileKeyboard",

                description: "Show touch keyboard button. Best for mobile users.",
            },
            {
                type: "toggle",
                title: "Caps lock warnings",
                value: "capsLockNotif",

                description: "Enable warnings when caps lock is on.",
            },
        ],
    },
    {
        id: "accessibility",
        name: "Accessibility",
        settings: [
            {
                type: "toggle",
                title:
                    'Narrator <div class="textTag beta" title="This feature is experimental and is still receiving updates and new features that may be unfinished.">Beta</div>',
                value: "narrator",

                description: "Give spoken feedback while typing.",
                optionsButton: () => showNarratorOptions(),
                hidden: true,
            },
            {
                type: "toggle",
                title: "Bold text",
                value: "boldText",
            },
            {
                type: "slider",
                title: "Text size",
                value: "textSize",
                min: 10,
                max: 30,
                minLabel: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 18.1374L8.46429 13.6314M8.46429 13.6314H15.5357M8.46429 13.6314L11.4741 6.72689C11.6815 6.25103 12.3185 6.25103 12.5259 6.72689L15.5357 13.6314M15.5357 13.6314L17.5 18.1374" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                maxLabel: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 19.207L7.82143 13.8816M7.82143 13.8816H16.1786M7.82143 13.8816L11.3785 5.72177C11.6236 5.15939 12.3764 5.15939 12.6215 5.72177L16.1786 13.8816M16.1786 13.8816L18.5 19.207" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                description:
                    "Adjust the text size of the keys for a more comfortable typing experience.",
            },
        ],
    },
    {
        id: "backupRestore",
        name: "Backup & Restore",
        settings: [
            {
                type: "button",
                title: "Export data",
                button: backupButton,
                description: "Save a backup file to import on another device.",
            },
            {
                type: "button",
                title: "Import data",
                button: restoreButton,
                description:
                    "If you have a backup, import it here to bring your grades and settings here.",
            },
            {
                type: "button",
                title: "Factory reset",
                button: resetButton,
                description: "Reset all data, including stats and settings.",
                dangerous: true,
            },
        ],
    },
];

const settingsPanel = getPanelView("settings");
settingsModel.forEach((category) => {
    const ctView = document.createElement("div");
    ctView.className = "panelGroup";
    ctView.classList.add(`${category.id}View`);
    ctView.innerHTML = `
    <div class="panelGroupTitle">${category.name}</div>
    `;

    category.settings.forEach((s) => {
        const setEl = document.createElement("div");
        setEl.className = "setting";

        let settingId = s.title.replaceAll(" ", "");

        setEl.id = settingId;

        if (s.type == "etc" || s.type == "input" || s.type == "slider") {
            setEl.classList.add("vertical");
        }
        setEl.innerHTML = `
            <div class="textGroup">
                <div class="settingTitle">${s.title}</div>
                <div class="settingDescription">${s.description}</div>
            </div>
        `;
        if (!s.description) setEl.querySelector(".settingDescription").remove();

        let valueEl;
        switch (s.type) {
            case "etc":
                valueEl = s.block;
                break;
            case (s.type = "button"):
                setEl.append(s.button);
                break;
            case "toggle":
                valueEl = document.createElement("div");
                valueEl.className = "toggleSwitch";

                if (getSettings()[s.value] == true) {
                    valueEl.classList.add("on");
                }
                valueEl.addEventListener("click", () => {
                    settingsValues[s.value] =
                        settingsValues[s.value] == true ? false : true;
                    if (settingsValues[s.value] == true) {
                        valueEl.classList.add("on");
                    } else {
                        if (valueEl.classList.contains("on")) {
                            valueEl.classList.remove("on");
                        }
                    }
                    updateSettings();
                });

                break;
            case "input":
                valueEl = document.createElement("input");
                valueEl.id = `${settingId}Input`;
                valueEl.type = "text";

                valueEl.value = getSettings()[s.value];

                valueEl.onchange = () => {
                    settingsValues[s.value] = valueEl.value;
                    updateSettings();
                };
                break;
            case "slider":
                valueEl = document.createElement("div");
                valueEl.className = "sliderCt";

                valueEl.innerHTML = `
                <div class="sliderMainCt">
                    <div class="sliderLabel minLabel">${s.minLabel}</div>
                    <input type="range" id="${settingId}Input" min="${s.min}" max="${s.max}">
                    <div class="sliderLabel maxLabel">${s.maxLabel}</div>
                </div>
                <input type="number" class="sliderValueSimInp">
                `;

                const valueElB = valueEl.querySelector('input[type="range"]');

                valueElB.value = getSettings()[s.value];
                valueElB.title = valueElB.value;

                valueElB.addEventListener("input", upd);

                function upd() {
                    settingsValues[s.value] = valueElB.value;
                    valueElB.title = valueElB.value;
                    valueEl.querySelector(".sliderValueSimInp").value = valueElB.value;
                    updateSettings();
                    updateSliders();
                }

                valueEl.querySelector(".sliderValueSimInp").min = s.min;
                valueEl.querySelector(".sliderValueSimInp").max = s.max;

                valueEl
                    .querySelector(".sliderValueSimInp")
                    .addEventListener("change", () => {
                        valueElB.value = valueEl.querySelector(".sliderValueSimInp").value;
                        updateSliders();
                        upd();
                    });

                valueEl.querySelector(".sliderValueSimInp").value = valueElB.value;
                break;
            default:
                console.error("invalid setting type");
                break;
        }
        if (valueEl) setEl.append(valueEl);

        if (s.optionsButton) {
            const optionsBtn = document.createElement("button");
            optionsBtn.className = "actionBtn";
            optionsBtn.innerHTML = systemIcons.settings;
            optionsBtn.title = "Options...";
            setEl.insertBefore(optionsBtn, valueEl);
            optionsBtn.addEventListener("click", s.optionsButton);
        }
        if (s.hidden) setEl.style.display = "none";

        ctView.append(setEl);
    });

    settingsPanel.append(ctView);
});

function updateSettings() {
    localStorage.setItem("userSettings", JSON.stringify(settingsValues));

    checkSettings();
}
const tkBtn = document.querySelector(".touchKeyboardBtn");
function getSettings() {
    return JSON.parse(localStorage.getItem("userSettings"));
}
function checkSettings() {
    document.body.style.setProperty(
        "--accent",
        `var(--${accentColors[getSettings().themeColor]}-accent)`
    );

    if (getSettings().darkMode == true) {
        darkTheme();
    } else {
        lightTheme();
    }

    if (getSettings().mobileKeyboard == true) {
        tkBtn.style.display = "flex";

        tkBtn.addEventListener("click", () => {
            tkInp.focus();
        });

        tkInp.addEventListener("input", () => {
            try {
                currentCt.children[currentChar - 5].scrollIntoView({
                    inline: "start",
                    behavior: "smooth",
                });
            } catch (e) { }
        });
    } else {
        tkBtn.style.display = "none";
    }

    backspaceAllowed = getSettings().backSpacing;
    document
        .querySelector("main")
        .style.setProperty("--text-size", getSettings().textSize + "px");

    if (getSettings().boldText) {
        document.querySelector("main").classList.add("boldTextEnabled");
    } else {
        document.querySelector("main").classList.remove("boldTextEnabled");
    }
}
function updateStats() { }

checkSettings();

const verseBtn = document.querySelector("#footerVerseRef");
verseBtn.addEventListener("click", function (evt) {
    let throttle = false;

    if (!throttle && evt.detail === 3) {
        showPopup(true, ".verseListPopup");
        throttle = true;
        setTimeout(function () {
            throttle = false;
        }, 1000);
    }
});

const verseList = document.querySelector(".pverseList");
for (let vx of randomVerses) {
    const vxItem = document.createElement("li");
    vxItem.className = "verseListItem";
    verseList.append(vxItem);
    vxItem.innerHTML = `
    <img src="${vx.imageURL}" class="verseListImg" alt="${vx.ref}">
    <div class="verseTD">
            <div class="verseListItTitle">${vx.ref}</div>
            <div class="verseListItMain">${vx.verse}</div>
        </div>
        <button class="addToJournalBtn actionBtn">${systemIcons.bookmark}</button>
        `;
}
document.querySelector(".nameArea").addEventListener("click", function (evt) {
    let throttle = false;

    if (!throttle && evt.detail === 7) {
        toggleDeveloperMode(true);
        throttle = true;
        setTimeout(function () {
            throttle = false;
        }, 1500);
    }
});
function toggleDeveloperMode(onOrOff) {
    if (onOrOff == true) {
        if (sessionStorage.getItem("developerMode") == "true") {
            alert("Developer mode is already on.");
        } else {
            sessionStorage.setItem("developerMode", "true");
            alert(
                "Developer mode has been enabled.\nWarning: This tool is intended for developer use only and only use if you know what you're doing."
            );
        }
    } else {
        sessionStorage.removeItem("developerMode");
        alert("Developer mode has been disabled. Reload to take effect.");
    }
}
if (sessionStorage.getItem("developerMode") == "true") {
    document.querySelector(
        ".nameArea"
    ).innerHTML += `<div class="textTag dev">DEV</div>`;
}

window.addEventListener("keyup", (e) => {
    if (sessionStorage.getItem("developerMode") == "true") {
        if (e.key == "/") {
            document.querySelector(".developerPanel").style.display = "flex";
            document.querySelector(".devCmdInput").focus();
            document.querySelector(".devCmdInput").value = "/";
        }
    }
});
function updateSliders() {
    document.querySelectorAll('input[type="range"]').forEach((slider) => {
        function updateSlider() {
            const valPercent =
                (slider.value / (slider.max - slider.min)) * 100 -
                (slider.min == 10 ? 50 : 0);
            slider.style.setProperty(
                "background",
                `linear-gradient(to right, var(--accent) ${valPercent}%, var(--slider-bg) ${valPercent}%)`,
                "important"
            );
        }
        slider.addEventListener("input", updateSlider);
        updateSlider();
    });
}
updateSliders();

function showNarratorOptions() {
    console.log("test");
}
function updateStats() {
    localStorage.setItem("userStats", JSON.stringify(stats));
    loadStats();
}
function loadStats() {
    document.querySelector(".versesCompCol .lgColumnValue").textContent =
        stats.versesCompleted;
    document.querySelector(".totalCharsTypedLb").textContent =
        stats.totalCharactersTyped;

    const overallGrade = Math.round(
        stats.gradebook.reduce((a, c) => a + c.grade * 100, 0) /
        stats.gradebook.length
    );
    document.querySelector(
        ".overallGradeCol .lgColumnValue"
    ).innerHTML = `${overallGrade}% <span style="color: var(--text-${overallGrade >= 80 ? "green" : overallGrade >= 50 ? "orange" : "red"
        })">(${calculateGradeLetter(overallGrade)})</span>`;

    document.querySelector(
        ".gradebookVerses .lgColumnValue"
    ).textContent = `${stats.gradebook.length}/10`;

    document.querySelectorAll(".gradeTable > tr").forEach((el) => el.remove());
    stats.gradebook.forEach((grade) => {
        const date = new Date(grade.date);
        const tr = document.createElement("tr");
        tr.innerHTML = `<td title="${date.toLocaleTimeString([], {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        })}">${date.toLocaleDateString()}</td>
                                    <td>${grade.verse}</td>
                                    <td>${grade.grade * 100
            }% (<span style="color: var(--text-${grade.incorrect == 0 ? "green" : "red"
            })">-${grade.incorrect}</span>)</td>`;
        document.querySelector(".gradeTable").append(tr);
    });
    document.querySelector(
        ".btn.showGradingInfo"
    ).title = `The grade shows how well you completed the test, using the grading scale below.
90% - Excellent
80% - Good
60% - Fair
40% - Poor
Under 40% - Faulty`;
}
loadStats();

function calculateGradeLetter(prompt) {
    let letter;
    if (prompt >= 90) letter = "Excellent";
    else if (prompt >= 80) letter = "Good";
    else if (prompt >= 60) letter = "Fair";
    else if (prompt >= 40) letter = "Poor";
    else letter = "Faulty";
    return letter;
}
