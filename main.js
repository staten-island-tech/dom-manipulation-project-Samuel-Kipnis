const DOMSelectors = ['username', 'email', 'password']
let elements = ''

function getDOMObject(selector) {
    return document.getElementById(DOMSelectors[selector])
}

function insertData(htmlElement, data) {
    data.forEach(el => {
        elements += `<p class='p-2 my-3 shadow-md border rounded'>${el}</p>`
    });
    elements += '<br>'
    htmlElement.innerHTML = elements
}

function clearInput(selector) {
    document.querySelector('#' + selector).value = ''
}

const outputDisplay = document.querySelector('#outputDisplay')

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const outputs = []
    for(let selector in DOMSelectors) {
        const input = getDOMObject(selector)
        const output = `${DOMSelectors[selector].charAt(0).toUpperCase() + DOMSelectors[selector].slice(1)}: ${input.value}`
        outputs.push(output)
        clearInput(DOMSelectors[selector])
    }
    insertData(outputDisplay, outputs)
})