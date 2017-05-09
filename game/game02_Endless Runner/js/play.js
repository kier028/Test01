//This is a new change
// gameplay function
var highscore = 0 ;
var dead = 0;
var playState = {
	create: function() {
		this.score=0;

		///i use this.* because these are variables withiin this block
		this.hit = 0;
		this.skys = game.add.sprite(0,0, 'sky');
		this.skys.scale.setTo(2,1);
		// creates mountain 
		this.mountainBack = game.add.tileSprite(0,-100,800,500, 'mountains-back');
		//this.mountainBack.scale.setTo(.4,.4);
		this.mountainMid2 = game.add.tileSprite(0,0,800,500, 'mountains-mid2');
		this.mountainMid1 = game.add.tileSprite(0,0,800,500, 'mountains-mid1');
		//this.mountainMid1.scale.setTo(.4,.5);
		
		//this.mountainMid2.scale.setTo(.4,.5);
		this.platforms = game.add.sprite(0, game.world.height-25, 'platform');
		this.platforms.scale.setTo(2,2);
		this.platforms.enableBody = true;
		//this.platforms.body.immovable = true;

		//create keyboard;
		this.keyboard = game.input.keyboard;

		//enemy objects
		this.tank = game.add.sprite(800, game.world.height-50, 'tank');
		this.tank.animations.add('driving');
		game.physics.enable(this.tank, Phaser.Physics.ARCADE);
		//this.tank.body.collideWorldBounds = true;

		this.tank2 = game.add.sprite(900, game.world.height-50, 'tank');
		this.tank2.animations.add('driving');
		game.physics.enable(this.tank2, Phaser.Physics.ARCADE);
		//this.tank2.body.collideWorldBounds = true;

		this.tank3 = game.add.sprite(1000, game.world.height-50, 'tank');
		this.tank3.animations.add('driving');
		game.physics.enable(this.tank3, Phaser.Physics.ARCADE);
		//this.tank3.body.collideWorldBounds = true;

		this.plane = game.add.sprite(600, game.rnd.integerInRange(0, 300), 'plane');
		this.plane.animations.add([1,2,3],'flying');
		this.plane.scale.setTo(.8,.8);
		game.physics.enable(this.plane, Phaser.Physics.ARCADE);


		//creates the palyer sprite
		this.player = game.add.sprite(32, game.world.height - 50, 'cat');
		this.player.scale.setTo(.2,.2);
		game.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.player.body.bounce.y = .90;
		this.player.body.gravity.y = 800;
		this.player.body.collideWorldBounds = true;

		//score counter
		this.scoreText = game.add.text(20,20, 'Score: 0',
								{font: '32px Comic Sans MS', fill: '#FFFFF' });

		//audio
		this.music = game.add.audio('music',1,true);
		this.death = game.add.audio('explosion',1,false);
		this.bounce = game.add.audio('bounce',.8,false);
		this.gameover = game.add.audio('gameover',1,false);
		this.music.play();


		this.fast = game.add.tileSprite(0,0,800,500, 'fast');



	},





	//when enemies go off screen reset at normal position, 
	//from phaser asteroids tutorial

	screenwrapX: function (sprite) {

    	if (sprite.x < -100)
    	{
        	sprite.x = game.width;
    	}
	},

	screenwrapY: function (sprite) {

    	if (sprite.x < -100)
    	{
        	sprite.x = game.width;
        	sprite.y = game.rnd.integerInRange(0, 300);
    	}
	},

//// difficulty depends on score

	difficulty1: function (){
		if(this.score > 750){
			this.tank2.x -= game.rnd.integerInRange(2, 3);
			this.tank.x -= game.rnd.integerInRange(2, 5);
			this.plane.x -= game.rnd.integerInRange(3, 6);
			this.mountainBack.tilePosition.x -= 2;
			this.mountainMid1.tilePosition.x -= 3;
			this.mountainMid2.tilePosition.x -= 4;
			this.fast.tilePosition.x -=5;
		}
	},

	difficulty2: function (){
		if(this.score > 2100){
			this.tank2.x -= game.rnd.integerInRange(3, 5);
			this.tank.x -= game.rnd.integerInRange(4, 6);
			this.plane.x -= game.rnd.integerInRange(4, 6);
			this.mountainBack.tilePosition.x -= 3;
			this.mountainMid1.tilePosition.x -= 4;
			this.mountainMid2.tilePosition.x -= 5;
			this.fast.tilePosition.x -= 6;


		 }
	},

	difficulty3: function (){
		if(this.score > 4150){
			this.tank.x -= game.rnd.integerInRange(3, 7);
			this.tank3.x -= game.rnd.integerInRange(3, 6);
			this.plane.x -= game.rnd.integerInRange(4, 8);
			this.mountainBack.tilePosition.x -= 3;
			this.mountainMid1.tilePosition.x -= 4;
			this.mountainMid2.tilePosition.x -= 5;
			this.fast.tilePosition.x -= 6;
		 }
	},



///gameover
	killplayer: function(){
		// shows highschore
		this.music.destroy();
		this.death.play();
		this.gameover.play();
		highscore = this.score;
		this.score = 0;
		this.player.kill();

		//text
		this.starttLabel = game.add.text(250, game.world.height/2 + 50, 'Press spacebar to go to menu!',
										{font: '20px Comic Sans MS', fill: '#FFFFF'});
		this.highscoreLabel = game.add.text(250 , game.world.height/2, 'Highscore: 0',
										{font: '30px Comic Sans MS', fill: '#FFFFF'});
		this.highscoreLabel.text = 'Highscore: ' + highscore;
		dead = 1;
	},




	update: function(){

	//collisions
		
		this.tank_coll = game.physics.arcade.collide(this.player, this.tank, this.killplayer, null, this);
		this.tank_coll2 = game.physics.arcade.collide(this.player, this.tank2, this.killplayer, null, this);
		this.tank_coll3 = game.physics.arcade.collide(this.player, this.tank3, this.killplayer, null, this);
		this.plane_coll = game.physics.arcade.collide(this.player, this.plane, this.killplayer, null, this);

		//tile scrolling
		this.mountainBack.tilePosition.x -= 1;
		this.mountainMid1.tilePosition.x -= 2.5;
		this.mountainMid2.tilePosition.x -= 2;
		this.fast.tilePosition.x -=3;


		//score
		this.score += 1;
		this.scoreText.text = 'Score: ' + this.score;
		this.difficulty1();
		this.difficulty2();
		this.difficulty3();

		//enemies speed
		this.tank.x -= 2;
		this.plane.x -= 3;
		this.screenwrapX(this.tank);
		this.screenwrapX(this.tank2);
		this.screenwrapX(this.tank3);
		this.screenwrapY(this.plane);


		// sprite animations
		this.tank.animations.play('driving', 24, true);
		this.tank2.animations.play('driving', 24, true);
		this.tank3.animations.play('driving', 24, true);
		this.plane.animations.play('flying', 16, true);




		// updates player movement
		this.player.body.velocity.x = 0;


    	if (this.keyboard.isDown(Phaser.Keyboard.LEFT)){
        //  Move to the left
			this.player.body.velocity.x = -150;
    	} 
    	if (this.keyboard.isDown(Phaser.Keyboard.RIGHT)){
       	 //  Move to the right
      	  	this.player.body.velocity.x = 150;

   		}
   		if (this.keyboard.isDown(Phaser.Keyboard.UP)){
   			this.player.body.velocity.y = -150;

   		}
   	//gameover	
   		if(dead > 0){
   			if (this.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
   				game.state.start('menu');
				this.gameover.destroy();

   			}

   		}

  	}

};