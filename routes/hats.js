// Require express router
const router = require('express').Router();

// Sample hats data
const hats = [
  {name: "Baseball Cap", size: "S", price: 15},
  {name: "Cowboy Hat", size: "M", price: 25},
  {name: "Top Hat", size: "L", price: 45}  
];

// Hats route
router.get('/', (req, res) => {

  res.render('hats', {
    title: 'Hats Search Results',
    hats: hats
  });

});

// Export router
module.exports = router;
