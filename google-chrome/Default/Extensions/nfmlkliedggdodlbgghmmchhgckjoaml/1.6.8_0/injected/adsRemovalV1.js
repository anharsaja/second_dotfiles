console.log("interception");

var currentTracks = [];
var removedAdsList = [];
var tamperedStatesIds = [];
var deviceId = "";

var originalFetch = window.fetch;
var isFetchInterceptionWorking = false;
var isWebScoketInterceptionWorking = false;
var isSimulatingStateChnage = false;
//var didShowMultiDeviceWarning = false;
var didShowInterceptionWarning = false;
var didCheckForInterception = false;

var accessToken = "";

var MAX_AD_CONTENT_IDS = 10;

firstinitalize();

async function firstinitalize() {
  var getTokenUrl =
    "https://open.spotify.com/get_access_token?reason=transport&productType=web_player";
  // get access token
  var result = await fetch(getTokenUrl, { credentials: "same-origin" });
  var resultJson = await result.json();
  accessToken = resultJson["accessToken"];
}
/*
async function initalize() {
  var getTokenUrl =
    "https://open.spotify.com/get_access_token?reason=transport&productType=web_player";

  // get access token
  var result = await fetch(getTokenUrl, { credentials: "same-origin" });
  var resultJson = await result.json();
  accessToken = resultJson["accessToken"];
}
*/
//
// Replace the default fetch functionality with custom one
//
window.fetch = function (url, init) {
  if (url != undefined && url.includes("/state")) {
    return originalFetch
      .call(window, url, init)
      .then(function (response) {
        onFetchResponseReceived(response);
        return response;
      })
      .catch((err) => {
        console.error("Error occured", err);
        fireAlertForInterception();
      });
  } else {
    var fetchResult = originalFetch.call(window, url, init);
    return fetchResult;
  }
};

// Intercept Web sockets and detect the state socket
wsHook.after = function (messageEvent, url) {
  return new Promise(async function (resolve, reject) {
    try {
      var data = JSON.parse(messageEvent.data);
      if (data.payloads == undefined) {
        resolve(messageEvent);
        return;
      }
      for (var i = 0; i < data.payloads.length; i++) {
        var payload = data.payloads[i];
        if (payload.type == "replace_state") {
          var stateRef = payload["state_ref"];
          if (stateRef != null) {
            fetchContentIdsAndSetAttribute(payload["state_machine"], "ws");
            data.payloads[i] = payload;
            isWebScoketInterceptionWorking = true;
            console.log("Interception is working");
          }
          if (isSimulatingStateChnage) {
            return new MessageEvent(messageEvent.type, { data: "{}" });
          }
        } else if (payload.cluster != undefined) {
          if (payload.update_reason == "DEVICE_STATE_CHANGED") {
            if (deviceId != payload.cluster.active_device_id) {
              // showMultiDeviceWarning(); //TODO: Check this logic again
            }
          }
        }
      }
      messageEvent.data = JSON.stringify(data);
      resolve(messageEvent);
    } catch (err) {
      console.log("DEBUG_LOG: Error occured", err);
      fireAlertForInterception();
    }
  });
};
/*
This program is an IP of ImpactEngine Digital LLP. Any direct/indirect IP theft will attract strong legal actions.
*/
function fetchContentIdsAndSetAttribute(stateMachine, source = "fetch") {
  var tracks = stateMachine["tracks"];
  var adContentIds = [];
  for (let i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    if (track["content_type"] === "AD") {
      var trackManifest = track["manifest"];
      if (trackManifest["file_ids_mp3"]) {
        var fileIds = trackManifest["file_ids_mp3"].map(
          (file) => file["file_id"]
        );
        adContentIds = adContentIds.concat(fileIds);
        console.log("DEBUG_LOG: Ad content Ids", adContentIds);
      }
    }
  }
  var contentIdAttr = document.body.getAttribute("ad_content_id");
  if (
    adContentIds.length > 0 &&
    contentIdAttr !== JSON.stringify(adContentIds)
  ) {
    var previousAdContentIds = JSON.parse(contentIdAttr);
    if (previousAdContentIds !== null) {
      adContentIds = Array.from(
        new Set(previousAdContentIds.concat(adContentIds))
      );
    }
    if (adContentIds.length > MAX_AD_CONTENT_IDS) {
      adContentIds = adContentIds.slice(
        MAX_AD_CONTENT_IDS - adContentIds.length
      );
    }
    document.body.setAttribute("ad_content_id", JSON.stringify(adContentIds));
    console.log(
      `DEBUG_LOG: successfully setted ad_content_ids: ${source}`,
      JSON.stringify(adContentIds)
    );
  }
}

function onFetchResponseReceived(response) {
  var copyResponse = response.clone();
  copyResponse.json().then((data) => {
    var stateMachine = data["state_machine"];
    if (stateMachine) {
      fetchContentIdsAndSetAttribute(stateMachine);
    }
  });
}

function fireAlertForInterception() {
  Swal.fire({
    title: "Oops...",
    html: "Blockify has detected that interception is not fully working. Please try refreshing this page, or, if the problem presists, writing to us at hi@getblockify.com",
    icon: "error",
    width: 600,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "OK",
    heightAuto: false,
  });
}
/*
function showMultiDeviceWarning() {
  if (!didShowMultiDeviceWarning) {
    Swal.fire({
      title: "A Note from Blockify:",
      html: "Please make sure that Spotify (along with Blockify) is running in no more than just one tab & device. Blockify can't control other playing devices (like mobile phones), so the ads will not get removed unless the audio plays from this single tab only.",
      icon: "warning",
      width: 500,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "OK",
      heightAuto: false,
    });

    didShowMultiDeviceWarning = true;
  }
}
*/
window.onerror = function (message, source, line, column, error) {
  // Custom error handling code
  console.error("DEBUG_LOG::An error occurred:", error);
  return true;
};