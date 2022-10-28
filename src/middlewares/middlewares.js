const isAuthorized = (req, res, next) => {
    const role = req.header('Role')
    if(role === 'admin') {
        next()
    }
    else res.status(403).send('No tiene permisos para realizar esta acción.')
}

module.exports = isAuthorized;