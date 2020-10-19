function displayOptions(num) {
  document.getElementById("opt-select").style.display = "none";
  document.getElementById("options").style.display = "block";
  var size;
  if (num > 4) {
    size = "auto";
  } else if (num <= 2) {
    size = "210px";
  } else {
    size = "150px";
  }
  for (var i = 1; i <= num; i++) {
    document.getElementById("opt" + i).style.display = "inline-block";
    document.getElementById("opt" + i).style.height = size;
  }
}

function pickOption() {
    alert('Form submitted!');
    return false;
}
