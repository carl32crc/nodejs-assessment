'use strict'

// services
const getData = require('../../service/get_data')
const getUrl = require('../../utils/urlApi.json')

const getPolicy = (req, res) => {

    const param = req.params.id
    let client = []
    let policy = []

    getData('GET', getUrl.urlPolicies, true)
    .then( data => {

        policy.push(data.policies.find( d => d.id === param ))

    }).then( () => {

        getData('GET', getUrl.urlClients, true)
        .then( data => {
    
            client.push(data.clients.find(d => policy[0].clientId === d.id))
    
            if ( client ) {
    
                res.status(200).send({
                    data: client,
                    simulationUserLogged: req.simulationUserLogged
                })

            } else {
                res.status(404).send({ message: 'Not have assigned a client.' })
            }
    
        })
        .catch( error => {  
            res.status(500).send({
                message: 'Fail request to server',
            })
        })

    })
    .catch( error => {  
        res.status(500).send({
            message: 'Fail request to server',
        })
    })

}

module.exports = getPolicy