const express = require('express');
const app = express();

//Template Engine
app.set("View Engine", "ejs");

//Middlewares
app.use(express.static("public"));

//Ruotes
app.get('/', (req, res) => {
    res.status(200).render('index', {
        page_name:"index"
    });
});
app.get('/about', (req, res) => {
    res.status(200).render('about', {
        page_name:"about"
    });
})

const port = 3000;
app.listen(port, () => {
    console.log(`Uygulama ${port} portta başladı.`);
})