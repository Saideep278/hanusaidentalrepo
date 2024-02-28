import express from 'express';
import mongoose from 'mongoose';

import AppMessage from '../models/appoint_model.js';

const router = express.Router();

export const createAppo = async (req, res) => {
    const post = req.body
    const newAppMessage = new AppMessage({ ...post,  createdAt: new Date().toISOString() })
    try {
        
        await newAppMessage.save();
        res.status(201).json(newAppMessage);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}



export const getAppo = async (req, res) => {
    
    try {
        const data = await AppMessage.find()
        res.json( data);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}