var Repo=require('../repository/repo')


Repo.Repository.prototype.addCategory=function(id,callback){
   
  console.log('UPDATING CUISNE')
//    	 this.Model.findById(id,function(err,doc){
// 		if(err){
// 			var error={error:500,message:err}
// 			 callback(error);
// 		}
// 		console.log('DOCUMEMNT',doc)
// 		doc.mealCategories.push(id)
// 		doc.save(function(err,doc){
// 			if(err){
// 				var error={error:500,message:err};
// 				callback(error);
// 			}
// 			callback(doc);
// 		})
// 
// 	   
// 	  
// 	})
	
	this.Model.findOne({}).populate('mealCategories').exec(function(err, mealCategories) { 
		console.log('DOCS',mealCategories)
// Your callback code where you can access subdomain directly through custPhone.subdomain.name 
})
}



module.exports=Repo;