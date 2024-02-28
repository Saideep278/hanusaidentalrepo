import express from 'express';
import mongoose from 'mongoose';

import Reviews_model from '../models/reviews_model.js';

const router = express.Router();

export const createPost = async (req, res) => {
    const post = req.body
    const newReviews_model = new Reviews_model({ ...post,  createdAt: new Date().toISOString() })
    try {
        
        await newReviews_model.save();
        res.status(201).json(newReviews_model);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}



export const getPost = async (req, res) => {
    
    try {
        const data = await Reviews_model.find()
        res.json( data);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}