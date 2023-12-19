function updateTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Run initially to display the time immediately
  updateTime();
  