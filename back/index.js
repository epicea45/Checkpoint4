const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const port = process.env.PORT || 8000;
const app = express();
​const cors = require('cors');


app.use(bodyParser.json());
​app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }))

// pour pouvoir aller chercher les images ave react
app.use('/static', express.static('public'));

const api = require('./routes');

// pour séparer les cotes API et déclarer les routes dans l'index de ./routes .
app.use('/api', api);

// pour séparer les cotes API et déclarer les routes dans l'index de ./routes .
app.use('/api', api);

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome!' });
});
​
app.post('/', (req, res) => {
  if (req.body.name.length === 0) {
    return res.status(404).json({ message: 'Empty' });
  }
​
  //TODO Save in database
​
  return res.status(200).json(req.body);
});
​
app.listen(8000, () => console.log('App is running on port 8000'));




