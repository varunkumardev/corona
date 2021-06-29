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

$(document).ready(function () {
    $('.toggle1').click(function () {
        $('.popup1').toggle("slow");
    });
    $('.toggle2').click(function () {
        $('.popup2').toggle("slow");
    });
    $('.toggle3').click(function () {
        $('.popup3').toggle("slow");
    });
    $('.toggle4').click(function () {
        $('.popup4').toggle("slow");
    });
    $('.toggle5').click(function () {
        $('.popup5').toggle("slow");
    });
    $('.toggle6').click(function () {
        $('.popup6').toggle("slow");
    });
}); 