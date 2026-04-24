const router = require('express').Router(); const Mark = require('../models/Mark'); const auth = require('../middleware/auth');
router.get('/', auth, async (req,res)=>res.json(await Mark.find().populate('student').sort('-createdAt')));
router.post('/', auth, async (req,res)=>res.status(201).json(await Mark.create(req.body)));
module.exports = router;
