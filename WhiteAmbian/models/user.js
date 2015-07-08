var mongoose=require('mongoose');
var Schema=mongoose.Shema;

var userSchema=new mongoose.Schema({
	name:String,
	email:String,
	password:String,
	dateCreated:{type:Date,default:Date.now}
});




mongoose.model('User',userSchema);
