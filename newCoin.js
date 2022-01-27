'use strict';

const Dice = require('./dice');

const CreateCoin =()=>{
    const dice = new Dice(2);

    const Coin = class{
        constructor(){
            this.face=0
        }
        get side(){
            return this.face;
        }
        flip(){
            dice.roll();
            this.face=dice.dots
        }
        toString(){
            if (this.face === 0){
                return 'Not flipped yet'
            }
            return this.face===1 ? 'head' : 'tail';
    
        }
        // end of the class
    }
    return new Coin();
    // end of the function
}

module.exports={CreateCoin}