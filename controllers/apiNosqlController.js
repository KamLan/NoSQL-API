'use strict';

var mongoose = require('mongoose'),
    album = mongoose.model('albums');
    
var artiste = mongoose.model('artistes');

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


