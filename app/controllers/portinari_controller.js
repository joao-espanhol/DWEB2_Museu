const dbConnection = '';
const { getPortinari } = require('../models/portinari_model');

module.exports.portinari = (app, req, res) => {
    console.log('[Controller Portinari]');
    getPortinari(dbConnection, (error, result) => {
        res.render('portinari.ejs');
    })
}