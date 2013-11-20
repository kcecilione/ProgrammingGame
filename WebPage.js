function beginGame(){
		var place = document.getElementById('placeBox').value;
		if (place === 'beach'){
			location.href="Beach.html"
		}
		if (place === 'forest'){
			location.href="Forest.html"
		}
		if (place === 'cave'){
			location.href="Cave.html"
		}
}

function goToBeach(){
		
}

function findProtection(){
	alert('In order to find protection, you need to find the map, located on the beach!')
}

function talkOnBeach(){
	document.getElementById('outputDiv').innerHTML=
		'Hello. My name is Holokai. Are you looking for the map?'
}

function forestFromBeach(){

}

function talkInCave(){

}

function forestFromCave(){

}