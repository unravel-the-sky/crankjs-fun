// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@bikeshaving/crank/cjs/index-454299da.js":[function(require,module,exports) {
'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

exports.__assign = function() {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
/**
 * @typedef {object} PrivateData
 * @property {EventTarget} eventTarget The event target.
 * @property {{type:string}} event The original event object.
 * @property {number} eventPhase The current event phase.
 * @property {EventTarget|null} currentTarget The current event target.
 * @property {boolean} canceled The flag to prevent default.
 * @property {boolean} stopped The flag to stop propagation.
 * @property {boolean} immediateStopped The flag to stop propagation immediately.
 * @property {Function|null} passiveListener The listener if the current listener is passive. Otherwise this is null.
 * @property {number} timeStamp The unix time.
 * @private
 */

/**
 * Private data for event wrappers.
 * @type {WeakMap<Event, PrivateData>}
 * @private
 */
const privateData = new WeakMap();

/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */
const wrappers = new WeakMap();

/**
 * Get private data.
 * @param {Event} event The event object to get private data.
 * @returns {PrivateData} The private data of the event.
 * @private
 */
function pd(event) {
    const retv = privateData.get(event);
    console.assert(
        retv != null,
        "'this' is expected an Event object, but got",
        event
    );
    return retv
}

/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data {PrivateData} private data.
 */
function setCancelFlag(data) {
    if (data.passiveListener != null) {
        if (
            typeof console !== "undefined" &&
            typeof console.error === "function"
        ) {
            console.error(
                "Unable to preventDefault inside passive event listener invocation.",
                data.passiveListener
            );
        }
        return
    }
    if (!data.event.cancelable) {
        return
    }

    data.canceled = true;
    if (typeof data.event.preventDefault === "function") {
        data.event.preventDefault();
    }
}

/**
 * @see https://dom.spec.whatwg.org/#interface-event
 * @private
 */
/**
 * The event wrapper.
 * @constructor
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Event|{type:string}} event The original event to wrap.
 */
function Event(eventTarget, event) {
    privateData.set(this, {
        eventTarget,
        event,
        eventPhase: 2,
        currentTarget: eventTarget,
        canceled: false,
        stopped: false,
        immediateStopped: false,
        passiveListener: null,
        timeStamp: event.timeStamp || Date.now(),
    });

    // https://heycam.github.io/webidl/#Unforgeable
    Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });

    // Define accessors
    const keys = Object.keys(event);
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (!(key in this)) {
            Object.defineProperty(this, key, defineRedirectDescriptor(key));
        }
    }
}

// Should be enumerable, but class methods are not enumerable.
Event.prototype = {
    /**
     * The type of this event.
     * @type {string}
     */
    get type() {
        return pd(this).event.type
    },

    /**
     * The target of this event.
     * @type {EventTarget}
     */
    get target() {
        return pd(this).eventTarget
    },

    /**
     * The target of this event.
     * @type {EventTarget}
     */
    get currentTarget() {
        return pd(this).currentTarget
    },

    /**
     * @returns {EventTarget[]} The composed path of this event.
     */
    composedPath() {
        const currentTarget = pd(this).currentTarget;
        if (currentTarget == null) {
            return []
        }
        return [currentTarget]
    },

    /**
     * Constant of NONE.
     * @type {number}
     */
    get NONE() {
        return 0
    },

    /**
     * Constant of CAPTURING_PHASE.
     * @type {number}
     */
    get CAPTURING_PHASE() {
        return 1
    },

    /**
     * Constant of AT_TARGET.
     * @type {number}
     */
    get AT_TARGET() {
        return 2
    },

    /**
     * Constant of BUBBLING_PHASE.
     * @type {number}
     */
    get BUBBLING_PHASE() {
        return 3
    },

    /**
     * The target of this event.
     * @type {number}
     */
    get eventPhase() {
        return pd(this).eventPhase
    },

    /**
     * Stop event bubbling.
     * @returns {void}
     */
    stopPropagation() {
        const data = pd(this);

        data.stopped = true;
        if (typeof data.event.stopPropagation === "function") {
            data.event.stopPropagation();
        }
    },

    /**
     * Stop event bubbling.
     * @returns {void}
     */
    stopImmediatePropagation() {
        const data = pd(this);

        data.stopped = true;
        data.immediateStopped = true;
        if (typeof data.event.stopImmediatePropagation === "function") {
            data.event.stopImmediatePropagation();
        }
    },

    /**
     * The flag to be bubbling.
     * @type {boolean}
     */
    get bubbles() {
        return Boolean(pd(this).event.bubbles)
    },

    /**
     * The flag to be cancelable.
     * @type {boolean}
     */
    get cancelable() {
        return Boolean(pd(this).event.cancelable)
    },

    /**
     * Cancel this event.
     * @returns {void}
     */
    preventDefault() {
        setCancelFlag(pd(this));
    },

    /**
     * The flag to indicate cancellation state.
     * @type {boolean}
     */
    get defaultPrevented() {
        return pd(this).canceled
    },

    /**
     * The flag to be composed.
     * @type {boolean}
     */
    get composed() {
        return Boolean(pd(this).event.composed)
    },

    /**
     * The unix time of this event.
     * @type {number}
     */
    get timeStamp() {
        return pd(this).timeStamp
    },

    /**
     * The target of this event.
     * @type {EventTarget}
     * @deprecated
     */
    get srcElement() {
        return pd(this).eventTarget
    },

    /**
     * The flag to stop event bubbling.
     * @type {boolean}
     * @deprecated
     */
    get cancelBubble() {
        return pd(this).stopped
    },
    set cancelBubble(value) {
        if (!value) {
            return
        }
        const data = pd(this);

        data.stopped = true;
        if (typeof data.event.cancelBubble === "boolean") {
            data.event.cancelBubble = true;
        }
    },

    /**
     * The flag to indicate cancellation state.
     * @type {boolean}
     * @deprecated
     */
    get returnValue() {
        return !pd(this).canceled
    },
    set returnValue(value) {
        if (!value) {
            setCancelFlag(pd(this));
        }
    },

    /**
     * Initialize this event object. But do nothing under event dispatching.
     * @param {string} type The event type.
     * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
     * @param {boolean} [cancelable=false] The flag to be possible to cancel.
     * @deprecated
     */
    initEvent() {
        // Do nothing.
    },
};

// `constructor` is not enumerable.
Object.defineProperty(Event.prototype, "constructor", {
    value: Event,
    configurable: true,
    writable: true,
});

// Ensure `event instanceof window.Event` is `true`.
if (typeof window !== "undefined" && typeof window.Event !== "undefined") {
    Object.setPrototypeOf(Event.prototype, window.Event.prototype);

    // Make association for wrappers.
    wrappers.set(window.Event.prototype, Event);
}

/**
 * Get the property descriptor to redirect a given property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to redirect the property.
 * @private
 */
function defineRedirectDescriptor(key) {
    return {
        get() {
            return pd(this).event[key]
        },
        set(value) {
            pd(this).event[key] = value;
        },
        configurable: true,
        enumerable: true,
    }
}

/**
 * Get the property descriptor to call a given method property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to call the method property.
 * @private
 */
function defineCallDescriptor(key) {
    return {
        value() {
            const event = pd(this).event;
            return event[key].apply(event, arguments)
        },
        configurable: true,
        enumerable: true,
    }
}

/**
 * Define new wrapper class.
 * @param {Function} BaseEvent The base wrapper class.
 * @param {Object} proto The prototype of the original event.
 * @returns {Function} The defined wrapper class.
 * @private
 */
function defineWrapper(BaseEvent, proto) {
    const keys = Object.keys(proto);
    if (keys.length === 0) {
        return BaseEvent
    }

    /** CustomEvent */
    function CustomEvent(eventTarget, event) {
        BaseEvent.call(this, eventTarget, event);
    }

    CustomEvent.prototype = Object.create(BaseEvent.prototype, {
        constructor: { value: CustomEvent, configurable: true, writable: true },
    });

    // Define accessors.
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (!(key in BaseEvent.prototype)) {
            const descriptor = Object.getOwnPropertyDescriptor(proto, key);
            const isFunc = typeof descriptor.value === "function";
            Object.defineProperty(
                CustomEvent.prototype,
                key,
                isFunc
                    ? defineCallDescriptor(key)
                    : defineRedirectDescriptor(key)
            );
        }
    }

    return CustomEvent
}

/**
 * Get the wrapper class of a given prototype.
 * @param {Object} proto The prototype of the original event to get its wrapper.
 * @returns {Function} The wrapper class.
 * @private
 */
function getWrapper(proto) {
    if (proto == null || proto === Object.prototype) {
        return Event
    }

    let wrapper = wrappers.get(proto);
    if (wrapper == null) {
        wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
        wrappers.set(proto, wrapper);
    }
    return wrapper
}

/**
 * Wrap a given event to management a dispatching.
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Object} event The event to wrap.
 * @returns {Event} The wrapper instance.
 * @private
 */
function wrapEvent(eventTarget, event) {
    const Wrapper = getWrapper(Object.getPrototypeOf(event));
    return new Wrapper(eventTarget, event)
}

/**
 * Get the immediateStopped flag of a given event.
 * @param {Event} event The event to get.
 * @returns {boolean} The flag to stop propagation immediately.
 * @private
 */
function isStopped(event) {
    return pd(event).immediateStopped
}

/**
 * Set the current event phase of a given event.
 * @param {Event} event The event to set current target.
 * @param {number} eventPhase New event phase.
 * @returns {void}
 * @private
 */
function setEventPhase(event, eventPhase) {
    pd(event).eventPhase = eventPhase;
}

/**
 * Set the current target of a given event.
 * @param {Event} event The event to set current target.
 * @param {EventTarget|null} currentTarget New current target.
 * @returns {void}
 * @private
 */
function setCurrentTarget(event, currentTarget) {
    pd(event).currentTarget = currentTarget;
}

/**
 * Set a passive listener of a given event.
 * @param {Event} event The event to set current target.
 * @param {Function|null} passiveListener New passive listener.
 * @returns {void}
 * @private
 */
function setPassiveListener(event, passiveListener) {
    pd(event).passiveListener = passiveListener;
}

/**
 * @typedef {object} ListenerNode
 * @property {Function} listener
 * @property {1|2|3} listenerType
 * @property {boolean} passive
 * @property {boolean} once
 * @property {ListenerNode|null} next
 * @private
 */

/**
 * @type {WeakMap<object, Map<string, ListenerNode>>}
 * @private
 */
const listenersMap = new WeakMap();

// Listener types
const CAPTURE = 1;
const BUBBLE = 2;
const ATTRIBUTE = 3;

/**
 * Check whether a given value is an object or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if the value is an object.
 */
function isObject(x) {
    return x !== null && typeof x === "object" //eslint-disable-line no-restricted-syntax
}

/**
 * Get listeners.
 * @param {EventTarget} eventTarget The event target to get.
 * @returns {Map<string, ListenerNode>} The listeners.
 * @private
 */
function getListeners(eventTarget) {
    const listeners = listenersMap.get(eventTarget);
    if (listeners == null) {
        throw new TypeError(
            "'this' is expected an EventTarget object, but got another value."
        )
    }
    return listeners
}

/**
 * Get the property descriptor for the event attribute of a given event.
 * @param {string} eventName The event name to get property descriptor.
 * @returns {PropertyDescriptor} The property descriptor.
 * @private
 */
function defineEventAttributeDescriptor(eventName) {
    return {
        get() {
            const listeners = getListeners(this);
            let node = listeners.get(eventName);
            while (node != null) {
                if (node.listenerType === ATTRIBUTE) {
                    return node.listener
                }
                node = node.next;
            }
            return null
        },

        set(listener) {
            if (typeof listener !== "function" && !isObject(listener)) {
                listener = null; // eslint-disable-line no-param-reassign
            }
            const listeners = getListeners(this);

            // Traverse to the tail while removing old value.
            let prev = null;
            let node = listeners.get(eventName);
            while (node != null) {
                if (node.listenerType === ATTRIBUTE) {
                    // Remove old value.
                    if (prev !== null) {
                        prev.next = node.next;
                    } else if (node.next !== null) {
                        listeners.set(eventName, node.next);
                    } else {
                        listeners.delete(eventName);
                    }
                } else {
                    prev = node;
                }

                node = node.next;
            }

            // Add new value.
            if (listener !== null) {
                const newNode = {
                    listener,
                    listenerType: ATTRIBUTE,
                    passive: false,
                    once: false,
                    next: null,
                };
                if (prev === null) {
                    listeners.set(eventName, newNode);
                } else {
                    prev.next = newNode;
                }
            }
        },
        configurable: true,
        enumerable: true,
    }
}

/**
 * Define an event attribute (e.g. `eventTarget.onclick`).
 * @param {Object} eventTargetPrototype The event target prototype to define an event attrbite.
 * @param {string} eventName The event name to define.
 * @returns {void}
 */
function defineEventAttribute(eventTargetPrototype, eventName) {
    Object.defineProperty(
        eventTargetPrototype,
        `on${eventName}`,
        defineEventAttributeDescriptor(eventName)
    );
}

/**
 * Define a custom EventTarget with event attributes.
 * @param {string[]} eventNames Event names for event attributes.
 * @returns {EventTarget} The custom EventTarget.
 * @private
 */
function defineCustomEventTarget(eventNames) {
    /** CustomEventTarget */
    function CustomEventTarget() {
        EventTarget.call(this);
    }

    CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
        constructor: {
            value: CustomEventTarget,
            configurable: true,
            writable: true,
        },
    });

    for (let i = 0; i < eventNames.length; ++i) {
        defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
    }

    return CustomEventTarget
}

/**
 * EventTarget.
 *
 * - This is constructor if no arguments.
 * - This is a function which returns a CustomEventTarget constructor if there are arguments.
 *
 * For example:
 *
 *     class A extends EventTarget {}
 *     class B extends EventTarget("message") {}
 *     class C extends EventTarget("message", "error") {}
 *     class D extends EventTarget(["message", "error"]) {}
 */
function EventTarget() {
    /*eslint-disable consistent-return */
    if (this instanceof EventTarget) {
        listenersMap.set(this, new Map());
        return
    }
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
        return defineCustomEventTarget(arguments[0])
    }
    if (arguments.length > 0) {
        const types = new Array(arguments.length);
        for (let i = 0; i < arguments.length; ++i) {
            types[i] = arguments[i];
        }
        return defineCustomEventTarget(types)
    }
    throw new TypeError("Cannot call a class as a function")
    /*eslint-enable consistent-return */
}

// Should be enumerable, but class methods are not enumerable.
EventTarget.prototype = {
    /**
     * Add a given listener to this event target.
     * @param {string} eventName The event name to add.
     * @param {Function} listener The listener to add.
     * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
     * @returns {void}
     */
    addEventListener(eventName, listener, options) {
        if (listener == null) {
            return
        }
        if (typeof listener !== "function" && !isObject(listener)) {
            throw new TypeError("'listener' should be a function or an object.")
        }

        const listeners = getListeners(this);
        const optionsIsObj = isObject(options);
        const capture = optionsIsObj
            ? Boolean(options.capture)
            : Boolean(options);
        const listenerType = capture ? CAPTURE : BUBBLE;
        const newNode = {
            listener,
            listenerType,
            passive: optionsIsObj && Boolean(options.passive),
            once: optionsIsObj && Boolean(options.once),
            next: null,
        };

        // Set it as the first node if the first node is null.
        let node = listeners.get(eventName);
        if (node === undefined) {
            listeners.set(eventName, newNode);
            return
        }

        // Traverse to the tail while checking duplication..
        let prev = null;
        while (node != null) {
            if (
                node.listener === listener &&
                node.listenerType === listenerType
            ) {
                // Should ignore duplication.
                return
            }
            prev = node;
            node = node.next;
        }

        // Add it.
        prev.next = newNode;
    },

    /**
     * Remove a given listener from this event target.
     * @param {string} eventName The event name to remove.
     * @param {Function} listener The listener to remove.
     * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
     * @returns {void}
     */
    removeEventListener(eventName, listener, options) {
        if (listener == null) {
            return
        }

        const listeners = getListeners(this);
        const capture = isObject(options)
            ? Boolean(options.capture)
            : Boolean(options);
        const listenerType = capture ? CAPTURE : BUBBLE;

        let prev = null;
        let node = listeners.get(eventName);
        while (node != null) {
            if (
                node.listener === listener &&
                node.listenerType === listenerType
            ) {
                if (prev !== null) {
                    prev.next = node.next;
                } else if (node.next !== null) {
                    listeners.set(eventName, node.next);
                } else {
                    listeners.delete(eventName);
                }
                return
            }

            prev = node;
            node = node.next;
        }
    },

    /**
     * Dispatch a given event.
     * @param {Event|{type:string}} event The event to dispatch.
     * @returns {boolean} `false` if canceled.
     */
    dispatchEvent(event) {
        if (event == null || typeof event.type !== "string") {
            throw new TypeError('"event.type" should be a string.')
        }

        // If listeners aren't registered, terminate.
        const listeners = getListeners(this);
        const eventName = event.type;
        let node = listeners.get(eventName);
        if (node == null) {
            return true
        }

        // Since we cannot rewrite several properties, so wrap object.
        const wrappedEvent = wrapEvent(this, event);

        // This doesn't process capturing phase and bubbling phase.
        // This isn't participating in a tree.
        let prev = null;
        while (node != null) {
            // Remove this listener if it's once
            if (node.once) {
                if (prev !== null) {
                    prev.next = node.next;
                } else if (node.next !== null) {
                    listeners.set(eventName, node.next);
                } else {
                    listeners.delete(eventName);
                }
            } else {
                prev = node;
            }

            // Call this listener
            setPassiveListener(
                wrappedEvent,
                node.passive ? node.listener : null
            );
            if (typeof node.listener === "function") {
                try {
                    node.listener.call(this, wrappedEvent);
                } catch (err) {
                    if (
                        typeof console !== "undefined" &&
                        typeof console.error === "function"
                    ) {
                        console.error(err);
                    }
                }
            } else if (
                node.listenerType !== ATTRIBUTE &&
                typeof node.listener.handleEvent === "function"
            ) {
                node.listener.handleEvent(wrappedEvent);
            }

            // Break if `event.stopImmediatePropagation` was called.
            if (isStopped(wrappedEvent)) {
                break
            }

            node = node.next;
        }
        setPassiveListener(wrappedEvent, null);
        setEventPhase(wrappedEvent, 0);
        setCurrentTarget(wrappedEvent, null);

        return !wrappedEvent.defaultPrevented
    },
};

// `constructor` is not enumerable.
Object.defineProperty(EventTarget.prototype, "constructor", {
    value: EventTarget,
    configurable: true,
    writable: true,
});

// Ensure `eventTarget instanceof window.EventTarget` is `true`.
if (
    typeof window !== "undefined" &&
    typeof window.EventTarget !== "undefined"
) {
    Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}

function normalizeOptions(options) {
    var capture = false;
    var passive;
    var once;
    if (typeof options === "boolean") {
        capture = options;
    }
    else if (options != null) {
        capture = !!options.capture;
        passive = options.passive;
        once = options.once;
    }
    return { capture: capture, passive: passive, once: once };
}
function isEventTarget(value) {
    return (value !== null &&
        typeof value === "object" &&
        typeof value.addEventListener === "function" &&
        // TODO: maybe we don’t need these checks
        typeof value.removeEventListener === "function" &&
        typeof value.dispatchEvent === "function");
}
var CrankEventTarget = /** @class */ (function (_super) {
    __extends(CrankEventTarget, _super);
    function CrankEventTarget(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        // TODO: maybe use a helper class?
        // we need a map from:
        // type -> capture -> listener record
        // for efficient querying
        _this.listeners = [];
        _this.delegates = new Set();
        return _this;
    }
    CrankEventTarget.prototype.setDelegates = function (delegates) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
        var _this = this;
        var delegates1 = new Set(Array.from(delegates).filter(isEventTarget));
        var removed = new Set(Array.from(this.delegates).filter(function (d) { return !delegates1.has(d); }));
        var added = new Set(Array.from(delegates1).filter(function (d) { return !_this.delegates.has(d); }));
        try {
            for (var removed_1 = __values(removed), removed_1_1 = removed_1.next(); !removed_1_1.done; removed_1_1 = removed_1.next()) {
                var delegate = removed_1_1.value;
                try {
                    for (var _e = (e_2 = void 0, __values(this.listeners)), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var listener = _f.value;
                        delegate.removeEventListener(listener.type, listener.callback, listener.options);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (removed_1_1 && !removed_1_1.done && (_a = removed_1.return)) _a.call(removed_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var added_1 = __values(added), added_1_1 = added_1.next(); !added_1_1.done; added_1_1 = added_1.next()) {
                var delegate = added_1_1.value;
                try {
                    for (var _g = (e_4 = void 0, __values(this.listeners)), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var listener = _h.value;
                        delegate.addEventListener(listener.type, listener.callback, listener.options);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_d = _g.return)) _d.call(_g);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (added_1_1 && !added_1_1.done && (_c = added_1.return)) _c.call(added_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.delegates = delegates1;
    };
    CrankEventTarget.prototype.addEventListener = function (type, callback, options) {
        var e_5, _a;
        if (callback == null) {
            return;
        }
        else if (typeof callback === "object") {
            throw new Error("Listener objects are not supported");
        }
        options = normalizeOptions(options);
        var record = { type: type, callback: callback, options: options };
        if (options.once) {
            var self_1 = this;
            record.callback = function (ev) {
                var result = callback.call(this, ev);
                self_1.removeEventListener(record.type, record.callback, record.options);
                return result;
            };
        }
        if (record.type.slice(0, 6) !== "crank.") {
            var idx = this.listeners.findIndex(function (record1) {
                return (record.type === record1.type &&
                    record.callback === record1.callback &&
                    record.options.capture === record1.options.capture);
            });
            if (idx <= -1) {
                this.listeners.push(record);
            }
        }
        try {
            for (var _b = __values(this.delegates), _c = _b.next(); !_c.done; _c = _b.next()) {
                var delegate = _c.value;
                delegate.addEventListener(type, callback, options);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return _super.prototype.addEventListener.call(this, type, callback, options);
    };
    CrankEventTarget.prototype.removeEventListener = function (type, callback, options) {
        var e_6, _a;
        if (callback == null) {
            return;
        }
        var capture = typeof options === "boolean" ? options : !!(options && options.capture);
        var idx = this.listeners.findIndex(function (record) {
            return (record.type === type &&
                record.callback === callback &&
                record.options.capture === capture);
        });
        var record = this.listeners[idx];
        if (record !== undefined) {
            this.listeners.splice(idx, 1);
        }
        try {
            for (var _b = __values(this.delegates), _c = _b.next(); !_c.done; _c = _b.next()) {
                var delegate = _c.value;
                delegate.removeEventListener(type, callback, options);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return _super.prototype.removeEventListener.call(this, type, callback, options);
    };
    CrankEventTarget.prototype.clearEventListeners = function () {
        var e_7, _a;
        try {
            for (var _b = __values(this.listeners.slice()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var listener = _c.value;
                this.removeEventListener(listener.type, listener.callback, listener.options);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    // TODO: ev is any because event-target-shim has a weird dispatchEvent type
    CrankEventTarget.prototype.dispatchEvent = function (ev) {
        var continued = _super.prototype.dispatchEvent.call(this, ev);
        if (continued && ev.bubbles && this.parent !== undefined) {
            // TODO: implement event capturing
            continued = this.parent.dispatchEvent(ev);
        }
        return continued;
    };
    return CrankEventTarget;
}(EventTarget));

function isPromiseLike(value) {
    return value != null && typeof value.then === "function";
}
function upgrade(value) {
    if (isPromiseLike(value) && !(value instanceof Promise)) {
        return Promise.resolve(value);
    }
    return value;
}
/**
 * A pledge is like a promise, except it runs synchronously if possible.
 *
 * It is not meant to be exposed in APIs; rather, you should unwrap pledges to
 * a possible promise by calling Pledge.prototype.execute.
 */
var Pledge = /** @class */ (function () {
    function Pledge(executor) {
        this.executor = executor;
    }
    Pledge.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return new Pledge(function () {
            try {
                var value = _this.execute();
                if (isPromiseLike(value)) {
                    return value.then(onfulfilled, onrejected);
                }
                else if (onfulfilled == null) {
                    return value;
                }
                return onfulfilled(value);
            }
            catch (err) {
                if (onrejected == null) {
                    throw err;
                }
                return onrejected(err);
            }
        });
    };
    Pledge.prototype.catch = function (onrejected) {
        var _this = this;
        return new Pledge(function () {
            try {
                var value = _this.execute();
                if (isPromiseLike(value)) {
                    return value.catch(onrejected);
                }
                return value;
            }
            catch (err) {
                if (onrejected == null) {
                    throw err;
                }
                return onrejected(err);
            }
        });
    };
    Pledge.prototype.finally = function (onfinally) {
        var _this = this;
        return new Pledge(function () {
            try {
                var value = _this.execute();
                if (isPromiseLike(value)) {
                    return value.finally(onfinally);
                }
                else if (onfinally != null) {
                    onfinally();
                }
                return value;
            }
            catch (err) {
                if (onfinally != null) {
                    onfinally();
                }
                throw err;
            }
        });
    };
    Pledge.prototype.execute = function () {
        return upgrade(this.executor());
    };
    Pledge.resolve = function (value) {
        return new Pledge(function () { return value; });
    };
    return Pledge;
}());

var _a;
function isIterable(value) {
    return value != null && typeof value[Symbol.iterator] === "function";
}
function isNonStringIterable(value) {
    return typeof value !== "string" && isIterable(value);
}
function isIteratorOrAsyncIterator(value) {
    return value != null && typeof value.next === "function";
}
var ElementSigil = Symbol.for("crank.ElementSigil");
// Special Intrinsic Tags
// TODO: We assert symbol tags as any because typescript support for symbol
// tags in JSX does not exist yet.
var Fragment = Symbol.for("crank.Fragment");
var Copy = Symbol("crank.Copy");
var Portal = Symbol.for("crank.Portal");
var Raw = Symbol.for("crank.Raw");
function isElement(value) {
    return value != null && value[ElementSigil];
}
function createElement(tag, props) {
    var _a;
    props = Object.assign({}, props);
    var key = props["crank-key"];
    if (key != null) {
        delete props["crank-key"];
    }
    if (arguments.length > 3) {
        props.children = Array.from(arguments).slice(2);
    }
    else if (arguments.length > 2) {
        props.children = arguments[2];
    }
    return _a = {}, _a[ElementSigil] = true, _a.tag = tag, _a.props = props, _a.key = key, _a;
}
function normalize(child) {
    if (child == null || typeof child === "boolean") {
        return undefined;
    }
    else if (typeof child === "string" || isElement(child)) {
        return child;
    }
    else {
        return child.toString();
    }
}
function flatten(children) {
    var children_1, children_1_1, child, e_1_1;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(children == null)) return [3 /*break*/, 1];
                return [2 /*return*/];
            case 1:
                if (!!isNonStringIterable(children)) return [3 /*break*/, 3];
                return [4 /*yield*/, normalize(children)];
            case 2:
                _b.sent();
                return [2 /*return*/];
            case 3:
                _b.trys.push([3, 10, 11, 12]);
                children_1 = __values(children), children_1_1 = children_1.next();
                _b.label = 4;
            case 4:
                if (!!children_1_1.done) return [3 /*break*/, 9];
                child = children_1_1.value;
                if (!isNonStringIterable(child)) return [3 /*break*/, 6];
                return [4 /*yield*/, createElement(Fragment, null, child)];
            case 5:
                _b.sent();
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, normalize(child)];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                children_1_1 = children_1.next();
                return [3 /*break*/, 4];
            case 9: return [3 /*break*/, 12];
            case 10:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 12];
            case 11:
                try {
                    if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 12: return [2 /*return*/];
        }
    });
}
var LeafNode = /** @class */ (function () {
    function LeafNode() {
        this.internal = false;
        this.tag = undefined;
        this.key = undefined;
        this.nextSibling = undefined;
        this.previousSibling = undefined;
        this.clock = 0;
        this.replacedBy = undefined;
        this.value = undefined;
    }
    return LeafNode;
}());
var ParentNode = /** @class */ (function () {
    function ParentNode() {
        this.internal = true;
        this.key = undefined;
        this.nextSibling = undefined;
        this.previousSibling = undefined;
        this.clock = 0;
        this.replacedBy = undefined;
        this.firstChild = undefined;
        this.lastChild = undefined;
        this.keyedChildren = undefined;
        // When children update asynchronously, we race their result against the next
        // update of children. The onNextChildren property is set to the resolve
        // function of the promise which the current update is raced against.
        this.onNextChildren = undefined;
        this.props = undefined;
        this.value = undefined;
        this.ctx = undefined;
        this.updating = false;
        this.iterating = false;
        this.finished = false;
        this.unmounted = false;
    }
    ParentNode.prototype.appendChild = function (child) {
        if (this.lastChild === undefined) {
            this.firstChild = child;
            this.lastChild = child;
            child.previousSibling = undefined;
            child.nextSibling = undefined;
        }
        else {
            child.previousSibling = this.lastChild;
            child.nextSibling = undefined;
            this.lastChild.nextSibling = child;
            this.lastChild = child;
        }
    };
    ParentNode.prototype.insertBefore = function (child, reference) {
        if (reference == null) {
            this.appendChild(child);
            return;
        }
        else if (child === reference) {
            return;
        }
        child.nextSibling = reference;
        if (reference.previousSibling === undefined) {
            child.previousSibling = undefined;
            this.firstChild = child;
        }
        else {
            child.previousSibling = reference.previousSibling;
            reference.previousSibling.nextSibling = child;
        }
        reference.previousSibling = child;
    };
    ParentNode.prototype.removeChild = function (child) {
        if (child.previousSibling === undefined) {
            this.firstChild = child.nextSibling;
        }
        else {
            child.previousSibling.nextSibling = child.nextSibling;
        }
        if (child.nextSibling === undefined) {
            this.lastChild = child.previousSibling;
        }
        else {
            child.nextSibling.previousSibling = child.previousSibling;
        }
        child.previousSibling = undefined;
        child.nextSibling = undefined;
    };
    ParentNode.prototype.replaceChild = function (child, reference) {
        this.insertBefore(child, reference);
        this.removeChild(reference);
    };
    ParentNode.prototype.getChildValues = function () {
        var buffer;
        var childValues = [];
        for (var child = this.firstChild; child != null; child = child.nextSibling) {
            if (typeof child.value === "string") {
                buffer = (buffer || "") + child.value;
            }
            else if (child.tag !== Portal) {
                if (buffer !== undefined) {
                    childValues.push(buffer);
                    buffer = undefined;
                }
                if (Array.isArray(child.value)) {
                    childValues.push.apply(childValues, __spread(child.value));
                }
                else if (child.value !== undefined) {
                    childValues.push(child.value);
                }
            }
        }
        if (buffer !== undefined) {
            childValues.push(buffer);
        }
        return childValues;
    };
    // TODO: I bet we could simplify the algorithm further, perhaps by writing a
    // custom a method which automatically zips up old and new nodes.
    ParentNode.prototype.updateChildren = function (children) {
        var e_2, _a, e_3, _b;
        var _this = this;
        var host = this.firstChild;
        var nextSibling = host && host.nextSibling;
        var nextKeyedChildren;
        var updates;
        var _loop_1 = function (child) {
            var tag = void 0;
            var key = void 0;
            if (isElement(child)) {
                tag = child.tag;
                key = child.key;
                if (nextKeyedChildren !== undefined && nextKeyedChildren.has(key)) {
                    key = undefined;
                }
            }
            if (key != null) {
                var nextNode = this_1.keyedChildren && this_1.keyedChildren.get(key);
                if (nextNode === undefined) {
                    nextNode = createNode(this_1, this_1.renderer, child);
                }
                else {
                    this_1.keyedChildren.delete(key);
                    if (host !== nextNode) {
                        this_1.removeChild(nextNode);
                    }
                }
                if (host === undefined) {
                    this_1.appendChild(nextNode);
                }
                else if (host !== nextNode) {
                    if (host.key == null) {
                        this_1.insertBefore(nextNode, host);
                    }
                    else {
                        this_1.insertBefore(nextNode, host.nextSibling);
                    }
                }
                host = nextNode;
                nextSibling = host.nextSibling;
            }
            else if (host === undefined) {
                host = createNode(this_1, this_1.renderer, child);
                this_1.appendChild(host);
            }
            else if (host.key != null) {
                var nextNode = createNode(this_1, this_1.renderer, child);
                this_1.insertBefore(nextNode, host.nextSibling);
                host = nextNode;
                nextSibling = host.nextSibling;
            }
            if (tag !== Copy) {
                // TODO: figure out why do we do a check for unmounted hosts here
                if (host.tag === tag && !(host.internal && host.unmounted)) {
                    if (host.internal) {
                        var update = host.update(child.props);
                        if (update !== undefined) {
                            if (updates === undefined) {
                                updates = [];
                            }
                            updates.push(update);
                        }
                    }
                    else if (typeof child === "string") {
                        host.value = this_1.renderer.text(child);
                    }
                    else {
                        host.value = undefined;
                    }
                }
                else {
                    // TODO: async unmount for keyed hosts
                    if (host.internal) {
                        host.unmount();
                    }
                    var nextNode_1 = createNode(this_1, this_1.renderer, child);
                    nextNode_1.clock = host.clock++;
                    var update = void 0;
                    if (nextNode_1.internal) {
                        update = nextNode_1.update(child.props);
                    }
                    else if (typeof child === "string") {
                        nextNode_1.value = this_1.renderer.text(child);
                    }
                    else {
                        nextNode_1.value = undefined;
                    }
                    if (update === undefined) {
                        this_1.replaceChild(nextNode_1, host);
                        host.replacedBy = nextNode_1;
                    }
                    else {
                        if (updates === undefined) {
                            updates = [];
                        }
                        updates.push(update);
                        // host is reassigned so we need to capture its current value in
                        // host1 for the sake of the callback’s closure.
                        var host1_1 = host;
                        update.then(function () {
                            if (host1_1.replacedBy === undefined) {
                                _this.replaceChild(nextNode_1, host1_1);
                                host1_1.replacedBy = nextNode_1;
                            }
                            else if (host1_1.replacedBy.replacedBy === undefined &&
                                host1_1.replacedBy.clock < nextNode_1.clock) {
                                _this.replaceChild(nextNode_1, host1_1.replacedBy);
                                host1_1.replacedBy = nextNode_1;
                            }
                        });
                    }
                }
            }
            if (key !== undefined) {
                if (nextKeyedChildren === undefined) {
                    nextKeyedChildren = new Map();
                }
                nextKeyedChildren.set(key, host);
            }
            host = nextSibling;
            nextSibling = host && host.nextSibling;
        };
        var this_1 = this;
        try {
            for (var _c = __values(flatten(children)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var child = _d.value;
                _loop_1(child);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // unmount excess children
        for (; host !== undefined; host = nextSibling, nextSibling = host && host.nextSibling) {
            if (host.key !== undefined && this.keyedChildren !== undefined) {
                this.keyedChildren.delete(host.key);
            }
            if (host.internal) {
                host.unmount();
            }
            this.removeChild(host);
        }
        // unmount excess keyed children
        if (this.keyedChildren !== undefined) {
            try {
                for (var _e = __values(this.keyedChildren.values()), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var child = _f.value;
                    child.internal && child.unmount();
                    this.removeChild(child);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        this.keyedChildren = nextKeyedChildren;
        if (updates === undefined) {
            this.commit();
            if (this.onNextChildren !== undefined) {
                this.onNextChildren();
                this.onNextChildren = undefined;
            }
        }
        else {
            var result = Promise.all(updates).then(function () { return void _this.commit(); }); // void :(
            if (this.onNextChildren !== undefined) {
                this.onNextChildren(result);
                this.onNextChildren = undefined;
            }
            var nextResult = new Promise(function (resolve) { return (_this.onNextChildren = resolve); });
            return Promise.race([result, nextResult]);
        }
    };
    ParentNode.prototype.unmountChildren = function () {
        for (var host = this.firstChild; host !== undefined; host = host.nextSibling) {
            if (host.internal) {
                host.unmount();
            }
        }
    };
    ParentNode.prototype.update = function (props) {
        this.props = props;
        this.updating = true;
        return this.refresh();
    };
    ParentNode.prototype.refresh = function () {
        if (this.unmounted) {
            return;
        }
        return this.updateChildren(this.props && this.props.children);
    };
    ParentNode.prototype.catch = function (reason) {
        if (this.parent === undefined) {
            throw reason;
        }
        return this.parent.catch(reason);
    };
    return ParentNode;
}());
var FragmentNode = /** @class */ (function (_super) {
    __extends(FragmentNode, _super);
    function FragmentNode(parent, renderer, key) {
        var _this = _super.call(this) || this;
        _this.tag = Fragment;
        _this.key = key;
        _this.parent = parent;
        _this.renderer = renderer;
        _this.ctx = parent.ctx;
        return _this;
    }
    FragmentNode.prototype.commit = function () {
        var childValues = this.getChildValues();
        this.value = childValues.length > 1 ? childValues : childValues[0];
        if (!this.updating) {
            // TODO: batch this per microtask
            this.parent.commit();
        }
        this.updating = false;
        return; // void :(
    };
    FragmentNode.prototype.unmount = function () {
        if (this.unmounted) {
            return;
        }
        this.unmounted = true;
        this.unmountChildren();
    };
    return FragmentNode;
}(ParentNode));
var HostNode = /** @class */ (function (_super) {
    __extends(HostNode, _super);
    function HostNode(parent, renderer, tag, key) {
        var _this = _super.call(this) || this;
        _this.childValues = [];
        _this.iterator = undefined;
        _this.tag = tag;
        _this.key = key;
        _this.parent = parent;
        _this.renderer = renderer;
        _this.intrinsic = renderer.intrinsic(tag);
        _this.ctx = parent && parent.ctx;
        _this.hostCtx = new HostContext(_this);
        return _this;
    }
    HostNode.prototype.commit = function () {
        this.childValues = this.getChildValues();
        try {
            if (this.iterator === undefined) {
                var value = this.intrinsic.call(this.hostCtx, exports.__assign(exports.__assign({}, this.props), { children: this.childValues }));
                if (isIteratorOrAsyncIterator(value)) {
                    this.iterator = value;
                }
                else {
                    this.value = value;
                }
            }
            if (this.iterator !== undefined) {
                var iteration = this.iterator.next();
                this.value = iteration.value;
                this.iterating = false;
                if (iteration.done) {
                    this.finished = true;
                }
            }
        }
        catch (err) {
            if (this.parent !== undefined) {
                return this.parent.catch(err);
            }
            throw err;
        }
        finally {
            this.updating = false;
        }
    };
    HostNode.prototype.unmount = function () {
        if (this.unmounted) {
            return;
        }
        else if (this.finished) {
            if (this.iterator !== undefined && this.iterator.return) {
                try {
                    this.iterator.return();
                }
                catch (err) {
                    if (this.parent !== undefined) {
                        this.parent.catch(err);
                    }
                    throw err;
                }
            }
        }
        this.unmounted = true;
        this.unmountChildren();
    };
    HostNode.prototype[Symbol.iterator] = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!this.unmounted) return [3 /*break*/, 2];
                    if (this.iterating) {
                        throw new Error("You must yield something each iteration over context");
                    }
                    this.iterating = true;
                    return [4 /*yield*/, exports.__assign(exports.__assign({}, this.props), { children: this.childValues })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    };
    return HostNode;
}(ParentNode));
var AsyncFn = 1;
var SyncGen = 2;
var AsyncGen = 3;
var ComponentNode = /** @class */ (function (_super) {
    __extends(ComponentNode, _super);
    function ComponentNode(parent, renderer, tag, key) {
        var _this = _super.call(this) || this;
        _this.available = true;
        _this.iterator = undefined;
        // TODO: explain these properties
        _this.componentType = undefined;
        _this.inflightPending = undefined;
        _this.enqueuedPending = undefined;
        _this.inflightResult = undefined;
        _this.enqueuedResult = undefined;
        _this.previousResult = undefined;
        _this.provisions = undefined;
        _this.publish = undefined;
        _this.parent = parent;
        _this.renderer = renderer;
        _this.tag = tag;
        _this.key = key;
        _this.ctx = new Context(_this, parent.ctx);
        return _this;
    }
    ComponentNode.prototype.step = function () {
        var _this = this;
        if (this.finished) {
            return [undefined, undefined];
        }
        else if (this.iterator === undefined) {
            this.ctx.clearEventListeners();
            var value = new Pledge(function () { return _this.tag.call(_this.ctx, _this.props); })
                .catch(function (err) { return _this.parent.catch(err); })
                // type assertion because we shouldn’t get a promise of an iterator
                .execute();
            if (isIteratorOrAsyncIterator(value)) {
                this.iterator = value;
            }
            else if (isPromiseLike(value)) {
                this.componentType = AsyncFn;
                var pending_1 = value.then(function () { return undefined; }); // void :(
                var result = value.then(function (child) { return _this.updateChildren(child); });
                return [pending_1, result];
            }
            else {
                this.componentType = AsyncGen;
                var result = this.updateChildren(value);
                return [undefined, result];
            }
        }
        var previousValue = Pledge.resolve(this.previousResult)
            .then(function () { return _this.value; })
            .execute();
        var iteration = new Pledge(function () { return _this.iterator.next(previousValue); })
            .catch(function (err) {
            // TODO: figure out why this is written like this
            return Pledge.resolve(_this.parent.catch(err))
                .then(function () { return ({ value: undefined, done: true }); })
                .execute();
        })
            .execute();
        if (isPromiseLike(iteration)) {
            this.componentType = AsyncGen;
            var pending_2 = iteration.then(function (iteration) {
                _this.iterating = false;
                if (iteration.done) {
                    _this.finished = true;
                }
                return undefined; // void :(
            }, function () { return undefined; });
            var result = iteration.then(function (iteration) {
                _this.previousResult = _this.updateChildren(iteration.value);
                return _this.previousResult;
            });
            return [pending_2, result];
        }
        else {
            this.iterating = false;
            this.componentType = SyncGen;
            if (iteration.done) {
                this.finished = true;
            }
            var result = this.updateChildren(iteration.value);
            return [result, result];
        }
    };
    ComponentNode.prototype.advance = function () {
        this.inflightPending = this.enqueuedPending;
        this.inflightResult = this.enqueuedResult;
        this.enqueuedPending = undefined;
        this.enqueuedResult = undefined;
        if (this.componentType === AsyncGen && !this.finished && !this.unmounted) {
            this.run();
        }
    };
    ComponentNode.prototype.refresh = function () {
        if (this.unmounted) {
            return;
        }
        if (this.publish === undefined) {
            this.available = true;
        }
        else {
            this.publish(this.props);
            this.publish = undefined;
        }
        return this.run();
    };
    ComponentNode.prototype[Symbol.iterator] = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!this.unmounted) return [3 /*break*/, 2];
                    if (this.iterating) {
                        throw new Error("You must yield once per iteration over context");
                    }
                    else if (this.componentType === AsyncGen) {
                        throw new Error("Use for await...of in async generator components.");
                    }
                    this.iterating = true;
                    return [4 /*yield*/, this.props];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    };
    ComponentNode.prototype[Symbol.asyncIterator] = function () {
        return __asyncGenerator(this, arguments, function _a() {
            var props;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.iterating) {
                            throw new Error("You must yield once per iteration over context");
                        }
                        else if (this.componentType === SyncGen) {
                            throw new Error("Use for...of in sync generator components.");
                        }
                        this.iterating = true;
                        if (!this.available) return [3 /*break*/, 3];
                        this.available = false;
                        return [4 /*yield*/, __await(this.props)];
                    case 1: return [4 /*yield*/, _b.sent()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 3: return [4 /*yield*/, __await(new Promise(function (resolve) { return (_this.publish = resolve); }))];
                    case 4:
                        props = _b.sent();
                        if (!!this.unmounted) return [3 /*break*/, 7];
                        return [4 /*yield*/, __await(props)];
                    case 5: return [4 /*yield*/, _b.sent()];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        if (!this.unmounted) return [3 /*break*/, 0];
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ComponentNode.prototype.run = function () {
        var _this = this;
        if (this.inflightPending === undefined) {
            var _a = __read(this.step(), 2), pending_3 = _a[0], result = _a[1];
            if (isPromiseLike(pending_3)) {
                this.inflightPending = pending_3.finally(function () { return _this.advance(); });
            }
            this.inflightResult = result;
            return this.inflightResult;
        }
        else if (this.componentType === AsyncGen) {
            return this.inflightResult;
        }
        else if (this.enqueuedPending === undefined) {
            var resolve_1;
            this.enqueuedPending = this.inflightPending
                .then(function () {
                var _a = __read(_this.step(), 2), pending = _a[0], result = _a[1];
                resolve_1(result);
                return pending;
            })
                .finally(function () { return _this.advance(); });
            this.enqueuedResult = new Promise(function (resolve1) { return (resolve_1 = resolve1); });
        }
        return this.enqueuedResult;
    };
    ComponentNode.prototype.commit = function () {
        var childValues = this.getChildValues();
        this.ctx.setDelegates(childValues);
        this.value = childValues.length > 1 ? childValues : childValues[0];
        if (!this.updating) {
            // TODO: batch this per macrotask
            this.parent.commit();
        }
        this.updating = false;
        return; // void :(
    };
    ComponentNode.prototype.unmount = function () {
        var _this = this;
        if (this.unmounted) {
            return;
        }
        this.unmounted = true;
        if (!this.finished) {
            this.finished = true;
            // TODO: maybe we should return the async iterator rather than
            // republishing props
            if (this.publish !== undefined) {
                this.publish(this.props);
                this.publish = undefined;
            }
            if (this.iterator !== undefined && this.iterator.return) {
                return new Pledge(function () { return _this.iterator.return(); })
                    .then(function () { return void _this.unmountChildren(); }, // void :(
                function (err) { return _this.parent.catch(err); })
                    .execute();
            }
        }
        this.unmountChildren();
    };
    ComponentNode.prototype.catch = function (reason) {
        var _this = this;
        if (this.iterator === undefined ||
            this.iterator.throw === undefined ||
            this.finished) {
            return _super.prototype.catch.call(this, reason);
        }
        else {
            return new Pledge(function () { return _this.iterator.throw(reason); })
                .then(function (iteration) {
                if (iteration.done) {
                    _this.finished = true;
                }
                return _this.updateChildren(iteration.value);
            })
                .catch(function (err) { return _this.parent.catch(err); })
                .execute();
        }
    };
    ComponentNode.prototype.get = function (name) {
        for (var host = this.parent; host !== undefined; host = host.parent) {
            if (host instanceof ComponentNode &&
                host.provisions !== undefined &&
                host.provisions.has(name)) {
                return host.provisions.get(name);
            }
        }
    };
    ComponentNode.prototype.set = function (name, value) {
        if (this.provisions === undefined) {
            this.provisions = new Map();
        }
        this.provisions.set(name, value);
    };
    return ComponentNode;
}(ParentNode));
function createNode(parent, renderer, child) {
    if (child === undefined || typeof child === "string") {
        return new LeafNode();
    }
    else if (child.tag === Fragment) {
        return new FragmentNode(parent, renderer, child.key);
    }
    else if (typeof child.tag === "function") {
        return new ComponentNode(parent, renderer, child.tag, child.key);
    }
    else {
        return new HostNode(parent, renderer, child.tag, child.key);
    }
}
var hostNodes = new WeakMap();
var HostContext = /** @class */ (function () {
    function HostContext(host) {
        hostNodes.set(this, host);
    }
    HostContext.prototype[Symbol.iterator] = function () {
        return hostNodes.get(this)[Symbol.iterator]();
    };
    return HostContext;
}());
var componentNodes = new WeakMap();
var Context = /** @class */ (function (_super) {
    __extends(Context, _super);
    function Context(host, parent) {
        var _this = _super.call(this, parent) || this;
        componentNodes.set(_this, host);
        return _this;
    }
    Context.prototype.get = function (name) {
        return componentNodes.get(this).get(name);
    };
    Context.prototype.set = function (name, value) {
        componentNodes.get(this).set(name, value);
    };
    /* eslint-enable no-dupe-class-members */
    Context.prototype[Symbol.iterator] = function () {
        return componentNodes.get(this)[Symbol.iterator]();
    };
    Context.prototype[Symbol.asyncIterator] = function () {
        return componentNodes.get(this)[Symbol.asyncIterator]();
    };
    Context.prototype.refresh = function () {
        return componentNodes.get(this).refresh();
    };
    return Context;
}(CrankEventTarget));
var Default = Symbol.for("crank.Default");
var Text = Symbol.for("crank.Text");
var defaultEnv = (_a = {},
    _a[Default] = function (tag) {
        throw new Error("Environment did not provide an intrinsic for tag: " + tag);
    },
    _a[Portal] = function () {
        throw new Error("Environment did not provide an intrinsic for Portal");
    },
    _a[Raw] = function (_a) {
        var value = _a.value;
        return value;
    },
    _a);
var Renderer = /** @class */ (function () {
    function Renderer(env) {
        this.cache = new WeakMap();
        this.env = exports.__assign({}, defaultEnv);
        if (env) {
            this.extend(env);
        }
    }
    Renderer.prototype.extend = function (env) {
        var e_4, _a, e_5, _b;
        try {
            for (var _c = __values(Object.getOwnPropertySymbols(env)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var sym = _d.value;
                if (env[sym] != null) {
                    this.env[sym] = env[sym];
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_4) throw e_4.error; }
        }
        try {
            for (var _e = __values(Object.keys(env)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var tag = _f.value;
                if (env[tag] != null) {
                    this.env[tag] = env[tag];
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    Renderer.prototype.render = function (child, root) {
        var portal;
        if (isElement(child) && child.tag === Portal) {
            portal = child;
        }
        else {
            portal = createElement(Portal, { root: root }, child);
        }
        var host = root != null ? this.cache.get(root) : undefined;
        if (host === undefined) {
            host = new HostNode(undefined, this, portal.tag);
            if (root !== undefined) {
                this.cache.set(root, host);
            }
        }
        return Pledge.resolve(host.update(portal.props))
            .then(function () { return host.value; })
            .execute();
    };
    // TODO: Ideally, the intrinsic and text methods should not be exposed
    // outside this module
    Renderer.prototype.intrinsic = function (tag) {
        if (this.env[tag]) {
            return this.env[tag];
        }
        else if (typeof tag === "string") {
            return this.env[Default](tag);
        }
        else {
            throw new Error("Unknown tag: " + tag.toString());
        }
    };
    Renderer.prototype.text = function (text) {
        if (this.env[Text] !== undefined) {
            return this.env[Text](text);
        }
        return text;
    };
    return Renderer;
}());

exports.Context = Context;
exports.Copy = Copy;
exports.Default = Default;
exports.Fragment = Fragment;
exports.HostContext = HostContext;
exports.Portal = Portal;
exports.Raw = Raw;
exports.Renderer = Renderer;
exports.Text = Text;
exports.__extends = __extends;
exports.__generator = __generator;
exports.__read = __read;
exports.__rest = __rest;
exports.__values = __values;
exports.createElement = createElement;
exports.isElement = isElement;


},{}],"node_modules/@bikeshaving/crank/cjs/index.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./index-454299da.js');



exports.Context = index.Context;
exports.Copy = index.Copy;
exports.Default = index.Default;
exports.Fragment = index.Fragment;
exports.HostContext = index.HostContext;
exports.Portal = index.Portal;
exports.Raw = index.Raw;
exports.Renderer = index.Renderer;
exports.Text = index.Text;
exports.createElement = index.createElement;
exports.isElement = index.isElement;


},{"./index-454299da.js":"node_modules/@bikeshaving/crank/cjs/index-454299da.js"}],"node_modules/@bikeshaving/crank/cjs/dom.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./index-454299da.js');

var _a;
// TODO: create an allowlist/blocklist of props
function updateProps(el, props, newProps) {
    for (var name_1 in index.__assign(index.__assign({}, props), newProps)) {
        var value = props[name_1];
        var newValue = newProps[name_1];
        switch (true) {
            case name_1 === "children":
                break;
            case name_1 === "class":
            case name_1 === "className": {
                el["className"] = newValue;
                break;
            }
            case name_1 === "style" && "style" in el: {
                var style = el.style;
                if (newValue == null) {
                    el.removeAttribute("style");
                }
                else if (typeof newValue === "string") {
                    style.cssText = newValue;
                }
                else {
                    for (var styleName in Object.assign({}, value, newValue)) {
                        var styleValue = value && value[styleName];
                        var newStyleValue = newValue && newValue[styleName];
                        if (newStyleValue == null) {
                            style.removeProperty(styleName);
                        }
                        else if (styleValue !== newStyleValue) {
                            style.setProperty(styleName, newStyleValue);
                        }
                    }
                }
                break;
            }
            default: {
                if (name_1 in el) {
                    el[name_1] = newValue;
                    break;
                }
                else if (newValue === true) {
                    el.setAttribute(name_1, "");
                }
                else if (newValue === false || newValue == null) {
                    el.removeAttribute(name_1);
                }
                else {
                    el.setAttribute(name_1, newValue);
                }
                break;
            }
        }
    }
}
// TODO: improve this algorithm
// https://stackoverflow.com/questions/59418120/what-is-the-most-efficient-way-to-update-the-childnodes-of-a-dom-node-with-an-ar
function updateChildren(el, children) {
    var e_1, _a, e_2, _b;
    if (el.childNodes.length === 0) {
        var fragment = document.createDocumentFragment();
        try {
            for (var children_1 = index.__values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (typeof child === "string") {
                    child = document.createTextNode(child);
                }
                fragment.appendChild(child);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        el.appendChild(fragment);
        return;
    }
    var oldChild = el.firstChild;
    try {
        for (var children_2 = index.__values(children), children_2_1 = children_2.next(); !children_2_1.done; children_2_1 = children_2.next()) {
            var newChild = children_2_1.value;
            if (oldChild === null) {
                el.appendChild(typeof newChild === "string"
                    ? document.createTextNode(newChild)
                    : newChild);
            }
            else if (typeof newChild === "string") {
                if (oldChild.nodeType === Node.TEXT_NODE) {
                    if (oldChild.nodeValue !== newChild) {
                        oldChild.nodeValue = newChild;
                    }
                    oldChild = oldChild.nextSibling;
                }
                else {
                    el.insertBefore(document.createTextNode(newChild), oldChild);
                }
            }
            else if (oldChild !== newChild) {
                el.insertBefore(newChild, oldChild);
            }
            else {
                oldChild = oldChild.nextSibling;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (children_2_1 && !children_2_1.done && (_b = children_2.return)) _b.call(children_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    while (oldChild !== null) {
        var nextSibling = oldChild.nextSibling;
        el.removeChild(oldChild);
        oldChild = nextSibling;
    }
}
function createDocumentFragmentFromHTML(html) {
    if (typeof document.createRange === "function") {
        return document.createRange().createContextualFragment(html);
    }
    else {
        var fragment = document.createDocumentFragment();
        var childNodes = new DOMParser().parseFromString(html, "text/html").body
            .childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            fragment.appendChild(childNodes[i]);
        }
        return fragment;
    }
}
// TODO: Element should be ParentNode maybe?
var env = (_a = {},
    _a[index.Default] = function (tag) {
        return function defaultDOM() {
            var node, props, nextProps, children, nextChildren, _a, _b, _c, e_3_1;
            var e_3, _d;
            return index.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        node = document.createElement(tag);
                        props = {};
                        children = [];
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 6, 7, 8]);
                        _a = index.__values(this), _b = _a.next();
                        _e.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        _c = _b.value;
                        (nextChildren = _c.children, nextProps = index.__rest(_c, ["children"]));
                        updateProps(node, props, nextProps);
                        props = nextProps;
                        if (!("innerHTML" in nextProps) &&
                            (children.length > 0 || nextChildren.length > 0)) {
                            updateChildren(node, nextChildren);
                            children = nextChildren;
                        }
                        return [4 /*yield*/, node];
                    case 3:
                        _e.sent();
                        _e.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_3_1 = _e.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        };
    },
    _a[index.Raw] = function (_a) {
        var value = _a.value;
        if (typeof value === "string") {
            // TODO: figure out what the type of element should actually be
            return createDocumentFragmentFromHTML(value);
        }
        else {
            return value;
        }
    },
    _a[index.Portal] = function (_a) {
        var _b, _c, _d, newRoot, children, e_4_1;
        var e_4, _e;
        var root = _a.root;
        return index.__generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (root == null) {
                        throw new TypeError("Portal element is missing root node");
                    }
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, , 10, 11]);
                    _f.label = 2;
                case 2:
                    _f.trys.push([2, 7, 8, 9]);
                    _b = index.__values(this), _c = _b.next();
                    _f.label = 3;
                case 3:
                    if (!!_c.done) return [3 /*break*/, 6];
                    _d = _c.value, newRoot = _d.root, children = _d.children;
                    if (newRoot == null) {
                        throw new TypeError("Portal element is missing root node");
                    }
                    if (root !== newRoot) {
                        updateChildren(root, []);
                        root = newRoot;
                    }
                    updateChildren(root, children);
                    return [4 /*yield*/, root];
                case 4:
                    _f.sent();
                    _f.label = 5;
                case 5:
                    _c = _b.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_4_1 = _f.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_c && !_c.done && (_e = _b.return)) _e.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 9: return [3 /*break*/, 11];
                case 10:
                    updateChildren(root, []);
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    },
    _a);
var DOMRenderer = /** @class */ (function (_super) {
    index.__extends(DOMRenderer, _super);
    function DOMRenderer() {
        return _super.call(this, env) || this;
    }
    return DOMRenderer;
}(index.Renderer));
var renderer = new DOMRenderer();

exports.DOMRenderer = DOMRenderer;
exports.env = env;
exports.renderer = renderer;


},{"./index-454299da.js":"node_modules/@bikeshaving/crank/cjs/index-454299da.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _cjs = require("@bikeshaving/crank/cjs");

var _dom = require("@bikeshaving/crank/cjs/dom");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Greeting(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'World' : _ref$name;
  return (0, _cjs.createElement)("div", null, (0, _cjs.createElement)("div", null, " Yello ", name), "yield (", (0, _cjs.createElement)(GetQuote, null), ")");
}

function GetQuote() {
  return _GetQuote.apply(this, arguments);
}

function _GetQuote() {
  _GetQuote = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res, _yield$res$json, quote;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://favqs.com/api/qotd');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            _yield$res$json = _context.sent;
            quote = _yield$res$json.quote;
            return _context.abrupt("return", // <p>lol</p>
            (0, _cjs.createElement)("p", null, "lol \"", quote.body, "\""));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _GetQuote.apply(this, arguments);
}

_dom.renderer.render((0, _cjs.createElement)(GetQuote, null), document.body); // renderer.render(<div id='wee'>yellooo</div>, document.body);
},{"@bikeshaving/crank/cjs":"node_modules/@bikeshaving/crank/cjs/index.js","@bikeshaving/crank/cjs/dom":"node_modules/@bikeshaving/crank/cjs/dom.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52438" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/crank.e31bb0bc.js.map