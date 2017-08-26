'user strict'

const express = require('express')

// controllers
const getUserId = require('../controllers/clients/get_user_id')
const getUserName = require('../controllers/clients/get_user_name')

const api = express.Router()

// middlewares
const authenticated = require('../middlewares/authenticated')
const isAdmin = require('../middlewares/is_admin')

api.get('/user-id/:id', [authenticated, isAdmin] , getUserId )
api.get('/user-name/:name', authenticated , getUserName )

module.exports = api