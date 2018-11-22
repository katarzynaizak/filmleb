let counter = 1; // licznik pozycji na stronie

// baza już dodanych filmów - obiekty w tablicy
const films = [
    {
        name: 'Krokodyl Dundee',
        director: 'Peter Faiman',
        production: 1986
    },
    {
        name: 'Kołysanka',
        director: 'Juliusz Machulski',
        production: 2010
    },
    {
        name: 'Zapach kobiety',
        director: 'Martin Brest',
        production: 1992
    },
    {
        name: 'Zielona Mila',
        director: 'Frank Darabont',
        production: 1999
    },
    {
        name: 'Adwokat diabła',
        director: 'Taylor Hackford',
        production: 1997
    }
];

// pętla pokazująca filmy z istniejącej bazy (z tablicy)
for (let film of films) {
    // tworzenie wiersza z danymi filmu (z bazy już dodanych filmów)
    const showFilm = $(`
        <tr>
            <th scope="row">${counter}</th>
            <td>${film.name}</td>
            <td>${film.director}</td>
            <td>${film.production}</td>
        </tr>
    `);

    $('tbody').append(showFilm); // wstawianie wiersza z filmem (pobranym z bazy) na stronę

    counter = counter + 1;
}

$('#add').on('click', function() { //submit dla entera
    // pobieranie wartości z modala
    const filmName = $('#filmName').val();
    const filmAuthor = $('#filmAuthor').val();
    const filmYear = $('#filmYear').val();

    // tworzenie wiersza z danymi filmu (dodawanego za pomocą formularza)
    const addFilm = $(`
        <tr>
            <th scope="row">${counter}</th>
            <td>${filmName}</td>
            <td>${filmAuthor}</td>
            <td>${filmYear}</td>
        </tr>
    `);

    $('tbody').append(addFilm); // wstawianie wiersza z nowym filmem na stronę
    $('#exampleModal').modal('hide'); // zamykanie okna modalu
    $('form').trigger('reset'); // zresetowanie pól formularza

    counter = counter + 1;
})