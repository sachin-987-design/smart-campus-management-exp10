const router = require('express').Router(); const Course = require('../models/Course'); const auth = require('../middleware/auth');
router.get('/', auth, async (req,res)=>res.json(await Course.find().sort('-createdAt')));
router.post('/', auth, async (req,res)=>res.status(201).json(await Course.create(req.body)));
router.delete('/:id', auth, async (req,res)=>{ await Course.findByIdAndDelete(req.params.id); res.json({message:'Course deleted'}); });
module.exports = router;
