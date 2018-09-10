var username;
var tag;
var pass;
var random;


function login(){
	username = document.getElementById('usernameInput').value;	
	tag = document.getElementById('tagInput').value;
	pass = document.getElementById('passInput').value;

	if(username !== '' && tag !== '' && pass !== ''){
		document.getElementById('uInput').innerHTML = username;
		document.getElementById('tInput').innerHTML = '@' + tag;
		document.getElementById('headerText').innerHTML = '@' + tag + '\'s timeline';

		document.getElementById('login').style.display = "none";
		document.getElementById('mFeed').style.filter = "none";
		document.getElementById('uBox').style.filter = "none";
		document.getElementById('tBox').style.filter = "none";
		document.getElementById('fBox').style.filter = "none";
		document.getElementById('cUp').style.filter = "none";

		document.getElementById('feed').style.color = "#17b4be";
		document.getElementById('feed').style.fontWeight = "700";

		random = Math.floor((Math.random() * 10) + 1);
		if(random <= 3){
			document.getElementById('profimg').src='img/prof_1.png';
		}
		if(random > 3 && random <= 6){
			document.getElementById('profimg').src='img/prof_2.png';
		}
		if(random > 6){
			document.getElementById('profimg').src='img/prof_3.png';
		}
	}

}
