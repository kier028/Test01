var loadState = {
	preload: function(){

	// text for loading
		var loadingLabel = game.add.text(80, 150, 'loading assets!', 
											{font: '30px Sans', fill: '#fff' });
	//load in images
		game.load.spritesheet('tank', 'assets/img/tank1.png', 65, 47, 7);
		game.load.image('cat', 'assets/img/balloon_cat.png');
		game.load.image('sky', 'assets/img/sky.png');
		game.load.image('fast', 'assets/img/fast.png');
		game.load.spritesheet('plane', 'assets/img/plane.png', 140, 67);
		game.load.image('mountains-back', 'assets/img/mountains-back.png');
		game.load.image('mountains-mid1', 'assets/img/mountains-mid1.png');
		game.load.image('mountains-mid2', 'assets/img/mountains-mid2.png');
		game.load.image('platform', 'assets/img/platform.png');
		game.load.audio('music', ['assets/audio/shantae_music.mp3', 'assets/audio/shantae_music.ogg']);
		game.load.audio('explosion', ['assets/audio/explosion.mp3', 'assets/audio/explosion.ogg']);
		game.load.audio('gameover', ['assets/audio/gameover.mp3', 'assets/audio/gameover.ogg']);
		game.load.audio('bounce', ['assets/audio/gameover.mp3', 'assets/audio/bounce.ogg']);
	},

	create: function(){
		//starts the menu
		game.state.start('menu');
	}
};