# Test cases Dice class

- upperBound 2: dots 1,2
- upperBound 3: dots 1,2,3
- upperBound 7: dots 1,2,3,4,5,6,7

## Test cases for the Constructor
-   upper bound is integer
    
**Lower and Upper bound**
-   new Dice(2) creates Dice with Upper bound 2
-   new Dice() creates Dice with Upper bound 6
-   new Dice(12) `'upper bound'`
-   new Dice(6); 
-   new Dice(20);
test with all upper bound 2...20
-   check that dot count is set to 0
  
**Not a number**
-   new Dice('s') `'throw an exception'`
-   new dice(2.5) `'throw and exception'`

**Too big**
-   new Dice(21); `'upper bound too big'`
-   new Dice(100)

**Too small**
-   new Dice(-4) `'throws too small'`
-   new Dice(1)


---
     
## Test cases for roll()

- dice = new Dice(upperBound);
- dice.roll();
- check if 1 <= dot count <=upperBound

-   we can't do anything here because roll is based on random 

## Test cases for toString()
-   roll the dice and then compare the dots  to the string returned from toString method
    -   dice = new Dice();
    -   dice.roll();
    -   expect(dice.toString()).toBe(`${dice.dots}`);

-   if not rolled yet, then should return text `'Not rolled yet'`
    -   dice = new Dice();
    -   expect(dice.toString()).toBe(``'Not rolled yet'`)