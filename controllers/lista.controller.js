angular.module('blog').controller('ListaController', function ($scope, ApiService) {
  ApiService.listarPostagens().then(function (res) {
    $scope.publicacoes = res.data
  })
})