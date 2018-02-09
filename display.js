var id = 'assign-me-container';
window.addEventListener('load', init);

var newHeader = function (title) {
    return '<div class="T0FFIe rwnykc">' + title + '</div>';
};

var newAssignment = function (options) {
    return '<div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p class="onkcGd m8aQlb">' + options.title + '</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd" href="https://chrome.google.com/webstore/detail/assignme/hblfkbdoflbakoblaknbjjhjbgfoofog" target="_blank">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due ' + options.date + '</div></div></div><div class="ubVkr pQCS0d"></div></div></div>';
};

var newSection = function (header, assignments) {
    return '<div>' + newHeader(header) + assignments.join('') + '</div>';
};

function selectContainer() {
    return document.querySelector(".KXQEKd");
}

function init() {
    var id = setInterval(function () {
        var childNodes = selectContainer();
        if (childNodes) {
            clearInterval(id);
            refreshSection();
        }
    }, 100);
}

function makeElement() {
    return function (args) {
        var div = document.createElement('div');
        div.innerHTML = fn(args);
        return div.children[0];
    }
}

function refreshSection() {
    var container = selectContainer();
    var assignMeContainer = container.querySelector('#' + id);
    if (assignMeContainer) {
        container.removeChild(assignMeContainer);
    }
    addSection(container);
}

function addSection(mainElement) {
    toDo(function (output) {
        var outputDiv = document.createElement('div');
        outputDiv.id = id;
        outputDiv.innerHTML = output;
        mainElement.appendChild(outputDiv);
    });
}

function toDo(cb) {
    chrome.storage.sync.get(null, function(items) {
        var children = [];
        for (var key in items) {
            if (key.substring(0, 9) == 'AssignMe.') {
                var title = key.substr(9);
                var date = items[key];
                children.push(newAssignment({
                    title: title,
                    date: date
                }));
            }
        }
        if (!children.length) {
            return cb("")
        }
        cb(newSection('AssignMe', children));
    });
}
