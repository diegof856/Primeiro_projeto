(function(){
var pegarConta = document.querySelector(".numeros");
var inputResultado = document.querySelector('input[name="results"]');
var botaoApagar = document.querySelector('.btn--apagar');
var $btn = document.querySelector('.btn--calc');
var segundaBarra = document.getElementById("segunda__barra");

botaoApagar.addEventListener("click", function () {
 pegarConta.value = "";
 inputResultado.value = "";
});
pegarConta.addEventListener("input", function () {
 
 this.value = this.value.replace(/[^0-9./*+\-]/g, "");
});
pegarConta.addEventListener("keydown", function (event) {
 if (event.key === "Enter") {
     calcular();
 } 
});
$btn.addEventListener("click", function () {
calcular();
})

function calcular(){
  
  var tirarEspaco = pegarConta.value.replace(/\s/g, '');
var partes = tirarEspaco.match(/[+\-*/]|\d+\.\d+|\d+/g);

var resultadoPrimario = parseFloat(partes[0]);

for (var i = 1; i < partes.length; i += 2) {
    var operador = partes[i];
    var numeroAtual = parseFloat(partes[i + 1]);

    if (operador === '+') {
        resultadoPrimario += numeroAtual;
    } else if (operador === '-') {
        resultadoPrimario -= numeroAtual;
    } else if (operador === '*') {
        resultadoPrimario *= numeroAtual;
    } else if (operador === '/') {
        resultadoPrimario /= numeroAtual;
    }
}
if (isNaN(resultadoPrimario)) {
  alert("Impossível realizar esta operação. Por favor, reinsira seus cálculos!");
  inputResultado.value = "Expressão incorreta";
  segundaBarra.classList.add('barra__clicada_erro');
} else {
  inputResultado.value = resultadoPrimario;
}

}
})();