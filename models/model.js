'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var artisteSchema = new Schema({
    art_id: Number,
    art_nom: String,
    art_typ: String,
    art_pays: String,
    art_genre: String
})
 
module.exports = mongoose.model('artistes', artisteSchema);

var albumsSchema = new Schema({
    alb_id: Number,
    alb_art: Number,
    alb_nom: String,
    alb_annee: Number,
    alb_prix: Number
})
 
module.exports = mongoose.model('albums', albumsSchema);

var clientSchema = new Schema({
    cli_id: Number,
    cli_nom: String,
    cli_adr: String,
    cli_cps: String,
    cli_ville: String,
    cli_email: String,
    cli_dnai: Number
})
 
module.exports = mongoose.model('client', clientSchema);

var genresSchema = new Schema({
    gen_genre: String,
    gen_libelle: String
})
 
module.exports = mongoose.model('client', clientSchema);

var historiqueSchema = new Schema({
    his_id: Number,
    his_art: Number,
    his_mem: Number,
    his_debut: Number,
    his_fin: Number
})
 
module.exports = mongoose.model('historique', historiqueSchema);

var instrumentsSchema = new Schema({
    ins_cod: String,
    ins_libelle: String
})
 
module.exports = mongoose.model('instruments', instrumentsSchema);

var membresSchema = new Schema({
    mem_id: Number,
    mem_nom: String,
    mem_pays: String,
    mem_ins: String,
})
 
module.exports = mongoose.model('membres', membresSchema);

var paysSchema = new Schema({
    pay_pays: String,
    pay_libelle: String
})
 
module.exports = mongoose.model('pays', paysSchema);

var ventesSchema = new Schema({
    ven_id: Number,
    ven_date: Number,
    ven_alb: Number,
    ven_cli: Number,
    ven_prix: Number
})
 
module.exports = mongoose.model('ventes', ventesSchema);

