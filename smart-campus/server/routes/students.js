const router = require('express').Router(); const Student = require('../models/Student'); const auth = require('../middleware/auth');
router.get('/', auth, async (req,res)=>{ const q=req.query.q||''; const data=await Student.find({$or:[{name:new RegExp(q,'i')},{rollNo:new RegExp(q,'i')},{department:new RegExp(q,'i')}]}).sort('-createdAt'); res.json(data); });
router.post('/', auth, async (req,res)=>res.status(201).json(await Student.create(req.body)));
router.put('/:id', auth, async (req,res)=>res.json(await Student.findByIdAndUpdate(req.params.id, req.body, {new:true})));
router.delete('/:id', auth, async (req,res)=>{ await Student.findByIdAndDelete(req.params.id); res.json({message:'Student deleted'}); });
module.exports = router;
