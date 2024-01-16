const express = require('express');
const path = require('path');
const app = express();

const PORT = 3030;






app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))