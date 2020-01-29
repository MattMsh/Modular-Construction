jQuery(document).ready(function($){
  // Burger menu
  $(".menu-burger").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("body").toggleClass("menu-open");
  });

  // Input styles
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

  $(".tell-us-input").focus(function() {
    $(this).parent().addClass("focus");
  });

  $(".tell-us-input").blur(function() {
    if($(this).val() != "") {
      $(this).parent().addClass("focus");
    }
    else {
      $(this).parent().removeClass("focus");
    }
  });  

  $(".clear-input-wrap").on("click", function(e) {
    e.preventDefault();
    $("input.search-input").val("");
    $("input.search-input").blur();
  });

  // Filter
  $(".filter").on("click", function() {
    $(this).toggleClass("open");
    $(".filter ul").slideToggle();
  });

  $(document).on("click", '.filter .filter-item', function() {
    $(".filter-item-active-text").text($(this).text());
  });

  $(".filter-item").on("click", function() {
    $(".filter-item").removeClass("active");
    $(this).addClass("active");
  });

  $(".projects-filter-item").on("click", function() {
    $(".projects-filter-item").removeClass("active");
    $(this).addClass("active");
  });

  // Slick
  
  $('.other-project-slider').slick();
});



