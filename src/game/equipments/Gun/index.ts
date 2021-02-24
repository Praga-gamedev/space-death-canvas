import Equipment from '@game/equipments/Equipment';
import { Bullet } from '@game/entities';
import { cos, sin } from '@game/core';

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

        const calculateX = () => {
            if (bulletAngle < 90 || bulletAngle > 270) {
                return bulletX + (this.owner.width * cos(bulletAngle)) / 2;
            } else {
                return bulletX - (this.owner.width * cos(bulletAngle)) / 2;
            }
        };

        const calculateY = () => {
            if (bulletAngle > 180) {
                return bulletY - (this.owner.height * sin(bulletAngle)) / 2;
            } else {
                return bulletY + (this.owner.height * sin(bulletAngle)) / 2;
            }
        };

        return new Bullet({
            ctx: this.ctx,
            pos: {
                x: calculateX(),
                y: calculateY(),
                angle: bulletAngle,
            },
        });
    }
}
