
function Repository(Model) {
   this.Model=Model;
}



Repository.prototype.getAll = function (callback) {
    
   this.Model.find(function(err,doc){
		if(err){
			var error={error:500,message:err}
			 callback(error);
		}
		callback(doc)
	});
	
	
}

Repository.prototype.add=function(data,callback){

	data.save(function(err,doc){
		if(err){
			var error={error:500,message:err}
			 callback(error);
		}
		callback(doc)
	})
}

Repository.prototype.update=function(id,setProperties,callback){
  
   this.Model.findById(id,function(err,oldDoc){
	      var newDoc=setProperties(oldDoc);
		  newDoc.save(function(err,data){
			  if(err){
		        var error={error:500,message:err}
			    callback(error);
			  }
			    callback(newDoc);
		  })
		  
	  })
  
}


Repository.prototype.getById=function(id,callback){
	 this.Model.findById(id,function(err,doc){
		if(err){
			var error={error:500,message:err}
			 callback(error);
		}
	   callback(doc);
	})
}

Repository.prototype.remove=function(id,callback){
	  this.Model.remove({_id:id},function(err,doc){
		  if(err){
			var error={error:500,message:err}
			 callback(error);
		  }
		    callback(doc);
	  })
}


var repo={

	Repository:Repository
}

module.exports=repo;