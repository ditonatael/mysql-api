import express, { Router } from 'express';
import PassangersRouter from './PassangersRouter';

const router = Router()

router.use(express.json())

router.use('/passangers', PassangersRouter)

export default router