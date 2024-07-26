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




// Counter Animation
function animateCounter(elementId, duration) {
    const element = document.getElementById(elementId);
    const endValue = parseInt(element.innerText.replace(/\D/g, ''), 10); // Parse the number, removing non-digit characters
    let startValue = 0;
    const startTime = performance.now();
    const hasPlus = element.innerText.includes('+'); // Check if the original value includes a '+'

    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = Math.floor(progress * endValue);

        element.textContent = currentValue + (hasPlus ? '+' : ''); // Add '+' if originally present

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

// Usage

window.onload = () => {
    animateCounter('num1', 3000); // Animate to 100 in 2 seconds
    animateCounter('num2', 3000);
    animateCounter('num3', 3000);
    animateCounter('num4', 3000);
    animateCounter('num5', 3000);
    animateCounter('num6', 3000);
}



// Tab button Toggle

$('.tab-btn').click(function () {
    $('.tab-btn').removeClass('active'); // Remove 'active' class from all .tab-btn
    $(this).addClass('active'); // Add 'active' class to the clicked .tab-btn

    let tabClass = $(this).data('tabclass');

    $('.tab-content').addClass('d-none')
    $('.tab-img').addClass('d-none')
    $(`.${tabClass}`).removeClass('d-none');
});