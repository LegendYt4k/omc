function updateCountdown() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 12); // Add 12 days

  const now = new Date().getTime();
  const timeLeft = endDate - now;

  if (timeLeft < 0) {
    document.getElementById("countdown-timer").innerHTML = "Expired";
    return; // Stop the timer
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById("countdown-timer");
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
