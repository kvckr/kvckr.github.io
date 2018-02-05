

(function(){

"use strict";


var randomHash = function() {
    var N = 10;
    return new Array(N+1).join((Math.random().toString(36)+'00000000000000000')
                .slice(2, 18)).slice(0, N)
};

var extend = function(trg) {
    var i, j, len, src;

    for (j = 1, len = arguments.length; j < len; j++) {
        src     = arguments[j];
        for (i in src) {
            trg[i] = src[i];
        }
    }
};



/**
 * <p>A javascript event system implementing two patterns - observable and collector.</p>
 *
 * <p>Observable:</p>
 * <pre><code class="language-javascript">
 * var o = new MetaphorJs.lib.Observable;
 * o.on("event", function(x, y, z){ console.log([x, y, z]) });
 * o.trigger("event", 1, 2, 3); // [1, 2, 3]
 * </code></pre>
 *
 * <p>Collector:</p>
 * <pre><code class="language-javascript">
 * var o = new MetaphorJs.lib.Observable;
 * o.createEvent("collectStuff", "all");
 * o.on("collectStuff", function(){ return 1; });
 * o.on("collectStuff", function(){ return 2; });
 * var results = o.trigger("collectStuff"); // [1, 2]
 * </code></pre>
 *
 * <p>Although all methods are public there is getApi() method that allows you
 * extending your own objects without overriding "destroy" (which you probably have)</p>
 * <pre><code class="language-javascript">
 * var o = new MetaphorJs.lib.Observable;
 * $.extend(this, o.getApi());
 * this.on("event", function(){ alert("ok") });
 * this.trigger("event");
 * </code></pre>
 *
 * @class MetaphorJs.lib.Observable
 * @version 1.1
 * @author johann kuindji
 * @link https://github.com/kuindji/metaphorjs-observable
 */
var observable = function() {

    var self        = this,
        events      = {},
        api         = {};

    extend(api, {

        /**
        * <p>You don't have to call this function unless you want to pass returnResult param.
        * This function will be automatically called from on() with
        * <code class="language-javascript">returnResult = false</code>,
        * so if you want to receive handler's return values, create event first, then call on().</p>
        *
        * <pre><code class="language-javascript">
        * var observable = new MetaphorJs.lib.Observable;
        * observable.createEvent("collectStuff", "all");
        * observable.on("collectStuff", function(){ return 1; });
        * observable.on("collectStuff", function(){ return 2; });
        * var results = observable.trigger("collectStuff"); // [1, 2]
        * </code></pre>
        *
        * @method
        * @access public
        * @param string name {
        *       Event name
        *       @required
        * }
        * @param bool|string returnResult {
        *   false -- do not return results except if handler returned "false". This is how
        *   normal observables work.<br>
        *   "all" -- return all results as array<br>
        *   "first" -- return result of the first handler<br>
        *   "last" -- return result of the last handler
        *   @required
        * }
        * @return MetaphorJs.lib.ObservableEvent
        */
        createEvent: function(name, returnResult) {
            name = name.toLowerCase();
            if (!events[name]) {
                events[name] = new event(name, returnResult);
            }
            return events[name];
        },

        /**
        * @method
        * @access public
        * @param string name Event name
        * @return MetaphorJs.lib.ObservableEvent|undefined
        */
        getEvent: function(name) {
            name = name.toLowerCase();
            return events[name];
        },

        /**
        * Subscribe to an event or register collector function.
        * @method
        * @access public
        * @md-save on
        * @param string name {
        *       Event name
        *       @required
        * }
        * @param function fn {
        *       Callback function
        *       @required
        * }
        * @param object scope "this" object for the callback function
        * @param object options {
        *       @type bool first {
        *           True to prepend to the list of handlers
        *           @default false
        *       }
        *       @type number limit {
        *           Call handler this number of times; 0 for unlimited
        *           @default 0
        *       }
        *       @type number start {
        *           Start calling handler after this number of calls. Starts from 1
        *           @default 1
        *       }
        * }
        */
        on: function(name, fn, scope, options) {
            name = name.toLowerCase();
            if (!events[name]) {
                events[name] = new event(name);
            }
            return events[name].on(fn, scope, options);
        },

        /**
        * Same as on(), but options.limit is forcefully set to 1.
        * @method
        * @md-apply on
        * @access public
        */
        once: function(name, fn, scope, options) {
            options     = options || {};
            options.limit = 1;
            return self.on(name, fn, scope, options);
        },


        /**
        * Unsubscribe from an event
        * @method
        * @access public
        * @param string name {
        *       Event name
        *       @required
        * }
        * @param function fn {
        *       Event handler
        *       @required
        * }
        * @param object scope If you called on() with scope you must call un() with the same scope
        */
        un: function(name, fn, scope) {
            name = name.toLowerCase();
            if (!events[name]) {
                return;
            }
            events[name].un(fn, scope);
        },

        /**
        * @method hasListener
        * @access public
        * @param string name Event name { @required }
        * @return bool
        */

        /**
        * @method
        * @access public
        * @param string name Event name { @required }
        * @param function fn Callback function { @required }
        * @param object scope Function's "this" object
        * @return bool
        */
        hasListener: function(name, fn, scope) {
            name = name.toLowerCase();
            if (!events[name]) {
                return false;
            }
            return events[name].hasListener(fn, scope);
        },

        /**
        * Remove all listeners from all events
        * @method removeAllListeners
        * @access public
        */

        /**
        * Remove all listeners from specific event
        * @method
        * @access public
        * @param string name Event name { @required }
        */
        removeAllListeners: function(name) {
            if (!events[name]) {
                return;
            }
            events[name].removeAllListeners();
        },

        /**
        * Trigger an event -- call all listeners.
        * @method
        * @access public
        * @param string name Event name { @required }
        * @param mixed ... As many other params as needed
        * @return mixed
        */
        trigger: function() {

            var a = [],
                name = arguments[0];

            name = name.toLowerCase();

            if (!events[name]) {
                return;
            }

            for (var i = 1, len = arguments.length; i < len; i++) {
                a.push(arguments[i]);
            }

            var e = events[name];
            return e.trigger.apply(e, a);
        },

        /**
        * Suspend an event. Suspended event will not call any listeners on trigger().
        * @method
        * @access public
        * @param string name Event name
        */
        suspendEvent: function(name) {
            name = name.toLowerCase();
            if (!events[name]) {
                return;
            }
            events[name].suspend();
        },

        /**
        * @method
        * @access public
        */
        suspendAllEvents: function() {
            for (var name in events) {
                events[name].suspend();
            }
        },

        /**
        * Resume suspended event.
        * @method
        * @access public
        * @param string name Event name
        */
        resumeEvent: function(name) {
            name = name.toLowerCase();
            if (!events[name]) {
                return;
            }
            events[name].resume();
        },

        /**
        * @method
        * @access public
        */
        resumeAllEvents: function() {

            for (var name in events) {
                events[name].resume();
            }
        }
    });

    extend(self, api, {

        /**
        * Destroy all events and itself
        * @method destroy
        * @md-not-inheritable
        * @access public
        */

        /**
        * Destroy specific event
        * @method
        * @md-not-inheritable
        * @access public
        * @param string name Event name
        */
        destroy: function(name) {

            if (name) {
                name = name.toLowerCase();
                if (events[name]) {
                    events[name].destroy();
                    delete events[name];
                }
            }
            else {
                for (var i in events) {
                    events[i].destroy();
                }

                events 	= null;
                self	= null;
            }
        },

        /**
        * Get object with all functions except "destroy"
        * @method
        * @md-not-inheritable
        * @returns object
        */
        getApi: function() {
            return api;
        }
    });

    return self;
};


/**
 * This class is private - you can't create an event other than via Observable.
 * See MetaphorJs.lib.Observable reference.
 * @class MetaphorJs.lib.ObservableEvent
 */
var event = function(name, returnResult) {

    var listeners       = [],
        map             = {},
        hash            = randomHash(),
        suspended       = false,
        lid             = 0,
        self            = this,
        returnResult    = returnResult || false; // first|last|all

    extend(self, {

        /**
         * @method
         */
        destroy: function() {
            listeners   = null;
            map         = null;
            hash        = null;
            suspended   = null;
            lid         = null;
            self        = null;
            name        = null;
        },

        /**
         * @method
         * @param function fn Callback function { @required }
         * @param object scope Function's "this" object
         * @param object options See Observable's on()
         */
        on: function(fn, scope, options) {

            if (!fn) {
                return;
            }

            scope       = scope || fn;
            options     = options || {};

            var uni     = name+"_"+hash;

            if (scope[uni]) {
                return;
            }

            var id      = ++lid,
                first   = options.first || false;

            scope[uni]  = id;


            var e = {
                fn:         fn,
                scope:      scope,
                id:         id,
                called:     0, // how many times the function was triggered
                limit:      options.limit || 0, // how many times the function is allowed to trigger
                start:      options.start || 1, // from which attempt it is allowed to trigger the function
                count:      0 // how many attempts to trigger the function was made
            };

            if (first) {
                listeners.unshift(e);
            }
            else {
                listeners.push(e);
            }

            map[id] = e;

            return id;
        },

        /**
         * @method
         * @param function fn Callback function { @required }
         * @param object scope Function's "this" object
         */
        un: function(fn, scope) {

            var inx     = -1,
                uni     = name+"_"+hash,
                id;

            if (fn == parseInt(fn)) {
                id      = fn;
            }
            else {
                scope   = scope || fn;
                id      = scope[uni];
            }

            if (!id) {
                return false;
            }

            for (var i = 0, len = listeners.length; i < len; i++) {
                if (listeners[i].id == id) {
                    inx = i;
                    delete listeners[i].scope[uni];
                    break;
                }
            }

            if (inx == -1) {
                return false;
            }

            listeners.splice(inx, 1);
            delete map[id];
            return true;
        },

        /**
         * @method hasListener
         * @return bool
         */

        /**
         * @method
         * @param function fn Callback function { @required }
         * @param object scope Function's "this" object
         * @return bool
         */
        hasListener: function(fn, scope) {

            if (fn) {

                scope   = scope || fn;
                var id,
                    uni     = name+"_"+hash;

                if (fn == parseInt(fn)) {
                    id  = fn;
                }
                else {
                    id  = scope[uni];
                }

                if (!id) {
                    return false;
                }

                for (var i = 0, len = listeners.length; i < len; i++) {
                    if (listeners[i].id == id) {
                        return true;
                    }
                }

                return false;
            }
            else {
                return listeners.length > 0 ? listeners.length : false;
            }
        },

        /**
         * @method
         */
        removeAllListeners: function() {
            var uni = name+"_"+hash;
            for (var i = 0, len = listeners.length; i < len; i++) {
                delete listeners[i].scope[uni];
            }
            listeners   = [];
            map         = {};
        },

        /**
         * @method
         */
        suspend: function() {
            suspended = true;
        },

        /**
         * @method
         */
        resume: function() {
            suspended = false;
        },

        /**
         * @method
         * @return mixed
         */
        trigger: function() {

            if (suspended || listeners.length == 0) {
                return;
            }

            var ret     = returnResult == "all" ? [] : null,
                q       = [],
                i, len, l,
                res;

            // create a snapshot of listeners list
            for (i = 0, len = listeners.length; i < len; i++) {
                q.push(listeners[i]);
            }

            // now if during triggering someone unsubscribes
            // we won't skip any listener due to shifted
            // index
            while (l = q.shift()) {

                // listener may already have unsubsribed
                if (!l || !map[l.id]) {
                    continue;
                }

                l.count++;

                if (l.count < l.start) {
                    continue;
                }

                res = l.fn.apply(l.scope, arguments);

                l.called++;

                if (l.called == l.limit) {
                    this.un(l.id);
                }

                if (returnResult == "all") {
                    ret.push(res);
                }

                if (returnResult == "first" && res) {
                    return res;
                }

                if (returnResult == "last" && res) {
                    ret = res;
                }

                if (returnResult == false && res === false) {
                    break;
                }
            }

            if (returnResult) {
                return ret;
            }
        }
    });
};


if (window.MetaphorJs && MetaphorJs.ns) {
    MetaphorJs.ns.register("MetaphorJs.lib.Observable", observable);
}
else {
    window.MetaphorJs   = window.MetaphorJs || {};
    MetaphorJs.lib      = MetaphorJs.lib || {};
    MetaphorJs.lib.Observable = observable;
}

})();
