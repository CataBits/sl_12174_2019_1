// Instância do Firebase Auth do Google
var provider = new firebase.auth.GoogleAuthProvider();

// Usa o idioma padrão do navegador
firebase.auth().useDeviceLanguage();

// Monitora se usuário está logado ou não
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        _(user);

    } else {

        _('Ninguém logado...');

    }
});

// Faz login no provedor de autenticação
function login() {

    firebase.auth().signInWithPopup(provider)
        // Se o login deu certo:
        .then(function (result) {

            // Obtém dados do usuário que se logou
            var user = result.user;

            _(user);

        })

        // Se o login deu errado
        .catch(function (error) {

            _(error);

        });

}

// Faz logout di usuário
function logout() {

    firebase.auth().signOut()
        // Se o logout deu certo:
        .then(function () {

            _('Usuário saiu!');

        })

        // Se o logout deu errado:
        .catch(function (error) {
            _('Usuário não conseguiu sair!');
        });

}