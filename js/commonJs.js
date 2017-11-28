$(document).ready(function () {

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
        $(this).clone().prependTo('.clone-this')
    })
});