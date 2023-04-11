//1)
alert ("Seja Bem-vindo!!")
alert("Essa é a sua página inicial!!")


//2)
let idade = prompt("Quantos anos você tem? ")

if (idade < 18){
    document.write("Você tem mais de 18 anos. ")
    document.write("<br></br>")
}else{
    document.write("Você tem menos de 18 anos. ")
    document.write("<br></br>")
}


//3)
let teste = confirm("Você é o admin? ")
console.log(teste)

if(teste == true){
    document.write("Usuário logado! ")
    document.write("<br></br>")
}else{
    document.write("Usuário inválido! ")
    document.write("<br></br>")
}


//4)
num = 105
if (20 > num){
    document.write(" É maior ")
    document.write("<br></br>")
}else{
    document.write(" É menor ")
    document.write("<br></br>")
}

if (60 > num){
    document.write(" é maior ")
    document.write("<br></br>")
}else{
    document.write(" é menor ")
    document.write("<br></br>")
}

if (106 > num){
    document.write(" é maior ")
    document.write("<br></br>")
}else{
    document.write(" é menor ")
    document.write("<br></br>")
}

if (110 > num){
    document.write(" é maior ")
    document.write("<br></br>")
}else{
    document.write(" é menor ")
    document.write("<br></br>")
}


//5

if (20 < num){
    document.write(" é menor ")
    document.write("<br></br>")
}

if(60 < num){
    document.write(" é menor ")
    document.write("<br></br>")
}

if (106 < num){
    document.write(" é menor")
    document.write("<br></br>")
}else{
    document.write( "é maior")
    document.write("<br></br>")
}

if (110 < num){
    document.write(" é menor ")
    document.write("<br></br>")
}else{
    document.write(" é maior")
    document.write("<br></br>")
}



//6)
let valor = 3
if(valor > 1 && valor < 5){
    document.write(" esse número esta entre 1 e 5! ")
    document.write("<br></br>")
}

let valor1 = 11
if(valor1 < 10 && valor1 > 20){
    document.write("numero doido")
    document.write("<br></br>")
}else{
    document.write(" numero inexistente ")
    document.write("<br></br>")
}

let valor2 = 102
if( valor2 > 100 && valor2 < 110){
    document.write("esse numero esta entre 100 e 110! ")
    document.write("<br></br>")
}


//7)
numero = 23
if(numero > 20 || numero < 25){
    document.write("esse numero esta entre 20 e 25! ")
    document.write("<br></br>")
}

numero1 = 8
if(numero1 < 10 || numero1 > 15){
    document.write(" esse numero nao esta entre 10 e 15")
    document.write("<br></br>")
}

numero2 = 7
if(numero2 > 5 || numero2 < 10){
    document.write(" esse numero esta entre 5 e 10! ")
    document.write("<br></br>")
}