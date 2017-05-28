function main() {
  $('.person, .skill, .company').hide();
  $('.person, .skill, .company').fadeIn(1000);
  $('.keywords').hide();
  $('.button').on('click', function() {
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
  });
}

$(document).ready(main);