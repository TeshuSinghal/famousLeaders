class Biography{

    constructor(){
        this.title = createElement('h2');
        this.biography = createElement('h3')
    }

    display(){
        this.title.html("Biography");
        this.title.position(displayWidth/2, 0);
        this.biography.html("Vallabhbhai Jhaverbhai Patel (31 October 1875 – 15 December 1950), popularly known as Sardar Patel, was an Indian politician. He served as the first Deputy Prime Minister of India. He was an Indian barrister, and a senior leader of the Indian National Congress who played a leading role in the country's struggle for independence and guided its integration into a united, independent nation. In India and elsewhere, he was often called Sardar, meaning chief in Hindi, Urdu, and Persian. He acted as Home Minister during the political integration of India and the Indo-Pakistani War of 1947.")
        this.biography.position(displayWidth/2-200, displayHeight/2+150);
        //buttonObj= new Button();
        //buttons.btnBiography.setAttribute('disabled','disabled');
    }

}