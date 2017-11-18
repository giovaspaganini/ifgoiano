var nome = new Array();
var peso = new Array();
var altura = new Array();
var imc = new Array();
var imcResult = new Array();
var i = new Array();
var aux = 0;

function addPessoa(){
    do{
        nome[aux] = prompt("Seu nome: ");
    } while (nome[aux] == "" || nome[aux] == null || ValidaNome(nome[aux]) == false )
    
    do {
        peso[aux] = prompt("Seu peso: ");
    } while (peso[aux] == "" || peso[aux] == null || ValidaPeso(peso[aux]) == false)
    
    do {
        altura[aux] = prompt("Sua altura:");
    } while (altura[aux] == "" || altura[aux] == null || ValidaAltura(altura[aux]) == false)

    var se = prompt("Digite: 1 - Novo | 2 - Calcular IMC");

    if (se == 1){
        AddPessoa();

    }else if(se == 2){
        for (var a = 0; a <= aux; a++ ) {
            i[a] = ("Nome: " + nome[a] +
             "\n IMC: " + ImcCalc(peso[a], altura[a]).toFixed(2) +
              "\n Nível: " + ImcResult(ImcCalc(peso[a], altura[a]))+ "\n\n");
        }
        alert(i.toString());
    }
}

var nomeRegex = function(nome) {
    var regex = /[a-zA-Z]/

    if (regex.test(nome)) {
        return true;
    } else {
        alert("Nome só pode conter letras!");
        return false;
    }
}

