import $ from 'jquery';
import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery-countdown';

var date='2018/10/03';

$(document).ready(function() {
  $('#days').countdown(date, function(e) {
    $(this).text(e.strftime('%D'));
  });
  $('#hours').countdown(date, function(e) {
    $(this).text(e.strftime('%H'));
  });
  $('#minutes').countdown(date, function(e) {
    $(this).text(e.strftime('%M'));
  });
  $('#seconds').countdown(date, function(e) {
    $(this).text(e.strftime('%S'));
  });
});


