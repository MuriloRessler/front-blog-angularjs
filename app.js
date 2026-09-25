angular.module('blog', ['ngRoute'])
  .constant('API_URL', 'http://localhost:8080')
  .constant('SUPABASE_URL', 'https://SEU-PROJETO.supabase.co')
  .constant('SUPABASE_KEY', 'sua-chave-anon')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/lista.html', controller: 'ListaController' })
      .when('/post/:id', { templateUrl: 'views/detalhe.html', controller: 'DetalheController' })
      .when('/post/:id/editar', { templateUrl: 'views/editar.html', controller: 'EditarController' })
      .when('/login', { templateUrl: 'views/login.html', controller: 'LoginController' })
      .when('/cadastro', { templateUrl: 'views/cadastro.html', controller: 'CadastroController' })
      .when('/esqueci-senha', { templateUrl: 'views/esqueci-senha.html', controller: 'EsqueciSenhaController' })
      .when('/redefinir-senha', { templateUrl: 'views/redefinir-senha.html', controller: 'RedefinirSenhaController' })
      .otherwise({ redirectTo: '/' });
  })
  // anexa o token do usuário logado em toda chamada para a API
  .factory('authInterceptor', function (AuthService) {
    return {
      request: function (config) {
        const token = AuthService.getToken()
        if (token) config.headers.Authorization = 'Bearer ' + token
        return config
      }
    }
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor')
  })