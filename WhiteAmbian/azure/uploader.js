
var azure=require('azure-storage')
var multer=require('multer');
var formidable=require('formidable')
var path = require('path');
var fs = require('fs');

var sendFile = function(req, res, imageName, cb,blobSvc) {
  var localPath = './uploads/' + imageName;
  blobSvc.createBlockBlobFromLocalFile('images', imageName, localPath, function(error, result, response) {
    if (!error) {
      console.log('file uploaded');
      cb();
    } else {
      console.log('error on image upload is ', error);
      return error;
    }
  });
};

var upload=function(req, res, imageName, callback){
	var accounName='whiteambientstorage';
    var accountKey='0g/FEPuxWTS2pbdqm6kr3oOynfbGkLiQBnvbwtYfFg1OA1AMoOLwdzIlEo++lZY0rZzOvwrys7K0LWSW9SmrIA==';
  	var retryOperations = new azure.ExponentialRetryPolicyFilter();
	var blobService=azure.createBlobService(accounName,accountKey).withFilter(retryOperations);
	
	blobService.createContainerIfNotExists('images',{publicAccessLevel:'blob'}, function(err,result,response){
		if(!err){
      sendFile(req, res, imageName, callback,blobService)
			console.log('created container')
		}else{
			console.log('err',err)
		}
		
	})
}




module.exports={
	upload:upload
}