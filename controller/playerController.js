const playerService = require('../services/playerService');

exports.getPlayers = async (req, res) => {
    try {
        const players = await playerService.getAllPlayers();
        res.json(players);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
};

exports.getPlayerById = async (req, res) => {
    try {
        const player = await playerService.getPlayerById(req.params.id);
        res.json(player);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
};

exports.createPlayer = async (req, res) => {
    try {
        const player = await playerService.createPlayer(req.body);
        res.json(player);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
};

exports.updatePlayer = async (req, res) => {
    try {
        const player = await playerService.updatePlayer(req.params.id, req.body);
        res.json(player);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
};

exports.deletePlayer = async (req, res) => {
    try {
        const player = await playerService.deletePlayer(req.params.id);
        res.json({ message: "Player deleted", player });
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
};
