import $ from 'jquery';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery-countdown';

$(document).ready(function() {
  $("#getting-started").countdown("2018/09/01", function(event) {
    $(this).text(event.strftime('%D days %H:%M:%S'));
  });
});


