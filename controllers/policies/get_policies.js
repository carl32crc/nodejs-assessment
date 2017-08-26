'use strict'

// services
const getData = require('../../service/get_data')

const getPolicies = (req, res) => {

    const param = req.params.name
    const urlPolicies = 'http://www.mocky.io/v2/580891a4100000e8242b75c5'
    const urlClients = 'http://www.mocky.io/v2/5808862710000087232b75ac'
    let clients = []
    let policies = []
    

    getData('GET', urlClients, true)
    .then( data => {

        clients.push(data.clients.find( d => d.name.toLowerCase() === param.toLowerCase()))

    })
    .catch( error => {  
        res.status(500).send({
            message: 'Fail request to server',
        })
    })

    getData('GET', urlPolicies, true)
    .then( data => {

        policies.push(data.policies.filter(d => clients[0].id === d.clientId))

        if ( policies[0].length > 0 ) {

            res.status(200).send({
                data: policies[0],
                user: req.user
            })

        } else {
            res.status(404).send({ message: 'This client not have policies.' })
        }

    })
    .catch( error => {  
        res.status(500).send({
            message: 'Fail request to server',
        })
    })
 
}

module.exports = getPolicies