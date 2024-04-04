"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalSurvivedClassQuery = exports.survivedGenderQuery = exports.survivedPassangersQuery = exports.passangersNameQuery = exports.findPassangersQuery = void 0;
// IMMPORT CONNECTION & SETUP PROMISFY
const connection_1 = __importDefault(require("./../connection"));
const util_1 = __importDefault(require("util"));
const query = util_1.default.promisify(connection_1.default.query).bind(connection_1.default);
const findPassangersQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield query('select * from passangers;');
});
exports.findPassangersQuery = findPassangersQuery;
const passangersNameQuery = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield query(`select * from passangers where name like ?`, [`%${name}%`]);
});
exports.passangersNameQuery = passangersNameQuery;
const survivedPassangersQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield query('select count(*) as Total_Survived from passangers where survived = 1 group by survived;');
});
exports.survivedPassangersQuery = survivedPassangersQuery;
const survivedGenderQuery = (sex) => __awaiter(void 0, void 0, void 0, function* () {
    return yield query(`select count(*) as Total_Survived from passangers
        where survived = 1 and sex = '${sex}'
        group by survived;`);
});
exports.survivedGenderQuery = survivedGenderQuery;
const totalSurvivedClassQuery = (pclass) => __awaiter(void 0, void 0, void 0, function* () {
    return yield query(`
        select count(*) as Total_Survived from passangers
        where survived = 1 and pclass = ${pclass}
        group by survived;
        `);
});
exports.totalSurvivedClassQuery = totalSurvivedClassQuery;
