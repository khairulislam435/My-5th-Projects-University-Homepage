var menuTop = $('#menuBar').position();


$(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    if(scrollPosition > menuTop.top){
        $('#menuBar').css({
            'position' : 'fixed',
            'top' : '0px',
            'width' : '100%',
            'backgroundColor' : '#122f53',
            'z-index' : '999'
        });

    }
    else {
        $('#menuBar').css({
            'position' : 'static',
            'backgroundColor' : 'transparent'
        });
    }
});





// jQuery(document).ready(function(){
//     jQuery(window).scroll(function(){
//         $("#scrolling").css({
//             'position' : 'sticky',
//             'background-color': '#122f53'
//         });
//
//         $('.main-li a').css({'color': 'white'});
//     });
// });