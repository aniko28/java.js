/**
 * Created by Ani on 2017.02.21..
 */
$(document).ready(function () {
    // Az események neveit egybe kell irni (a hosszú i nem működik :D )
    $('#kep1').on('mouseover', function () {
        $('#kep1').css('display', 'none');
        $('#kep2').css('display', 'inline');
    })/* Itt van egy hiba! Lemeradt a zárójel */;


    $('#kep2').on('mouseout', function () {
        $('#kep1').css('display', 'inline');
        $('#kep2').css('display', 'none');
    });

    $('button').on('mouseover', function () {
        $('button').css('background', 'gray');
    });

    $('button').on('mouseout', function () {
        $('button').css('background', ''); // Tipp: Itt és az előzőnél használható a $(this) is, de kivételesen most ez is jó.

    });
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // Ez eddig jó! :)

    $('button').on('onClick', function () {
        $('body').append().on('click', function () {
            while (window.writable ('<p></p>'));
        })

          });
    });