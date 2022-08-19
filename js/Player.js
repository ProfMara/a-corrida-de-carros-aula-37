class Player {
  constructor() {
    //propriedade indice

    //propriedade nome

    //propriedade posX

    //propriedade posY
  
  } 

  addPlayer(){
    //código para indicar ao banco de dados onde por as informações

    //código para definir a posição inicial do player no eixo X e Y

    //Código para enviar essas informações para o banco de dados
   
  }



  getCount(){
    var playerCountRef = database.ref("playerCount");
     playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }
  //função update que atualiza a quantidade de jogadores no banco de dados

  


  
  


}
