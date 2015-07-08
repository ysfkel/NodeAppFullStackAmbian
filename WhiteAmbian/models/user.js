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

var ingredientSchema=new mongoose.Schema({
	name:String
});

var mealIngredientSchema=new mongoose.Schema({
	name:String
});

var mealSchema=new mongoose.Schema({
	name:String,
	imageUrl:String,
	price:{type:Currency },
	ingredients:[mealIngredientSchema]
});

var mealCategorySchema=new mongoose.Schema({
	name:String,
	description:String,
	imageUrl:String
	,meals:[mealSchema]
});



mongoose.model('MealCategory',mealCategorySchema);
mongoose.model('Meal',mealSchema);
mongoose.model('Ingredient',ingredientSchema);
mongoose.model('MealIngredient',mealIngredientSchema);
mongoose.model('User',userSchema);
