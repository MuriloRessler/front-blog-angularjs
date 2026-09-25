// controllers/redefinir-senha.controller.js
angular.module('blog').controller('RedefinirSenhaController', function ($scope, $location, AuthService) {
  $scope.salvar = function () {
    AuthService.redefinirSenha($scope.novaSenha).then(function (res) {
      if (res.error) { $scope.erro = res.error.message; return }
      $location.path('/login')
    })
  }
})