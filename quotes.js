class Quotes{

    constructor(){
        this.title = createElement('h2');
        this.quotes = createElement('h3')
    }

    display(){
        this.title.html("Quotes");
        this.title.position(displayWidth/2, 0);
        this.quotes.html("1. Today we must remove distinctions of high and low, rich and poor, caste or creed.  2. We have to shed mutual bickering, shed the difference of being high or low and develop the sense of equality and banish untouchability. We have to restore the conditions of Swaraj prevalent prior to British rule. We have to live like the children of the same father.  3. In a domestic Government unity and co-operation are essential requisites.  4. No distinctions of caste and creed should hamper us. All are the sons and daughters of India. We should all love our country and build our destiny on mutual love and help.")
        this.quotes.position(displayWidth/2-200, displayHeight/2+100)
    }

} 