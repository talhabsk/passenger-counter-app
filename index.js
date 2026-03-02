let saveElement = document.getElementById("save-element")
let countElement = document.getElementById("count-element")
let count = 0

function increment() {
    count += 1
    console.log(count)
    countElement.innerText = count
}

function save() {
    if (count > 0) {
        let countStr = count + " - "
        saveElement.innerText += countStr
        countElement.innerText = 0
        count = 0
    }
}

function reset() {
    count = 0
    countElement.innerText = 0
    saveElement.innerText = "Previous entries: "
}