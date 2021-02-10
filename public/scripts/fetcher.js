
//This is going to be where the user enters their TODO:
$(document).ready(function(){

  $("#myform").submit(function(){
    let search = $("#books").val();
    if (search === "") {
        alert("Please enter something in the field");
      } else if (search === "SOME_TYPE_OF_KEYWORD_OBJECT") {

        let url = "";
        let img = "";
        let title = "";
        let author = "";
  //This is the googleBooks API search is the user input into the form (see above) this will grab a list of books that match the search. User will have the option to select the correct choice.
    $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){
        console.log('HERES MY LOG FOR THE RESPONSE:', response.items)
          for(let i = 0; i < response.items.length; i++) {

          title=$('<h5 class="center-align white-text">' + response.items[i].volumeInfo.title + '</h5>');
          author=$('<h5 class="center-align white-text"> By:' + response.items[i].volumeInfo.authors + '</h5>');
          img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn red aligning">Read More</button></a>');
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
