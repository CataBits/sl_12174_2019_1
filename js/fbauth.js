// Cria uma instância do objeto provedor do Google
var provider = new firebase.auth.GoogleAuthProvider();

// Usa o idioma do navegador no Firebase
firebase.auth().useDeviceLanguage();

// Variável global com os dados do usuário
var user = {};

// Roda a aplicação ao carregar o documento
$(document).ready(authApp);

// Aplcação principal --> Observar eventos
function authApp() {

    // Observador de usuários
    firebase.auth().onAuthStateChanged(userStatus);

}

// Altera o status do usuário
function userStatus(userData) {

    if (userData) {

        // Fazer isso quando alguém está logado

        // Atribuir dados ao usuário
        user = userData;

        _(user);

    } else {

        // Fazer isso quando não tem usuário logado

        // Mostra opção de login
        var out = `
<i class="fas fa-user-circle fa-fw"></i>
<span>&nbsp;Logue-se...</span>
<a href="#user" class="login"><i class="fas fa-fw fa-sign-in-alt"></i></a>
        `;

        // Atualiza o DOM
        $('#usermenu').html(out);

    }
}

// Faz login do usuário
function Login() {

    // Login usando pop-up
    firebase.auth().signInWithPopup(provider);

    // (opcional) Oculta o menu principal
    //hideMenu();

}

// Faz logout do usuário
function Logout() {

    // Faz logout
    firebase.auth().signOut();

    // (opcional) Oculta o menu principal
    //hideMenu();

}