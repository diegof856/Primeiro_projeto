(function() {
    var $menuFechado = document.getElementById('botao__fechado');
    var $menuAberto = document.getElementById('botao__aberto');
    var navElemento = document.querySelector('.menunav');
   
    var contato = document.querySelector('.contatoMenu');
    var divPosition = document.querySelector('.div__posicao');
   
    $menuFechado.addEventListener('click', function(event) {
        abrirMenu(event);
    });

    $menuAberto.addEventListener('click', function(event) {
        fecharMenu(event);
    });

    contato.addEventListener('click', function(e) {
        if(!divPosition.classList.contains("opacity_1")){
        abrirMenuContato(e);
        }else{
            fecharMenuContato();
        }
    });
   

    document.addEventListener('click', function (e) {
        if (!navElemento.contains(e.target) && !divPosition.contains(e.target) && !($menuAberto.contains(e.target) || $menuFechado.contains(e.target) || contato.contains(e.target))) {
            $menuAberto.classList.add("menu__btn_fechado");
            $menuFechado.classList.remove("menu__btn_fechado");
            fecharNav();
            fecharMenuContato();
        }
    });

    function abrirMenu(event) {
        event.currentTarget.classList.add("menu__btn_fechado");
        $menuAberto.classList.remove("menu__btn_fechado");
        
        mostrarNav();
    }

    function fecharMenu(event) {
        event.currentTarget.classList.add("menu__btn_fechado");
        $menuFechado.classList.remove("menu__btn_fechado");
        fecharNav();
        fecharMenuContato();
    }

    function mostrarNav() {
        
        navElemento.classList.add("display_mobile_block");
    
       
        navElemento.classList.remove("fechado");
        setTimeout(function(){
            navElemento.classList.add("aberto");
        },50);
    }

    function fecharNav() {

        navElemento.classList.remove("aberto");

        navElemento.classList.add("fechado");
        setTimeout(function(){
            navElemento.classList.remove("display_mobile_block");

            navElemento.classList.add("display_mobile");
        },300);
    }

    function abrirMenuContato(e){
       
        divPosition.classList.add("opacity_1");
        if(!divPosition.classList.contains("div__card_contato_desktop")){
            divPosition.classList.add("div__card_contato_desktop")
        }
      
        
    }

    function fecharMenuContato() {
       
        divPosition.classList.remove("opacity_1");
        if(divPosition.classList.contains("div__card_contato_desktop")){
            divPosition.classList.remove("div__card_contato_desktop")
        }
        
    }

    //<<<<links>>>>>
    document.getElementById("linkedinLi").addEventListener("click", function() {
        window.location.href = "https://www.linkedin.com/in/diegofelipeti/";
    });

    document.getElementById("linkedinButton").addEventListener("click", function() {
        window.location.href = "https://www.linkedin.com/in/diegofelipeti/";
    });
    document.getElementById("githubLink").addEventListener('click',function(){
        window.location.href = "https://github.com/diegof856";
    })
    document.getElementById("githubButton").addEventListener('click',function(){
        window.location.href = "https://github.com/diegof856";
    })
    document.getElementById("instagramLi").addEventListener('click',function(){
        window.location.href = "https://www.instagram.com/diegofelipe_1/";
    })
    document.getElementById("instagramButton").addEventListener('click',function(){
        window.location.href = "https://www.instagram.com/diegofelipe_1/";
    })
  
})();
