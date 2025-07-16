import express from 'express';
import controladorVuelos from '../controllers/vuelosController.js';
const route = express.Router();

class VueloRoute {
  #controller;
  constructor() {
    this.#controller = new controladorVuelos();
  }

  start() {
    route.get('/', this.#controller.obtenerVuelos);
    route.post('/', this.#controller.crearVueloOActualizar);

    return route;
  }
}

export default VueloRoute;