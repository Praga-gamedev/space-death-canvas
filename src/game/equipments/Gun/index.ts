import Equipment from '@game/equipments/Equipment';
import { Bullet } from '@game/entities';

export class Gun extends Equipment {
    static cooldown = 200;

    public cooldown = Gun.cooldown;
    public lastFire = Date.now();

    public shoot(angle: number) {
        if (Date.now() - this.lastFire < this.cooldown) return null;

        const bulletX = this.owner.x;
        const bulletY = this.owner.y;
        this.lastFire = Date.now();

        return new Bullet({
            ctx: this.ctx,
            pos: {
                x:
                    bulletX +
                    (this.owner.width / 2) *
                        Math.sin((this.owner.angle * Math.PI) / 180),
                y: bulletY,
                angle: angle,
            },
        });
    }
}
