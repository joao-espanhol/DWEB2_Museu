const dbConnection = '';
const { getAllende } = require('../models/allende_model');

module.exports.allende = (app, req, res) => {
    console.log('[Controller Allende]');
    getAllende(dbConnection, (error, result) => {
        res.render('allende.ejs');
    })
}

