function optionsRdb() {
	var orden = document.getElementById('orden');
	var random = document.getElementById('random');
	if (orden.checked) {
		location.href = "ordenQuestion.html";
	}
	if (random.checked) {
		location.href = "randomQuestion.html";
	}
	if (orden.checked == false && random.checked == false) {
		alert("Selecciona una opcion!");
	}
}

function changeColor(rdb) {
	if (rdb===1) {
		document.getElementById('lblOrden').style.backgroundColor= '#fff';
		document.getElementById('lblRandom').style.backgroundColor= '#ddd0fe';
	}
	else{
		document.getElementById('lblRandom').style.backgroundColor= '#fff';
		document.getElementById('lblOrden').style.backgroundColor= '#ddd0fe';
	}
}