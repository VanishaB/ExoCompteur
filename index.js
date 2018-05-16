var button = document.getElementById("button");
var secondsRestante;
var intervalle;

button.onclick= function(){
    startCountdown();
}

function tick(){
	//  h1
	var AfficheTemps = document.getElementById("time");

	// change les seconde en mm:ss\

	var min = Math.floor(secondsRestante / 60);
	var sec = secondsRestante - (min * 60);

	//ajoute un zero devant si <10
	if (sec < 10) {
		sec = "0" + sec;}

	// fait la chaine de characteres
	var separation = min.toString() + ":" + sec;

	// Change le temps
	AfficheTemps.innerHTML = separation;

	// stop qd c fini
	if (secondsRestante === 0){
		alert("Done!");
		clearInterval(intervalle);
	}

	//c est le tps restant avant que le compteur arrive a terme et donc on le decremente a chaque sec 
	secondsRestante--;

}

function startCountdown(){

	

	//obtenir les comptes de la zone de texte "minutes"
	var minutes = document.getElementById("minutes").value;
	
	// vérifier si ce n'est pas un nombre
	if (isNaN(minutes)){
		alert("rentrez un chiffre");
		return; // arrête la fonction si vrai

	}

	// cb de seconde
	secondsRestante = minutes * 60;
	
//  toute les secondes il va rappeller a chaque fois la fonction 'tick'

	intervalle = setInterval(tick, 1000);

}



