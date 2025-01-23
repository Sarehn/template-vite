import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(768, 384, 'background');
        this.add.image(0, 768 - (218/2), 'platform');



        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
