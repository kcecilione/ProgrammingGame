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