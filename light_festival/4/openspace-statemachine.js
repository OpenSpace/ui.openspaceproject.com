var locationButtons = {
  title: "Platser",
  buttons: {
    'Mars': () => {
      console.log("Going to Mars");
    },
    'Valles Marineris': () => {
      console.log("Going to Valles Marineris");
    }, 
    'Olympus Mons': () => {
      console.log("Going to Valles Olympus Mons");
    }
  }
};

var layerButtons = {
  title: "Lager",
  buttons: {
    'Vanligt': () => {
      console.log("Turning on layer without details");
    },
    'Detaljrikt': () => {
      console.log("Turning on layer with details");
    }
  }
};

var marsButtonGroups = [locationButtons, layerButtons];
