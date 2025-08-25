const Player = require('../models/player');

exports.getAllPlayers = async () => {
    return await Player.find();
};

exports.getPlayerById = async (id) => {
    return await Player.findById(id);
};

exports.createPlayer = async (data) => {
    const player = new Player(data);
    return await player.save();
};

exports.updatePlayer = async (id, data) => {
    return await Player.findByIdAndUpdate(id, data, { new: true });
};

exports.deletePlayer = async (id) => {
    return await Player.findByIdAndDelete(id);
};
