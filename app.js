const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

const ExpressError = require('./utilities/ExpressError');

// const session = require('express-session');
// const flash = require('connect-flash');

const routes = require('./routes/main');

const dbUrl = 'mongodb://localhost:27017/ghibliWallpapers';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MONGO CONNECTION ERROR'));
db.once('open', () => {
    console.log('CONNECTED TO MONGO');
});

app.use(express.urlencoded({ extended: true })); // POST request parsing
// app.use(express.json()); // POST request parsing
app.use(methodOverride('_method')); // For PUT, PATCH, DELETE requests
app.use(express.static(path.join(__dirname, 'public'))); // Serve static assets

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/about', (req, res) => res.render('about'));
app.use('/', routes);

// Error handling
app.all('*', (err, req, res, next) =>
    next(new ExpressError('Page Not Found', 404))
);

app.use((err, req, res, next) => {
    console.log(err);
    if (err.kind == 'ObjectId') {
        return res.status(404).send('Page not found');
    }
    const { status = 500, message = 'Oops, something went wrong...' } = err;
    res.status(status).send({ status, message });
    // res.status(status).render('error', { message });
});

// Port connection
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`SERVING ON PORT ${port}`));
