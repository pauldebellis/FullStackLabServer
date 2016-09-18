var mongoose = require('mongoose');
var koanSchema = mongoose.Schema({
    title: String,
    text: String
});

var Koan = mongoose.model('Koan', koanSchema);

module.exports=Koan;