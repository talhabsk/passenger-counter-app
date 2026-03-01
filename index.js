let saveElement = document.getElementById("save-element")
let countElement = document.getElementById("count-element")
let count = 0

function increment() {
    count += 1
    console.log(count)
    countElement.innerText = count
}

function save(){
    let countStr = count + " - "
    saveElement.innerText += countStr
    countElement.textContent = 0
    count = 0
}

function reset() {
    count = 0
    countElement.textContent = 0
    saveElement.textContent = "Previous entries: "
}
