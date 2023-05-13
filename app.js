// Allow cross-origin resource sharing (CROS)
const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/vueling_destino', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Enable CORS for all routes
app.use(cors());

// Handle preflight requests for all route
app.options('*', cors());

// Define a mongoose schema
const playerSchema = new mongoose.Schema({
    nombre: String,
    puntos: String,
});

// Create a mongoose model based on the schema
const Player = mongoose.model('Player', playerSchema, 'ranking');

app.get("/getRanking", async (req, res) => {
    try {
        const players = await Player.find().sort({puntos: -1});
        res.json(players);
      } catch (error) {
        console.error('Failed to retrieve users', error);
        res.status(500).json({ error: 'Failed to retrieve users' });
      }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
  