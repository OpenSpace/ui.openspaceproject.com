//helper function for nicely fading groups of trails
var showTrails = (objects) => {
  objects.map(async (object) => {
    let isEnabled = false;
    const returnValue = await openspace.getPropertyValue("Scene." + object + "Trail.Renderable.Enabled");
    if (returnValue) {
      isEnabled = returnValue[1];
    }
    if (!isEnabled) {
      openspace.setPropertyValue("Scene." + object + "Trail.Renderable.Opacity", 0)
      openspace.setPropertyValue("Scene." + object + "Trail.Renderable.Enabled", true)
    }
    openspace.setPropertyValue("Scene." + object + "Trail.Renderable.Opacity", 1, 1)
  })
}

//helper function to set the focus target
var setFocus = (focus) => {
  openspace.setPropertyValue('NavigationHandler.OrbitalNavigator.Anchor', focus);
  openspace.setPropertyValue('NavigationHandler.OrbitalNavigator.RetargetAnchor', null);
}

var jwstButtonGroups = [];
