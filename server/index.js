const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const upload = require('express-fileupload');

const app = express();

// <>Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(upload());

app.post('/uploads', (req, res) => {
  console.log(req);
  if(req.files){
    res.json({...req.body,...req.files});
  }
})

const port = 5000;

app.listen(port, ()=> console.log(`Server running in ${port}`))