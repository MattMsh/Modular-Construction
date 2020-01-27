$(".menu-burger").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("body").toggleClass("menu-open");
});