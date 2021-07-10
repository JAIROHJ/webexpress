const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

// console.log(path.join(__dirname, "../public/"))
const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

// public static path 
app.set('view engine', 'hbs');
app.set('views', template_path)
hbs.registerPartials(partials_path)
app.use(express.static(static_path));

// app.get(route,callback) 

// routing 
app.get('', (req, res) => {
        res.render('index')
    })
    // app.get('', (req, res) => {
    //     res.send('welcome webpage web')
    // })
app.get('/about', (req, res) => {
        res.render('about')
    })
    // app.get('/about', (req, res) => {
    //     res.send('welcome webpage  about web')
    // })
app.get('/weather', (req, res) => {
        res.render('weather')
    })
    // app.get('/weather', (req, res) => {
    //     res.send('welcome webpage weather web')
    // })
app.get('*', (req, res) => {
        res.render('404error', {
            errorMsg: 'opps! page not found'
        })
    })
    // app.get('*', (req, res) => {
    //     res.send('404 error page not found')
    // })

app.listen(port, () => {
    console.log(`Listing to the port at ${port} `)
})