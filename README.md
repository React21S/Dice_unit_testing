[![UnitTesting Dice](https://github.com/React21S/Dice_unit_testing/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/React21S/Dice_unit_testing/actions/new)

# Dice class (API)

This is a Dice class for dice games. 
-   It save dots that the dice found and holds the number of dots between 1 and given upper bound (included). 
-   The maximum upper bound is 20 and the minimum upper bound is 2.

**The limitation**
-   If the dice hasn't been rolled, the number of dots is 0.
-   After the dice has been rolled, the dot count can't become zero again (not equal to 0 again).


## Operations

### **constructor(upperBound)**

-   Initializes the dice with upperBound that is passed as a parameter.
-   If no upperBound is given, the default for upperBound will be 6. 
-   Initializes dot count to 0.

-   if upperBound is not an integer, throw an exception error.
    -   `'upper bound must be an integer'`

-   If upperBound is not between 2 and 20, an exception is thrown:
    -   upperBound > 20: `Upper bound too big`
    -   upperBound < 2:`'upper bound too small'`


### Methods

#### **roll()**
-   roll the dice
-   when dice rolled, the dot count become a random number between 1 and upper bound (included)
-   returns nothing

#### **toString()**
-   return dot count as a string. For example:  `'4'`
-   if the dice hasn't been rolled yet, returns a text `'Not rolled yet'`

### Getters

#### **dots**
-   returns the number of dots `'(return everything in the dot count)'`

#### **minimumValue**
-   returns the minimum number of dots. `'it should be 1'`

#### **maximumValue**
-   returns the upper bound of the dice


[Dice game API](/diceTestCases.md)
- check about the test cases for dice class
