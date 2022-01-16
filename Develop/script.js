var inputArray = ["9-Input", "10-Input", "11-Input", "12-Input", "13-Input", "14-Input", "15-Input", "16-Input", "17-Input"];
var timeArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"]
var keysArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var saveButtons = document.getElementsByClassName("save-btn");

var currentDay = document.getElementById("currentDay")
currentDay.textContent = moment().format("MMM Do YY");

let currentTime = moment().format("HH:mm");
// checking each timeblock to see if time is less/greater than currentTime
for(var i=0; i < 9; i++){
    if(timeArray[i] < currentTime && currentTime < timeArray[i+1]){
        document.getElementById(inputArray[i]).style.backgroundColor = "red";
    } else if(timeArray[i] > currentTime){
        document.getElementById(inputArray[i]).style.backgroundColor = "green";
    } else {
        document.getElementById(inputArray[i]).style.backgroundColor = "rgb(219, 216, 216)";
    }
}
// Populate textarea with local storage data
function populateData(){
    var key = keysArray[i]
    for(var i=0; i < keysArray.length; i++){
        if(localStorage.getItem(key)){
            var text = document.getElementById(key);
            text.value = localStorage.getItem(key);
        }
    }
}
populateData();
for(var i=0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", saveTask)
}

function saveTask(){
    var clickedTask = $(this).parent();
    var clickedText = clickedTask.find("textarea").val();
    var savedKey = clickedTask.children(".time-block").text();
    localStorage.setItem(savedKey, clickedText)
}





// let nine = moment().format("HH:mm");
// nine.set({ 
//     hour:9,
//     minute:0,
//     second:0,
//     millisecond:0
//   })
// console.log(nine);
