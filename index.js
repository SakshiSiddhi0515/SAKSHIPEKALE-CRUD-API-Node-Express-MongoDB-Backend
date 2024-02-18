const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express()

//MIDDLEWARE

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ROUTES

app.use("/api/products",productRoute);

//GET THE REQUESTED API 

app.get('/', (req, res) => {
    res.send("Hello from Node API server");
});

//GET THE DATA POPULATED

// app.get('/api/products', async(req,res)=>{
//     try{
//         const product = await Product.find({});
//         res.status(200).json(product);
//       } catch (error){
//           res.status(500).json({message: error.message});
//       }
// })

//GET ID FROM THE DATA POPULATED

// app.get('/api/products/:id', async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//       } catch (error){
//           res.status(500).json({message: error.message});
//       }
// })

// POST THE DATA IN THE DATABASE

// app.post('/api/products',async (req,res) => {
    
//     try{
//       const product = await Product.create(req.body);
//       res.status(200).json(product);
//     } catch (error){
//         res.status(500).json({message: error.message});
//     }
// });

//UPDATE THE DATA

// app.put('/api/products/:id',async(req,res)=>{
//     try{
//         const {id} = req.params;

//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if (!product){
//             return res.status(404).json({message: "Product not found"});
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     }catch (error){
//         res.status(500).json({message: error.message});
//     }
// })

//DELETE THE DATA FROM THE DATABASE

// app.delete('/api/products/:id',async(req,res)=> {
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id, req.body);

//         if(!product){
//             return res.status(404).json({message: "Product not found"});
//         }
//         res.status(200).json({message: "Product deleted successfully"});

//     }catch(error){
//         res.status(500).json({message: error.message});

//     }
// })

//CONNECT TO THE DATABASE

mongoose.connect("mongodb+srv://sspekhale2000:Sakshi05@backenddb.qqozhng.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() =>{
    console.log("Connected to database!");
    app.listen(3000,() =>{
        console.log('Server is running on port 3000');
    });
    
})
.catch(() => {
    console.log("connections failed!");
});