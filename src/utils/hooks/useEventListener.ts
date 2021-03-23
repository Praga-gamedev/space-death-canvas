import { useEffect, useRef } from 'react';

type Handler = (e: Event) => void;

export const useEventListener = (
    eventName: string,
    handler: Handler,
    container: EventTarget,
    useCapture: boolean = false
) => {
    const savedHandler = useRef<Handler>();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        if (!container) {
            return;
        }

        const eventListener = (event: Event) => {
            savedHandler.current && savedHandler.current(event);
        };

        container.addEventListener(eventName, eventListener, useCapture);

        return () => {
            container.removeEventListener(eventName, eventListener, useCapture);
        };
    }, [eventName, container]);
};
