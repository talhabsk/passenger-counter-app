let countElement = document.getElementById("count-element")
let count = 0

function increment() {
    count = count + 1
    console.log(count)
    countElement.innerText = count
}
