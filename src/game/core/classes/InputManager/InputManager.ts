import { KEY_MAP } from './keys';

// Класс отвечает за нажатие клавиш и хранит в себе их состояние

export default class InputManager {
    public pressedKeys: Map<string, boolean>;

    constructor() {
        this.pressedKeys = new Map();
        this.initListeners();
    }

    private setKey(e: KeyboardEvent, isDown: boolean) {
        const key = KEY_MAP[e.code];
        if (!key) return;

        e.preventDefault();
        this.pressedKeys.set(key, isDown);
    }

    private initListeners() {
        document.addEventListener('keydown', this.onKeyDown);
        document.addEventListener('keyup', this.onKeyUp);
        window.addEventListener('blur', this.onBlur);
    }

    private onKeyDown = (e: KeyboardEvent) => {
        this.setKey(e, true);
    };

    private onKeyUp = (e: KeyboardEvent) => {
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
