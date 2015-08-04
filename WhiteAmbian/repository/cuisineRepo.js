var Repo=require('../repository/repo')
var utillity=require('../utillity/utillity')


Repo.Repository.prototype.addCategory=function(cuisines,category,callback){
	
	
	cuisines.forEach(function(cuisine) {
	
		 
        var id=cuisine._id;
  	 this.Model.findById(id,function(err,doc){
		if(err){
			var error={error:500,message:err}
			 callback(error);
		}
         if(!utillity.contains(doc.mealCategory.category._id)){
			 doc.mealCategory.push(category)
	
		    doc.save()
	 }  
	})
	
	
}, this);
  
}


module.exports=Repo;