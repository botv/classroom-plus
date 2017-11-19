function displayData() {
  chrome.tabs.executeScript({
    file: 'display.js'
  });
}

document.getElementById('submit').addEventListener('click', displayData);
