"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PassangersController_1 = require("../controllers/PassangersController");
const router = (0, express_1.Router)();
// router.get('/', findPassangers)
router.get('/', PassangersController_1.PassangersName);
router.get('/survived', PassangersController_1.survivedPassangers);
router.get('/survived/:sex', PassangersController_1.survivedGender);
router.get('/survive', PassangersController_1.totalSurvivedClass);
exports.default = router;
