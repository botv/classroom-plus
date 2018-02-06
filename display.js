var newDiv;

window.addEventListener('load', function () {
  toDo()
});

function toDo() {
  var body = document.getElementsByClassName("ktcYN kdAl3b");
  body[0].innerHTML = "Hello";
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
        if (body[0].search('<div><div class="T0FFIe rwnykc">AssignMe') === -1) {
          var index = body.search('<div class="T0FFIe rwnykc">Due ');
          var div = '<div><div class="T0FFIe rwnykc">AssignMe</div><div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p class="onkcGd m8aQlb">' + title + '</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due ' + date + '</div></div></div><div class="ubVkr pQCS0d"></div></div></div></div>';
        } else {
          var index = body.search('<div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa">');
          var div = '<div class="F0D56 DShyMc-NTA3MDM0NDY2NFpa"><div class="jjooHc yxp05b-Wvd9Cc"><div class="gWn3p"><div class="aCP5yb"><p>' + title + '</p></div><div class="h2eLLe Ya48ab"><a class="onkcGd BcZkCd">AssignMe</a><div class="ipPCc UZ2pse IMvYId">—&nbsp;Due ' + date + '</div></div></div><div class="ubVkr pQCS0d"></div></div></div>';
        }
        var output = [body.slice(0, index), div, body.slice(index)].join('');
        // console.log(output)
        // document.getElementById('yDmH0d').innerHTML = output;
      }
    }
  });
}

function addElement () {
  console.log("WORKING")
  // create a new div element
  // and give it some content
  newDiv = document.createElement("div");
  newDiv.id = "assignme_container"
  newDiv.class = ""
  // var newContent = document.createTextNode("Hi there and greetings!");
  // newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.appendChild(newDiv);
}
// function start() {
//   // 2. Initialize the JavaScript client library.
//   console.log("about to init")
//   gapi.client.init({
//     'apiKey': 'AIzaSyD5EYkhFDSYDuUDcBn5y2RcEHqCuLs2IHo',
//     // Your API key will be automatically added to the Discovery Document URLs.
//     'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
//     // clientId and scope are optional if auth is not required.
//     'clientId': '901411168313-lqh9v7lslfle66p1nu143un5he3g35kv.apps.googleusercontent.com',
//     'scope': 'profile',
//   }).then(function() {
//     // 3. Initialize and make the API request.
//     console.log("Hey we got here")
//     return gapi.client.people.people.get({
//       'resourceName': 'people/me',
//       'requestMask.includeField': 'person.names'
//     });
//   }).then(function(response) {
//     console.log(response.result);
//   }, function(reason) {
//     console.log('Error: ' + reason.result.error.message);
//   });
// };

//
// function makeApiCall() {
//         // Make an API call to the People API, and print the user's given name.
//         gapi.client.people.people.get({
//           'resourceName': 'people/me',
//           'requestMask.includeField': 'person.names'
//         }).then(function(response) {
//           console.log('Hello, ' + response.result.names[0].givenName);
//         }, function(reason) {
//           console.log('Error: ' + reason.result.error.message);
//         });
//       }

/*
function handleClientLoad() {
        // Loads the client library and the auth2 library together for efficiency.
        // Loading the auth2 library is optional here since `gapi.client.init` function will load
        // it if not already loaded. Loading it upfront can save one network request.
        console.log("Gapi init?")
        gapi.load('client:auth2', {
          callback: function() {
            console.log("Finish")
          }, onerror: function(err) {
            console.log("ERROR", err)
          }, timeout: 3000, ontimeout: function() {
            console.log("Timeout")
          }
        });
        console.log("Gapi loaded")
      }

      function initClient() {
        // Initialize the client with API key and People API, and initialize OAuth with an
        // OAuth 2.0 client ID and scopes (space delimited string) to request access.
        console.log("initClient running")
        gapi.client.init({
            apiKey: 'AIzaSyD5EYkhFDSYDuUDcBn5y2RcEHqCuLs2IHo',
            discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
            clientId: '901411168313-han32ole766ge0o58htuu881e0t3nkft.apps.googleusercontent.com',
            scope: 'profile'
        }).then(function () {
          // Listen for sign-in state changes.
          console.log("trYING IT")
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          console.log("done")
          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
      }

      function updateSigninStatus(isSignedIn) {
        // When signin status changes, this function is called.
        // If the signin status is changed to signedIn, we make an API call.
        if (isSignedIn) {
          makeApiCall();
        }
      }

      function handleSignInClick(event) {
        // Ideally the button should only show up after gapi.client.init finishes, so that this
        // handler won't be called before OAuth is initialized.
        gapi.auth2.getAuthInstance().signIn();
      }

      function handleSignOutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

      function makeApiCall() {
        // Make an API call to the People API, and print the user's given name.
        gapi.client.people.people.get({
          'resourceName': 'people/me',
          'requestMask.includeField': 'person.names'
        }).then(function(response) {
          console.log('Hello, ' + response.result.names[0].givenName);
        }, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });
      }





console.log("Here")
console.log(gapi)
// gapi.load('client:auth2', handleClientLoad);
handleClientLoad()
*/
