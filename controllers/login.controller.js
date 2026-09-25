// controllers/login.controller.js
angular.module('blog').controller('LoginController', function ($scope, $location, AuthService) {
  $scope.entrar = function () {
    AuthService.login($scope.email, $scope.senha).then(function (res) {
      if (res.error) { $scope.erro = res.error.message; return }
      $location.path('/')
    })
  }
})