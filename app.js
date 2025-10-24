const express = require('express');
const app = express();
const PORT = 8080;
app.get('/', (req, res) => res.send('Hello from the Container! 🚀'));
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));