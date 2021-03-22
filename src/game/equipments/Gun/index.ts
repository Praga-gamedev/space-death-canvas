import Equipment from '@game/equipments/Equipment';
import { Bullet } from '@game/entities';

// Это расстояние от пули до корабля. Оно нужно чтобы пуля не появлялась прямо вплотную к короблю. Можете поиграться с этой константой
const BULLET_OFFSET = 20;

export class Gun extends Equipment {
    static cooldown = 200;

    public cooldown = Gun.cooldown;
    public lastFire = Date.now();

    public shoot() {
        if (Date.now() - this.lastFire < this.cooldown) return null;

        const { x, y, angle, width, height } = this.owner;
        const centerX = width / 2 - Bullet.size.width / 2;
        const centerY = height / 2 - Bullet.size.height / 2;

        const bulletX = x + centerX + Math.cos(angle) * BULLET_OFFSET;
        const bulletY = y + centerY + Math.sin(angle) * BULLET_OFFSET;

        this.lastFire = Date.now();

        return new Bullet({
            ctx: this.ctx,
            pos: {
                angle,
                x: bulletX,
                y: bulletY,
            },
        });
    }
}
