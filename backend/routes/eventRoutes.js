const express = require('express');
const { createEvent, getClubEvents, getUpcomingEvents, getPastClubEvents, getPastEvents } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createEvent);
router.get('/club/:clubId', authMiddleware, getClubEvents);
router.get('/upcoming', authMiddleware, getUpcomingEvents);
router.get('/club/:clubId/past', authMiddleware, getPastClubEvents);
router.get('/past', authMiddleware, getPastEvents);

module.exports = router;
