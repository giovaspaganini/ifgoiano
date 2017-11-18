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

var pesoRegex = function(peso) {
    var regex = /[0-9]/

    if (regex.test(peso)) {
        return true;
    } else {
        alert("Peso só pode conter números");
        return false;
    }
}

var alturaRegex = function(altura) {
    var regex = /[0-9]/

    if (regex.test(altura)) {
        return true;
    } else {
        alert("Digite a altura corretamente!");
        return false;
    }
}

var ImcCalc = function(peso, altura){
    imc[aux] = peso / (altura * altura);
    return imc[aux];
}

function ResultImc() {
    if (imc < 17) {
        imcResult =  "Você está muito abaixo do peso com esse índice";
    }
    if (imc >=17 && imc <18.5) {
        imcResult =  "Você está abaixo do peso com esse índice";
    }
    else if (imc >= 18.5 && imc < 24.9) {
        imcResult =  "Você está com o peso normal com esse índice";
    }
    else if (imc >= 25 && imc < 29.9){
        imcResult =  "Você está acima do peso com esse índice";
    }
    else if (imc >= 30 && imc < 34.9) {
        imcResult =  "Você está com Obesidade I com esse índice";
    }
    else if (imc >= 35 && imc < 39.9) {
        imcResult =  "Você está com obesidade II (severa) com esse índice";
    }
    else if (imc > 40) {
        imcResult =  "Você está com Obesidade III (mórbida) com esse índice";
    }
    return imcResult;
}

var AddPessoa = function () {
    aux++;
    addPessoa();
}