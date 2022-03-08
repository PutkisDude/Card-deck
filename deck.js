
module.exports = class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        this.shuffle();
    }

    reset = () => {
        this.deck = [];
        const suits = [
            'Spades', 
            'Diamonds', 
            'Clubs', 
            'Hearts'
        ];
        const values = {
            'Ace' : 14, 
            '2' : 2, 
            '3' : 3, 
            '4' : 4, 
            '5' : 5, 
            '6' : 6, 
            '7' : 7, 
            '8' : 8, 
            '9' : 9, 
            '10' : 10, 
            'Jack' : 11, 
            'Queen' : 12, 
            'King' : 13
        };
        
        for (let suit in suits) {
            for (let value in values) {
                let card = {valueName : value, value: values[value], suit: suits[suit]}
                this.deck.push(card)
            }
        }
    }

    // https://bost.ocks.org/mike/shuffle/
    shuffle = () => {
        let m = this.deck.length, i;
        while (m) {
            i = Math.floor(Math.random() * m--);

            [this.deck[m], this.deck[i]] = [this.deck[i], this.deck[m]];
        }
        return this.deck;
    }

    getCard = () => {
        return this.deck.pop();
    }

    cardsLeft = () => {
        return this.deck.length;
    }
}