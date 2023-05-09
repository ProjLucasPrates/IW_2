// <- Comenta
//alert("Você atinjiu seu oijetivo")

/*
var nome = prompt('Digite seu nome: ')
console.log(nome)
document.write(nome)
*/

//Variaveis

/*let a = 1
console.log(a)

if(true){
    let a = 10
    console.log(a)
}
console.log(a)
*/

/*
var nome = prompt('Digite seu nome: ')
//alert('Bem-Vindo ' + nome)

//template string => interpolação
alert(`Bem-Vindo ${nome}`)
*/

var n1 = parseInt(prompt("Digite o n1: "))
var n2 = parseInt(prompt("Digite o n2: "))
console.log("n1 é: " + typeof n1)
console.log("n2 é: " + typeof n2)

var soma = n1 + n2
console.log("Soma é :" + typeof soma)

if(soma>10){
    document.write(`<p class="maior">A soma ${n1} + ${n2} é ${soma}</p>`)
}
else{
    document.write(`<p class="menor">A soma ${n1} + ${n2} é ${soma}</p>`)
}


