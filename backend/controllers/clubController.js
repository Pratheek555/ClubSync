const axios = require('axios');
const Club = require('../models/Club');
const User = require('../models/User');

exports.createClubs = async (req, res) => {
    const clubs = req.body.clubs;
    if (!Array.isArray(clubs)) {
        return res.status(400).json({ msg: 'Invalid data format. Expected an array of clubs.' });
    }
    try {
        let createdClubs = [];
        for (let clubData of clubs) {
            let { name, description, labels, faculty_advisor } = clubData;
            let existingClub = await Club.findOne({ name });
            if (existingClub) {
                console.log(`Club with name ${name} already exists, skipping...`);
                continue;
            }
            let club = new Club({
                name,
                description,
                labels,
                faculty_advisor,
                admins: [req.user],
            });
            await club.save();
            createdClubs.push(club);
        }
        res.status(201).json({ msg: 'Clubs created successfully', clubs: createdClubs });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

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
        const clubs = await Club.find().select('name description category tags faculty_advisor');
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


exports.getRecommendedClubs = async (req, res) => {
    try {
        const user = await User.findById(req.user);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        const userInterests = user.interests;
        const clubs = await Club.find();
        let recommendedClubs = [];
        for (let club of clubs) {
            const clubMetadata = {
                category: club.labels || [],
                tags: club.tags || []
            };
            const response = await axios.post('http://127.0.0.1:5001/recommend/club', {
                user_interests: userInterests,
                category: clubMetadata.category,
                tags: clubMetadata.tags
            });
            const similarityScore = response.data.similarity_score;
            if (similarityScore > 0.1) {
                recommendedClubs.push(club);
            }
        }
        res.status(200).json(recommendedClubs);
    } catch (error) {
        console.error('Error fetching recommendations:', error.message);
        res.status(500).json({ error: 'Failed to fetch recommended clubs' });
    }
};
