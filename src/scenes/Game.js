import { Scene } from 'phaser';

let platform;
let player;
let cursors;

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.add.image(768, 384, 'background');

        platform = this.physics.add.staticSprite(1536, 768 - (218/2), 'platform');

        player = this.physics.add.sprite(0, 768 - 218 - 117/2, 'player');

        player.setBounce(0);
        player.setGravity(300)
        player.setCollideWorldBounds(true);

        this.physics.add.collider(platform, player);

        this.anims.create({
            key: 'moving',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        player.anims.play('moving', true);

        cursors = this.input.keyboard.createCursorKeys();

        if (cursors.up.isDown){
            player.setVelocityY(-300);
        }

        if (cursors.right.isDown){
            player.setVelocityX(150);
        } 
        
        if (!cursors.right.isDown) {
            player.setVelocityX(-400);
        }
        
    }

    update(){
        platform.x -= 5;

        if (platform.x + platform.width / 2 < 1536) {
            platform.x = 768 + 1536 / 2;
        }

        if (cursors.up.isDown){
            player.setVelocityY(-300);
        }

        if (cursors.right.isDown){
            player.setVelocityX(150);
        } 
        
        if (!cursors.right.isDown) {
            player.setVelocityX(-400);
        }
    }
}
