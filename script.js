


var button = document.getElementsByName("calculate")


var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();



var curTime = hours + ":" + minutes + ":" + seconds

setInterval(setTime, 1000); //challenge 5 not done
function setTime(){
    document.getElementById("time").innerText = curTime;
    
}






var age = window.prompt("What is your age") //Challenge 6
    if(age >= 18  && age <=60){
        
    }
    else{
        alert("You are unable to access the site")
    }


function bmi() {
    var weight = document.getElementsByTagName("input")[0].value;
    var height = document.getElementsByTagName("input")[1].value;


    weight = parseInt(weight);
    height = parseInt(height)

    var bmi = 703 * (weight / Math.pow(height, 2));
    console.log(bmi)
    
    document.getElementById("bmi").value = bmi;

}



