const router = require('express').Router(); const Attendance = require('../models/Attendance'); const auth = require('../middleware/auth');
router.get('/', auth, async (req,res)=>res.json(await Attendance.find().populate('student').sort('-createdAt')));
router.post('/', auth, async (req,res)=>res.status(201).json(await Attendance.create(req.body)));
module.exports = router;
