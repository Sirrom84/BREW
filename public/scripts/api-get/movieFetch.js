$(() => {

  const userURL = window.location.pathname;
  const userId = userURL.slice(1);

  $('.result.container').hide();

  $(".search-form").submit(() => {
    let userSearch = $("#search").val();

    if (userSearch[0] === "W" || userSearch[0] === "w") {
      $(".error").hide();
      $('.popup').show();

      $('.close').click(() => {
        $('.popup').hide();
      });

      let textEntry = userSearch.split(" ");
      const textArr = textEntry.shift();
      const search = textEntry.join(" ");
      console.log("This is my movie search:", search);

    $.get(`http://www.omdbapi.com/?apikey=21bcaad3&t=${search}`, response => {
        // console.log("HERE IS THE RESPONSE",response );

        let title = $(`<h3 class="search-title">${response.Title}</h3>`);
        let img = $( `<img class="books-img"><a href=${response.Poster}><br>
        <button class="imagebutton">Visit oMDB</button><br></a>
        <button id="imagebutton" class="btn red aligning add-button">Add</button>`);

        img.attr("src", response.Poster);
        title.appendTo("#result");
        img.appendTo("#result");

        // create new item
        $('.add-button').click((event) => {

          const data = {
            name: response.Title
          };

          // console.log("This is the img from add button", data)

          $.post(`/movies/${userId}/new`, data)
            .then(() => {
              console.log("New Items Created")
              loadMovies();
              $("#search").val(' ');
              location.reload();
            })
            .catch(err => {
              console.log(err)
            })
        })
      });

    return false; //prevent the form from auto submittin

    }
  })
});
