function fadeArtToOpacity(openspace, targetValue, interpolationTime) {
  openspace.setPropertyValue('Scene.ConstellationArt*.Renderable.Opacity',
    targetValue,
    interpolationTime
  )
}

var depthActive = false;
const targetDistance = 2E9;
const targetArtDistance = 2E13;
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
        applyLinearFlight(openspace, targetDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
      }
      else {
        changeAnchor(openspace, "Earth", anchorInterpolation);
        startOrbiting(openspace);
      }
      console.log("Overview");
    },
    '3D Djup': () => {
      depthActive = true;
      fadeArtToOpacity(openspace, 0.0, fadeDuration)
      changeAnchor(openspace, "Earth", anchorInterpolation);
      applyLinearFlight(openspace, depthDistance, flightZoomSpeed);
      startOrbiting(openspace);
      console.log("Going to show the depth");
    },
    'Vattumannen': () => {
      stopOrbiting(openspace);

      if(depthActive) {
        applyLinearFlight(openspace, targetArtDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Vattumannen");
      changeAnchor(openspace, "ConstellationArt-Aqr", anchorInterpolation);
    }, 
    'Fiskarna': () => {
      stopOrbiting(openspace);

      if(depthActive) {
        applyLinearFlight(openspace, targetArtDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Fiskarna");
      changeAnchor(openspace, "ConstellationArt-Psc", anchorInterpolation);
    },
    'Väduren': () => {
      stopOrbiting(openspace);

      if(depthActive) {
        applyLinearFlight(openspace, targetArtDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Väduren");
      changeAnchor(openspace, "ConstellationArt-Ari", anchorInterpolation);
    },
    'Oxen': () => {
      stopOrbiting(openspace);

      if(depthActive) {
        applyLinearFlight(openspace, targetArtDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Oxen");
      changeAnchor(openspace, "ConstellationArt-Tau", anchorInterpolation);
    },
    'Tvillingarna': () => {
      stopOrbiting(openspace);

      if(depthActive) {
        applyLinearFlight(openspace, targetArtDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Tvillingarna");
      changeAnchor(openspace, "ConstellationArt-Gem", anchorInterpolation);
    },
    'Kräftan': () => {
      stopOrbiting(openspace);

      if(depthActive) {
        applyLinearFlight(openspace, targetArtDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Kräftan");
      changeAnchor(openspace, "ConstellationArt-Cnc", anchorInterpolation);
    },
    'Lejonet': () => {
      stopOrbiting(openspace);

      if(depthActive) {
        applyLinearFlight(openspace, targetArtDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Lejonet");
      changeAnchor(openspace, "ConstellationArt-Leo", anchorInterpolation);
    },
    'Jungfrun': () => {
      stopOrbiting(openspace);

      if(depthActive) {
        applyLinearFlight(openspace, targetArtDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Jungfrun");
      changeAnchor(openspace, "ConstellationArt-Vir", anchorInterpolation);
    },
    'Vågen': () => {
      stopOrbiting(openspace);

      if(depthActive) {
        applyLinearFlight(openspace, targetArtDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Vågen");
      changeAnchor(openspace, "ConstellationArt-Lib", anchorInterpolation);
    },
    'Skorpionen': () => {
      stopOrbiting(openspace);

      if(depthActive) {
        applyLinearFlight(openspace, targetArtDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Skorpionen");
      changeAnchor(openspace, "ConstellationArt-Sco", anchorInterpolation);
    },
    'Skytten': () => {
      stopOrbiting(openspace);

      if(depthActive) {
        applyLinearFlight(openspace, targetArtDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Skytten");
      changeAnchor(openspace, "ConstellationArt-Sgr", anchorInterpolation);
    },
    'Stenbocken': () => {
      stopOrbiting(openspace);

      if(depthActive) {
        applyLinearFlight(openspace, targetArtDistance, flightZoomSpeed);
        fadeArtToOpacity(openspace, artMaxOpacity, fadeDuration);
        depthActive = false;
        // TODO: Wait for linear flight to finish before focusing
      }
      console.log("Going to Stenbocken");
      changeAnchor(openspace, "ConstellationArt-Cap", anchorInterpolation);
    }
  }
};

var constellationsButtonGroups = [locationButtons];
