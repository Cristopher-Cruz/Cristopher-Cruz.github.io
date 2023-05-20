
const yearsAhead = 1;
const dayPrices = [
'Feb 03 2023',
'Feb 06 2023',
'Feb 08 2023',
'Feb 08 2023',
'Feb 11 2023',
'Feb 13 2023',
'Feb 16 2023',
'Feb 16 2023',
'Feb 18 2023',
'Feb 21 2023',
'Feb 23 2023',
'Feb 27 2023',
'Mar 01 2023',
'Mar 04 2023',
'Mar 06 2023',
'Mar 08 2023',
'Mar 10 2023',
'Mar 13 2023',
'Mar 15 2023',
'Mar 16 2023',
'Mar 17 2023',
'Mar 20 2023',
'Mar 22 2023',
'Mar 24 2023',
'Mar 27 2023',
'Mar 29 2023',
'Mar 31 2023',
'Apr 03 2023',
'Apr 05 2023',
'Apr 07 2023',
'Apr 10 2023',
'Apr 12 2023',
'Apr 14 2023',
'Apr 17 2023',
'Apr 19 2023',
'Apr 21 2023',
'Apr 24 2023',
'Apr 26 2023',
'Apr 28 2023',
'Apr 29 2023',
'May 01 2023',
'May 03 2023',
'May 05 2023',
'May 06 2023',
'May 08 2023',
'May 10 2023',
'May 12 2023',
'May 15 2023',
'May 17 2023', 
'May 19 2023' 
];

const curYear = new Date().getFullYear();
const calEl = document.getElementById("calendar");



function update(year) {
  console.log(year);
  
  // Clear calendar
  calEl.innerHTML = "";
  
  // Build year calendar
  var calendarize = new Calendarize();
  calendarize.buildYearCalendar(calEl, year);
  
  document.querySelectorAll('.day').forEach(function(el) {
    let dayDateString = el.getAttribute('data-date').substring(4, 15);
    let dayDate = new Date(dayDateString);
    let curday = new Date();
  
    if (dayPrices.includes(dayDateString)) {
      el.classList.add('available');
    } else {
      el.classList.add('unavailable');
    }
  
    if (dayDate > curday) {
      el.classList.add('invalid');
    }
  });
  
  // Disable months ahead
  calEl.querySelectorAll(`.month`).forEach(function(monthEl) {
    const dayEl = monthEl.querySelector('.day');
    const dateStr = dayEl.getAttribute('data-date');
    const date = new Date(dateStr);
    const monthIdx = date.getMonth();
    const year = date.getFullYear();
    
    const now = new Date();
    const monthCur = now.getMonth();
    const yearCur = now.getFullYear();
    
    if(year == yearCur && monthIdx > monthCur) {
      monthEl.classList.add('past');
    }
    // Disabling january as my logging began in february
    if (monthIdx == 0){
      monthEl.classList.add('past');
    }
  });
}



update(curYear);





