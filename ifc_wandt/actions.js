//VERSION = "testing";
VERSION = "live";
READ_KEY = undefined;

data = null;

const DEFAULT_VIEW_ISS = {
  Aim: "Earth",
  Anchor: "ISS",
  Pitch: 0.15018101487939026,
  Position: [-67.43899536132812,-210.65560150146484,154.36618041992188],
  ReferenceFrame: "Root",
  Up: [0.8610343166397695,-0.4496842769092524,-0.2374951718862684],
  Yaw: 0.4313466027708896
}
const DEFAULT_VIEW_CUPOLA = {
  Aim: "Earth",
  Anchor: "ISSCupola",
  Pitch: 1.4679537851573818e-05,
  Position: [-0.610015869140625,42.21971893310547,-52.29005432128906],
  ReferenceFrame: "Root",
  Up: [-0.17402767176931486,-0.7671659578982908,-0.6173902837756269],
  Yaw: -3.6342431037475833e-06
}

// NOTE: Assumes 29/01/2024 13:15 - 13:35 GMT
// UPDATED: 24/01/2024 10:43
const DEFAULT_ISS_ROTATION = [0.01, -0.8, 0.225];

// Button: Prepare
/*
  - Turn off all trails
  - sync/set time, etc
  - enable ESRI World Imagery
  - disable ESRI VIIRS Combo
  - "corrected" ISS rotation
  - make sure ISS and cupola are OK
  - set idle behavior settings
*/
async function prepare() {
  // Check if asset is loaded
  if (await isAssetLoaded("ifcwandt.asset") === false) {
    return
  }

  try {
    // Hide stuff
    await openspace.setPropertyValueSingle("Dashboard.IsEnabled", false);
    await openspace.setPropertyValueSingle("RenderEngine.ShowLog", false);
    await openspace.setPropertyValueSingle("RenderEngine.ShowVersion", false);
    await openspace.setPropertyValueSingle("RenderEngine.ShowCamera", false);
    await openspace.setPropertyValueSingle("Modules.CefWebGui.Visible", false);

    // Turn off all trails
    await openspace.setPropertyValue("{planetTrail_solarSystem}.Renderable.Enabled", false);
    await openspace.setPropertyValue("{moonTrail_solarSystem}.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.ISS_trail.Renderable.Enabled", false);

    // Set earth layers
    await openspace.setPropertyValueSingle("Scene.Earth.Renderable.Layers.ColorLayers.ESRI_VIIRS_Combo.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.Earth.Renderable.Layers.ColorLayers.ESRI_World_Imagery.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.Earth.Renderable.Layers.ColorLayers.ESRI_World_Imagery.Fade", 1.0);

    // Turn off zoom limits
    await openspace.setPropertyValueSingle("NavigationHandler.OrbitalNavigator.LimitZoom.EnabledMinimumAllowedDistance", false);

    // Set ISS rotation vector
    let rotVec = DEFAULT_ISS_ROTATION;
    if (document.getElementById("rot-override").checked) {
      let x = parseFloat(document.getElementById("rotx").value);
      let y = parseFloat(document.getElementById("roty").value);
      let z = parseFloat(document.getElementById("rotz").value);
      if (x && y && z) {
        rotVec = [x,y,z];
      } else {
        logMessage("ISS rotation was NOT overridden - incorrect value(s)");
      }
    }
    await openspace.setPropertyValueSingle("Scene.ISS.Rotation.xAxisVector", rotVec);

    // Set time to NOW (UTC/GMT), set simulation speed and unpause 
    await setNowTime();
    await openspace.time.setDeltaTime(1);
    await play();

    // Set idle behavior settings
    await openspace.setPropertyValueSingle("NavigationHandler.OrbitalNavigator.IdleBehavior.IdleBehavior", 2.000000);
    await openspace.setPropertyValueSingle("NavigationHandler.OrbitalNavigator.IdleBehavior.SpeedFactor", 0.300000);
    await openspace.setPropertyValueSingle("NavigationHandler.OrbitalNavigator.IdleBehavior.DampenInterpolationTime", 0.000000);

    // Set initial ISS View
    setViewDefault();
    
    // Message
    logMessage("Completed", 3000, "lightgreen");
  } catch (e) {
    alert(`Something went wrong: ${e}`);
    return
  }
}


// Button: Set Cupola View
/*
  - fade out
  - scale iss to 100
  - disable bounding/interaction sphere for cupola
  - Disable ISS rendering
  - Enable Cupola rendering
  - set navigationState (the camera view)
  - set anchor/aim to Cupola/Earth
  - fade in
*/
async function setViewCupolaX(view = DEFAULT_VIEW_CUPOLA) {
  await OSFadeOut(2000);
  await delay(2000);

  await stopIdleBehavior();

  await openspace.setPropertyValueSingle("Scene.ISSCupola.Renderable.Enabled", true);
  await openspace.setPropertyValueSingle("Scene.ISSCupola.Renderable.Fade", 1.000000);
  await openspace.setPropertyValueSingle("Scene.ISS.Renderable.Enabled", false);

  await openspace.setPropertyValueSingle("Scene.ISS.Scale.Scale", 100.0);
  await openspace.setPropertyValueSingle("Scene.ISSCupola.BoundingSphere", 0.0);
  await openspace.setPropertyValueSingle("Scene.ISSCupola.InteractionSphere", 0.0);

  // SET NAVIGATION STATE HERE
  await openspace.navigation.setNavigationState(view);
  
  // Retarget anchor and aim
  let retargetValue = (await openspace.getPropertyValue("NavigationHandler.OrbitalNavigator.RetargetAnchorInterpolationTime"))[1];
  await openspace.setPropertyValueSingle("NavigationHandler.OrbitalNavigator.RetargetAnchorInterpolationTime", 0.100000)
  await openspace.setPropertyValueSingle("NavigationHandler.OrbitalNavigator.RetargetAim", null);
  await openspace.setPropertyValueSingle("NavigationHandler.OrbitalNavigator.Anchor", 'ISSCupola');
  await openspace.setPropertyValueSingle("NavigationHandler.OrbitalNavigator.Aim", 'Earth');
  await openspace.setPropertyValueSingle("NavigationHandler.OrbitalNavigator.RetargetAnchorInterpolationTime", retargetValue);

  await delay(500);
  await OSFadeIn(2000);
}

async function setViewCupola1() {
  await setViewCupolaX(DEFAULT_VIEW_CUPOLA);
}

async function setViewCupola2() {
  await setViewCupolaX({
    Aim: "Earth",
    Anchor: "ISSCupola",
    Pitch: 0.056259879758252314,
    Position: [42.67353820800781,-45.76618194580078,24.5262451171875],
    ReferenceFrame: "Root",
    Up: [-0.14772938232406194,-0.5706479379076281,-0.807797598758453],
    Yaw: 0.42438210121052217
  });
}


// Reset to initial
/*
  - scale iss to 1
  - Enable ISS rendering
  - Disable Cupola rendering
  - set navigationState (the camera view) to initial
  - set achor earth
  - enable all trails
  - set time to now - 1day
  - Disabled World Imagery
  - Enable VIIRS
*/
async function reset() {
  // TODO
}


// Button: Set ISS View #{0, 1, 2, ..., n}
/*
  - fade out
  - scale iss to 1
  - Enable ISS rendering
  - Disable Cupola rendering
  - set navigationState (the camera view)
  - set anchor/aim to ISS/Earth
  - fade in
*/
async function setIssViewX(view = DEFAULT_VIEW_ISS, shouldIdle = false) {
  await OSFadeOut(2000);
  await delay(2000);

  await stopIdleBehavior();

  await setDefaultTime();

  await openspace.setPropertyValueSingle("Scene.ISSCupola.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.ISS.Renderable.Enabled", true);
  await openspace.setPropertyValueSingle("Scene.ISS.Renderable.Fade", 1.0);

  await openspace.setPropertyValueSingle("Scene.ISS.Scale.Scale", 1.0);
  await openspace.setPropertyValueSingle("Scene.ISSCupola.BoundingSphere", 0.0);
  await openspace.setPropertyValueSingle("Scene.ISSCupola.InteractionSphere", 0.0);

  await openspace.navigation.setNavigationState(view);

  await setNowTime();

  if(shouldIdle) {
    await startIdleBehavior();
  }

  await delay(500);
  await OSFadeIn(2000);
}

// Default view 
async function setViewDefault() {
  await setIssViewX(DEFAULT_VIEW_ISS);
}

async function setViewIss1() {
  await setIssViewX({
    Aim: "Earth",
    Anchor: "ISS",
    Pitch: 0.2977406249963338,
    Position: [3.8730316162109375,-66.58843231201172,81.36375427246094],
    ReferenceFrame: "Root",
    Up: [0.9005573176815771,-0.314439885303448,-0.3002067222773628],
    Yaw: 0.013224683936702775
  });
}

async function setViewIss2() {
  await setIssViewX({
    Aim: "Earth",
    Anchor: "ISS",
    Pitch: -0.2639319929763757,
    Position: [237.8382568359375,-59.88264465332031,-74.21725463867188],
    ReferenceFrame: "Root",
    Up: [-0.054696161418966494,0.6841479224313496,-0.727289454178251],
    Yaw: -0.021379210848998038
  });
}

async function setViewIss3() {
  await setIssViewX(DEFAULT_VIEW_ISS, true);
}

async function setViewIss4() {
  await setIssViewX({
    Aim: "Earth",
    Anchor: "ISS",
    Pitch: 0.29774386644308404,
    Position: [7.22137451171875,-156.7555923461914,185.05685424804688],
    ReferenceFrame: "Root", 
    Up: [0.9090562728236633,-0.2997726485055965,-0.2894011956573259],
    Yaw: 0.013222002739655948
  }, true);
}

async function setViewIss5() {
  await setIssViewX({
    Aim: "Earth",
    Anchor: "ISS",
    Pitch: -0.3142775360385548,
    Position: [-49.668212890625,-129.46729278564453,159.563232421875],
    ReferenceFrame: "Root",
    Up: [-0.8937417073208177,0.4414005634219824,0.07994562655972115],
    Yaw: -0.058203295061939574
  });
}
async function setViewIss5b() {
  await setIssViewX({
    Aim: "Earth",
    Anchor: "ISS",
    Pitch: -0.27607411793481784,
    Position: [-16.999267578125,-141.39923858642578,156.22555541992188],
    ReferenceFrame: "Root",
    Up: [-0.9120993039214057,0.34839839818267426,0.21608659359116714],
    Yaw: -0.05753359944983886
  });
}

async function setViewIss6() {
  await setIssViewX({
    Aim: "Earth",
    Anchor: "ISS",
    Pitch: -0.3142775360385548,
    Position: [-49.668212890625,-129.46729278564453,159.563232421875],
    ReferenceFrame: "Root",
    Up: [-0.8937417073208177,0.4414005634219824,0.07994562655972115],
    Yaw: -0.058203295061939574
  }, true);
}

async function setViewIss7() {
  await setIssViewX({
    Aim: "Earth",
    Anchor: "ISS",
    Pitch: -0.31427771038708596,
    Position: [-83.00234985351562,-212.1457748413086,209.5004119873047],
    ReferenceFrame: "Root",
    Up: [-0.9192342062327615,0.39231900841232914,0.03307974803399],
    Yaw: -0.05820168968375226
  }, true);
}

async function setViewIss8() {
  await setIssViewX({
    Aim: "Earth",
    Anchor: "ISSCupola",
    Pitch: -0.30510520630196725,
    Position: [-8.639572143554688,-8.550308227539062,13.857452392578125],
    ReferenceFrame: "Root",
    Up: [0.7554685081481468,-0.6515424883554592,0.06899071723058059],
    Yaw: 0.303879809882952
  });
}

async function hideBlackout() {
  let fade = (await openspace.getPropertyValue("ScreenSpace.blackoutbrowser.Fade"))[1];
  let enabled = (await openspace.getPropertyValue("ScreenSpace.blackoutbrowser.Enabled"))[1];
  if (enabled) {
    if (fade > 0.5) {
      await openspace.setPropertyValueSingle(
        "ScreenSpace.blackoutbrowser.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Enabled", false)'
      );
    } else {
      await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Fade", 1, 2);
    }
  } else {
    await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Fade", 0);
    await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Enabled", true);
    await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Fade", 1, 2);
  }
  
  
}

// =========================


async function OSFadeOut(ms = 1000) {
  await openspace.setPropertyValueSingle("RenderEngine.BlackoutFactor", 0.0, 2);
}

async function OSFadeIn(ms = 1000) {
  await openspace.setPropertyValueSingle("RenderEngine.BlackoutFactor", 1.0, ms / 1000);
}

async function setDefaultTime() {
  await openspace.time.setTime("2024-Jan-29 13:15:00");
}

async function setNowTime() {
  let now = (await openspace.time.currentWallTime())[1];
  await openspace.time.setTime(now);
}

async function play() {
  await openspace.time.setPause(false);
}

async function pause() {
  await openspace.time.setPause(true);
}

async function stopIdleBehavior() {
  await openspace.setPropertyValueSingle("NavigationHandler.OrbitalNavigator.IdleBehavior.ApplyIdleBehavior", false);
}

async function startIdleBehavior() {
  await openspace.setPropertyValueSingle("NavigationHandler.OrbitalNavigator.IdleBehavior.ApplyIdleBehavior", true);
}

async function isAssetLoaded(asset, show = true) {
  let loadedAssets = await openspace.asset.allAssets();
  let filtered = Object.values(loadedAssets[1]).filter( v => v.split("\\").pop() == asset);
  if (filtered.length == 0) {
    if(show) {
      alert(`Missing asset: ${asset}`);
    }
    return false;
  }

  return true;
}

// ==========================


function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

function checkedFunc() {
  let checked = document.getElementById("rot-override").checked;

  if (checked) {
    document.getElementById("rotx").disabled = false;
    document.getElementById("roty").disabled = false;
    document.getElementById("rotz").disabled = false;
  } else {
    document.getElementById("rotx").disabled = true;
    document.getElementById("roty").disabled = true;
    document.getElementById("rotz").disabled = true;
  }
} 

async function validateServerCommuinication() {
  const url = `https://eu-central-1.aws.data.mongodb-api.com/app/data-nqqkk/endpoint/ping`;
  const options = {method: 'GET'};

  await fetch(url, options).then(async function(response) {
      if (!response.ok) {
          throw new Error("Not 2xx response", {cause: response});
      } else {
        if (await isAssetLoaded("blackoutbrowser.asset", false) === false) {
          hideBlackoutDiv("Add blackoutbrowser.asset and reload page if you want controls");
        }
      }
  }).catch(function(err) {
    let msg = "Cannot connect to blackout database";
    hideBlackoutDiv(msg);
  });
}

function hideBlackoutDiv(msg) {
  document.getElementById("blackoutDiv").innerHTML = `<h2 style="color: orange;">${msg}</h2>`;
}

async function enableBlackoutControls() {
  // Check if asset is loaded
  let loadedAssets = await openspace.asset.allAssets();
  let filtered = Object.values(loadedAssets[1]).filter( v => v.split("\\").pop() == "blackoutbrowser.asset");
  if (filtered.length == 0) {
    alert("Missing asset: blackoutbrowser.asset")
    return;
  }
  

  if (READ_KEY === undefined) {
    // Get readkey
    const readURL = `https://eu-central-1.aws.data.mongodb-api.com/app/data-nqqkk/endpoint/getreadkey`;
    const readOptions = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        site: document.getElementById("siteinput").value.toLowerCase(),
        passkey: btoa(document.getElementById("passinput").value)
      })
    }

    try {
      const response = await fetch(readURL, readOptions);
      const parsedResponse = await response.json();
      const numRes = Number(parsedResponse);
      if (isNaN(numRes) === true) { // We got key back and not error code
        READ_KEY = parsedResponse;
      } else {
        if (numRes === 0) {
          logMessage("Incorrect site or password");
        } else if (numRes === -1) {
          logMessage("Too many incorrect attempts, try again later...");
        }
        else {
          logMessage("Something went wrong, try again later...");
        }
        return
      }
    } catch(e)  {
      console.error(e)
    }
  }

  const url = `https://eu-central-1.aws.data.mongodb-api.com/app/data-nqqkk/endpoint/read?readkey=${READ_KEY}`;
  const options = {method: 'GET'};

  let parsedResponse = undefined;
  try {
    const response = await fetch(url, options);
    parsedResponse = JSON.parse((await response.json()));
  } catch (error) {
    console.error(error);
  }

  if(Object.keys(parsedResponse).length > 0) {
    data = parsedResponse;
    document.getElementById("siteinput").disabled = true;
    document.getElementById("passinput").disabled = true;
    await addBlackoutControls();
    await overrideBlackoutScalePos();
    document.getElementById("blackoutbox").style.display = "block";
    document.getElementById("goButton").disabled = true;
    document.getElementById("goButton").style.display = "none";
  }
}

async function addBlackoutControls() {

  let names = [];
  let points = [];
  Object.entries(data.points).map(v => {
    names.push(v[0]);
    points.push(v[1]);
  });

  // Create all elements
  const ul = document.createElement("ul");
  ul.setAttribute("id", "blackoutcontrolslist");
  points.forEach( (p,idx)=> {
    const id = names[idx].split("Corner")[0].slice(1);
    const li = document.createElement("li");
    const inp1 = document.createElement("input");
    const inp2 = document.createElement("input");
    const lb = document.createElement("label");

    li.setAttribute("class", "blackoutcontrolslist");
    inp1.setAttribute("type", "number");
    inp1.setAttribute("id", `p${id}x`);
    inp1.setAttribute("class", "blackoutcontrolsboxes");
    inp1.setAttribute("onfocusout", "checkEmpty(this, 0.0, 1.0, 0.0)");
    inp2.setAttribute("type", "number");
    inp2.setAttribute("id", `p${id}y`);
    inp2.setAttribute("class", "blackoutcontrolsboxes");
    inp2.setAttribute("onfocusout", "checkEmpty(this, 0.0, 1.0, 0.0)");
    lb.setAttribute("style", "display: inline-block; width: 64px;");

    let corner = names[idx].split("Corner")[1];
    lb.innerText = `p${id}${(corner) ? ` ${corner}` : ""}: `;
    inp1.value = p.x;
    inp2.value = p.y;

    li.appendChild(lb);
    li.appendChild(inp1);
    li.appendChild(inp2);
    ul.appendChild(li);    
  });
  document.getElementById("blackoutleft").appendChild(ul);

  const ulRight = document.createElement("ul");
  const liScale = document.createElement("li");
  const inpScale = document.createElement("input");
  const lbScale = document.createElement("label");

  lbScale.setAttribute("style", "display: inline-block; width: 64px;");
  lbScale.innerText = "Scale: ";

  inpScale.setAttribute("type", "number");
  inpScale.setAttribute("id", "inputscale");
  inpScale.setAttribute("onfocusout", "checkEmpty(this, 0.0, 2.0, 0.25)");
  inpScale.setAttribute("style", "width: 48px; height: 28px;");
  inpScale.value = data.scale.toFixed(2);

  const lbPosition = document.createElement("label");
  const liPosition = document.createElement("li");
  const inpPosRa = document.createElement("input");
  const inpPosAz = document.createElement("input");
  const inpPosEl = document.createElement("input");

  lbPosition.setAttribute("style", "display: inline-block; width: 64px;");
  lbPosition.innerText = "Position: ";

  inpPosRa.setAttribute("type", "number");
  inpPosAz.setAttribute("type", "number");
  inpPosEl.setAttribute("type", "number");
  inpPosRa.setAttribute("id", "inputPosRa");
  inpPosAz.setAttribute("id", "inputPosAz");
  inpPosEl.setAttribute("id", "inputPosEl");
  inpPosRa.setAttribute("onfocusout", "checkEmpty(this, 0.0, 10.0, 2.0)");
  inpPosAz.setAttribute("onfocusout", "checkEmpty(this, -3.14, 3.14, 0.0)");
  inpPosEl.setAttribute("onfocusout", "checkEmpty(this, -1.57, 1.57, 0.0)");
  inpPosRa.setAttribute("style", "width: 48px; height: 28px;");
  inpPosAz.setAttribute("style", "width: 48px; height: 28px;");
  inpPosEl.setAttribute("style", "width: 48px; height: 28px;");
  
  inpPosRa.value = data.position[0].toFixed(2);
  inpPosAz.value = data.position[1].toFixed(2);
  inpPosEl.value = data.position[2].toFixed(2);

  liScale.appendChild(lbScale);
  liScale.appendChild(inpScale);
  liPosition.appendChild(lbPosition);
  liPosition.appendChild(inpPosRa);
  liPosition.appendChild(inpPosAz);
  liPosition.appendChild(inpPosEl);
  
  ulRight.appendChild(liScale);
  ulRight.appendChild(liPosition);

  document.getElementById("blackoutright").appendChild(ulRight);

  // Button
  let btnsave = document.createElement("button");
  btnsave.setAttribute("onclick", "setBlackoutValues()");
  btnsave.setAttribute("id", "save");
  btnsave.setAttribute("style", "width: 100%;");
  btnsave.innerText = "save all"
  document.getElementById("blackoutbox").appendChild(btnsave);

  let btnoverride = document.createElement("button");
  btnoverride.setAttribute("onclick", "overrideBlackoutScalePos()");
  btnoverride.setAttribute("id", "override");
  btnoverride.setAttribute("style", "width: 100%;");
  btnoverride.innerText = "set"
  document.getElementById("blackoutright").appendChild(btnoverride);

}

function checkEmpty(that, min, max, def) {
  if (that.value === "") {
    that.value = def;
    return
  }
  that.value = clamp(that.value, min, max);
}

async function setBlackoutValues(){
  let elems = document.getElementsByClassName("blackoutcontrolslist");
  let bodyData = {};
  for (let el of elems) {
    let px = Number(el.children[1].value);
    let py = Number(el.children[2].value);
    
    let text = el.children[0].innerText.split(":")[0];
    let pval = text.split(" ") [0];
    let corner = text.split(" ") [1];

    let propertyName = pval;
    if (corner) {
      propertyName += `Corner${corner}`;
    }

    bodyData[propertyName] = {x: px, y: py};
  }

  // Get current scale and position from OpenSpace
  const scale = (await openspace.getPropertyValue("ScreenSpace.blackoutbrowser.Scale"))[1];
  const position = (await openspace.getPropertyValue("ScreenSpace.blackoutbrowser.RadiusAzimuthElevation"))[1];
  
  // PUT Data
  let site = (document.getElementById("siteinput").value).toLowerCase();
  const url = `https://eu-central-1.aws.data.mongodb-api.com/app/data-nqqkk/endpoint/update`;
  const options = {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      site: site,
      passkey: btoa(document.getElementById("passinput").value),
      scale: scale,
      position: position,
      points: bodyData
    })
  };

  try {
    const response = await fetch(url, options);

    let couldUpdate = await response.json();
    if (couldUpdate === 1) {
      // Update OpenSpace
      await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Scale", scale);
      await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.RadiusAzimuthElevation", position);
      
      // Update GUI
      document.getElementById("inputscale").value = scale.toFixed(2);
      document.getElementById("inputPosRa").value = position[0].toFixed(2);
      document.getElementById("inputPosAz").value = position[1].toFixed(2);
      document.getElementById("inputPosEl").value = position[2].toFixed(2);

      // log to screen
      logMessage("Success", 2000, "lightgreen");
    }
    return;
  } catch (error) {
    console.error(error);
  }
}

async function overrideBlackoutScalePos() {
  const scale = Number(document.getElementById("inputscale").value);
  const position = [
    Number(document.getElementById("inputPosRa").value),
    Number(document.getElementById("inputPosAz").value),
    Number(document.getElementById("inputPosEl").value)
  ]

  await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Scale", scale);
  await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.RadiusAzimuthElevation", position);
}

function checkVersion() {
  let t = document.getElementById("version").innerText
  if (t !== VERSION) {
    alert("Please refresh using CTRL+F5 to get latest version");
    return false;
  } else {
    console.log("Up-To-Date");
    return true;
  }
}