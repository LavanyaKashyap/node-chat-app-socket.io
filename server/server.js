const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname , '../public')));
const port = process.env.port || 3000


app.listen(port ,(connected)=>{
    console.log(`Connectted to the port ${port}`);
})