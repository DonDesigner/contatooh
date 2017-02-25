//app/controllers/contato.js


module.exports = function (app) {

    var Contato = app.models.contato;

    var controller = {};

    controller.listaContatos = function (req, res) {
        var promise = Contato.find().exec()
        .then(
            function(contatos){
                res.json(contatos);
            },
            function(erro){
                Console.error(erro);
                res.status(505).json(erro);
            }
        );
    };

    controller.obtemContato = function (req, res) {
    };

    controller.removeContato = function (req, res) {
    };

    controller.salvarContato = function (req, res) {
    };


    return controller;
}