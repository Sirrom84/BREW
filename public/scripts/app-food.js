$(() => {

  dayjs.extend(window.dayjs_plugin_relativeTime);

  const userURL = window.location.pathname;
  const userId = userURL.slice(1);

const loadRestaurants = () => {
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
    });
}

loadRestaurants();

    // function to render items
    const renderList = (items) => {
      for (item of items) {
        generateNewElement(item);
      }
    };

    // function to create new items and push them into the list
    const generateNewElement = (obj) => {
      const name = obj.name;
      const rawDate = obj.date_added;
      const date = new Date(obj.date_added).toISOString();
      const dateAdded = dayjs(date).fromNow();
      const foodId = obj.id;

      const $markup = `
      <table class="item" data-type="restaurants" data-itemId="${foodId}">
      <div>
          <tr class="test">
              <td class="check-td"><input type="checkbox"><td>
              <td class="title-td">
                <b>${name}</b>
                <div class="date-td">Added: ${dateAdded}</div>
              </td>
              <td><button class="btn btn-outline-danger edit"></button>Edit</td>
              <td><button class="btn btn-outline-danger delete">X</button></td>
          </tr>
      </div>
      <table>
      `;

      const $item = $('.food-items').prepend($markup);
      return $item;
    }
  });

