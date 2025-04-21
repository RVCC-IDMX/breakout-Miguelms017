// game.js - Main game controller
// Student Task: Implement the Game class for managing game state and main loop

import { Paddle } from './entities/paddle.js';
import { Ball } from './entities/ball.js';
import { Brick } from './entities/brick.js';
import { InputHandler } from './input-handler.js';
import { CollisionManager } from './collision.js';
import { UI } from './ui.js';
import { GAME_STATES, DEFAULTS, BRICK_CONFIG } from './constants.js';

export class Game {
  constructor(canvasId) {
    // Canvas setup
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    // TODO: Initialize game state
    // - gameState: set to GAME_STATES.START
    this.gameState = GAME_STATES.START;
    // - score: set to 0
    this.score = 0;
    // - lives: set to DEFAULTS.LIVES
    this.lives = DEFAULTS.LIVES
    // - debugMessage: empty string for debug output
    this.debugMessage = "";

    // TODO: Initialize empty arrays/objects for game entities
    // - paddle: set to null
    this.paddle = null;
    // - ball: set to null
    this.ball = null;
    // - bricks: empty array
    this.bricks = [];

    // Game systems are provided for you
    this.ui = new UI(this);
    this.collisionManager = new CollisionManager(this);
    this.input = new InputHandler(this);

    // TODO: Call the init() method to set up the game
    // - Call init()
    this.init();

    // Set up canvas scale (provided for you)
    this.canvasScale = {
      x: this.canvas.width / this.canvas.offsetWidth,
      y: this.canvas.height / this.canvas.offsetHeight
    };

    // Add window resize listener (provided for you)
    window.addEventListener('resize', () => {
      this.updateCanvasScale();
    });
  }

  // Initialize the game
  init() {
    // TODO: Initialize the game
    // - Call createEntities() to create the paddle and ball
    this.createEntities();
    // - Call setupBricks() to create the brick layout
    this.setupBricks();
    // - Use ui.showScreen(GAME_STATES.START) to show the start screen
    this.ui.showScreen(GAME_STATES.START);
  }

  // Create game entities
  createEntities() {
    // TODO: Create the paddle and ball
    // - Create a new Paddle instance and assign it to this.paddle
    let paddle = this.paddle;
    // - Create a new Ball instance and assign it to this.ball
    let ball = this.ball
  }

  // Update canvas scale calculation (provided for you)
  updateCanvasScale() {
    this.canvasScale = {
      x: this.canvas.width / this.canvas.offsetWidth,
      y: this.canvas.height / this.canvas.offsetHeight
    };
  }

  // Set up brick layout
  setupBricks() {
    // TODO: Create the brick layout
    // 1. Clear the bricks array
    this.bricks = [];
    // 2. Use nested loops to create a grid of bricks
    //    - Outer loop for rows (BRICK_CONFIG.ROWS)
    //    - Inner loop for columns (BRICK_CONFIG.COLUMNS)
    // 3. For each brick:
    //    - Calculate its position (x, y) using BRICK_CONFIG
    //    - Assign a color based on the row (use BRICK_CONFIG.COLORS)
    //    - Create a new Brick instance and add it to the bricks array
  }

  // Start the game
  startGame() {
    // TODO: Start the game
    // 1. Set gameState to PLAYING
    this.gameState = GAME_STATES.PLAYING
    // 2. Use ui.showScreen(GAME_STATES.PLAYING) to show the playing screen
    this.ui.showScreen(GAME_STATES.PLAYING);
    // 3. Connect the input handler to the paddle (this.input.setPaddle(this.paddle))
    this.input.setPaddle(this.paddle);
    // 4. Start the game loop (call gameLoop())
    this.gameLoop();
  }

  // Restart the game
  restartGame() {
    // TODO: Restart the game
    // 1. Reset game state (gameState, score, lives)
    this.gameState = GAME_STATES.START;
    // 2. Create new entities (call createEntities())
    this.createEntities();
    // 3. Set up new bricks (call setupBricks())
    this.setupBricks();
    // 4. Update the input handler with the new paddle
    // 5. Update the UI stats
    // 6. Show the playing screen
    // 7. Start the game loop
  }

  // Main game loop
  gameLoop() {
    // TODO: Implement the main game loop
    // 1. Check if the game is still in PLAYING state, return if not
    if (!GAME_STATES.PLAYING) {
      return;
    }
    // 2. Clear the canvas (ctx.clearRect)
    this.ctx.clearRect();
    // 3. Update game entities (paddle and ball)
    // 4. Check for collisions (collisionManager.checkCollisions())
    this.collisionManager.checkCollisions()
    // 5. Draw all game entities (paddle, ball, and all non-broken bricks)
    // 6. Check for win condition (all bricks broken)
    // 7. Render debug message if there is one
    // 8. Request the next animation frame to continue the loop
  }

  // Handle ball out of bounds
  ballLost() {
    // TODO: Handle the ball going below the bottom edge
    // 1. Decrease lives
    this.lives -= 1;
    // 2. Update the UI stats
    // 3. Check if the player is out of lives (call gameOver() if so)
    if (this.lives == 0) {
      this.gameOver();
    }
    // 4. If the player still has lives, reset the ball position
  }

  // Handle game over
  gameOver() {
    // TODO: Handle game over
    // 1. Set gameState to GAMEOVER
    // 2. Show the game over screen
  }

  // Handle win
  win() {
    // TODO: Handle win condition
    // 1. Set gameState to WIN
    // 2. Show the win screen
  }

  // Add to score
  addScore(points) {
    // TODO: Add points to the score
    // 1. Increase the score by the given points
    // 2. Update the UI stats
  }

  // Debug message helper (provided for you)
  debug(message) {
    this.debugMessage = message;
  }
}