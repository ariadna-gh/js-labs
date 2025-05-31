const container = document.getElementById("container");
    const debounce = (fn, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    };

    function clearContainer() {
      container.innerHTML = '';
    }

    function generateButtons(count = 200) {
      clearContainer();
      for (let i = 0; i < count; i++) {
        const btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = "Кнопка " + (i + 1);
        container.appendChild(btn);
      }
    }

    function attachWithoutOptimization() {
      clearContainer();
      generateButtons();
      console.time("Без оптимізації");
      const buttons = container.querySelectorAll(".btn");
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          console.log("Натиснуто: " + btn.textContent);
        });
      });
      console.timeEnd("Без оптимізації");
    }

    function attachWithDelegation() {
      clearContainer();
      generateButtons();
      console.time("З делегуванням");
      container.onclick = function (e) {
        if (e.target.classList.contains("btn")) {
          console.log("Натиснуто: " + e.target.textContent);
        }
      };
      console.timeEnd("З делегуванням");
    }

    function attachWithDebounce() {
      clearContainer();
      generateButtons();
      console.time("З дебаунсінгом");
      const handler = debounce((e) => {
        if (e.target.classList.contains("btn")) {
          console.log("Дебаунс: " + e.target.textContent);
        }
      }, 300);
      container.onclick = handler;
      console.timeEnd("З дебаунсінгом");
    }