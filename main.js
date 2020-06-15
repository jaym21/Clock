var morning = 4; 
var noon = 12;
var evening = 18;
var night  = 23;

//Current Time
var showCurrentTime = function() {
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
    
    var hours = currentTime.getHours();
    var minutes =currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var ampm = "AM";

    //Setting hours
    if(hours >= 12){
        ampm = "PM";
    }
    
    // Making Clock 12 hour
    if(hours > noon){
        hours = hours - 12;
    }
    //Setting Minutes
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    //Setting Seconds
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    //Displaying the clock
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + ampm;

    clock.innerText = clockTime;
};

//Changing clock time automatically and displaying message
var updateClock = function() {
    var time  = new Date().getHours();
    var message;
    var eventJS = document.getElementById('event');

    if(time >= 4 && time <12){
        var orientation = "45deg";
        var colorOne = "#f94206";
        var colorTwo = "#fa8616";
        var colorThree = "#fbca25";
        message = "Good Morning!";
        document.body.style.background = 'linear-gradient('
        + orientation + ', ' + colorOne + ', ' + colorTwo + ',' + colorThree + ')';

    }else if(time >= 12 && time < 18){
        message = "Good Afternoon!";
        var orientation = "45deg";
        var colorOne = "#f9872b";
        var colorTwo = "#edf122";
        document.body.style.background = 'linear-gradient('
        + orientation + ', ' + colorOne + ', ' + colorTwo + ')';

    }else if(time >= 18 && time < 22){
        message = "Good Evening!";
        var orientation = "45deg";
        var colorOne = "#be5af7";
        var colorTwo = "#165b91";
        document.body.style.background = 'linear-gradient('
        + orientation + ', ' + colorOne + ', ' + colorTwo + ')';
        var textColor = "#ffffff";
        document.body.style.color = textColor;

    }else{
        message = "Good Night!";
        var orientation = "45deg";
        var colorOne = "#2b215d";
        var colorTwo = "#2766ba";
        document.body.style.background = 'linear-gradient('
        + orientation + ', ' + colorOne + ', ' + colorTwo + ')';
        var textColor = "#ffffff";
        document.body.style.color = textColor;
    }

    eventJS.innerText = message;

    showCurrentTime();
};
updateClock();

//Updating clock every second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);
