const express = require('express')
const bodyParser = require('body-parser')

const app=express()
const port = 8080;

app.use(bodyParser.json())

app.get('/health',(req,res)=>{
    res.header({"System-Health":true})
    res.sendStatus(204)
})

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
