import type {Response, Request} from 'express';
import Tag from '../models/Tag';

export async function index(req:Request, res:Response){
    try{
        const response = await Tag.findAll()
        res.status(200)
            .json(response)
    }
    catch(e){
        res.status(500)
            .json(e)
        console.log('Deu errado hein :(')
    }
} 
export async function show(req:Request, res:Response){
    try{
        const response = await Tag.create(req.body);
        res.status(201)
            .json(response)
    }
    catch(e){
        res.status(500)
        .json(e)
        console.log('Reveja isso aí meu chapa')
    }
} 
export async function store(req:Request, res:Response){ 
    try{
        const response = await Tag.findByPk(req.params.name)
        res.status(200)
            .json(response)
    }
    catch(e){
        res.status(500)
            .json(e)
            console.log('Criou não hein :|')
    }
} 
export async function update(req:Request, res:Response){
    try{
        const response = await Tag.update(req.body,{
            where:{
                name: req.params.name
            }
        })
        res.status(200)
            .json(response)
    }
    catch(e){
        res.status(500)
            .json(e)
            console.log('iiiiiii')
    }
} 
export async function destroy(req:Request, res:Response){
    try{  
        const response = await Tag.destroy({
            where:{
                name: req.params.name
            }
        })
        res.status(200)
            .json(response)
    }
    catch(e){
        res.status(500)
            .json(e)
            console.log('Não vai rolar :p')
    }
} 