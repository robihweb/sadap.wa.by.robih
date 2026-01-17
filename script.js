const music = document.getElementById("bgMusic");

window.onload = () => {
  if (localStorage.getItem("loggedIn") === "true") {
    window.location.href = "dashboard.html";
  }
};

function login() {
  const user = username.value;
  const pass = password.value;
  const msg = document.getElementById("message");

  if (user === "robih" && pass === "robih.coding") {
    localStorage.setItem("loggedIn", "true");
    music.play();
    msg.style.color = "lime";
    msg.innerText = "ACCESS GRANTED 🔓";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);
  } else {
    msg.innerText = "SALAH KOCAK ❌";
  }
}

function toggleMusic() {
  if (music.paused) music.play();
  else music.pause();
}