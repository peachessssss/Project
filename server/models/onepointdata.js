let mongoose = require('mongoose');

//Schema Validation

let userSchema = mongoose.Schema({
    FX2 : {type : String,require:true},
    X0 : {type : Number,require :true}
});

let Onepoint = mongoose.model('onepoints',userSchema);
module.exports = Onepoint;
