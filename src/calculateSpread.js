const axios = require('axios');

// Función para calcular el spread como la diferencia de precio entre la orden de venta más barata y la orden de compra más cara
const calculateSpread = async (pair) => {
  const url = `https://www.buda.com/api/v2/markets/${pair}/order_book`;
  try {
    const response = await axios.get(url);
    const orderBook = response.data.order_book;

    const lowestAsk = orderBook.asks[0][0]; // Precio de la orden de venta más barata
    const highestBid = orderBook.bids[0][0]; // Precio de la orden de compra más cara
    const spread = lowestAsk - highestBid;

    return spread;
  // Manejo de errores 
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error(`No existe el par ${pair}`);
    } else if (error.request) {
      // Si la solicitud se envió pero no se recibió respuesta
      throw new Error('No se pudo obtener respuesta del servidor');
    } else {
      // Otros tipos de errores
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }
}

module.exports = {
  calculateSpread
};
