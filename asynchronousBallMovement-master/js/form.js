class Form{
    constructor(){

    }
    display(){
        var title=createElement('h1')
        title.html("Car Racing Game")
        title.position(200,0)

        var input=createInput("name")
        var button=createButton("play")
        var greeting = createElement('h2')

        input.position(250,250)
        button.position(250,280)
    
        button.mousePressed(function(){
            input.hide()
            button.hide()

            var name=input.value();
            playerCount+=1
            player.update(name);
            player.updateCount(playerCount)
            greeting.html("hello"+name);
            greeting.position(250,250)
        })
    }
}