angular.module('blog').controller('EditarController', function ($scope, $routeParams, $location, ApiService) {
  const postId = $routeParams.id
  ApiService.buscarPostagem(postId).then(function (res) { $scope.postagem = res.data })

  $scope.salvar = function () {
    ApiService.editarPostagem(postId, $scope.postagem).then(function () {
      $location.path('/post/' + postId)
    })
  }
})