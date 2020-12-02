function getWindowHeight() {
    var myWidth = 0, myHeight = 0;
    if( typeof( window.innerWidth ) == 'number' ) {
        myHeight = window.innerHeight;}
    else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
    {
        myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        myHeight = document.body.clientHeight;
    }
    return myHeight
}
function appearBox(element, element_top, bottom_of_window) { // появление элемента
    const buffer = element.outerHeight() / 2;
    if( bottom_of_window > element_top + buffer) {  /* Если объект в зоне видимости, появляется  */
        setTimeout(function(){
            element.removeClass('trigger').animate({'opacity':'1'}, element.data('speed'))
        }, element.data('delay'));
    }
}
(function($) {
    $(window).load(function() {
        $('.load-box').each( function(i){
            var element_offset = $(this).offset(),
                element_top = element_offset.top;
            let bottom_of_window = $(window).scrollTop() + getWindowHeight();
            appearBox($(this), element_top, bottom_of_window);
        });
        $(window).scroll( function() {   /* Когда происходит скроллинг ... */
            $('.load-box').each( function(i){  /* проверка позиции каждого элемента при скролинге */
                var element_offset = $(this).offset(),
                    element_top = element_offset.top;
                let bottom_of_window = $(window).scrollTop() + getWindowHeight();
                appearBox($(this), element_top, bottom_of_window);
            });
        });
    });
})(jQuery);

