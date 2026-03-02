let saveElement = document.getElementById("save-element")
let countElement = document.getElementById("count-element")
let count = 0
let totalInPlane = 0
let limit = 10; 

function increment() {
    if (totalInPlane < limit) {
        count += 1;
        totalInPlane += 1
        countElement.innerText = count;

        if (totalInPlane === limit) {
            countElement.style.color = "#ff4d4d"; 
        }
    } else {
        alert("Boarding Complete: Airplane capacity reached!");
        console.log("Capacity full! Cannot add more passengers.");
    }
}

function save() {
    if (count > 0) {
        let countStr = count + " - "
        saveElement.innerText += countStr
        countElement.innerText = 0
        count = 0
        if (totalInPlane < limit) {
            countElement.style.color = "white";
        }
    }
}

function reset() {
    count = 0
    totalInPlane = 0
    countElement.innerText = 0
    countElement.style.color = "white";
    saveElement.innerText = "Previous entries: "
}