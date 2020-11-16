var locationButtons = {
  title: "Platser",
  buttons: {
    'Jorden': () => {
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.ApplyStopBehaviorWhenIdle", true);
      openspace.time.setPause(true);

      openspace.autonavigation.goTo("Earth");
    }, 
    'Månen': () => {
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.ApplyStopBehaviorWhenIdle", true);
      openspace.time.setPause(true);

      openspace.autonavigation.goTo("Moon");
    },
    'Norrköping': () => {
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.ApplyStopBehaviorWhenIdle", false);
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.DefaultCurveOption", 2);
      openspace.time.setPause(true);

      var altitude = 20000;
      openspace.autonavigation.goToGeo("Earth", 58.588455, 16.188313, altitude);
    }
  }
};

var earthButtonGroups = [locationButtons];
