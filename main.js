function showMenu() {
    $('.hamburger-menu').addClass('active');
}

function hideMenu() {
    $('.hamburger-menu').removeClass('active');
}

$('.fa-bars').click(function () {
    showMenu();
})

$('.fa-times').click(function () {
    hideMenu();
})
