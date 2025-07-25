const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db');

const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port localhost:${PORT}`));
