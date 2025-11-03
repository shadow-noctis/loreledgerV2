require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Client } = require('pg');

const databaseUrl = "postgres://REMOVED:REMOVED@localhost:5432/loreledger";
const jwtSecret = process.env.JWT_SECRET;

const client = new Client({
    connectionString: databaseUrl,
  });

client.connect()
  .then(() => console.log('✅ Connected to Postgres'))
  .catch(err => console.error('❌ Connection error', err.stack));

  
const app = express();
const PORT = 3011;

app.use(cors());
app.use(express.json());



// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });