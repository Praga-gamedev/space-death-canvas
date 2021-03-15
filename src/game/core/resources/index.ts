/* global CanvasImageSource*/

type ResourcesData = { img: CanvasImageSource; isReady: boolean };

class Resources {
    resourceCache: Record<string, ResourcesData> = {};
    readyCallbacks: Function[] = [];

    load(urlOrArr: string | string[]) {
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach((url) => {
                this.loadSingleUrl(url);
            });
        } else {
            this.loadSingleUrl(urlOrArr);
        }
    }

    get(url: string) {
        return this.resourceCache[url].img;
    }

    get isReady() {
        return Object.values(this.resourceCache).every(
            ({ isReady }) => isReady
        );
    }

    get isEmpty() {
        return !Object.keys(this.resourceCache).length;
    }

    onReady(func: Function) {
        this.readyCallbacks.push(func);

        return () => {
            this.readyCallbacks = this.readyCallbacks.filter(
                (_func) => _func !== func
            );
        };
    }

    private loadSingleUrl(url: string) {
        if (this.resourceCache[url] && this.resourceCache[url].isReady) {
            return this.resourceCache[url].img;
        }

        const img = new Image();
        img.onload = () => {
            this.resourceCache[url].isReady = true;

            if (this.isReady) {
                this.readyCallbacks.forEach((func) => func());
            }
        };
        this.resourceCache[url] = { img: img, isReady: false };
        img.src = url;
    }
}
export const resources = new Resources();
