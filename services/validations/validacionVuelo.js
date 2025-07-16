class ValidacionVuelo {
  validarVuelo({ id, xa, ya, za }) {
    if (typeof id !== 'string' || !/^[A-Z]{3}\d{3}$/.test(id)) {
      return 'ID invalido';
    }
    if (typeof xa !== 'number' || typeof ya !== 'number' || typeof za !== 'number') {
      return 'Coordenadas invalidas';
    }
    return null;
  }
}

export default new ValidacionVuelo();
