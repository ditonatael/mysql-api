import express, {Express, NextFunction, Request, Response} from 'express';
import routers from './routers'

// IMMPORT CONNECTION & SETUP PROMISFY
import db from './connection';
import util from 'util';
const query: any = util.promisify(db.query).bind(db);

const app: Express = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
    return res.send('<h1>Welcome to Express Typescript Server</h1>');
});

app.use(routers)

// CENTRALIZED ERROR
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res
    .status(err.status || 500)
    .send({
        error: true,
        message: err.message || 'Error',
        data: {}
    })
})

app.listen(port, () => {
    console.log(`⚡[server]: Server is running at http://localhost:${port}`);
});