'use strict';

const {CreateCoin}=require('./newCoin');

const coinA=CreateCoin();
const coinB=CreateCoin();

console.log(coinA);
console.log(coinA.toString());
console.log(coinB.toString());
coinA.flip();
coinB.flip();
console.log(coinA.toString());
console.log(coinB.toString());
console.log(coinA.side);
console.log(coinB.side);
