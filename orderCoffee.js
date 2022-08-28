export function orderCoffee(arrayOfMonets) {
  validateInput(arrayOfMonets);

  let choosenCoffee = chooseCoffee();

  if (choosenCoffee === '1') {
    const AMERICANO_PRICE = 0.95;

    let restOfMoneyByMonets = calculationProcessing(AMERICANO_PRICE, arrayOfMonets);

    return {
      coffee: 'Americano',
      message: 'Your coffee is ready',
      restOfMoney: restOfMoneyByMonets,
    }
  }

  if (choosenCoffee === '2') {
    const AMERICANO_WITH_MILK_PRICE = 1.26;

    let restOfMoneyByMonets = calculationProcessing(AMERICANO_WITH_MILK_PRICE, arrayOfMonets);

    return {
      coffee: 'Americano with milk',
      message: 'Your coffee is ready',
      restOfMoney: restOfMoneyByMonets,
    }
  }

  if (choosenCoffee === '3') {
    const CAPPUCCINO = 2.33;

    let restOfMoneyByMonets = calculationProcessing(CAPPUCCINO, arrayOfMonets);

    return {
      coffee: 'Cappuccino',
      message: 'Your coffee is ready',
      restOfMoney: restOfMoneyByMonets,
    }
  }

  alert('There are no coffee you have choosen');
}

function chooseCoffee() {
  let choosenCoffee = prompt('Tab the number of coffee you would like to choose: \n 1. Americano \n 2. Americano with milk \n 3. Сappuccino');
  return choosenCoffee;
}

function centsToDollar(amount) {
  return Number((amount * 0.01).toFixed(2));
}

function dollarToCents(amount) {
  return Number((amount * 100).toFixed(2));
}

function validateInput(arrayOfMonets) {
  arrayOfMonets.map((elem) => isMatch(elem));
}

function isMatch(elem) {
  let arrOfAcceptedMonets = [1, 2, 5, 10, 20, 50];
  let check = arrOfAcceptedMonets.includes(elem);
  let result = check ? elem : false;

  if (!result) {
    throw new Error('You have entered monets which not accepted');
  }

  return result;
}

function calculateRestByMonets(value) {
  let restOfMoneyByMonets = [];

  while(value > 0) {
    if (value >= 50) {
      value = value - 50;
      restOfMoneyByMonets.push(50);
      continue;
    }
    if (value >= 20) {
      value = value - 20;
      restOfMoneyByMonets.push(20);
      continue;
    }
    if (value >= 10) {
      value = value - 10;
      restOfMoneyByMonets.push(10);
      continue;
    }
    if (value >= 5) {
      value = value - 5;
      restOfMoneyByMonets.push(5);
      continue;
    }
    if (value >= 2) {
      value = value - 2;
      restOfMoneyByMonets.push(2);
      continue;
    }
    if (value >= 1) {
      value = value - 1;
      restOfMoneyByMonets.push(1);
      continue;
    } 
  }

  return restOfMoneyByMonets;
}

function calculationProcessing(coffePrice, arrayOfMonets) {

  let givenMoney = arrayOfMonets.reduce((sum, current) => sum + current, 0);

  givenMoney = centsToDollar(givenMoney);

  if (givenMoney < coffePrice) {
    throw new Error('You have entered insufficient money');
  }

  let restOfMoney = givenMoney - coffePrice;

  restOfMoney = dollarToCents(restOfMoney);

  let restOfMoneyByMonets = calculateRestByMonets(restOfMoney);

  return restOfMoneyByMonets;
}