const route = require('express').Router();



app.get('/', (req,res) => res.json({code: 200, respones: 'get Teams'}));
app.post('/', (req,res) => res.json({code: 200, respones: 'post Teams'}));
app.put('/', (req,res) => res.json({code: 200, respones: 'put Teams'}));
app.delete('/', (req,res) => res.json({code: 200, respones: 'delete Teams'}));

module.exports = router;