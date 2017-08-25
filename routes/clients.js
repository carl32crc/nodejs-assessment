'user strict'

const express = require('express')
const getUser = require('../controllers/clients/get_user')

const api = express.Router()
const authenticated = require('../middlewares/authenticated')

api.get('/user/:id', authenticated , getUser )

module.exports = api