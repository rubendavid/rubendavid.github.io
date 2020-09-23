// Generate Coin Change
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents).
// Accept a number of American cents, computer and print how to represent that amount with smallest number of coins.
// Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

// Example output, given (94):
// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4

// Second: can you simplify/shorten your code?

// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.

generateCoinChange = function(num) {
    var Quarter = 0;
    var Dime = 0;
    var Nickel = 0;
    var Penny = 0;
    var Dollar = 0;
    var HalfDollar = 0;

    while (num >= 100) {
        num -= 100;
        Dollar++;
    }
    while (num >= 50) {
        num -= 50;
        HalfDollar++;
    }
    while (num >= 25) {
        num -= 25;
        Quarter++;
    }
    while (num >= 10) {
        num -= 10;
        Dime++;
    }
    while (num >= 5) {
        num -= 5;
        Nickel++;
    }
    while (num >= 1) {
        num -= 1;
        Penny++;
    }
    return {Dollar, HalfDollar, Quarter, Dime, Nickel, Penny};
};

console.log(generateCoinChange(9))

    function coinsAgain(change_needed) {
    quarters_in_hand = 0;
    dimes_in_hand = 0;
    nickels_in_hand = 0;
    pennies_in_hand = 0;

    quarters_in_hand = Math.floor(change_needed / 25);
    change_needed = change_needed % 25;

    dimes_in_hand = Math.floor(change_needed / 10);
    change_needed = change_needed % 10;

    nickels_in_hand = Math.floor(change_needed / 5);
    change_needed = change_needed % 5;

    pennies_in_hand = change_needed;

    console.log(
        quarters_in_hand,
        dimes_in_hand,
        nickels_in_hand,
        pennies_in_hand
    );
    }

coinsAgain(94);
