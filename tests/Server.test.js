const request = require('supertest');
const app = require('../src/server.js'); // Ajusta la ruta según la ubicación de tu archivo Server.js

jest.setTimeout(10000)

describe('Pruebas de los endpoints', () => {
  it('Debe obtener el spread de todos los mercados', async () => {
    const response = await request(app).get('/api/spread/all');
    expect(response.status).toBe(200);
    response.body.forEach(item => {
        expect(item).toHaveProperty('pair');
        expect(item).toHaveProperty('spread');
        expect(Array.isArray(response.body)).toBe(true); // Verifica que la respuesta sea un arreglo
    });
  });

  it('Debe calcular el spread de un mercado específico', async () => {
    const response = await request(app).get('/api/spread/eth-btc');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('pair');
    expect(response.body).toHaveProperty('spread');
  });

  it('Debe guardar un spread de alerta para un par de divisas', async () => {
    const response = await request(app)
      .post('/api/alert/spread/btc-clp')
      .send({ alertSpread: 0.5 }); // Suponiendo que 0.5 es el spread de alerta
    expect(response.status).toBe(200);
    expect(response.text).toBe('Alert spread set successfully');
  });

  it('Debe verificar el spread de alerta para todos los pares de divisas', async () => {
    const response = await request(app).get('/api/alert/spread/all');
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');
  });

  it('Debe verificar el spread de alerta para un par de divisas específico', async () => {
    const response = await request(app).get('/api/alert/spread/eth-btc');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('pair');
    expect(response.body).toHaveProperty('spread');
  });
});
