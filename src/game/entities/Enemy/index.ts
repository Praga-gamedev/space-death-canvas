import Entity from '../Entity';
import { rotate } from '@game/core/utils';
import { IPosition, StartPosition } from '@game/entities/types';

export class Enemy extends Entity {
    public size: { height: number; width: number } = { height: 0, width: 0 };

    public speed = 100;

    public render() {
        const { x, y, angle = 0 } = this.pos;
        this.ctx.save();
        rotate(
            this.ctx,
            x,
            y,
            this.width,
            this.height,
            angle,
            (ctx: CanvasRenderingContext2D) => this.sprite!.render(ctx, true)
        );
    }

    setRandomStartPosition(ctx: CanvasRenderingContext2D) {
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;
        this.startPos = Enemy.getRandomPosition();
        switch (this.startPos) {
            case 'top':
                this.pos.x = Math.random() * (width - this.size.width);
                this.pos.y = -this.size.height;
                break;
            case 'bottom':
                this.pos.x = Math.random() * (width - this.size.width);
                this.pos.y = height + this.size.height;
                break;
            case 'left':
                this.pos.x = -this.size.width;
                this.pos.y = Math.random() * (height - this.size.height);
                break;
            case 'right':
                this.pos.x = width;
                this.pos.y = Math.random() * (height - this.size.height);
                break;
        }
    }

    updatePosition(dt: number, playerPos: IPosition) {
        // Вычисляем синус и косинус угла между вертикалью и игроком с началом отчета в центре противника
        const dx = Math.abs(this.x - playerPos.x);
        const dy = Math.abs(this.y - playerPos.y);
        let cos = dx / Math.sqrt(dx ** 2 + dy ** 2);
        let sin = dy / Math.sqrt(dx ** 2 + dy ** 2);

        /* Отнимаем или прибавляем итоговое приращение в зависимости от координатной четверти
        в которой находится игрок относительно противника */
        let coeffX = 1;
        if (this.x > playerPos.x) {
            coeffX = -1;
        }
        let coeffY = 1;
        if (this.y > playerPos.y) {
            coeffY = -1;
        }

        /* Без этих условий враги доходят до позиции игрока по X или Y и тупо стоят
        с ними - они начинают двигаться в сторону игрока */
        if (cos < 0.02) {
            cos = 1;
        }
        if (sin < 0.02) {
            sin = 1;
        }

        /* Условия тут, чтобы снять дергание врага:
         при пересечении вертикально или горизонтальной осей игрока меняется координатная четверть и он осциллирует туда-сюда
         из-за условий на координатные четверти, описанных выше */
        if (Math.abs(playerPos.x - this.x) > 1) {
            this.x += coeffX * this.speed * dt * sin;
        }
        if (Math.abs(playerPos.y - this.y) > 1) {
            this.y += coeffY * this.speed * dt * cos;
        }
    }

    private static getRandomPosition(): StartPosition {
        let position: StartPosition;
        const randomizer = Math.random();
        if (randomizer < 0.2) {
            position = 'top';
        } else if (randomizer > 0.2 && randomizer < 0.4) {
            position = 'bottom';
        } else if (randomizer > 0.4 && randomizer < 0.6) {
            position = 'right';
        } else {
            position = 'left';
        }
        return position;
    }
}
