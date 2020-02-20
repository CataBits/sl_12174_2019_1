/* Roteamento de links */

// Carrega a página "home.html" na inicialização
load('pages/home.html');

// Referência a todos os <a>...</a> do documento
var links = document.getElementsByTagName('a');

// Obtendo cada <a>...</a> da coleção
for ( var i = 0; i < links.length; i++ ) {

    // Cria o monitor deste link
    links[i].addEventListener('click', routing, false);

}

// Função que prepara o link
function routing(ev) {

    // Bloqueia a ação normal do HTML
    ev.preventDefault();

    // Obtendo o "href"
    var href = this.getAttribute('href');

    // Verifica se clicou no botão do menu (#menu)
    if ( href == '#menu') return false;

    // Verifica se o link.href começa com '#'
    if ( href.substr(0, 1) == '#') {

        // Carrega a página correspondente
        var pg = href.substr(1);
        load('pages/' + pg + '.html');
        hideMenu();

    // Se o link.href não começa com '#'
    } else {

        // Executar o link em nova aba-janela
        window.open(href);

    }

}

// Carrega a página por AJAX na <main>...</main>
function load(page = 'pages/home.html') {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            $('main').innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
}