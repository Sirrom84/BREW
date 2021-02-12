const loadProducts = () => {
  $.ajax({
    method: "GET",
    url: `/products/${userId}`,
  })
    .then((result) => {
      renderProductList(result.products);

      //counter
      const itemCount = $(".products-items table.item").length;
      $(".buying").click(() => {
        if (!itemCount) {
          $(".products-counter").effect(
            "shake",
            { times: 3, distance: 10 },
            300
          );
        }
      });

      if (itemCount === 1) {
        $(".products-counter").text(itemCount + " ITEM");
      } else {
        $(".products-counter").text(itemCount + " ITEMS");
      }
    })
    .catch((err) => {
      console.log("AJAX ERROR CAUGHT RENDER BOOKS", err);
    });
};

const renderProductList = (items) => {
  for (item of items) {
    generateProductElement(item);
  }
};

 // function to create new items and push them into the list
 const generateProductElement = (obj) => {
  const name = obj.name;
  const date = new Date(obj.date_added).toISOString();
  const dateAdded = dayjs(date).fromNow();
  const productId = obj.id;

  const $markup = `
  <table class="item" data-type="products" data-itemId="${productId}">
  <div>
      <tr>
          <td class="title-td">
            <b class="name-b">${name}</b>
            <div class="date-td">Added: ${dateAdded}</div>
          </td>
          <td><button class="edit"><i class="uil uil-pen"></i></i></button></td>
          <td><button class="delete"><i class="uil uil-minus-circle"></i></button></td>
      </tr>
  </div>
  <table>
    `;

  const $item = $(".products-items").prepend($markup);
  return $item;
};


$(() => {
  //-- Plugin for dayjs ---//
  dayjs.extend(window.dayjs_plugin_relativeTime);

  loadProducts();

});
