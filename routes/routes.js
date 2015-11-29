var notify = require('../models/schema.js');
var express  = require('express');
var gcm = require('node-gcm');


module.exports = function(app) {

	app.post('/send',function(req,res){
	var message = new gcm.Message({
    collapseKey: 'demo',
    priority: 'high',
    contentAvailable: true,
    delayWhileIdle: true,
    timeToLive: 3,
    restrictedPackageName: "somePackageName",
    dryRun: true,
    data: {
        key1: 'first message'
        },
    notification: {
        title: "new notification",
        icon: "ic_launcher",
        body: "Recent updates"
    }
});
  message.addData('key1','first message');
  var sender = new gcm.Sender('AIzaSyCqk35BFXjMATes7KweAY7WRNkv1xVO03g'); // API Key
 

var reg = new notify({
	registrationToken:req.body.registrationToken
  })

reg.save(function(err,rec) {
            if (err)  res.json(err);
             res.json({
              success: 'true'
              
            });

});

sender.sendNoRetry(message, { registrationToken: registrationToken }, function(err, response) {
  if(err) console.error(err);
  else    console.log(response);
   });

 });

}
