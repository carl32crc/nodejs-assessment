'use strict'

exports.ensureAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({
            message: 'La peticion no tiene la cabecera de autenticacion'
        })
    } else {

        /* Simulation user athenticated with Role 'admin', 
        can change role to 'user' for view works other routes */

        req.user = {
            name: 'Carl',
            email: 'carl.45.cr@gmail.com',
            role: 'admin'
        }

        next()
    }

}