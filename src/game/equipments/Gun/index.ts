import Equipment from '../Equipment';
import { Bullet } from '../../entities';

export class Gun extends Equipment {
    static cooldown = 200;

    public cooldown = Gun.cooldown;
    public lastFire = Date.now();

    public shoot() {
        if (Date.now() - this.lastFire < this.cooldown) return null;

        const bulletX = this.owner.x + this.owner.width / 2;
        const bulletY = this.owner.y;
        this.lastFire = Date.now();

        return new Bullet({ ctx: this.ctx, pos: { x: bulletX, y: bulletY } });
    }
}
