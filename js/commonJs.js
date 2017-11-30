$(document).ready(function () {

    //---------------------- index-1 -----------------------

    //-------------------------addClass--------------------
    $('.default-class').on('click', function () {
        $(this).addClass('button-full-width')
    });

    //-------------------------removeClass--------------------
    $('.remove-class').on('click', function () {
        $(this).removeClass('remove-class')
    });

    //-------------------------toggleClass--------------------
    $('.toggle-class').on('click', function () {
        $(this).toggleClass()
    });

    //-------------------------getAttr--------------------
    $('.get-attr').on('click', function () {
        let myAttr = $(this).attr('value');
        console.log(myAttr)
    });

    //-------------------------setAttr--------------------
    $('.set-attr').on('click', function () {
        $(this).attr('disabled', true)
    });

    //-------------------------alertOnClick--------------------
    $('.alert').on('click', function () {
        alert("Вызывали?")
    });

    //-------------------------triggerAlert--------------------
    $('.trigger').on('click', function () {
        $('.alert').trigger("click")
    });

    //-------------------------clone-this--------------------
    $('.clone-this').on('click', function () {
        $(this).clone().append(' cloned').insertAfter($(this))

    });
    //-------------------------closestElement--------------------
    $('.closest-element').on('click', function () {
        let myParent = $(this).closest($(this).parent());
        console.log(myParent)
    });
    //-------------------------eachBtnText--------------------
    $('.each-btn-text').on('click', function () {
        let buttonTextArray = [];
        $('button').each(function () {
            buttonTextArray.push($(this).text());
            console.log(buttonTextArray)
        })
    });

    //-------------------------findMe--------------------
    $('.find-me').on('click', function () {
        let findButton = $('body').find($(this));
        console.log(findButton)
    });

    //-------------------------fadeInText--------------------
    $('.fade-in-text').on('click', function () {
        $('.fade-in-me').fadeIn()
    });

    //-------------------------fadeOutText--------------------
    $('.fade-out-text').on('click', function () {
        $('.fade-out-me').fadeOut()
    });

    //-------------------------hideText--------------------
    $('.hide-text').on('click', function () {
        $('.hide-me').hide()
    });

    //-------------------------showText--------------------
    $('.show-text').on('click', function () {
        $('.show-me').show()
    });

    //-------------------------dataAboutMe--------------------
    $('.data-about-me').on('click', function () {
        let dataHeigth = $(this).height();
        let dataWidth = $(this).width();
        let dataposition = $(this).position();
        let dataAttr = $(this).attr('class');
        let dataParent = $(this).parent().prop('tagName');
        let dataPrev = $(this).prev().text();
        let dataNext = $(this).next().text();
        let dataText = $(this).text();

        console.log('Высота:' + dataHeigth + ',',
            'Ширина:' + dataWidth + ',',
            'Абсолютная позиция по х:' + dataposition.left + ',',
            'Абсолютная позиция по y:' + dataposition.top + ',',
            'Значение атрибута:' + dataAttr + ',',
            'Родительский элемент:' + dataParent + ',',
            'Сосед сверху:' + dataPrev + ',',
            'Сосед снизу:' + dataNext + ',',
            'Текст кнопки:' + dataText + ','
        )
    });

    /*---------------------- index-2 -----------------------*/


    //-------------------------data()--------------------
    $('.data-example').on('click', function () {
        $(this).data('tra-ta-ta', 'one');
        console.log($(this).data());

        $(this).data('123', "true");
        console.log($(this).data());
    });

    //-------------------------detach()-------------------
    $('.detach').on('click', function () {
        captionH1 = $('h1').detach();
    });

    $('.detach-paste').on('click', function () {
        captionH1.prependTo('.container')
    });

    //-------------------------eq()--------------------
    $('.eq').on('click', function () {
        $('body').find('button:eq(1)').css('color', 'red')
    });

    //-------------------------hasClass()--------------------
    $('.has-class').on('click', function () {
        if ($('button').hasClass('eq'))
            $(this).css('background', 'green');
        alert('Есть такой класс!');
    });

    //-------------------------html()--------------------
    $('.html').on('click', function () {
        console.log($(this).html())
    });

    //-------------------------index()--------------------
    $('ul li').on('click', function () {
        console.log($(this).index())
    });


    $('.off').on('click', function () {
        $('button').off();
    });

    $('.prop').on('click', function () {
        console.log($(this).prop('hidden'))
    });

    $('.remove').on('click', function () {
        $('h1').remove()
    });
});