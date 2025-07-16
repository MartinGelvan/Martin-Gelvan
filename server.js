import app from './app.js';

const PUERTO = 8080;
app.listen(PUERTO, () => {
  console.log(`Servidor iniciado en el puerto ${PUERTO}`);
});