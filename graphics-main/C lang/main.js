hljs.highlightAll()

const container = document.querySelectorAll('.container')

container.forEach(element => {
    let innerMostElement = element.children[1]
    console.log(innerMostElement)
});