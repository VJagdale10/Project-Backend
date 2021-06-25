$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function() {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 0) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }

        if ($(window).scrollTop() > 0) {
            $('.scroll-top').show();
        } else {
            $('.scroll-top').hide();
        }

        // scroll spy 

        $('section').each(function() {

            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');
            let height = $(this).height();

            if (top > offset && top < offset + height) {
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    // smooth scrolling 

    $('a[href*="#"]').on('click', function(e) {

        $('html, body').animate({

                scrollTop: $($(this).attr('href')).offset().top,

            },
            500,
            'linear'
        );

    });

});




//contact us form
// const contactForm = document.querySelector('.contact-form');
// let fname=document.getElementById('fname');
// let email=document.getElementById('email');
// let message=document.getElementById('message');

// contactForm.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     let formData ={
//         fname: fname.value,
//         email: email.value,
//         message: message.value
//     }
//     // console.log(formData);

//     let xhr=new XMLHttpRequest();
//     xhr.open('POST','/');
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.onload = function(){
//         console.log(xhr.responseText);
//         if(xhr.responseText == 'success'){
//             alert('Email sent');
//             fname.value = '';
//             email.value = '';
//             message.value = ''
//         }
//         else{
//             alert('Something went wrong');
//         }
//     }

//     xhr.send(JSON.stringify(formData));

// })







