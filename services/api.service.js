angular.module('blog').factory('ApiService', function ($http, API_URL) {
  return {
    listarPostagens: function () { return $http.get(API_URL + '/postagens') },
    buscarPostagem: function (id) { return $http.get(API_URL + '/postagem/' + id) },
    editarPostagem: function (id, dados) { return $http.put(API_URL + '/postagem/' + id, dados) },
    listarComentarios: function (postId) { return $http.get(API_URL + '/postagem/' + postId + '/comentarios') },
    criarComentario: function (postId, texto) { return $http.post(API_URL + '/postagem/' + postId + '/comentarios', { texto: texto }) },
    excluirComentario: function (id) { return $http.delete(API_URL + '/comentarios/' + id) }
  }
})