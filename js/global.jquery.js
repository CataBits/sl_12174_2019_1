/*********************************************/
/* JavaScript principal do App usando jQuery */
/*********************************************/

// Executa o programa principal quando o documento for carregado
$(document).ready(myApp);

// Programa principal: resolve os eventos
function myApp() {

    // Detectar cliques no botão do menu
    $(document).on('click', '#btnMenu', toggleMenu);

    // Detectar cliques no fundo do menu
    $(document).on('click', '#modalMenu', hideMenu);

}

// Controle do menu
function toggleMenu(e) {

    e.preventDefault(); // Evita a ação normal do link no HTML

    if ($('#nav').is(':visible')) // Se o menu está visível:
        hideMenu(); // Oculta o menu;
    else // Se o menu está oculto:
        showMenu(); // Mostra o menu;

}

// Oculta o menu
function hideMenu() {

    $('#nav').hide('fast'); // Oculta o menu
    $('#modalMenu').hide('fast'); // Oculta o fundo do menu
    $('#btnMenu i').removeClass('fa-rotate-270'); // Troca o ícone do menu

}

// Mostra o menu
function showMenu() {

    $('#btnMenu i').addClass('fa-rotate-270'); // Troca o ícone do menu
    $('#modalMenu').show('fast'); // Mostra o fundo do menu
    $('#nav').show('fast'); // Mostra o menu

}

// Atalho para "console.log()"
function _(txtLog) {

    console.log(txtLog);

}