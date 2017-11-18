function imc(){
        var altura = document.imcForm.altura.value;
        var peso = document.imcForm.peso.value;
        
        var quadrado = (altura * altura);
        
        var calculo = (peso/quadrado);
        
        alert("Seu IMC é: " + calculo);
}
