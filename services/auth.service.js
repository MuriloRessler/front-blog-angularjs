angular.module('blog').factory('AuthService', function (SUPABASE_URL, SUPABASE_KEY) {
  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

  return {
    cadastrar: function (email, senha, nome) {
      return supabase.auth.signUp({
        email, password: senha,
        options: { data: { nome } }
      })
    },
    login: function (email, senha) {
      return supabase.auth.signInWithPassword({ email, password: senha })
        .then(function (res) {
          if (res.data.session) {
            localStorage.setItem('token', res.data.session.access_token)
            localStorage.setItem('usuario', JSON.stringify(res.data.user))
          }
          return res
        })
    },
    logout: function () {
      localStorage.removeItem('token')
      localStorage.removeItem('usuario')
      return supabase.auth.signOut()
    },
    esqueciSenha: function (email) {
      return supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/index.html#!/redefinir-senha'
      })
    },
    redefinirSenha: function (novaSenha) {
      return supabase.auth.updateUser({ password: novaSenha })
    },
    getToken: function () { return localStorage.getItem('token') },
    getUsuario: function () { return JSON.parse(localStorage.getItem('usuario') || 'null') },
    estaLogado: function () { return !!localStorage.getItem('token') }
  }
})