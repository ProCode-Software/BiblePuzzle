/**
 * @requires verses.js
 */
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
    showSpeed: true,
};
/**
 * @typedef {Object} TypingStats
 * @property {number} bestVerse - The index of the highest-scoring verse.
 * @property {number} versesCompleted - The number of verses completed.
 * @property {number} totalCharactersTyped - The total number of correct characters typed.
 * @property {number} avgCPS - The average number of correct characters typed per second.
 * @property {Array<{ date: Date, verse: string, grade: number, incorrect: number, avgCPS: number }>} gradebook - An array of objects representing completed verses.
 * @property {Object.<string, Number[]>} troubleKeys - The user's trouble keys.
 */

/**
 * The object representing typing statistics.
 * @type {TypingStats}
 */
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
        troubleKeys: {}
    };
    localStorage.setItem("userStats", JSON.stringify(stats));
}
let theme;
let loadedTheme = localStorage.getItem("userTheme");
if (loadedTheme) {
    theme = JSON.parse(loadedTheme);
}
/* Journal object
{
    name: "My journal",
    created: Date,
    items: [
        {
            type: "verse",
            verse: "John 3:16",
            note: "My note", // null if none
        },
        {
            type: "note",
            text: "God <i>loves</i> us", // in HTML
            color: 0
        }
    ]
}
*/
/**
 * Represents a journal.
 * @typedef {Object} Journal
 * @property {string} name - The name of the journal.
 * @property {Date} created - The creation date of the journal.
 * @property {Array.<JournalItem>} items - The list of journal items.
 */
/**
 * Represents an item in a journal.
 * @typedef {Object} JournalItem
 * @property {string} type - The type of the journal item, either "verse" or "note".
 * @property {RandomVerse} [verse] - The verse related to the journal item, applicable only if the type is 'verse'.
 * @property {string} [note] - The note related to the journal item, applicable only if the type is 'verse'.
 * @property {Date} [dateCreated] - The creation date of the journal item.
 * @property {string} [text] - The text related to the journal item, applicable only if the type is 'note'.
 * @property {number} [color] - The color of the journal item, applicable only if the type is 'note'.
 */

/**
 * The user's journal
 * @type {Journal}
 */
let journal;
let loadedJournal = localStorage.getItem("userJournal");
if (loadedJournal) {
    journal = JSON.parse(loadedJournal);
}

const tkInp = document.querySelector(".touckKeyboardInp");

if (!localStorage.getItem("userSettings")) {
    localStorage.setItem("userSettings", JSON.stringify(settingsValues));
}

let random = Math.floor(Math.random() * randomVerses.length);

const toolbarTags = ['settings', 'stats', 'journal', 'reset', 'help'].reverse()
let tagIndex = 0
toolbarTags.forEach(tag => {
    const tl = document.createElement('li')
    tl.className = 'toolbarItem'
    const titles = ['BiblePuzzle settings', 'Your stats', 'Journal', 'Clear progress', 'BiblePuzzle help & tutorial'].reverse()
    const icons = ['settings', 'stats', 'bookmarks', 'reload', 'help'].reverse()
    const title = titles[tagIndex]
    const btn = document.createElement('button')
    btn.classList.add('actionBtn', `${tag}Btn`)
    btn.title = title
    btn.innerHTML = systemIcons[icons[tagIndex]]

    tl.append(btn)
    document.querySelector('ul.toolbar').append(tl)

    tagIndex++
})

let verse = `${randomVerses[random].verse} `;
let reference = randomVerses[random].ref;
let verseRaw = randomVerses[random]

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
let incorrectKeysList = {}
let startTime
let warnWhenClose = true

let countedKeys =
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()-=+-_`~[]\\|}{;':\"<>?/., ";
countedKeys = countedKeys.split("");

function startTyping(ct, array) {
    let activeCharNum = 0;
    currentCt = ct;
    document.title = `BiblePuzzle | ${reference}`;
    document.querySelector("footer #footerVerseRef").textContent = reference;
    ct.children[activeCharNum].classList.add("active");

    window.onkeydown = (e) => {
        type(e);
    };
    tkInp.addEventListener("input", (e) => {
        type(e);
    });
    function type(e) {
        charactersTyped++;
        if (!keyboardLock) {
            if (activeCharNum == 0) {
                if (!timer.isOn) {
                    if (!e.ctrlKey && !e.altKey && !e.metaKey) {
                        timer.start();
                        startTime = new Date().getTime()
                    }
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
                if (!e.ctrlKey && !e.altKey && !e.metaKey) {
                    if (e.key == array[activeCharNum]) { //correct
                        ct.children[activeCharNum].classList.add("correct");
                        ct.children[activeCharNum].classList.remove("active");
                        stats.totalCharactersTyped++;
                        updateStats();
                        activeCharNum++;
                        currentChar = activeCharNum;
                        if (activeCharNum !== array.length) {
                            ct.children[activeCharNum].classList.add("active");
                        }
                    } else { //incorrect
                        ct.children[activeCharNum].classList.add("incorrectChar");
                        ct.children[activeCharNum].classList.remove("active");
                        if (incorrectKeysList[array[activeCharNum]]) {
                            incorrectKeysList[array[activeCharNum]]++
                        } else {
                            incorrectKeysList[array[activeCharNum]] = 1
                        }
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

    addEventListener('beforeunload', (event) => {
        if (activeCharNum > 0 && !keyboardLock && warnWhenClose) {
            event.preventDefault();
            return (event.returnValue = '');
        }
    }, { capture: true })
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

function calculateCPS() {
    const endTime = new Date().getTime()
    const elapsedTime = (endTime - startTime) / 1000;
    const cps = charactersTyped / elapsedTime;
    return cps;
}

function completeTest() {
    timer.pause();
    showPanel(true, "completion", true);
    const panelView = getPanelView("completion");
    panelView.style.display = "flex";

    const total = charactersTyped;
    percent = ((total - incorrectChars) / total) * 100;

    const time = timer.getTime();
    const avgCPS = Math.round(calculateCPS() * 10) / 10

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
        grade: Math.round(Math.round(percent) / 100),
        incorrect: incorrectChars,
        avgCPS: avgCPS,
    });
    if (stats.gradebook.length > 10) {
        stats.gradebook = stats.gradebook.slice(0, 10);
    }

    Object.keys(stats.troubleKeys).forEach(k => {
        const key = stats.troubleKeys[k]
        key.push(incorrectKeysList[k] ? incorrectKeysList[k] : 0)
    })
    Object.keys(incorrectKeysList).forEach(k => {
        if (!stats.troubleKeys[k]) {
            stats.troubleKeys[k] = []
            stats.troubleKeys[k].push(incorrectKeysList[k])
        }
    })
    updateStats();

    /* {
                key: 'a',
                incorrectHistory: [3,4,0,2,6,0,0,1] //each are verses. number of how many times incorrect in a verse. every verse is here, including ones with 0 incorrect.
            } */
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

    addToJournalBtn.onclick = () => {
        addVerseToJournal(verseRaw)
    }

    const typingFinalStats = panelView.querySelector(".testStats");

    typingFinalStats.querySelector("#totalTime .cellVal").textContent = time;
    typingFinalStats.querySelector("#incChars .cellVal").textContent =
        incorrectChars;
    typingFinalStats.querySelector("#avgCPS .cellVal").textContent = avgCPS

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
    } else {
        darkTheme();
    }
}
function clearProgress() {
    confirmModal('Reset progress?',
        'Are you sure you want to clear your progress? You may get a different verse.',
        'Reset', 'resetModal', true,
        ['submit', ['btn-dangerous']])
        .then(c => { if (c == true) { warnWhenClose = false; location.reload() } })
}
/**
 * @typedef ModalConfig
 * @property {string} title
 * @property {boolean} lightDismiss
 * @property {string} content
 * @property {function} settingsButton
 * @property {function} linkButtonAction
 * @property {string} linkButtonText
 * @property {string} cancelButtonText
 * @property {string} confirmButtonText
 * @property {string} id
 * @property {boolean} isForm
 * @property {function} onCancel
 * @property {function} onSubmit
 * @property {['submit'|'cancel', string[]]} buttonClasses
 */
/**
 * Creates a modal
 * @param {ModalConfig} config 
 */
function createModal(config) {
    const popup = document.createElement(config.isForm ? 'form' : 'div')
    if (config.isForm) popup.action = 'javascript:void(0)'
    popup.classList.add('popup', config.id)
    popup.innerHTML = `
    <div class="popup-header">
                <div class="popup-title">${config.title}</div>
                <div class="sideButtons">
                ${config.settingsButton ? `<button class="actionBtn popupSettingsTopBtn">${systemIcons.settings}</button>` : ''}
                    <button class="closeBtn btn actionBtn">
                        <svg width="24" height="24"
                            viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.38128 17.3812L4.76256 17.9999L6 19.2374L6.61872 18.6186L5.38128 17.3812ZM18.6187 6.61872L19.2374 6.00001L18 4.76256L17.3813 5.38128L18.6187 6.61872ZM6.61872 5.38128L6 4.76256L4.76256 6L5.38128 6.61872L6.61872 5.38128ZM17.3813 18.6186L18 19.2374L19.2374 17.9999L18.6187 17.3812L17.3813 18.6186ZM6.61872 18.6186L12.6187 12.6187L11.3812 11.3812L5.38128 17.3812L6.61872 18.6186ZM12.6187 12.6187L18.6187 6.61872L17.3813 5.38128L11.3812 11.3812L12.6187 12.6187ZM5.38128 6.61872L11.3812 12.6187L12.6187 11.3812L6.61872 5.38128L5.38128 6.61872ZM11.3812 12.6187L17.3813 18.6186L18.6187 17.3812L12.6187 11.3812L11.3812 12.6187Z"
                                fill="black" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="popup-body">
            ${config.content}
            </div>
            <div class="popup-footer">
                <div class="sideAction">
                    ${config.linkButtonAction ? `<a class="linkButton">${config.linkButtonText}</a>` : ''}
                </div>
                <div class="btnActions">
                    <button
                        class="btn popupCancelBtn">${config.cancelButtonText ? config.cancelButtonText : 'Cancel'}</button>
                    <button type="submit"
                        class="btn-primary popupSubmitBtn">${config.confirmButtonText ? config.confirmButtonText : 'OK'}</button>
                </div>
            </div>
    `
    popup.querySelector('.popupCancelBtn').addEventListener('click', () => {
        showPopup(false, '.' + popup.classList[1])
        if (config.onCancel) config.onCancel()
    })
    popup.querySelector('.popupSubmitBtn').addEventListener('click', () => {
        showPopup(false, '.' + popup.classList[1])
        if (config.onSubmit) config.onSubmit()
    })
    popup.querySelector('.closeBtn').addEventListener('click', () => {
        showPopup(false, '.' + popup.classList[1])
        if (config.onCancel) config.onCancel()
    })
    if (config.settingsButton) popup.querySelector('.popupSettingsTopBtn').addEventListener('click', config.settingsButton)
    if (config.linkButtonAction) {
        popup.querySelector('.linkButton').onclick = config.linkButtonAction
        popup.querySelector('.linkButton').href = '#'
    }
    if (config.lightDismiss) {
        popups.addEventListener('click', (e) => {
            if (e.target == popups) {
                showPopup(false, '.' + popup.classList[1])
                if (config.onCancel) config.onCancel()
            }
        })
    }
    // ['submit'|'cancel', [clsList]]
    if (config.buttonClasses) {
        config.buttonClasses[1].forEach(cls => {
            popup.querySelector(`.popup${capitalize(config.buttonClasses[0])}Btn`).classList.add(cls)
        })
    }
    document.querySelector('.popups').append(popup)
    return popup
}
/* createModal({
    title: "Hello, world",
    lightDismiss: true,
    content: `<p>Hello, world!</p>`,
    settingsButton: () => alert('Hello, wordl!'),
    linkButtonAction: () => alert('Hello, wordl! 0.2'),
    linkButtonText: 'Click me',
    cancelButtonText: 'Go back',
    confirmButtonText: 'Let\'s go',
    id: 'myPopup',
    isForm: true,
    onCancel: () => alert('Hello, cssn!'),
    onSubmit: () => alert('Hello, me s!')
}); */

let currentPanel;
/**
 *
 * @param {boolean} showPanel
 * @param {string} viewId
 * @param {boolean} lightDismiss
 */
function showPanel(showPanel, viewId, lightDismiss) {
    //stats settings help
    const toolbarTag = ['stats', 'settings', 'help', 'journal']
    const panel = document.querySelector("main aside.panel-ct");

    panel.style.display = showPanel == true ? "block" : "none";
    checkIfOpen()

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

        checkIfOpen()

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
                    checkIfOpen()
                }
            }
        });
    }
    function checkIfOpen() {
        toolbarTag.forEach(tag => {
            const panelViewF = panel.querySelector(`.panelView#${tag}`)
            const toolbarBtnF = document.querySelector(`.toolbarItem .${tag}Btn`)
            if (panelViewF.style.display == 'flex' && panel.style.display == 'block') {
                toolbarBtnF.classList.add('active')
            } else {
                if (toolbarBtnF.classList.contains('active')) toolbarBtnF.classList.remove('active')
            }
        })
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
function showJournalPanel() {
    showPanel(true, 'journal', true)
    loadJournal()
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
document.querySelector(".toolbar .journalBtn").addEventListener("click", () => {
    const e = document.querySelector(".toolbar .journalBtn");
    if (e.classList.contains("active")) {
        showPanel(false, "journal");
        e.classList.remove("active");
    } else {
        e.classList.add("active");
        showJournalPanel()
    }
});
document.querySelector(".toolbar .resetBtn").addEventListener("click", () => {
    clearProgress()
});
/**
 * Creates a button
 * @param {'primary'|'dangerous'|'default'} style 
 * @param {string} text 
 * @param {*} icon 
 * @returns {Element}
 */
function createButtonElement(style, text, icon) {
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
const customizeThemeButton = createButtonElement(
    "default",
    "Customize theme",
    systemIcons.settings
)

const settingsModel = [
    {
        id: "personalization",
        name: "Personalization",
        settings: [
            {
                type: "input",
                title: "Display name",
                description:
                    "We will refer to you using your display name.",
                value: "displayName",
            },
            {
                type: "toggle",
                title: "Dark mode",
                value: "darkMode",
            },
            {
                title: "Theme",
                type: 'button',
                description: 'Set a custom image and color theme.',
                button: customizeThemeButton,
                hidden: true,
            },
            /* {
                title: "Theme",
                type: 'etc',
                description: 'Apply a theme to make BiblePuzzle your own.',
                block: createThemeSelectionBlock({ showOptions: true }),
                hidden: true
            }, */
            {
                title: "Theme color",
                type: "etc",
                block: createAccentColorSelectionBlock(),
            },
            {
                type: "toggle",
                title: "Show speed in gradebook",
                value: "showSpeed",

                description: "Show avg. speed (chars/sec) in gradebook.",
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
                valueEl = document.createElement("input");
                valueEl.className = "toggleSwitch";
                valueEl.type = "checkbox"

                if (getSettings()[s.value] == true) {
                    valueEl.checked = true
                }
                valueEl.addEventListener("click", () => {
                    settingsValues[s.value] =
                        settingsValues[s.value] == true ? false : true;
                    if (settingsValues[s.value] == true) {
                        valueEl.checked = true
                    } else {
                        if (valueEl.checked == true) {
                            valueEl.checked = false;
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
        if (s.hidden) {
            if (localStorage.getItem('developerMode') == 'true') {
                setEl.querySelector('.settingTitle').innerHTML += `<div class="textTag dev">Hidden</div>`
            } else {
                setEl.style.display = "none"
            }
        }

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
        openVLPopup()
        throttle = true;
        setTimeout(function () {
            throttle = false;
        }, 1000);
    }
});
function openVLPopup() {
    if (!document.querySelector('.popups .verseListPopup')) {
        const popup = createModal({
            title: 'Verses',
            content: `<ul class="pverseList"></ul>`,
            id: 'verseListPopup',
            lightDismiss: 'True'
        })
        const verseList = popup.querySelector(".pverseList");
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
            vxItem.querySelector('.addToJournalBtn').onclick = () => {
                addVerseToJournal(vx)
            }
        }
    }
    showPopup(true, '.verseListPopup')
}
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
            slider.title = slider.value
        }
        slider.addEventListener("input", updateSlider);
        slider.addEventListener('change', updateSlider)
        updateSlider();
    });
}

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

    if (stats.gradebook.length < 1) {
        document.querySelector(
            ".overallGradeCol .lgColumnValue"
        ).innerHTML = 'N/A'
    }

    document.querySelector(
        ".gradebookVerses .lgColumnValue"
    ).textContent = `${stats.gradebook.length}/10`;

    document.querySelectorAll(".gradeTable > tr").forEach((el) => el.remove());
    if (document.querySelector('.resetGradebookBtn').parentElement.querySelector('.fallbackFrame')) document.querySelector('.resetGradebookBtn').parentElement.querySelector('.fallbackFrame').remove()
    if (stats.gradebook.length > 0) {
        document.querySelector(".gradeTable").style.display = ''
        document.querySelector('.resetGradebookBtn').style.display = ''
        stats.gradebook.forEach((grade) => {
            const date = new Date(grade.date);
            const tr = document.createElement("tr");
            tr.innerHTML = `<td class="verseDateTd" title="${date.toLocaleTimeString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
            })}">${date.toLocaleDateString()}</td>
                                    <td class="verseRefTd">${grade.verse}</td>
            <td class="avgCPSTd">${grade.avgCPS}</td>
            <td class="verseGradeTd">${grade.grade * 100
                }% (<span style="color: var(--text-${grade.incorrect == 0 ? "green" : "red"
                })">-${grade.incorrect}</span>)</td>
            `;
            tr.querySelector('.avgCPSTd').style.display = (getSettings().showSpeed == false ? 'none' : '')
            document.querySelector(".gradeTable").append(tr);
        });
        document.querySelectorAll(".gradeTable td").forEach(cell => {
            cell.addEventListener('click', () => {
                navigator.clipboard.writeText(cell.className == 'verseDateTd' ? cell.title : (cell.className == 'avgCPSTd' ? `${cell.textContent} chars/sec` : cell.textContent))
                showToast('Copied to clipboard')
            })
        })
        document.querySelectorAll('.gradeTable th').forEach(col => {
            let tx = col.innerText.toLowerCase()
            if (tx == 'speed') {
                col.style.display = (getSettings().showSpeed == false ? 'none' : '')
            }
        })
    } else {
        document.querySelector('.resetGradebookBtn').style.display = 'none'
        document.querySelector(".gradeTable").style.display = 'none'
        const fallbackFrame = createFallbackFrame("assets/img/illustrations/Gradebook Empty.png", "No grades in gradebook yet", "Your completed verses will show here.")
        document.querySelector('.resetGradebookBtn').parentElement.insertBefore(fallbackFrame, document.querySelector('.resetGradebookBtn'))
    }
    document.querySelector(
        ".btn.showGradingInfo"
    ).title = `The grade shows how well you completed the test, using the grading scale below.
90% - Excellent
80% - Good
60% - Fair
40% - Poor
Under 40% - Faulty`;
    document.querySelector('#stats .panelTitle').textContent = `${getSettings().displayName}${getLastChar(getSettings().displayName) == 's' ? '\'' : '\'s'} Stats`

    const tkChart = getEl('.troubleKeyChart')

    let tkAvgs = {}
    if (stats.troubleKeys && Object.keys(stats.troubleKeys).length > 0) {
        Object.keys(stats.troubleKeys).forEach(xc => {
            const ky = stats.troubleKeys[xc]
            if (Math.round(avg(ky)) > 1) {
                tkAvgs[xc] = Math.round(avg(ky))
            }
        })
        tkAvgs = Object.fromEntries(Object.entries(tkAvgs)
            .sort(([, valueA], [, valueB]) => valueB - valueA)
            .slice(0, 8));
    }

    if (document.querySelector('.resetTroubleKeysBtn').parentElement.querySelector('.fallbackFrame')) document.querySelector('.resetTroubleKeysBtn').parentElement.querySelector('.fallbackFrame').remove()
    if (stats.troubleKeys && Object.keys(stats.troubleKeys).length > 0 && Object.keys(tkAvgs).length > 0) {
        tkChart.innerHTML = ''
        Object.keys(tkAvgs).forEach(l => {
            const cl = document.createElement('div')
            cl.className = 'tkChartCol'
            cl.title = `You missed the '${keyToText(l)}' key ${tkAvgs[l]} times per verse on average`
            cl.innerHTML = `<div class="tkChartSymbol" style="height: calc((${tkAvgs[l]} / ${tkAvgs[Object.keys(tkAvgs)[0]]}) * var(--base))"></div><div class="tkChartCaption">${keyToText(l)}</div>`
            tkChart.append(cl)
        })

        tkChart.style.display = ''
    } else {
        tkChart.style.display = 'none'
        document.querySelector('.resetTroubleKeysBtn').style.display = 'none'
        document.querySelector(".gradeTable").style.display = 'none'
        const fallbackFrame = createFallbackFrame("assets/img/illustrations/Trouble Keys Empty.png", "You're typing every key correctly!", "The keys that you have the most trouble typing will show here.")
        document.querySelector('.resetTroubleKeysBtn').parentElement.insertBefore(fallbackFrame, document.querySelector('.resetTroubleKeysBtn'))
    }
}
/**
 * Gets an element on the page
 * @param {keyof HTMLElementTagNameMap} el 
 * @returns {HTMLElement}
 */
function getEl(el) { return document.querySelector(el) }

loadStats();

function keyToText(key) {
    let remap
    switch (key) {
        case ' ': remap = 'Space'; break;
        default: remap = key; break;
    }
    return remap
}

function calculateGradeLetter(prompt) {
    let letter;
    if (prompt >= 90) letter = "Excellent";
    else if (prompt >= 80) letter = "Good";
    else if (prompt >= 60) letter = "Fair";
    else if (prompt >= 40) letter = "Poor";
    else letter = "Faulty";
    return letter;
}
/**
 * 
 * @param {string} prompt
 */
function getLastChar(prompt) {
    return prompt.substring(prompt.length - 1)
}
function showToast(text, buttons, clsName, timeout) {
    const toastFrame = document.querySelector('.toastsFrame')
    const toast = document.createElement('div')
    toast.className = 'toast'
    if (clsName) toast.classList.add(clsName)
    toast.innerHTML = `<div class="toastIconFrame"></div>
                    <div class="toastTextFrame">${text}</div>
                    <div class="toastButtonsFrame"></div>`
    if (buttons) {
        buttons.forEach(btn => {
            const btnEl = document.createElement('button')
            if (btn.cls) btnEl.className = btn.cls
            btnEl.innerHTML = btn.text
            btnEl.onclick = btn.click
            btnEl.tabIndex = 0

            toast.querySelector('.toastButtonsFrame').append(btnEl)
        })
    }
    toastFrame.append(toast)

    setTimeout(() => {
        toast.classList.add('leaving')
        setTimeout(() => {
            toast.remove()
        }, 200)
    }, (timeout ? timeout : 3000));
}
/**
 * Returns the arithmetic mean of the given array
 * @param {Array} array The array to average
 */
function avg(array) {
    return array.reduce((a, c) => a + c) / array.length
}

function createThemeSelectionBlock(options) {
    const ct = document.createElement('div')
    ct.className = 'themeSelectionCt'
    ct.innerHTML = `<div class="themeSelection"></div><div class="buttons"></div>`



    if (options.showOptions) {
        ct.querySelector('.buttons').innerHTML = `
        <button class="btn">${systemIcons.settings}Manage themes</button>
        `
    } else {
        ct.querySelector('.buttons').remove()
    }

    return ct
}
function createInputElement(placeholder, clsName, type) {
    const inp = document.createElement('input')
    inp.type = (type ? type : 'text')
    if (placeholder) inp.placeholder = placeholder
    if (clsName) inp.className = clsName

    return inp
}
customizeThemeButton.addEventListener('click', () => {
    if (!document.querySelector('.popups .customizeThemePopup')) {
        const popup = createModal({
            title: 'Customize theme',
            id: 'customizeThemePopup',
            confirmButtonText: 'Save',
            lightDismiss: true,
            onSubmit: () => updateTheme(),
            content: `
        <div class="popupGroup">
    <div class="popupGroupTitleSmall">Image</div>
    <div class="section themeImageUploadSect">
    </div>
    <div class="section themeImageBlurSect">
        <label>Blur</label>
        <input type="range" class="themeImgBlurInp" min="0"max="70" value="20" step="5">
    </div>
    <div class="section themeImageEffectsSect">
    <label>Effects</label>
    <div class="controlBtnLgCt">
    <button class="controlBtnLg brightenBtn btn" title="Brighten">${systemIcons.drop}</button>
        <button class="controlBtnLg dimBtn btn" title="Dim">${systemIcons.dropFill}</button>
    </div>
    </div>
    <div class="toggleSwitchCt themeImgLightSect">
    <input type="checkbox" class="toggleSwitch lightBgSwitch">
    Light background
</div>
    <button class="btn resetThemeImgSettingsBtn">${systemIcons.delete}Reset to defaults</button>
</div>
        <div class="popupGroup">
    <div class="popupGroupTitleSmall">Accent color</div>    <div class="toggleSwitchCt themeImgLightSect">
    <input type="checkbox" class="toggleSwitch useSystemAccentSwitch">
    Use system colors
</div>
    <div class="section themeAccentColorSelection">
        <ul class="accentColorList"></ul>
    </div>
</div>
`
        })
        const getEl = (el) => document.querySelector(`.popup.customizeThemePopup .${el}`)
        const presetColors = ["#ff0047", "#c12a3f", "#ff4600", '#ff8c15', '#ffdf00', '#ffb000', '#a9ff00', '#00ff1f', '#0ec72d', '#0ba99a', '#21e4ed', '#0ebfc7', '#1576ef', '#2b00d9', '#1c008f', '#9004bf', '#e300ff', '#ff00d4', '#ff78e8', '#ff78b6', '#ff288a', '#a94d0b', '#ffcca7', '#cbdbe3', '#688c9f', '#282f32', 'custom']

        popup.querySelector('.themeImageUploadSect').append(createCustomFileUpload())

        presetColors.forEach(color => {
            const colorEl = document.createElement('li')
            colorEl.className = 'colorEl'
            colorEl.tabIndex = 0
            if (color !== 'default' && color !== 'custom') {
                colorEl.style.background = color
                colorEl.textContent = 'Aa'
            }
            if (color == 'custom') {
                colorEl.style.backgroundImage = 'url(assets/img/ColorPickerIcon.png)'
                colorEl.classList.add('customAccentColorBtn')
            }
            if (color == 'default') {
                colorEl.innerHTML = systemIcons.settings
                colorEl.style.setProperty('color', 'var(--subtitle)', 'important')
            }
            popup.querySelector('.accentColorList').append(colorEl)
            colorEl.addEventListener('click', () => {
                if (popup.querySelector('.colorEl.selected')) popup.querySelector('.colorEl.selected').classList.remove('selected')
                colorEl.classList.add('selected')
            })
        })
        popup.querySelectorAll('.controlBtnLgCt button').forEach(opt => {
            opt.addEventListener('click', () => {
                if (opt.classList.contains('selected')) {
                    opt.classList.remove('selected')
                } else {
                    if (popup.querySelector('.controlBtnLgCt button.selected')) {
                        popup.querySelector('.controlBtnLgCt button.selected').classList.remove('selected')
                    }
                    opt.classList.add('selected')
                }
                opt.parentElement.setAttribute('selectedOption', (opt.parentElement.querySelector('.selected') ? opt.parentElement.querySelector('.selected').classList[1] : 'none'))
            })
        })

        /** imageURL: getEl('fileImagePreview').src,
        blur: Number(getEl('themeImgBlurInp').value),
        darken: (getEl('controlBtnLg.selected').classList.contains('dimBtn') ? true : false),
        lighten: (getEl('controlBtnLg.selected').classList.contains('brightenBtn') ? true : false),
        lightBackground: (getEl('lightBgSwitch').checked ? true : false),
        themeColor: getEl('colorEl.selected').style.background */

        const resetThemeImgSettingsBtn = popup.querySelector('.resetThemeImgSettingsBtn')
        const imgSettingsGroup = [getEl('themeImageBlurSect'),
        getEl('themeImageEffectsSect'),
        getEl('themeImgLightSect'), resetThemeImgSettingsBtn]
        if (loadedTheme) {
            getEl('fileImagePreview').src = theme.imageURL
            getEl('themeImgBlurInp').value = theme.blur
            for (let test of popup.querySelectorAll('.colorEl')) {
                if (test.style.background == theme.themeColor) test.classList.add('selected')
            }
            getEl('lightBgSwitch').checked = theme.lightBackground
            if (theme.lighten) getEl('brightenBtn').click()
            if (theme.darken) getEl('dimBtn').click()
            updateSliders()

            if (!theme.imageURL) {
                imgSettingsGroup.forEach(elm => {
                    elm.style.display = 'none'
                })
            }
        }

        resetThemeImgSettingsBtn.addEventListener('click', () => {
            imgSettingsGroup.forEach(elm => {
                elm.style.display = 'none'
            })
            popup.querySelector('#themeImgUploadCore').value = ''
            getEl('fileImagePreview').src = ''
        })
        popup.querySelector('#themeImgUploadCore').addEventListener('change', () => {
            if (popup.querySelector('#themeImgUploadCore').value) {
                imgSettingsGroup.forEach(elm => {
                    elm.style.display = ''
                })
            }
        })
    }
    showPopup(true, '.customizeThemePopup')
})

function createCustomFileUpload() {
    const ct = document.createElement('div')
    ct.className = 'customFileUploadCt'
    ct.innerHTML = `        <input type="file" name="image" accept=".png,.jpg,.jpeg" id="themeImgUploadCore"><button class="btn fileUploadBtn">${systemIcons.upload}Upload</button>
            <img class="fileImagePreview">`
    ct.querySelector('.fileUploadBtn').addEventListener('click', () => {
        ct.querySelector('#themeImgUploadCore').click()
    })
    ct.querySelector('#themeImgUploadCore').addEventListener('change', (e) => {
        const file = e.target.files[0];
        console.log(file);
        console.log(e.target.files);
        console.log(!file);

        const imagePreview = ct.querySelector('.fileImagePreview');
        if (file && ct.querySelector('#themeImgUploadCore').value !== '') {
            const reader = new FileReader();
            reader.onload = function (event) {
                const imageUrl = event.target.result;
                if (event.target.result) {
                    imagePreview.src = imageUrl;
                } else {
                    imagePreview.setAttribute('src', '')
                }
            }

            reader.readAsDataURL(file);
        } else {
            imagePreview.setAttribute('src', '')
        }
    })
    return ct
}
function updateTheme() {
    const getEl = (el) => document.querySelector(`.popup.customizeThemePopup .${el}`)
    let th = {
        imageURL: (getEl('fileImagePreview').src ? getEl('fileImagePreview').src : ''),
        blur: Number(getEl('themeImgBlurInp').value),
        darken: false,
        lighten: false,
        lightBackground: (getEl('lightBgSwitch').checked ? true : false),
        themeColor: getEl('colorEl.selected').style.background
    }
    if (getEl('controlBtnLg.selected')) {
        th.lighten = getEl('controlBtnLg.selected').classList.contains('brightenBtn') ? true : false
        th.darken = getEl('controlBtnLg.selected').classList.contains('dimBtn') ? true : false
    }
    localStorage.setItem("userTheme", JSON.stringify(th));
    loadTheme()
}
function loadTheme() {
    loadedTheme = localStorage.getItem("userTheme")

    theme = JSON.parse(loadedTheme);

    document.body.classList.add('themeLoaded')
    if (theme.imageURL) {
        document.body.style.setProperty('background-image', `url(${theme.imageURL})`, 'important')
        if (theme.blur) {
            if (theme.lighten || theme.darken) {
                document.body.style.setProperty('backdrop-filter', `brightness(${theme.lighten ? 1.5 : (theme.darken ? 0.7 : 1)}) blur(${theme.blur}px)`, 'important')
            } else {
                document.body.style.setProperty('backdrop-filter', `blur(${theme.blur}px)`, 'important')
            }
        }
        if (theme.lightBackground) { document.body.classList.add('lightBgTheme') } else {
            if (document.body.classList.contains('lightBgTheme')) document.body.classList.remove('lightBgTheme')
        }
    }

    if (theme.themeColor) document.body.style.setProperty('--accent', theme.themeColor, 'important')
}
if (loadedTheme) loadTheme()
function createFallbackFrame(img, title, description) {
    const fallbackFrame = document.createElement('div')
    fallbackFrame.className = 'gradebookFallbackFrame fallbackFrame'
    fallbackFrame.innerHTML = `<img src="${img}" alt="${title}" class="fallbackImg">
        <div class="fallbackTitle">${title}</div>
        <div class="fallbackDesc">${description}</div>`
    return fallbackFrame
}

/**
 * Displays a confirmation modal with the specified title, content, and submit text,
 * and returns a Promise that resolves with a boolean value representing the user's
 * confirmation status.
 *
 * @param {string} title - The title of the confirmation modal.
 * @param {string} content - The content of the confirmation modal.
 * @param {string} submitText - The text to display on the confirmation button.
 * @param {string} [cls='modal0'] - The CSS class to apply to the confirmation modal.
 * @param {boolean} [lightDismiss=false] - Whether the modal should be dismissable by clicking outside it.
 * @returns {Promise<boolean>} A Promise that resolves with a boolean value representing the user's
 *   confirmation status. The Promise resolves to `true` if the user clicked the confirm button,
 *   and `false` if the user clicked the cancel button or dismissed the modal in some other way.
 */
function confirmModal(title, content, submitText, cls, lightDismiss, btnClasses) {
    if (!cls) cls = 'modal0'
    return new Promise((resolve) => {
        const modal = createModal({
            title,
            content,
            confirmButtonText: submitText,
            id: cls,
            lightDismiss: lightDismiss || false,
            onSubmit: () => {
                popups.querySelector(`.popup.${cls}`).remove();
                resolve(true);
            },
            onCancel: () => { resolve(false); popups.querySelector(`.popup.${cls}`).remove(); },
            buttonClasses: btnClasses
        });
        modal.classList.add('modal')

        showPopup(true, '.' + cls);
    });
}
/**
 * Capitalizes the first letter of the given string.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} The input string with the first letter capitalized.
 */
function capitalize(str) {
    if (!str) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * 
 * @param {Event} e 
 */
window.addEventListener('keyup', (e) => {
    if (e.key == 'Escape') {
        showPanel(false)
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'Q') {
        e.stopPropagation()
        e.preventDefault()
        settingsValues['darkMode'] = !settingsValues['darkMode']
        showToast(`Dark theme ${settingsValues['darkMode'] == true ? 'enabl' : 'disabl'}ed`)
        updateSettings()
    }
}, { capture: true, passive: false })

function replaceIcons() {
    document.querySelectorAll('i.icon').forEach(icon => {
        const attr = icon.getAttribute('icon')
        icon.outerHTML = systemIcons[attr]
    })
}
replaceIcons()
function updateJournal() {
    localStorage.setItem("userJournal", JSON.stringify(journal));
    loadJournal()
}
function loadJournal() {
    const journalFrame = document.querySelector('.journalMainCt')
    journalFrame.innerHTML = ''
    if (!journal || journal.items < 1) {
        const fallbackFrame = createFallbackFrame("assets/img/illustrations/Journal New.png", 'Welcome to Journals!', 'Organize your verses and notes all in one place.')
        const addBtn = createButtonElement('primary', 'Add current verse', systemIcons.add)
        document.querySelector('.journalSearchBtn').style.display = 'none'
        document.querySelector('input.journalNameInp').disabled = true
        fallbackFrame.append(addBtn)
        addBtn.addEventListener('click', () => {
            addVerseToJournal(verseRaw)
        })
        journalFrame.append(fallbackFrame)
    } else {
        /* Journal object
{
    name: "My journal",
    created: Date,
    items: [
        {
            type: "verse",
            verse: "John 3:16",
            note: "My note", // null if none,
            dateCreated: new Date()
        },
        {
            type: "note",
            text: "God <i>loves</i> us", // in HTML
            color: 0
        }
    ]
}
*/
        const jnNameInp = document.querySelector('input.journalNameInp')
        document.querySelector('.journalSearchBtn').style.display = ''
        jnNameInp.disabled = false
        jnNameInp.value = journal.name

        jnNameInp.addEventListener('change', () => {
            journal.name = jnNameInp.value
            updateJournal()
        })

        journal.items.forEach(item => {
            const itemEl = document.createElement('div')
            itemEl.className = 'journalItem'
            itemEl.classList.add(`journal${capitalize(item.type)}Item`)
            itemEl.innerHTML = `
            <div class="journalItemMainCt">
            <div class="journalItemMain journal${capitalize(item.type)}Main"></div>
            <div class="journalItemOptionsCt">
                ${item.type == 'note' ? `<button class="actionBtn journalItemControl journalItemMoreBtn">${systemIcons.more}</button>` : ''}
                <button class="actionBtn journalItemControl journalItemMoreBtn">
                    ${systemIcons.more}
                </button>
            </div>
            </div>
            <div class="journalItemNoteCt">
    <textarea class="journalItemNoteInp" placeholder="Add a note..."></textarea>
    <div class="journalNoteButtons">
    <button class="btn journalCancelNoteBtn journalNoteActionBtn">Cancel</button>
    <button class="btn-primary journalSaveNoteBtn journalNoteActionBtn">Save</button>
</div>
</div>
            `
            const noteFrame = itemEl.querySelector('.journalItemNoteInp')
            journalFrame.append(itemEl)

            itemEl.querySelector('.journalNoteButtons').style.display = 'none'

            let nodeIndex = Array.prototype.indexOf.call(itemEl.parentNode, itemEl)
            let frame = itemEl.querySelector('.journalItemMain')
            switch (item.type) {
                case 'verse':
                    frame.innerHTML = `
                    <div class="journalVerseImgCt">
                        <img src="${item.verse.imageURL}" alt="${item.verse.ref}">
                    </div>
                    <div class="journalVerseRef">${item.verse.ref}</div>
                        <div class="journalVerse">${item.verse.verse}</div>
                    `
                    itemEl.addEventListener('click', (e) => {
                        if (!document.elementsFromPoint(e.x, e.y).includes(itemEl.querySelector('.journalItemOptionsCt')) && !document.elementsFromPoint(e.x, e.y).includes(noteFrame.parentElement)) {
                            if (itemEl.classList.contains('expanded')) {
                                itemEl.classList.remove('expanded')
                                itemEl.querySelector('.journalItemMainCt').append(itemEl.querySelector('.journalItemOptionsCt'))
                            } else {
                                itemEl.classList.add('expanded')
                                itemEl.querySelector('.journalItemMain').insertBefore(itemEl.querySelector('.journalItemOptionsCt'), itemEl.querySelector('.journalVerse'))
                            }
                        }
                    })
                    break;
                case 'note':
                    frame.innerHTML = item.text
                    break;
                default:
                    console.error('Invalid journal item type');
                    break;
            }
            noteFrame.value = (item.note ? item.note : '')
            checkNoteSize()
            function updateNote() {
                journal.items[journal.items.indexOf(item)].note = noteFrame.value
                updateJournal()
            }
            function checkNoteSize() {
                let lineNum = (noteFrame.value.match(/\n/g) || []).length + 1;
                noteFrame.style.height = `${((15 * 1.04) * 1.4) * lineNum + 6}px`
            }
            noteFrame.addEventListener('input', () => {
                checkNoteSize()
                itemEl.querySelector('.journalNoteButtons').style.display = ''
            })
            itemEl.querySelector('.journalCancelNoteBtn').onclick = () => {
                itemEl.querySelector('.journalNoteButtons').style.display = 'none'
                noteFrame.value = item.note !== '' ? item.note : ''
            }
            itemEl.querySelector('.journalSaveNoteBtn').onclick = () => {
                itemEl.querySelector('.journalNoteButtons').style.display = 'none'
                updateNote()
            }
        })
    }
}
document.querySelector('.journalAddBtnSc').addEventListener('click', () => {
    addVerseToJournal(verseRaw)
})
function addVerseToJournal(verseObj) {
    try {
        if (!journal) {
            journal = {
                name: "My journal",
                created: new Date(),
                items: []
            }
        }
        if (journal.items.length <= 100) {
            journal.items.push({
                type: 'verse',
                verse: verseObj,
                dateCreated: new Date()
            })
            showToast(`Added ${verseObj.ref} to journal`, [{
                text: 'View',
                click: () => {
                    showJournalPanel()
                    document.querySelector('.journalMainCt').scrollTo({
                        top: document.querySelector('.journalMainCt').scrollHeight,
                        left: 0,
                        behavior: 'smooth'
                    })
                },
                cls: 'showJounalToastBtn'
            }])
        } else {
            showToast('Couldn\'t add item to journal. Your journal is full.')
        }
        updateJournal()
    } catch (error) {
        showToast('Unable to add verse to journal')
    }
}
/**
 * Creates a context menu element based on the given options and extra class.
 *
 * @param {Object[]} options - An array of objects representing each item in the context menu.
 * @param {string} options.label - The label to display for the menu item.
 * @param {string} [options.icon] - The URL or HTML content of the icon to display for the menu item.
 * @param {function} options.click - The function to execute when the menu item is clicked.
 * @param {string} [extraClass] - An optional additional class name to add to the context menu element.
 * @returns {HTMLElement} - The created context menu element.
 */
function createContextMenuElement(options, extraClass) {
    const ctx = document.createElement('div')
    ctx.className = 'contextMenu'
    if (extraClass) ctx.classList.add(extraClass)
    for (let item in options) {
        const itemEl = document.createElement('div')
        if (!item.separator) {
            itemEl.className = 'ctxItem'
        } else {
            itemEl.innerHTML = `${item.icon ? item.icon : '<div class="iconSpacer"></div>'} ${item.label}`
            itemEl.onclick = item.click
        }
        ctx.append(itemEl)
    }
    return ctx
}