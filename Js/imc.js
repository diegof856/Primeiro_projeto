 var $barra_Entradadados = document.getElementById("entrada-de-dados");
var btn_Imc = document.querySelector(".btn__IMC");
var $textoAltura = document.getElementById("texto_Altura");
var $textoPeso = document.getElementById("texto_Peso");
var btn_voltar = document.querySelector(".btn_voltar");
var $textoResultado = document.getElementById("texto_resultado");
var $divTexto_e_animacao = document.getElementById("texto_div");
var $animacao = document.getElementById("seta_baixo");
var $btn_Tabela = document.getElementById("btn__IMC_resultado");
var $btnVoltarAoInicio = document.getElementById("btn__IMC_voltaraoinicio");
var imagemIMC = document.getElementById("image_IMC");
var $btn_AbrirTabela = document.getElementById("textoIMC");
var $divBtns = document.querySelector(".btns_Div");
// controla o clique
var primeiroclique = false;
var altura = null;
var peso = null;

btn_Imc.addEventListener("click", function() {
    btn_Imc.classList.add("btn_clicado");
   

    if($textoAltura.style.display === "block" && !primeiroclique){
        //se nao tem a classe clique opacity adiciona
        if(!$textoPeso.classList.contains("clique_opacity")){
            $textoPeso.classList.add("clique_opacity");
        }
        // modifica o status block 
        $textoAltura.style.display = "none";
        $textoPeso.style.display ="block";
        //para aparecer o botao voltar
        btn_voltar.style.display = "block";
        // o efeito so funciona com display assim 
        setTimeout(function(){
$textoPeso.classList.add("opacity_um");
        },50);
        // para o controle de clique 
        setTimeout(function(){
            btn_Imc.classList.remove("btn_clicado");
            primeiroclique = true;
    
                    },300);
                

                    //pegar dados para o calculo altura e modifica o placeholder
                    
                       altura = $barra_Entradadados.value
                       
                    $barra_Entradadados.value= "";
                    $barra_Entradadados.placeholder = "EX: 82.70"
    }

            
                if($textoPeso.style.display === "block" && primeiroclique){
                  
                    primeiroclique = false;
                   //adiciona uma classe na div pai para deixar o flexbox alinhada  
                    $divTexto_e_animacao.classList.add("alinhamento__barra");
                    //adiciona a classe resultado no texto final e barra__resultado no input e modifica o display para none para o efeito funcionar tambem
                    $textoResultado.classList.add("resultado");
                    $barra_Entradadados.classList.add("barra__resultado");

                   $barra_Entradadados.classList.add("clique_opacity");
                    $barra_Entradadados.style.display = "none"
                    // modifica o display do texto de peso
                    $textoPeso.style.display = "none";
                    $textoResultado.style.display = "block";
                    //tira animacao para o alinhamento
                    $animacao.style.display = "none";
                    //para funcionar o efeito transition no input
                   setTimeout(function(){
                    $barra_Entradadados.style.display= "block";
                   }, .1)
                       
           
                    setTimeout(function(){
                       
                        $barra_Entradadados.classList.add("opacity_um")
                        $textoResultado.classList.add("opacity_um");

                    },50);
                    
                    btn_Imc.style.display = "none"
                    $btn_Tabela.style.display = "block";
                    $btnVoltarAoInicio.style.display ="block";
                        // adiciona classe para o efeito
                        $btn_Tabela.classList.toggle("clique_opacity");
                        $btnVoltarAoInicio.classList.toggle("clique_opacity");
                        //tempo de espera para o efeito funcionar
                        setTimeout(function(){
                            $btn_Tabela.classList.toggle("opacity_um");
                        $btnVoltarAoInicio.classList.toggle("opacity_um");
                        },50)
                        $divBtns.classList.add("btn_EspacoDiv");

                        //remove placeholder
                        $barra_Entradadados.removeAttribute("placeholder");
                        //segunda entrada de dados
                       peso = $barra_Entradadados.value;
                        var resultadoIMC = calcular(altura,peso);
                        if (resultadoIMC !== null) {
                            $barra_Entradadados.value = resultadoIMC.toFixed(2);
                        }else{
                            $barra_Entradadados.value = "Erro"
                        }
                        

                                
                }
    
    
});
btn_voltar.addEventListener("click",function(){
if($textoAltura.style.display !== "block"){
     //texto do peso
$textoPeso.classList.remove("opacity_um");
    $textoPeso.style.display = "none";
    //botao voltar
    btn_voltar.style.display = "none";
    //modifica status none para block
    $textoAltura.style.display = "block";
// voltar ao original
    primeiroclique = false;
    $barra_Entradadados.placeholder = "EX: 1.69"
    $barra_Entradadados.value = "";
    

}

if($textoPeso.style.display !== "block" && $textoResultado.style.display !== "none"){
    //texto do peso
    $textoPeso.style.display = "block"
    $textoPeso.classList.remove("clique_opacity");
    //texto altura
    $textoAltura.style.display = "none";
    //div pai texto e animaçao 
    $divTexto_e_animacao.classList.remove("alinhamento__barra");
    // texto final do resultado resultado remove classe e modifica status 
    $textoResultado.classList.remove("resultado");
    $textoResultado.classList.remove("opacity_um");
    $textoResultado.style.display = "none";
    //remove classe no input
    $barra_Entradadados.classList.remove("barra__resultado");
    $barra_Entradadados.classList.remove("clique_opacity");
    $barra_Entradadados.classList.remove("opacity_um");

    $animacao.style.display = "block"
    btn_voltar.style.display = "block";
    primeiroclique = true;

    // remove classe para o efeito
    $btn_Tabela.classList.toggle("clique_opacity");
    $btnVoltarAoInicio.classList.toggle("clique_opacity");
    $btn_Tabela.classList.toggle("opacity_um");
    $btnVoltarAoInicio.classList.toggle("opacity_um");
    //modifica o style display dos botoes
    btn_Imc.style.display = "block"
                    $btn_Tabela.style.display = "none";
                    $btnVoltarAoInicio.style.display ="none";
                    $divBtns.classList.remove("btn_EspacoDiv");

                    $barra_Entradadados.placeholder = "EX: 82.70"
                    $barra_Entradadados.value = "";
}
});

$barra_Entradadados.addEventListener("input", function (event) {
    var valorAtual = $barra_Entradadados.value;
    var novoValor = valorAtual.replace(/[^0-9.]/g, '');
    $barra_Entradadados.value = novoValor;
});

$barra_Entradadados.addEventListener("click", (e) =>{
    

    e.target.classList.add("barra-clicada")
});


document.addEventListener("click",(e) =>{
    if(!$barra_Entradadados.contains(e.target)){
        $barra_Entradadados.classList.remove("barra-clicada");
    }
     if(!btn_Imc.contains(e.target)){
        btn_Imc.classList.remove("btn_clicado");
    }
});
$btn_Tabela.addEventListener("click", ()=>{
    if(!primeiroclique){
    imagemIMC.classList.toggle("expandida");
    $btn_Tabela.classList.toggle("padding_btn");
    btn_voltar.style.display = "none"
    $btn_AbrirTabela.style.display = "none";
    $btnVoltarAoInicio.style.display = "none";

    setTimeout(function(){
        primeiroclique = true;
    },50);
}
    if($btn_AbrirTabela != "block" && primeiroclique){
        imagemIMC.classList.toggle("expandida");
        $btn_Tabela.classList.toggle("padding_btn");
        btn_voltar.style.display = "block"
        $btn_AbrirTabela.style.display = "block";
    $btnVoltarAoInicio.style.display = "block";
    primeiroclique = false;

    }


  

});

$btnVoltarAoInicio.addEventListener("click", () => {
    // Restaurar o estado inicial da interface aqui
    $textoAltura.style.display = "block";
    $textoPeso.style.display = "none";
    btn_voltar.style.display = "none";
    $divTexto_e_animacao.classList.remove("alinhamento__barra");
    $textoResultado.classList.remove("resultado");
    $textoResultado.classList.remove("opacity_um");
    $textoResultado.style.display = "none";
    $barra_Entradadados.classList.remove("barra__resultado");
    $barra_Entradadados.classList.remove("clique_opacity");
    $barra_Entradadados.classList.remove("opacity_um");
    $animacao.style.display = "block";
    btn_Imc.style.display = "block";
    $btn_Tabela.style.display = "none";
    $btnVoltarAoInicio.style.display = "none";
    $divBtns.classList.remove("btn_EspacoDiv");

    // Redefinir a lógica de clique para o estado inicial
    primeiroclique = false;

    $barra_Entradadados.placeholder = "EX: 1.69"
    $barra_Entradadados.value = "";
});



//funcao para fazer os calculos do IMC
function calcular(altura,peso){
    
    var imc = null;
    if (!altura || isNaN(altura) || altura <= 0 || !peso || isNaN(peso) || peso <= 0) {
        return null; // Retorna null se altura ou peso forem inválidos
    }
    
    
   imc = peso/(altura * altura);
    
   
   return imc; 

    
   
}







