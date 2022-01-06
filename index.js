/*****Beginning Game*****/
/**Var ordinari**/
var engine = require('../workshop-engine');
var jediName; // your Jedi name
var forcePower = 0; // force power gained meditating at the Jedi Temple
var bountyValue = 0; // starts at 0, if it reaches 100 you get busted and lose the game
var fear = 0; // starts at 0, if it reaches 100 you join the Dark side and lose the game
var vulnerabilities = 0; // number of vulnerabilities found
var jediKnight = false; // boolean to indicate if the player has reached Jedi knight level
var hitpoints = 30 // your current hitpoints
/*var ancientTexts = [
  { chapter: 1, technique: '□Fo□□rc□e L□ea□p□□' },
  { chapter: 2, technique: 'T□ra□□n□□□s□fe□r F□o□rc□e□□' },
  { chapter: 3, technique: 'Fo□□rc□e B□urs□t' },
  { chapter: 4, technique: '□□M□alac□i□a' },
  { chapter: 5, technique: '□Fo□rce□□ We□a□□po□n' }
];*/
var sithLord = {
  name: 'Darth Tekman',
  hitpoints: 45,
  counterImmune: false
};
/**Var ordinari**/

/***MY THINGS***/
/**MY VAR GLOBAL**/

/*require*/
var gameOver = require("./gameOver");
var vFear = require("./carateristicas/vfear");
var vLevel = require("./carateristicas/vLevel");
var vBountyValue = require("./carateristicas/vBountyValue");
var vForcePower = require("./carateristicas/vForcePower");
var rauxForcePower = require("./carateristicas/rauxForcePower")
/*end require*/

var vLevel1 = true;
var vLevel2 = false;
var vLevel3 = false;
var auxFear = 0;

/*array's*/
var rLevel = [0, 0, 0, 0, 0];
/*end array's*/
/**END MY VAR GLOBAL**/
/***END MY THINGS***/

/*Restart*/
function restart() {
  var answer = prompt('\nTry again?(Y/n)\n');
  switch (answer) {
    case 'Y':
      vLevel1 = true;
      vLevel2 = false;
      vLevel3 = false;
      rLevel = [0, 0, 0, 0, 0];
      forcePower = 0; // force power gained meditating at the Jedi Temple
      bountyValue = 0; // starts at 0, if it reaches 100 you get busted and lose the game
      fear = 0; // starts at 0, if it reaches 100 you join the Dark side and lose the game
      vulnerabilities = 0; // number of vulnerabilities found
      jediKnight = false; // boolean to indicate if the player has reached Jedi knight level
      hitpoints = 30 // your current hitpoints
      /*ancientTexts = [
        { chapter: 1, technique: '□Fo□□rc□e L□ea□p□□' },
        { chapter: 2, technique: 'T□ra□□n□□□s□fe□r F□o□rc□e□□' },
        { chapter: 3, technique: 'Fo□□rc□e B□urs□t' },
        { chapter: 4, technique: '□□M□alac□i□a' },
        { chapter: 5, technique: '□Fo□rce□□ We□a□□po□n' }
      ];*/
      sithLord = {
        name: 'Darth Tekman',
        hitpoints: 45,
        counterImmune: false
      };
      console.log('\nLet\'s go again ' + jediName + '\n');
      console.clear();
      engine.showBanner('Jedi Room\'s');
      console.log('\nWelcome ' + jediName + ' again to the force, les\'t go begin the game!\n');
      console.log("\nWelcome %s again to the force, les't go begin the game!\n", jediName);
      break;

    case 'n':
      console.clear();
      engine.showBanner('Te     logo');
      engine.quit();
      break;

    default:
      console.log('The option is not valid');
      restart();
      break;
  }

}
/*end Restart*/

/**End My thing**/

/***** BEFORE STAGE ******/
var bStage = engine.create({
  type: 'before',
  name: 'BStage',
});

/** Welcome Banner **/
bStage.executeBefore(function() {
  gameOver.gameOver(fear, bountyValue, forcePower);
  engine.showBanner('Welcome Jedi');
  engine.showBanner('Game Rules');
  console.log('- Defeat the Sith Lord to win\n- Find vulnerabilities to infiltrate the Star Destroyer\n- Learn force techniques through ancient texts\n- All of your actions will increase your fear\n- If your bounty value or fear reaches 100, you lose\n- If your fear becomes higher than 70, you are experienced enough and become a Jedi Knight  ');
});
/**End Banner */

/**AddName Jedi **/
bStage.addQuestion({
  type: 'input',
  message: 'What do you want to call yourself future jedi Knight?',
  action: function(answer) {
    jediName = answer;
    console.clear();
    engine.showBanner('Jedi Room\'s');
    console.log(`\nWelcome to the force ${jediName}, les\'t go begin the game!\n`);
    game();
  }
})
/**End AddName Jedi **/

/*****END BEFORE STAGE ******/




/*****End Beginning Game******/

function level1() {

/***JEDI TEMPLE***/
  var jediTemple = engine.create({
    type: 'stage',
    name: 'Jedi Temple',
  }
  );

  /**Before jediTemple **/
  jediTemple.executeBefore(function() {
    console.clear();
    engine.showBanner('Jedi Temple');
    console.log('\nThis moment your Force power is: ' + forcePower + '\nThis moment your fear is: ' + fear);
  });
  /**End Before jediTemple **/

  /*Input jediTemple*/
  jediTemple.addQuestion({
    type: 'list',
    message: '\n\nThe number of hours you want to be connecting with Force? \n8h = +10 fear / +15 Fpower \n16h = +25 fear / +30 Fpower \n24h = +60 fear / +45 Fpower\n',
    options: ['8', '16', '24'],
    action: function(answer) {

      /*conditions of the fear*/
      vFear.vFear(fear, auxFear);
      /*end conditions of the fear*/

      switch (answer) {
        case '8':
          forcePower = forcePower + 15 + auxFear;
          fear = fear + 10;
          break;

        case '16':
          forcePower = forcePower + 30 + auxFear;
          fear = fear + 30;
          break;

        case '24':
          forcePower = forcePower + 45 + auxFear;
          fear = fear + 60;
          break;
      }
      if(!vLevel2)
      {
      if (rLevel[0] != 1) rLevel[0] = 1;
      }
      //Verificação medo
    },
  });
  /*End Input jediTemple*/

  /**After jediTemple **/
  jediTemple.executeAfter(function() {
    console.clear();
    var isGameOver = gameOver.gameOver(fear, bountyValue, forcePower);
    if (isGameOver) {
      if (vLevel1) {
        restart();
      }
      else {
        console.clear();
        engine.showBanner('GameOver');
        engine.quit();
      }
    }

    engine.showBanner('Jedi Room\'s');
    var axvLevel = vLevel.vLevel(rLevel, vLevel2);
    if (axvLevel) {
      vLevel1 = false;
      vLevel2 = axvLevel;
    }

  });
  /**End After jediTemple **/

  /***END JEDI TEMPLE***/

  /***CANTINA***/
  var cantina = engine.create({
    type: 'stage',
    name: 'Cantina',
  }
  );


  /*Before Cantina*/
  cantina.executeBefore(function() {
    console.clear();
    engine.showBanner('Cantine');
    console.log('\nThis moment your Force power is: ' + forcePower + '\nThis moment your fear is: ' + fear + '\nThis moment your Vulnerabilities is: ' + vulnerabilities + '\n\n');
  });
  /*End Before Cantina*/

  /*Cantine Logic*/
  cantina.addQuestion({
    type: 'list',
    message: '\n In this room you will have to make decisions that will definitely affect your journey to becoming a Jedi King.\n Make a wise decision depending on your current state.\n May the force be with YOU!\n',
    options: ['Use Jedi Minf Trinck?', 'Search for vulnerabilities', 'End Cantine'],
    action: function(answer) {
      switch (answer) {
        case 'Use Jedi Minf Trinck?':
          if (bountyValue != 0) {
            var auxfp = rauxForcePower.rauxForcePower(15, 45);
            forcePower = forcePower - auxfp;
            bountyValue = bountyValue - auxfp;
            console.clear();
            engine.showBanner('Cantine');
            prompt('To loss ' + auxfp + ' Force Power and bounty value \nThis moment your Force Power is:' + forcePower + '\nThis moment your bounty value is:' + bountyValue);
            if (rLevel[1] != 1) rLevel[1] = 1;
          }
          break;


        case 'Search for vulnerabilities':
          var auxV = rauxForcePower.rauxForcePower(25, 65);
          vulnerabilities = vulnerabilities + auxV
          var auxBV = rauxForcePower.rauxForcePower(15, 45);
          bountyValue = bountyValue + auxBV;
          console.clear();
          engine.showBanner('Cantine');
          prompt('To win ' + auxV + ' vulnerabilities and win bounty value is '+auxBV+'\nThis moment your vulnerabilities is:' + vulnerabilities + '\nThis moment your bounty value is:' + bountyValue );
          if (rLevel[2] != 1) rLevel[2] = 1;
          break;


        case 'End Cantine':


          break;
      }
    }
  });
  /** end Cantine Logic**/


  /**After cantine **/
  cantina.executeAfter(function() {
    console.clear();
    var isGameOver = gameOver.gameOver(fear, bountyValue, forcePower);
    if (isGameOver) {
      if (vLevel1) {
        restart();
      }
      else {
        console.clear();
        engine.showBanner('GameOver');
        engine.quit();
      }
    }
    engine.showBanner('Jedi Room\'s');
    var axvLevel = vLevel.vLevel(rLevel);
    if (axvLevel) {
      vLevel1 = false;
      vLevel2 = axvLevel;
      game();
      rLevel[0]=0;
      axvLevel = false;
    }
    vForcePower.vForcePower(forcePower,vLevel1,vLevel2);
  });
  /**End After cantine **/
  /***CANTINA***/
}

/*function level2() {
  if (vLevel2) {
    var ahchTo = engine.create({
      type: 'stage',
      name: 'Ahch-To',
    }
    );
  }

  if (vLevel2) {
    var jediTraining = engine.create({
      type: 'stage',
      name: 'Jedi Training',
    }
    );
  }

}

function level3() {
  var starDestroyer = engine.create({
    type: 'stage',
    name: 'Star Destroyer',
  }
  );
}*/



function game() {
  if (vLevel1) level1(); //Stage leve I 
  else if (vLevel2) level2(); //Stage leve II
  else if (vLevel3) level3(); //Stage leve III
}


engine.run();


