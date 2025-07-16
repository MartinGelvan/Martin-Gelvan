import modeloVuelos from '../models/vuelosModel.js';
import validacionVuelo from '../services/validations/validacionVuelo.js';

class ServicioVuelos {
  #modelo;
  constructor() {
    this.#modelo = new modeloVuelos();
  }

  obtenerTodosLosVuelos() {
    return this.#modelo.obtenerTodosLosVuelos();
  }

  agregarOActualizarVuelo(datosVuelo) {
    const errorValidacion = validacionVuelo.validarVuelo(datosVuelo);
    if (errorValidacion) return { error: 'datos no validos' };

    const idsColision = this.#modelo.verificarColisiones(datosVuelo);
    this.#modelo.guardarVuelo(datosVuelo);

    return { colisionIds: idsColision };
  }
}

export default ServicioVuelos;