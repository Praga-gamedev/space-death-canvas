declare const isDev: boolean;
declare const isProd: boolean;

interface Window {
    __godMode__: boolean;
    __INITIAL_STATE__: Record<string, any>;
}
