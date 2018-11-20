let counter = 1;

$('#add').on('click', function() {
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