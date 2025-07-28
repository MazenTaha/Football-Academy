const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const indexRoutes = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/', indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));