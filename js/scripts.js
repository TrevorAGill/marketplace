$(document).ready(function() {
  // FORM CHECKOUT FUNCTIONALITY
  $("#formCheckout").submit(function(event) {
    event.preventDefault();
    var uName = $("#name").val();
    var uStreet = $("#street").val();
    var uCity = $("#city").val();
    var uState = $("#state").val();
    var uZip = $(.parseInt("#zip").val());

    $("#userName").text(uName);
    $("#userStreet").text(uStreet);
    $("#userCity").text(uCity);
    $("#userState").text(uState);
    $("#userZip").text(uZip);

    $(".receipt").show();
    $("#formCheckout").hide();


  });
});
