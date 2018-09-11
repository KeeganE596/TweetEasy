function clearAll(){
	document.getElementById('abProf').style.display = "none";
	document.getElementById('emProf').style.display = "none";
	document.getElementById('nhProf').style.display = "none";
	document.getElementById('momentsFeed').style.display = "none";
	document.getElementById('notifsFeed').style.display = "none";
	document.getElementById('mFeed').style.display = "none";

	document.getElementById('uBox').style.display = "none";
	document.getElementById('fBox').style.display = "none";
	document.getElementById('pBox').style.display = "none";
	document.getElementById('pTBox').style.display = "none";
	
	document.getElementById('moments').style.color = "rgb(110, 110, 110)";
	document.getElementById('moments').style.fontWeight = "600";
	document.getElementById('feed').style.color = "rgb(110, 110, 110)";
	document.getElementById('feed').style.fontWeight = "600";
	document.getElementById('notiflink').style.color = "rgb(110, 110, 110)";
	document.getElementById('notiflink').style.fontWeight = "600";

}

function goHome(){
	clearAll();

	document.getElementById('mFeed').style.display = "block";
	document.getElementById('uBox').style.display = "block";
	document.getElementById('fBox').style.display = "block";
	document.getElementById('headerText').innerHTML = '@' + tag + '\'s timeline';
	document.getElementById('feed').style.color = "#17b4be";
	document.getElementById('feed').style.fontWeight = "700";
}

function goMoments(){
	clearAll();

	document.getElementById('momentsFeed').style.display = "block";
	document.getElementById('momentsFeed').style.filter = "none";
	document.getElementById('uBox').style.display = "block";
	document.getElementById('fBox').style.display = "block";
	document.getElementById('headerText').innerHTML = 'twitter moments';
	document.getElementById('moments').style.color = "#17b4be";
	document.getElementById('moments').style.fontWeight = "700";
}

function goNotifs(){
	clearAll();

	document.getElementById('notifsFeed').style.display = "block";
	document.getElementById('notifsFeed').style.filter = "none";
	document.getElementById('uBox').style.display = "block";
	document.getElementById('fBox').style.display = "block";
	document.getElementById('headerText').innerHTML = '@' + tag + '\'s notifications';
	document.getElementById('notiflink').style.color = "#17b4be";
	document.getElementById('notiflink').style.fontWeight = "700";
}

function changeProf(changeTo){
	clearAll();

	switch(changeTo){
		case 'herald':
			showNzherald();
			break;
		case 'elon':
			showElon();
			break;
		case 'allblacks':
			showAllblacks();
			break;
	}
}

function showNzherald(){
	document.getElementById('nhProf').style.display = "block";
	document.getElementById('nhProf').style.filter = "none";
	document.getElementById('pBox').style.display = "block";
	document.getElementById('profpageimg').src='img/nzherald.jpg';
	document.getElementById('profName').innerHTML = 'nzherald';
	document.getElementById('profTag').innerHTML = '@nzherald';
	document.getElementById('tweets').innerHTML = '112K';
	document.getElementById('following').innerHTML = '3,704';
	document.getElementById('followers').innerHTML = '278K';
	document.getElementById('likes').innerHTML = '641';
	document.getElementById('pTBox').style.display = "block";
	document.getElementById('ptweetInput').placeholder = 'Tweet to @nzherald...';
	document.getElementById('pTButton').innerHTML = 'Tweet to nzherald';
	document.getElementById('headerText').innerHTML = '@nzherald\'s tweets';
}

function showElon(){
	document.getElementById('emProf').style.display = "block";
	document.getElementById('emProf').style.filter = "none";
	document.getElementById('pBox').style.display = "block";
	document.getElementById('profpageimg').src='img/elonmusk.jpg';
	document.getElementById('profName').innerHTML = 'Elon Musk';
	document.getElementById('profTag').innerHTML = '@elonmusk';
	document.getElementById('tweets').innerHTML = '5,436';
	document.getElementById('following').innerHTML = '64';
	document.getElementById('followers').innerHTML = '22.5M';
	document.getElementById('likes').innerHTML = '1,479';
	document.getElementById('pTBox').style.display = "block";
	document.getElementById('ptweetInput').placeholder = 'Tweet to @elonmusk...';
	document.getElementById('pTButton').innerHTML = 'Tweet to Elon Musk';
	document.getElementById('headerText').innerHTML = '@elonmusk\'s tweets';
}

function showAllblacks(){
	document.getElementById('abProf').style.display = "block";
	document.getElementById('abProf').style.filter = "none";
	document.getElementById('pBox').style.display = "block";
	document.getElementById('profpageimg').src='img/allblacks.jpg';
	document.getElementById('profName').innerHTML = 'All Blacks';
	document.getElementById('profTag').innerHTML = '@AllBlacks';
	document.getElementById('tweets').innerHTML = '40.5K';
	document.getElementById('following').innerHTML = '568';
	document.getElementById('followers').innerHTML = '830K';
	document.getElementById('likes').innerHTML = '1,096';
	document.getElementById('pTBox').style.display = "block";
	document.getElementById('ptweetInput').placeholder = 'Tweet to @AllBlacks...';
	document.getElementById('pTButton').innerHTML = 'Tweet to All Blacks';
	document.getElementById('headerText').innerHTML = '@AllBlack\'s tweets';
}

