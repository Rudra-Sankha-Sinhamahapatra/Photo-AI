import { Request, Response } from "express";
import simpleGit from "simple-git";
import { generate } from "../utils/generate";
import { getAllFiles } from "../utils/getAllFiles";
import path from 'path'

export const deploy = async(req:Request,res:Response) => {
    try {
    const repoUrl = req.body.repoUrl;
    const id = generate();
    const git = simpleGit();
    await git.clone(repoUrl, path.join(__dirname,`output/${id}`));
    
    const files = getAllFiles(path.join(__dirname,`output/${id}`));

    res.status(200).json({
        message:"Successful",
        id,
        files
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