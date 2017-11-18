(function constructor() {
	var nome = [];
	var altura = [];
	var peso = [];
	var imc = [];
	var resultado = [];

	imcCalc(nome,altura,peso,imc,resultado);
})();

function imcCalc(nome,altura,peso,imc,resultado) {
	for (var i = 0; i >= 2; i++) {
		do {
			nome[i] = prompt("Digite seu nome: ");
		} while (nome == false);

		do {
			altura[i] = prompt("Digite sua altura: ");
		} while (altura == false);

		do {
			peso[i] = prompt("Digite seu peso: ");
		} while (peso == false);
	
	
		imc = this.peso / (this.altura * this.altura);

		if (imc < 17) {
			alert("Voce esta muito abaixo do peso com esse indice");
		} else if (imc >= 17 && imc < 18.49) {
			alert("Voce esta abaixo do peso com esse indice");
		} else if (imc >= 18.5 && imc < 24.99) {
			alert("Voce esta com o peso normal com esse indice");
		} else if (imc >= 25 && imc < 29.99) {
			alert("Voce esta acima do peso com esse indice");
		} else if (imc >= 30 && imc < 34.99) {
			alert("Voce esta com Obesidade I com esse indice");
		} else if (imc >= 35 && imc < 39.99) {
			alert("Voce esta com obesidade II com esse indice");
		} else if (imc > 40) {
			alert("Voce esta com Obesidade III (Morbida) com esse indice");
		}
	}		
}


