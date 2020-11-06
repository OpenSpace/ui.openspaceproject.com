var reloadButtons = {
  title: "Reload",
  buttons: {
    'Go to Earth (again)':() => { 
      openspace.statemachine.goTo("Earth");
    }
  }
};

var earthButtonGroups = [reloadButtons];
