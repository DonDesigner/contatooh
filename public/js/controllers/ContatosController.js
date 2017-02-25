angular.module('contatooh').controller('ContatosController', function ($scope, Contato) {

    $scope.contatos = [];

    $scope.filtro = '';

    $scope.mensagem = {texto: ''};

    function buscarContatos() {
        Contato.query(
            function (contatos) {
                $scope.contatos = contatos;
            },
            function (erro) {
                console.log("Não foi possivel obter lista de contatos");
                console.log(erro);
            }
        )
    };

    buscarContatos();

    $scope.remove = function (contato) {
        Contato.delete({ id: contato._id },
            buscarContatos,
            function (erro) {
                console.log("Não foi possível remover o contato");
                console.log(erro);
            });

    };



});