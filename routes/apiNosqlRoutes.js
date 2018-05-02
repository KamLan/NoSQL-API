'use strict';
module.exports = function(app) {
  var NoSQL = require('../controllers/apiNosqlController');

  app.route('/albums')
    .get(NoSQL.list_all_albums)

  app.route('/artists')
    .get(NoSQL.list_all_artists)

  app.route('/clients')
    .get(NoSQL.list_all_clients)

  app.route('/viewart')
    .get(NoSQL.view_art)

  app.route('/viewalb')
    .get(NoSQL.view_alb)
};