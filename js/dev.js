const developerCommands = [
    {
        cmd: 'disabledevmode',
        desc: 'Disables developer mode'
    },
    {
        cmd: 'showverses',
        desc: 'Shows all BiblePuzzle verses'
    },
    {
        cmd: 'setincorrectchars',
        desc: 'Simulate incorrect typed characters',
        params: ['incorrectChars:number']
    },
    {
        cmd: 'setsetting',
        desc: 'Sets a setting',
        params: ['setting:string', 'value:settingValue']
    },
    {
        cmd: 'togglecpsview',
        desc: 'Toggles the characters/sec counter'
    },
]
const developerViews = []