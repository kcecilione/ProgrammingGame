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




function findProtection(){
	alert('In order to find protection, you need to find the map, located on the beach!')
}

function talkOnBeach(){
	document.getElementById('page3').innerHTML=
		'Hello. My name is Holokai. Are you looking for the map?'
}

function forestFromBeach(){

}

function talkInCave(){

}

function forestFromCave(){

}

function talkOnBeach2(){
	document.getElementById('page7').innerHTML=
		'Hello. My name is Holokai. Are you looking for the map?'
}