function toggleSidebar(position) {
    const sidebarBg = $('.sidebar_bg');
    sidebarBg.removeClass('left right top bottom show'); // Remove all direction classes
    sidebarBg.addClass(position); // Add the desired position class
    sidebarBg.toggleClass('show'); // Toggle the show class

    const sidebar = $('.left-sidebar');
    sidebar.removeClass('left-side show')
    sidebar.addClass(`${position}-side`);
    sidebar.toggleClass('show')
}


function toggleRightSidebar(position) {
    const sidebarBg = $('.sidebar_bg');
    sidebarBg.removeClass('left right top bottom show'); // Remove all direction classes
    sidebarBg.addClass(position); // Add the desired position class
    sidebarBg.toggleClass('show'); // Toggle the show class

    const sidebar = $('.right-sidebar');
    sidebar.removeClass('right-side show')
    sidebar.addClass(`${position}-side`);
    sidebar.toggleClass('show')

}

// For left position
$('.right-bar-btn-left').click(() => {
    toggleSidebar('left');
});


// // For right position
$('.right-bar-btn-right').click(() => {
    toggleRightSidebar('right');
});



$('.close-sidebar').click(function () {
    $(".sidebar_bg").removeClass('show');
    $('.left-sidebar').removeClass('show')
    $('.right-sidebar').removeClass('show')

});

$('.close-rightbar').click(function () {
    $(".sidebar_bg").removeClass('show');
    $('.left-sidebar').removeClass('show')
    $('.right-sidebar').removeClass('show')
});

