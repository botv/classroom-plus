var title = document.getElementById("title").value;
var description = document.getElementById("description").value;
var date = document.getElementById("date").value;

function displayData() {
  chrome.tabs.executeScript({
    file: 'assign.js'
  });
}

document.getElementById('submit').addEventListener('click', displayData);
