'use strict'

// services
const getData = require('../../service/get_data')

// resources
const getUrl = require('../../resources/urlApi.json')

const getUser = (req, res) => {

  const param = req.params.name || req.params.id
  let clients = []

  getData('GET', getUrl.urlClients, true)
  .then( data => {

    clients.push(data.clients.find(d => req.params.name ? 
        d.name.toLowerCase() === param.toLowerCase() : d.id === param))
    
    if (clients[0]) {
      res.status(200).send({
        message: 'Success',
        status: res.status,  
        data: clients,
        simulationUserLogged: req.simulationUserLogged
      })
    } else {
      res.status(404).send({ 
        message: `This client doesn't exist.`,
        status: res.status
      })
    }
     
  }).catch( error => {  
    res.status(500).send({
      message: 'Fail request to server',
      status: res.status
    })
  })
 
}

module.exports = getUser