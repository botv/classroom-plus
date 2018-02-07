// AssignMe for Classroom Extension
// Copyright Ben Botvinick 2017
// Sample: <div><div class="T0FFIe rwnykc">AssignMe</div><div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p class="onkcGd m8aQlb">Grace's Assignment</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due Feb 23</div></div></div><div class="ubVkr pQCS0d"></div></div></div></div>

window.addEventListener('load', function () {
  addElement()
});

function addElement () {

  var newItem = document.createElement("div");
  newItem.innerHTML = "<a href='https://benbotvinick.com'>Hello</a>";

  var list = document.getElementsByClassName("Hello")[0];
  list.appendChild(newItem);


  var newDiv = document.createElement("div");
  newDiv.innerHTML = "Hello";
  var currentDiv = document.getElementsByClassName("KXQEKd")[0];
  currentDiv.appendChild(newDiv);
  var experimentalDiv = document.getElementsByClassName("Toffie")[0];
  experimentalDiv.innerHTML = "Suck";
  console.log("I got here")
}

/*
function toDo() {
  var body = document.getElementById("yDmH0d").innerHTML;
  console.log(body)
  chrome.storage.sync.get(null, function(items) {
    for (var key in items) {
      if (key.substring(0, 9) == 'AssignMe.') {
        var title = key.substr(9);
        var date = items[key];
        console.log(title)
        console.log(date)
        // var body = document.getElementById("yDmH0d").innerHTML;
        // console.log(body)
        if (body.search('<div><div class="T0FFIe rwnykc">AssignMe') === -1) {
          var index = body.search('<div class="T0FFIe rwnykc">Due ');
          var div = '<div><div class="T0FFIe rwnykc">AssignMe</div><div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p class="onkcGd m8aQlb">' + title + '</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd" https:"https://benbotvinick.com/">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due ' + date + '</div></div></div><div class="ubVkr pQCS0d"></div></div></div></div>';
        } else {
          var index = body.search('<div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa">');
          var div = '<div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p>' + title + '</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due ' + date + '</div></div></div><div class="ubVkr pQCS0d"></div></div></div>';
        }
        var output = [body.slice(0, index), div, body.slice(index)].join('');
        console.log(output)
        document.getElementById('yDmH0d').innerHTML = output;
      }
    }
  });
}
*/
