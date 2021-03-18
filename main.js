function showAndHideMenu() {
    $('.hamburger-menu').toggleClass('active');
}

$('.fa-times, .fa-bars').click(function () {
    showAndHideMenu();
})
