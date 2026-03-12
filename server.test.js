// Importer supertest pour faire des requêtes HTTP de test
const request = require('supertest');

// Importer notre application
const app = require('./server');

// Groupe de tests pour l'API
describe('API Tests', () => {
  
  // Test 1 : Vérifier que la route / fonctionne
  test('GET / returns welcome message', async () => {
    // Faire une requête GET sur /
    const response = await request(app).get('/');
    
    // Vérifier que le code de statut est 200 (OK)
    expect(response.statusCode).toBe(200);
    
    // Vérifier que le message est correct
    expect(response.body.message).toBe('Hello DevSecOps!');
    
    // Vérifier que la version est présente
    expect(response.body.version).toBe('1.0.0');
  });

  // Test 2 : Vérifier que la route /health fonctionne
  test('GET /health returns healthy status', async () => {
    // Faire une requête GET sur /health
    const response = await request(app).get('/health');
    
    // Vérifier le code de statut
    expect(response.statusCode).toBe(200);
    
    // Vérifier le statut de santé
    expect(response.body.status).toBe('healthy');
    
    // Vérifier que le timestamp existe
    expect(response.body.timestamp).toBeDefined();
  });

  // Test 3 : Vérifier qu'une route inexistante renvoie 404
  test('GET /unknown returns 404', async () => {
    const response = await request(app).get('/unknown');
    expect(response.statusCode).toBe(404);
  });

});
