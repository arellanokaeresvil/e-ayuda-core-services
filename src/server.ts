import 'reflect-metadata'
import express from "express";
import dotenv from 'dotenv'
import routes from "./routes/index";

import AppDataSource from "./config/database";
import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use(errorHandler)

AppDataSource.initialize()
    .then(() => {
        console.log('Database connection established');

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });

    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
});
