function getItems() {
    chrome.storage.sync.get(null, function(items) {
        console.log(items)
    });
}

function removeItem(item) {
    chrome.storage.sync.remove(item)
}

function saveData() {
  var title = document.getElementById('title').value;
  var date = document.getElementById('date').value;
  if (title && date) {
    var data = {};
    data["AssignMe." + title] = date;
    chrome.storage.sync.set(data);
    var status = document.getElementById('create');
    status.textContent = 'Creating...';
    setTimeout(function() {
      status.textContent = 'Create Assignment';
    }, 1000);
  } else if (!title && date) {
    var status = document.getElementById('create');
    status.textContent = 'Enter a title';
    setTimeout(function() {
      status.textContent = 'Create Assignment';
    }, 1000);
  } else if (title && !date) {
    var status = document.getElementById('create');
    status.textContent = 'Enter a date';
    setTimeout(function() {
      status.textContent = 'Create Assignment';
    }, 1000);
  } else if (!title && !date) {
    var status = document.getElementById('create');
    status.textContent = 'Enter a title and date';
    setTimeout(function() {
      status.textContent = 'Create Assignment';
    }, 1000);
  }
}

function clearData() {
  chrome.storage.sync.clear(function() {
    var status = document.getElementById('clear');
    status.textContent = 'Clearing...';
    setTimeout(function() {
      status.textContent = 'Create Assignment';
    }, 1000);
  });
}

document.getElementById('create').addEventListener('click', saveData);
document.getElementById('clear').addEventListener('click', clearData);
document.getElementById('contents').addEventListener('click', getItems);
