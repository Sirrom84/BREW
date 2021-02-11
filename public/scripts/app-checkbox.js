$(() => {

//checkbox --> if you click the checkbox

$("input[type=checkbox]").change(function() {
  if (this.checked) {
    $(this).parent().next('.title-td').children().css('text-decoration', 'line-through');
  } else {
    $(this).parent().next('.title-td').children().css('text-decoration', 'none');
  }
});

});
