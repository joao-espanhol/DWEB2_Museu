const app = require('./config/server');
const routes = require('./app/routes/routes');

routes.home(app);
routes.tarsila(app);
routes.portinari(app);
routes.allende(app);