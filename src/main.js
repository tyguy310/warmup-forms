$(document).ready(function()  {
  console.log('test');
  $('#signup-form').on('submit', function(event)  {
    event.preventDefault();
    console.log('working?');
    var formFFields = $(this).serializeArray();
    console.log(formFFields);
  });
});
