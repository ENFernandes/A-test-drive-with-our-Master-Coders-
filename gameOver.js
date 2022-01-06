module.exports = {
  gameOver: function(fear, bountyValue, forcePower) {
    var isGameOver = false;
    if (fear >= 100 || bountyValue >= 100) {
      console.log(`GameOver, your Fear is ${fear} and your Bounty Value is ${bountyValue}`);
      isGameOver=true;
    }
    else {
      console.log('\nYou Force Power is: ' + forcePower + '\nYou Fear is: ' + fear + '\n');
      
    }
    return isGameOver;
  }
}
