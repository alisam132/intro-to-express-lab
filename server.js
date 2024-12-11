const express = require('express')
const morgan = require('morgan')
const app = express()


//answer 1

app.get('/greetings/:name', function (req, res) {
    const name =  req.params.name;
    res.send(`<h1>Hello there, ${name}...!</h1>`);
});
//answer 2

app.get('/roll/:rollNumber', function (req, res) {
    const rollNumber =  req.params.rollNumber;
    if (!isNaN(rollNumber)) {
        res.send(`<h1>You rolled, ${rollNumber}...!</h1>`);
    }else{
        res.send(`<h1>You must specify a number.</h1>`);
    }
    
});

//answer 3

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:indexNumber', function (req, res) {
    const indexNumber =  req.params.indexNumber;
    const name = collectibles[indexNumber].name
    const price = collectibles[indexNumber].price
    if (!isNaN(indexNumber)) {
        res.send(`<h1>So, you want the ${name}? For ${price}, it can be yours!</h1>`);
    }else{
        res.send(`<h1>This item is not yet in stock. Check back soon!.</h1>`);
    }
    
});

// answer for number 4

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];



app.get('/shoes', function (req, res) {
    const minPrice = Number(req.query.minPrice);
    const maxPrice = Number(req.query.maxPrice);
    const type = req.query.type;


    shoes.forEach((element) => {
        
        if (minPrice) {
            if (element.price <= minPrice) {
                res.send(`<h1>This shoes are : ${element.name} and it's price is ${element.price}</h1>`);
            }
        }
            else if(maxPrice){
            if (maxPrice > element.price) {
                res.send(`<h1>This shoes are : ${element.name} and it's price is ${element.price}</h1>`);
            }
        }

        else if (type) {
          
            if (element.type === type) {
                res.send(`<h1>This shoes are : ${shoes.name}</h1>`);
            }
        }
            

        else{
            res.send(`<h1>This shoes are : ${element.name}</h1>`);

        }
        
    })










    //-----------------------------------------------------------------------

//     if (minPrice) {
//         shoes.forEach((element)=>{
//             console.log(element.price);
//             if (element.price < minPrice) {
//                 res.send(`<h1>This shoes are : ${element.name} and it's price is ${element.price}</h1>`);
//             }
//         })
//     }
//     else if(maxPrice){
//         shoes.forEach((element)=>{
//             if (maxPrice > element.price) {
//                 res.send(`<h1>This shoes are : ${element.name} and it's price is ${element.price}</h1>`);
//             }
//         })
//     }
//     else if (type) {
//         shoes.forEach((element)=>{
//             if (element.type === type) {
//                 res.send(`<h1>This shoes are : ${shoes.name}</h1>`);
//             }
            
//         })
//     }
//     else{
//         shoes.forEach((element => {
//             res.send(`<h1>This shoes are : ${element.name}</h1>`);
//         }))
//     }

    
});


app.listen(3000)