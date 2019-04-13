export default (openspace) => {

  async function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
  }

  function addImage() {

  }


  function removeImage() {

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
        'Man in the Moon': () => { addImage('aManInTheMoon'); },
        'Jules Verne': () => { addImage('julesVerne'); },
        'Goddard': () => { addImage('goddard'); },
        'Hide': () => {
          removeImage('aManInTheMoon');
          removeImage('julesVerne');
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
        'Capsule': () => { addImage('capsule'); },
        'News': () => { addImage('russiaNews'); /* stamps */ },
        'Teresjkova': () => { addImage('teresjkova'); addImage('teresjkova-medals');/* stamps */ },
        'Hide': () => {
          removeImage('gagarin');
          removeImage('capsule');
          removeImage('russiaNews');
          removeImage('teresjkova');
          removeImage('teresjkova-medals');
        }
      }
    },
    {
      title: "USA 1",
      buttons: {
        'Explorer': () => { addImage('explorer'); },
        'Shephard': () => { addImage('gagarin'); addImage('mercury3'); },
        'Glenn': () => { addImage('glenn'); addImage('mercury6'); },
        'Hide': () => {
          removeImage('explorer');
          removeImage('gagarin');
          removeImage('mercury3');
          removeImage('glenn');
          removeImage('mercury6');
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
        'Show Insignia': () => { addImage('apollo8Insigina'); },
        'Hide Insignia': () => { removeImage('apollo8Insigina'); },
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
        'Start Earthrise': () => { playRealtime() /* TODO: Subtitles? */ },
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
      }
    },
    {
      title: "Apollo Landing sites",
      buttons: {
        'Show Insignias': () => { showInsignias() },
        'Hide Insignias': () => { hideInsignias() },
      }
    },
	];
} 