'use strict';

var mongoose = require('mongoose'),
    album = mongoose.model('albums');
    
var artiste = mongoose.model('artistes');

var client = mongoose.model('clients');

var viewArtistes = mongoose.model('mongo_view_art');

var viewAlbums = mongoose.model('mongo_view_alb');

exports.list_all_albums = function(req, res) {
  album.find({}, function(err, albums) {
    if (err)
      res.send(err);
    res.json(albums);
  });
};

exports.list_all_artists = function(req, res) {
  artiste.find({}, function(err, artiste) {
    if (err)
      res.send(err);
    res.json(artiste);
  });
};

exports.list_all_clients = function(req, res) {
  client.find({}, function(err, client) {
    if (err)
      res.send(err);
    res.json(client);
  });
};

exports.view_art = function(req, res) {
  viewArtistes.find({}, function(err, viewArtistes) {
    if (err)
      res.send(err);
    res.json(viewArtistes);
  });
};

exports.view_alb = function(req, res) {
  viewAlbums.find({}, function(err, viewAlbums) {
    if (err)
      res.send(err);
    res.json(viewAlbums);
  });
};




// exports.create_a_task = function(req, res) {
//   var new_task = new Task(req.body);
//   new_task.save(function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.delete_a_task = function(req, res) {


//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };


