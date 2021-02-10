$(document).ready(function(){

  $("#myform").submit(function(){
    let search = $("#books").val();
    if (search === "") {
        alert("Please enter something in the field");
      } else {
    let url = "";
    let img = "";
    let title = "";
    let author = "";

$.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "+intitle",function(response){
    console.log('HERES MY LOG FOR THE RESPONSE:', response.items)
      for(let i = 0; i < response.items.length; i++) {

      title=$('<h3 class="popup-title">' + response.items[i].volumeInfo.title + '</h3>');
      author=$('<h3 class="popup-author"> By: ' + response.items[i].volumeInfo.authors + '</h3>');
      img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="info aligning">More info</button></a><hr class="separator">');
      url= response.items[i].volumeInfo.imageLinks.thumbnail;
      img.attr('src', url);
      title.appendTo('#result');
      author.appendTo('#result');
      img.appendTo('#result');

        }
      });

     }
     return false;
  });

});
