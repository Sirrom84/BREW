const loadRestaurants = () => {
    $.ajax({
      method: "GET",
      url: `/restaurants/${userId}`
    })
    .then((result) => {
      renderFoodList(result.restaurants);

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
};

const renderFoodList = (items) => {
  for (item of items) {
    console.log("This is the render function")
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
          <td><button class="edit"><i class="uil uil-pen"></i></i></button></td>
        <td><button class="delete"><i class="uil uil-minus-circle"></i></button></td>
      </tr>
  </div>
  <table>
  `;

  const $item = $('.food-items').prepend($markup);
  return $item;
}

$(() => {

  dayjs.extend(window.dayjs_plugin_relativeTime);

  loadRestaurants();
  console.log("This is the kasjdlskajdlk function")

  });

