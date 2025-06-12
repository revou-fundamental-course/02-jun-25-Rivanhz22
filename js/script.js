document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");

  // Welcome message
  var name = prompt("Masukkan nama Anda:");
  document.getElementById("name").innerText = name || "There";

  // Toggle navbar
  const toggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
  }

  // Form handling
  const form = document.getElementById("formInput");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("outNama").textContent = document.getElementById("nama").value;
      document.getElementById("outTgl").textContent = document.getElementById("tgl").value;
      document.getElementById("outGender").textContent = document.getElementById("gender").value;
      document.getElementById("outPesan").textContent = document.getElementById("pesan").value;
    });
  }
});
