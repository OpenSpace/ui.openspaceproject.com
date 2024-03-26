// GLOBALS
const READ_KEY = "kwBqvh2fmacJ4Hsd76tSPCRgZGbUpT83";
data = null;
YEAR = 1956;
const YEAR_MIN = 1956;
const YEAR_MAX = 2024;
TOTAL_ROCKETS = 0;
PLAYER_INTERVAL = null;

TEXT_DURATION = 550;


async function prepare39A() {
  await OSFadeOut(1000);

  try {
    await openspace.navigation.setNavigationState(
      {
        Anchor: "Earth",
        Pitch: 1.5956340327600773,
        Position: [914180.0477044884, -5524674.758781099, 3053412.352187144],
        Up: [-0.25700835524541105, 0.43455057030574595, 0.8631989962812745],
        Yaw: -0.000643388634735114
      }
    );

    let now_date = await (await openspace.time.currentWallTime())[1];
    let now_seconds = (await openspace.time.convertTime(now_date))[1]; 
    let yesterday = (await openspace.time.convertTime(now_seconds-86400))[1];
    await openspace.time.setTime(yesterday);
    await openspace.time.interpolateDeltaTime(1);

    await resetHistory();
    
    await openspace.setPropertyValueSingle("Scene.osnl_saturnv_pad.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.osnl_falcon9_pad.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_human_39A.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_human_39B.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.osnl_saturnv.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.osnl_ariane5.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.osnl_spaceshuttle.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.osnl_falcon9.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.osnl_starship.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.osnl_human_starship.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.osnl_human_saturnv.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.osnl_human_falcon9.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.osnl_human_spaceshuttle.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.osnl_human_ariane5.Renderable.Enabled", false);


       logMessage("Completed", 3000, "lightgreen");
  } catch (e) {
    alert(`Something went wrong: ${e}`);
  }

  await OSFadeIn(1000);
}

async function prepareLaunches(view = 1) {
  AUDIO_EARTH = new Audio('./audio/earth.mp3');
  AUDIO_ISS = new Audio('./audio/iss.mp3');
  AUDIO_JUPITER = new Audio('./audio/jupiter.mp3');
  AUDIO_MARS = new Audio('./audio/mars.mp3');
  AUDIO_MERCURY = new Audio('./audio/mercury.mp3');
  AUDIO_NEPTUNE = new Audio('./audio/neptune.mp3');
  AUDIO_SATURN = new Audio('./audio/saturn.mp3');
  AUDIO_URANUS = new Audio('./audio/uranus.mp3');
  AUDIO_VENUS = new Audio('./audio/venus.mp3');
  AUDIO_MOON = new Audio('./audio/moon.mp3');
  AUDIO_PLUTO = new Audio('./audio/pluto.mp3');

  await OSFadeOut(1000);

  try {
    await setDeltaTime(0.001);

    if (view == 0) {
      await openspace.time.setTime("2024-01-17T12:00:00.375");
      await openspace.navigation.setNavigationState(
        {
          Anchor: "Earth",
          Pitch: 1.9540717001651131,
          Position: [4345921.593111931, 720572.7852697868, 4616348.627988746],
          Up: [0.6039957272322718, 0.47188677329820683, -0.6422709978438744],
          Yaw: -0.026642322710197914
        }
      );
    } else {
      await openspace.time.setTime("2024-02-09T12:00:40.375");
      await openspace.navigation.setNavigationState(
        {
          Anchor: "Earth",
          Pitch: 1.9540717001647536,
          Position: [4345921.5931094615, 720572.7852776878, 4616348.62798604],
          Up: [0.5493239419533336, 0.5744728885702015, -0.6068147222131814],
          Yaw: -0.02664232271012611
        }
      );
    }
   
    await openspace.setPropertyValueSingle("Scene.SunGlare.Renderable.Opacity", 0.3);

    await openspace.setPropertyValueSingle("Scene.MarsAtmosphere.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.VenusAtmosphere.Renderable.Enabled", false);
    await openspace.setPropertyValueSingle("Scene.TitanAtmosphere.Renderable.Enabled", false);

    await openspace.setPropertyValueSingle("Scene.Mercury.Scale.Scale", 2000.0);
    await openspace.setPropertyValueSingle("Scene.Venus.Scale.Scale", 1000.0);
    await openspace.setPropertyValueSingle("Scene.Mars.Scale.Scale", 3000.0);
    await openspace.setPropertyValueSingle("Scene.Jupiter.Scale.Scale", 1000.0);
    await openspace.setPropertyValueSingle("Scene.Saturn.Scale.Scale", 2000.0);
    await openspace.setPropertyValueSingle("Scene.Uranus.Scale.Scale", 3000.0);
    await openspace.setPropertyValueSingle("Scene.Neptune.Scale.Scale", 8000.0);
    await openspace.setPropertyValueSingle("Scene.Moon.Scale.Scale", 4.0);
    await openspace.setPropertyValueSingle("Scene.Pluto.Scale.Scale", 50000.0);

    await enableAllHistoryObjects(true);

    await openspace.setPropertyValueSingle("Scene.JupiterCopy.Renderable.Opacity", 0.0);
    await openspace.setPropertyValueSingle("Scene.JupiterCopy.Scale.Scale", 1000.0);
    await openspace.setPropertyValueSingle("Scene.JupiterCopy.Renderable.PerformShading", false);
    
    await openspace.setPropertyValueSingle("Scene.MarsCopy.Renderable.Opacity", 0.0);
    await openspace.setPropertyValueSingle("Scene.MarsCopy.Scale.Scale", 3000.0);
    await openspace.setPropertyValueSingle("Scene.MarsCopy.Renderable.PerformShading", false);

    await openspace.setPropertyValueSingle("Scene.MercuryCopy.Renderable.Opacity", 0.0);
    await openspace.setPropertyValueSingle("Scene.MercuryCopy.Scale.Scale", 2000.0);
    await openspace.setPropertyValueSingle("Scene.MercuryCopy.Renderable.PerformShading", false);

    await openspace.setPropertyValueSingle("Scene.NeptuneCopy.Renderable.Opacity", 0.0);
    await openspace.setPropertyValueSingle("Scene.NeptuneCopy.Scale.Scale", 8000.0);
    await openspace.setPropertyValueSingle("Scene.NeptuneCopy.Renderable.PerformShading", false);

    await openspace.setPropertyValueSingle("Scene.SaturnCopy.Renderable.Opacity", 0.0);
    await openspace.setPropertyValueSingle("Scene.SaturnCopy.Scale.Scale", 2000.0);
    await openspace.setPropertyValueSingle("Scene.SaturnCopy.Renderable.PerformShading", false);

    await openspace.setPropertyValueSingle("Scene.UranusCopy.Renderable.Opacity", 0.0);
    await openspace.setPropertyValueSingle("Scene.UranusCopy.Scale.Scale", 3000.0);
    await openspace.setPropertyValueSingle("Scene.UranusCopy.Renderable.PerformShading", false);

    await openspace.setPropertyValueSingle("Scene.VenusCopy.Renderable.Opacity", 0.0);
    await openspace.setPropertyValueSingle("Scene.VenusCopy.Scale.Scale", 1000.0);
    await openspace.setPropertyValueSingle("Scene.VenusCopy.Renderable.PerformShading", false);

    await openspace.setPropertyValueSingle("Scene.MoonCopy.Renderable.Opacity", 0.0);
    await openspace.setPropertyValueSingle("Scene.MoonCopy.Scale.Scale", 4.0);
    await openspace.setPropertyValueSingle("Scene.MoonCopy.Renderable.PerformShading", false);

    await openspace.setPropertyValueSingle("Scene.PlutoCopy.Renderable.Opacity", 0.0);
    await openspace.setPropertyValueSingle("Scene.PlutoCopy.Scale.Scale", 50000.0);
    await openspace.setPropertyValueSingle("Scene.PlutoCopy.Renderable.PerformShading", false);
    

    await openspace.setPropertyValueSingle("Scene.Moon.Renderable.PerformShading", false);

    await openspace.setPropertyValueSingle("Scene.Mercury.Renderable.Layers.ColorLayers.Messenger_BDR_Sweden.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.Mercury.Renderable.Layers.ColorLayers.Messenger_BDR_Sweden.Fade", 1.0);
    await openspace.setPropertyValueSingle("Scene.Mercury.Renderable.Layers.ColorLayers.Messenger_BDR_Utah.Enabled", false);

    await openspace.setPropertyValueSingle("Scene.ISSProp.Translation.Position", [-1000000.0, 6800000.0, -3000000.0]);
    

    await setYearString();
    await setTotalString();

    logMessage("Completed", 3000, "lightgreen");
  } catch (e) {
    alert(`Something went wrong: ${e}`);
  }

  await OSFadeIn(1000);
}

async function reset() {
  await OSFadeOut(1000);

  await disableAllRockets();
  await resetHistory();

  let now_date = await (await openspace.time.currentWallTime())[1];
  let now_seconds = (await openspace.time.convertTime(now_date))[1]; 
  let yesterday = (await openspace.time.convertTime(now_seconds-86400))[1];
  await openspace.time.setTime(yesterday);

  await openspace.time.interpolateDeltaTime(1);

  await OSFadeIn(1000);
}

async function resetHistory() {
  await enableAllHistoryObjects(false);
  await openspace.setPropertyValueSingle("Scene.SunGlare.Renderable.Opacity", 0.65);
  await openspace.setPropertyValueSingle("Scene.Moon.Renderable.PerformShading", true);
  await openspace.setPropertyValueSingle("Scene.MarsAtmosphere.Renderable.Enabled", true);
  await openspace.setPropertyValueSingle("Scene.VenusAtmosphere.Renderable.Enabled", true);
  await openspace.setPropertyValueSingle("Scene.TitanAtmosphere.Renderable.Enabled", true);
  await openspace.setPropertyValueSingle("Scene.Mercury.Scale.Scale", 1.0);
  await openspace.setPropertyValueSingle("Scene.Venus.Scale.Scale", 1.0);
  await openspace.setPropertyValueSingle("Scene.Mars.Scale.Scale", 1.0);
  await openspace.setPropertyValueSingle("Scene.Jupiter.Scale.Scale", 1.0);
  await openspace.setPropertyValueSingle("Scene.Saturn.Scale.Scale", 1.0);
  await openspace.setPropertyValueSingle("Scene.Uranus.Scale.Scale", 1.0);
  await openspace.setPropertyValueSingle("Scene.Neptune.Scale.Scale", 1.0);
  await openspace.setPropertyValueSingle("Scene.Moon.Scale.Scale", 1.0);
  await openspace.setPropertyValueSingle("Scene.Pluto.Scale.Scale", 1.0);
}

async function enableAllHistoryObjects(show) {
  let objects = (await openspace.getProperty("{osnl_rockets}.Renderable.Enabled"))[1];
  for (let i in objects) {
    let id = objects[i];
    openspace.setPropertyValueSingle(id, show);
  }
}

// ADD FUNCTIONS HERE
async function test() {
  blinkEarth(0);
  await delay(100);
  blinkISS(0);
  await delay(100);
  blinkJupiter(0);
  await delay(100);
  blinkMars(0);
  await delay(100);
  blinkMercury(0);
  await delay(100);
  blinkNeptune(0);
  await delay(100);
  blinkSaturn(0);
  await delay(100);
  blinkUranus(0);
  await delay(100);
  blinkVenus(0);
  await delay(100);
  blinkMoon(0);
  await delay(100);
  blinkPluto(0);
  await delay(100);
}

async function setDeltaTime(time = 1) {
  await openspace.time.interpolateDeltaTime(time);
  await openspace.time.interpolatePause(false);
}

function constructYearString() {
  return `: ${YEAR} :`;
}

function constructTotalString() {
  return `Antal Raketer: ${TOTAL_ROCKETS}`;
}

async function setYearString() {
  let str = constructYearString();
  await openspace.setPropertyValueSingle("Scene.yearLabel.Renderable.Text", str);
  document.getElementById("yearLabel").innerHTML = YEAR;
}

async function setTotalString() {
  let str = constructTotalString();
  await openspace.setPropertyValueSingle("Scene.totalLabel.Renderable.Text", str);
}

async function playNextYear() {
  if (YEAR < YEAR_MAX) {
    YEAR++;

    let missions = DATA_MISSIONS_AS_OBJECT_OBJECT[YEAR];
    if(missions !== undefined) {
      for(let dest in missions) {
        blink(dest, missions[dest]);
        TOTAL_ROCKETS += missions[dest];
        await delay(150);
      }
    }

    let numberOfRockets = DATA_YEARLY_MINUS_MISSIONS[YEAR];
    TOTAL_ROCKETS += numberOfRockets;
    blink("earth", numberOfRockets);
    
    await setYearString();
    await setTotalString();
    await nextSlide();
  }
}

async function playPrevYear() {
  if (YEAR > YEAR_MIN) {
    --YEAR;

    let missions = DATA_MISSIONS_AS_OBJECT_OBJECT[YEAR];
    if(missions !== undefined) {
      for(let dest in missions) {
        TOTAL_ROCKETS -= missions[dest];
        blink(dest, missions[dest]);
        await delay(50);
      }
    }
    
    let numberOfRockets = DATA_YEARLY_MINUS_MISSIONS[YEAR];
    TOTAL_ROCKETS -= numberOfRockets;
    
    if (YEAR !== YEAR_MIN) {
      blink("earth", numberOfRockets);
    }
    

    await setYearString();
    await setTotalString();
    await prevSlide();
  }
}

async function jumpNextYears(leap = 1) {
  for (let i = 0; i < leap; ++i) {
    if (YEAR < YEAR_MAX) {
      YEAR++;
  
      let missions = DATA_MISSIONS_AS_OBJECT_OBJECT[YEAR];
      if(missions !== undefined) {
        for(let dest in missions) {
          TOTAL_ROCKETS += missions[dest];
        }
      }

      TOTAL_ROCKETS += DATA_YEARLY_MINUS_MISSIONS[YEAR];
      await setYearString();
      await setTotalString();
      await nextSlide();
    }
  }


}

async function jumpPrevYears(leap = 1) {
  for (let i = 0; i < leap; ++i) {
    if (YEAR > YEAR_MIN) {
      let missions = DATA_MISSIONS_AS_OBJECT_OBJECT[YEAR];
      if(missions !== undefined) {
        for(let dest in missions) {
          TOTAL_ROCKETS -= missions[dest];
        }
      }
      TOTAL_ROCKETS -= DATA_YEARLY_MINUS_MISSIONS[YEAR];
      --YEAR;
      await setYearString();
      await setTotalString();
      await prevSlide();
    }
  }
}

async function playYears(msPeryear = 3000) {
  PLAYER_INTERVAL = setInterval(async () => {
    if (YEAR >= YEAR_MAX) {
      clearInterval(PLAYER_INTERVAL);
      return;
    }
    await playNextYear();
  }, msPeryear);
}

async function pauseYears() {
  clearInterval(PLAYER_INTERVAL);
}

async function stopYears() {
  clearInterval(PLAYER_INTERVAL);
  YEAR = YEAR_MIN;
  TOTAL_ROCKETS = 0;
  await setTotalString();
  await setYearString();
  let dty = YEAR_MAX - YEAR_MIN;
  for (let i = 0; i <= dty; ++i) {
    prevSlide();
  }
  await nextSlide();
}

async function nextSlide() {
  await openspace.action.triggerAction("slide_deck.nextslide");
}

async function prevSlide() {
  await openspace.action.triggerAction("slide_deck.prevslide");
}

async function fireIndicator(name, speed, duration) {
  let identifier = `Scene.${name}Indicator.Renderable.TravelSpeed`;
  openspace.setPropertyValueSingle(identifier, speed);
  setTimeout(() => {
    openspace.setPropertyValueSingle(identifier, 0);
  }, duration);
}

async function flashText(target, input, duration_milli) {
  let part = `Scene.${target}CounterLabel.Renderable`;
  await openspace.setPropertyValueSingle(`${part}.Opacity`, 0);
  await openspace.setPropertyValueSingle(`${part}.Text`, input.toString());
  await openspace.setPropertyValueSingle(`${part}.Opacity`, 1);
  await delay(duration_milli);
  await openspace.setPropertyValueSingle(`${part}.Opacity`, 0, 0.5);
}

async function blink(name, num, mute = false) {
  switch (name) {
    case "iss":
      await blinkISS(num, mute);
      break;
    case "jupiter":
      await blinkJupiter(num, mute);
      break;
    case "mars":
      await blinkMars(num, mute);
      break;
    case "mercury":
      await blinkMercury(num, mute);
      break;
    case "moon":
      await blinkMoon(num, mute);
      break;
    case "neptune":
      await blinkNeptune(num, mute);
      break;
    case "pluto":
      await blinkPluto(num, mute);
      break;
    case "saturn":
      await blinkSaturn(num, mute);
      break;
    case "uranus":
      await blinkUranus(num, mute);
      break;
    case "venus":
      await blinkVenus(num, mute);
      break;
    case "earth":
      await blinkEarth(num, mute);
      break;
  }
}

async function blinkEarth(numberOfRockets, mute = false) {
  fireIndicator("earth", 50000000, 1500);
  await delay(1500);

  if (!mute) {
    AUDIO_EARTH.play();
  }

  flashText("earth", numberOfRockets, 2000);
  await openspace.setPropertyValueSingle("Scene.EarthAtmosphere.Renderable.Fade", 1.0)
  await openspace.setPropertyValueSingle("Scene.EarthAtmosphere.Renderable.Fade", 1.15, 0.25, "Linear", "openspace.setPropertyValueSingle('Scene.EarthAtmosphere.Renderable.Fade', 1, 0.25)");
}


async function blinkISS(numberOfRockets, mute = false) {
  fireIndicator("iss", 5000000000, 1500);
  await delay(1500);

  if (!mute) {
    AUDIO_ISS.play();
  }

  flashText("iss", numberOfRockets, 2000);
  await openspace.setPropertyValueSingle("Scene.ISSPropCopy.Renderable.PerformShading", false);
  await openspace.setPropertyValueSingle("Scene.ISSPropCopy.Renderable.Opacity", 1.0);
  await openspace.setPropertyValueSingle("Scene.ISSPropCopy.Scale.Scale", 1.25, 0.5, "Linear", "openspace.setPropertyValueSingle('Scene.ISSPropCopy.Scale.Scale', 1)");
  await delay(250);
  await openspace.setPropertyValueSingle("Scene.ISSPropCopy.Renderable.Opacity", 0.000000, 0.25);
}

async function blinkJupiter(numberOfRockets, mute = false) {
  fireIndicator("jupiter", 80000000000, 1500); 
  await delay(1500);

  if (!mute) {
    AUDIO_JUPITER.play();
  }

  flashText("jupiter", numberOfRockets, 2000);
  await openspace.setPropertyValueSingle("Scene.JupiterCopy.Renderable.PerformShading", false);
  await openspace.setPropertyValueSingle("Scene.JupiterCopy.Renderable.Opacity", 1.0);
  await openspace.setPropertyValueSingle("Scene.JupiterCopy.Scale.Scale", 1100.0, 0.5, "Linear", "openspace.setPropertyValueSingle('Scene.JupiterCopy.Scale.Scale', 1500)");
  await delay(250);
  await openspace.setPropertyValueSingle("Scene.JupiterCopy.Renderable.Opacity", 0.000000, 0.25);
}

async function blinkMars(numberOfRockets, mute = false) {
  fireIndicator("mars", 150000000000, 1500);
  await delay(1500);

  if (!mute) {
    AUDIO_MARS.play();
  }

  flashText("mars", numberOfRockets, 2000);
  await openspace.setPropertyValueSingle("Scene.MarsCopy.Renderable.PerformShading", false);
  await openspace.setPropertyValueSingle("Scene.MarsCopy.Renderable.Opacity", 1.0);
  await openspace.setPropertyValueSingle("Scene.MarsCopy.Scale.Scale", 3300.0, 0.5, "Linear", "openspace.setPropertyValueSingle('Scene.MarsCopy.Scale.Scale', 3000)");
  await delay(250);
  await openspace.setPropertyValueSingle("Scene.MarsCopy.Renderable.Opacity", 0.000000, 0.25);
}

async function blinkMercury(numberOfRockets, mute = false) {
  fireIndicator("mercury", 120000000000, 1500);
  await delay(1500);

  if (!mute) {
    AUDIO_MERCURY.play();
  }

  flashText("mercury", numberOfRockets, 2000);
  await openspace.setPropertyValueSingle("Scene.MercuryCopy.Renderable.PerformShading", false);
  await openspace.setPropertyValueSingle("Scene.MercuryCopy.Renderable.Opacity", 1.0);
  await openspace.setPropertyValueSingle("Scene.MercuryCopy.Scale.Scale", 2200.0, 0.5, "Linear", "openspace.setPropertyValueSingle('Scene.MercuryCopy.Scale.Scale', 2000)");
  await delay(250);
  await openspace.setPropertyValueSingle("Scene.MercuryCopy.Renderable.Opacity", 0.000000, 0.25);
}

async function blinkNeptune(numberOfRockets, mute = false) {
  fireIndicator("neptune", 80000000000, 1500);
  await delay(1500);

  if (!mute) {
    AUDIO_NEPTUNE.play();
  }

  flashText("neptune", numberOfRockets, 2000);
  await openspace.setPropertyValueSingle("Scene.NeptuneCopy.Renderable.PerformShading", false);
  await openspace.setPropertyValueSingle("Scene.NeptuneCopy.Renderable.Opacity", 1.0);
  await openspace.setPropertyValueSingle("Scene.NeptuneCopy.Scale.Scale", 8800.0, 0.5, "Linear", "openspace.setPropertyValueSingle('Scene.NeptuneCopy.Scale.Scale', 8000)");
  await delay(250);
  await openspace.setPropertyValueSingle("Scene.NeptuneCopy.Renderable.Opacity", 0.000000, 0.25);
}

async function blinkSaturn(numberOfRockets, mute = false) {
  fireIndicator("saturn", 80000000000, 1500);
  await delay(1500);

  if (!mute) {
    AUDIO_SATURN.play();
  }

  flashText("saturn", numberOfRockets, 2000);
  await openspace.setPropertyValueSingle("Scene.SaturnCopy.Renderable.PerformShading", false);
  await openspace.setPropertyValueSingle("Scene.SaturnCopy.Renderable.Opacity", 1.0);
  await openspace.setPropertyValueSingle("Scene.SaturnCopy.Scale.Scale", 2200.0, 0.5, "Linear", "openspace.setPropertyValueSingle('Scene.SaturnCopy.Scale.Scale', 2000)");
  await delay(250);
  await openspace.setPropertyValueSingle("Scene.SaturnCopy.Renderable.Opacity", 0.000000, 0.25);
}

async function blinkUranus(numberOfRockets, mute = false) {
  fireIndicator("uranus", 150000000000, 1500);
  await delay(1500);

  if (!mute) {
   AUDIO_URANUS.play();
  }

  flashText("uranus", numberOfRockets, 2000);
  await openspace.setPropertyValueSingle("Scene.UranusCopy.Renderable.PerformShading", false);
  await openspace.setPropertyValueSingle("Scene.UranusCopy.Renderable.Opacity", 1.0);
  await openspace.setPropertyValueSingle("Scene.UranusCopy.Scale.Scale", 3300.0, 0.5, "Linear", "openspace.setPropertyValueSingle('Scene.UranusCopy.Scale.Scale', 3000)");
  await delay(250);
  await openspace.setPropertyValueSingle("Scene.UranusCopy.Renderable.Opacity", 0.000000, 0.25);
}

async function blinkVenus(numberOfRockets, mute = false) {
  fireIndicator("venus", 150000000000, 1500);
  await delay(1500);

  if (!mute) {
    AUDIO_VENUS.play();
  }

  flashText("venus", numberOfRockets, 2000);
  await openspace.setPropertyValueSingle("Scene.VenusCopy.Renderable.PerformShading", false);
  await openspace.setPropertyValueSingle("Scene.VenusCopy.Renderable.Opacity", 1.0);
  await openspace.setPropertyValueSingle("Scene.VenusCopy.Scale.Scale", 1100.0, 0.5, "Linear", "openspace.setPropertyValueSingle('Scene.VenusCopy.Scale.Scale', 1500)");
  await delay(250);
  await openspace.setPropertyValueSingle("Scene.VenusCopy.Renderable.Opacity", 0.000000, 0.25);
}

async function blinkMoon(numberOfRockets, mute = false) {
  fireIndicator("moon", 80000000000, 1500);
  await delay(1500);

  if (!mute) {
    AUDIO_MOON.play();
  }

  flashText("moon", numberOfRockets, 2000);
  await openspace.setPropertyValueSingle("Scene.MoonCopy.Renderable.PerformShading", false);
  await openspace.setPropertyValueSingle("Scene.MoonCopy.Renderable.Opacity", 1.0);
  await openspace.setPropertyValueSingle("Scene.MoonCopy.Scale.Scale", 6.0, 0.5, "Linear", "openspace.setPropertyValueSingle('Scene.MoonCopy.Scale.Scale', 4)");
  await delay(250);
  await openspace.setPropertyValueSingle("Scene.MoonCopy.Renderable.Opacity", 0.000000, 0.25);
}

async function blinkPluto(numberOfRockets, mute = false) {
  fireIndicator("pluto", 300000000000, 1500);
  await delay(1500);

  if (!mute) {
    AUDIO_PLUTO.play();
  }

  flashText("pluto", numberOfRockets, 2000);
  await openspace.setPropertyValueSingle("Scene.PlutoCopy.Renderable.PerformShading", false);
  await openspace.setPropertyValueSingle("Scene.PlutoCopy.Renderable.Opacity", 1.0);
  await openspace.setPropertyValueSingle("Scene.PlutoCopy.Scale.Scale", 65000.0, 0.5, "Linear", "openspace.setPropertyValueSingle('Scene.PlutoCopy.Scale.Scale', 50000)");
  await delay(250);
  await openspace.setPropertyValueSingle("Scene.PlutoCopy.Renderable.Opacity", 0.000000, 0.25);
}

async function toggleBlackout() {
  let fade = (await openspace.getPropertyValue("ScreenSpace.blackoutbrowser.Fade"))[1];
  let enabled = (await openspace.getPropertyValue("ScreenSpace.blackoutbrowser.Enabled"))[1];
  if (enabled) {
    if (fade > 0.5) {
      await openspace.setPropertyValueSingle(
        "ScreenSpace.blackoutbrowser.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Enabled", false)'
      );
    } else {
      await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Fade", 1, 2);
    }
  } else {
    await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Fade", 0);
    await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Enabled", true);
    await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Fade", 1, 2);
  }
}


async function toggleGraph() {
  await openspace.action.triggerAction("slide_deck.toggleslides")
}


async function togglePad39A() {
  let fade = (await openspace.getPropertyValue("Scene.osnl_falcon9_pad.Renderable.Fade"))[1];
  let enabled = (await openspace.getPropertyValue("Scene.osnl_falcon9_pad.Renderable.Enabled"))[1];
  if (enabled) {
    if (fade > 0.5) {
      await openspace.setPropertyValueSingle(
        "Scene.osnl_falcon9_pad.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_falcon9_pad.Renderable.Enabled", false)'
      );

      await openspace.setPropertyValueSingle(
        "Scene.osnl_human_39A.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_human_39A.Renderable.Enabled", false)'
      );
    } else {
      await openspace.setPropertyValueSingle("Scene.osnl_falcon9_pad.Renderable.Fade", 1, 2);
      await openspace.setPropertyValueSingle("Scene.osnl_human_39A.Renderable.Fade", 1, 2);
    }
  } else {
    await openspace.setPropertyValueSingle("Scene.osnl_falcon9_pad.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_falcon9_pad.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_falcon9_pad.Renderable.Fade", 1, 2);

    await openspace.setPropertyValueSingle("Scene.osnl_human_39A.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_human_39A.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_human_39A.Renderable.Fade", 1, 2);
  }
}

async function togglePad39b() {
  let fade = (await openspace.getPropertyValue("Scene.osnl_saturnv_pad.Renderable.Fade"))[1];
  let enabled = (await openspace.getPropertyValue("Scene.osnl_saturnv_pad.Renderable.Enabled"))[1];
  if (enabled) {
    if (fade > 0.5) {
      await openspace.setPropertyValueSingle(
        "Scene.osnl_saturnv_pad.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_saturnv_pad.Renderable.Enabled", false)'
      );

      await openspace.setPropertyValueSingle(
        "Scene.osnl_saturnv_pad.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_human_39B.Renderable.Enabled", false)'
      );
    } else {
      await openspace.setPropertyValueSingle("Scene.osnl_saturnv_pad.Renderable.Fade", 1, 2);
      await openspace.setPropertyValueSingle("Scene.osnl_human_39B.Renderable.Fade", 1, 2);
    }
  } else {
    await openspace.setPropertyValueSingle("Scene.osnl_saturnv_pad.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_saturnv_pad.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_saturnv_pad.Renderable.Fade", 1, 2);

    await openspace.setPropertyValueSingle("Scene.osnl_human_39B.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_human_39B.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_human_39B.Renderable.Fade", 1, 2);
  }
}

async function toggleS() {
  let fade = (await openspace.getPropertyValue("Scene.osnl_starship.Renderable.Fade"))[1];
  let enabled = (await openspace.getPropertyValue("Scene.osnl_starship.Renderable.Enabled"))[1];
  if (enabled) {
    if (fade > 0.5) {
      await openspace.setPropertyValueSingle(
        "Scene.osnl_starship.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_starship.Renderable.Enabled", false)'
      );

      await openspace.setPropertyValueSingle(
        "Scene.osnl_human_starship.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_human_starship.Renderable.Enabled", false)'
      );
    } else {
      await openspace.setPropertyValueSingle("Scene.osnl_starship.Renderable.Fade", 1, 2);
      await openspace.setPropertyValueSingle("Scene.osnl_human_starship.Renderable.Fade", 1, 2);
    }
  } else {
    await openspace.setPropertyValueSingle("Scene.osnl_starship.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_starship.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_starship.Renderable.Fade", 1, 2);

    await openspace.setPropertyValueSingle("Scene.osnl_human_starship.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_human_starship.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_human_starship.Renderable.Fade", 1, 2);
  }
}

async function toggleSS() {
  let fade = (await openspace.getPropertyValue("Scene.osnl_spaceshuttle.Renderable.Fade"))[1];
  let enabled = (await openspace.getPropertyValue("Scene.osnl_spaceshuttle.Renderable.Enabled"))[1];
  if (enabled) {
    if (fade > 0.5) {
      await openspace.setPropertyValueSingle(
        "Scene.osnl_spaceshuttle.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_spaceshuttle.Renderable.Enabled", false)'
      );

      await openspace.setPropertyValueSingle(
        "Scene.osnl_human_spaceshuttle.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_human_spaceshuttle.Renderable.Enabled", false)'
      );
    } else {
      await openspace.setPropertyValueSingle("Scene.osnl_spaceshuttle.Renderable.Fade", 1, 2);
      await openspace.setPropertyValueSingle("Scene.osnl_human_spaceshuttle.Renderable.Fade", 1, 2);
    }
  } else {
    await openspace.setPropertyValueSingle("Scene.osnl_spaceshuttle.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_spaceshuttle.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_spaceshuttle.Renderable.Fade", 1, 2);

    await openspace.setPropertyValueSingle("Scene.osnl_human_spaceshuttle.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_human_spaceshuttle.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_human_spaceshuttle.Renderable.Fade", 1, 2);
  }
}

async function toggleSV() {
  let fade = (await openspace.getPropertyValue("Scene.osnl_saturnv.Renderable.Fade"))[1];
  let enabled = (await openspace.getPropertyValue("Scene.osnl_saturnv.Renderable.Enabled"))[1];
  if (enabled) {
    if (fade > 0.5) {
      await openspace.setPropertyValueSingle(
        "Scene.osnl_saturnv.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_saturnv.Renderable.Enabled", false)'
      );

      await openspace.setPropertyValueSingle(
        "Scene.osnl_human_saturnv.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_human_saturnv.Renderable.Enabled", false)'
      );
    } else {
      await openspace.setPropertyValueSingle("Scene.osnl_saturnv.Renderable.Fade", 1, 2);
      await openspace.setPropertyValueSingle("Scene.osnl_human_saturnv.Renderable.Fade", 1, 2);
    }
  } else {
    await openspace.setPropertyValueSingle("Scene.osnl_saturnv.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_saturnv.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_saturnv.Renderable.Fade", 1, 2);

    await openspace.setPropertyValueSingle("Scene.osnl_human_saturnv.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_human_saturnv.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_human_saturnv.Renderable.Fade", 1, 2);
  }
}

async function toggleF9() {
  let fade = (await openspace.getPropertyValue("Scene.osnl_falcon9.Renderable.Fade"))[1];
  let enabled = (await openspace.getPropertyValue("Scene.osnl_falcon9.Renderable.Enabled"))[1];
  if (enabled) {
    if (fade > 0.5) {
      await openspace.setPropertyValueSingle(
        "Scene.osnl_falcon9.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_falcon9.Renderable.Enabled", false)'
      );

      await openspace.setPropertyValueSingle(
        "Scene.osnl_human_falcon9.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_human_falcon9.Renderable.Enabled", false)'
      );
    } else {
      await openspace.setPropertyValueSingle("Scene.osnl_falcon9.Renderable.Fade", 1, 2);
      await openspace.setPropertyValueSingle("Scene.osnl_human_falcon9.Renderable.Fade", 1, 2);
    }
  } else {
    await openspace.setPropertyValueSingle("Scene.osnl_falcon9.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_falcon9.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_falcon9.Renderable.Fade", 1, 2);

    await openspace.setPropertyValueSingle("Scene.osnl_human_falcon9.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_human_falcon9.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_human_falcon9.Renderable.Fade", 1, 2);
  }
}

async function toggleA5() {
  let fade = (await openspace.getPropertyValue("Scene.osnl_ariane5.Renderable.Fade"))[1];
  let enabled = (await openspace.getPropertyValue("Scene.osnl_ariane5.Renderable.Enabled"))[1];
  if (enabled) {
    if (fade > 0.5) {
      await openspace.setPropertyValueSingle(
        "Scene.osnl_ariane5.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_ariane5.Renderable.Enabled", false)'
      );

      await openspace.setPropertyValueSingle(
        "Scene.osnl_human_ariane5.Renderable.Fade",
        0,
        2,
        "Linear",
        'openspace.setPropertyValueSingle("Scene.osnl_human_ariane5.Renderable.Enabled", false)'
      );
    } else {
      await openspace.setPropertyValueSingle("Scene.osnl_ariane5.Renderable.Fade", 1, 2);
      await openspace.setPropertyValueSingle("Scene.osnl_human_ariane5.Renderable.Fade", 1, 2);
    }
  } else {
    await openspace.setPropertyValueSingle("Scene.osnl_ariane5.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_ariane5.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_ariane5.Renderable.Fade", 1, 2);

    await openspace.setPropertyValueSingle("Scene.osnl_human_ariane5.Renderable.Fade", 0);
    await openspace.setPropertyValueSingle("Scene.osnl_human_ariane5.Renderable.Enabled", true);
    await openspace.setPropertyValueSingle("Scene.osnl_human_ariane5.Renderable.Fade", 1, 2);
  }
}

async function disablePads() {
  await openspace.setPropertyValueSingle("Scene.osnl_saturnv_pad.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_falcon9_pad.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_human_39A.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_human_39B.Renderable.Enabled", false);
}

async function disableAllRockets() {
  await openspace.setPropertyValueSingle("Scene.osnl_saturnv_pad.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_falcon9_pad.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_human_39A.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_human_39B.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_saturnv.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_ariane5.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_spaceshuttle.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_falcon9.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_starship.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_human_starship.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_human_saturnv.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_human_falcon9.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_human_spaceshuttle.Renderable.Enabled", false);
  await openspace.setPropertyValueSingle("Scene.osnl_human_ariane5.Renderable.Enabled", false);
}


async function playAllAudio() {
  AUDIO_ISS.play();
  await delay(250);
  AUDIO_JUPITER.play();
  await delay(250);
  AUDIO_MARS.play();
  await delay(250);
  AUDIO_MERCURY.play();
  await delay(250);
  AUDIO_MOON.play();
  await delay(250);
  AUDIO_NEPTUNE.play();
  await delay(250);
  AUDIO_PLUTO.play();
  await delay(250);
  AUDIO_SATURN.play();
  await delay(250);
  AUDIO_URANUS.play();
  await delay(250);
  AUDIO_VENUS.play();
}

// =========================


async function OSFadeOut(ms = 1000) {
  await openspace.setPropertyValueSingle("RenderEngine.BlackoutFactor", 0.0, ms / 1000);
  await delay(ms*1.1);
}

async function OSFadeIn(ms = 1000) {
  await openspace.setPropertyValueSingle("RenderEngine.BlackoutFactor", 1.0, ms / 1000);
  await delay(ms*1.1);
}


async function isAssetLoaded(asset, show = true) {
  let loadedAssets = await openspace.asset.allAssets();
  let filtered = Object.values(loadedAssets[1]).filter( v => v.split("\\").pop() == asset);
  if (filtered.length == 0) {
    if(show) {
      alert(`Missing asset: ${asset}`);
    }
    return false;
  }

  return true;
}

// ==========================


function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

async function validateServerCommuinication() {
  const url = `https://eu-central-1.aws.data.mongodb-api.com/app/data-nqqkk/endpoint/ping`;
  const options = {method: 'GET'};

  await fetch(url, options).then(async function(response) {
      if (!response.ok) {
          throw new Error("Not 2xx response", {cause: response});
      } else {
        if (await isAssetLoaded("blackoutbrowser.asset", false) === false) {
          hideBlackoutDiv("Add blackoutbrowser.asset and reload page if you want controls");
        }
      }
  }).catch(function(err) {
    let msg = "Cannot connect to blackout database";
    hideBlackoutDiv(msg);
  });
}

function hideBlackoutDiv(msg) {
  document.getElementById("blackoutDiv").innerHTML = `<h2 style="color: orange;">${msg}</h2>`;
}

async function enableBlackoutControls() {
  // Check if asset is loaded
  let loadedAssets = await openspace.asset.allAssets();
  let filtered = Object.values(loadedAssets[1]).filter( v => v.split("\\").pop() == "blackoutbrowser.asset");
  if (filtered.length == 0) {
    alert("Missing asset: blackoutbrowser.asset")
    return;
  }
  

  if (READ_KEY === undefined) {
    // Get readkey
    const readURL = `https://eu-central-1.aws.data.mongodb-api.com/app/data-nqqkk/endpoint/getreadkey`;
    const readOptions = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        site: document.getElementById("siteinput").value.toLowerCase(),
        passkey: btoa(document.getElementById("passinput").value)
      })
    }

    try {
      const response = await fetch(readURL, readOptions);
      const parsedResponse = await response.json();
      const numRes = Number(parsedResponse);
      if (isNaN(numRes) === true) { // We got key back and not error code
        READ_KEY = parsedResponse;
      } else {
        if (numRes === 0) {
          logMessage("Incorrect site or password");
        } else if (numRes === -1) {
          logMessage("Too many incorrect attempts, try again later...");
        }
        else {
          logMessage("Something went wrong, try again later...");
        }
        return
      }
    } catch(e)  {
      console.error(e)
    }
  }

  const url = `https://eu-central-1.aws.data.mongodb-api.com/app/data-nqqkk/endpoint/read?readkey=${READ_KEY}`;
  const options = {method: 'GET'};

  let parsedResponse = undefined;
  try {
    const response = await fetch(url, options);
    parsedResponse = JSON.parse((await response.json()));
  } catch (error) {
    console.error(error);
  }

  if(Object.keys(parsedResponse).length > 0) {
    data = parsedResponse;
    document.getElementById("siteinput").disabled = true;
    document.getElementById("passinput").disabled = true;
    await addBlackoutControls();
    await overrideBlackoutScalePos();
    document.getElementById("blackoutbox").style.display = "block";
    document.getElementById("goButton").disabled = true;
    document.getElementById("goButton").style.display = "none";
  }
}

async function addBlackoutControls() {

  let names = [];
  let points = [];
  Object.entries(data.points).map(v => {
    names.push(v[0]);
    points.push(v[1]);
  });

  // Create all elements
  const ul = document.createElement("ul");
  ul.setAttribute("id", "blackoutcontrolslist");
  points.forEach( (p,idx)=> {
    const id = names[idx].split("Corner")[0].slice(1);
    const li = document.createElement("li");
    const inp1 = document.createElement("input");
    const inp2 = document.createElement("input");
    const lb = document.createElement("label");

    li.setAttribute("class", "blackoutcontrolslist");
    inp1.setAttribute("type", "number");
    inp1.setAttribute("id", `p${id}x`);
    inp1.setAttribute("class", "blackoutcontrolsboxes");
    inp1.setAttribute("onfocusout", "checkEmpty(this, 0.0, 1.0, 0.0)");
    inp2.setAttribute("type", "number");
    inp2.setAttribute("id", `p${id}y`);
    inp2.setAttribute("class", "blackoutcontrolsboxes");
    inp2.setAttribute("onfocusout", "checkEmpty(this, 0.0, 1.0, 0.0)");
    lb.setAttribute("style", "display: inline-block; width: 64px;");

    let corner = names[idx].split("Corner")[1];
    lb.innerText = `p${id}${(corner) ? ` ${corner}` : ""}: `;
    inp1.value = p.x;
    inp2.value = p.y;

    li.appendChild(lb);
    li.appendChild(inp1);
    li.appendChild(inp2);
    ul.appendChild(li);    
  });
  document.getElementById("blackoutleft").appendChild(ul);

  const ulRight = document.createElement("ul");
  const liScale = document.createElement("li");
  const inpScale = document.createElement("input");
  const lbScale = document.createElement("label");

  lbScale.setAttribute("style", "display: inline-block; width: 64px;");
  lbScale.innerText = "Scale: ";

  inpScale.setAttribute("type", "number");
  inpScale.setAttribute("id", "inputscale");
  inpScale.setAttribute("onfocusout", "checkEmpty(this, 0.0, 2.0, 0.25)");
  inpScale.setAttribute("style", "width: 48px; height: 28px;");
  inpScale.value = data.scale.toFixed(2);

  const lbPosition = document.createElement("label");
  const liPosition = document.createElement("li");
  const inpPosRa = document.createElement("input");
  const inpPosAz = document.createElement("input");
  const inpPosEl = document.createElement("input");

  lbPosition.setAttribute("style", "display: inline-block; width: 64px;");
  lbPosition.innerText = "Position: ";

  inpPosRa.setAttribute("type", "number");
  inpPosAz.setAttribute("type", "number");
  inpPosEl.setAttribute("type", "number");
  inpPosRa.setAttribute("id", "inputPosRa");
  inpPosAz.setAttribute("id", "inputPosAz");
  inpPosEl.setAttribute("id", "inputPosEl");
  inpPosRa.setAttribute("onfocusout", "checkEmpty(this, 0.0, 10.0, 2.0)");
  inpPosAz.setAttribute("onfocusout", "checkEmpty(this, -3.14, 3.14, 0.0)");
  inpPosEl.setAttribute("onfocusout", "checkEmpty(this, -1.57, 1.57, 0.0)");
  inpPosRa.setAttribute("style", "width: 48px; height: 28px;");
  inpPosAz.setAttribute("style", "width: 48px; height: 28px;");
  inpPosEl.setAttribute("style", "width: 48px; height: 28px;");
  
  inpPosRa.value = data.position[0].toFixed(2);
  inpPosAz.value = data.position[1].toFixed(2);
  inpPosEl.value = data.position[2].toFixed(2);

  liScale.appendChild(lbScale);
  liScale.appendChild(inpScale);
  liPosition.appendChild(lbPosition);
  liPosition.appendChild(inpPosRa);
  liPosition.appendChild(inpPosAz);
  liPosition.appendChild(inpPosEl);
  
  ulRight.appendChild(liScale);
  ulRight.appendChild(liPosition);

  document.getElementById("blackoutright").appendChild(ulRight);

  // Button
  let btnsave = document.createElement("button");
  btnsave.setAttribute("onclick", "setBlackoutValues()");
  btnsave.setAttribute("id", "save");
  btnsave.setAttribute("style", "width: 100%;");
  btnsave.innerText = "save all"
  document.getElementById("blackoutbox").appendChild(btnsave);

  let btnoverride = document.createElement("button");
  btnoverride.setAttribute("onclick", "overrideBlackoutScalePos()");
  btnoverride.setAttribute("id", "override");
  btnoverride.setAttribute("style", "width: 100%;");
  btnoverride.innerText = "set"
  document.getElementById("blackoutright").appendChild(btnoverride);

}

function checkEmpty(that, min, max, def) {
  if (that.value === "") {
    that.value = def;
    return
  }
  that.value = clamp(that.value, min, max);
}

async function setBlackoutValues(){
  let elems = document.getElementsByClassName("blackoutcontrolslist");
  let bodyData = {};
  for (let el of elems) {
    let px = Number(el.children[1].value);
    let py = Number(el.children[2].value);
    
    let text = el.children[0].innerText.split(":")[0];
    let pval = text.split(" ") [0];
    let corner = text.split(" ") [1];

    let propertyName = pval;
    if (corner) {
      propertyName += `Corner${corner}`;
    }

    bodyData[propertyName] = {x: px, y: py};
  }

  // Get current scale and position from OpenSpace
  const scale = (await openspace.getPropertyValue("ScreenSpace.blackoutbrowser.Scale"))[1];
  const position = (await openspace.getPropertyValue("ScreenSpace.blackoutbrowser.RadiusAzimuthElevation"))[1];
  
  // PUT Data
  let site = (document.getElementById("siteinput").value).toLowerCase();
  const url = `https://eu-central-1.aws.data.mongodb-api.com/app/data-nqqkk/endpoint/update`;
  const options = {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      site: site,
      passkey: btoa(document.getElementById("passinput").value),
      scale: scale,
      position: position,
      points: bodyData
    })
  };

  try {
    const response = await fetch(url, options);

    let couldUpdate = await response.json();
    if (couldUpdate === 1) {
      // Update OpenSpace
      await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Scale", scale);
      await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.RadiusAzimuthElevation", position);
      
      // Update GUI
      document.getElementById("inputscale").value = scale.toFixed(2);
      document.getElementById("inputPosRa").value = position[0].toFixed(2);
      document.getElementById("inputPosAz").value = position[1].toFixed(2);
      document.getElementById("inputPosEl").value = position[2].toFixed(2);

      // log to screen
      logMessage("Success", 2000, "lightgreen");
    }
    return;
  } catch (error) {
    console.error(error);
  }
}

async function overrideBlackoutScalePos() {
  const scale = Number(document.getElementById("inputscale").value);
  const position = [
    Number(document.getElementById("inputPosRa").value),
    Number(document.getElementById("inputPosAz").value),
    Number(document.getElementById("inputPosEl").value)
  ]

  await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.Scale", scale);
  await openspace.setPropertyValueSingle("ScreenSpace.blackoutbrowser.RadiusAzimuthElevation", position);
}