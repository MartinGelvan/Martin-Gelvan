class VuelosModel {
  constructor() {
    this.vuelos = {};
  }

  guardarVuelo(vuelo) {
    this.vuelos[vuelo.id] = vuelo;
  }

  obtenerTodosLosVuelos() {
    return Object.values(this.vuelos);
  }

  verificarColisiones(nuevoVuelo) {
    const idsColision = [];
    for (const vuelo of this.obtenerTodosLosVuelos()) {
      if (vuelo.id === nuevoVuelo.id) continue;
      const distancia = Math.sqrt(
        Math.pow(nuevoVuelo.xa - vuelo.xa, 2) +
        Math.pow(nuevoVuelo.ya - vuelo.ya, 2) +
        Math.pow(nuevoVuelo.za - vuelo.za, 2)
      );
      if (distancia < 500) idsColision.push(vuelo.id);
    }
    return idsColision;
  }
}

export default VuelosModel;
