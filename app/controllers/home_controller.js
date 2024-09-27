const dbConnection = '';
const { getPaintings } = require('../models/home_model');

module.exports.home = (app, req, res) => {
    console.log('[Controller Home]]');
    getPaintings(dbConnection, (error, result) => {
        res.render('home.ejs');
    })
}