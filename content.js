function getItems() {
  chrome.storage.sync.get(null, function(items) {
    console.log(items)
  });
}

function saveData() {
  var title = document.getElementById('title').value;
  var date = document.getElementById('date').value;
  var data = {};
  data[title] = date;
  chrome.storage.sync.set(data);
  var status = document.getElementById('create');
  status.textContent = 'Creating Assignment...';
  setTimeout(function() {
    status.textContent = 'Create Assignment';
  }, 750);
}

function removeAll() {
  chrome.storage.sync.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
      console.error(error);
    }
  });
}

document.getElementById('create').addEventListener('click', saveData);
document.getElementById('contents').addEventListener('click', getItems);
document.getElementById('clear').addEventListener('click', removeAll);
