function createCalendar(id, year, month) {
  const element = document.getElementById(id);
  element.insertAdjacentHTML('afterBegin', getCalendarTable(year, month));
}

function getCalendarTable(year, month) {
  let rows = '';
  let day = new Date(year, month-1,);
  let dayOfWeek = day.getDay();
  if (dayOfWeek == 0) {
    dayOfWeek = 7;
  }
  for (let i = 1; i < dayOfWeek; i++) {
    rows += '<td></td>';
  }
  while (day.getMonth() + 1 === month ) {
    if (day.getDay() == 0) {
      rows += '<td class="weekend">' + day.getDate() + '</td>';
      dayOfWeek = 0;
    } else {
      if (dayOfWeek == 0) {
        rows += '</tr><tr>';
      }
      rows += '<td>' + day.getDate() + '</td>';
      dayOfWeek++;
    }
    day.setDate(day.getDate() + 1);
  }
  if (day.getDay() > 1) {
    dayOfWeek = 9 - day.getDay();
    for (let i = 1; i < dayOfWeek; i++) {
      rows += '<td></td>';
    }
  }

  const table = '<table><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th class="w">Вс</th></tr><tr>'+rows+'</tr></table>';
  return table;
}

createCalendar("calendar", 2017, 12)
