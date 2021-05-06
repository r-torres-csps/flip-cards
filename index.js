$(document).ready(function () {
  let $front = $(".card-front");
  let $back = $(".card-back");
  let $flipBtn = $(".flip");

  $back.hide();

  function flipCard() {
    $flipBtn.on("click", function () {
      $back.toggle();
      $front.toggle();
    });
  }

  flipCard();
});
