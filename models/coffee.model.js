'use strict';
const mongoose=require('mongoose');



const coffeeSchema=mongoose.Schema({
    title:String,
    description:String,
    ingredients:String,
    img:String,
    id:String
});

const coffeeModel=mongoose.model('favcofees',coffeeSchema);

const coffeeSeed=()=>{
    const coffee=new coffeeModel()
    coffee.save()

}

module.exports=coffeeModel;
module.exports={
                coffeeModel,
                coffeeSeed,
                
            };


