require('dotenv').config();
require('./passportConfig'); // Import Google OAuth configuration
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const clubRoutes = require('./routes/clubRoutes');
const eventRoutes = require('./routes/eventRoutes');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Session middleware
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
//app.use('/api/clubs', clubRoutes);
//app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});