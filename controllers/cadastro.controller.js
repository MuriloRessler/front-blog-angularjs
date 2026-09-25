// controllers/cadastro.controller.js
angular.module('blog').controller('CadastroController', function ($scope, $location, AuthService) {
  $scope.cadastrar = function () {
    AuthService.cadastrar($scope.email, $scope.senha, $scope.nome).then(function (res) {
      if (res.error) { $scope.erro = res.error.message; return }
      $scope.sucesso = 'Cadastro feito! Verifique seu e-mail para confirmar.'
    })
  }
})