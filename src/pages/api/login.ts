import type { NextApiRequest, NextApiResponse } from "next";
import {conectarMongoDB} from '../../../middlewares/conectarMongoDB';
import type {} from '../../../types/RespostaPadraoMsg';
const endpointLogin = (
    req : NextApiRequest,
    res : NextApiResponse<RespostaPadraoMsg>
) => {
    if(req.method === 'POST'){
        const {login, senha} = req.body;

        if(login === 'admin@admin.com' &&
            senha === 'Admin@123'){
                return res.status(200).json({msg : 'Usuário autenticado com scesso'});
            }
            return res.status(405).json({error : 'Usuário ou senha não encontrados'});
    }
    return res.status(405).json({erro : 'Método informado não é válido'});
}

export default conectarMongoDB(endpointLogin);
