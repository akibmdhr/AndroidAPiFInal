const express = require('express');
const mongoose = require('mongoose');
const Category = require('../models/category');
const auth = require('../auth');
const router = express.Router();

router.route('/')
.get((req,res,next)=>{
    Category.find({})
    .then((category)=>{
        res.json(category);
    })
    .catch(next);
})
.post((req,res,next)=>{
    Category.create(req.body)
    .then((category)=>{
        res.statusCode = 201;
        res.json(category);
    })
    .catch(next);
})
.put((req,res,next)=>{
    res.statusCode = 405;
    res.json({ message: "Method not allowed" });
})
.delete(auth.verifyAdmin,(req,res,next)=>{
    Category.deleteMany({})
    .then((category)=>{
        res.json(category);
    })
    .catch(next);
});

router.route('/:id')
.get((req, res, next) => {
    Category.findOne({ author: req.user._id, _id: req.params.id })
        .then((category) => {
            if (category == null) throw new Error("category not found!")
            res.json(category);
        }).catch(next);
})
.post((req,res,next)=>{
    res.statusCode = 405;
    res.send("Cannot post again!!!");
})

.put((req, res, next) => {
    Category.findOneAndUpdate({ author: req.user._id, _id: req.params.id }, { $set: req.body }, { new: true })
        .then((category) => {
            if (category == null) throw new Error("Category not found!");
            res.json(category);
        }).catch(next);
})

.delete((req, res, next) => {
    Category.findOneAndDelete({ author: req.user._id, _id: req.params.id })
        .then((category) => {
            if (category == null) throw new Error("category not found!");
            res.json(category);
        }).catch(next);
});

module.exports = router;