let counter = 1;

const films = [
    {
        name: 'W pustyni i w puszczy',
        director: 'Władysław Ślesicki',
        production: 1973
    },
    {
        name: 'Krzyżacy',
        director: 'Aleksander Ford',
        production: 1960
    }
];

for (let film of films) {
    const newEl = $(`
        <tr>
            <th scope="row">${counter}</th>
            <td>${film.name}</td>
            <td>${film.director}</td>
            <td>${film.production}</td>
        </tr>
    `);

    $('tbody').append(newEl);

    counter = counter + 1;
}

$('#add').on('click', function() { //submit dla entera
    const filmName = $('#filmName').val();
    const filmAuthor = $('#filmAuthor').val();
    const filmYear = $('#filmYear').val();

    const newEl = $(`
        <tr>
            <th scope="row">${counter}</th>
            <td>${filmName}</td>
            <td>${filmAuthor}</td>
            <td>${filmYear}</td>
        </tr>
    `);

    $('tbody').append(newEl);
    $('#exampleModal').modal('hide'); // zamykanie okna modalu
    $('form').trigger('reset'); // zresetowanie formularza

    counter = counter + 1;
})