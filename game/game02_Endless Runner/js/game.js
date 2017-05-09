var game = new Phaser.Game(800, 450, Phaser.AUTO, 'gameDiv');

//naming each state to call in our *.js files in the directory 
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
//game.state.add('gameOver', gameOverState);
//start game by calling boot state
game.state.start('boot');