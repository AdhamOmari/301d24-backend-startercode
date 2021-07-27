'use strict';
const axios = require('axios');
const {
    coffeeModel,
    coffeeSeed,
    
}= require('../models/coffee.model');

// Endpoint for testing
const home = (req, res) => {
    // provide your logic here
    res.json('hello')
}
// Call the coffee api here and return the results
class coffee {
    constructor(item){
        this.title=item.title;
        this.description=item.description;
        this. ingredients=item.ingredients;
        this. img=item.image_url;
        this. id=item.id;
    }
}
const retreiveItemsController = (req, res) => {
    coffeeModel.find({},(err,data)=>{
        res.send(data)
    })



};
// Get favorite coffee from MongoDB
const getFavoriteCoffee = (req, res) => {
    axios.get(`https://coffeepedias.herokuapp.com/coffee-list/`).then(item => {
        const allCofeeData = item.data.map(result => {
            return new coffee(result)
        
        })
        res.send(allCofeeData)
        // console.log(allCofeeData);
    })
}



// Create new fav coffee endpoint
const createItemController = (req, res) => {
    // provide logic here
    const { id, title, description, ingredients, image_url } = req.body;
    coffeeModel.find({ id:id }, (err, data) => {
        if (data > 0) {
            console.log('data are exist');
        } else {
            let cofee = new coffeeModel({
                title: title,
                description: description,
                ingredients: ingredients,
                img:image_url,
                id:id,
            })
            // cofee.save();
            coffeeSeed();
        }
    })

}

// update coffee from MongoDB
const updateItemController = (req, res) => {
  const {idx}=req.params;
  const { id, title, description, ingredients, image_url } = req.body;
  coffeeModel.find({},(err,data)=>{

  })
};

// delete coffee from MongoDB
const deleteItemController = (req, res) => {
    
    const{idx}=req.params
    const { id, title, description, ingredients, image_url } = req.body;

    coffeeModel.remove({id:idx},(err,data) =>{
        res.send(data);

    })
   


};
    

module.exports = {
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemsController
};
