var list_number = 2250;
var day_of_number = '30';
var month_of_number = '03';
var year_of_number = '2019';


  /* We only care about date, not time. */
  var list_date = new Date(year_of_number + '-' + month_of_number + '-' + day_of_number + 'T12:00:00');
  var today = new Date(); //new Date().toJSON().slice(0,10) + 'T12:00:00');

  function inSpanish(date) {
    return date.toLocaleDateString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    )
  }

  function numDaysAgo() {
    var days_difference = dateFns.differenceInCalendarDays(new Date(), list_date);
    if (days_difference === 0) {
      return "(hoy)";
    } else if (days_difference === 1) {
      return "(ayer)";
    } else {
      return "(hace " + days_difference + "dias)";
    }
  }

  function populateDivs() {
    var listDayDiv = document.getElementById("list-day");
    var listNumberDiv = document.getElementById("list-number");
    var daysAgoDiv = document.getElementById("days-ago");

    listDayDiv.innerText = inSpanish(list_date);
    listNumberDiv.innerText = list_number.toString();
    daysAgoDiv.innerText = numDaysAgo();
  }

  function reloadAfterInterval() {
      var interval =  3 * 1000;
      window.setTimeout(
	  function(){
	      if (dateFns.differenceInCalendarDays(
		  new Date(), list_date) !== 0) {
		  location.reload(true)
	      }
	  }, interval);
  }

  window.onload = function() {
    populateDivs();
    reloadAfterInterval();
  }
