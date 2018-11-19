$('#add').on('click', function() {
    const request = $('#toDoInput').val();

    const newEl = $(`
        <li>${request}</li>
    `);

    $('ul').append(newEl);
})