'use strict'

const isAdmin = (req, res, next) => {
    
    if (req.user.role !== 'admin') {
        return res.status(200).send({message: 'No tienes acceso'})
    }
    
    next()
}

module.exports = isAdmin