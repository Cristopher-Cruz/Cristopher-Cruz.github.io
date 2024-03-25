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
'May 19 2023',
'May 22 2023',
'May 24 2023',
'May 26 2023',
'May 29 2023',
'May 31 2023',
'Jun 02 2023',
'Jun 05 2023',
'Jun 07 2023',
'Jun 09 2023',
'Jun 10 2023',
'Jun 12 2023',
'Jun 14 2023',
'Jun 16 2023',
'Jun 19 2023',
'Jun 21 2023',
'Jun 23 2023',
'Jun 26 2023',
'Jun 28 2023',
'Jun 30 2023',
'Jul 03 2023',
'Jul 05 2023',
'Jul 07 2023',
'Jul 10 2023',
'Jul 12 2023',
'Jul 14 2023', 
'Jul 15 2023', 
'Jul 16 2023', 
'Jul 17 2023', 
'Jul 18 2023', 
'Jul 19 2023', 
'Jul 20 2023', 
'Jul 21 2023', 
'Jul 22 2023', 
'Jul 23 2023', 
'Jul 25 2023', 
'Jul 26 2023', 
'Jul 27 2023',
'Jul 28 2023',
'Jul 31 2023',
'Aug 01 2023',
'Aug 02 2023',
'Aug 03 2023',
'Aug 04 2023',
'Aug 07 2023',
'Aug 08 2023',
'Aug 09 2023',
'Aug 10 2023',
'Aug 11 2023',
'Aug 12 2023',
'Aug 14 2023',
'Aug 15 2023',
'Aug 17 2023',
'Aug 21 2023',
'Aug 23 2023',
'Aug 24 2023',
'Aug 25 2023',
'Aug 26 2023',
'Aug 27 2023',
'Aug 28 2023',
'Aug 30 2023',
'Sep 01 2023',
'Sep 04 2023',
'Sep 06 2023',
'Sep 08 2023', 
'Sep 11 2023', 
'Sep 12 2023', 
'Sep 13 2023', 
'Sep 15 2023', 
'Sep 17 2023', 
'Sep 18 2023', 
'Sep 20 2023',
'Sep 22 2023',
'Sep 25 2023',
'Sep 27 2023',
'Sep 29 2023',
'Oct 02 2023',
'Oct 04 2023',
'Oct 07 2023',
'Oct 08 2023',
'Oct 09 2023',
'Oct 11 2023',
'Oct 13 2023',
'Oct 14 2023',
'Oct 16 2023',
'Oct 18 2023',
'Oct 20 2023',
'Oct 23 2023',
'Oct 25 2023',
'Oct 26 2023',
'Oct 27 2023',
'Oct 30 2023',
'Nov 01 2023',
'Nov 03 2023',
'Nov 04 2023',
'Nov 06 2023',
'Nov 08 2023',
'Nov 10 2023',
'Nov 13 2023',
'Nov 15 2023',
'Nov 17 2023',
'Nov 20 2023',
'Nov 22 2023',
'Nov 25 2023',
'Nov 27 2023',
'Nov 29 2023',
'Dec 01 2023',
'Dec 04 2023',
'Dec 06 2023',
'Dec 09 2023',
'Dec 12 2023',
'Dec 14 2023',
'Dec 16 2023',
'Dec 18 2023',
'Dec 20 2023',
'Dec 22 2023',
'Dec 25 2023',
'Dec 27 2023',
'Dec 29 2023',
'Jan 01 2024',
'Jan 05 2024',
'Jan 07 2024',
'Jan 08 2024',
'Jan 10 2024',
'Jan 12 2024',
'Jan 16 2024',
'Jan 17 2024',
'Jan 19 2024',
'Jan 22 2024',
'Jan 24 2024',
'Jan 27 2024',
'Jan 29 2024',
'Feb 01 2024',
'Feb 04 2024',
'Feb 06 2024',
'Feb 09 2024',
'Feb 11 2024',
'Feb 14 2024',
'Feb 16 2024',
'Feb 18 2024',
'Feb 22 2024',
'Feb 24 2024',
'Feb 25 2024',
'Feb 27 2024',
'Mar 02 2024',
'Mar 03 2024',
'Mar 05 2024',
'Mar 09 2024',
'Mar 10 2024',
'Mar 14 2024',
'Mar 16 2024',
'Mar 17 2024',
'Mar 20 2024',
'Mar 23 2024',
'Mar 24 2024',
];

const curYear = new Date().getFullYear();
const calEl = document.getElementById("calendar");

function update(year) {
  console.log(year);

  // Clear calendar
  calEl.innerHTML = "";

  // Build current year calendar
  var calendarize = new Calendarize();
  calendarize.buildYearCalendar(calEl, year);

  // Build last year calendar
  calendarize.buildYearCalendar(calEl, year - 1, 'last-year');

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

  // Disable months ahead for both current and last year
  calEl.querySelectorAll(`.month`).forEach(function(monthEl) {
    const dayEl = monthEl.querySelector('.day');
    const dateStr = dayEl.getAttribute('data-date');
    const date = new Date(dateStr);
    const monthIdx = date.getMonth();
    const year = date.getFullYear();

    const now = new Date();
    const monthCur = now.getMonth();
    const yearCur = now.getFullYear();

    if (year == yearCur && monthIdx > monthCur) {
      monthEl.classList.add('past');
    }
  });
}

update(curYear);
