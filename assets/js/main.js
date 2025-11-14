//import Phaser from 'phaser';

// Configuration du jeu
const config = {
  type: Phaser.CANVAS,       // on force le rendu sur le canvas
  width: 800,
  height: 600,
  canvas: document.getElementById('gameCanvas'), // on relie ton <canvas>
  backgroundColor: '#1e1e1e', // couleur du fond
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

// Démarrage du jeu
const game = new Phaser.Game(config);

function preload() {
  // Charger une image (facultatif)
  this.load.image('player', './assets/images/player.png');
}

function create() {
  // Afficher un texte
  this.add.text(20, 20, 'Bienvenue dans le mini-jeu !', { font: '24px Arial', fill: '#fff' });

  // Exemple d'image si elle existe
  if (this.textures.exists('player')) {
    this.player = this.add.image(400, 300, 'player');
  } else {
    // Sinon, un carré de couleur
    this.player = this.add.rectangle(400, 300, 50, 50, 0x00ff00);
  }

  // Ajout du clavier
  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  const speed = 4;
  if (this.cursors.left.isDown)  this.player.x -= speed;
  if (this.cursors.right.isDown) this.player.x += speed;
  if (this.cursors.up.isDown)    this.player.y -= speed;
  if (this.cursors.down.isDown)  this.player.y += speed;
}
