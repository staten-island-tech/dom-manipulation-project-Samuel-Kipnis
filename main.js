const DOMSelectors = ['username', 'email', 'password']

function getDOMObject(selector) {
    return document.getElementById(DOMSelectors[selector])
}

function insertData(htmlElement, data) {
    let elements = ''
    data.forEach(el => {
        elements += `<p class='p-2 my-3 shadow-md border rounded'>${el}</p>`
    });
    htmlElement.innerHTML = elements
}

const outputDisplay = document.querySelector('#outputDisplay')

document.querySelector('#form').addEventListener('submit', (e) => {
    const outputs = []
    for(let selector in DOMSelectors) {
        const input = getDOMObject(selector)
        const output = `${DOMSelectors[selector].charAt(0).toUpperCase() + DOMSelectors[selector].slice(1)}: ${input.value}`
        outputs.push(output)
    }
    insertData(outputDisplay, outputs)
})