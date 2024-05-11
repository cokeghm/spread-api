const axios = require('axios');
const { calculateSpread } = require('./calculateSpread'); // Importa la función calculateSpread

// Función para traer todos los pares de monedas que se pueden operar por buda.com
const fetchMarkets = async () => {
  const url = "https://www.buda.com/api/v2/markets";
  try {
    const response = await axios.get(url);
    const markets= response.data.markets;
    const currencyPairs = markets.map(market => market.id);
    return currencyPairs
    
  } catch (error) {
    console.error("Error fetching markets:", error);
  }
}
 
//Funcion para obtener los spreads de todos los mercados 
const calculateSpreadForAllMarkets = async () => {
  try{
  const currencyPairs = await fetchMarkets(); 
  const spreadData = [];

  // Recorremos cada par de monedas y calculamos su spread revisando libros de ordenes
  for (const pair of currencyPairs) {
    try {
      const spread = await calculateSpread(pair);
      spreadData.push({ pair, spread });
    } catch (error) {
      spreadData.push({ pair, spread: null });
    }
  }

  return spreadData;
} catch(error){
  throw new Error("Error fetching spread data for all markets:", error);
}
};

calculateSpreadForAllMarkets();

module.exports = {
    fetchMarkets: fetchMarkets,
    calculateSpreadForAllMarkets:  calculateSpreadForAllMarkets
  };