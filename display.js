// // AssignMe for Classroom Extension
// // Copyright Ben Botvinick 2017
// // Sample: <div><div class="T0FFIe rwnykc">AssignMe</div><div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p class="onkcGd m8aQlb">Grace's Assignment</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due Feb 23</div></div></div><div class="ubVkr pQCS0d"></div></div></div></div>
//
// window.addEventListener('load', function() {
//   addElement()
// });
//
// function addElement () {
//   var newDiv = document.createElement("div");
//   newDiv.class = "F0D56 DShyMc-NTA3MDM0NDY2NFpa";
//   newDiv.id = "AssignMe_container";
//   newDiv.innerHTML = '<p>hello</p>';// '<div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p>Title</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due Date</div></div></div><div class="ubVkr pQCS0d"></div></div>';
//   // var currentDiv = document.getElementsByClassName("T0FFIe rwnykc")[0];
//   // currentDiv.appendChild(newDiv);
//   var parentNode = document.getElementsByClassName("v7wOcf ZGnOx u155de")[0];
//   console.log(parentNode)
//   var childNode = document.getElementsByTagName("MAIN");
//   var mainElement = childNode[0];
//   console.log(childNode);
//   console.log(childNode.length);
//   console.log(mainElement);
//   parentNode.appendChild(newDiv);
//   console.log("I got here")
// }

var id = 'assign-me-container';
window.addEventListener('load', init);
window.addEventListener('message', function (e) {
    var data = e.data;
    console.log(data)
    if (!data || !data.type !== 'ASSIGN_ME_REFRESH') {
        return;
    }
    refreshSection()
});
var newHeader = function (title) {
    return '<div class="T0FFIe rwnykc">' + title + '</div>';
};
var newAssignment = function (options) {
    // return '<div class="F0D56 DShyMc-NTA5NTk1NDU5M1pa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><a class="onkcGd m8aQlb" target="_blank" href="/u/0/c/NTA5NTk1NDU5M1pa/a/MTA5NzcxNTM0NzZa/details" data-focus-id="/u/0/c/NTA5NTk1NDU5M1pa/a/MTA5NzcxNTM0NzZa/details">' + options.title + '</a></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd" target="_blank" href="/u/0/c/NTA5NTk1NDU5M1pa" data-focus-id="/u/0/c/NTA5NTk1NDU5M1pa">Due' + options.date + '</a></div></div><div class="ubVkr pQCS0d"></div></div></div>';
    return '<div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p class="onkcGd m8aQlb">' + options.title + '</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due ' + options.date + '</div></div></div><div class="ubVkr pQCS0d"></div></div></div>';

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
        cb(newSection('AssignMe', children));
    });
}
