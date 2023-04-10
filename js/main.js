const systemIcons = {
    "bookmark": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`
}

const accentColors = [
    'red', 'gold', 'green', 'turquoise', 'blue', 'magenta', 'black'
]
function createAccentColorSelectionBlock() {
    const container = document.createElement('div')
    container.className = 'accentColorSelectionCt'

    accentColors.forEach(color => {
        const colorEl = document.createElement('input')
        colorEl.type = 'radio'
        colorEl.name = 'accentColor'
        colorEl.value = color
        colorEl.style.background = `var(--${color}-accent)`
        colorEl.className = 'accentColorCircle'
        colorEl.setAttribute('data-color', accentColors.indexOf(color))
        container.append(colorEl)
        const index = accentColors.indexOf(color)

        if (getSettings().themeColor == index) { colorEl.checked = true }

        colorEl.addEventListener('click', () => {
            settingsValues.themeColor = index
            updateSettings()
        })
    })

    return container
}

let settingsValues = {
    displayName: '',
    darkMode: false,
    backSpacing: true,
    mobileKeyboard: false,
    themeColor: 4,
    narrator: false,
}
let stats = {
    bestVerse: 1, // Based on score.
    versesCompleted: 0,
    totalCharactersTyped: 0, // correct characters
    avgCPS: 0,
    gradebook: [ // max grades: 10
        /* {
            date: new Date(),
            verse: '',
            grade: 0.0,
            incorrect: 0
        } */
    ],
    troubleKeys: [
        /* {
            key: 'a',
            incorrectHistory: [3,4,0,2,6,0,0,1] //each are verses. number of how many times incorrect in a verse. every verse is here, including ones with 0 incorrect.
        } */
    ]
}

const tkInp = document.querySelector('.touckKeyboardInp')

if (!localStorage.getItem('userSettings')) {
    localStorage.setItem('userSettings', JSON.stringify(settingsValues))
}

let random = Math.floor(Math.random() * randomVerses.length);

let verse = `${randomVerses[random].verse} `
let reference = randomVerses[random].ref

const refContainer = document.querySelector('.msgRef')
const verseContainer = document.querySelector('.msgText')

const verseSplit = verse.split('')
const refSplit = reference.split('')

const extract = (array, outputEl) => {
    array.forEach(char => {
        let txt = char
        let el = document.createElement('div')
        el.className = 'character'
        if (char == ' ') {
            txt = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity: .4;">
<path d="M2.75 10V13C2.75 13.8284 3.42157 14.5 4.25 14.5H19.75C20.5784 14.5 21.25 13.8284 21.25 13V10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
            el.style.paddingBottom = '5px'
        }
        el.innerHTML = txt
        outputEl.append(el)
    })
}
extract(verseSplit, verseContainer)
extract(refSplit, refContainer)

const timer = {
    start: () => {
        timer.isOn = true
        function advance() {
            if (timer.isOn) {
                setTimeout(() => {
                    if (timer.seconds == 59) {
                        timer.minutes++
                        timer.seconds = 0;
                    }
                    else { timer.seconds++ }
                    document.querySelector('.statTag.time > span').textContent = `${timer.getTime()}`
                    advance()
                }, 1000);
            }
        }
        advance()
    },
    pause: () => {
        timer.isOn = false
    },
    reset: () => {
        timer.isOn = false
        timer.seconds = 0;
        timer.minutes = 0;
    },
    seconds: 0,
    minutes: 0,
    isOn: false,
    getTime: () => {
        return `${timer.minutes}:${timer.seconds < 10 ? 0 : ''}${timer.seconds}`
    }
}
let backspaceAllowed = true
let incorrectChars = 0;
let charactersTyped = 0;
let keyboardLock = true
let currentCt;
let currentChar = 0;

let countedKeys = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()-=+-_`~[]\\|}{;\':"<>?/., '
countedKeys = countedKeys.split('')

function startTyping(ct, array) {
    let activeCharNum = 0;
    currentCt = ct
    document.title = `BiblePuzzle | ${reference}`
    document.querySelector('footer #footerVerseRef').textContent = reference
    ct.children[activeCharNum].classList.add('active')

    const cpsTest = {
        cps: 0,
        isSampling: undefined,
        allTests: [],

        stop: () => {
            cpsTest.isSampling = false;
            cpsTest.allTests.push(cps)
            console.log(cpsTest.allTests);
            cps = 0;
            cpsTest.isSampling = undefined
            cpsTest.start()
        },
        start: () => {
            cpsTest.isSampling = true
            if (cpsTest.isSampling == true) {
                setTimeout(() => {
                    cpsTest.stop()
                }, 1000)
            }
        },
        average: () => {
            let init = 0
            const sum = cpsTest.allTests.reduce((prev, curr) => prev + curr, init
            )
            const mean = sum / cpsTest.allTests.length

            return mean
        }
    }
    let cps = 0
    let allCps = []
    let cpsSampleOver = undefined
    window.onkeydown = (e) => {
        type(e)
    }
    tkInp.addEventListener('input', (e) => {
        type(e)
    })
    function type(e) {
        charactersTyped++
        if (!keyboardLock) {
            if (cpsTest.isSampling == true) {
                cps++
            }
            setTimeout(() => {
                cpsSampleOver = true
                allCps.push(cps)
                console.log(cps);
                cps = 0
                cpsSampleOver = false
            }, 1000)
            if (activeCharNum == 0) {
                if (!timer.isOn) {
                    timer.start()
                    cpsTest.start()
                }
            }
            if (activeCharNum > 0) {
                ct.children[activeCharNum - 1].style.borderTopRightRadius = '0px'
                ct.children[activeCharNum - 1].style.borderBottomRightRadius = '0px'
                ct.children[activeCharNum].style.borderTopLeftRadius = '0px'
                ct.children[activeCharNum].style.borderBottomLeftRadius = '0px'
            }
            if (activeCharNum == array.length) {
                ct.children[activeCharNum - 1].style.borderTopRightRadius = ''
                ct.children[activeCharNum - 1].style.borderBottomRightRadius = ''
            }
            if (countedKeys.indexOf(e.key) > -1) {
                if (e.key == array[activeCharNum]) {
                    ct.children[activeCharNum].classList.add('correct')
                    ct.children[activeCharNum].classList.remove('active')
                    stats.totalCharactersTyped++
                    updateStats()
                    activeCharNum++
                    currentChar = activeCharNum
                    if (activeCharNum !== array.length) {
                        ct.children[activeCharNum].classList.add('active')
                    }
                } else {
                    ct.children[activeCharNum].classList.add('incorrectChar')
                    ct.children[activeCharNum].classList.remove('active')
                    activeCharNum++
                    incorrectChars++
                    currentChar = activeCharNum
                    document.querySelectorAll('.incorrect span')[0].textContent = incorrectChars
                    if (incorrectChars == 1) {
                        document.querySelectorAll('.incorrect span')[1].textContent = ''
                    } else {
                        document.querySelectorAll('.incorrect span')[1].textContent = 's'
                    }
                    if (activeCharNum !== array.length) {
                        ct.children[activeCharNum].classList.add('active')
                    }
                }
                // const d = document.createElement('div')
                try {
                    // from here
                    ct.children[activeCharNum - 5].scrollIntoView({
                        inline: "start", behavior: "smooth"
                    })
                } catch (e) { }
            }
            if (activeCharNum == array.length) {
                if (ct == refContainer) {
                    completeTest()
                    stats.versesCompleted++
                    updateStats()
                    keyboardLock = true
                    timer.pause()
                } else {
                    startTyping(refContainer, refSplit)
                }
            }
            if (e.key == 'Backspace') {
                if (backspaceAllowed) {
                    if (activeCharNum > 0) {
                        activeCharNum--
                        ct.children[activeCharNum].classList.remove('incorrectChar')
                        ct.children[activeCharNum].classList.add('active')
                        ct.children[activeCharNum].classList.remove('correct')
                        ct.children[activeCharNum + 1].classList.remove('active')
                        ct.children[activeCharNum - 1].style.borderTopRightRadius = ''
                        ct.children[activeCharNum - 1].style.borderBottomRightRadius = ''
                        ct.children[activeCharNum].style.borderTopRightRadius = ''
                        ct.children[activeCharNum].style.borderBottomRightRadius = ''
                        try {
                            ct.children[activeCharNum - 5].scrollIntoView({
                                inline: "start", behavior: "smooth"
                            })
                        } catch (e) { }
                    }
                }
            }
        }
    }
}
let percent;


const popups = document.querySelector('.popups')
function askForName() {
    popups.querySelectorAll('.popup').forEach(el => el.style.display = 'none')
    const namePopup = popups.querySelector('form.namePopup')
    namePopup.style.display = ''
    namePopup.addEventListener('submit', () => {
        keyboardLock = false;
        popups.style.display = 'none'
        username = namePopup.querySelector('#playerName').value
        document.querySelector('#playerNameOp').value = username;
        settingsValues.displayName = username
        updateSettings()
    })
}
const preloadedUserName = getSettings().displayName
let username = preloadedUserName
if (!preloadedUserName) {
    askForName()
} else {
    settingsValues.displayName = preloadedUserName
    popups.style.display = 'none'
    keyboardLock = false
}
/**
 * 
 * @param {boolean} showOrHide true to show popup
 * @param {string} popupId query selector of the popup
 */
function showPopup(showOrHide, popupId) {
    popups.querySelectorAll('.popup').forEach(el => el.style.display = 'none')
    popups.style.display = (showOrHide == true ? 'flex' : 'none')

    popups.querySelector(popupId).style.display = (showOrHide == true ? 'flex' : 'none')
}

function completeTest() {
    showPanel(true, 'completion', true)
    const panelView = getPanelView('completion')
    panelView.style.display = 'flex'

    const total = (charactersTyped)
    percent = (total - incorrectChars) / total * 100

    const time = timer.getTime()

    const scoreText = panelView.querySelector('.graph-content .score')
    const subscoreText = panelView.querySelector('.graph-content .subscore')

    subscoreText.innerHTML = `<span class="${Math.round(percent) >= 50 ? 'green' : 'red'}" style="font-weight: 600">${(charactersTyped) - incorrectChars}</span>/${charactersTyped}`
    scoreText.textContent = `${Math.round(percent)}%`


    const circle = panelView.querySelector('circle#chart-score');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    function setProgress(pc) {
        const offset = circumference - pc / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }

    setProgress(percent);

    const completeHeading = panelView.querySelector('.panelTitle')

    if (Math.round(percent) >= 50) {
        completeHeading.textContent = `Congratulations, you completed the test${username !== null ? ', ' + username : ''}!`
    } else {
        completeHeading.textContent = `Nice try${username !== null ? ', ' + username : ''}!`
        circle.parentElement.classList.add('low')
    }
    const verseMeta = panelView.querySelector('.verseDescription')

    const vGroup = document.createElement('div')
    vGroup.className = 'verseTextGroup'
    const refLab = document.createElement('div')
    refLab.classList.add('panel-heading', 'verseReferenceLb')
    refLab.append(document.createTextNode(reference))

    const verseLab = document.createElement('p')
    verseLab.append(document.createTextNode(verse))

    const imgGroup = document.createElement('div')
    imgGroup.className = 'imgGroup'
    const img = document.createElement('img')
    img.src = randomVerses[random].imageURL
    img.alt = reference
    const cap = document.createElement('caption')
    cap.append(document.createTextNode(`Source: ${randomVerses[random]
        .source}`))


    const addToJournalBtn = createButtonElement('default', 'Add to journal', systemIcons.bookmark)
    addToJournalBtn.classList.add('addToJournalBtn')


    imgGroup.append(img, cap)
    vGroup.append(refLab, verseLab, addToJournalBtn)

    // until implemented: coming soon
    addToJournalBtn.remove()

    const typingFinalStats = panelView.querySelector('.testStats')

    typingFinalStats.querySelector('#totalTime .cellVal').textContent = time
    typingFinalStats.querySelector('#incChars .cellVal').textContent = incorrectChars


    window.onresize = () => { checkChartSize() }
    function checkChartSize() {
        const graphSet = panelView.querySelector('.graph.score')

        graphSet.style.width = '100%'
        const size = graphSet.getBoundingClientRect()

        graphSet.style.height = size.width + 'px'
    }


    verseMeta.append(imgGroup, vGroup)

    checkChartSize()
}

startTyping(verseContainer, verseSplit)

const darkTheme = () => {
    document.body.classList.remove('light')
    document.body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
}
const lightTheme = () => {
    document.body.classList.remove('dark')
    document.body.classList.add('light')
    localStorage.setItem('theme', 'light')
}
function toggleDarkTheme() {
    if (document.body.classList.contains('dark')) {
        lightTheme()
        document.querySelector('.nightBtn').classList.remove('active')
    } else {
        darkTheme()
        document.querySelector('.nightBtn').classList.add('active')
    }
}
function clearProgress() {
    if (window.confirm('Are you sure you want to clear your progress? You may get a different verse.') == true) {
        location.reload()
    }
}
function createModal(config) {

}
createModal({
    title: 'Hello, world'
})


let currentPanel;
/**
 * 
 * @param {boolean} showPanel 
 * @param {string} viewId 
 * @param {boolean} lightDismiss
 */
function showPanel(showPanel, viewId, lightDismiss) {
    const panel = document.querySelector('main aside.panel-ct')

    panel.style.display = (showPanel == true ? 'block' : 'none')

    if (viewId) {
        panel.querySelectorAll('.panel .panelView').forEach(view => view.style.display = 'none')

        panel.querySelector(`.panelView#${viewId}`).style.display = (showPanel == true ? 'flex' : 'none');

        if (showPanel == true) {
            currentPanel = viewId
            keyboardLock = true
        } else {
            currentPanel = ''
            keyboardLock = false
        }

        panel.addEventListener('click', (e) => {
            if (lightDismiss) {
                if (!document.elementsFromPoint(e.x, e.y).includes(panel.querySelector('.panel'))) {
                    panel.style.display = 'none'
                    currentPanel = ''
                    keyboardLock = false
                }
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
    const panel = document.querySelector('main aside.panel-ct .panel')

    return panel.querySelector(`.panelView#${viewId}`)
}

function playAgain() {
    location.reload()
}

function showStats() {
    showPanel(true, 'stats', true)
}
function showHelpPanel() {
    showPanel(true, 'help', true)
}
function showSettingsPanel() {
    showPanel(true, 'settings', true)
}

document.querySelector('.toolbar .statsBtn').addEventListener('click', () => {
    const e = document.querySelector('.toolbar .statsBtn')
    if (e.classList.contains('active')) {
        showPanel(false, 'stats')
        e.classList.remove('active')
    } else {
        e.classList.add('active')
        showPanel(true, 'stats', true)
    }
})
document.querySelector('.toolbar .settingsBtn').addEventListener('click', () => {
    const e = document.querySelector('.toolbar .settingsBtn')
    if (e.classList.contains('active')) {
        showPanel(false, 'settings')
        e.classList.remove('active')
    } else {
        e.classList.add('active')
        showPanel(true, 'settings', true)
    }
})
document.querySelector('.toolbar .helpBtn').addEventListener('click', () => {
    const e = document.querySelector('.toolbar .helpBtn')
    if (e.classList.contains('active')) {
        showPanel(false, 'help')
        e.classList.remove('active')
    } else {
        e.classList.add('active')
        showPanel(true, 'help', true)
    }
})

function createButtonElement(style, text, icon) {
    /**@param {'primary'|'dangerous'|'default'|'actionButton'} style */

    const button = document.createElement('button')
    button.className = `btn${style !== 'default' ? `-${style}` : ''}`
    button.innerHTML = `
    ${icon ? icon : ''}
    ${text}
    `
    return button
}
// max 8 trouble keys. Minimum 2 mistakes to go onto trouble keys and the 8 highest ones are shown

const backupButton = createButtonElement('default', 'Create backup', systemIcons.download)
const restoreButton = createButtonElement('default', 'Import data', systemIcons.upload)
const resetButton = createButtonElement('dangerous', 'Reset all data', systemIcons.reload)

const settingsModel = [
    {
        id: "personalization",
        name: "Personalization",
        settings: [
            {
                type: 'input',
                title: 'Display name',
                description: 'We will refer to you using your display name. Leave blank to disable.',
                value: "displayName"
            },
            {
                type: 'toggle',
                title: 'Dark mode',
                value: "darkMode"
            },
            {
                title: 'Theme color',
                type: 'etc',
                block: createAccentColorSelectionBlock()
            }
        ]
    },
    {
        id: "typing",
        name: "Typing",
        settings: [
            {
                type: 'toggle',
                title: 'Allow backspacing',
                value: "backSpacing",
                description: 'Enable for a more natural typing experience.'
            },
            {
                type: 'toggle',
                title: 'Touch keyboard',
                value: "mobileKeyboard",

                description: 'Show touch keyboard button. Best for mobile users.'
            }
        ]
    },
    {
        id: "accessibility",
        name: "Accessibility",
        settings: [
            {
                type: 'toggle',
                title: 'Narrator <div class="textTag beta" title="This feature is experimental and is still receiving updates and new features that may be unfinished.">Beta</div>',
                value: "narrator",

                description: 'Give spoken feedback while typing.'
            },
            {
                type: 'slider',
                title: 'Text size',
                value: "textSize",

                description: 'Set the text scale of the verse while typing'
            },
        ]
    },
    {
        id: "backupRestore",
        name: "Backup & Restore",
        settings: [
            {
                type: 'button',
                title: 'Export data',
                button: backupButton,
                description: 'Save a backup file to import on another device.'
            },
            {
                type: 'button',
                title: 'Import data',
                button: restoreButton,
                description: 'If you have a backup, import it here to bring your grades and settings here.'
            },
            {
                type: 'button',
                title: 'Factory reset',
                button: resetButton,
                description: 'Reset all data, including stats and settings.',
                dangerous: true
            },
        ]
    },
]

const settingsPanel = getPanelView('settings')
settingsModel.forEach(category => {
    const ctView = document.createElement('div')
    ctView.className = 'panelGroup'
    ctView.classList.add(`${category.id}View`)
    ctView.innerHTML = `
    <div class="panelGroupTitle">${category.name}</div>
    `

    category.settings.forEach(s => {
        const setEl = document.createElement('div')
        setEl.className = 'setting'

        let settingId = s.title.replaceAll(' ', '')

        setEl.id = settingId

        if (s.type == 'etc' || s.type == 'input') {
            setEl.classList.add('vertical')
        }
        setEl.innerHTML = `
            <div class="textGroup">
                <div class="settingTitle">${s.title}</div>
                <div class="settingDescription">${s.description}</div>
            </div>
        `
        if (!s.description) setEl.querySelector('.settingDescription').remove()

        let valueEl;
        switch (s.type) {
            case 'etc':
                valueEl = s.block
                break;
            case s.type = 'button':
                setEl.append(s.button)
                break;
            case 'toggle':
                valueEl = document.createElement('div')
                valueEl.className = 'toggleSwitch'

                if (getSettings()[s.value] == true) {
                    valueEl.classList.add('on')
                }
                valueEl.addEventListener('click', () => {
                    settingsValues[s.value] = (settingsValues[s.value] == true ? false : true)
                    if (settingsValues[s.value] == true) {
                        valueEl.classList.add('on')
                    } else {
                        if (valueEl.classList.contains('on')) {
                            valueEl.classList.remove('on')
                        }
                    }
                    updateSettings()
                })

                break;
            case 'input':
                valueEl = document.createElement('input')
                valueEl.id = `${settingId}Input`
                valueEl.type = 'text'

                valueEl.value = getSettings()[s.value]

                valueEl.onchange = () => {
                    settingsValues[s.value] = valueEl.value
                    updateSettings()
                }
                break;
            default:
                console.error('invalid setting type');
                break;
        }
        if (valueEl) setEl.append(valueEl)

        ctView.append(setEl)
    })

    settingsPanel.append(ctView)
})

function updateSettings() {
    localStorage.setItem('userSettings', JSON.stringify(settingsValues))

    checkSettings()
}
const tkBtn = document.querySelector('.touchKeyboardBtn')
function getSettings() {
    return JSON.parse(localStorage.getItem('userSettings'))
}
function checkSettings() {
    document.body.style.setProperty('--accent', `var(--${accentColors[getSettings().themeColor]}-accent)`)

    if (getSettings().darkMode == true) {
        darkTheme()
    } else {
        lightTheme()
    }

    if (getSettings().mobileKeyboard == true) {
        tkBtn.style.display = 'flex'

        tkBtn.addEventListener('click', () => {
            tkInp.focus()
        })

        tkInp.addEventListener('input', () => {
            try {
                currentCt.children[currentChar - 5].scrollIntoView({
                    inline: "start", behavior: "smooth"
                })
            } catch (e) { }
        })
    } else {
        tkBtn.style.display = 'none'
    }

    backspaceAllowed = getSettings().backSpacing
}
function updateStats() { }

checkSettings()

const verseBtn = document.querySelector('#footerVerseRef')
verseBtn.addEventListener('click', function (evt) {
    let throttle = false

    if (!throttle && evt.detail === 3) {
        showPopup(true, '.verseListPopup')
        throttle = true;
        setTimeout(function () {
            throttle = false;
        }, 1000);
    }
});

const verseList = document.querySelector('.pverseList')
for (let vx of randomVerses) {
    const vxItem = document.createElement('li')
    vxItem.className = 'verseListItem'
    verseList.append(vxItem)
    vxItem.innerHTML = `<div class="verseTD">
            <div class="verseListItTitle">${vx.ref}</div>
            <div class="verseListItMain">${vx.verse}</div>
        </div>
        <button class="addToJournalBtn actionBtn">${systemIcons.bookmark}</button>
        `
}
document.querySelector('.nameArea').addEventListener('click', function (evt) {
    let throttle = false

    if (!throttle && evt.detail === 7) {
        toggleDeveloperMode(true)
        throttle = true;
        setTimeout(function () {
            throttle = false;
        }, 1500);
    }
});
function toggleDeveloperMode(onOrOff) {
    if (onOrOff == true) {
        if (sessionStorage.getItem('developerMode') == 'true') {
            alert('Developer mode is already on.')
        } else {
            sessionStorage.setItem('developerMode', 'true')
            alert('Developer mode has been enabled.\nWarning: This tool is intended for developer use only and only use if you know what you\'re doing.')
        }
    } else {
        sessionStorage.removeItem('developerMode')
        alert('Developer mode has been disabled. Reload to take effect.')
    }
}
if (sessionStorage.getItem('developerMode') == 'true') {
    document.querySelector('.nameArea').innerHTML += `<div class="textTag dev">DEV</div>`
}

window.addEventListener('keyup', (e) => {
    if (sessionStorage.getItem('developerMode') == 'true') {
        if (e.key == '/') {
            document.querySelector('.developerPanel').style.display = 'flex'
            document.querySelector('.devCmdInput').focus()
            document.querySelector('.devCmdInput').value = '/'
        }
    }
})