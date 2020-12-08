class Facts{

    constructor(){
        this.title = createElement('h2');
        this.facts = createElement('p')
    }

    display(){
        this.title.html("Facts");
        this.title.position(displayWidth/2, 0);
        this.facts.html("1. He was the first Deputy Prime Minister and Home Minister of India.  <br>2. Patel passed his matriculation when he was about 22 years old.  3. He wasn’t interested in politics initially. It was after meeting Gandhi in 1917 that he was motivated to quit his job and join the Independence struggle.  4.The Statue of Unity, unveiled by PM Modi, stands on the banks of the Narmada river. It is 182m high, making it the tallest in the world. The statue was built at a cost of Rs 2,989 crore.  5. His birthday (October 31st) is celebrated as Rashtriya Ekta Divas (National Unity Day).")
        this.facts.position(displayWidth/2-200, displayHeight/2+100)
    }

} 