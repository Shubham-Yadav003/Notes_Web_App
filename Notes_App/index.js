const express = require('express');
const bodyParser = require('body-parser'); //parse incoming request in req.body 
const connectDB= require('./config/db');
const notesRouters = require('./routes/notes');

const app = express();
const PORT = 3000;

//connection to mongodb 
connectDB();

//middleware
app.use(bodyParser.json());
app.use(express.static('public'));
// localhost:3000/notes/id -- transfer to noteRouter
app.use('/notes', notesRouters );
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})