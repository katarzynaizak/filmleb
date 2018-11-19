$('#add').on('click', function() {
    const filmName = $('#filmName').val();
    const filmAuthor = $('#filmAuthor').val();
    const filmYear = $('#filmYear').val();

    const newEl = $(`
        <tr>
            <th scope="row"></th>
            <td>${filmName}</td>
            <td>${filmAuthor}</td>
            <td>${filmYear}</td>
        </tr>
    `);

    $('tbody').append(newEl);
})