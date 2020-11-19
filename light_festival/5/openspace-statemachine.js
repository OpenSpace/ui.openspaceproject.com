function changeAnchor(name, interpolationTime) {
  openspace.setPropertyValueSingle(
    "NavigationHandler.OrbitalNavigator.RetargetAnchorInterpolationTime",
    interpolationTime
  )
  openspace.setPropertyValueSingle(
    "NavigationHandler.OrbitalNavigator.RetargetAnchor", null
  )
  openspace.setPropertyValueSingle(
    "NavigationHandler.OrbitalNavigator.Anchor",
    name
  )
  openspace.setPropertyValueSingle("NavigationHandler.OrbitalNavigator.Aim", '')
}

function stopOrbiting() {
  openspace.setPropertyValueSingle(
      "Modules.AutoNavigation.AutoNavigationHandler.ApplyStopBehaviorWhenIdle",
      false
  )
}

function setOrbitSpeedFactor(value) {
  openspace.setPropertyValueSingle(
    "Modules.AutoNavigation.AutoNavigationHandler.AtNodeNavigator.OrbitSpeedFactor",
    value
  )
}

function startOrbiting() {
  openspace.setPropertyValueSingle(
    "Modules.AutoNavigation.AutoNavigationHandler.ApplyStopBehaviorWhenIdle",
    true
  )
}

function applyLinearFlight(height, zoomSpeedFactor) {
  openspace.setPropertyValueSingle(
    'NavigationHandler.OrbitalNavigator.FlightDestinationDistance',
    height
  );
  openspace.setPropertyValueSingle(
    'NavigationHandler.OrbitalNavigator.VelocityZoomControl',
    zoomSpeedFactor
  );
  openspace.setPropertyValueSingle(
    'NavigationHandler.OrbitalNavigator.ApplyLinearFlight',
    true
  );
}

function fadeArtToOpacity(targetValue, interpolationTime) {
    openspace.setPropertyValue('Scene.ConstellationArt*.Renderable.Opacity',
      targetValue,
      interpolationTime
    )
}

var locationButtons = {
  title: "Platser",
  buttons: {
    'Överblick': () => {
      changeAnchor("Earth", 2);
      startOrbiting();
      console.log("Overview");
    },
    '3D Djup': () => {
      console.log("Going to show the depth");
    },
    'Vattumannen': () => {
      stopOrbiting();
      console.log("Going to Vattumannen");
      changeAnchor("ConstellationArt-Aqr", 2);
    }, 
    'Fiskarna': () => {
      stopOrbiting();
      console.log("Going to Fiskarna");
      changeAnchor("ConstellationArt-Psc", 2);
    },
    'Väduren': () => {
      stopOrbiting();
      console.log("Going to Väduren");
      changeAnchor("ConstellationArt-Ari", 2);
    },
    'Oxen': () => {
      stopOrbiting();
      console.log("Going to Oxen");
      changeAnchor("ConstellationArt-Tau", 2);
    },
    'Tvillingarna': () => {
      stopOrbiting();
      console.log("Going to Tvillingarna");
      changeAnchor("ConstellationArt-Gem", 2);
    },
    'Kräftan': () => {
      stopOrbiting();
      console.log("Going to Kräftan");
      changeAnchor("ConstellationArt-Cnc", 2);
    },
    'Lejonet': () => {
      stopOrbiting();
      console.log("Going to Lejonet");
      changeAnchor("ConstellationArt-Leo", 2);
    },
    'Jungfrun': () => {
      stopOrbiting();
      console.log("Going to Jungfrun");
      changeAnchor("ConstellationArt-Vir", 2);
    },
    'Vågen': () => {
      stopOrbiting();
      console.log("Going to Vågen");
      changeAnchor("ConstellationArt-Lib", 2);
    },
    'Skorpionen': () => {
      stopOrbiting();
      console.log("Going to Skorpionen");
      changeAnchor("ConstellationArt-Sco", 2);
    },
    'Skytten': () => {
      stopOrbiting();
      console.log("Going to Skytten");
      changeAnchor("ConstellationArt-Sgr", 2);
    },
    'Stenbocken': () => {
      stopOrbiting();
      console.log("Going to Stenbocken");
      changeAnchor("ConstellationArt-Cap", 2);
    }
  }
};

var constellationsButtonGroups = [locationButtons];
