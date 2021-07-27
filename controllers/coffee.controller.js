'use strict';
const axios = require('axios');
const { request } = require('express');
const { Mongoose } = require('mongoose');
const coffeeModel = require('../models/coffee.model');

// Endpoint for testing
const home = (req, res) => {
    // provide your logic here
    res.send('hello')
}
// Call the coffee api here and return the results
const retreiveItemsController = async (req, res) => {
    // provide your logic here
    const url = 'https://coffeepedias.herokuapp.com/coffee-list/'
    const requestData = await axios.get(`${url}`).then((req, res) => {
        // let dataRequired = request.map(d => {
        //     return new coffeeModel(d)
        // })
        res.send(requestData.data)
            console.log(requestData)
    }).catch(error => {
        res.send(error)
    })


};
// Get favorite coffee from MongoDB
const getFavoriteCoffee = (req, res) => {
    // provide your logic here
    const url = `${process.env.URL}/fav-list`
    const request = axios.get(`${url}`).then((req, res) => {
        res.send(request.data)
    }).catch(error => {
        res.send(error)
    })
    
    
}
// Create new fav coffee endpoint
const createItemController = (req, res) => {
    // provide logic here
    const { title,
        description,
        ingredients,
        img,
        id, } = req.body
    coffeeModel.find({}, (error, data) => {
        if (error) {
            res.send(error)
        }
        let newFavItem = new coffeeModel({
            title:title,
            description:description,
            ingredients:ingredients,
            img:img,
            id:id
        })
        newFavItem.save();
        res.send(data);
    })
};

// update coffee from MongoDB
const updateItemController = (req, res) => {
    // provide logic here
    const coffeeId=this.params.coffeeId
    const {title:title,
        description:description,
        ingredients:ingredients,
        img:img,
        id:id,}=req.body
        coffeeModel.findOne({coffeeId:coffeeId, description:description },(error,data)=>{
            if(error){
                res.send(error)
            }

            let description=data[0].description
            let coffeeId=data[0].id
           res.send(data[0]);
             
        })
};

// delete coffee from MongoDB
const deleteItemController = (req, res) => {
    // provide your logic here
    const coffeeId=this.params.coffeeId
        coffeeModel.findOne({coffeeId:coffeeId},(error,data)=>{
            if(error){
                res.send(error)
            }

            Mongoose.remove(coffeeId)
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