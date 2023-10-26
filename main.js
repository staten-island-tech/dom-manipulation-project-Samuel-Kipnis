const DOMSelectors = ['username', 'email', 'password']
let elements = ''

const outputDisplay = document.querySelector('#outputDisplay')

function getDOMObject(selector) {
    return document.getElementById(DOMSelectors[selector])
}

let count = 0;
let allContainers = {}

function createData(htmlElement, data) {
    count++
    const container = document.createElement('div')
    const values = []
    let elements = `<div class=${count}>`
    data.forEach(el => {
        const element = document.createElement('p')
        element.classList.add('p-2', 'my-3', 'shadow-md', 'border', 'rounded')
        element.innerText = el



        values.push(element)
    });
    values.forEach((value) => {
        container.append(value)
    })

    const deleteButton = document.createElement('button')
    deleteButton.type = 'button'
    deleteButton.innerText = 'Delete'

    const tempCount = count;
    deleteButton.addEventListener('click', (e) => {
        delete allContainers[tempCount]
        render()
    })
    container.append(deleteButton)

    allContainers[count] = container
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

function createOutput() {
    const outputs = []
    for(let selector in DOMSelectors) {
        const input = getDOMObject(selector)
        const output = `${DOMSelectors[selector].charAt(0).toUpperCase() + DOMSelectors[selector].slice(1)}: ${input.value}`
        outputs.push(output)
        clearInput(DOMSelectors[selector])
    }
    return outputs
}


document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const output = createOutput()
    createData(outputDisplay, output)
    render()
})