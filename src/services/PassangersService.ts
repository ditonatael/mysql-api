// IMMPORT CONNECTION & SETUP PROMISFY
import db from './../connection';
import util from 'util';
const query: any = util.promisify(db.query).bind(db);

export const findPassangersQuery = async() => {
    return await query('select * from passangers;')
}

export const passangersNameQuery = async(name: any) => {
    return await query(`select * from passangers where name like ?`, [`%${name}%`])
}

export const survivedPassangersQuery = async() => {
    return await query('select count(*) as Total_Survived from passangers where survived = 1 group by survived;')
}

export const survivedGenderQuery = async(sex: string) => {
    return  await query(
        `select count(*) as Total_Survived from passangers
        where survived = 1 and sex = '${sex}'
        group by survived;`
    )
}

export const totalSurvivedClassQuery = async(pclass: any) => {
    return await query(
        `
        select count(*) as Total_Survived from passangers
        where survived = 1 and pclass = ${pclass}
        group by survived;
        `
    )
}