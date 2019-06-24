var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendName);

function appendName() {
  var name = $('.names').val();

  cardContainer.append(`<center> <h2>
    <p class="name"> ${name} is invited to my birthday!!!!</p>
  <h2>`);

  $('.name').val("");

}
