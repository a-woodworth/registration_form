//Add to show message for missing required input if using Safari
$('form').submit(function(e){

  var checkField = $(this).find('[required]');


  $(checkField).each(function(){
    if ( $(this).val() == '' )
    {
      alert('Required field should not be blank.');

      $(this).focus();

      e.preventDefault();
      return false;
    }
  }); return true;
});

