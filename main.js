const DOMSelectors = ['username', 'email', 'password']

function getDOMObject(selector) {
    return document.getElementById(DOMSelectors[selector])
}

function insertData(htmlElement, data) {
    htmlElement.innerText = data
}

const outputDisplay = document.querySelector('#outputDisplay')

document.querySelector('#form').addEventListener('submit', (e) => {
    let output = ''
    for(let selector in DOMSelectors) {
        const input = getDOMObject(selector)
        const value = input.value
        output += `${DOMSelectors[selector].charAt(0).toUpperCase() + DOMSelectors[selector].slice(1)}: ${input.value}\n`
    }
    console.log(output);
    insertData(outputDisplay, output)
})