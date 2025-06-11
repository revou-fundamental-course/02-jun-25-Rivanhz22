console.log("Script loaded");
// wellcome message 
var name = prompt("Masukkan nama Anda:");
document.getElementById("name").innerText = name

// from
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formInput");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("outNama").textContent = document.getElementById("nama").value;
    document.getElementById("outTgl").textContent = document.getElementById("tgl").value;
    document.getElementById("outGender").textContent = document.getElementById("gender").value;
    document.getElementById("outPesan").textContent = document.getElementById("pesan").value;
  });
});