## 22장

### 22.1.1 안전한 타입 탐지

- 브라우저 미지원 기능일 경우, polyfill 을 활용하여 사용할 경우가 있음
- [w3c/IntersectionObserver](https://github.com/w3c/IntersectionObserver/blob/master/polyfill/intersection-observer.js)

```javascript
;((win) => {
    win.console.clear();

    const isNativeMethod = method => typeof method === 'function' && /\[native code\]/.test(method.toString());

    win.console.log(IntersectionObserver.toString()); // function IntersectionObserver() { [native code] }
    win.console.log('1 : ', isNativeMethod(IntersectionObserver));
    
    const InsersectionObserverPolyfill = () => {
        /**
         * Creates the global IntersectionObserver constructor.
         * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
         * @param {Function} callback The function to be invoked after intersection
         *     changes have queued. The function is not invoked if the queue has
         *     been emptied by calling the `takeRecords` method.
         * @param {Object=} opt_options Optional configuration options.
         * @constructor
         */
        win.IntersectionObserver = function IntersectionObserver(callback, opt_options) {
    
            var options = opt_options || {};
    
            if (typeof callback != 'function') {
                throw new Error('callback must be a function');
            }
    
            if (options.root && options.root.nodeType != 1) {
                throw new Error('root must be an Element');
            }
    
            // Binds and throttles `this._checkForIntersections`.
            this._checkForIntersections = throttle(
                this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
    
            // Private properties.
            this._callback = callback;
            this._observationTargets = [];
            this._queuedEntries = [];
            this._rootMarginValues = this._parseRootMargin(options.rootMargin);
    
            // Public properties.
            this.thresholds = this._initThresholds(options.threshold);
            this.root = options.root || null;
            this.rootMargin = this._rootMarginValues.map(function(margin) {
                return margin.value + margin.unit;
            }).join(' ');
    
            /** @private @const {!Array<!Document>} */
            this._monitoringDocuments = [];
            /** @private @const {!Array<function()>} */
            this._monitoringUnsubscribes = [];
        }
    }
    
    win.setTimeout(() => {
        InsersectionObserverPolyfill();
        win.console.log(' ');
        win.console.log(' InsersectionObserverPolyfill ');
        win.console.log(' ');
        win.console.log(IntersectionObserver.toString());
        win.console.log('2 : ', isNativeMethod(IntersectionObserver));
    }, 1000 * 3);
})(window);
```


### 22.1.5 함수 커링
- ...

### 22.2 쉽게 조작할 수 없는 객체
- Object.defineProperty

```javascript
;((win) => {
    win.console.clear();

    const test = {
        name: 'before freeze'
    };
    
    const setFreeze = (obj, key) => {
        Object.defineProperty(obj, key, {
          value: 'freeze',
          writable: false
        });
    }

    win.console.log('1 : ', test.name);
    test.name = 'change name';
    win.console.log('2 : ', test.name);

    win.setTimeout(() => {
        setFreeze(test, 'name');
        win.console.log(' ');
        win.console.log(' setFreeze ');
        win.console.log(' ');
        win.console.log('3 : ', test.name);
        test.name = 'change name';
        win.console.log('4 : ', test.name);
    }, 1000 * 3);
})(window);
``` 
