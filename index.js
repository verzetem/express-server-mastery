const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let deltron = 3030;
const cors = require('cors');

const cakeRoutes = require('./routes/cakes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('🐧🐧🐧🐧🐧🐧🐧'));

// app.use('/cakes', cakeRoutes);

app.listen(deltron, () => console.log(`server running on port ${deltron}`));
