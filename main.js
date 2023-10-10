const DOMSelectors = {
    username: '#username', email: '#email', password: '#password'
}
const DOMObjects = {}
for(let selector in Object.keys) {
    const DOMObject = document.querySelector(DOMSelectors[selector])
    DOMObjects[selector] = DOMObject
}

console.log(DOMObjects)