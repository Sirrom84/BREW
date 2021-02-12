$(() => {

  // 1. when you click the edit button for a specific item
  $(document).on("click", ".edit", function(event) {
    const userURL = window.location.pathname;
    const userId = userURL.slice(1);

  // 2. it should display instructions to move to another table
    $('.bubble').slideDown();

    //this is data of the item on edit them
    const $itemToEdit = $(event.target).parents('table.item');
    const data = { itemId: $itemToEdit.attr('data-itemId') };

    const sendPost = (list, data) => {
      $.post(`/${list}/${userId}/edit`, data)
        .then(() => {
          console.log("Adding new item to list!!!!!")
          location.reload();
        })
        .catch(err => {
          console.log(err)
        })
    }

    // if reading clicked , delete the item from original table
    $(".reading").click((e) => {
      $('.bubble').slideUp();

      const $newList = $(e.target).parents('article');
      console.log("this is from parent reading article:", $newList)

      data["categoryId"] = $newList.attr('data-type');

      console.log("READING DATA:", data);
        // function - take in a category, then send post

      sendPost("books", data);


      })


      // if eating clicked
      $(".eating").click((e) => {
        $('.bubble').slideUp();

        const $eat = $(e.target).parents('article');
        console.log("this is from eating article:", $eat);

        data["categoryId"] = $eat.attr('data-type');

        console.log("EATING DATA:", data);

        sendPost("restaurants", data);

        })

         // if eating clicked
      $(".watching").click((e) => {
        $('.bubble').slideUp();

        const $eat = $(e.target).parents('article');
        console.log("this is from eating article:", $eat);

        data["categoryId"] = $eat.attr('data-type');

        console.log("WATCHING DATA:", data);

        sendPost("restaurants", data);

        })

         // if eating clicked
      $(".buying").click((e) => {
        $('.bubble').slideUp();

        const $eat = $(e.target).parents('article');
        console.log("this is from eating article:", $eat);

        data["categoryId"] = $eat.attr('data-type');

        console.log("BUYING DATA:", data);

        sendPost("restaurants", data);

        })

    })


  });
