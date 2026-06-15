function verificarTriangulo(){

    let x = Number(document.getElementById("lado1").value);
    let y = Number(document.getElementById("lado2").value);
    let z = Number(document.getElementById("lado3").value);

    let resultado = document.getElementById("resultadoTriangulo");

    if(x < y + z && y < x + z && z < x + y){

        if(x == y && y == z){
            resultado.innerHTML = "Triângulo Equilátero";
        }
        else if(x == y || x == z || y == z){
            resultado.innerHTML = "Triângulo Isósceles";
        }
        else{
            resultado.innerHTML = "Triângulo Escaleno";
        }

    }else{
        resultado.innerHTML = "Não forma um triângulo";
    }
}

function calcularIMC(){

    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let imc = peso / (altura * altura);

    let classificacao = "";

    if(imc < 18.5){
        classificacao = "Abaixo do peso";
    }
    else if(imc < 25){
        classificacao = "Peso normal";
    }
    else if(imc < 30){
        classificacao = "Sobrepeso";
    }
    else if(imc < 35){
        classificacao = "Obesidade grau 1";
    }
    else if(imc < 40){
        classificacao = "Obesidade grau 2";
    }
    else{
        classificacao = "Obesidade grau 3";
    }

    document.getElementById("resultadoIMC").innerHTML =
    "IMC: " + imc.toFixed(2) + " - " + classificacao;
}


function calcularImposto(){

    let ano = Number(document.getElementById("ano").value);
    let valor = Number(document.getElementById("valorCarro").value);

    let imposto;

    if(ano < 1990){
        imposto = valor * 0.01;
    }else{
        imposto = valor * 0.015;
    }

    document.getElementById("resultadoImposto").innerHTML =
    "Imposto: R$ " + imposto.toFixed(2);
}

function calcularSalario(){

    let salario = Number(document.getElementById("salario").value);
    let codigo = Number(document.getElementById("codigo").value);

    let percentual;

    if(codigo == 101){
        percentual = 10;
    }
    else if(codigo == 102){
        percentual = 20;
    }
    else if(codigo == 103){
        percentual = 30;
    }
    else{
        percentual = 40;
    }

    let aumento = salario * percentual / 100;
    let novoSalario = salario + aumento;

    document.getElementById("resultadoSalario").innerHTML =
    "Salário antigo: R$ " + salario.toFixed(2) +
    "<br>Novo salário: R$ " + novoSalario.toFixed(2) +
    "<br>Diferença: R$ " + aumento.toFixed(2);
}