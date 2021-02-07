const express = require('express');
const router = express.Router();
//const router = express.Router();

let restaurants = require('../data');
let currentID = 9;

router.get('/', (req, res) => {
    res.json(restaurants)
});

router.get('/get/:id', (req, res) => {
    let headId = Number.parseInt(req.params.id, 10);
    let restaurant = restaurants.find(restaurant => restaurant.id === headId);
    res.send(restaurant)
});

router.post('/post/', (req, res) => {
    currentID += 1;
    let newRestaurant = {
        id: currentID,
        ...req.body
    };
    restaurants.push(newRestaurant);
    res.send(newRestaurant);
});

router.put('/:id', (req, res) => {
    let headId = Number.parseInt(req.params.id, 10);
    let restaurantIndex = restaurants.findIndex(restaurant => restaurant.id === headId);
    let newRestaurant = {
        id:headId,
        ...req.body
    };
    restaurants[restaurantIndex] = newRestaurant;
    res.send(restaurants[restaurantIndex]);
});

router.delete('/del/:id', (req, res) => {
    let headId = Number.parseInt(req.params.id, 10);
    let restaurantIndex = restaurants.findIndex(restaurant => restaurant.id === headId);
    restaurants.splice(restaurantIndex, 1);
    res.sendStatus(204);
})

module.exports = router;