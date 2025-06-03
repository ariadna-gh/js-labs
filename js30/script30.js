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
