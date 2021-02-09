$(() => {

  dayjs.extend(window.dayjs_plugin_relativeTime);

  //fetching BOOKS information from the db (currently for user_id: 1)

  const userURL = window.location.pathname;
  const userId = userURL[1];

  //fetching MOVIES information from the db
  $(function()  {
    $.ajax({
      method: "GET",
      url: `/restaurants/${userId}`
    })
    .then((result) => {
      renderBookList(result.restaurants);
    })
    .catch((err) => {
      console.log("AJAX ERROR CAUGHT RENDER MOVIES", err);
    })
  });


  // button to display items in a list
  $('.food-button').click(function (event) {
    if ($('.food-items').is(":visible")) {
      $('.food-items').slideUp();
    } else {
      $('.food-items').slideDown();
    }
  });

    // function to render items
    function renderBookList(items) {
      // $('.food-items').empty();
      for (item of items) {
        generateNewElement(item);
      }
    };

    // function to create new items and push them into the list
    const generateNewElement = function(obj) {
      const name = obj.name;
      const date = new Date(obj.date_added).toISOString();
      const dateAdded = dayjs(date).fromNow();
      const city = obj.city
      const $markup = `
      <table class="item">
      <tbody>
          <tr>
              <td><input type="checkbox" name="" value=""></td>
              <td class="name-td"><b>${name}</b></td>
              <td class="city">City: ${city}</td>
              <td class="date-td">Added: ${dateAdded}</td>

          </tr>
      </tbody>
      <table>
      `;

      const $item = $('.food-items').prepend($markup);
      console.log("THIS IS THE ITEM from generate new element:", $item)
      return $item;
    }

  });

