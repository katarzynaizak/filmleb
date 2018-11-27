let counter = 1; // licznik pozycji na stronie

firebase
    .database()
    .ref('/films')
    .on('child_added', function(data) {
        const filmFromDB = data.val();

        const showFilm = $(`
            <tr>
                <th scope="row">${counter}</th>
                <td>${filmFromDB.name}</td>
                <td>${filmFromDB.director}</td>
                <td>${filmFromDB.production}</td>
                <td>
                    <i class="fas fa-trash"></i>
                    <i class="fas fa-pencil-alt"></i>
                    <i class="fas fa-check"></i>
                    <i class="fas fa-times-circle"></i>
                </td>
            </tr>
        `);

        $('tbody').append(showFilm); // wstawianie wiersza z filmem (pobranym z bazy) na stronę

        counter = counter + 1;
    });

$('#add').on('click', function() { // wysyłanie danych z formularza
    // pobieranie wartości z modala
    const filmName = $('#filmName').val();
    const filmAuthor = $('#filmAuthor').val();
    const filmYear = $('#filmYear').val();

    const addFilm = {
        name: filmName,
        director: filmAuthor,
        production: filmYear
    }

    firebase.database().ref('/films').push(addFilm);

    $('#exampleModal').modal('hide'); // zamykanie okna modalu
    $('form').trigger('reset'); // zresetowanie pól formularza
})