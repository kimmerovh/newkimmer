$('.triggers span').hover(function() {
    explode($(this).parents('.logo').attr('id'), $(this).data('letter'));

},function(){
    
     implode($(this).parents('.logo').attr('id'), $(this).data('letter'));
    
});
