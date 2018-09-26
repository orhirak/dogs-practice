var express = require('express');
var app = express();
app.listen(5555);

app.use(express.static('node_modules'))
app.use(express.static('public'))

let Dogs  = [
    {name: "moshe" , age: 4},
    {name:"bob", age:3},
    {name:"shoko" , age:2}
]

app.get('/dogs', function (req, res) {
    res.send(JSON.stringify(Dogs)
    )

})

