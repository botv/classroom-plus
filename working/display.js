window.addEventListener('load', function () {
  toDo()
});

toDo()
function toDo() {
  chrome.storage.sync.get(null, function(items) {
    for (var key in items) {
      if (key.substring(0, 9) == 'AssignMe.') {
        var title = key.substr(9);
        var date = items[key];
        var body = document.getElementById("yDmH0d").innerHTML;
        if (body.search('<div><div class="T0FFIe rwnykc">AssignMe') === -1) {
          var index = body.search('<div class="T0FFIe rwnykc">Due ');
          var div = '<div><div class="T0FFIe rwnykc">AssignMe</div><div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p class="onkcGd m8aQlb">' + title + '</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due ' + date + '</div></div></div><div class="ubVkr pQCS0d"></div></div></div></div>';
        } else {
          var index = body.search('<div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa">');
          var div = '<div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p>' + title + '</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due ' + date + '</div></div></div><div class="ubVkr pQCS0d"></div></div></div>';
        }
        var output = [body.slice(0, index), div, body.slice(index)].join('');
        document.getElementById('yDmH0d').innerHTML = output;
      }
    };
  });
}
