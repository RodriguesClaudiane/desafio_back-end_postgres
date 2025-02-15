import type { Request,Response } from "express";
import Task from "../models/Task";

export  async function index(req:Request, res:Response){
    const response = await Task.findAll()
    res.json(response)
}
export  async function store(req:Request, res:Response){
    const response= await Task.create(req.body);
    res.status(201)
        .json(response);
}
export  async function show(req:Request, res:Response){
    const response= await Task.findByPk(req.params.id);
    res.json(response);
}
export  async function update(req:Request, res:Response){
    const response=await  Task.update(req.body,{
        where: {
            id : req.params.id
        }
    })
    res.json(response);
}
export  async function destroy(req:Request, res:Response){
    const response = await Task.destroy({
        where:{
            id: req.params.id
        }
    })
    res.json(response);
}