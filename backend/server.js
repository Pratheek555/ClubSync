require('dotenv').config();
require('./passportConfig');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session'); 

// All the Routes
const profileRoutes = require('./routes/profileRoutes');
const authRoutes = require('./routes/authRoutes');
const clubRoutes = require('./routes/clubRoutes');
const eventRoutes = require('./routes/eventRoutes');

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/profile', profileRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/clubs', clubRoutes);
app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});