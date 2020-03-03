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

    // Monitora cliques no login
    $(document).on('click', '.login', Login);

    // Monitora cliques no logout
    $(document).on('click', '.logout', Logout);

}

// Altera o status do usuário
function userStatus(userData) {

    if (userData) {

        // Fazer isso quando alguém está logado
        isLoged(userData);

    } else {

        // Fazer isso quando não tem usuário logado
        notLoged();

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

    if (confirm('Tem certeza que deseja sair?')) {

        // Faz logout
        firebase.auth().signOut();

        // (opcional) Oculta o menu principal
        //hideMenu();

    }

}

function isLoged(userData) {

    // Atribuir dados ao usuário
    user = userData;

    // Limita o nome do usuário
    var displayName = user.displayName.substr(0, 12);

    // Mostra a opção de logout
    var out = `
<img src="${user.photoURL}" alt="${user.displayName}">
<span>&nbsp;${displayName}</span>        
<a href="#user" class="logout"><i class="fas fa-fw fa-sign-out-alt"></i></a>
        `;

    // Atualiza o DOM
    $('#usermenu').html(out);

    // Mostrar botão perfil no menu principal
    $('#perfil').css('display', 'block');

}

function notLoged() {

    // Mostra opção de login
    var out = `
<i class="fas fa-user-circle fa-fw"></i>
<span>&nbsp;Logue-se...</span>
<a href="#user" class="login"><i class="fas fa-fw fa-sign-in-alt"></i></a>
        `;

    // Atualiza o DOM
    $('#usermenu').html(out);

    // Ocultar botão perfil no menu principal
    $('#perfil').css('display', 'none');

    // Carrega o documento
    $.get('pages/home.html', '', function(data) {

        // Grava o documento na tag <main>
        $('#main').html(data);

        // Oculta o menu
        // hideMenu();

    });

}