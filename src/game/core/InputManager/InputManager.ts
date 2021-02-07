import { KEY_MAP } from './keys';

export default class InputManager {
    private pressedKeys: Map<string, boolean>;

    constructor() {
        this.pressedKeys = new Map();
        this.initListeners();
    }

    private setKey(e: KeyboardEvent, isDown: boolean) {
        const key = KEY_MAP[e.code];
        if (!key) return;

        this.pressedKeys.set(key, isDown);
    }

    private initListeners() {
        document.addEventListener('keydown', this.onKeyDown);
        document.addEventListener('keyup', this.onKeyUp);
        window.addEventListener('blur', this.onBlur);
    }

    private onKeyDown = (e: KeyboardEvent) => {
        e.preventDefault();
        this.setKey(e, true);
    };

    private onKeyUp = (e: KeyboardEvent) => {
        e.preventDefault();
        this.setKey(e, false);
    };

    private onBlur = () => this.pressedKeys.clear();

    public isDown(key: string) {
        const _key = key.toUpperCase();
        return this.pressedKeys.has(_key) && this.pressedKeys.get(_key);
    }

    public destroy() {
        document.removeEventListener('keydown', this.onKeyDown);
        document.removeEventListener('keyup', this.onKeyUp);
        window.removeEventListener('blur', this.onBlur);

        this.pressedKeys.clear();
    }
}
