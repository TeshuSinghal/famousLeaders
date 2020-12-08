class Button{
    constructor(){
        this.btnBiography = createButton("Biography");
        this.btnQuotes = createButton("Quotes");
        this.btnAchievements = createButton("Achievements");
        this.btnFacts = createButton("Facts");
        this.title = createElement('h1');
        this.btnBioDisplay = 0;

    }

    display(){
       // mainPg = new MainPage();
       //bio = new Biography();


        this.btnBiography.position(displayWidth/2-100, displayHeight/2+100);
        this.btnQuotes.position(displayWidth/2-10, displayHeight/2+100);
        this.btnAchievements.position(displayWidth/2+60, displayHeight/2+100);
        this.btnFacts.position(displayWidth/2+170, displayHeight/2+100);

        this.btnBiography.mousePressed(()=>{
            this.btnBioDisplay = 1;
            mainPg.title.hide();
            bio = new Biography();
            bio.display();
            ///this.btnBiography.hide();
            //this.btnBiography.style.backgroundColor = "#0000ff";
            
            //add code to disable the biography button 
            
            
        })

        this.btnQuotes.mousePressed(()=>{
            //bio.btnBiography.hide();
            mainPg.title.hide();
            quo = new Quotes();
            quo.display();
            //add code to disable the quotes button
        })

        this.btnAchievements.mousePressed(()=>{
            mainPg.title.hide();
            ach = new Achievements();
            ach.display();
            //add code to disable the achievement button
        })

        this.btnFacts.mousePressed(()=>{
            mainPg.title.hide();
            fac = new Facts();
            fac.display();
            //add code to disable the facts button
        })
        
    }
}