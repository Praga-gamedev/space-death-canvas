interface RefObject<T> {
    readonly current: T | null | undefined;
}
export interface IPopupProps {
    isOpen: boolean;
    buttonRef: RefObject<HTMLElement>;
    setOpen: (isOpen: boolean) => void;
}
