import express from 'express';
import next from 'next';
import path from 'path';
import { compileFunction } from 'vm';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const app = express();

    app.get('/login', (req, res) => {
        return nextApp.render(req, res, '/users/login', { id: "Fabricio" });
    });

    app.all('*', (req, res) => {
        return handle(req, res);
    });

    app.listen(3000, () => {
        console.log("Servidor ....")
    })
});