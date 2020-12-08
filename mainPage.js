class MainPage{
    constructor(){
        /*this.btnBiography = createButton("Biography");
        this.btnQuotes = createButton("Quotes");
        this.btnAchievements = createButton("Achievements");
        this.btnFacts = createButton("Facts");*/
        this.title = createElement('h1');
       
    }
    hide(){
        /*this.btnBiography.hide();
        this.btnQuotes.hide();
        this.btnAchievements.hide();
        this.btnFacts.hide();*/
        this.title.hide();

    }

    display(){
        this.title.html("Sardar Vallabhai Patel");
        this.title.position(displayWidth/2-100, 0);
        
        //sardarVallabhaiPic = createSprite(50, 200, 200, 300);
        //sardarVallabhaiPic.addImage("SV", SVPicture);
        //sardarVallabhaiPic.scale = 0.5;

        imageMode(CENTER);
        image(SVPicture, displayWidth/2+75, displayHeight/2-100, 300, 300);

        buttons = new Button();
        buttons.display();
        

        //btnBiography = createButton("Biography");
        /*this.btnBiography.position(displayWidth/2-100, displayHeight/2+100);
        this.btnQuotes.position(displayWidth/2-10, displayHeight/2+100);
        this.btnAchievements.position(displayWidth/2+60, displayHeight/2+100);
        this.btnFacts.position(displayWidth/2+170, displayHeight/2+100);

        this.btnBiography.mousePressed(()=>{
            this.hide();
            bio = new Biography();
            bio.display();
        })

        this.btnQuotes.mousePressed(()=>{
            this.hide();
            quo = new Quotes();
            quo.display();
        })

        this.btnAchievements.mousePressed(()=>{
            this.hide();
            ach = new Achievements();
            ach.display();
        })

        this.btnFacts.mousePressed(()=>{
            this.hide();
            fac = new Facts();
            fac.display();
        })*/



    }
    
}