var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; 
var wakeupTime = 9;
var lunchTime = 12;
var partyTime = 17;
var napTime = lunchTime + 2;

if (time == partyTime);{
    messageText = "IZ PARTEE TIME!!";
}else if (time == napTime){
    messageText = "IZ NAP TIME...";
}else if (time == lunchTime){
    messageText = "IZ NOM NOM NOM TIME!!";
}else if (time == wakeupTime){
    messageText = "IZ TIME TO GETTUP.";
}else if (time < noon){
    messageText = "Good morning, Mate!";
}else if (time > evening){
    messageText = "Good Evening, Mate!";
}else{
    messageText = "Good afternoon, Mate!";
}

console.log(messageText);