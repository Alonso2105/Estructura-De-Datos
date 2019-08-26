document.querySelector("#btn").addEventListener("click",entradaSalida);

function entradaSalida() {
	var hE = document.querySelector("#hEntrada").value;
	var mE = document.querySelector("#mEntrada").value;
	var sE = document.querySelector("#sEntrada").value;
	var hS = document.querySelector("#hSalida").value;
	var mS = document.querySelector("#mSalida").value;
	var sS = document.querySelector("#sSalida").value;

	var E = new Date(0,0,0,hE,mE,sE,0);
	var S = new Date(0,0,0,hS,mS,sS,0);

	document.querySelector("#calcular").innerText = diferenciaHoras(E, S);	
}

function diferenciaHoras(horaEntrada, horaSalida) {
	
	var Segs = (horaSalida - horaEntrada) / 1000;
	
	if (Segs <= 0) {
		return "La Hora de Salida debe ser despues de la hora entrada";
	}

	var Horas = Math.trunc(Segs / 3600);
	Segs = Segs % 3600;

	var Minutos = Math.trunc(Segs / 60);
	Segs = Segs % 60;

	return "Tiempo transcurrido: "+Horas+":"+Minutos+":"+Segs;

}