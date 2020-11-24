const milkyWayDistance = 1.41941169E21; // 46 Kilo parsecs in meter
const galaxiesDistance = 7.71419395E25; // 2.5 Giga parsecs in meter
const quasarsDistance = 1.2342712E26;   // 4 Giga parsecs in meter
const flightZoomSpeed = 1.5;

var locationButtons = {
  title: "Platser",
  buttons: {
    'Vintergatan': () => {
      console.log("Going to Milky Way");
      applyLinearFlight(openspace, milkyWayDistance, flightZoomSpeed);
    }, 
    'Galaxer': () => {
      console.log("Going to Galaxies");
      applyLinearFlight(openspace, galaxiesDistance, flightZoomSpeed);
    },
    'Kvaser': () => {
      console.log("Going to Quasars");
      applyLinearFlight(openspace, quasarsDistance, flightZoomSpeed);
    }
  }
};

var galaxiesButtonGroups = [locationButtons];
