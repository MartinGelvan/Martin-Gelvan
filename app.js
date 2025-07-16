import express from 'express';
import VueloRoute from './routes/vuelosRoutes.js';

const app = express();
app.use(express.json());

const vuelosRutas = new VueloRoute();
app.use('/vuelos', vuelosRutas.start());

export default app;