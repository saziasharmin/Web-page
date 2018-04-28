$(document).ready(function(){
 $('.bxslider').bxSlider({
  mode: 'horizontal',
  auto:true
});
    $('.menu-togglr').on('click',function(){
        $('#mainav').slideDown('slow');
        $(this).toggleClass('active');
    });
});