var mongoose=require('mongoose');

var Schema=mongoose.Shema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var userSchema=new mongoose.Schema({
	name:String,
	email:String,
	password:String,
	dateCreated:{type:Date,default:Date.now}
});

var mealCategorySchema=new mongoose.Schema({
	name:String,
	description:String,
	imageUrl:String
	//,meals:[mealSchema]
});
var cuisineSchema=new mongoose.Schema({
	name:String,
	mealCategories:[{type:mongoose.Schema.Types.ObjectId,index:true,ref:'MealCategory'}]
	
})



var mealIngredientSchema=new mongoose.Schema({
	name:String
});


var ingredientSchema=new mongoose.Schema({
	name:String
});


var mealSchema=new mongoose.Schema({
	name:String,
	imageUrl:String,
	price:{type:Currency },
	mealCategoryId:{type:mongoose.Schema.Types.ObjectId,ref:'MealCategory'}, //reference category for this meal
	ingredients:[mealIngredientSchema]
});







mongoose.model('Cuisine',cuisineSchema);
mongoose.model('MealCategory',mealCategorySchema);
mongoose.model('Meal',mealSchema);
mongoose.model('MealIngredient',mealIngredientSchema);
mongoose.model('Ingredient',ingredientSchema);
mongoose.model('User',userSchema);
