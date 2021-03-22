import { useEffect, useState, useCallback } from 'react';

const exitFullscreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
};

const requestFullscreen = (element: Element | null) => {
    if (element?.requestFullscreen) {
        element.requestFullscreen();
    }
};

export const useFullscreen = (selector: string) => {
    const [showFullscreen, setShowFullscreen] = useState(
        !!document.fullscreenElement
    );

    useEffect(() => {
        const fullscreenListener = () => {
            const isShow = !!document.fullscreenElement;
            setShowFullscreen(isShow);
        };

        document.addEventListener('fullscreenchange', fullscreenListener);

        return () => {
            document.removeEventListener(
                'fullscreenchange',
                fullscreenListener
            );
        };
    });

    const toggleFullscrean = useCallback(() => {
        let fullScreenElement = document.fullscreenElement;

        if (showFullscreen) {
            if (fullScreenElement) {
                exitFullscreen();
            }
            return;
        }

        const element = document.querySelector(selector);

        if (fullScreenElement && fullScreenElement !== element) {
            exitFullscreen();
            fullScreenElement = null;
        }

        if (!fullScreenElement) {
            requestFullscreen(element);
        }
    }, [showFullscreen, selector]);

    return [showFullscreen, toggleFullscrean];
};
