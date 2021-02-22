import Equipment from '@game/equipments/Equipment';
import { Bullet } from '@game/entities';
import { radians } from '@game/core/utils/calculation';

export class Gun extends Equipment {
    static cooldown = 200;

    public cooldown = Gun.cooldown;
    public lastFire = Date.now();

    public shoot() {
        if (Date.now() - this.lastFire < this.cooldown) return null;

        const bulletX = this.owner.x;
        const bulletY = this.owner.y;
        const bulletAngle = this.owner.angle;
        this.lastFire = Date.now();

        return new Bullet({
            ctx: this.ctx,
            pos: {
                x:
                    bulletX +
                    (this.owner.width / 2) * Math.sin(radians(bulletAngle)),
                y: bulletY,
                angle: bulletAngle,
            },
        });
    }
}
