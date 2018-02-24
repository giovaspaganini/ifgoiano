print('IMC Calculator v1.0')
print('========================')

altura = float(input('Digite a sua altura: '))
peso = float(input('Digite seu peso: '))

imc = peso / (altura * altura)

print('Seu IMC é: ',round(imc, 2))

if (imc < 17):
    print('Voce esta muito abaixo do peso com esse indice')
elif (imc >= 17 and imc < 18.49):
	print('Voce esta abaixo do peso com esse indice')
elif (imc >= 18.5 and imc < 24.99):
	print('Voce esta com o peso normal com esse indice')
elif (imc >= 25 and imc < 29.99):
	print('Voce esta acima do peso com esse indice')
elif (imc >= 30 and imc < 34.99):
	print('Voce esta com Obesidade I com esse indice')
elif (imc >= 35 and imc < 39.99):
	print('Voce esta com obesidade II com esse indice')
elif (imc > 40):
	print('Voce esta com Obesidade III (Morbida) com esse indice')
else:
    print('Dados inválidos')

print('========================')
