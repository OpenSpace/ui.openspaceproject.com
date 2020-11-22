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
const vallesMarinerisTiltedNavState = {
  Anchor: "Mars", ReferenceFrame: "Mars",
  Position: [1153974.125, -3147836.75, -764025.4375],
  Up: [0.10838311165571213, -0.19677796959877014, 0.9744390845298767],
  Pitch: 1.1448750495910645, Yaw: -0.07529527693986893
}

const vallesMarinerisAboveNavState ={
  Anchor: "Mars", ReferenceFrame: "Mars",
  Position: [1986306.875, -4939418.5, -880679.875],
  Up: [0.23815040290355682, -0.07685504853725433, 0.9681826829910278],
  Pitch: -1.0651531739958031e-12, Yaw: 3.5783407487111063e-12
}

function goToVallesMarinerisTilted(openspace) {
  var spec = {
    Instructions: [
      {
        Type: "NavigationState",
        NavigationState: vallesMarinerisTiltedNavState,
      }
    ]
  }
  startOrbiting(openspace);
  chooseZoomOutOverviewCurveType(openspace);
  openspace.time.setPause(true);
  openspace.autonavigation.generatePath(spec);
}

function goToVallesMarinerisAbove(openspace) {
  var spec = {
    Instructions: [
      {
        Type: "NavigationState",
        NavigationState: vallesMarinerisAboveNavState,
        Duration: 20
      }
    ]
  }
  stopOrbiting(openspace);
  chooseZoomOutOverviewCurveType(openspace);
  openspace.time.setPause(true);
  openspace.autonavigation.generatePath(spec);
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
