const middlewares = {};

// completedFields revisará si el input del form recibe todos los parámetros solicitados

middlewares.completedFields = (req, res, next) => {
    const {
        title,
        price,
        thumbnail,
        description,
        code,
        stock
    } = req.body;
    title && price && thumbnail && description && code && stock ?
        next() :
        res.status(300).send({
            message: "Debe completar todos los campos"
        });
};

middlewares.adminAuth = (permissions) => {

    return (req, res, next) => {
        permissions === true ?
            next() :
            res
            .status(401)
            .json({
                error: -1,
                description: "unauthorized permission"
            });
    };
};

module.exports = middlewares;