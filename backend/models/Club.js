const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    category: [{ type: String }],
    tags: [{ type: String }],
    faculty_advisor: { type: String },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Club', ClubSchema);
