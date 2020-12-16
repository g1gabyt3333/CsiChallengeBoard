


var button = document.getElementsByName("calculate")


var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();


var count = 0, isDark = false;

var curTime = hours + ":" + minutes + ":" + seconds

setInterval(setTime, 1000); //challenge 5 
function setTime(){ 

    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();


    curTime = hours + ":" + minutes + ":" + seconds
    document.getElementById("time").innerText = curTime;
    if(count >59){
        if(isDark == false){
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            isDark = true;
            count = 0;
        }
        else{
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            isDark = false;
            count = 0;
        }


    }
    count++;
    
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



