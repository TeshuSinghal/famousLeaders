class Achievements{

    constructor(){
        this.title = createElement('h2');
        this.achievements = createElement('h3')
    }

    display(){
        this.title.html("Achievements");
        this.title.position(displayWidth/2, 0);
        this.achievements.html("1. Sardar Vallabhbhai Patel was posthumously awarded the Bharat Ratna in 1991.")
        this.achievements.position(displayWidth/2-200, displayHeight/2+150)
    }

} 