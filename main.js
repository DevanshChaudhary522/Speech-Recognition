draw_circle = "";
draw_rectangle = "";
x = 0;
y = 0;

function setup(){
    canvas = createCanvas(900,600);
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is Hearing Please Speak"; 
    recognition.start();

}

recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "the word recognised is " + content;
    if (content == "circle") {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "started drawing circle " ; 
        draw_circle = "set";
    }

    if (content == "rectangle") {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "started drawing rectangle";
        draw_rectangle = "set";
    }
    
}

function draw(){
    if(draw_circle == "set") {
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle Is Drawn";
        draw_circle = ""; 
    }
    if(draw_rectangle == "set") {
        rect(x,y,105,75);
        document.getElementById("status").innerHTML = "Rectangle Is Drawn";
        draw_rectangle = ""; 
    }

}