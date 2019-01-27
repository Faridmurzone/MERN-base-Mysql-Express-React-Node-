const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nfu',
  socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'
})

connection.connect((err) => {
  if (err) {
    console.log(err)
  }
})

console.log(connection)

const app = express()
app.use(cors())

app.get('/', (_req, res) => {
  res.send('Hello from server. Go to <a href="/teams">Teams</a>')
})

// Example of how get values from MySQL
app.get('/teams', (_req, res) => {
  const SELECT_ALL_TEAMS = 'SELECT * from teams;'
  connection.query(SELECT_ALL_TEAMS, (err, teams) => {
    const data = {
      data: teams
    }
    if (err) {
      return res.send(err)
    } else {
      return res.json(data)
    }
  })
})

// Example of how ADD VALUE in MySQL with GET (also works for POST)
app.get('/teams/add', (req, res) => {
  const { name, description } = req.query
  const ADD_TEAM = `INSERT INTO teams (name, description) VALUES ('${name}', '${description}');`
  connection.query(ADD_TEAM, (err, _teams) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Equipo agregado')
    }
  })
})

// With the same logic of before delete Value from MySQL
app.get('/teams/delete', (req, res) => {
  const { id } = req.query
  const DELETE_TEAM = `DELETE FROM teams WHERE id = ${id};`
  connection.query(DELETE_TEAM, (err, _teams) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Equipo eliminado')
    }
  })
})

app.listen(4000, () => {
  console.log('Listening on port 4000')
})
