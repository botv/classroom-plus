function displayData() {
  chrome.tabs.executeScript({
    file: 'assign.js'
  });
}

document.getElementById('submit').addEventListener('click', displayData);
