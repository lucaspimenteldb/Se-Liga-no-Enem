$(document).ready(function(){
    // Rotação da imagem no se liga no enem para ex-alunos
    $(function() {
        var yangulo = 0;
        var lastScrollTop = 0;
        $(window).scroll(function() {
            var st = $(this).scrollTop();
            yangulo = ( st > lastScrollTop ) ? yangulo + 0.2 : yangulo - 0.3;
            var yrotate = "rotate(" + yangulo + "deg)";
            $(".rotacionar1").css({transform : yrotate});
            lastScrollTop = st;
        });
    });

    // Mudando a cor da navbar quando der scroll
    $(function () {
        $(document).scroll(function () {
            var $nav = $("#mudar-cor-navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    // Ponteiros das perguntas e respostas
    $('.collapse-img-btn').on({
     'click': function(){
         $('.ponteiro-pr-0').attr('src','images/icones/ponteiro-pr-ativo.png');
        }
    });
    $('.collapse-img-btn1').on({
     'click': function(){
         $('.ponteiro-pr-1').attr('src','images/icones/ponteiro-pr-ativo.png');
        }
    });
    $('.collapse-img-btn2').on({
     'click': function(){
         $('.ponteiro-pr-2').attr('src','images/icones/ponteiro-pr-ativo.png');
        }
    });
    $('.collapse-img-btn3').on({
     'click': function(){
         $('.ponteiro-pr-3').attr('src','images/icones/ponteiro-pr-ativo.png');
        }
    });
    $('.collapse-img-btn4').on({
     'click': function(){
         $('.ponteiro-pr-4').attr('src','images/icones/ponteiro-pr-ativo.png');
        }
    });
    $('.collapse-img-btn5').on({
     'click': function(){
         $('.ponteiro-pr-5').attr('src','images/icones/ponteiro-pr-ativo.png');
        }
    });

    $("#ir-top").click(function() {
        $("html, body").animate({ scrollTop: $("#top-ancor").offset().top }, 1000);
    });

    // Fazendo a imagem desaparecer no depoimento
    $(window).on("load resize", function() {
        $('.foto-depoimento').toggleClass('hide', $(window).width() < 1240);
    });

    // Fazer a navbar mudar de cor com a viewport menor que 768
    $(window).on("load resize", function() {
        $('.cor-navbar').toggleClass('cor-viewport', $(window).width() < 768);
    });

    // Tirar o hover com viewport menor que 768
    $(window).on("load resize", function() {
        $('.hover-normal').removeClass('hover-verde', $(window).width() < 768);
    });
    $(window).on("load resize", function() {
        $('.hover-normal').addClass('hover-verde', $(window).width() > 768);
    });
    $(window).on("load resize", function() {
        $('.hover-normal').addClass('hover-grey', $(window).width() < 768);
    });
    $(window).on("load resize", function() {
        $('.hover-normal').removeClass('hover-grey', $(window).width() > 768);
    });
});
