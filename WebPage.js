function changePage(curr, next) {
      var next, currPage, nextPage;
      user = new Object();
		user.name = document.getElementById('nameBox').value;
		user.age = document.getElementById('ageBox').value;

      currPage = document.getElementById('page' + curr);
      nextPage = document.getElementById('page' + next);

	  document.getElementById('nameSpan').innerHTML = user.name;
	  document.getElementById('nameSpan2').innerHTML = user.name;
	  document.getElementById('nameSpan3').innerHTML = user.name;
	  document.getElementById('nameSpan4').innerHTML = user.name;
	  document.getElementById('nameSpan5').innerHTML = user.name;
	  document.getElementById('nameSpan6').innerHTML = user.name;
	  document.getElementById('nameSpan7').innerHTML = user.name;
	  document.getElementById('nameSpan8').innerHTML = user.name;
	  document.getElementById('nameSpan9').innerHTML = user.name;
	  document.getElementById('nameSpan10').innerHTML = user.name;
      currPage.style.display = 'none';
      nextPage.style.display = 'block';
}


function start() {
      document.getElementById('page0').style.display = 'block';
}

var hasMap = false
var hasKnife = false
var hasShovel= false
characterobjects = new Array();
	characterobjects[0] = "hasMap";
	characterobjects[1] = "hasKnife";
	characterobjects[2] = "hasShovel";
	
function findProtection(){
	if (hasMap === false){
		alert('In order to find protection, you need to find the map, located on the beach!')
	}
}

function protectionAlert(){
	alert('You need protection to travel through the forest! It\'s dangerous!')
}

function shovelAlert(){
	alert('You need to talk to the island native to figure out where to go!')
}

function mapAlert(){
	alert('You need the map to know where to look!')
}

function nothingAlert(){
	alert('Nothing here! Try somewhere else')
}

function takeKnife(){
	hasKnife = true
}

function goToBeach(){
	alert('In order to go to the beach, you need protection to get through the forest!')
}

function randomButton(){
	placesArray = new Array();
	placesArray[0] = "beach";
	placesArray[1] = "forest";
	placesArray[2] = "cave";
	var random = Math.floor (Math.random() * placesArray.length);
	document.getElementById('page35').innerHTML= 
		(placesArray[random]);
}