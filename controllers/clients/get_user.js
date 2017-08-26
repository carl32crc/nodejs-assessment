'use strict'

// services
const getData = require('../../service/get_data')
const getUrl = require('../../utils/urlApi.json')

const getUser = (req, res) => {

    const param = req.params.name || req.params.id
    let clients = []
 
    getData('GET', getUrl.urlClients, true)
    .then( data => {

        clients.push(data.clients.find(d => req.params.name ? 
                                       d.name.toLowerCase() === param.toLowerCase() : 
                                       d.id === param))
        
        
        if ( clients[0] ) {

            res.status(200).send({
                data: clients,
                simulationUserLogged: req.simulationUserLogged
            })

        } else {
            res.status(404).send({ message: `This client doesn't exist.` })
        }
        
    })
    .catch( error => {  
        res.status(500).send({
            message: 'Fail request to server',
        })
    })
 
}

module.exports = getUser