const randomVerses = [
    {
        verse: 'For all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus.',
        ref: 'Romans 3:23-24',
        imageURL: 'https://pbs.twimg.com/media/EVfFFFxX0Ag8QAO.jpg',
        source: 'The Bible on Twitter'
    },
    {
        verse: 'If you declare with your mouth, "Jesus is Lord," and believe in your heart that God raised him from the dead, you will be saved. For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved.',
        ref: 'Romans 10:9-10',
        imageURL: 'https://d347bo4ltvvnaz.cloudfront.net/images/ScriptureArt_0117_-_Romans_10_9_157x157.jpg',
        source: 'Faith Chapel Assembly of God Pleasanton'
    },
    {
        verse: 'Whoever believes in the Son has eternal life, but whoever rejects the Son will not see life, for God\'s wrath remains on them.',
        ref: 'John 3:36',
        imageURL: 'https://pbs.twimg.com/media/Eo3AFdhXIAE7RBU.jpg:large',
        source: 'James Lamont Newson on Twitter'
    },
    {
        verse: 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.',
        ref: '1 John 1:9',
        imageURL: 'https://idisciple.blob.core.windows.net/idm/1john1_9_promo_en-1-OriginalWithCut-774x1376-90-CardBanner.Jpeg',
        source: 'iDisciple'
    },
    {
        verse: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not send his Son into the world to condemn the world, but to save the world through him.',
        ref: 'John 3:16-17',
        imageURL: 'https://imageproxy.youversionapi.com/1280x1280/https://s3.amazonaws.com/static-youversionapi-com/images/base/81638/1280x1280.jpg',
        source: 'YouVersion'
    },
    {
        verse: 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.',
        ref: 'Romans 6:23',
        imageURL: 'https://imageproxy.youversionapi.com/320x320/https://s3.amazonaws.com/static-youversionapi-com/images/base/62584/1280x1280.jpg',
        source: 'YouVersion'
    },
    {
        verse: 'For it is by grace you have been saved, through faith-and this is not from yourselves, it is the gift of God-not by works, so that no one can boast.',
        ref: 'Ephesians 2:8-9',
        imageURL: 'https://media.swncdn.com/cms/IB/55592-eph2-8-9.1200w.tn.jpg',
        source: 'Bible Study Tools'
    },
    {
        verse: 'He is the atoning sacrifice for our sins, and not only for ours but also for the sins of the whole world.',
        ref: '1 John 2:2',
        imageURL: 'https://ymi.today/wp-content/uploads/2018/03/03_oct_bv.jpg',
        source: 'YMI'
    },
    {
        verse: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.',
        ref: 'Isaiah 53:5',
        imageURL: 'https://votd.olivetree.com/03_31_NIV.jpg',
        source: 'OliveTree'
    },
    {
        verse: 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.',
        ref: 'Romans 5:8',
        imageURL: 'https://i1.wp.com/www.busyandlovingit.com/wp-content/uploads/2016/03/Romans-5_8.jpg',
        source: 'Busy and Loving It!'
    },
    {
        verse: 'In reply Jesus declared, "I tell you the truth, no one can see the kingdom of God unless he is born again."',
        ref: 'John 3:3',
        imageURL: 'https://biblia.com/bible/images/640x480/Jn3.3?extension=png&fallbackOnFailure=false',
        source: 'Faithlife'
    }
]

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
<path d="M2.75 10V13C2.75 13.8284 3.42157 14.5 4.25 14.5H19.75C20.5784 14.5 21.25 13.8284 21.25 13V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
            el.style.alignItems = 'flex-end'
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

let countedKeys = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()-=+-_`~[]\\|}{;\':"<>?/., '
countedKeys = countedKeys.split('')

function startTyping(ct, array) {
    let activeCharNum = 0;
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
                    activeCharNum++
                    if (activeCharNum !== array.length) {
                        ct.children[activeCharNum].classList.add('active')
                    }
                } else {
                    ct.children[activeCharNum].classList.add('incorrectChar')
                    ct.children[activeCharNum].classList.remove('active')
                    activeCharNum++
                    incorrectChars++
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
                    ct.children[activeCharNum - 5].scrollIntoView({
                        inline: "start", behavior: "smooth"
                    })
                } catch (e) { }
            }
            if (activeCharNum == array.length) {
                if (ct == refContainer) {
                    completeTest()
                    keyboardLock = true
                    timer.pause()
                } else {
                    startTyping(refContainer, refSplit)
                }
            }
            if (e.key == 'Backspace') {
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
    window.addEventListener('blur', () => {
        timer.pause()
    })
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
        localStorage.setItem('username', username)
    })
}
const preloadedUserName = localStorage.getItem('username')
let username = preloadedUserName
if (!preloadedUserName) {
    askForName()
} else {
    document.querySelector('#playerNameOp').value = preloadedUserName;
    popups.style.display = 'none'
    keyboardLock = false
}
document.querySelector('#playerNameOp').addEventListener('focus', () => keyboardLock = true)
document.querySelector('#playerNameOp').addEventListener('blur', (e) => { keyboardLock = false; localStorage.setItem('username', e.target.value); username = e.target.value })

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

    imgGroup.append(img, cap)
    vGroup.append(refLab, verseLab)

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

        panel.querySelector(`.panelView#${viewId}`).style.display = (showPanel == true ? 'block' : 'none');

        panel.addEventListener('click', (e) => {
            if (lightDismiss) {
                if (!document.elementsFromPoint(e.x, e.y).includes(panel.querySelector('.panel'))) {
                    panel.style.display = 'none'
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