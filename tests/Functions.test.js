const { calculateSpread } = require('../src/calculateSpread');
const { calculateSpreadForAllMarkets, fetchMarkets } = require('../src/calculateSpreadFAM');
const { setAlertSpread, checkSpreadAlert } = require('../src/alertSpreadHandler');

jest.setTimeout(10000)

describe('Pruebas unitarias de las funciones', () => {
  describe('calculateSpread()', () => {
    it('Debería calcular el spread correctamente', async () => {
      // Aquí puedes simular los datos necesarios para la prueba
      const pair = 'btc-clp';
      const spread = await calculateSpread(pair);
      // Agrega expectativas para verificar si el cálculo del spread es correcto
      expect(spread).toBeDefined();
      expect(typeof spread).toBe('number');
    });
  });

  describe('calculateSpreadForAllMarkets()', () => {
    it('Debería calcular el spread para todos los mercados correctamente', async () => {
      // Aquí puedes simular los datos necesarios para la prueba
      const spreadData = await calculateSpreadForAllMarkets();
      // Agrega expectativas para verificar si el cálculo del spread para todos los mercados es correcto
      expect(spreadData).toBeDefined();
      expect(typeof spreadData).toBe('object');
    });
  });

  describe('fetchMarkets()', () => {
    it('Debería obtener todos los pares de divisas', async () => {
      // Aquí puedes simular los datos necesarios para la prueba
      const allPairs = await fetchMarkets();  
      expect(Array.isArray(allPairs)).toBe(true);
      // Añade más expectativas según sea necesario
    });
  });

});
