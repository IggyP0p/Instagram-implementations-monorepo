import express from "express";
import { create, read, update, delet } from "./db/crud.js";

const app = express();
const port = 3000;

delet("usuarios");

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});