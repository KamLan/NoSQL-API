'use strict';
module.exports = function(app) {
  var NoSQL = require('../controllers/apiNosqlController');

  app.route('/albums')
    .get(NoSQL.list_all_albums)

  app.route('/artistes')
    .get(NoSQL.list_all_artists)

};