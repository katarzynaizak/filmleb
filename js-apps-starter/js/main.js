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
                <td data-key="${data.key}">
                    <i class="fas fa-trash" id="delete"></i>
                    <i class="fas fa-pencil-alt" id="edit"></i>
                    <i class="fas fa-check invisible" id="accept"></i>
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

    firebase.database().ref('/films').push(addFilm); // dodajemy do bazy

    $('#exampleModal').modal('hide'); // zamykanie okna modalu
    $('form').trigger('reset'); // zresetowanie pól formularza
})

$('body').on('click', '#delete', function() { // "propagacja" dla elementów dynamicznych na stronie (ikonki pojawiają się na stronie dynamicznie, a nie statycznie)
    const self = $(this);
    const key = self.parent().data('key');

    firebase.database()
        .ref(`/films/${key}`)
        .remove()
        .then(function() {
            //window.location.reload(); // 1 sposób - odświeżam całą stronę
            self.parent().parent().remove() // 2 sposób - ręcznie usuwam z html'a
        })
})

$('body').on('click', '#edit', function() {
    const self = $(this);

    const currentName = self.parent().parent().children().eq(1); // grzebanie w dziadku :-)
    const currentAuthor = currentName.next(); // metoda na brata :-D
    const currentYear = currentAuthor.next();

    currentName.attr('contenteditable', true);
    currentAuthor.attr('contenteditable', true);
    currentYear.attr('contenteditable', true);

    self.addClass('invisible'); // ikonka do edycji znika
    self.next().removeClass('invisible'); // ikonka do potwierdzenia edycji pojawia się
})

$('body').on('click', '#accept', function() {
    const self = $(this);
    const key = self.parent().data('key');

    const currentName = self.parent().parent().children().eq(1); // grzebanie w dziadku :-)
    const currentAuthor = currentName.next(); // metoda na brata :-D
    const currentYear = currentAuthor.next();

    currentName.attr('contenteditable', false);
    currentAuthor.attr('contenteditable', false);
    currentYear.attr('contenteditable', false);

    const editedFilm = {
        name: currentName.text(),
        director: currentAuthor.text(),
        production: currentYear.text()
    }

    firebase
        .database()
        .ref(`/films/${key}`)
        .set(editedFilm); // edytujemy w bazie danych

    self.addClass('invisible'); // ikonka do potwierdzenia edycji znika
    self.prev().removeClass('invisible'); // ikonka do edycji pojawia się
})