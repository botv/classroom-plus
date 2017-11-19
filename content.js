function displayData() {
  chrome.tabs.executeScript({
    file: 'display.js'
  });
}

document.getElementById('test').addEventListener('click', displayData);
