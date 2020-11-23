const interestingAsteroids = [
  "sssb_sssb_data_amor_asteroid",
  "sssb_sssb_data_apollo_asteroid",
  "sssb_sssb_data_aten_asteroid",
  "sssb_sssb_data_atira_asteroid",
  "sssb_sssb_data_inner_main_belt_asteroid",
  "sssb_sssb_data_main_belt_asteroid",
  "sssb_sssb_data_outer_main_belt_asteroid",
  "sssb_sssb_data_pha"
]

function setOpenSpaceProperty(property, value, duration) {
  if(duration) {
    openspace.setPropertyValueSingle(property, value, duration);
  }
  else {
    openspace.setPropertyValueSingle(property, value);
  }
}

function turnOnLayer(layer, duration) {
  var propertyString = "Scene." + layer + ".Renderable.Opacity";
  setOpenSpaceProperty(propertyString, 0);

  propertyString = "Scene." + layer + ".Renderable.Enabled";
  setOpenSpaceProperty(propertyString, true);

  propertyString = "Scene." + layer + ".Renderable.Opacity";
  setOpenSpaceProperty(propertyString, 1, duration);
}

function turnOffLayer(layer, duration) {
  var propertyString = "Scene." + layer + ".Renderable.Opacity";
  setOpenSpaceProperty(propertyString, 0, duration);

  // TODO: wait for fade to be done before turning off the layer

  propertyString = "Scene." + layer + ".Renderable.Enabled";
  setOpenSpaceProperty(propertyString, false);
}

var isCloseOn = true;
var isHazardousOn = false;
var isInnerBeltOn = true;
var isMainBeltOn = false;
var isOuterBeltOn = false;
const fadeDuration = 5;

var layerButtons = {
  title: "Lager",
  buttons: {

    'Alla': () => {
      for(var i = 0; i < interestingAsteroids.length; ++i) {
        turnOnLayer(interestingAsteroids[i], fadeDuration);
      }
      isCloseOn = true;
      isHazardousOn = true;
      isInnerBeltOn = true;
      isMainBeltOn = true;
      isOuterBeltOn = true;
    },

    'Nära jorden': () => {
      if(isCloseOn) {
        turnOffLayer("sssb_sssb_data_amor_asteroid", fadeDuration);
        turnOffLayer("sssb_sssb_data_apollo_asteroid", fadeDuration);
        turnOffLayer("sssb_sssb_data_aten_asteroid", fadeDuration);
        turnOffLayer("sssb_sssb_data_atira_asteroid", fadeDuration);

        document.getElementById('LagerNära jorden').className = "off";
        isCloseOn = false;
      }

      else {
        turnOnLayer("sssb_sssb_data_amor_asteroid", fadeDuration);
        turnOnLayer("sssb_sssb_data_apollo_asteroid", fadeDuration);
        turnOnLayer("sssb_sssb_data_aten_asteroid", fadeDuration);
        turnOnLayer("sssb_sssb_data_atira_asteroid", fadeDuration);

        document.getElementById('LagerNära jorden').className = "on";
        isCloseOn = true;
      }
    },

    'Potentiellt Farliga': () => {
      if(isHazardousOn) {
        turnOffLayer("sssb_sssb_data_pha", fadeDuration);
        document.getElementById('LagerPotentiellt Farliga').className = "off";
        isHazardousOn = false;
      }

      else {
        turnOnLayer("sssb_sssb_data_pha", fadeDuration);
        document.getElementById('LagerPotentiellt Farliga').className = "on";
        isHazardousOn = true;
      }
    },

    'Inre bälte': () => {
      if(isInnerBeltOn) {
        turnOffLayer("sssb_sssb_data_inner_main_belt_asteroid", fadeDuration);
        document.getElementById('LagerInre bälte').className = "off";
        isInnerBeltOn = false;
      }

      else {
        turnOnLayer("sssb_sssb_data_inner_main_belt_asteroid", fadeDuration);
        document.getElementById('LagerInre bälte').className = "on";
        isInnerBeltOn = true;
      }
    },

    'Primär bälte': () => {
      if(isMainBeltOn) {
        turnOffLayer("sssb_sssb_data_main_belt_asteroid", fadeDuration);
        document.getElementById('LagerPrimär bälte').className = "off";
        isMainBeltOn = false;
      }

      else {
        turnOnLayer("sssb_sssb_data_main_belt_asteroid", fadeDuration);
        document.getElementById('LagerPrimär bälte').className = "on";
        isMainBeltOn = true;
      }
    },

    'Yttre bälte': () => {
      if(isOuterBeltOn) {
        turnOffLayer("sssb_sssb_data_outer_main_belt_asteroid", fadeDuration);
        document.getElementById('LagerYttre bälte').className = "off";
        isOuterBeltOn = false;
      }

      else {
        turnOnLayer("sssb_sssb_data_outer_main_belt_asteroid", fadeDuration);
        document.getElementById('LagerYttre bälte').className = "on";
        isOuterBeltOn = true;
      }
    }
  }
};

var timeButtons = {
  title: "Tid",
  buttons: {
    'Real-tid': () => {
      console.log("Change time to real time");
    },
    'Snabbare': () => {
      console.log("Change time to go faster");
    },
    'Paus': () => {
      console.log("Pause time");
    }
  }
};

var asteroidsButtonGroups = [layerButtons, timeButtons];
