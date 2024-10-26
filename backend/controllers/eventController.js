 
const Event = require('../models/Event');
const Club = require('../models/Club');

exports.createEvent = async (req, res) => {
    const { clubId, name, description, date, location } = req.body;
    

    try {
        const club = await Club.findById(clubId);
        if (!club) {
            return res.status(404).json({ msg: 'Club not found' });
        }

        if (!club.admins.includes(req.user)) {
            return res.status(403).json({ msg: 'Only club admins can create events' });
        }

        const event = new Event({
            name,
            description,
            date,
            location,
            club: clubId,
            createdBy: req.user
        });

        await event.save();
        res.status(201).json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getClubEvents = async (req, res) => {
    const { clubId } = req.params;

    try {
        const events = await Event.find({ club: clubId }).sort({ date: 1 });
        res.status(200).json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


exports.getUpcomingEvents = async (req, res) => {
    try {
        const currentDate = new Date();
        const events = await Event.find({ date: { $gte: currentDate } }).sort({ date: 1 });
        res.status(200).json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getPastClubEvents = async (req, res) => {
    const { clubId } = req.params;

    try {
        const currentDate = new Date();
        const pastEvents = await Event.find({ club: clubId, date: { $lt: currentDate } }).sort({ date: -1 });
        res.status(200).json(pastEvents);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getPastEvents = async (req, res) => {
    try {
        const currentDate = new Date();
        const pastEvents = await Event.find({ date: { $lt: currentDate } }).sort({ date: -1 });
        res.status(200).json(pastEvents);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
