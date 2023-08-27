import express from 'express';
import { get , merge } from 'lodash';
import { getUserBySessionToken} from '../db/users';


export const isAuthenticated = async (req:express.Request,res:express.Response,next:express.NextFunction) => {
    try {
        
        const sessionToken = req.cookies['Yash-Auth'];

        if(!sessionToken){
            return res.sendStatus(403).json({message: 'You are not authorized to perform this action'});
        }

        const existingUser = await getUserBySessionToken(sessionToken);
        if(!existingUser){
            return res.sendStatus(403).json({message: 'You are not authorized to perform this action'});
        }

        merge(req,{identity: existingUser})

        return next();

    } catch (error) {
        console.log(error)
        return res.sendStatus(400).json({message: 'User not found'});
    }
}

export const isOwner = async (req:express.Request,res:express.Response,next:express.NextFunction) => {
    try {
        const { id } = req.params;
        const currentUserId = get(req, 'identity._id') as string;
        if(!currentUserId){
            return res.sendStatus(400).json({message: 'User not found'});
        }
        if(currentUserId.toString() !== id){
            return res.sendStatus(403).json({message: 'You are not authorized to perform this action'});
        }
        next();
    } catch (error) {
        console.log(error)
        return res.sendStatus(400).json({message: 'User not found'});
    }
}


