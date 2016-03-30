/// <reference path="phaser/phaser.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point = Phaser.Point;
var mainState = (function (_super) {
    __extends(mainState, _super);
    function mainState() {
        _super.apply(this, arguments);
        /******* CONSTANTS ******/
        this.ACCELERATION = 22; //pixels/second
        this.SPEED = 22;
    }
    mainState.prototype.preload = function () {
        _super.prototype.preload.call(this);
        this.loadImages(); //cargando las imagenes
    };
    mainState.prototype.create = function () {
        _super.prototype.create.call(this);
        this.bricks = this.add.group();
        this.createBricks();
    };
    mainState.prototype.update = function () {
        _super.prototype.update.call(this);
    };
    mainState.prototype.loadImages = function () {
        this.load.image("ball", "assets/ball.png");
        this.load.image("red_brick", "assets/red_brick.png");
        this.load.image("yellow_brick", "assets/yellow_brick.png");
        this.load.image("bar", "assets/bar.png");
    };
    mainState.prototype.createBricks = function () {
        var positions = [
            new Point(50, 50), new Point(50, 80), new Point(50, 110),
            new Point(80, 50), new Point(80, 80), new Point(80, 110),
            new Point(110, 50), new Point(110, 80), new Point(110, 110)
        ];
        var position;
        var brick;
        for (var i = 0; i < positions.length; i++) {
            position = positions[i];
            if (i < 10 || i > 40) {
                brick = new BrickSprite(this.game, position.x, position.y, 'red_brick');
            }
            else {
                brick = new BrickSprite(this.game, position.x, position.y, 'yellow_brick');
            }
            this.add.existing(brick);
            this.bricks.add(brick);
        }
    };
    mainState.prototype.setMovements = function () {
        if (this.cursor.left.isDown) {
        }
        else if (this.cursor.right.isDown) {
        }
        else {
        }
        if (this.cursor.up.isDown) {
        }
        else if (this.cursor.down.isDown) {
        }
        else {
        }
    };
    return mainState;
})(Phaser.State);
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(600, 600, Phaser.AUTO, 'gameDiv');
        this.game.state.add('main', mainState);
        this.game.state.start('main');
    }
    return SimpleGame;
})();
var BrickSprite = (function (_super) {
    __extends(BrickSprite, _super);
    function BrickSprite(game, x, y, key, frame) {
        _super.call(this, game, x, y, key, frame);
        //this.anchor.setTo(0.5, 0.5);
    }
    BrickSprite.prototype.update = function () {
        _super.prototype.update.call(this);
        //this.angle += 3; para rotar
    };
    return BrickSprite;
})(Phaser.Sprite);
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=main.js.map