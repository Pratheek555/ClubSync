 
const express = require('express');
const { createClub, getAllClubs, getClubDetails, getRecommendedClubs, createClubs  } = require('../controllers/clubController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createClub);

// router.post('/invite', authMiddleware, inviteMember);
// router.post('/join/:clubId', authMiddleware, joinClub);

router.get('/recommended', authMiddleware, getRecommendedClubs);
router.post('/create-multiple', authMiddleware, createClubs);
router.get('/', authMiddleware, getAllClubs);
router.get('/:clubId', authMiddleware, getClubDetails);


module.exports = router;
