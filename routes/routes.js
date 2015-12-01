var notify = require('../models/schema.js');
var express  = require('express');
var gcm = require('node-gcm');


module.exports = function(app) {

	app.post('/send',function(req,res){

	var message = new gcm.Message({
  data: {
        key1: 'message1'
      },
    notification: {
        title: "Hello",
        icon: "ic_launcher",
        body: "This is a notification that will be displayed ASAP."
    }
});
 
message.addData('key1', 'message1');

  var sender = new gcm.Sender('AIzaSyB0Zs7aycxVugdM4AoNEGAbH4BXUzup2GY'); // API Key
 

var reg = new notify({
	registrationToken:req.body.registrationToken
  })

reg.save(function(err,rec) {
            if (err)  res.json(err);
             res.json({
              success: 'true'
              
            });

});
var token = req.body.registrationToken

sender.send(message, { registrationTokens: token }, function (err, response) {
    if(err) console.error(err);
    else    console.log(response);
});

sender.sendNoRetry(message, { topic: '/topics/global' }, function (err, response) {
    if(err) console.error(err);
    else    console.log(response);
});

 });

}
