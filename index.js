/*
Conditions and restrictions:

There is a coffee machine and you need to write software for it. 
The device can accept coins in 1, 2, 5, 10, 20, and 50 cents. 
There are 3 types of coffee - Americano ($0.95), Americano with milk ($1.26), and cappuccino ($2.33). 
It is necessary to implement the algorithm of the coffee machine with validation. 
A person deposits money chooses what to buy, and takes change and his coffee. 
Change must be returned with the smallest number of coins. 
For example, if the change is $1, you need to return 50 and 50 cents, if $0.9 - 50, 20 and 20 cents of the coin.
*/

import { orderCoffee } from './order-coffee.js';

let monetInput = [50, 50, 50, 20, 50, 20, 5, 10];
let coffee = orderCoffee(monetInput); // 1, 2, 5, 10, 50

console.log(coffee);

