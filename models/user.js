// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {
    firstName: {type : String, default: ''},
    lastName : {type : String, default: ''},
    username : {type : String, default: ''},
    email    : {type : String, default: ''},
    password : {type : String, default: ''}
});