const express = require('express');
const path = require ('path')
const app = express();

const port = 3000;
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Server corriendo en puerto ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html')) 
})

