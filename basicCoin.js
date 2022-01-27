'use strict';
 const Coin = class{
    constructor(){
        this.face=0
    }
    get side(){
        return this.face;
    }
    flip(){
        this.face=Math.random()<0.5?1:2;
    }
    toString(){
        if (this.face === 0){
            return 'Not flipped yet'
        }
        return this.face===1 ? 'head' : 'tail';
    
    }
        // end of the class
}
  
module.exports={Coin}

const coinA = new Coin();
console.log(coinA);
console.log(coinA.toString());
coinA.flip();
console.log(coinA.toString());
console.log(coinA.side);

