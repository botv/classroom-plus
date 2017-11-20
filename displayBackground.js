function display() {
  chrome.tabs.executeScript({
    file: 'display.js'
  });
}

display();
