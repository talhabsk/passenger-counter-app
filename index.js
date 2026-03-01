let countElement = document.getElementById("count-element")
let count = 0

function increment() {
    count += 1
    console.log(count)
    countElement.innerText = count
}

function save(){
    console.log(count)
}

