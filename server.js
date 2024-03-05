const express = require('express');
const app = express();
const  mongoose  = require("mongoose");


app.set('view engine', 'ejs');
app.use(express.static('public'));  // for css and javascript
    
            
app.use(express.urlencoded({extended: false}))   //help to use the form data

app.use('/', require('./routes/indexRoute'))


// ***********************************DATABASE CONNECTION********************************************

// ***********************************DATABASE CONNECTION END ********************************************

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
