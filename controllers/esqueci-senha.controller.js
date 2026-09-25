// controllers/esqueci-senha.controller.js
angular.module('blog').controller('EsqueciSenhaController', function ($scope, AuthService) {
  $scope.enviar = function () {
    AuthService.esqueciSenha($scope.email).then(function () {
      $scope.enviado = true
    })
  }
})