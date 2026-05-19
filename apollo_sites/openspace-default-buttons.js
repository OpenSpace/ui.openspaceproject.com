let TimeButtons = {
  title: 'Time Controls',
  buttons: {
    'Toggle Pause (Interpolated)': () => {
      openspace.time.interpolateTogglePause();
    },
    'Toggle Pause (Immediate)': async () => {
      openspace.time.togglePause();
    },
    Realtime: () => {
      openspace.time.interpolateDeltaTime(1);
    },
    '5 sec/sec': () => {
      openspace.time.interpolateDeltaTime(5);
    },
    '30 sec/sec': () => {
      openspace.time.interpolateDeltaTime(30);
    },
    '1 min/sec': () => {
      openspace.time.interpolateDeltaTime(60);
    },
    '10 min/sec': () => {
      openspace.time.interpolateDeltaTime(600);
    },
    '1 hr/sec': () => {
      openspace.time.interpolateDeltaTime(3600);
    },
    '4 hr/sec': () => {
      openspace.time.interpolateDeltaTime(14400);
    },
    '12 hr/sec': () => {
      openspace.time.interpolateDeltaTime(43200);
    },
    '1 day/sec': () => {
      openspace.time.interpolateDeltaTime(86400);
    },
    '7 day/sec': () => {
      openspace.time.interpolateDeltaTime(604800);
    },
    '1 mo/sec': () => {
      openspace.time.interpolateDeltaTime(2592000);
    },
    '1 yr/sec': () => {
      openspace.time.interpolateDeltaTime(31536000);
    }
  }
};

let VisualButtons = {
  title: 'Visual',
  buttons: {
    'Hide All Trails': async () => {
      const duration = 1;
      openspace.setPropertyValue('Scene.*Trail.Renderable.Opacity', 0, 1);
      setTimeout(() => {
        openspace.setPropertyValue('Scene.*Trail.Renderable.Enabled', false);
      }, duration * 1000);
    },
    'Show All Trails': async () => {
      const duration = 1;
      openspace.setPropertyValue('Scene.*Trail.Renderable.Enabled', true);
      openspace.setPropertyValue('Scene.*Trail.Renderable.Opacity', 1, 1);
    },
    'Fade screen to/from black': async () => {
      let blackoutFactor = await openspace.propertyValue(
        'RenderEngine.GlobalBlackout.Factor'
      );
      if (blackoutFactor > 0.5) {
        openspace.setPropertyValueSingle('RenderEngine.GlobalBlackout.Factor', 0.0, 3);
      } else {
        openspace.setPropertyValueSingle('RenderEngine.GlobalBlackout.Factor', 1.0, 3);
      }
    }
  }
};

let FrictionButtons = {
  title: 'Camera Friction',
  buttons: {
    'Toggle Rotation friction': async () => {
      let isEnabled = await openspace.propertyValue(
        'NavigationHandler.OrbitalNavigator.Friction.RotationalFriction'
      );
      openspace.setPropertyValueSingle(
        'NavigationHandler.OrbitalNavigator.Friction.RotationalFriction',
        !isEnabled
      );
    },
    'Toggle Zoom friction': async () => {
      let isEnabled = await openspace.propertyValue(
        'NavigationHandler.OrbitalNavigator.Friction.ZoomFriction'
      );
      openspace.setPropertyValueSingle(
        'NavigationHandler.OrbitalNavigator.Friction.ZoomFriction',
        !isEnabled
      );
    },
    'Toggle Roll friction': async () => {
      let isEnabled = await openspace.propertyValue(
        'NavigationHandler.OrbitalNavigator.Friction.RollFriction'
      );
      openspace.setPropertyValueSingle(
        'NavigationHandler.OrbitalNavigator.Friction.RollFriction',
        !isEnabled
      );
    }
  }
};

let SystemButtons = {
  title: 'System',
  buttons: {
    'Toggle Dashboard': async () => {
      let isEnabled = await openspace.propertyValue('Dashboard.IsEnabled');
      openspace.setPropertyValueSingle('Dashboard.IsEnabled', !isEnabled);
      openspace.setPropertyValueSingle('RenderEngine.ShowLog', !isEnabled);
      openspace.setPropertyValueSingle('RenderEngine.ShowVersion', !isEnabled);
      openspace.setPropertyValueSingle('RenderEngine.ShowCamera', !isEnabled);
    },
    'Toggle Native GUI': async () => {
      let isEnabled = await openspace.propertyValue('Modules.ImGUI.Enabled');
      openspace.setPropertyValueSingle('Modules.ImGUI.Enabled', !isEnabled);
    },
    'Toggle Main GUI': async () => {
      let isEnabled = await openspace.propertyValue('Modules.CefWebGui.Visible');
      openspace.setPropertyValueSingle('Modules.CefWebGui.Visible', !isEnabled);
    },
    'Take Screenshot': () => {
      openspace.takeScreenshot();
    },
    '---': () => {},
    '!!!---> Toggle Shutdown <---!!!': () => {
      openspace.toggleShutdown();
    }
  }
};
let defaultButtonGroups = [TimeButtons, VisualButtons, FrictionButtons, SystemButtons];
