function soma(n1,n2){
    let soma= n1+n2
    return soma
}

console.log(soma(2,3))

let senha_certa = "trabalho"

function comprasenha(senha_certa,senha_escrita){
if(senha_escrita == senha_certa){
    console.log("acerto miseravi")
    } else {
        console.log("senha errada")
    }
}
comprasenha(senha_certa,"trabalho")
comprasenha(senha_certa,"tabaia")

//ex 1
n=30
resultado=1
function fatorial(fat){
n=30
resultado=1
for(i=1;i<n;i++){
resultado=resultado*i
}
return resultado
}
console.log(fatorial(resultado))
//ex 2

function impar_par(in_par){
    if(in_par%2==0){
        console.log("par")
    } else {
        console.log("impar")
    }
}

impar_par(4)