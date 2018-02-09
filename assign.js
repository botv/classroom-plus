function saveItem() {
    var title = document.getElementById('title').value;
    var date = document.getElementById('date').value;
    var link = document.getElementById('link').value
    if (title && date) {
        var data = {};
        data["AssignMe." + title] = [date, link];
        chrome.storage.sync.set(data);
        var status = document.getElementById('create');
        status.textContent = 'Creating...';
        setTimeout(function() {
          status.textContent = 'Create Assignment';
          window.location.reload();
        }, 1000);
        if (document.getElementById("reload").checked === true) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
            });
        }
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
          window.location.reload();
        }, 1000);
        if (document.getElementById("reload").checked === true) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
            });
        }
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
            window.location.reload();
        }, 1000);
        if (document.getElementById("reload").checked === true) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
            });
        }
    });
}

document.getElementById('create').addEventListener('click', saveItem);
document.getElementById('remove').addEventListener('click', removeItem);
document.getElementById('clear').addEventListener('click', clearItems);
