// const banan = 'żółty owoc z Afryki'; //String
// const koniecWojny = 1918; //Number
// const obecnyRok = 2018;
// const wisnia = 'czerwony owoc z Azji';
// const prawda = 5000 > 3000; //true
// const falsz = 5000 == 3000; //false

// alert(falsz);
// alert(banan);

// const random = Math.random(); //liczba od 0 do 1

// LOSOWANIE LICZBY PRZEZ KOMPUTER
// const random = Math.random() * 10;
// const zaokraglonaLiczba = Math.round(random);

// alert(zaokraglonaLiczba);

// WPISYWANIE LICZBY PRZEZ UŻYTKOWNIKA
// const mojWynik = prompt('Zgadnij liczbę od 1 do 10')

// if(zaokraglonaLiczba == mojWynik) {
//     alert('Zgadłeś liczbę');
// } else {
//     alert('Nie zgadłeś mojej liczby. Próbuj dalej.')
// }

// const wiek = prompt('Ile masz lat?');
// alert(`Mam ${wiek} lat.`);
// alert(`Koniec wojny był w ${koniecWojny} roku`);
// alert(`W tym roku obchodzimy ${obecnyRok - koniecWojny} rocznicę odzyskania niepodległości.`)
// alert(`${banan}, ${wisnia}`);

// const wartoscTekstu = prompt('Co chcesz, żeby było w tytule?');

//zlapanie elementu h1
// $('h1');
// $('h1').text(wartoscTekstu);

// const newEl = $(`
//     <div>
//         <h1>${wartoscTekstu}</h1>
//         <p>Nowy tekst</p>
//     </div>
// `);

// $('.container').append(newEl);

// stworzenie zmiennej
// const imie = 'Damian'; // nie pozwala zmieniać
// let imie2 = 'Damian'; // pozwala zmieniać

// modyfikowanie zmiennej
// imie2 = 'Paweł';

// TABLICA - Array
// const fruitsBox = ['jablko', 'gruszka', 'sliwka', 'mandarynka'];

// ODCZYT

// alert(fruitsBox[0]); // index - pierwszy element - jabłko
// alert(fruitsBox[2]); // index - trzeci element - śliwka

// ZAPIS

// fruitsBox.push('banan'); // element idzie na sam koniec

// PETLE
// for (let fruit of fruitsBox) { //zapis dla pętli for w ES6
//     alert(fruit);
// }

// OBIEKTY - Objects

// const person = {
//     name: 'Damian', // key: value
//     age: 26,
//     city: 'Warszawa'
// };

// const person2 = {
//     name: 'Paweł',
//     age: 40,
//     city: 'Wrocław'
// };

// ODCZYT
// nazwaObiektu.nazwaKlucza

// alert(person.city);
// alert(person2.age);

// OBIEKTY w TABLICY

// const people = [
//     {
//         name: 'Damian',
//         age: 26
//     },
//     {
//         name: 'Paweł',
//         age: 30
//     },
//     {
//         name: 'Wioletta',
//         age: 13
//     }
// ];

// let agesSum = 0;

// for(let person of people) {
//     agesSum = agesSum + person.age;
// }
// alert(agesSum);

// podstawowa
// const average = agesSum / 3;

//*
// const average = agesSum / people.length;
// alert(average);