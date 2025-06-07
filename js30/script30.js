window.onload = function () {
  sessionStorage.removeItem('savedDate1');
  sessionStorage.removeItem('savedDate2');
};

function compareDates() {
  const date1Input = document.getElementById('date1');
  const date2Input = document.getElementById('date2');
  const date1 = new Date(date1Input.value);
  const date2 = new Date(date2Input.value);
  const result = document.getElementById('result');

  sessionStorage.setItem('savedDate1', date1Input.value);
  sessionStorage.setItem('savedDate2', date2Input.value);

  if (isNaN(date1) || isNaN(date2)) {
    result.textContent = "Будь ласка, введіть обидві дати.";
    return;
  }

  if (date1 < date2) {
    result.textContent = `Ця дата (${date1.toLocaleDateString()}) раніша за цю дату (${date2.toLocaleDateString()}).`;
  } else if (date1 > date2) {
    result.textContent = `Ця дата (${date2.toLocaleDateString()}) раніша за цю дату (${date1.toLocaleDateString()}).`;
  } else {
    result.textContent = "Дати однакові.";
  }
}

// НОВА ФУНКЦІЯ для виведення пʼятниць поточного місяця
function showFridays() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0 = січень, 11 = грудень
  const fridays = [];

  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, month, day);
    if (date.getMonth() !== month) break; // вихід, якщо вийшли за межі місяця
    if (date.getDay() === 5) { // 5 = пʼятниця
      fridays.push(date.toLocaleDateString());
    }
  }

  const list = document.getElementById('fridayList');
  list.innerHTML = ""; // очищення перед новим виводом

  if (fridays.length === 0) {
    list.innerHTML = "<li>У цьому місяці немає п'ятниць </li>";
  } else {
    fridays.forEach(date => {
      const li = document.createElement('li');
      li.textContent = date;
      list.appendChild(li);
    });
  }
}
