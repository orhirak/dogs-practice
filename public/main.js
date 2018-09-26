$('button').on('click', function () {
    $.get('/dogs').then(function (data) {
         data = JSON.parse(data)
        $(".dogs").empty();
        var source = $('#show-dogs').html();
        var template = Handlebars.compile(source);
        var newHTML = template({Dogs:data})
        $('.dogs').append(newHTML)
    });
})