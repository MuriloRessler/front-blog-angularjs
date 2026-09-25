angular.module('blog').controller('HeaderController', function ($scope, $location, AuthService) {
  $scope.logado = AuthService.estaLogado()
  $scope.usuario = AuthService.getUsuario()

  $scope.sair = function () {
    AuthService.logout().then(function () {
      $scope.logado = false
      $location.path('/')
    })
  }
})