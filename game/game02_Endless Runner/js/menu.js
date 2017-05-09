var menuState = {
	create: function(){
		//creates background
		this.skys = game.add.sprite(0,0, 'sky');
		this.skys.scale.setTo(2,1);
		// creates mountain 
		this.mountainBack = game.add.sprite(0,0, 'mountains-back');
		this.mountainMid1 = game.add.sprite(0,0, 'mountains-mid2');
		this.mountainMid2 = game.add.sprite(0,0, 'mountains-mid1');
		

		this.platforms = game.add.sprite(0, game.world.height-25, 'platform');
		this.platforms.scale.setTo(2,2);

		// text for "menu"
		var nameLabel = game.add.text(90,90, 'Balloon Runner',
										{font: '50px Arial Italic', fill: '#ffff' });
		// text for "start"
		var startLabel = game.add.text(90, game.world.height-80, ' Dodge the tanks and planes!\nPress spacebar to start!',
										{font: '20px Arial', fill: '#ffff'});

		// defines space bar as so we can start game	
		var spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spacebar.onDown.addOnce(this.start, this);

	},
	start: function(){
		game.state.start('play');
	}
};