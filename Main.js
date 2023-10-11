function tocaSom(seletorAudio) {
    const elemento = documento.querySelector(seletorAudio) ;
    if(elemento && elemento.LocalName === 'audio') {
     elemento.play();
    }
    else {
        //alert*('Elemento nao encotrado');
        console.log('elemento nao encontrado ou seletor invalido.');
    }
}

const listaDeTeclas = documento.querySelectorAll('.tecla');
//paro
for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]
    const idaudio = #som_${instrumento};
    tecla.onclik =  function() {
        tocaSom(idaudio)
    }
    teclado.onkeydown = fucition(evento) {
        if(evento.code ==='SPACE' || evento.code === 'ENTER') {
            tecla.classList.add('ativo');
        }

    }
    tecla.onkeydown = function(){
        tecla.classList-remove('ATIVA');
    }

}