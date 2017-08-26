'use strict'

const ensureAuth = (req, res, next) => {
    
    if (!req.headers.authorization) {

        return res.status(403).send({
            message: 'The request does not have the authentication header'
        })
        
    } else {

        /* Simulation user athenticated with Role 'admin', 
        can change role 'admin' to 'user' */

        req.user = {
            name: 'Carl',
            email: 'carl.45.cr@gmail.com',
            role: 'admin'
        }

        next()
    }

}

module.exports = ensureAuth