/*******************************/
/* JavaScript principal do App */
/*******************************/

var btnMenu = $('btnMenu');         // Referência do botão do menu
var nav = $('nav');                 // Referência do menu principal
var modalMenu = $('modalMenu');     // Referência do fundo do menu

hideMenu();     // Ajustes iniciais

btnMenu.addEventListener('click', toggleMenu, false);   // Quando clicar no botão do menu

modalMenu.addEventListener('click', hideMenu, false);   // Quando clicar no fundo do menu

// Função que controla o menu
function toggleMenu(event) {

    event.preventDefault();     // Evita a ação normal do link no HTML

    // Faz o "toggle" (liga-desliga) do menu
    if ( navOn )        // Se o menu está ativo:
        hideMenu();     // Oculta o menu.
    else                // Senão:
        showMenu();     // Mostra o menu.

}

// Função que mostra o menu
function showMenu() {

    btnMenu.getElementsByTagName('i')[0].classList.add('fa-rotate-90'); // Gira o ícone do menu
    modalMenu.classList.add('animOpen'); // mostra o fundo do menu
    nav.classList.add('animOpen'); // mostra o menu    
    navOn = true; // Menu estpa aberto

}

// Função que oculta o menu
function hideMenu() {

    btnMenu.getElementsByTagName('i')[0].classList.remove('fa-rotate-90'); // "Desgira" o ícone do menu
    nav.classList.remove('animOpen'); // Oculta o menu
    modalMenu.classList.remove('animOpen'); // Oculta o fundo do menu
    navOn = false; // Menu está fechado
    
}

// Função que serve de atalho para "document.getElementById"
function $(objId) {
    return document.getElementById(objId);
}

// Função que serve de atalho para "console.log()"
function _(txtLog) {
    console.log(txtLog);
}