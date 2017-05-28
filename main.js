function main() {
  $('.person, .skill, .company').hide();
  $('.person, .skill, .company').fadeIn(1000);
  $('.keywords').hide();
  $('.button').on('click', function() {
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
  });
  $('#who').on('click', function() {
  	$(this).text('Wie is Celeste?');
  });
  $('#why').on('click', function() {
  	$(this).text('Waarom programmeren?');
  });
  $('#how').on('click', function() {
  	$(this).text('Op welke manier?');
  });
}

$(document).ready(main);