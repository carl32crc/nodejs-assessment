'user strict'

const express = require('express')
const clientsController = require('../controllers/clients')

const api = express.Router()
const mdAuth = require('../middlewares/authenticated')

api.get('/user/:id',mdAuth.ensureAuth , clientsController.getUser )

module.exports = api