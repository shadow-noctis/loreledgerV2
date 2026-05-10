const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Client } = require('pg');

const databaseUrl = process.env.DATABASE_URL
const jwtSecret = process.env.JWT_SECRET;

const client = new Client({
    connectionString: databaseUrl,
  });

const app = express();
const PORT = 3011;

app.use(cors());
app.use(express.json());


app.get('api/characters/:userId', async (req, res) => {
  const userId = req.params.userId
  try{
    const result = await client.query(
      `
      SELECT c.*
      FROM characters c
      LEFT JOIN title ON t.id = c.title_id
      LEFT JOIN user ON user.id = t.user_id
      WHERE u.id = $1
      `,
      [userId]
    );
    res.json(result.rows);
  } catch(err) {
    console.error('Error fetching characters', err);
    res.status(500).json({error: err.message });
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}
module.exports = authenticateToken;

client.connect()
  .then(() => console.log('✅ Connected to Postgres'))
  .catch(err => console.error('❌ Connection error', err.stack));


// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });