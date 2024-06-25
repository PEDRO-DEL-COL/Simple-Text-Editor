let optionButtons = document.querySelectorAll('.option-button')
let advancedOptionButton = document.querySelectorAll('.adv-option.button')
let fontName = document.getElementById('fontName')
let fontSizeRef = document.getElementById('font-size')
let writingArea = document.getElementById('text-input')
let linkButton = document.getElementById('createLink')
let alignButtons = document.querySelectorAll('.align')
let spacingButtons = document.querySelectorAll('.spacing')
let formatButtons = document.querySelectorAll('.format')
let scriptButtons = document.querySelectorAll('.script')

let fontList = [
  'Arial',
  'Verdana',
  'Times New Roman',
  'Garamond',
  'Georgia',
  'Courier New',
  'Cursive',
]

const intializer = () => {
  Highlighter(alignButtons, true)
  Highlighter(spacingButtons, true)
  Highlighter(formatButtons, false)
  Highlighter(scriptButtons, true)

  fontList.map((value) => {
    let option = document.createElement('option')
    option.value = value
    option.innerHTML = value
    fontName.appendChild(option)
  })

  for (let i = 1; i <= 7; i++) {
    let option = document.createElement('option')
    option.value = 1
    option.innerHTML = i
    fontSizeRef.appendChild(option)
  }

  fontSizeRef.value = 3
}

const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value)
}
