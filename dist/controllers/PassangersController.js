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
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalSurvivedClass = exports.survivedGender = exports.survivedPassangers = exports.PassangersName = exports.findPassangers = void 0;
const PassangersService_1 = require("../services/PassangersService");
const findPassangers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findPassangers = yield (0, PassangersService_1.findPassangersQuery)();
        res.status(200).send({
            error: false,
            message: 'success',
            total: findPassangers.length,
            data: findPassangers
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.findPassangers = findPassangers;
// NOMOR 1 Passangers Name
const PassangersName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const findPassangers = yield (0, PassangersService_1.passangersNameQuery)(name);
        res.status(200).send({
            error: false,
            message: 'success',
            total: findPassangers.length,
            data: findPassangers
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.PassangersName = PassangersName;
// NO 2. Survived Passsangers
const survivedPassangers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const survivedPassangers = yield (0, PassangersService_1.survivedPassangersQuery)();
        res.status(200).send({
            error: false,
            message: 'success',
            data: survivedPassangers
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.survivedPassangers = survivedPassangers;
// NOMOR 3. Survived Gender
const survivedGender = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sex } = req.params;
        const survivedGender = yield (0, PassangersService_1.survivedGenderQuery)(sex);
        res.status(200).send({
            error: false,
            message: 'success',
            data: survivedGender
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.survivedGender = survivedGender;
//  NOMOR 4. Survived with class
const totalSurvivedClass = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pclass } = req.query;
        if (Number(pclass) > 3)
            throw { status: 404, message: 'Class not found!' };
        const totalSurvivedClass = yield (0, PassangersService_1.totalSurvivedClassQuery)(pclass);
        res.status(200).send({
            error: false,
            message: 'success',
            data: totalSurvivedClass
        });
    }
    catch (error) {
        next(error);
    }
});
exports.totalSurvivedClass = totalSurvivedClass;
