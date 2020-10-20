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
    document.getElementById("opt" + i).disabled = false;
  }
}

function pickOption() {
    var ids = ["first", "second", "third", "fourth", "fifth", "sixth"];
    var options = [];
    for (var i = 1; i <= 6; i++) {
      if (document.getElementById("opt" + i).style.display == "none") {
        break;
      }
      options.push(document.getElementById(ids[i-1]).value);
    }
    var bestOption = options[Math.floor(Math.random() * options.length)];
    alert(bestOption);
    return bestOption;
}
