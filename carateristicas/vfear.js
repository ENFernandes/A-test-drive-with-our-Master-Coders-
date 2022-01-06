module.exports = {
  
  vFear: function(fear, auxFear) 
  {
    if (fear >= 10 && fear < 30) {
      auxFear = -5;
    }
    else if (fear >= 30 && fear <= 60) {
      auxFear = -10
    }
    else if (fear >= 60) {
      auxFear = -15;
    }

  }

}