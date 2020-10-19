function displayOptions(num) {
  document.getElementById("opt-select").style.display = "none";
  document.getElementById("options").style.display = "block";
  for (var i = 3; i <= num; i++) {
    document.getElementById("opt" + i).style.display = "block";
  }
}

function pickOption() {
    alert('Form submitted!');
    return false;
}
