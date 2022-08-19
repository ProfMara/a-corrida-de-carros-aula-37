class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {

    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    //CRIAR SPRITE CARRO 1

    //ADICIONAR IMAGEM

    //DEFINIR O TAMANHO 
    
    //CRIAR SPRITE CARRO 2

    //ADICIONAR IMAGEM

    //DEFINIR O TAMANHO 




  }

  play(){
    this.handleElements();
    
    //código para desenhar as sprites


  


     
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  
  update(state){
    database.ref("/").update({
      gameState:state
    })
  }
}
