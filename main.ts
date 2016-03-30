/// <reference path="phaser/phaser.d.ts"/>

import Point = Phaser.Point;
class mainState extends Phaser.State {
    game: Phaser.Game;
    /******* OBJECTS ******/
    private ball:Phaser.Sprite;
    private bar:Phaser.Sprite;//barra
    private bricks:Phaser.Group;//Grupo de ladrillos

    /******* MOVEMENTS ******/
    private cursor:Phaser.CursorKeys;

    /******* CONSTANTS ******/
    private ACCELERATION = 22;//pixels/second
    private SPEED = 22;



    preload():void {
        super.preload();
        this.loadImages();//cargando las imagenes

    }
    create():void {
        super.create();
        this.bricks = this.add.group();
        this.createBricks();
    }
    update():void {
        super.update();


    }

    private loadImages(){
        this.load.image("ball","assets/ball.png");
        this.load.image("red_brick","assets/red_brick.png");
        this.load.image("yellow_brick","assets/yellow_brick.png");
        this.load.image("bar","assets/bar.png");

    }

    private createBricks(){
        var positions:Point[] = [
            new Point(50, 50), new Point(50, 80), new Point(50, 110),
            new Point(80, 50), new Point(80, 80), new Point(80, 110),
            new Point(110, 50), new Point(110, 80), new Point(110, 110)
            //new Point(175, 175), new Point(425, 175), new Point(300, 125), new Point(300, 475),
            //new Point(175, 425), new Point(425, 425), new Point(300, 125), new Point(300, 475),
            //
            //new Point(175, 425), new Point(425, 425), new Point(300, 125), new Point(300, 475),
            //new Point(175, 425), new Point(425, 425), new Point(300, 125), new Point(300, 475),
            //
            //new Point(175, 425), new Point(425, 425), new Point(300, 125), new Point(300, 475),
            //new Point(175, 425), new Point(425, 425), new Point(300, 125), new Point(300, 475),
            //
            //new Point(175, 425), new Point(425, 425), new Point(300, 125), new Point(300, 475)
            //new Point(175, 425), new Point(425, 425), new Point(300, 125), new Point(300, 475)
        ];

        var position;
        var brick;

        for (var i = 0; i < positions.length; i++){
            position = positions[i];
            if (i < 10 || i > 40){
                brick = new BrickSprite(this.game, position.x, position.y, 'red_brick');
            }else{
                brick = new BrickSprite(this.game, position.x, position.y, 'yellow_brick');
            }

            this.add.existing(brick);
            this.bricks.add(brick);
        }


    }

    private setMovements(){
        if (this.cursor.left.isDown) {
            //this.ufo.body.acceleration.x = -this.ACCELERATION;
        }else if (this.cursor.right.isDown) {
            //this.ufo.body.acceleration.x = this.ACCELERATION;
        }else{
            //this.ufo.body.acceleration.x = 0;
            //this.ufo.body.velocity.x = 0;
        }

        if (this.cursor.up.isDown) {

            //this.ufo.body.acceleration.y = -this.ACCELERATION;
        }else if (this.cursor.down.isDown) {
            //this.ufo.body.acceleration.y = this.ACCELERATION;
        }else{
            //this.ufo.body.acceleration.y = 0;
        }
    }



}

class SimpleGame {
    game:Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(600, 600, Phaser.AUTO, 'gameDiv');

        this.game.state.add('main', mainState);
        this.game.state.start('main');
    }
}

class BrickSprite extends Phaser.Sprite{

    constructor(game:Phaser.Game, x:number, y:number, key:string|Phaser.RenderTexture|Phaser.BitmapData|PIXI.Texture, frame:string|number) {
        super(game, x, y, key, frame);
        //this.anchor.setTo(0.5, 0.5);
    }

    update():void {
        super.update();
        //this.angle += 3; para rotar
    }

}

window.onload = () => {
    var game = new SimpleGame();
};
