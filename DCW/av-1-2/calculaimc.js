//var button = getElementById('criaForm');
//button.addEventListener('click', function(){
//});
	var nome = document.imcForm.nome.value;
    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;

function validaForm() {
	
	if (nome == ""){
		alert("Nome invalido!");
	}

	if (altura == null && isNaN(altura)) {
		alert("Altura invalida!");
	}
	if (peso == null && isNaN(peso)) {
		alert("Peso invalido!");
	}

/*
	if (calculo < 17)  {
		alert("Voc� est� muito abaixo do peso com esse �ndice");
	} else if (calculo >= 17 && calculo < 18.49) {
		alert("Voc� est� abaixo do peso com esse �ndice");
	} else if (calculo >= 18.5 && calculo < 24.99) {
		alert("Voc� est� com o peso normal com esse �ndice");
	} else if (calculo >= 25 && calculo < 29.99) {
		alert("Voc� est� acima do peso com esse �ndice");
	} else if (calculo >= 30 && calculo < 34.99) {
		alert("Voc� est� com Obesidade I com esse �ndice");
	} else if (calculo >= 35 && calculo < 39.99) {
		alert("Voc� est� com obesidade II com esse �ndice");
	} else if (calculo > 40) {
		alert("Voc� est� com Obesidade III (M�rbida) com esse �ndice");
	}	*/
}

function calculaImc() {        
    var calculo = this.peso / (this.altura * this.altura);
}

function calculaValida() {
	calculaImc();
	validaForm();
	
}



function criaFormulario() {
	var clone = document.getElementById('imcForm').cloneNode(true);


	var destino = document.getElementById('formBox');
	destino.appendChild(clone);

	var camposClonados = clone.getElementById('formBox');
	for (i = 0; i < camposClonados.length; i++){
		camposClonados[i].value = '';
	}
}