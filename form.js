class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
    }

    hideAll(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    
    display(){
        var title = createElement('h2');
        title.html("carRacingGame");
        title.position(170,50);
        this.input.position(300,100);
        this.button.position(350,250); 
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount=playerCount+1;
            player.updateCount(playerCount)
            this.greeting.html("hello"+player.name);
            this.greeting.position(350,250);
        })
    }
}