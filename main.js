const DOMSelectors = ['username', 'email', 'password']
let elements = ''

const outputDisplay = document.querySelector('#outputDisplay')

function getDOMObject(selector) {
    return document.getElementById(DOMSelectors[selector])
}

let inputNum = 0;
let allContainers = {}

function createHTML(inputValues) {
    inputNum++
    const container = document.createElement('div')
    const outputData = createOutputs(inputValues)

    outputData.forEach((value) => {
        container.append(value)
    })

    const deleteButton = createButton(inputNum)
    container.append(deleteButton)

    allContainers[inputNum] = container
}

function createOutputs(inputValues) {
    const result = []
    inputValues.forEach(el => {
        const element = document.createElement('p')
        element.classList.add('p-2', 'my-3', 'shadow-md', 'border', 'rounded')
        element.innerText = el

        result.push(element)
    });

    return result
}

function createButton(inputNum) {
    const deleteButton = document.createElement('button')
    deleteButton.type = 'button'
    deleteButton.innerText = 'Delete'

    const tempNum = inputNum;
    deleteButton.addEventListener('click', (e) => {
        delete allContainers[tempNum]
        render()
    })

    return deleteButton
}

function render() {
    outputDisplay.innerHTML = ''
    for(let container in allContainers) {
        outputDisplay.append(allContainers[container])
    }
}

function clearInput(selector) {
    document.querySelector('#' + selector).value = ''
}

function getValues() {
    const values = []
    for(let selector in DOMSelectors) {
        const input = getDOMObject(selector)
        const output = `${DOMSelectors[selector].charAt(0).toUpperCase() + DOMSelectors[selector].slice(1)}: ${input.value}`
        values.push(output)
        clearInput(DOMSelectors[selector])
    }
    return values
}


document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const values = getValues()
    createHTML(values)
    render()
})