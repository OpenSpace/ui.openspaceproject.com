// Olympus Mons
const olympusMonsGeo = {
  lat: 18.65, lon: 226.2, height: 2e6
};

const olympusMonsNavState = {
  Anchor: "Mars",   ReferenceFrame: "Mars",
  Position: [-2583495, -2316231, 824980.3125],
  Up: [0.5749897956848145, -0.3840242326259613, 0.7224348187446594],
  Pitch: 1.0032713413238525, Yaw: -0.012328346259891987
};

function goToOlympusMonsTilted(openspace) {
  var spec = {
    Instructions: [{ Type: "NavigationState", NavigationState: olympusMonsNavState }]
  }
  stopOrbiting(openspace);
  chooseZoomOutOverviewCurveType(openspace);
  openspace.time.setPause(true);
  openspace.autonavigation.generatePath(spec);
}

function goToOlympusMonsAbove(openspace) {
  stopOrbiting(openspace);
  chooseZoomOutOverviewCurveType(openspace);
  openspace.time.setPause(true);
  openspace.autonavigation.goToGeo(
    'Mars', 
    olympusMonsGeo.lat,
    olympusMonsGeo.lon,
    olympusMonsGeo.height
  );
}

// Valles Marineris
const vallesMarinerisGeo = {
  lat: -13.9, lon: -59.2, height: 5e6
};

const vallesMarinerisNavState =  {
  Anchor: "Mars", ReferenceFrame: "Mars",
  Position: [1153974.125, -3147836.75, -764025.4375],
  Up: [0.10838311165571213, -0.19677796959877014, 0.9744390845298767],
  Pitch: 1.1448750495910645, Yaw: -0.07529527693986893
}

function goToVallesMarinerisTilted(openspace) {
  var spec = {
    Instructions: [
      {
        Type: "NavigationState",
        NavigationState: vallesMarinerisNavState,
        Duration: 20
      }
    ]
  }
  startOrbiting(openspace);
  chooseZoomOutOverviewCurveType(openspace);
  openspace.time.setPause(true);
  openspace.autonavigation.generatePath(spec);
}

function goToVallesMarinerisAbove(openspace) {
  stopOrbiting(openspace);
  chooseZoomOutOverviewCurveType(openspace);
  openspace.time.setPause(true);
  openspace.autonavigation.goToGeo(
    'Mars', 
    vallesMarinerisGeo.lat,
    vallesMarinerisGeo.lon,
    vallesMarinerisGeo.height
  );
}

// Layers
async function toggleDetailedLayer(openspace) {
  const prop = "Scene.Mars.Renderable.Layers.ColorLayers.Themis_IR_Day_Sweden.Settings.Opacity";
  var opacity = await openspace.getPropertyValue(prop);
  var newOpacity = (opacity[1] > 0.0) ? 0.0 : 1.0; // TODO: OBS! on server we don't need the [1] accessor
  await openspace.setPropertyValueSingle(prop, newOpacity);
}

// Buttons
var locationButtons = {
  title: "Platser",
  buttons: {
    'Mars': () => {
      console.log("Going to Mars");
      chooseZoomOutOverviewCurveType(openspace);
      openspace.time.setPause(true);
      openspace.autonavigation.goTo('Mars');
      startOrbiting(openspace);
    },
    'Valles Marineris (nära)': () => {
      console.log("Going to Valles Marineris");
      goToVallesMarinerisTilted(openspace);
    }, 
    'Valles Marineris (ovanifrån)': () => {
      console.log("Going to Valles Marineris");
      goToVallesMarinerisAbove(openspace);
    }, 
    'Olympus Mons (nära)': () => {
      console.log("Going to Olympus Mons");
      goToOlympusMonsTilted(openspace);
    }, 
    'Olympus Mons (ovanifrån)': () => {
      console.log("Going to Olympus Mons");
      goToOlympusMonsAbove(openspace);
    }
  }
};

var layerButtons = {
  title: "Lager",
  buttons: {
    'Slå på/av detaljrik data': () => {
      console.log("Toggling detailed layer");
      toggleDetailedLayer(openspace);
    }
  }
};

var motionButtons = {
  title: "Lager",
  buttons: {
    'Slå på/av detaljrik data': () => {
      console.log("Toggling detailed layer");
      toggleDetailedLayer(openspace);
    }
  }
};

var marsButtonGroups = [layerButtons, locationButtons];
