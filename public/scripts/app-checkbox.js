$(() => {

//checkbox --> if you click the checkbox

// $("body").on("click", "input:checkbox", () => {
//   if ($('input:checkbox').is(':checked')) {

// });


$("input[type=checkbox]").change(function() {
  if (this.checked) {
    $(this).parent().next('.title-td').children().css('text-decoration', 'line-through');
  } else {
    $(this).parent().next('.title-td').children().css('text-decoration', 'none');
  }
});

});
