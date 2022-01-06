module.exports = {
  vBountyValue: function(bountyValue, forcePower) {
    if (bountyValue == 0) {
      prompt('Your bounty value is 0, take advantage and choose another option');
      return 0;
    }
    else if (forcePower < 15) {
      console.clear();
      engine.showBanner('Cantine');
      prompt(`Your Force Power is ${forcePower} , go Jedi Temple fristh`);
      return 0;
    }
    else {
      return bountyValue;
    }
  }
}