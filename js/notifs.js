var users = [Donald Trump, nzherald, All Blacks];
var i = 0;

function makeNotifs(){

	for(i=0; var<8; i++){
		var original = document.getElementById('n' + i);
	    var clone = original.cloneNode(true); // "deep" clone
	   	clone.id = "n" + ++i; // there can only be one element with an ID
	    //clone.onclick = duplicate; // event handlers are not cloned
	    original.parentNode.appendChild(clone);
	}
}