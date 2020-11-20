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

var depthActive = false;
const targetDistance = 2E9;
const depthDistance = 5E17;
const artMaxOpacity = 0.15;
const fadeDuration = 4;
const flightZoomSpeed = 1;
const anchorInterpolation = 5;

var locationButtons = {
  title: "Platser",
  buttons: {
    'Överblick': () => {
      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
      }
      else {
        changeAnchor("Earth", anchorInterpolation);
        startOrbiting();
      }
      console.log("Overview");
    },
    '3D Djup': () => {
      depthActive = true;
      fadeArtToOpacity(0.0, fadeDuration)
      changeAnchor("Earth", anchorInterpolation);
      applyLinearFlight(depthDistance, flightZoomSpeed);
      startOrbiting();
      console.log("Going to show the depth");
    },
    'Vattumannen': () => {
      stopOrbiting();

      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Vattumannen");
      changeAnchor("ConstellationArt-Aqr", anchorInterpolation);
    }, 
    'Fiskarna': () => {
      stopOrbiting();

      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Fiskarna");
      changeAnchor("ConstellationArt-Psc", anchorInterpolation);
    },
    'Väduren': () => {
      stopOrbiting();

      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Väduren");
      changeAnchor("ConstellationArt-Ari", anchorInterpolation);
    },
    'Oxen': () => {
      stopOrbiting();

      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Oxen");
      changeAnchor("ConstellationArt-Tau", anchorInterpolation);
    },
    'Tvillingarna': () => {
      stopOrbiting();

      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Tvillingarna");
      changeAnchor("ConstellationArt-Gem", anchorInterpolation);
    },
    'Kräftan': () => {
      stopOrbiting();

      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Kräftan");
      changeAnchor("ConstellationArt-Cnc", anchorInterpolation);
    },
    'Lejonet': () => {
      stopOrbiting();

      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Lejonet");
      changeAnchor("ConstellationArt-Leo", anchorInterpolation);
    },
    'Jungfrun': () => {
      stopOrbiting();

      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Jungfrun");
      changeAnchor("ConstellationArt-Vir", anchorInterpolation);
    },
    'Vågen': () => {
      stopOrbiting();

      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Vågen");
      changeAnchor("ConstellationArt-Lib", anchorInterpolation);
    },
    'Skorpionen': () => {
      stopOrbiting();

      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Skorpionen");
      changeAnchor("ConstellationArt-Sco", anchorInterpolation);
    },
    'Skytten': () => {
      stopOrbiting();

      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Skytten");
      changeAnchor("ConstellationArt-Sgr", anchorInterpolation);
    },
    'Stenbocken': () => {
      stopOrbiting();

      if(depthActive) {
        applyLinearFlight(targetDistance, flightZoomSpeed);
        fadeArtToOpacity(artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Stenbocken");
      changeAnchor("ConstellationArt-Cap", anchorInterpolation);
    }
  }
};

var constellationsButtonGroups = [locationButtons];
