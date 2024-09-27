const { home } = require('../controllers/home_controller');
const { tarsila } = require('../controllers/tarsila_controller');
const { portinari } = require('../controllers/portinari_controller');
const { allende } = require('../controllers/allende_controller');



// Exporta as rotas como função para o index.js
module.exports = {
    home: (app) => {
        console.log('[routes] Rota Home');
        app.get('/', function(req, res){
            home(app, req, res);
        });
    },

    tarsila: (app) => {
        console.log('[routes] Rota Tarsila');

        app.get('/tarsila', function(req, res){
            tarsila(app, req, res);
        });
    },

    portinari: (app) => {
        console.log('[routes] Rota Portinari');
        app.get('/portinari', function(req, res) {
            portinari(app, req, res);
        });
    },

    allende: (app) => {
        console.log('[routes] Rota Allende');
        app.get('/allende', function(req, res) {
            allende(app, req, res);
        });
    },
}
