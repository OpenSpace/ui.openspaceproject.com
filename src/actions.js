import images from './images';

let screenspaceRenderables = [];

export default (openspace) => {

  async function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
  }

  function fullImageUri(identifier) {
    return "screenspace-image-" + identifier;
  }

  async function addImage(identifier) {
    const imageData = images[identifier];

    if (!imageData) {
      console.error("Missing image data for " + identifier);
      return;
    }

    const url = imageData.url;
    const uri = fullImageUri(identifier);
    const position = imageData.position || [3, 0, 0];
    const tweenPosition = imageData.tweenPosition;

    const initialPosition = tweenPosition ? [position[0] + 10, position[1], position[2]] : position;

    const spec = {
        Type: "ScreenSpaceImageOnline",
        Identifier: uri,
        Name: identifier,
        URL: url,
        Enabled: true,
        UseRadiusAzimuthElevation: true,
        FaceCamera: true,
        RadiusAzimuthElevation: initialPosition,
        UsePerspectiveProjection: true,
        Alpha: 0,
        Scale: imageData.scale || 1
    };

    // If image is already added, this will throw an error, but that's fine for the moment.
    openspace.addScreenSpaceRenderable(spec);
    screenspaceRenderables.push(uri);

    // Enable the image if it already existed but was invisible.
    openspace.setPropertyValue("ScreenSpace." + uri + ".Alpha", 0);
    openspace.setPropertyValue("ScreenSpace." + uri + ".Enabled", true);  
    openspace.setPropertyValue("ScreenSpace." + uri + ".RadiusAzimuthElevation", initialPosition);
    openspace.setPropertyValue("ScreenSpace." + uri + ".Rotation", imageData.rotation || [0, 0, 0]);


    await sleep(500);
    openspace.setPropertyValueSingle("ScreenSpace." + uri + ".RadiusAzimuthElevation", position, 1, 'CubicEaseOut');
    openspace.setPropertyValue("ScreenSpace." + uri + ".Alpha", 1, 1);
  }


  async function removeImage(identifier) {
    const uri = fullImageUri(identifier);
    openspace.setPropertyValue("ScreenSpace." + uri + ".Alpha", 0, 1);
    await sleep(2000);
    openspace.setPropertyValue("ScreenSpace." + uri + ".Enabled", false);
    // Ideally, we want to:
    // openspace.removeScreenSpaceRenderable(uri);
    // However, there is an issue with interpolations and removing property owners.
  }

  function clearImages() {
    screenspaceRenderables.forEach(ssr => {
      openspace.removeScreenSpaceRenderable(ssr);
    })
    screenspaceRenderables = [];
  }


  async function showInsignias() {
    const tween = 0.5;
    const gap = 1 * 1000;
    
    openspace.setPropertyValue("Scene.Apollo" + 11 + "Insignia.Renderable.Opacity", 1, tween)
    await sleep(gap);
    openspace.setPropertyValue("Scene.Apollo" + 12 + "Insignia.Renderable.Opacity", 1, tween)
    await sleep(gap);
    openspace.setPropertyValue("Scene.Apollo" + 14 + "Insignia.Renderable.Opacity", 1, tween)
    await sleep(gap);
    openspace.setPropertyValue("Scene.Apollo" + 15 + "Insignia.Renderable.Opacity", 1, tween)
    await sleep(gap);
    openspace.setPropertyValue("Scene.Apollo" + 16 + "Insignia.Renderable.Opacity", 1, tween)
    await sleep(gap);
    openspace.setPropertyValue("Scene.Apollo" + 17 + "Insignia.Renderable.Opacity", 1, tween)
  }

  function hideInsignias() {
    const tween = 0.5;
    openspace.setPropertyValue("Scene.Apollo*Insignia.Renderable.Opacity", 0, tween)
  }

  function jumpToEarthrise() {
    // Atmosphere needs to be disabled, due to a bug with stereo separation.
    openspace.setPropertyValue('Scene.EarthAtmosphere.Renderable.Enabled', false)
    openspace.time.setPause(true);
    openspace.time.setTime("1968 DEC 24 16:37:31");
    openspace.navigation.setCameraState({
        Anchor: "Apollo8Pivot",
        Aim: "",
        ReferenceFrame: "Apollo8Pivot",
        Position: [-7.174805E0, -1.820108E1, -3.634688E1],
        Rotation: [0.697424E0, -0.694746E0, 0.539866E-1, 0.167373E0],
    });
}

  function enableAtmosphere() {
    openspace.setPropertyValue('Scene.EarthAtmosphere.Renderable.Enabled', true)
  }

  function enableAtmospheres(enabled) {
    openspace.setPropertyValue('Scene.*Atmosphere.Renderable.Enabled', enabled)
  }

  function showTrails(objects) {
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

  async function hideAllTrails() {
    const duration = 1;
    openspace.setPropertyValue("Scene.*Trail.Renderable.Opacity", 0, 1)
    setTimeout(() => {
      openspace.setPropertyValue("Scene.*Trail.Renderable.Enabled", false)  
    }, duration * 1000)
  }

  function playRealtime() {
    openspace.time.setDeltaTime(1);
    openspace.time.setPause(false);
  }

	return [
    {
      title: "Trails",
      buttons: {
        'Moon': () => { showTrails(['Moon']) },
        'Apollo 8 Launch': () => { showTrails(['Apollo8Launch']) },
        'Apollo 8 Moon': () => { showTrails(['Apollo8Moon']) },
        'Apollo 8 Full': () => { showTrails(['Apollo8EarthBarycenter']) },
        'Hide All': () => { hideAllTrails(); },
        'Earth, Moon & Mars': () => { showTrails(['Earth', 'Moon', 'Mars']) },
      }
    },
		{
			title: "Sputnik Intro",
			buttons: {
				Show: () => { addImage('sputnik'); },
        Hide: () => { removeImage('sputnik'); }
			}
		},
    {
      title: "Flying",
      buttons: {
        'Man in the Moon': () => { addImage('manInTheMoone'); },
        'Jules Verne': async () => { addImage('julesVerne1'); await sleep(1000); addImage('julesVerne2'); },
        'Goddard': () => { addImage('goddard'); },
        'Hide': () => {
          removeImage('manInTheMoone');
          removeImage('julesVerne1');
          removeImage('julesVerne2');
          removeImage('goddard');
        }
      }
    },
    {
      title: "Russia 1",
      buttons: {
        'Laika': () => { addImage('laika'); },
        'Luna 2': () => { addImage('luna2'); },
        'Luna 3': () => { addImage('luna3'); /* stamps */ },
        'Hide': () => {
          removeImage('laika');
          removeImage('luna2');
          removeImage('luna3');
        }
      }
    },
    {
      title: "Russia 2",
      buttons: {
        'Gagarin': () => { addImage('gagarin'); },
        'Vostok': () => { addImage('vostokSpacecraft'); },
        'News': () => { addImage('russiaNews'); /* stamps */ },
        'Teresjkova': () => { addImage('teresjkova'); addImage('teresjkovaMedals');/* stamps */ },
        'Hide': () => {
          removeImage('gagarin');
          removeImage('vostokSpacecraft');
          removeImage('russiaNews');
          removeImage('teresjkova');
          removeImage('teresjkovaMedals');
        }
      }
    },
    {
      title: "USA 1",
      buttons: {
        'Explorer': () => { addImage('explorer'); },
        'Shephard': () => { addImage('shepard'); /*addImage('mercury3');*/ },
        'Glenn': () => { addImage('glenn'); /*addImage('mercury6');*/ },
        'Hide': () => {
          removeImage('explorer');
          removeImage('shepard');
          removeImage('glenn');
          //removeImage('mercury3');
          //removeImage('mercury6');
        }
      }
    },
    {
      title: "Kennedy",
      description: "Move moon to side! \n Insert projector: Kennedy Speech."
      // TODO if time: provide subtitles
    },
    {
      title: "Trip to the Moon",
      description: "Insert projector: Trip To The Moon."
    },
    {
      title: "Apollo 8 Intro",
      buttons: {
        'Show Insignia': () => { addImage('apollo8Insignia'); },
        'Hide Insignia': () => { removeImage('apollo8Insignia'); },
      }
    },
    {
      title: "Apollo 8",
      description: "1 minute/s. Leave Earth.",
    },
    {
      title: "Earthrise",
      desciption: "Start audio from Earthrise at the same time as starting the Earthrise.",
      buttons: {
        'Jump to Earthrise': () => { jumpToEarthrise() },
        'Start Earthrise': () => { playRealtime() },
        'Enable Atmosphere': () => { enableAtmosphere() },
      }
    },
    {
      title: "Apollo 11",
      description: "Land at Apollo 11 site. Use arrow keys for flip book. Show lander.",
      /* TODO */
      buttons: {
        
      }
    },
    {
      title: "Apollo 13",
      buttons: {
        'Control Room 1': () => { addImage('apollo13Calm'); },
        'Hide': () => { removeImage('apollo13Calm'); },
      }
    },
    {
      title: "Apollo 13 Video",
      description: "Video?"
      /* TODO */
    },
    {
      title: "Apollo 13 Problem",
      buttons: {
        'Problem': () => { addImage('apollo13Problem'); },
        'Hide': () => { addImage('apollo13Problem'); },
      }
    },
    {
      title: "Apollo Landing sites",
      buttons: {
        'Show Insignias': () => { showInsignias() },
        'Hide Insignias': () => { hideInsignias() },
      }
    },
    {
      title: "Utilities",
      buttons: {
        'Clear all images (fragile)': () => { clearImages() },
        'Disable atmospheres': () => { enableAtmospheres(false) },
        'Enable atmospheres': () => { enableAtmospheres(true) },
      }
    },


	];
} 