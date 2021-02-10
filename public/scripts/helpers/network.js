const getItemsByUserId = (table, userId) => {
  console.log("function to get items by USER ID")
  return $.ajax({
    method: "GET",
    url: `/${table}/${userId}`
  })
};

module.exports = { getItemsByUserId };
