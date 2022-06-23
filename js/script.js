// * 1 - Creo il ciclo che stampa i numeri da 1 a 100

// * 2 - Creo una validazione per i multipli di 3 e di 5

// * 3 - Dico al programma di stampare Fizz, Buzz o Fizzbuzz a seconda del multiplo

const list = document.getElementById('list');

let listItem = '';

for (let i = 1; i <= 100; i++) {
  
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
    listItem += 'FizzBuzz ';

  } else if (i % 3 === 0) {
    console.log('Fizz');
    listItem += 'Fizz ';

  } else if (i % 5 === 0) {
    console.log('Buzz');
    listItem += 'Buzz ';

  } else {
    console.log(i);
    listItem += `${i} `;
  }

}

list.innerHTML = listItem;