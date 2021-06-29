$(document).ready(function () {
    $('.demo').hide();

    $(".cir1").click(function () {
        $(".cir1").toggleClass("fa-plus-circle fa-minus-circle");
        $('.demo').toggle();
    });


    $(".cir2").click(function () {
        $(".cir2").toggleClass("fa-plus-circle fa-minus-circle");
        $('.demo1').toggle();
    });


    $(".cir3").click(function () {
        $(".cir3").toggleClass("fa-plus-circle fa-minus-circle");
        $('.demo2').toggle();
    });


    $(".cir4").click(function () {
        $(".cir4").toggleClass("fa-plus-circle fa-minus-circle");
        $('.demo3').toggle();
    });
});


// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }