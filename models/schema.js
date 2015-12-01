var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var userSchema = mongoose.Schema({
        registrationToken:Array
});
 
mongoose.connect('mongodb://localhost:27017/dbpush');
module.exports = mongoose.model('notify', userSchema);