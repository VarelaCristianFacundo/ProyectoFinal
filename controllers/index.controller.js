const controller = {};

controller.index = (req, res) => {
    res.status(200).json({
        message: "Inicio"
    });
};

module.exports = controller;