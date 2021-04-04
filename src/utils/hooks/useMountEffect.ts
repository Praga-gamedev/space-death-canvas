import { useEffect } from 'react';

export const useMountEffect = (effectCallback: () => (() => void) | void) => {
    useEffect(effectCallback, []);
};
