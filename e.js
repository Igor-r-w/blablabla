//ex 1
let nome=("joao")

console.log(nome)

//ex 2
let a=5; b=10; soma=(a+b)

console.log(soma)

//ex 3

let primeironome="josefa" ;segundonome=" silva";nome=primeironome+segundonome

console.log(nome)
//ex 4
let pessoa={nome:"icaro",
    idade:14,
    endereço:"blumenau",
    telefone:"4002-8022"
}
console.log(pessoa)
//ex 5
let vetor=["maça","banana","laranja"]

vetor.push("uva")

console.log (vetor)

vetor.clear
//ex 6
vetor=[1,2,3,4,5]

console.log(vetor[0],vetor[4])

let cores=["vermelho","verde","azul"]
for(i=0; i<cores.length; i++){
    console.log(cores[i])
}
//ex 7
let idade=14

if(idade<18){
    console.log("menor de idade")
}
else if(idade>=18)
console.log("maior de idade")


//ex 8

let nota=8

if(nota>7){
    console.log("aprovado")
}
if(nota>=5 && nota<=7){
    console.log("recuperação")
}
if(nota<5){
    console.log("reprovado")
}

// ex 9

let  diadasemana=3

switch(diadasemana){

    case 1:console.log("segundafeira")
    break
    case 2:console.log("terçafeira")
    break
    case 3:console.log("quartafeira")
    break
    case 4:console.log("quintafeira")
    break
    case 5:console.log("sextafeira")
    break
    case 6:console.log("sabado")
    break
    case 7:console.log("domingo")
    break
}

// ex 10

for(i=1;i<=10;i++){
    console.log(i)
}

//ex 11

let contador=1 
while(contador<=5){
    console.log(contador)
    contador++
}

// ex 12

let numero=0

while(numero<3){
    console.log(numero)
    numero++
}

//ex 13

vetor=[10,20,30,40,50]
conta=0
for(i=0;i<vetor.length;i++){
    conta=conta+vetor
    console.log(i)
}

//ex 14

let numeros=[1,2,3,4,5,6,7,7], maior = 0
for(let i = 0; i < numeros.length; i++){
    // IF pra saber se o numero atual é > maior
    if(numeros[i]>maior){
        maior=numeros[i]
    }
}
console.log(maior)
// Depois do for, escrever o maior que sobrou


//ex 15

numeros=[1,2,3,4]
let menor=10
for(let i = 0;i< numeros.length;i++){
    if(numeros[i]<menor){
        menor=numeros[i]
    }
}
console.log(menor)
//ex 16

n=10
resultado = 1
for(i=1;i<=n;i++){
    resultado=resultado*i
    console.log(resultado)
}

//ex 17

numeros=10

for(i=0;i<=numeros;i++){
    if(i%2==0){
        console.log("são pares")
    }
    else console.log("são impares")
}

//ex 18

texto="abcdefghijklmnopqrstuvwxyza"
let vogais=["a","e","i","o","u"]
cont=0
for(i=0;i<=texto.length;i++){
    if(texto[i]==="a"||"e"||"i"||"o"||"u"){
    cont++
    }console.log(cont)
}cont=0
for(i=0;i<=texto.length;i++){
    var caracter=texto[i]
    if(vogais.includes(caracter)){
        cont++
    }console.log(cont)
}

//ex 19

texto="texto"

