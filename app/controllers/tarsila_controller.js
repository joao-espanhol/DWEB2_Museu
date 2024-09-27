const dbConnection = '';
const { getTarsila } = require('../models/tarsila_model');

module.exports.tarsila = (app, req, res) => {
    console.log('[Controller Tarsila]');
    getTarsila(dbConnection, (error, result) => {
        res.render('tarsila.ejs');
    })
}

