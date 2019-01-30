class OptimizedResize {
    constructor() {
        this.callbacks = [];
        this.running = false;
    }


    static _resize = () => {
        if (!this.running) {
            this.running = true;
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(this._runCallbacks);
            } else {
                setTimeout(this._runCallbacks, 66);
            }
        }
    };

    // run the actual callbacks
    static _runCallbacks = () => {
        this.callbacks.forEach(callback => {
            callback();
        });

        this.running = false;
    };


    add(callback) {
        if (!this.callbacks.length) {
            window.addEventListener('resize', this._resize);
        }

        this.callbacks.push(callback);
    }

    /**
     * Disables all resize handlers.
     */
    disable() {
        window.removeEventListener('resize', this._resize);
    }

    /**
     * Enables all resize handlers, if they were disabled.
     */
    reEnable() {
        window.addEventListener('resize', this._resize);
    }
}

const _OptimizedResize = new OptimizedResize();
export default _OptimizedResize;