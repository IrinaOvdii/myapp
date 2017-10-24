$( document ).ready(function() {
  console.log( "ready!" );
  $('.moreinfo').hide();
    $('.more').click(function (ev) {
       var t = ev.target
       $('#info' + $(this).attr('target')).toggle(1000, function(){
          console.log(ev.target)
          $(t).html($(this).is(':visible')? '    - Toon minder -' : '    - Lees meer -')
       });
       return false;
    });
});
