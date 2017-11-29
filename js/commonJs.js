$(document).ready(function () {

    //---------------------- index-1 -----------------------

    $('.default-class').on('click', function () {
        $(this).addClass('button-full-width')
    });

    $('.remove-class').on('click', function () {
        $(this).removeClass('remove-class')
    });

    $('.toggle-class').on('click', function () {
        $(this).toggleClass()
    });

    $('.get-attr').on('click', function () {
        let myAttr = $(this).attr('value');
        console.log(myAttr)
    });

    $('.set-attr').on('click', function () {
        $(this).attr('disabled', true)
    });

    $('.alert').on('click', function () {
        alert("Вызывали?")
    });

    $('.trigger').on('click', function () {
        $('.alert').trigger("click")
    });

    $('.clone-this').on('click',function () {
        $(this).clone().append(' cloned').insertAfter($(this))

    });

    $('.closest-element').on('click', function () {
        let myParent = $(this).closest($(this).parent());
        console.log(myParent)
    });

    $('.each-btn-text').on('click', function () {
        let buttonTextArray = [];
        $('button').each( function () {
            buttonTextArray.push($(this).text());
            console.log(buttonTextArray)
        })
    });

    $('.find-me').on('click', function () {
        let findButton = $('body').find($(this));
        console.log(findButton)
    });

    $('.fade-in-text').on('click', function () {
        $('.fade-in-me').fadeIn()
    });

    $('.fade-out-text').on('click', function () {
        $('.fade-out-me').fadeOut()
    });

    $('.hide-text').on('click', function () {
        $('.hide-me').hide()
    });

    $('.show-text').on('click', function () {
       $('.show-me').show()
    });

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


    $('.data-example').on('click', function () {
        $(this).data('tra-ta-ta', 'one');
        console.log($(this).data());

        $(this).data('123', "true");
        console.log($(this).data());


    });




});