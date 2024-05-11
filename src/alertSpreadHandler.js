const { calculateSpread } = require("./calculateSpread");
// Objeto para almacenar los spreads de alerta
const alertSpreads = {};

// Función para establecer el spread de alerta
const setAlertSpread = async (pair, alertSpread) => {
  alertSpreads[pair] = alertSpread;
   // Almacena el spread de alerta para el par de divisas dado
};

// Función para verificar el spread de alerta
const checkSpreadAlert = async (pair) => {
  try {
    pair = pair.toLowerCase();
    const spread = await calculateSpread(pair); // Calcula el spread actual para el par de divisas dado
    let alertSpread = alertSpreads[pair]; // Obtiene el spread de alerta para el par de divisas dado

    if (alertSpread === undefined) {
      alertSpread= `Alert spread not set for pair ${pair}`;
      condition = "N/A";
    } else {
      if (spread > alertSpread) {
        condition = "Spread > Alert";
      } else if (spread < alertSpread) {
        condition = "Spread < Alert";
      } else {
        condition = "Spread = Alert";
      }
    }

    return {
      pair: pair,
      spread: spread,
      alertSpread: alertSpread,
      condition: condition,
    };
  } catch (error) {
    console.error(`Not able to find pair ${pair}`);
    
  }
};


module.exports = {
  setAlertSpread: setAlertSpread,
  checkSpreadAlert: checkSpreadAlert,
};
