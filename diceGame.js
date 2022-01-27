'use strict';

const Dice = require('./dice');

const diceA = new Dice();
const diceB = new Dice();


console.log('diceA: ', diceA.toString());
console.log('diceA: ', diceA);
console.log('diceB: '+diceB);
console.log(`Dice B status: ${diceB}`);


const Wins= {
    Awins:0,
    Bwins:0,
    ties:0
}

for(let i=0; i<10; i++){
    diceA.roll();
diceB.roll();

console.log('dice A dots: ', diceA.dots);
console.log(`dice B dots:  ${diceB}`);  // give string result 
console.log('dice B dots: ', diceB.toString()); // give string result 


if(diceA.dots === diceB.dots){
    console.log('same dots')
    Wins.ties++;
}
else if (diceA.dots > diceB.dots){
    console.log('A wins')
    Wins.Awins++;
}else{
    console.log('B wins')
    Wins.Bwins++;
}
}

console.log('##### statistics #####')
console.log(Wins)
console.log(`Wins for A: ${Wins.Awins}
Wins for B: ${Wins.Bwins}
Ties: ${Wins.ties}`)

// For getting head or tail from coin
const Coin=new Dice(2);
Coin.roll();
console.log(`Result: ${Coin.dots === 1 ? 'head' :'tail'}`);


// For getting different 3 new Dice
const diceArray=[new Dice(), new Dice(), new Dice()];
diceArray.forEach(dice=>console.log(dice.toString()));
diceArray.forEach(dice=>console.log(dice.roll()));
