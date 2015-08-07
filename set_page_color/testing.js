$(document).ready(function() {
 $('highlight').click(function(){
   $("this").focus().select();
 }
);
 alert("WORKING!");
});


$('div').hover(
   function(){
     $(this).addClass('highlight');
  },
  function(){
     $(this).removeClass('highlight');
  }
);