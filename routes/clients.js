'user strict'

const express = require('express')

const getUserId = require('../controllers/clients/get_user_id')
const getUserName = require('../controllers/clients/get_user_name')

const api = express.Router()
const authenticated = require('../middlewares/authenticated')

api.get('/user-id/:id', authenticated , getUserId )
api.get('/user-name/:name', authenticated , getUserName )

module.exports = api