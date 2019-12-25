const express=require('express')
const mongoose =require('mongoose')
const bodyParser=require('body-parser')
const config=require('config')
const users=require('./routes/api/users')
// const products=require('./routes/api/products')
// const orders=require('./routes/api/orders')
// const details=require('./routes/api/details')

const app=express();


app.use(bodyParser.json())

const db=config.get('mongoURI')
//Connect to Mongo
mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true  })
  .then(()=>console.log('mongoDb connected'))
  .catch(err=>console.log(err))

//Use routes
// app.use('/api/products',products)
// app.use('/api/orders',orders)
app.use('/api/users',users)
// app.use('/api/details',details)
const port=5000;
app.listen(port,()=>console.log(`Server started on port ${port}`))