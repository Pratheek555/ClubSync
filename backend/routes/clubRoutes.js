 
const express = require('express');
const { createClub, getAllClubs, getClubDetails } = require('../controllers/clubController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createClub);

// router.post('/invite', authMiddleware, inviteMember);
// router.post('/join/:clubId', authMiddleware, joinClub);

router.get('/', authMiddleware, getAllClubs);
router.get('/:clubId', authMiddleware, getClubDetails);

module.exports = router;
