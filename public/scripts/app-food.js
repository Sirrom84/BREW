$(() => {

  dayjs.extend(window.dayjs_plugin_relativeTime);

  const userURL = window.location.pathname;
  const userId = userURL.slice(1);

  $(function()  {
    $.ajax({
      method: "GET",
      url: `/restaurants/${userId}`
    })
    .then((result) => {
      renderList(result.restaurants);

      //counter
      const resCount = $('.food-items table.item').length;
      $('.eating').click(() => {
        if (!resCount) {
          $('.food-counter').effect( "shake", {times: 3, distance: 10} , 300);
        }
      });

      if (resCount === 1) {
        $('.food-counter').text(resCount + " RESTAURANT");
      } else {
        $('.food-counter').text(resCount + " RESTAURANTS");
      }

    })
    .catch((err) => {
      console.log("AJAX ERROR CAUGHT RENDER MOVIES", err);
    })
  });


  // button to display items in a list
  $('.food-button').click(() => {
    if ($('.food-items').is(":visible")) {
      $('.food-items').slideUp();
    } else {
      $('.food-items').slideDown();
    }
  });

    // function to render items
    const renderList = (items) => {
      // $('.food-items').empty();
      for (item of items) {
        generateNewElement(item);
      }
    };

    // function to create new items and push them into the list
    const generateNewElement = (obj) => {
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

