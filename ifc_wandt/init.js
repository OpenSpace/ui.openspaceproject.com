//variable for js libarary
var openspace = null;

const delay = ms => new Promise(res => setTimeout(res, ms));

//helper function to connect to opensapce
var connectToOpenSpace = () => {
  //setup the api params
  var host = document.getElementById('ipaddress').value;
  var api = window.openspaceApi(host, 4682);
  //notify users on disconnect
  api.onDisconnect(() => {
    console.log("disconnected");
    document.getElementById('container').className = "disconnected";
    document.getElementById('connection-status').style.opacity = 1;
    var disconnectedString = "Connect to OpenSpace: ";
    disconnectedString += '<input id="ipaddress" type=text value="127.0.0.1" /> ';
    disconnectedString += '<button onClick="connectToOpenSpace();">Connect</button>';
    document.getElementById('connection-status').innerHTML = disconnectedString;
    openspace = null;
    document.getElementById("blocker").classList.add("blockit");
  });
  //notify users and map buttons when connected
  api.onConnect(async () => {
    try {
      if (!checkVersion()) {
        throw new Error("Mismatch version between JS and HTML");
      }
      document.getElementById('container').className = "connected";
      document.getElementById('connection-status').innerHTML = "";
      openspace = await api.library();
      console.log('connected');
      // mapButtons(openspace);

      document.getElementById("rotx").value = DEFAULT_ISS_ROTATION[0];
      document.getElementById("roty").value = DEFAULT_ISS_ROTATION[1];
      document.getElementById("rotz").value = DEFAULT_ISS_ROTATION[2];

      document.getElementById("blocker").classList.remove("blockit");
    } catch (e) {
      console.log('OpenSpace library could not be loaded: Error: \n', e);
      return;
    }


  })
  //connect
  api.connect();
};

function logMessage(message) {
  console.log(message);
  document.getElementById('connection-status').innerHTML = message;
  document.getElementById("connection-status").style.transition = "all 0s";
  document.getElementById("connection-status").style.opacity = 1;
  document.getElementById("connection-status").style.color = "#ff0000"
  document.getElementById("connection-status").style.fontSize = "16pt";
  fadeOut();
}

// function that fades out the log div after 5 seconds
function fadeOut() {
  setTimeout(function() {
    var fade = document.getElementById("connection-status");
    var timerId = setInterval(function() {
      var opacity = fade.style.opacity;
      if (opacity == 0.0) {
        clearInterval(timerId);
        document.getElementById("connection-status").style.color = null;
        document.getElementById("connection-status").style.transition = null;
        document.getElementById("connection-status").style.fontWeight = null;
      } else {
        fade.style.opacity = opacity - 0.05;
      }
    }, 100);
  }, 5000);
}