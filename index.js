const express = require('express');
const app = express();
let deltron = 3030;

app.get('/', (req, res) => res.send('🐧🐧🐧🐧🐧🐧🐧'));

app.listen(deltron, () => console.log('server running on port 3030'));
