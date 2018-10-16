var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pop2',function(error){
if(error){
	console.log(error);
}
});
var personSchema = mongoose.Schema({
   no:{type: Number, required: true },
   name: {type: String, required: true},
   des: {type: String, required: true},
});

var Templete = mongoose.model("Templete", personSchema,"pop3");
/*
var workSchema = mongoose.Schema({
   
   wname:String
   
});
var Worksheet = mongoose.model("Worksheet",workSchema,"pop3");
*/
module.exports=Templete;
//module.exports=Worksheet;