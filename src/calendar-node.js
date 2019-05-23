function createCalendar(id, year, month) {
  const element = document.getElementById(id);
  // element.insertAdjacentHTML('afterBegin', getCalendarTable(year, month));
  element.appendChild(createCalendarTable(year, month));
}

function addEmptyCells(row, quantity) {
  for (let i = 0; i < quantity; i++) {
    const bodyEmptyCell = document.createElement('td');
    row.appendChild(bodyEmptyCell);
  }
}

function createCalendarTable(year, month) {
  const weekDays = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

  const table = document.createElement('table');
  const theader = document.createElement('thead');
  const headerRow = theader.insertRow();
  weekDays.forEach((day)=> {
    const headerCell = document.createElement('th');
    headerCell.textContent = day;
    headerRow.appendChild(headerCell);
  });
  table.appendChild(theader);

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  let row = tbody.insertRow();

  let day = new Date(year, month-1,);
  let dayOfWeek = day.getDay() - 1;
  if (dayOfWeek < 0) dayOfWeek = 6;
  addEmptyCells(row, dayOfWeek);

  while (day.getMonth() + 1 === month ) {
    const bodyCell = document.createElement('td');
    bodyCell.textContent = day.getDate();
    row.appendChild(bodyCell);

    day.setDate(day.getDate() + 1);
    dayOfWeek++;
    if (dayOfWeek >= 7) {
      dayOfWeek = 0;
      row = tbody.insertRow();
    }
  }
  addEmptyCells(row, 7 - dayOfWeek);
  return table;
}

createCalendar("calendar", 2019, 5)
