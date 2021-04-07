class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');//referring to the data feild
          gameStateRef.on("value",function(data){//listening to the changes
          gameState=data.val();//reading the data
    })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
    }

    play(){
        form.hideAll();
        textSize(30);
        text("gameStart",120,100); 
        if (keyIsDown(UP_ARROW) && playerIndex !== null){
            player.distance+=350
            player.update()
        }

        if (allPlayers !== undefined){
            for (var plr in allPlayers){
                if (plr === "player"+ player.index){
                    fill("red")
                } else{
                    fill("black")
                }
            }
            display_position+=20
            textSize(15)
            text(allPlayers[plr].name+":"+allPlayers[plr].distance, 120, display_position)
        }
    }

}