import {NextFunction, Request, Response} from 'express';
import { findPassangersQuery, survivedPassangersQuery, passangersNameQuery, survivedGenderQuery, totalSurvivedClassQuery } from '../services/PassangersService';

export const findPassangers = async(req: Request, res: Response) => {
    try {
        const findPassangers = await findPassangersQuery()

        res.status(200).send({
            error: false,
            message: 'success',
            total: findPassangers.length,
            data: findPassangers
        })
    } catch (error) {
        console.log(error)
    }
}

// NOMOR 1 Passangers Name
export const PassangersName = async(req: Request, res: Response) => {
    try {
        const {name} = req.query
        const findPassangers = await passangersNameQuery(name)
        res.status(200).send({
            error: false,
            message: 'success',
            total: findPassangers.length,
            data: findPassangers
        })
    } catch (error) {
        console.log(error)
    }
}

// NO 2. Survived Passsangers
export const survivedPassangers = async(req: Request, res: Response) => {
    try {
        const survivedPassangers = await survivedPassangersQuery()
        res.status(200).send({
            error: false,
            message: 'success',
            data: survivedPassangers
        })
    } catch (error) {
        console.log(error)
    }
}

// NOMOR 3. Survived Gender
export const survivedGender = async(req: Request, res: Response) => {
    try {
        const {sex} = req.params
        const survivedGender = await survivedGenderQuery(sex)
        res.status(200).send({
            error: false,
            message: 'success',
            data: survivedGender
         })       
    } catch (error) {
        console.log(error)
    }
}

//  NOMOR 4. Survived with class
export const totalSurvivedClass = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {pclass} = req.query
        if(Number(pclass) > 3) throw {status: 404, message: 'Class not found!'}
        const totalSurvivedClass = await totalSurvivedClassQuery(pclass)
        res.status(200).send({
            error: false,
            message: 'success',
            data: totalSurvivedClass
         })
    } catch (error) {
        next(error)
    }
}