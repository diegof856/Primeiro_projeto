var valorAnterior = document.querySelector(".primeiro--termo");
var valorAtual = document.querySelector(".termo_atual");
var buttons = document.querySelectorAll(".numero");
var operadores = document.querySelectorAll(".operador");
var btnDeletar = document.querySelector(".deletar");
var btnLimpar = document.querySelector(".limpar");
var btnIgualdade= document.querySelector(".igualdade");

class Calculator{
constructor(valorAnteriorTexto, valorAtualTexto){
    this.valorAnteriorTexto = valorAnterior;
    this.valorAtualTexto = valorAtual;
    this.valorAtual = "";
}
    //add digitos no visor
    adicionarDigito(digit){
        //verifica se o possui um e nao permitir colocar mais de um
        if(digit === "." && this.valorAtualTexto.innerText.includes(".")){
            return;
        }
       this.valorAtual = digit;
       this.mostrarVisor();
    }
    //processo de todas as operações
    Calculo(operation){
        //verificar se o valor atual esta vazio
    if(this.valorAtualTexto.innerText === "") {
 // chamar a funcao para mudar o operador
        if(this.valorAnteriorTexto.innerText !== ""){
           this.mudancaDeOperador(operation);
    }
    return;
}
        //mostrar valor atual e anterior
var operacaoValor;
var anterior = +this.valorAnteriorTexto.innerText.split(" ")[0];
var atual = +this.valorAtualTexto.innerText;

switch (operation){
    case "+":
        operacaoValor = anterior + atual;
        this.mostrarVisor(operacaoValor, operation, atual, anterior)
    break;
    case "-":
        operacaoValor = anterior - atual;
        this.mostrarVisor(operacaoValor, operation, atual, anterior)
    break;
    case "/":
        operacaoValor = anterior / atual;
        this.mostrarVisor(operacaoValor, operation, atual, anterior)
    break;
    case "*":
        operacaoValor = anterior * atual;
        this.mostrarVisor(operacaoValor, operation, atual, anterior)
    break;
    case "%":
        operacaoValor = (anterior / 100) * atual;
        this.mostrarVisor(operacaoValor, operation, atual, anterior)
    break;
    case "+":
        operacaoValor = anterior + atual;
        this.mostrarVisor(operacaoValor, operation, atual, anterior)
    break;
        default:
            return;
}



    }
    //mostra os valores na tela
    mostrarVisor(operacaoValor = null, operation = null, atual = null, anterior = null){
       
        if(operacaoValor === null){
       this.valorAtualTexto.innerText += this.valorAtual;
        }else{
        //verifica se o valor atual é 0 se for nao faz nada
        if(anterior === 0){
            operacaoValor = atual;
        }
        //sobe o valor para cima
        if(operation === '%'){

        this.valorAnteriorTexto.innerText = `${this.formatarNumero(operacaoValor)} ${operation}`;
        this.valorAtualTexto.innerText = "";
    }else{
        this.valorAnteriorTexto.innerText = `${operacaoValor} ${operation}`;
        this.valorAtualTexto.innerText = "";
    }
        }
    } 
    //formatar valor final
    formatarNumero(numero) {
        return parseFloat(numero).toFixed(2);
    }

    //mudar operadores
    mudancaDeOperador(operation){
        var operadorMath = ["*", "-", "+", "/", "%"]
        if(!operadorMath.includes(operation)){
            return;
        }
        this.valorAnteriorTexto.innerText = this.valorAnteriorTexto.innerText.slice(0,-1) + operation;
    }
    //deletar o ultimo texto
    botaoDeletar(){
        this.valorAtualTexto.innerText = this.valorAtualTexto.innerText.slice(0,-1);
    }
    //limpar tudo
    botaoLimpar(){
        this.valorAtualTexto.innerText = "";
        this.valorAnteriorTexto.innerText = "";
    }
    //igualdade
    botaoIgualdade(){
        var operacao = this.valorAnteriorTexto.innerText.split(" ")[1];
        this.Calculo(operacao);
    }

}

var calc = new Calculator(valorAnterior, valorAtual);


buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        var valor = e.target.innerText;

        if(+valor >= 0 || valor === "."){
          calc.adicionarDigito(valor);
        }
    });
});

operadores.forEach((btnOp) => {
    btnOp.addEventListener("click", (e) => {
    var op = e.target.innerText;
    calc.Calculo(op);
    });
});

btnDeletar.addEventListener("click", (e) =>{
   calc.botaoDeletar();
});
btnLimpar.addEventListener("click", () =>{
    calc.botaoLimpar();
});
btnIgualdade.addEventListener("click", () =>{
    calc.botaoIgualdade();
});

