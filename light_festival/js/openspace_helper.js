function changeAnchor(openspace, name, interpolationTime) {
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

function stopOrbiting(openspace) {
  openspace.setPropertyValueSingle(
      "Modules.AutoNavigation.AutoNavigationHandler.ApplyStopBehaviorWhenIdle",
      false
  )
}

function setOrbitSpeedFactor(openspace, value) {
  openspace.setPropertyValueSingle(
    "Modules.AutoNavigation.AutoNavigationHandler.AtNodeNavigator.OrbitSpeedFactor",
    value
  )
}

function startOrbiting(openspace) {
  openspace.setPropertyValueSingle(
    "Modules.AutoNavigation.AutoNavigationHandler.ApplyStopBehaviorWhenIdle",
    true
  )
}

function applyLinearFlight(openspace, height, zoomSpeedFactor) {
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

function chooseAvoidCollisionCurveType(openspace) {
  openspace.setPropertyValueSingle(
    "Modules.AutoNavigation.AutoNavigationHandler.DefaultCurveOption", 
    0
  )
}

function chooseZoomOutOverviewCurveType(openspace) {
  openspace.setPropertyValueSingle(
    "Modules.AutoNavigation.AutoNavigationHandler.DefaultCurveOption", 
    2
  )
}