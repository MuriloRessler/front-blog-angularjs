angular.module('blog').controller('DetalheController', function ($scope, $routeParams, ApiService, AuthService) {
  const postId = $routeParams.id
  $scope.logado = AuthService.estaLogado()
  $scope.usuario = AuthService.getUsuario()

  ApiService.buscarPostagem(postId).then(function (res) { $scope.postagem = res.data })
  carregarComentarios()

  function carregarComentarios() {
    ApiService.listarComentarios(postId).then(function (res) { $scope.comentarios = res.data })
  }

  $scope.enviarComentario = function () {
    if (!$scope.novoComentario) return
    ApiService.criarComentario(postId, $scope.novoComentario).then(function () {
      $scope.novoComentario = ''
      carregarComentarios()
    })
  }

  $scope.excluirComentario = function (id) {
    ApiService.excluirComentario(id).then(carregarComentarios)
  }
})