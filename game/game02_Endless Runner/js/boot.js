var bootState = {
  
    create: function(){
    	//boots PHYSICS ENGINE
    	game.physics.startSystem(Phaser.Physics.ARCADE);
    	game.state.start('load');
    }

};