toDo()
function load() {
    var channels = "";
    var keywords = "";
    chrome.storage.local.get('channels', function (result) {
        channels = result.channels;
        alert(result.channels);
        $("#channels").val(channels);
    });
}
//will run on page load
document.addEventListener('DOMContentLoaded', load);

/*
toDo()
function toDo() {//is this doing anything important?
  //load values from the storage
  chrome.storage.sync.get({
    title: '',
    date: ''
  }, function(items) {
    if(!!title && !!date){
      alert(title + " - " + date)
      var body = document.getElementById("yDmH0d").innerHTML;
      if (body.search('<div><div class="T0FFIe rwnykc">AssignMe') === -1) {
       var index = body.search('<div class="T0FFIe rwnykc">Due ');
       var div = '<div><div class="T0FFIe rwnykc">AssignMe</div><div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p>' + title + '</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due ' + date + '</div></div></div><div class="ubVkr pQCS0d"></div></div></div></div>';
      } else {
       var index = body.search('<div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa">');
       var div = '<div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p>' + title + '</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due ' + date + '</div></div></div><div class="ubVkr pQCS0d"></div></div></div>';
      }
      var output = [body.slice(0, index), div, body.slice(index)].join('');
      if (document.location.href === 'https://classroom.google.com/u/0/a/not-turned-in/all' || document.location.href === 'https://classroom.google.com/a/not-turned-in/all') {
       document.getElementById('yDmH0d').innerHTML = output;
      }
    }
  });
}
//will run on page load
document.addEventListener('DOMContentLoaded', toDo);
*/
