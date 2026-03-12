// Importer le framework Express
const express = require('express');

// Créer une application Express
const app = express();

// Définir le port (utilise la variable d'environnement PORT ou 3000 par défaut)
const PORT = process.env.PORT || 3000;

// Route principale "/"
// Quand quelqu'un accède à http://localhost:3000/, il reçoit ce JSON
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello DevSecOps!', 
    version: '1.0.0' 
  });
});

// Route de santé "/health"
// Utilisée par les outils de monitoring pour vérifier que l'app fonctionne
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Exporter l'app pour les tests
module.exports = app;
