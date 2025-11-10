// Initialize Telegram WebApp API
const tg = window.Telegram.WebApp;
tg.expand();

// Example button behavior
document.getElementById("btnAction").addEventListener("click", () => {
  tg.MainButton.text = "Thanks for clicking!";
  tg.MainButton.show();
  tg.MainButton.onClick(() => {
    tg.close(); // closes the web app inside Telegram
  });
});
