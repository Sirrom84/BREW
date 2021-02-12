$(() => {
  //-- Plugin for dayjs ---//
  dayjs.extend(window.dayjs_plugin_relativeTime);

  const userURL = window.location.pathname;
  const userId = userURL.slice(1);

  $(function () {
    $.ajax({
      method: "GET",
      url: `/products/${userId}`,
    })
      .then((result) => {
        renderProductList(result.products);

        //counter
        const itemCount = $(".product-items table.item").length;
        $(".buying").click(() => {
          if (!itemCount) {
            $(".product-counter").effect(
              "shake",
              { times: 3, distance: 10 },
              300
            );
          }
        });

        if (itemCount === 1) {
          $(".product-counter").text(itemCount + " ITEM");
        } else {
          $(".product-counter").text(itemCount + " ITEMS");
        }
      })
      .catch((err) => {
        console.log("AJAX ERROR CAUGHT RENDER BOOKS", err);
      });
  });

  // function to render items
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

    const $item = $(".product-items").prepend($markup);
    return $item;
  };
});
