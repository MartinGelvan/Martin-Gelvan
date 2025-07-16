import servicioVuelos from '../services/vuelosService.js';

class VueloController {
  #service;
  constructor() {
    this.#service = new servicioVuelos();
  }

  obtenerVuelos = (req, res) => {
    res.json(this.#service.obtenerTodosLosVuelos());
  };

  crearVueloOActualizar = (req, res) => {
    const resultado = this.#service.agregarOActualizarVuelo(req.body);
    if (resultado.error) {
      res.status(400).json({ errorMsg: resultado.error });
    } else {
      res.status(200).json(resultado);
    }
  };
}

export default VueloController;
