/*******************************/
/* JavaScript principal do App */
/*******************************/

// Referência dos elementos

// Botão do menu
var btnMenu = document.getElementById('btnMenu');

// Menu principal
var nav = document.getElementById('nav');

// Fundo do menu
var modalMenu = document.getElementById('modalMenu');

// Ajustes iniciais
hideMenu();

// Quando clicar no botão do menu
btnMenu.addEventListener('click', toggleMenu, false);

// Quando clicar no fundo do menu
modalMenu.addEventListener('click', hideMenu, false);

// Função que controla o menu
function toggleMenu(event) {

    // Evita a ação normal do link no HTML
    event.preventDefault();

    // Faz o "toggle" (liga-desliga)
    if ( nav.style.display == 'none' )  // Se o menu está oculto:
        showMenu();                     // Mostra o menu
    else                                // Senão:
        hideMenu();                     // Oculta o menu

}

// Função que mostra o menu
function showMenu() {

    modalMenu.style.display = 'block';  // mostra o menu
    nav.style.display = 'block';        // mostra o fundo do menu

    // Gira o ícone do menu
    btnMenu.getElementsByTagName('i')[0].classList.add('fa-rotate-270');

}

// Função que oculta o menu
function hideMenu() {

    modalMenu.style.display = 'none';   // Oculta o menu
    nav.style.display = 'none';         // Oculta o funfo do menu
    
    // "Desgira" o ícone do menu
    btnMenu.getElementsByTagName('i')[0].classList.remove('fa-rotate-270');
    
}

// <i class="fas fa-fw fa-bars"></i> --> hideMenu
// <i class="fas fa-fw fa-times"></i> --> showMenu