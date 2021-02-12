const loadRestaurants = () => {
    $.ajax({
      method: "GET",
      url: `/restaurants/${userId}`
    })
    .then((result) => {
      renderFoodList(result.restaurants);

      //counter
      const resCount = $('.foods-items table.item').length;
      $('.eating').click(() => {
        if (!resCount) {
          $('.foods-counter').effect( "shake", {times: 3, distance: 10} , 300);
        }
      });

      if (resCount === 1) {
        $('.foods-counter').text(resCount + " RESTAURANT");
      } else {
        $('.foods-counter').text(resCount + " RESTAURANTS");
      }

    })
    .catch((err) => {
      console.log("AJAX ERROR CAUGHT RENDER MOVIES", err);
    });
};

const renderFoodList = (items) => {
  for (item of items) {
    generateFoodElement(item);
  }
};

const generateFoodElement = (obj) => {
  const name = obj.name;
  const rawDate = obj.date_added;
  const date = new Date(rawDate).toISOString();
  const dateAdded = dayjs(date).fromNow();
  const foodId = obj.id;

  const $markup = `
  <table class="item" data-type="restaurants" data-itemId="${foodId}">
  <div>
      <tr class>
          <td class="title-td">
            <b>${name}</b>
            <div class="date-td">Added: ${dateAdded}</div>
          </td>
          <td class="button-td"><button class="edit"><i class="uil uil-pen"></i></i></button></td>
          <td class="button-td"><button class="delete"><i class="uil uil-minus-circle"></i></button></td>
      </tr>
  </div>
  <table>
  `;

  const $item = $('.foods-items').prepend($markup);
  return $item;
}

$(() => {

  dayjs.extend(window.dayjs_plugin_relativeTime);

  loadRestaurants();

  });

