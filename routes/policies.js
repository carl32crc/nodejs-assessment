'user strict'

const express = require('express')

// controllers
const getPolicies = require('../controllers/policies/get_policies')
const getPolicy = require('../controllers/policies/get_policy')

const api = express.Router()

// middlewares
const authenticated = require('../middlewares/authenticated')
const isAdmin = require('../middlewares/is_admin')

api.get('/policies/:name', [authenticated, isAdmin] , getPolicies )
api.get('/policy/:id', [authenticated, isAdmin] , getPolicy )

module.exports = api