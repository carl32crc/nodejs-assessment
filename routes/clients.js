'user strict'

const express = require('express')

// controllers
const getUser = require('../controllers/clients/get_user')

const api = express.Router()

// middlewares
const authenticated = require('../middlewares/authenticated')

api.get('/user-id/:id', authenticated , getUser )
api.get('/user-name/:name', authenticated , getUser )

module.exports = api