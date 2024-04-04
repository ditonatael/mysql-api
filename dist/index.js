"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
// IMMPORT CONNECTION & SETUP PROMISFY
const connection_1 = __importDefault(require("./connection"));
const util_1 = __importDefault(require("util"));
const query = util_1.default.promisify(connection_1.default.query).bind(connection_1.default);
const app = (0, express_1.default)();
const port = 5000;
app.get('/', (req, res) => {
    return res.send('<h1>Welcome to Express Typescript Server</h1>');
});
app.use(routers_1.default);
// CENTRALIZED ERROR
app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .send({
        error: true,
        message: err.message || 'Error',
        data: {}
    });
});
app.listen(port, () => {
    console.log(`⚡[server]: Server is running at http://localhost:${port}`);
});
