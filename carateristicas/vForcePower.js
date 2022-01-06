module.exports={
    vForcePower : function (forcePower, vLevel1, vLevel2){
        if (forcePower < 0) {
        forcePower = 0;
        prompt('CAREFUL your Force Power is 0, go the Jedi Temple');
        vLevel1 = true;
        vLevel2 = false;
      }
    }
}