var botao = document.querySelector('#adicionar-pessoa');
botao.addEventListener('click', function(event){
    event.preventDefault();

    var inputNome   =   document.querySelector('#campo-nome');
    var inputPeso   =   document.querySelector('#campo-peso');
    var inputAltura =   document.querySelector('#campo-altura');

    var imc = inputPeso.value / (inputAltura.value * inputAltura.value);
	var status = "";
	
	if (imc < 17) {
		status = "Voce esta muito abaixo do peso com esse indice";
	} else if (imc >= 17 && imc < 18.49) {
		status = "Voce esta abaixo do peso com esse indice";
	} else if (imc >= 18.5 && imc < 24.99) {
		status = "Voce esta com o peso normal com esse indice";
	} else if (imc >= 25 && imc < 29.99) {
		status = "Voce esta acima do peso com esse indice";
	} else if (imc >= 30 && imc < 34.99) {
		status = "Voce esta com Obesidade I com esse indice";
	} else if (imc >= 35 && imc < 39.99) {
		status = "Voce esta com obesidade II com esse indice";
	} else if (imc > 40) {
		status = "Voce esta com Obesidade III (Morbida) com esse indice";
	}

    var novoPaciente =  "<tr class='pessoa'>" +
                        "<td class='info-nome'>" + inputNome.value + "</td>" +
                        "<td class='info-peso'>" + inputPeso.value + "</td>" +
                        "<td class='info-altura'>" + inputAltura.value + "</td>" +
                        "<td class='info-imc'>" + imc + "</td>" + 
						"<td class='info-status'>" + status + "</td></tr>";

    var table = document.querySelector('table');
    table.innerHTML += novoPaciente;

    /**
     * Limpa o formulário
     */
    inputNome.value     = "";
    inputPeso.value     = "";
    inputAltura.value   = "";
});
