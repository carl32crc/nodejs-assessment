'use strict'

// services
const getData = require('../../service/get_data')

const getPolicy = (req, res) => {

    const param = req.params.id
    const urlPolicies = 'http://www.mocky.io/v2/580891a4100000e8242b75c5'
    const urlClients = 'http://www.mocky.io/v2/5808862710000087232b75ac'
    let client = []
    let policy = []
    

    getData('GET', urlPolicies, true)
    .then( data => {

        policy.push(data.policies.find( d => d.id === param ))

    }).then( () => {

        getData('GET', urlClients, true)
        .then( data => {
    
            client.push(data.clients.find(d => policy[0].clientId === d.id))
    
            if ( client ) {
    
                res.status(200).send({
                    data: client,
                    user: req.user
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