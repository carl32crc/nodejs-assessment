'use strict'

// services
const getData = require('../../service/get_data')

const getUser = (req, res) => {

    const param = req.params.name || req.params.id
    const url = 'http://www.mocky.io/v2/5808862710000087232b75ac'
    let clients = []

    getData('GET', url, true)
    .then( data => {

        clients.push(data.clients.find(d => req.params.name ? 
                                       d.name.toLowerCase() === param.toLowerCase() : 
                                       d.id === param))
        
        
        if ( clients[0] ) {

            res.status(200).send({
                data: clients,
                user: req.user
            })

        } else {
            res.status(404).send({ message: `This client doesn't exist.` })
        }
        
    })
    .catch( error => {  
        res.status(200).send({
            error: error,
        })
    })
 
}

module.exports = getUser