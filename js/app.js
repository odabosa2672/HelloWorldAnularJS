var app = angular.module('HelloWorldApp',[]);

app.controller('mainCtrl',function($scope){
    $scope.entradaTexto = 'oda';
    $scope.usuario = '';

    $scope.exibirConteudo = function(texto){
        alert(texto);
    }

    $scope.exibeNomeSobrenome = function(nome,sobrenome){
        alert(nome + ' ' + sobrenome);
    }
});