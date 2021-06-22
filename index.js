$(document).ready(function () {
  let $front = $(".card-front");
  let $back = $(".card-back");
  const $flipBtn = $('.flip');


  $back.hide();


  function showOtherSide() {
    $flipBtn.on('click', function () {
      $(this).data('card') === 'first-card' ?
        $('.card-back.first-card').toggle() && $('.card-front.first-card').toggle() :
        $(this).data('card') === 'second-card' ?
        $('.card-back.second-card').toggle() && $('.card-front.second-card').toggle() :
        alert('Please select a button');
    })

  }
  showOtherSide();
});