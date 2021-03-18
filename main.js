function showAndHideMenu() {
    $('.hamburger-menu').toggleClass('active');
}

$('.fa-bars').click(function () {
    showAndHideMenu();
})

$('.fa-times').click(function () {
    showAndHideMenu();
})
