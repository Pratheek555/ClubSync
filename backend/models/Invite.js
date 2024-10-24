const mongoose = require('mongoose');

const InviteSchema = new mongoose.Schema({
    club: { type: mongoose.Schema.Types.ObjectId, ref: 'Club', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
});

module.exports = mongoose.model('Invite', InviteSchema);
