function changePage(curr, next) {
      var next, currPage, nextPage;

      currPage = document.getElementById('page' + curr);
      nextPage = document.getElementById('page' + next);
      
      currPage.style.display = 'none';
      nextPage.style.display = 'block';
}


function start() {
      document.getElementById('page0').style.display = 'block';
}

function createUser(){
	var nameString = document.getElementById('nameBox').value;
	var genderString = document.getElementById('genderBox').value;
	var user = {
		name: nameString,
		gender: genderString,
		};
}

var hasMap = false
var hasKnife = false
var hasShovel = false

function findProtection(){
	if (hasMap === false){
		alert('In order to find protection, you need to find the map, located on the beach!')
	}
}

function takeKnife(){
	hasKnife = true
}

function goToBeach(){
	alert('In order to go to the beach, you need protection to get through the forest!')
}

function talkOnBeach2(){
	document.getElementById('page7').innerHTML=
		'Hello. My name is Holokai. Are you looking for the map?'
}