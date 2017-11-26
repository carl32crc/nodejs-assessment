'use strict'

// services
const getData = require('../../service/get_data')

// resources
const getUrl = require('../../resources/urlApi.json')

const getPolicies = (req, res) => {

  const param = req.params.name
  let clients = []
  let policies = []

  getData('GET', getUrl.urlClients, true)
  .then( data => {

    clients.push(data.clients.find( d => d.name.toLowerCase() === param.toLowerCase()))

  }).catch( error => {  
    res.status(500).send({
      message: 'Fail request to server clients',
      status: res.status
    })
  })

  getData('GET', getUrl.urlPolicies, true)
  .then( data => {

    policies.push(data.policies.filter(d => clients[0].id === d.clientId))

    if (policies[0].length > 0) {

      res.status(200).send({
        message: 'Success',  
        status: res.status,  
        data: policies[0],
        simulationUserLogged: req.simulationUserLogged
      })

    } else {
      res.status(404).send({ 
        message: 'This client not have policies.',
        status: res.status
      })
    }

  }).catch( error => {  
    res.status(500).send({
      message: 'Fail request to server policies',
      status: res.status
    })
  })
}

module.exports = getPolicies