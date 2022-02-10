import express from 'express';
import {
    quotes
} from "./db/db"

const app = express();
const cors = require('cors');
app.use(cors());
const PORT: number = 8000;

app.get('/', (req, res) => {
    res.send('Welcome to AlbVitaFitness!!!!, use / and arrays for navigation in the backend server');
});

app.get('/quotes', (req, res) => {
    res.send(quotes);
});

app.get('/quotes/:author', (req, res) => {

    const author = String(req.params.author)
    const match = quotes.find((quote) => quote.author === author)
    
    if (match) {
      res.send(match)
    } 
    
    else {
      res.status(404).send({ error: 'Quote not found.' })
    }
  
})

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
})