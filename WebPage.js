function beginGame(){
	var name = document.getElementById('nameBox').value;
		document.getElementById('outputDiv').innerHTML=
			'Hello ' + name + '!';
document.getElementById('outputDiv').style.display='block';
document.getElementById('inputDiv').style.display='none';
}
