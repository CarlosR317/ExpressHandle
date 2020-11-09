// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  // allows the user to pick the burger out of the data base
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {

      name: $("bu").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Here is a new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
// allows the user to begin to "eat" the burger
  $(".devour-burger").on("click", function (event) {

    var id = $(this).data("id");
    var devourBur = $(this).data("newdevour");

    var newDevourState = {
      devoured: devourBur
    };

    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("Super Filling!", devourBur);
        location.reload();
      }
    );
  });
});
// allows the burger to make the burger go away
$(".gone-burger").on("click", function (event) {
  var eatId = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/burger/" + eatId,
    {
      type: "DELETE",
    }).then(
      function () {
        console.log("Enjoy your burger", eatId);
        // Reload the page to get the updated list
        location.reload();
      }
    );
});
