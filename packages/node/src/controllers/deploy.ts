import { Request, Response } from "express";
import simpleGit from "simple-git";
import { generate } from "../utils/generate";

export const deploy = async(req:Request,res:Response) => {
    try {
    const repoUrl = req.body.repoUrl;
    const id = generate();
    const git = simpleGit();
    await git.clone(repoUrl, `output/${id}`);
    
    res.status(200).json({
        message:"Successful",
        id
    })
    return
    } catch(error) {
        res.status(500).json({
            message:"Internal Server Error",
            error
        })
        return
    }
}