const express = require('express')
const { Pool } = require('pg')

const app = express()
const port = process.env.PORT || 6375

// Check if SSL should be enabled
const isProduction = process.env.NODE_ENV === 'production'

// Use the DATABASE_URL environment variable provided by Docker Compose or Dokku
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
})

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')
    res.send(`Current time: ${result.rows[0].now}`)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error retrieving time from database')
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
