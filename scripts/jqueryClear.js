function clear() {
    $('div span').replaceWith(function(){
        return $(this).text();
   });
}