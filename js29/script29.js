const savedName = localStorage.getItem("username");
    const greetingDiv = document.getElementById("greet");

    if (savedName) {
      greetingDiv.textContent = `Привіт, ${savedName}! Радий бачити вас знову.`;
    }

    // Обробка надсилання форми
    document.getElementById("nameForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      localStorage.setItem("username", username);
      greetingDiv.textContent = `Привіт, ${username}! Дані збережено.`;
      document.getElementById("nameForm").reset();
    });