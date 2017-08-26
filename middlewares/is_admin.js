'use strict'

const isAdmin = (req, res, next) => {
    
    if (req.user.role !== 'admin') {
        return res.status(200).send({message: 'Only admins can access in this section.'})
    }
    
    next()
}

module.exports = isAdmin