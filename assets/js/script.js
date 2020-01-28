$(".menu-burger").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("body").toggleClass("menu-open");
});

$("input.search-input").focus(function() {
    $(".clear-input-wrap").addClass("focus");
});
   

$("input.search-input").blur(function() {
    if($(this).val() != ""){
        $("label[for='dynamic-label-input']").addClass("focus");
    }
    else {
        $("label[for='dynamic-label-input']").removeClass("focus");
        $(".clear-input-wrap").removeClass("focus");
    }
    
});

$(".clear-input-wrap").on("click", function(e) {
    e.preventDefault();
    $("input.search-input").val("");
    $("input.search-input").blur();
});