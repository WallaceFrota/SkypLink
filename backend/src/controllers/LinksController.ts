import {Request, Response} from 'express';
import generateCode from '../utils/generateCode';
import db from '../database/connection';

interface Link {
    id: number;
    url: string;
    code?: string;
    hits?: number;
}

export default class LinksControllers {
    // controler encurtar link
    async postLink(request: Request, response: Response){
        const link = request.body as Link;
        link.code = generateCode();
        link.hits = 0;

        const trx = await db.transaction();

        try {
            await trx('links').insert(link);
            await trx.commit();

            return response.status(201).json(link);
        } catch (error) {
            await trx.rollback();
            return response.status(500).json({error: 'Failed shortened link'})
        }
    }
    // dados estatisticos do link
    async getLink(request: Request, response: Response){
        const code = request.params.code as string;

        await db('links').select('*').where({code: code}).then(result => {
            if(result.length > 0) {
                return response.status(200).json(result);
            } else {
                return response.sendStatus(404);
            }
        })
    }
    // controle acessar link encurtado
    async hitLink(request: Request, response: Response){
        const code = request.params.code as string;
        const trx = await db.transaction();

        const link = await trx<Link>('links').select('*').where({code: code});

        if(!link) {
            return response.status(404).json({error: 'Link not found'});
        } else {
            try {
                await trx('links').where({code: code}).update({
                    hits: link[0].hits !+ 1
                })
                await trx.commit();
    
                return response.status(200).json(link);

            } catch (error) {
                await trx.rollback();
                return response.status(500).json({error: error});
            }
        }
    }
}