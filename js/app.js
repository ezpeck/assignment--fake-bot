console.log("All right!");

var waitTime = 0;

var pBotPic = document.createElement('img');
var messageToUser1 = document.createElement('p');
var messageToUser2 = document.createElement('p');
var messageToUser3 = document.createElement('p');
var messageToUser4 = document.createElement('p');
var messageToUser5 = document.createElement('p');
var messageToUser6 = document.createElement('p');
var messageToUser7 = document.createElement('p');
var messageToUser8 = document.createElement('p');

var firstInput = document.createElement('input');
var configInput = firstInput.setAttribute('name','username');


var body = document.querySelector('body');

pBotPic.src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.makeagif.com%2Fmedia%2F9-25-2015%2FebMPlp.gif&f=1";


setTimeout(function() {
	body.appendChild(messageToUser1);
	messageToUser1.textContent = ('Hello!');
	console.log('P-BOT says hallo');
}, 350);

setTimeout(function() {
	body.appendChild(messageToUser2);
	messageToUser2.textContent =('My name is P-BOT');
	console.log('P-BOT is introducing itself right now!')
}, 1000);

setTimeout(function() {
	body.appendChild(pBotPic);
}, 1100);

setTimeout(function() {
	body.appendChild(messageToUser3);
	messageToUser3.textContent =('I was a Biotechnolgist, but right now I\'m studying Web Development.');
}, 2000);

setTimeout(function() {
	body.appendChild(messageToUser4);
	messageToUser4.textContent =('I like to watch series and read books');
}, 3000);

setTimeout(function() {
	body.appendChild(messageToUser5);
	messageToUser5.textContent =('But tell me.  What\'s your name?');
}, 4000);



setTimeout(function() {
	body.appendChild(firstInput);
}, 5000);

firstInput.addEventListener('keydown', (checkKeyPress));

function checkKeyPress(key){
	if (key.keyCode == "13") {
		console.log('enter');
	}
}


// var firstInput = document.createElement('input');
// var configInput = firstInput.setAttribute('name','nameinput')


    firstInput.addEventListener('keydown', function (evt) {
    evt.preventDefault();
	var user_name = firstInput.value;	
    if (user_name !== '') {
        body.appendChild(messageToUser6);
        messageToUser6.textContent = 'Hello ' + user_name +'! It\'s nice to meet you!';
    } else{
        body.appendChild(messageToUser7);
        messageToUser7.textContent = 'I need you to write your name';  
    }});   








/*

var validating_username = e.target.elements.nameinput;
    if (nameinput.length > 0 && taxidTextBox.value.length >= 10) {
        document.querySelector('.validation--tax-id').textContent = 'Success!!!';
    } else if (taxidTextBox.value === ''){
        document.querySelector('.validation--tax-id').textContent = 'Must provide Tax ID';
    } else {
        document.querySelector('.validation--tax-id').textContent = 'Input field must contain a number > 0 and is 10 digits';
    }

*/
/*

//This is a try to automate the conversation with the user 

for (var i = 0; i < 10 ; i++) {
	currentTime = waitTime + 1000;
	if (currentTime === waitTime + 1000) {
	currentTime = waitTime;
}
console.log(waitTime);
}

*/