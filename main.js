  function som(idAudio){
  document.querySelector(idAudio).play();
}
    // Criando referencia:
    const listaTeclas = document.querySelectorAll('.tecla');

    
    for(let cont = 0; cont < listaTeclas.length; cont++){
      const tecla = listaTeclas[cont];
      const versao = tecla.classList[1];

      const idSom = `#som_${versao}`;
  
      tecla.onclick = function(){
        som(idSom);
      }
      
    }
