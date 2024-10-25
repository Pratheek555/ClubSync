const mongoose = require('mongoose');
const Club = require('../models/Club');
const User = require('../models/User');

exports.createClub = async (req, res) => {
    const { name, description, category, tags, faculty_advisor } = req.body;
    try {
        let club = await Club.findOne({ name });
        if (club) {
            return res.status(400).json({ msg: 'Club already exists' });
        }
        club = new Club({
            name,
            description,
            category,
            tags,
            faculty_advisor,
            admins: [req.user],
        });

        await club.save();
        res.status(201).json(club);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getAllClubs = async (req, res) => {
    try {
        const clubs = await Club.find().select('name description tags faculty_advisor');
        res.status(200).json(clubs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getClubDetails = async (req, res) => {
    const { clubId } = req.params;
    try {
        const club = await Club.findById(clubId)
            .populate('members', 'username email')
            .populate('admins', 'username email');
        if (!club) {
            return res.status(404).json({ msg: 'Club not found' });
        }
        res.status(200).json(club);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

