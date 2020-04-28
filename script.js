var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; 
var wakeupTime = 9;
var lunchTime = 12;
var partyTime = 17;
var napTime = lunchTime + 2;

var message = document.getElementById('timeEvent');
var lolcat = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";


if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time == napTime) {
    messageText = "IZ NAP TIME…";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
} else if (time < noon) {
  messageText = "Good morning!";
} else if (time > evening) {
  messageText = "Good Evening!";
} else {
  messageText = "Good afternoon!";
}

message.innerText = messageText;
lolcat.src = image;