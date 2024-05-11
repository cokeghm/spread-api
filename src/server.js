const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json'); // Define el archivo swagger.json que describirá tu API
const { calculateSpread } = require('./calculateSpread');
const { calculateSpreadForAllMarkets,fetchMarkets } = require('./calculateSpreadFAM')
const { setAlertSpread, checkSpreadAlert } = require('./alertSpreadHandler');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para el manejo de solicitudes JSON
app.use(express.json());

// Ruta para servir la interfaz Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ruta para obtener el spread de todos los mercados
app.get('/api/spread/all', async (req, res) => {
    try {
      const spreadData = await calculateSpreadForAllMarkets(); // Obtiene el spread de todos los mercados
      res.json(spreadData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Ruta para calcular el spread de un mercado específico
app.get('/api/spread/:pair', async (req, res) => {
    const pair = req.params.pair;
    try {
      const spread = await calculateSpread(pair);
      res.json({ pair, spread });
    } catch (error) {
      res.status(500).json({ error: error.message });             
    }
  });

// Ruta para guardar un spread de alerta
app.post('/api/alert/spread/:pair', async (req, res) => {
    const pair = req.params.pair;
    const alertSpread = req.body.alertSpread; // Suponiendo que el valor de alertSpread se pasa en el cuerpo de la solicitud
    try {
      await setAlertSpread(pair, alertSpread); // Establece el spread de alerta para el par de divisas dado
      res.status(200).send('Alert spread set successfully');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Ruta para verificar el spread de alerta de todos los pares
app.get('/api/alert/spread/all', async (req, res) => {
    try {
      const allPairs = await fetchMarkets();// Obtener todos los pares de divisas
      const spreadAlerts = {};
  
      // Verificar el spread de alerta para cada par de divisas
      for (const pair of allPairs) {
        const spreadAlertData = await checkSpreadAlert(pair);
        spreadAlerts[pair] = spreadAlertData;
      }
      res.json(spreadAlerts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Ruta para verificar el spread actual contra el spread de alerta
app.get('/api/alert/spread/:pair', async (req, res) => {
    const pair = req.params.pair;
    try {
      const spreadAlertData = await checkSpreadAlert(pair); // Compara el spread actual con el spread alerta
      res.json(spreadAlertData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  if (require.main === module) {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
module.exports = app;