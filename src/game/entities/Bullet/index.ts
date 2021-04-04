import Entity, { IEntityOptions } from '../Entity';

export class Bullet extends Entity {
    private dx: number;
    private dy: number;

    static instances: Bullet[] = [];

    static size = {
        height: 8,
        width: 30,
    };

    static remove(idx: number) {
        Bullet.instances.splice(idx, 1);
    }

    static removeAll() {
        Bullet.instances = [];
    }

    constructor(opts: IEntityOptions) {
        super(opts);
        Bullet.instances.push(this);

        /*
          В других сущностях я нахожу косинус и синус в методе update,
          но пуля не меняет свое направление, так что имеет смысл сразу найти те величины,
          которые будут прибавляться в методе update
        */
        this.dx = Math.cos(this.angle) * this.speed;
        this.dy = Math.sin(this.angle) * this.speed;
    }

    public size = { ...Bullet.size };

    public speed = 750;

    private color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    public render() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        this.ctx.rotate(this.angle);
        this.ctx.fillRect(
            Math.floor(-this.width / 2),
            Math.floor(-this.height / 2),
            this.width,
            this.height
        );
        this.ctx.restore();
    }

    public update(dt: number) {
        this.x += this.dx * dt;
        this.y += this.dy * dt;
    }
}
