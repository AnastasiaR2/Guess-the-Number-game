
  let number = Math.random();

  number = number * 100;

  number = Math.floor(number) + 1;

  console.log(number);

  let attempt = 10;

  function game(){

    userVariant = +inputUserVariant.value;

    if(attempt == 0){

      messagePlace.innerHTML = `Попытки закончились! Вы проиграли! Правильное число ${number}`;

      return;

    }

    if(userVariant == number){

      messagePlace.innerHTML = 'Поздравляю! Вы угадали!';

      return;

    }else if(userVariant > number){

      messagePlace.innerHTML = `Ваш вариант ${userVariant} больше моего числа`;

    }else {

      messagePlace.innerHTML = `Ваш вариант ${userVariant} меньше моего числа`;

    }

    attempt--;

    attemptPlace.innerHTML = attempt;
    
    attemptImage.src = `./assets/images/${attempt}.png`;

  }