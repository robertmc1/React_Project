const router = require('express').Router();



router.get('/', (req,res) => res.json({code: 200, response: 'get Teams'}));
router.post('/', (req,res) => res.json({code: 200, response: 'post Teams'}));
router.put('/', (req,res) => res.json({code: 200, response: 'put Teams'}));
router.delete('/', (req,res) => res.json({code: 200, response: 'delete Teams'}));

module.exports = router;