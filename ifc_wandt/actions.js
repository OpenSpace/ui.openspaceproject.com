VERSION = "testing";
//VERSION = "live";


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
const DEFAULT_ISS_ROTATION = [0.01, -0.8, 0.385];

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
  let loadedAssets = await openspace.asset.allAssets();
  let filtered = Object.values(loadedAssets[1]).filter( v => v.split("\\").pop() == "cupola.asset");
  
  if (filtered.length == 0) {
    alert("Please load 'Cupola.asset' and try again...")
    return;
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
    
  } catch (e) {
    alert(`Something went wrong: ${e}`);
    return
  }

  alert("Completed");
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

async function enableBlackoutControls() {
  let checked = document.getElementById("enableblackoutcontrols").checked;
  if (checked) {
    document.getElementById("blackoutcontrols").style.display = "block";
    await addBlackoutControls();
  } else {
    document.getElementById("blackoutcontrols").style.display = "none";
    document.getElementById("blackoutcontrols").innerHTML = "";
  }
}

async function addBlackoutControls() {
  // Get all controls
  let pidArray = [];
  let cornerIds = {
    TL: 0,
    TR: 0,
    BR: 0,
    BL: 0
  };

  let names = (await openspace.getProperty("UserProperties.p*"))[1];
  for (let idx in names) {
    let corner = "";
    let name = names[idx].split(".")[1];
    if (name.includes("Corner")) {
      corner = name.split("Corner")[1];
      name = name.split("Corner")[0];
    }
    let pid = Number(name.slice(1));
    pidArray.push(pid);
    
    if (corner !== "") {
      cornerIds[corner] = pid;
    }
  }
  pidArray.sort( (a,b)=> {return a-b});

  // Get all points and put in correct order
  let points = [];
  for (let id of pidArray) {
    let propertyName;
    if(Object.values(cornerIds).includes(id)) {
      let vals = Object.values(cornerIds);
      let idx = vals.indexOf(id);
      let whichCorner = Object.entries(cornerIds)[idx][0];
      propertyName = `UserProperties.p${id}Corner${whichCorner}`;
    } else {
      propertyName = `UserProperties.p${id}`;
    }

    let point = (await openspace.getPropertyValue(propertyName));
    let x = clamp(Number(point[1][0]), 0.0, 1.0);
    let y = clamp(Number(point[1][1]), 0.0, 1.0);
    points.push({
      name: propertyName.replace("UserProperties.", ""), 
      x: x, 
      y: y
    });
  }


  // Create all elements
  const ul = document.createElement("ul");
  ul.setAttribute("id", "blackoutcontrolslist");
  points.forEach( (p,idx)=> {
    const id = pidArray[idx];
    const li = document.createElement("li");
    const inp1 = document.createElement("input");
    const inp2 = document.createElement("input");
    const lb = document.createElement("label");

    li.setAttribute("class", "blackoutcontrolslist");
    inp1.setAttribute("type", "number");
    inp1.setAttribute("id", `p${id}x`);
    inp1.setAttribute("class", "blackoutcontrolsboxes");
    inp1.setAttribute("onfocusout", "checkEmpty(this)");
    inp2.setAttribute("type", "number");
    inp2.setAttribute("id", `p${id}y`);
    inp2.setAttribute("class", "blackoutcontrolsboxes");
    inp2.setAttribute("onfocusout", "checkEmpty(this)");
    lb.setAttribute("style", "display: inline-block; width: 64px;");

    let pval = p.name.split("Corner")[0];
    let corner = p.name.split("Corner")[1];
    lb.innerText = `${pval}${(corner) ? ` ${corner}` : ""}: `;
    inp1.value = p.x;
    inp2.value = p.y;

    li.appendChild(lb);
    li.appendChild(inp1);
    li.appendChild(inp2);
    ul.appendChild(li);    
  });

  document.getElementById("blackoutcontrols").appendChild(ul);

  // Button
  let btn = document.createElement("button");
  btn.setAttribute("onclick", "setBlackoutValues()");
  btn.setAttribute("id", "save");
  btn.innerText = "save"
  
  document.getElementById("blackoutcontrols").appendChild(btn);
}

function checkEmpty(that) {
  if (that.value === "") {
    that.value = 0.0;
    return
  }
  that.value = clamp(that.value, 0.0, 1.0);
}

async function setBlackoutValues(){
  let elems = document.getElementsByClassName("blackoutcontrolslist");
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

    await openspace.setPropertyValue(`UserProperties.${propertyName}`, [px, py]);
  }
  await openspace.setPropertyValue("UserProperties.needsUpdate", true);
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