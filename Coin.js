'use strict';

const Dice = require('./dice');

class Coin extends Dice{
    constructor(){
        super(2)
    }

    flip(){
        this.roll();
    }

    toString(){
        if (this.dotCount === 0){
            return 'Not flipped yet'
        }
        return this.dotCount===1?'head':'tail';

        // return this.dotCount === 0?'Not flipped yet':this.dotCount===1?'head':'tail';  // short code
    }

    
}               
module.exports={Coin}

// const coin = new Coin();
// console.log(coin);
// console.log(coin.toString());
// coin.flip();
// console.log(coin.toString());
// coin.roll();
// console.log(coin.toString());

class Coin2{
    constructor(){
        this.dice= new Dice(2);
        this.face = 0;
    }
    get side(){
        return this.face
    }

    flip(){
        this.dice.roll();
        this.face = this.dice.dots;
    }

    toString(){
        if (this.face === 0){
            return 'Not flipped yet'
        }
        return this.face===1?'head':'tail';

        // return this.dotCount === 0?'Not flipped yet':this.face===1?'head':'tail';  // short code
    }

}
module.exports={Coin2}

const coin = new Coin2();
console.log(coin);
console.log(coin.toString());
coin.flip();
console.log(coin.toString());
// coin.dice.roll();
// console.log(coin.dice.dots);