//затримки в 1 та 1.5 секунди
    function delay1() {
      return new Promise(resolve => {
        setTimeout(() => resolve("Дія 1 завершена"), 1000);
      });
    }
    function delay2() {
      return new Promise(resolve => {
        setTimeout(() => resolve("Дія 2 завершена"), 1500);
      });
    }
// запуск обробника події
    async function start() {
      const output = document.getElementById("result");
      output.textContent = "Виконується...";

      const res1 = await delay1();
      output.textContent = res1;

      const res2 = await delay2();
      output.textContent += "\n" + res2;
    }

    