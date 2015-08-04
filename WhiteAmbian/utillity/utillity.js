var contains=function(collection,item){
	if(collection.indexOf(item)>-1){
		return true;
	}
	return false;
}

var getPropertyArray=function(collection,key){
	if(!!collection){
	 var items=	collection.map(function(item){
			return item[key];
		})
		return items;
	}
	return null;
}


var utillities={
	contains:contains
	,getPropertyArray:getPropertyArray
}

module.exports=utillities;