function assign() {
  chrome.tabs.executeScript({
    file: 'assign.js'
  });
}

document.getElementById('test').addEventListener('click', assign);
