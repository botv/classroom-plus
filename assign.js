function saveItem() {
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

function removeItem(item) {
    var title = document.getElementById('title').value;
    if (title) {
        chrome.storage.sync.remove("AssignMe." + title)
        var status = document.getElementById('remove');
        status.textContent = 'Removing...';
        setTimeout(function() {
          status.textContent = 'Remove Assignment';
        }, 1000);
    } else {
        var status = document.getElementById('remove');
        status.textContent = 'Enter a title';
        setTimeout(function() {
          status.textContent = 'Remove Assignment';
        }, 1000);
    }
}

function clearItems() {
    chrome.storage.sync.clear(function() {
        var status = document.getElementById('clear');
        status.textContent = 'Clearing...';
        setTimeout(function() {
            status.textContent = 'Clear Assignments';
        }, 1000);
    });
}

document.getElementById('create').addEventListener('click', saveItem);
document.getElementById('remove').addEventListener('click', removeItem);
document.getElementById('clear').addEventListener('click', clearItems);
