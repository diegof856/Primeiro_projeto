(function(){
    var barrasClique = document.querySelectorAll('.barra');
    var btnCalcular = document.querySelector('.btn--calc');
    var btnLimpar = document.querySelector('.btn--apagar');
    
    barrasClique.forEach(function (barra) {

        barra.addEventListener('click', function () {
            this.classList.add('barra-clicada');

            barrasClique.forEach(function (otherBarra) {
                if (otherBarra !== barra) {
                    otherBarra.classList.remove('barra-clicada');
                }
            });
        });
    });
//mudar as cores
    if (btnCalcular) {
        btnCalcular.addEventListener('click', function () {
          

            // Remove a classe 'barra-clicada' da primeira barra
            var primeiraBarra = barrasClique[0];
            primeiraBarra.classList.remove('barra-clicada');
             
            btnCalcular.classList.add('btn_clicado');
            btnLimpar.classList.remove('btn_clicado');

            

        });
    }
    if (btnLimpar) {
        btnLimpar.addEventListener('click', function () {
            // Remove a classe 'barra-clicada' de ambas as barras
            barrasClique.forEach(function (barra) {
                barra.classList.remove('barra-clicada');
                barra.classList.remove('barra__clicada_erro');
            });


            btnCalcular.classList.remove('btn_clicado');
            btnLimpar.classList.add('btn_clicado');
            
        });
        
            
            document.addEventListener('click',function(e){
                if (!btnCalcular.contains(e.target) && !btnLimpar.contains(e.target)) {
                    // Remove as classes quando o clique é fora dos botões
                    btnCalcular.classList.remove('barra-clicada', 'btn_clicado');
                    btnLimpar.classList.remove('btn_clicado');
                    
                    //remover classe queryselectorall
                    barrasClique.forEach(function (barra) {
                        barra.classList.remove('barra__clicada_erro');
                       
                        
                    });
                   
                }
                
            })
           
        
    }

    
    
})();