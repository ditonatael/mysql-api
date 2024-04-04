import { Router } from 'express';
import { findPassangers, survivedPassangers, PassangersName, survivedGender, totalSurvivedClass } from '../controllers/PassangersController';

const router = Router()

// router.get('/', findPassangers)
router.get('/', PassangersName)
router.get('/survived', survivedPassangers)
router.get('/survived/:sex', survivedGender)
router.get('/survive', totalSurvivedClass )




export default router;