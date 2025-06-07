// Затримки в 1 та 1.5 секунди
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

    // Імітація читання файлу (затримка 1 секунда)
    function readFile() {
      return new Promise(resolve => {
        setTimeout(() => {
          const fileContent = "Рядок 1\nРядок 2\nРядок 3";
          resolve(fileContent);
        }, 1000);
      });
    }

    // Імітація обробки вмісту файлу
    function processFileContent(content) {
      return new Promise(resolve => {
        setTimeout(() => {
          const lines = content.split("\n").map(line => line.toUpperCase());
          resolve(lines);
        }, 1000);
      });
    }

    // Запуск обробника події
    async function start() {
      const output = document.getElementById("result");
      output.textContent = "Виконується...\n";

      const res1 = await delay1();
      output.textContent += res1 + "\n";

      const res2 = await delay2();
      output.textContent += res2 + "\n";

      const fileContent = await readFile();
      output.textContent += "Файл прочитано:\n" + fileContent + "\n";

      const processed = await processFileContent(fileContent);
      output.textContent += "Оброблений вміст:\n" + processed.join("\n");
    }