function saveChanges() {
  var theValue = document.getElementById("title").value;
  var date = document.getElementById("date").value;
  if (!title) {
    alert('Error: No value specified');
    return;
  } else if (!date) {
    alert('Error: No value specified');
    return;
  }
}

saveChanges();
