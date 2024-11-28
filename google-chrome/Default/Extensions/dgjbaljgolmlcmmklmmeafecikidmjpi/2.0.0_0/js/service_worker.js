(() => {
    "use strict";
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
    }
    function t(t, r, n) {
        return (r = function(t) {
            var r = function(t, r) {
                if ("object" !== e(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(t, r);
                    if ("object" !== e(a)) return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t);
            }(t, "string");
            return "symbol" === e(r) ? r : String(r);
        }(r)) in t ? Object.defineProperty(t, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[r] = n, t;
    }
    function r() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ r = function() {
            return t;
        };
        var t = {}, n = Object.prototype, a = n.hasOwnProperty, o = Object.defineProperty || function(e, t, r) {
            e[t] = r.value;
        }, i = "function" == typeof Symbol ? Symbol : {}, u = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
        function l(e, t, r) {
            return Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t];
        }
        try {
            l({}, "");
        } catch (e) {
            l = function(e, t, r) {
                return e[t] = r;
            };
        }
        function f(e, t, r, n) {
            var a = t && t.prototype instanceof d ? t : d, i = Object.create(a.prototype), u = new _(n || []);
            return o(i, "_invoke", {
                value: L(e, r, u)
            }), i;
        }
        function p(e, t, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, r)
                };
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                };
            }
        }
        t.wrap = f;
        var h = {};
        function d() {}
        function v() {}
        function y() {}
        var g = {};
        l(g, u, (function() {
            return this;
        }));
        var m = Object.getPrototypeOf, b = m && m(m(j([])));
        b && b !== n && a.call(b, u) && (g = b);
        var w = y.prototype = d.prototype = Object.create(g);
        function x(e) {
            [ "next", "throw", "return" ].forEach((function(t) {
                l(e, t, (function(e) {
                    return this._invoke(t, e);
                }));
            }));
        }
        function k(t, r) {
            function n(o, i, u, s) {
                var c = p(t[o], t, i);
                if ("throw" !== c.type) {
                    var l = c.arg, f = l.value;
                    return f && "object" == e(f) && a.call(f, "__await") ? r.resolve(f.__await).then((function(e) {
                        n("next", e, u, s);
                    }), (function(e) {
                        n("throw", e, u, s);
                    })) : r.resolve(f).then((function(e) {
                        l.value = e, u(l);
                    }), (function(e) {
                        return n("throw", e, u, s);
                    }));
                }
                s(c.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function(e, t) {
                    function a() {
                        return new r((function(r, a) {
                            n(e, t, r, a);
                        }));
                    }
                    return i = i ? i.then(a, a) : a();
                }
            });
        }
        function L(e, t, r) {
            var n = "suspendedStart";
            return function(a, o) {
                if ("executing" === n) throw new Error("Generator is already running");
                if ("completed" === n) {
                    if ("throw" === a) throw o;
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                for (r.method = a, r.arg = o; ;) {
                    var i = r.delegate;
                    if (i) {
                        var u = S(i, r);
                        if (u) {
                            if (u === h) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                        if ("suspendedStart" === n) throw n = "completed", r.arg;
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var s = p(e, t, r);
                    if ("normal" === s.type) {
                        if (n = r.done ? "completed" : "suspendedYield", s.arg === h) continue;
                        return {
                            value: s.arg,
                            done: r.done
                        };
                    }
                    "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg);
                }
            };
        }
        function S(e, t) {
            var r = t.method, n = e.iterator[r];
            if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", 
            t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", 
            t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), h;
            var a = p(n, e.iterator, t.arg);
            if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, 
            h;
            var o = a.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
            t.arg = void 0), t.delegate = null, h) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
            t.delegate = null, h);
        }
        function E(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
            this.tryEntries.push(t);
        }
        function R(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t;
        }
        function _(e) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], e.forEach(E, this), this.reset(!0);
        }
        function j(e) {
            if (e) {
                var t = e[u];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var r = -1, n = function t() {
                        for (;++r < e.length; ) if (a.call(e, r)) return t.value = e[r], t.done = !1, t;
                        return t.value = void 0, t.done = !0, t;
                    };
                    return n.next = n;
                }
            }
            return {
                next: O
            };
        }
        function O() {
            return {
                value: void 0,
                done: !0
            };
        }
        return v.prototype = y, o(w, "constructor", {
            value: y,
            configurable: !0
        }), o(y, "constructor", {
            value: v,
            configurable: !0
        }), v.displayName = l(y, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
        }, t.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, l(e, c, "GeneratorFunction")), 
            e.prototype = Object.create(w), e;
        }, t.awrap = function(e) {
            return {
                __await: e
            };
        }, x(k.prototype), l(k.prototype, s, (function() {
            return this;
        })), t.AsyncIterator = k, t.async = function(e, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new k(f(e, r, n, a), o);
            return t.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                return e.done ? e.value : i.next();
            }));
        }, x(w), l(w, c, "Generator"), l(w, u, (function() {
            return this;
        })), l(w, "toString", (function() {
            return "[object Generator]";
        })), t.keys = function(e) {
            var t = Object(e), r = [];
            for (var n in t) r.push(n);
            return r.reverse(), function e() {
                for (;r.length; ) {
                    var n = r.pop();
                    if (n in t) return e.value = n, e.done = !1, e;
                }
                return e.done = !0, e;
            };
        }, t.values = j, _.prototype = {
            constructor: _,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(R), 
                !e) for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;
                function r(r, n) {
                    return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), 
                    !!n;
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n], i = o.completion;
                    if ("root" === o.tryLoc) return r("end");
                    if (o.tryLoc <= this.prev) {
                        var u = a.call(o, "catchLoc"), s = a.call(o, "finallyLoc");
                        if (u && s) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                        } else if (u) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var n = this.tryEntries[r];
                    if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var o = n;
                        break;
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
                h) : this.complete(i);
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                h;
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), R(r), h;
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var a = n.arg;
                            R(r);
                        }
                        return a;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
                return this.delegate = {
                    iterator: j(e),
                    resultName: t,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), h;
            }
        }, t;
    }
    function n(e, t, r, n, a, o, i) {
        try {
            var u = e[o](i), s = u.value;
        } catch (e) {
            return void r(e);
        }
        u.done ? t(s) : Promise.resolve(s).then(n, a);
    }
    function a(e) {
        return function() {
            var t = this, r = arguments;
            return new Promise((function(a, o) {
                var i = e.apply(t, r);
                function u(e) {
                    n(i, a, o, u, s, "next", e);
                }
                function s(e) {
                    n(i, a, o, u, s, "throw", e);
                }
                u(void 0);
            }));
        };
    }
    var o = self.browser instanceof Object && self.browser instanceof Element == 0 ? self.browser : self.chrome, i = o.declarativeNetRequest;
    function u() {
        return new Promise((function(e, t) {
            o.tabs.query({}, (function(t) {
                t.forEach((function(t) {
                    !0 === t.active && e(t);
                }));
            }));
        }));
    }
    function s(e) {
        return c.apply(this, arguments);
    }
    function c() {
        return (c = a(r().mark((function e(t) {
            var n, a;
            return r().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o.storage instanceof Object != 0) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (o.storage.local instanceof Object != 0) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    return e.prev = 4, e.next = 7, o.storage.local.get(t);

                  case 7:
                    if ((n = e.sent) instanceof Object != 0) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return");

                  case 10:
                    return a = void 0 === n[t] ? "darkTheme" !== t && ("modeLevel" === t ? 1 : "userRules" === t || "allowlist" === t ? [] : void 0) : n[t], 
                    e.abrupt("return", a);

                  case 14:
                    e.prev = 14, e.t0 = e.catch(4);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }), e, null, [ [ 4, 14 ] ]);
        })))).apply(this, arguments);
    }
    function l(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        return (f = a(r().mark((function e(n, a) {
            return r().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o.storage instanceof Object != 0) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (o.storage.local instanceof Object != 0) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    return e.abrupt("return", o.storage.local.set(t({}, n, a)));

                  case 5:
                  case "end":
                    return e.stop();
                }
            }), e);
        })))).apply(this, arguments);
    }
    function p(e) {
        return h.apply(this, arguments);
    }
    function h() {
        return (h = a(r().mark((function e(t) {
            return r().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o.storage instanceof Object != 0) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (o.storage.local instanceof Object != 0) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    return e.abrupt("return", o.storage.local.remove(t));

                  case 5:
                  case "end":
                    return e.stop();
                }
            }), e);
        })))).apply(this, arguments);
    }
    function d(e) {
        return v.apply(this, arguments);
    }
    function v() {
        return (v = a(r().mark((function e(t) {
            var n, a;
            return r().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o.storage instanceof Object != 0) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (o.storage.session instanceof Object != 0) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    return e.prev = 4, e.next = 7, o.storage.session.get(t);

                  case 7:
                    if ((a = e.sent) instanceof Object != 0) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return");

                  case 10:
                    return e.abrupt("return", null !== (n = a[t]) && void 0 !== n ? n : void 0);

                  case 13:
                    e.prev = 13, e.t0 = e.catch(4);

                  case 15:
                  case "end":
                    return e.stop();
                }
            }), e, null, [ [ 4, 13 ] ]);
        })))).apply(this, arguments);
    }
    function y(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        return (g = a(r().mark((function e(n, a) {
            return r().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o.storage instanceof Object != 0) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (o.storage.session instanceof Object != 0) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    return e.abrupt("return", o.storage.session.set(t({}, n, a)));

                  case 5:
                  case "end":
                    return e.stop();
                }
            }), e);
        })))).apply(this, arguments);
    }
    function m(e) {
        return b.apply(this, arguments);
    }
    function b() {
        return (b = a(r().mark((function e(t) {
            var n, a;
            return r().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o.storage instanceof Object != 0) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (o.storage.local instanceof Object != 0) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    return e.prev = 4, e.next = 7, o.storage.managed.get(t);

                  case 7:
                    if ((a = e.sent) instanceof Object != 0) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return");

                  case 10:
                    return e.abrupt("return", null !== (n = a[t]) && void 0 !== n ? n : void 0);

                  case 13:
                    e.prev = 13, e.t0 = e.catch(4);

                  case 15:
                  case "end":
                    return e.stop();
                }
            }), e, null, [ [ 4, 13 ] ]);
        })))).apply(this, arguments);
    }
    function w() {
        function e() {
            return !1;
        }
        return {
            lazyGet: function(e, t, r) {
                var n = "_" + t;
                if (n in e) return e[n];
                var a = r.apply(e);
                return e[n] = a, a;
            },
            lazyGetClear: function(e, t) {
                delete e["_" + t];
            },
            hitStats: {
                addRuleHit: e,
                addDomainView: e,
                cleanup: e
            },
            filteringLog: {
                addHttpRequestEvent: e,
                clearEventsByTabId: e,
                isOpen: e
            },
            safebrowsing: {
                checkSafebrowsingFilter: e
            },
            integration: {
                isSupported: e,
                isEnabled: e,
                isIntegrationRequest: e,
                shouldOverrideReferrer: e
            }
        };
    }
    o.i18n, o.runtime, w.userrules = {
        getAntiBannerService: function() {
            return w.antiBannerService;
        },
        userRules: [],
        getRules: function() {
            return userRules;
        },
        setRules: function(e) {
            userRules = e;
        },
        addRules: function(e) {
            for (var t = getAntiBannerService().addFilterRules(w.utils.filters.USER_FILTER_ID, e), r = 0; r < t.length; r++) userRules.push(t[r].ruleText);
            return t;
        },
        clearRules: function() {
            userRules = [], getAntiBannerService().clearFilterRules(w.utils.filters.USER_FILTER_ID);
        },
        removeRule: function(e) {
            w.utils.collections.removeAll(userRules, e), getAntiBannerService().removeFilterRule(w.utils.filters.USER_FILTER_ID, e);
        },
        unWhiteListFrame: function(e) {
            e.frameRule && (e.frameRule.filterId === w.utils.filters.WHITE_LIST_FILTER_ID ? w.whitelist.unWhiteListUrl(e.url) : removeRule(e.frameRule.ruleText));
        }
    }, w.ui = {
        getFiltersUpdateResultMessage: function(e, t) {
            var r = w.i18n.getMessage("options_popup_update_title"), n = [];
            if (e) if (0 === t.length) n.push(w.i18n.getMessage("options_popup_update_not_found")); else {
                t.sort((function(e, t) {
                    return e.displayNumber - t.displayNumber;
                }));
                for (var a = 0; a < t.length; a++) {
                    var o = t[a];
                    n.push(w.i18n.getMessage("options_popup_update_updated", [ o.name, o.version ]).replace("$1", o.name).replace("$2", o.version));
                }
            } else n.push(w.i18n.getMessage("options_popup_update_error"));
            return {
                title: r,
                text: n
            };
        },
        getFiltersEnabledResultMessage: function(e) {
            var t = w.i18n.getMessage("alert_popup_filter_enabled_title"), r = [];
            e.sort((function(e, t) {
                return e.displayNumber - t.displayNumber;
            }));
            for (var n = 0; n < e.length; n++) {
                var a = e[n];
                r.push(w.i18n.getMessage("alert_popup_filter_enabled_text", [ a.name ]).replace("$1", a.name));
            }
            return {
                title: t,
                text: r
            };
        },
        whiteListTab: function(e) {
            var t = w.frames.getFrameInfo(e);
            if (w.whitelist.whiteListUrl(t.url), w.frames.isTabAdguardDetected(e)) {
                var r = w.utils.url.getHost(e.url);
                w.integration.addRuleToApp("@@//" + r + "^$document", (function() {
                    w.tabs.sendMessage(e.tabId, {
                        type: "no-cache-reload"
                    });
                }));
            } else updateTabIconAndContextMenu(e, !0);
        },
        unWhiteListTab: function(e) {
            var t = w.frames.getFrameInfo(e);
            if (w.userrules.unWhiteListFrame(t), w.frames.isTabAdguardDetected(e)) {
                var r = w.frames.getTabAdguardUserWhiteListRule(e);
                r && w.integration.removeRuleFromApp(r.ruleText, (function() {
                    w.tabs.sendMessage(e.tabId, {
                        type: "no-cache-reload"
                    });
                }));
            } else updateTabIconAndContextMenu(e, !0);
        },
        changeApplicationFilteringDisabled: function(e) {
            w.settings.changeFilteringDisabled(e), w.tabs.getActive((function(e) {
                updateTabIconAndContextMenu(e, !0);
            }));
        },
        checkFiltersUpdates: function() {
            w.filters.checkFiltersUpdates((function(e) {
                w.listeners.notifyListeners(w.listeners.UPDATE_FILTERS_SHOW_POPUP, !0, e);
            }), (function() {
                w.listeners.notifyListeners(w.listeners.UPDATE_FILTERS_SHOW_POPUP, !1);
            }));
        },
        initAssistant: function(e) {
            var t = {
                addRuleCallbackName: "addUserRule",
                selectElement: e
            };
            u().then((function(e) {
                o.tabs.sendMessage(e.id, {
                    type: "initAssistant",
                    options: t
                });
            }));
        },
        openAssistant: function(e) {
            u().then((function(t) {
                o.scripting.executeScript({
                    target: {
                        tabId: t.id
                    },
                    files: [ "./js/adblox/assistant.js" ]
                }).then((function() {
                    w.ui.initAssistant(), e();
                }));
            }));
        }
    };
    const x = w;
    function k(e) {
        return fetch("".concat(e, ".json")).then((function(e) {
            return e.json();
        })).catch((function(e) {}));
    }
    function L(e) {
        return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    function S(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
                var n, a, o, i, u = [], s = !0, c = !1;
                try {
                    if (o = (r = r.call(e)).next, 0 === t) {
                        if (Object(r) !== r) return;
                        s = !1;
                    } else for (;!(s = (n = o.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
                } catch (e) {
                    c = !0, a = e;
                } finally {
                    try {
                        if (!s && null != r.return && (i = r.return(), Object(i) !== i)) return;
                    } finally {
                        if (c) throw a;
                    }
                }
                return u;
            }
        }(e, t) || _(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function E() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ E = function() {
            return e;
        };
        var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function(e, t, r) {
            e[t] = r.value;
        }, a = "function" == typeof Symbol ? Symbol : {}, o = a.iterator || "@@iterator", i = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";
        function s(e, t, r) {
            return Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t];
        }
        try {
            s({}, "");
        } catch (e) {
            s = function(e, t, r) {
                return e[t] = r;
            };
        }
        function c(e, t, r, a) {
            var o = t && t.prototype instanceof p ? t : p, i = Object.create(o.prototype), u = new _(a || []);
            return n(i, "_invoke", {
                value: x(e, r, u)
            }), i;
        }
        function l(e, t, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, r)
                };
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                };
            }
        }
        e.wrap = c;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        s(v, o, (function() {
            return this;
        }));
        var y = Object.getPrototypeOf, g = y && y(y(j([])));
        g && g !== t && r.call(g, o) && (v = g);
        var m = d.prototype = p.prototype = Object.create(v);
        function b(e) {
            [ "next", "throw", "return" ].forEach((function(t) {
                s(e, t, (function(e) {
                    return this._invoke(t, e);
                }));
            }));
        }
        function w(e, t) {
            function a(n, o, i, u) {
                var s = l(e[n], e, o);
                if ("throw" !== s.type) {
                    var c = s.arg, f = c.value;
                    return f && "object" == L(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                        a("next", e, i, u);
                    }), (function(e) {
                        a("throw", e, i, u);
                    })) : t.resolve(f).then((function(e) {
                        c.value = e, i(c);
                    }), (function(e) {
                        return a("throw", e, i, u);
                    }));
                }
                u(s.arg);
            }
            var o;
            n(this, "_invoke", {
                value: function(e, r) {
                    function n() {
                        return new t((function(t, n) {
                            a(e, r, t, n);
                        }));
                    }
                    return o = o ? o.then(n, n) : n();
                }
            });
        }
        function x(e, t, r) {
            var n = "suspendedStart";
            return function(a, o) {
                if ("executing" === n) throw new Error("Generator is already running");
                if ("completed" === n) {
                    if ("throw" === a) throw o;
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                for (r.method = a, r.arg = o; ;) {
                    var i = r.delegate;
                    if (i) {
                        var u = k(i, r);
                        if (u) {
                            if (u === f) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                        if ("suspendedStart" === n) throw n = "completed", r.arg;
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var s = l(e, t, r);
                    if ("normal" === s.type) {
                        if (n = r.done ? "completed" : "suspendedYield", s.arg === f) continue;
                        return {
                            value: s.arg,
                            done: r.done
                        };
                    }
                    "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg);
                }
            };
        }
        function k(e, t) {
            var r = t.method, n = e.iterator[r];
            if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", 
            t.arg = void 0, k(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", 
            t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
            var a = l(n, e.iterator, t.arg);
            if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, 
            f;
            var o = a.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
            t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
            t.delegate = null, f);
        }
        function S(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
            this.tryEntries.push(t);
        }
        function R(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t;
        }
        function _(e) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], e.forEach(S, this), this.reset(!0);
        }
        function j(e) {
            if (e) {
                var t = e[o];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1, a = function t() {
                        for (;++n < e.length; ) if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                        return t.value = void 0, t.done = !0, t;
                    };
                    return a.next = a;
                }
            }
            return {
                next: O
            };
        }
        function O() {
            return {
                value: void 0,
                done: !0
            };
        }
        return h.prototype = d, n(m, "constructor", {
            value: d,
            configurable: !0
        }), n(d, "constructor", {
            value: h,
            configurable: !0
        }), h.displayName = s(d, u, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name));
        }, e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, u, "GeneratorFunction")), 
            e.prototype = Object.create(m), e;
        }, e.awrap = function(e) {
            return {
                __await: e
            };
        }, b(w.prototype), s(w.prototype, i, (function() {
            return this;
        })), e.AsyncIterator = w, e.async = function(t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new w(c(t, r, n, a), o);
            return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                return e.done ? e.value : i.next();
            }));
        }, b(m), s(m, u, "Generator"), s(m, o, (function() {
            return this;
        })), s(m, "toString", (function() {
            return "[object Generator]";
        })), e.keys = function(e) {
            var t = Object(e), r = [];
            for (var n in t) r.push(n);
            return r.reverse(), function e() {
                for (;r.length; ) {
                    var n = r.pop();
                    if (n in t) return e.value = n, e.done = !1, e;
                }
                return e.done = !0, e;
            };
        }, e.values = j, _.prototype = {
            constructor: _,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(R), 
                !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;
                function n(r, n) {
                    return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), 
                    !!n;
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var o = this.tryEntries[a], i = o.completion;
                    if ("root" === o.tryLoc) return n("end");
                    if (o.tryLoc <= this.prev) {
                        var u = r.call(o, "catchLoc"), s = r.call(o, "finallyLoc");
                        if (u && s) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                        } else if (u) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var a = this.tryEntries[n];
                    if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                        var o = a;
                        break;
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
                f) : this.complete(i);
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                f;
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), R(r), f;
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var a = n.arg;
                            R(r);
                        }
                        return a;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
                return this.delegate = {
                    iterator: j(e),
                    resultName: t,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), f;
            }
        }, e;
    }
    function R(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
            if (Array.isArray(e) || (r = _(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0, a = function() {};
                return {
                    s: a,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        };
                    },
                    e: function(e) {
                        throw e;
                    },
                    f: a
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, i = !0, u = !1;
        return {
            s: function() {
                r = r.call(e);
            },
            n: function() {
                var e = r.next();
                return i = e.done, e;
            },
            e: function(e) {
                u = !0, o = e;
            },
            f: function() {
                try {
                    i || null == r.return || r.return();
                } finally {
                    if (u) throw o;
                }
            }
        };
    }
    function _(e, t) {
        if (e) {
            if ("string" == typeof e) return j(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? j(e, t) : void 0;
        }
    }
    function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
    }
    function O(e, t, r, n, a, o, i) {
        try {
            var u = e[o](i), s = u.value;
        } catch (e) {
            return void r(e);
        }
        u.done ? t(s) : Promise.resolve(s).then(n, a);
    }
    function A(e) {
        return function() {
            var t = this, r = arguments;
            return new Promise((function(n, a) {
                var o = e.apply(t, r);
                function i(e) {
                    O(o, n, a, i, u, "next", e);
                }
                function u(e) {
                    O(o, n, a, i, u, "throw", e);
                }
                i(void 0);
            }));
        };
    }
    var P = 1e6, I = 1e6, C = I + P, T = C, N = T + P, F = N, M = F + P, D = M, G = D + P, B = 8e6;
    function U() {
        return void 0 !== U.rulesetDetailsPromise || (U.rulesetDetailsPromise = k("/rulesets/ruleset-details").then((function(e) {
            return new Map(e.map((function(e) {
                return [ e.id, e ];
            })));
        }))), U.rulesetDetailsPromise;
    }
    function q() {
        return void 0 !== q.dynamicRuleMapPromise || (q.dynamicRuleMapPromise = i.getDynamicRules().then((function(e) {
            return new Map(e.map((function(e) {
                return [ e.id, e ];
            })));
        }))), q.dynamicRuleMapPromise;
    }
    function z(e, t) {
        return W.apply(this, arguments);
    }
    function W() {
        return (W = A(E().mark((function e(t, r) {
            var n, a, o, u, s, c, l, f;
            return E().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, i.getDynamicRules();

                  case 2:
                    n = e.sent, a = new Set(n.filter((function(e) {
                        var t;
                        return !!(null === (t = e.condition) || void 0 === t ? void 0 : t.regexFilter);
                    })).map((function(e) {
                        return e.condition.regexFilter;
                    }))), o = [], u = [], s = R(r), e.prev = 7, l = E().mark((function e() {
                        var t, r, n, s, l;
                        return E().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (r = c.value, void 0 !== (null === (t = r.condition) || void 0 === t ? void 0 : t.regexFilter)) {
                                    e.next = 4;
                                    break;
                                }
                                return o.push(!0), e.abrupt("return", "continue");

                              case 4:
                                if (n = r.condition, s = n.regexFilter, l = n.isUrlFilterCaseSensitive, !a.has(s)) {
                                    e.next = 8;
                                    break;
                                }
                                return o.push(!0), e.abrupt("return", "continue");

                              case 8:
                                o.push(i.isRegexSupported({
                                    regex: s,
                                    isCaseSensitive: l
                                }).then((function(e) {
                                    return !!e.isSupported || (u.push("\t".concat(s, "  ").concat(e.reason)), !1);
                                })));

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }), e);
                    })), s.s();

                  case 10:
                    if ((c = s.n()).done) {
                        e.next = 17;
                        break;
                    }
                    return e.delegateYield(l(), "t0", 12);

                  case 12:
                    if ("continue" !== e.t0) {
                        e.next = 15;
                        break;
                    }
                    return e.abrupt("continue", 15);

                  case 15:
                    e.next = 10;
                    break;

                  case 17:
                    e.next = 22;
                    break;

                  case 19:
                    e.prev = 19, e.t1 = e.catch(7), s.e(e.t1);

                  case 22:
                    return e.prev = 22, s.f(), e.finish(22);

                  case 25:
                    return e.next = 27, Promise.all(o);

                  case 27:
                    return f = e.sent, u.length, e.abrupt("return", r.filter((function(e, t) {
                        return f[t];
                    })));

                  case 30:
                  case "end":
                    return e.stop();
                }
            }), e, null, [ [ 7, 19, 22, 25 ] ]);
        })))).apply(this, arguments);
    }
    function Y() {
        return H.apply(this, arguments);
    }
    function H() {
        return (H = A(E().mark((function e() {
            var t, r, n, a, o, u, s, c, l, f, p, h, d, v, y, g, m, b, w, x, L, S, _, j, O, A;
            return E().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, oe();

                  case 2:
                    t = e.sent, r = [], n = R(t), e.prev = 5, n.s();

                  case 7:
                    if ((a = n.n()).done) {
                        e.next = 14;
                        break;
                    }
                    if (0 !== (o = a.value).rules.regex) {
                        e.next = 11;
                        break;
                    }
                    return e.abrupt("continue", 12);

                  case 11:
                    r.push(k("/rulesets/regex/".concat(o.id)));

                  case 12:
                    e.next = 7;
                    break;

                  case 14:
                    e.next = 19;
                    break;

                  case 16:
                    e.prev = 16, e.t0 = e.catch(5), n.e(e.t0);

                  case 19:
                    return e.prev = 19, n.f(), e.finish(19);

                  case 22:
                    return e.next = 24, Promise.all(r);

                  case 24:
                    u = e.sent, s = [], c = I, l = R(u), e.prev = 28, l.s();

                  case 30:
                    if ((f = l.n()).done) {
                        e.next = 38;
                        break;
                    }
                    if (p = f.value, !1 !== Array.isArray(p)) {
                        e.next = 34;
                        break;
                    }
                    return e.abrupt("continue", 36);

                  case 34:
                    h = R(p);
                    try {
                        for (h.s(); !(d = h.n()).done; ) (v = d.value).id = c++, s.push(v);
                    } catch (e) {
                        h.e(e);
                    } finally {
                        h.f();
                    }

                  case 36:
                    e.next = 30;
                    break;

                  case 38:
                    e.next = 43;
                    break;

                  case 40:
                    e.prev = 40, e.t1 = e.catch(28), l.e(e.t1);

                  case 43:
                    return e.prev = 43, l.f(), e.finish(43);

                  case 46:
                    return e.next = 48, z("regexes", s);

                  case 48:
                    return y = e.sent, e.next = 51, q();

                  case 51:
                    g = e.sent, m = new Map(y.map((function(e) {
                        return [ e.id, e ];
                    }))), b = [], w = [], x = R(g.values()), e.prev = 56, x.s();

                  case 58:
                    if ((L = x.n()).done) {
                        e.next = 68;
                        break;
                    }
                    if (!((S = L.value).id < I)) {
                        e.next = 62;
                        break;
                    }
                    return e.abrupt("continue", 66);

                  case 62:
                    if (!(S.id >= C)) {
                        e.next = 64;
                        break;
                    }
                    return e.abrupt("continue", 66);

                  case 64:
                    void 0 === (_ = m.get(S.id)) ? (w.push(S.id), g.delete(S.id)) : JSON.stringify(S) !== JSON.stringify(_) && (w.push(S.id), 
                    b.push(_), g.set(S.id, _));

                  case 66:
                    e.next = 58;
                    break;

                  case 68:
                    e.next = 73;
                    break;

                  case 70:
                    e.prev = 70, e.t2 = e.catch(56), x.e(e.t2);

                  case 73:
                    return e.prev = 73, x.f(), e.finish(73);

                  case 76:
                    j = R(m.values()), e.prev = 77, j.s();

                  case 79:
                    if ((O = j.n()).done) {
                        e.next = 87;
                        break;
                    }
                    if (A = O.value, !g.has(A.id)) {
                        e.next = 83;
                        break;
                    }
                    return e.abrupt("continue", 85);

                  case 83:
                    b.push(A), g.set(A.id, A);

                  case 85:
                    e.next = 79;
                    break;

                  case 87:
                    e.next = 92;
                    break;

                  case 89:
                    e.prev = 89, e.t3 = e.catch(77), j.e(e.t3);

                  case 92:
                    return e.prev = 92, j.f(), e.finish(92);

                  case 95:
                    if (0 !== b.length || 0 !== w.length) {
                        e.next = 97;
                        break;
                    }
                    return e.abrupt("return");

                  case 97:
                    return e.abrupt("return", i.updateDynamicRules({
                        addRules: b,
                        removeRuleIds: w
                    }).catch((function(e) {})));

                  case 98:
                  case "end":
                    return e.stop();
                }
            }), e, null, [ [ 5, 16, 19, 22 ], [ 28, 40, 43, 46 ], [ 56, 70, 73, 76 ], [ 77, 89, 92, 95 ] ]);
        })))).apply(this, arguments);
    }
    function $() {
        return J.apply(this, arguments);
    }
    function J() {
        return (J = A(E().mark((function e() {
            var t, r, n, a, u, s, c, l, f, p, h, d, v, y, g, m, b, w, x, L, _, j, O, A, P, I, C, F, M;
            return E().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, Promise.all([ o.permissions.contains({
                        origins: [ "<all_urls>" ]
                    }), oe(), q() ]);

                  case 2:
                    t = e.sent, r = S(t, 3), n = r[0], a = r[1], u = r[2], s = [], c = R(a), e.prev = 9, 
                    c.s();

                  case 11:
                    if ((l = c.n()).done) {
                        e.next = 18;
                        break;
                    }
                    if (0 !== (f = l.value).rules.removeparam) {
                        e.next = 15;
                        break;
                    }
                    return e.abrupt("continue", 16);

                  case 15:
                    s.push(k("/rulesets/removeparam/".concat(f.id)));

                  case 16:
                    e.next = 11;
                    break;

                  case 18:
                    e.next = 23;
                    break;

                  case 20:
                    e.prev = 20, e.t0 = e.catch(9), c.e(e.t0);

                  case 23:
                    return e.prev = 23, c.f(), e.finish(23);

                  case 26:
                    return e.next = 28, Promise.all(s);

                  case 28:
                    if (p = e.sent, h = [], !n) {
                        e.next = 51;
                        break;
                    }
                    d = T, v = R(p), e.prev = 33, v.s();

                  case 35:
                    if ((y = v.n()).done) {
                        e.next = 43;
                        break;
                    }
                    if (g = y.value, !1 !== Array.isArray(g)) {
                        e.next = 39;
                        break;
                    }
                    return e.abrupt("continue", 41);

                  case 39:
                    m = R(g);
                    try {
                        for (m.s(); !(b = m.n()).done; ) (w = b.value).id = d++, h.push(w);
                    } catch (e) {
                        m.e(e);
                    } finally {
                        m.f();
                    }

                  case 41:
                    e.next = 35;
                    break;

                  case 43:
                    e.next = 48;
                    break;

                  case 45:
                    e.prev = 45, e.t1 = e.catch(33), v.e(e.t1);

                  case 48:
                    return e.prev = 48, v.f(), e.finish(48);

                  case 51:
                    return e.next = 53, z("removeparam", h);

                  case 53:
                    x = e.sent, L = new Map(x.map((function(e) {
                        return [ e.id, e ];
                    }))), _ = [], j = [], O = R(u.values()), e.prev = 58, O.s();

                  case 60:
                    if ((A = O.n()).done) {
                        e.next = 70;
                        break;
                    }
                    if (!((P = A.value).id < T)) {
                        e.next = 64;
                        break;
                    }
                    return e.abrupt("continue", 68);

                  case 64:
                    if (!(P.id >= N)) {
                        e.next = 66;
                        break;
                    }
                    return e.abrupt("continue", 68);

                  case 66:
                    void 0 === (I = L.get(P.id)) ? (j.push(P.id), u.delete(P.id)) : JSON.stringify(P) !== JSON.stringify(I) && (j.push(P.id), 
                    _.push(I), u.set(P.id, I));

                  case 68:
                    e.next = 60;
                    break;

                  case 70:
                    e.next = 75;
                    break;

                  case 72:
                    e.prev = 72, e.t2 = e.catch(58), O.e(e.t2);

                  case 75:
                    return e.prev = 75, O.f(), e.finish(75);

                  case 78:
                    C = R(L.values()), e.prev = 79, C.s();

                  case 81:
                    if ((F = C.n()).done) {
                        e.next = 89;
                        break;
                    }
                    if (M = F.value, !u.has(M.id)) {
                        e.next = 85;
                        break;
                    }
                    return e.abrupt("continue", 87);

                  case 85:
                    _.push(M), u.set(M.id, M);

                  case 87:
                    e.next = 81;
                    break;

                  case 89:
                    e.next = 94;
                    break;

                  case 91:
                    e.prev = 91, e.t3 = e.catch(79), C.e(e.t3);

                  case 94:
                    return e.prev = 94, C.f(), e.finish(94);

                  case 97:
                    if (0 !== _.length || 0 !== j.length) {
                        e.next = 99;
                        break;
                    }
                    return e.abrupt("return");

                  case 99:
                    return e.abrupt("return", i.updateDynamicRules({
                        addRules: _,
                        removeRuleIds: j
                    }).catch((function(e) {})));

                  case 100:
                  case "end":
                    return e.stop();
                }
            }), e, null, [ [ 9, 20, 23, 26 ], [ 33, 45, 48, 51 ], [ 58, 72, 75, 78 ], [ 79, 91, 94, 97 ] ]);
        })))).apply(this, arguments);
    }
    function V() {
        return K.apply(this, arguments);
    }
    function K() {
        return (K = A(E().mark((function e() {
            var t, r, n, a, u, s, c, l, f, p, h, d, v, y, g, m, b, w, x, L, _, j, O, A, P, I, C, T, N;
            return E().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, Promise.all([ o.permissions.contains({
                        origins: [ "<all_urls>" ]
                    }), oe(), q() ]);

                  case 2:
                    t = e.sent, r = S(t, 3), n = r[0], a = r[1], u = r[2], s = [], c = R(a), e.prev = 9, 
                    c.s();

                  case 11:
                    if ((l = c.n()).done) {
                        e.next = 18;
                        break;
                    }
                    if (0 !== (f = l.value).rules.redirect) {
                        e.next = 15;
                        break;
                    }
                    return e.abrupt("continue", 16);

                  case 15:
                    s.push(k("/rulesets/redirect/".concat(f.id)));

                  case 16:
                    e.next = 11;
                    break;

                  case 18:
                    e.next = 23;
                    break;

                  case 20:
                    e.prev = 20, e.t0 = e.catch(9), c.e(e.t0);

                  case 23:
                    return e.prev = 23, c.f(), e.finish(23);

                  case 26:
                    return e.next = 28, Promise.all(s);

                  case 28:
                    if (p = e.sent, h = [], !n) {
                        e.next = 51;
                        break;
                    }
                    d = F, v = R(p), e.prev = 33, v.s();

                  case 35:
                    if ((y = v.n()).done) {
                        e.next = 43;
                        break;
                    }
                    if (g = y.value, !1 !== Array.isArray(g)) {
                        e.next = 39;
                        break;
                    }
                    return e.abrupt("continue", 41);

                  case 39:
                    m = R(g);
                    try {
                        for (m.s(); !(b = m.n()).done; ) (w = b.value).id = d++, h.push(w);
                    } catch (e) {
                        m.e(e);
                    } finally {
                        m.f();
                    }

                  case 41:
                    e.next = 35;
                    break;

                  case 43:
                    e.next = 48;
                    break;

                  case 45:
                    e.prev = 45, e.t1 = e.catch(33), v.e(e.t1);

                  case 48:
                    return e.prev = 48, v.f(), e.finish(48);

                  case 51:
                    return e.next = 53, z("redirect", h);

                  case 53:
                    x = e.sent, L = new Map(x.map((function(e) {
                        return [ e.id, e ];
                    }))), _ = [], j = [], O = R(u.values()), e.prev = 58, O.s();

                  case 60:
                    if ((A = O.n()).done) {
                        e.next = 70;
                        break;
                    }
                    if (!((P = A.value).id < F)) {
                        e.next = 64;
                        break;
                    }
                    return e.abrupt("continue", 68);

                  case 64:
                    if (!(P.id >= M)) {
                        e.next = 66;
                        break;
                    }
                    return e.abrupt("continue", 68);

                  case 66:
                    void 0 === (I = L.get(P.id)) ? (j.push(P.id), u.delete(P.id)) : JSON.stringify(P) !== JSON.stringify(I) && (j.push(P.id), 
                    _.push(I), u.set(P.id, I));

                  case 68:
                    e.next = 60;
                    break;

                  case 70:
                    e.next = 75;
                    break;

                  case 72:
                    e.prev = 72, e.t2 = e.catch(58), O.e(e.t2);

                  case 75:
                    return e.prev = 75, O.f(), e.finish(75);

                  case 78:
                    C = R(L.values()), e.prev = 79, C.s();

                  case 81:
                    if ((T = C.n()).done) {
                        e.next = 89;
                        break;
                    }
                    if (N = T.value, !u.has(N.id)) {
                        e.next = 85;
                        break;
                    }
                    return e.abrupt("continue", 87);

                  case 85:
                    _.push(N), u.set(N.id, N);

                  case 87:
                    e.next = 81;
                    break;

                  case 89:
                    e.next = 94;
                    break;

                  case 91:
                    e.prev = 91, e.t3 = e.catch(79), C.e(e.t3);

                  case 94:
                    return e.prev = 94, C.f(), e.finish(94);

                  case 97:
                    if (0 !== _.length || 0 !== j.length) {
                        e.next = 99;
                        break;
                    }
                    return e.abrupt("return");

                  case 99:
                    return e.abrupt("return", i.updateDynamicRules({
                        addRules: _,
                        removeRuleIds: j
                    }).catch((function(e) {})));

                  case 100:
                  case "end":
                    return e.stop();
                }
            }), e, null, [ [ 9, 20, 23, 26 ], [ 33, 45, 48, 51 ], [ 58, 72, 75, 78 ], [ 79, 91, 94, 97 ] ]);
        })))).apply(this, arguments);
    }
    function X() {
        return Q.apply(this, arguments);
    }
    function Q() {
        return (Q = A(E().mark((function e() {
            var t, r, n, a, u, s, c, l, f, p, h, d, v, y, g, m, b, w, x, L, _, j, O, A, P, I, C, T, N;
            return E().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, Promise.all([ o.permissions.contains({
                        origins: [ "<all_urls>" ]
                    }), oe(), q() ]);

                  case 2:
                    t = e.sent, r = S(t, 3), n = r[0], a = r[1], u = r[2], s = [], c = R(a), e.prev = 9, 
                    c.s();

                  case 11:
                    if ((l = c.n()).done) {
                        e.next = 18;
                        break;
                    }
                    if (0 !== (f = l.value).rules.modifyHeaders) {
                        e.next = 15;
                        break;
                    }
                    return e.abrupt("continue", 16);

                  case 15:
                    s.push(k("/rulesets/modify-headers/".concat(f.id)));

                  case 16:
                    e.next = 11;
                    break;

                  case 18:
                    e.next = 23;
                    break;

                  case 20:
                    e.prev = 20, e.t0 = e.catch(9), c.e(e.t0);

                  case 23:
                    return e.prev = 23, c.f(), e.finish(23);

                  case 26:
                    return e.next = 28, Promise.all(s);

                  case 28:
                    if (p = e.sent, h = [], !n) {
                        e.next = 51;
                        break;
                    }
                    d = D, v = R(p), e.prev = 33, v.s();

                  case 35:
                    if ((y = v.n()).done) {
                        e.next = 43;
                        break;
                    }
                    if (g = y.value, !1 !== Array.isArray(g)) {
                        e.next = 39;
                        break;
                    }
                    return e.abrupt("continue", 41);

                  case 39:
                    m = R(g);
                    try {
                        for (m.s(); !(b = m.n()).done; ) (w = b.value).id = d++, h.push(w);
                    } catch (e) {
                        m.e(e);
                    } finally {
                        m.f();
                    }

                  case 41:
                    e.next = 35;
                    break;

                  case 43:
                    e.next = 48;
                    break;

                  case 45:
                    e.prev = 45, e.t1 = e.catch(33), v.e(e.t1);

                  case 48:
                    return e.prev = 48, v.f(), e.finish(48);

                  case 51:
                    return e.next = 53, z("modify-headers", h);

                  case 53:
                    x = e.sent, L = new Map(x.map((function(e) {
                        return [ e.id, e ];
                    }))), _ = [], j = [], O = R(u.values()), e.prev = 58, O.s();

                  case 60:
                    if ((A = O.n()).done) {
                        e.next = 70;
                        break;
                    }
                    if (!((P = A.value).id < D)) {
                        e.next = 64;
                        break;
                    }
                    return e.abrupt("continue", 68);

                  case 64:
                    if (!(P.id >= G)) {
                        e.next = 66;
                        break;
                    }
                    return e.abrupt("continue", 68);

                  case 66:
                    void 0 === (I = L.get(P.id)) ? (j.push(P.id), u.delete(P.id)) : JSON.stringify(P) !== JSON.stringify(I) && (j.push(P.id), 
                    _.push(I), u.set(P.id, I));

                  case 68:
                    e.next = 60;
                    break;

                  case 70:
                    e.next = 75;
                    break;

                  case 72:
                    e.prev = 72, e.t2 = e.catch(58), O.e(e.t2);

                  case 75:
                    return e.prev = 75, O.f(), e.finish(75);

                  case 78:
                    C = R(L.values()), e.prev = 79, C.s();

                  case 81:
                    if ((T = C.n()).done) {
                        e.next = 89;
                        break;
                    }
                    if (N = T.value, !u.has(N.id)) {
                        e.next = 85;
                        break;
                    }
                    return e.abrupt("continue", 87);

                  case 85:
                    _.push(N), u.set(N.id, N);

                  case 87:
                    e.next = 81;
                    break;

                  case 89:
                    e.next = 94;
                    break;

                  case 91:
                    e.prev = 91, e.t3 = e.catch(79), C.e(e.t3);

                  case 94:
                    return e.prev = 94, C.f(), e.finish(94);

                  case 97:
                    if (0 !== _.length || 0 !== j.length) {
                        e.next = 99;
                        break;
                    }
                    return e.abrupt("return");

                  case 99:
                    return e.abrupt("return", i.updateDynamicRules({
                        addRules: _,
                        removeRuleIds: j
                    }).catch((function(e) {})));

                  case 100:
                  case "end":
                    return e.stop();
                }
            }), e, null, [ [ 9, 20, 23, 26 ], [ 33, 45, 48, 51 ], [ 58, 72, 75, 78 ], [ 79, 91, 94, 97 ] ]);
        })))).apply(this, arguments);
    }
    function Z() {
        return ee.apply(this, arguments);
    }
    function ee() {
        return (ee = A(E().mark((function e() {
            return E().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", Promise.all([ Y(), $(), V(), X() ]));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }), e);
        })))).apply(this, arguments);
    }
    function te() {
        return re.apply(this, arguments);
    }
    function re() {
        return (re = A(E().mark((function e() {
            var t;
            return E().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = [ "default", "deu-0", "fra-0", "rus-0", "spa-0", "spa-1", "block-lan", "dpollock-0", "annoyances-cookies", "annoyances-overlays", "annoyances-social", "annoyances-widgets", "annoyances-others", "stevenblack-hosts", "alb-0", "bgr-0", "chn-0", "cze-0", "fin-0", "grc-0", "hrv-0", "hun-0", "idn-0", "ind-0", "irn-0", "isl-0", "isr-0", "ita-0", "jpn-1", "kor-1", "ltu-0", "lva-0", "mkd-0", "nld-0", "nor-0", "pol-0", "rou-1", "svn-0", "swe-1", "tha-0", "tur-0", "vie-1" ], 
                    e.abrupt("return", t);

                  case 2:
                  case "end":
                    return e.stop();
                }
            }), e);
        })))).apply(this, arguments);
    }
    function ne(e) {
        return ae.apply(this, arguments);
    }
    function ae() {
        return (ae = A(E().mark((function e(t) {
            var r, n, a, o, u, s, c, l, f, p, h, d, v, y, g, m, b, w, x;
            return E().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = new Set(t), e.t0 = Set, e.next = 4, i.getEnabledRulesets();

                  case 4:
                    e.t1 = e.sent, n = new e.t0(e.t1), a = new Set, o = new Set, u = R(r), e.prev = 9, 
                    u.s();

                  case 11:
                    if ((s = u.n()).done) {
                        e.next = 18;
                        break;
                    }
                    if (c = s.value, !n.has(c)) {
                        e.next = 15;
                        break;
                    }
                    return e.abrupt("continue", 16);

                  case 15:
                    a.add(c);

                  case 16:
                    e.next = 11;
                    break;

                  case 18:
                    e.next = 23;
                    break;

                  case 20:
                    e.prev = 20, e.t2 = e.catch(9), u.e(e.t2);

                  case 23:
                    return e.prev = 23, u.f(), e.finish(23);

                  case 26:
                    l = R(n), e.prev = 27, l.s();

                  case 29:
                    if ((f = l.n()).done) {
                        e.next = 36;
                        break;
                    }
                    if (p = f.value, !r.has(p)) {
                        e.next = 33;
                        break;
                    }
                    return e.abrupt("continue", 34);

                  case 33:
                    o.add(p);

                  case 34:
                    e.next = 29;
                    break;

                  case 36:
                    e.next = 41;
                    break;

                  case 38:
                    e.prev = 38, e.t3 = e.catch(27), l.e(e.t3);

                  case 41:
                    return e.prev = 41, l.f(), e.finish(41);

                  case 44:
                    if (0 !== a.size || 0 !== o.size) {
                        e.next = 46;
                        break;
                    }
                    return e.abrupt("return");

                  case 46:
                    return e.next = 48, U();

                  case 48:
                    h = e.sent, d = R(a), e.prev = 50, d.s();

                  case 52:
                    if ((v = d.n()).done) {
                        e.next = 59;
                        break;
                    }
                    if (y = v.value, !h.has(y)) {
                        e.next = 56;
                        break;
                    }
                    return e.abrupt("continue", 57);

                  case 56:
                    a.delete(y);

                  case 57:
                    e.next = 52;
                    break;

                  case 59:
                    e.next = 64;
                    break;

                  case 61:
                    e.prev = 61, e.t4 = e.catch(50), d.e(e.t4);

                  case 64:
                    return e.prev = 64, d.f(), e.finish(64);

                  case 67:
                    g = R(o), e.prev = 68, g.s();

                  case 70:
                    if ((m = g.n()).done) {
                        e.next = 77;
                        break;
                    }
                    if (b = m.value, !h.has(b)) {
                        e.next = 74;
                        break;
                    }
                    return e.abrupt("continue", 75);

                  case 74:
                    o.delete(b);

                  case 75:
                    e.next = 70;
                    break;

                  case 77:
                    e.next = 82;
                    break;

                  case 79:
                    e.prev = 79, e.t5 = e.catch(68), g.e(e.t5);

                  case 82:
                    return e.prev = 82, g.f(), e.finish(82);

                  case 85:
                    return w = Array.from(a), x = Array.from(o), e.next = 89, i.updateEnabledRulesets({
                        enableRulesetIds: w,
                        disableRulesetIds: x
                    });

                  case 89:
                    return e.abrupt("return", Z());

                  case 90:
                  case "end":
                    return e.stop();
                }
            }), e, null, [ [ 9, 20, 23, 26 ], [ 27, 38, 41, 44 ], [ 50, 61, 64, 67 ], [ 68, 79, 82, 85 ] ]);
        })))).apply(this, arguments);
    }
    function oe() {
        return ie.apply(this, arguments);
    }
    function ie() {
        return (ie = A(E().mark((function e() {
            var t, r, n, a, o, u, s, c, l;
            return E().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, Promise.all([ i.getEnabledRulesets(), U() ]);

                  case 2:
                    t = e.sent, r = S(t, 2), n = r[0], a = r[1], o = [], u = R(n), e.prev = 8, u.s();

                  case 10:
                    if ((s = u.n()).done) {
                        e.next = 18;
                        break;
                    }
                    if (c = s.value, void 0 !== (l = a.get(c))) {
                        e.next = 15;
                        break;
                    }
                    return e.abrupt("continue", 16);

                  case 15:
                    o.push(l);

                  case 16:
                    e.next = 10;
                    break;

                  case 18:
                    e.next = 23;
                    break;

                  case 20:
                    e.prev = 20, e.t0 = e.catch(8), u.e(e.t0);

                  case 23:
                    return e.prev = 23, u.f(), e.finish(23);

                  case 26:
                    return e.abrupt("return", o);

                  case 27:
                  case "end":
                    return e.stop();
                }
            }), e, null, [ [ 8, 20, 23, 26 ] ]);
        })))).apply(this, arguments);
    }
    function ue(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
            if (Array.isArray(e) || (r = function(e, t) {
                if (e) {
                    if ("string" == typeof e) return se(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? se(e, t) : void 0;
                }
            }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0, a = function() {};
                return {
                    s: a,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        };
                    },
                    e: function(e) {
                        throw e;
                    },
                    f: a
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, i = !0, u = !1;
        return {
            s: function() {
                r = r.call(e);
            },
            n: function() {
                var e = r.next();
                return i = e.done, e;
            },
            e: function(e) {
                u = !0, o = e;
            },
            f: function() {
                try {
                    i || null == r.return || r.return();
                } finally {
                    if (u) throw o;
                }
            }
        };
    }
    function se(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
    }
    var ce = function(e) {
        if ("*" === e) return "";
        var t = e.indexOf(".");
        return -1 !== t ? e.slice(t + 1) : "*";
    }, le = function(e, t) {
        var r = t instanceof Set ? t : new Set(t);
        if (r.has("all-urls") || r.has("*")) return !0;
        for (var n = e; n; ) {
            var a = n.indexOf(".");
            if (-1 === a) break;
            if (n = n.slice(a + 1), r.has(n)) return !0;
        }
        return !1;
    }, fe = function(e, t) {
        var r = t instanceof Set ? t : new Set(t);
        if (r.has("all-urls") || r.has("*")) return Array.from(e);
        var n, a = [], o = ue(e);
        try {
            for (o.s(); !(n = o.n()).done; ) {
                var i = n.value;
                (r.has(i) || le(i, r)) && a.push(i);
            }
        } catch (e) {
            o.e(e);
        } finally {
            o.f();
        }
        return a;
    }, pe = function(e, t) {
        var r = t instanceof Set ? t : new Set(t);
        if (r.has("all-urls") || r.has("*")) return [];
        var n, a = [], o = ue(e);
        try {
            for (o.s(); !(n = o.n()).done; ) {
                var i = n.value;
                r.has(i) || le(i, r) || a.push(i);
            }
        } catch (e) {
            o.e(e);
        } finally {
            o.f();
        }
        return a;
    }, he = function(e) {
        var t, r = [], n = ue(e);
        try {
            for (n.s(); !(t = n.n()).done; ) {
                var a = t.value;
                if ("*" === a || "all-urls" === a) {
                    r.length = 0, r.push("<all_urls>");
                    break;
                }
                r.push("*://*.".concat(a, "/*"));
            }
        } catch (e) {
            n.e(e);
        } finally {
            n.f();
        }
        return r;
    }, de = function(e) {
        var t, r = [], n = ue(e);
        try {
            for (n.s(); !(t = n.n()).done; ) {
                var a = t.value;
                if ("<all_urls>" !== a) {
                    var o = /^\*:\/\/(?:\*\.)?([^\/]+)\/\*/.exec(a);
                    null !== o && r.push(o[1]);
                } else r.push("all-urls");
            }
        } catch (e) {
            n.e(e);
        } finally {
            n.f();
        }
        return r;
    };
    function ve(e) {
        return (ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    function ye() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ ye = function() {
            return e;
        };
        var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function(e, t, r) {
            e[t] = r.value;
        }, a = "function" == typeof Symbol ? Symbol : {}, o = a.iterator || "@@iterator", i = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";
        function s(e, t, r) {
            return Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t];
        }
        try {
            s({}, "");
        } catch (e) {
            s = function(e, t, r) {
                return e[t] = r;
            };
        }
        function c(e, t, r, a) {
            var o = t && t.prototype instanceof p ? t : p, i = Object.create(o.prototype), u = new E(a || []);
            return n(i, "_invoke", {
                value: x(e, r, u)
            }), i;
        }
        function l(e, t, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, r)
                };
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                };
            }
        }
        e.wrap = c;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        s(v, o, (function() {
            return this;
        }));
        var y = Object.getPrototypeOf, g = y && y(y(R([])));
        g && g !== t && r.call(g, o) && (v = g);
        var m = d.prototype = p.prototype = Object.create(v);
        function b(e) {
            [ "next", "throw", "return" ].forEach((function(t) {
                s(e, t, (function(e) {
                    return this._invoke(t, e);
                }));
            }));
        }
        function w(e, t) {
            function a(n, o, i, u) {
                var s = l(e[n], e, o);
                if ("throw" !== s.type) {
                    var c = s.arg, f = c.value;
                    return f && "object" == ve(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                        a("next", e, i, u);
                    }), (function(e) {
                        a("throw", e, i, u);
                    })) : t.resolve(f).then((function(e) {
                        c.value = e, i(c);
                    }), (function(e) {
                        return a("throw", e, i, u);
                    }));
                }
                u(s.arg);
            }
            var o;
            n(this, "_invoke", {
                value: function(e, r) {
                    function n() {
                        return new t((function(t, n) {
                            a(e, r, t, n);
                        }));
                    }
                    return o = o ? o.then(n, n) : n();
                }
            });
        }
        function x(e, t, r) {
            var n = "suspendedStart";
            return function(a, o) {
                if ("executing" === n) throw new Error("Generator is already running");
                if ("completed" === n) {
                    if ("throw" === a) throw o;
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                for (r.method = a, r.arg = o; ;) {
                    var i = r.delegate;
                    if (i) {
                        var u = k(i, r);
                        if (u) {
                            if (u === f) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                        if ("suspendedStart" === n) throw n = "completed", r.arg;
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var s = l(e, t, r);
                    if ("normal" === s.type) {
                        if (n = r.done ? "completed" : "suspendedYield", s.arg === f) continue;
                        return {
                            value: s.arg,
                            done: r.done
                        };
                    }
                    "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg);
                }
            };
        }
        function k(e, t) {
            var r = t.method, n = e.iterator[r];
            if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", 
            t.arg = void 0, k(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", 
            t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
            var a = l(n, e.iterator, t.arg);
            if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, 
            f;
            var o = a.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
            t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
            t.delegate = null, f);
        }
        function L(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
            this.tryEntries.push(t);
        }
        function S(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t;
        }
        function E(e) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], e.forEach(L, this), this.reset(!0);
        }
        function R(e) {
            if (e) {
                var t = e[o];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1, a = function t() {
                        for (;++n < e.length; ) if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                        return t.value = void 0, t.done = !0, t;
                    };
                    return a.next = a;
                }
            }
            return {
                next: _
            };
        }
        function _() {
            return {
                value: void 0,
                done: !0
            };
        }
        return h.prototype = d, n(m, "constructor", {
            value: d,
            configurable: !0
        }), n(d, "constructor", {
            value: h,
            configurable: !0
        }), h.displayName = s(d, u, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name));
        }, e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, u, "GeneratorFunction")), 
            e.prototype = Object.create(m), e;
        }, e.awrap = function(e) {
            return {
                __await: e
            };
        }, b(w.prototype), s(w.prototype, i, (function() {
            return this;
        })), e.AsyncIterator = w, e.async = function(t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new w(c(t, r, n, a), o);
            return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                return e.done ? e.value : i.next();
            }));
        }, b(m), s(m, u, "Generator"), s(m, o, (function() {
            return this;
        })), s(m, "toString", (function() {
            return "[object Generator]";
        })), e.keys = function(e) {
            var t = Object(e), r = [];
            for (var n in t) r.push(n);
            return r.reverse(), function e() {
                for (;r.length; ) {
                    var n = r.pop();
                    if (n in t) return e.value = n, e.done = !1, e;
                }
                return e.done = !0, e;
            };
        }, e.values = R, E.prototype = {
            constructor: E,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), 
                !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;
                function n(r, n) {
                    return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), 
                    !!n;
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var o = this.tryEntries[a], i = o.completion;
                    if ("root" === o.tryLoc) return n("end");
                    if (o.tryLoc <= this.prev) {
                        var u = r.call(o, "catchLoc"), s = r.call(o, "finallyLoc");
                        if (u && s) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                        } else if (u) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var a = this.tryEntries[n];
                    if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                        var o = a;
                        break;
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
                f) : this.complete(i);
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                f;
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), S(r), f;
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var a = n.arg;
                            S(r);
                        }
                        return a;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
                return this.delegate = {
                    iterator: R(e),
                    resultName: t,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), f;
            }
        }, e;
    }
    function ge(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
                var n, a, o, i, u = [], s = !0, c = !1;
                try {
                    if (o = (r = r.call(e)).next, 0 === t) {
                        if (Object(r) !== r) return;
                        s = !1;
                    } else for (;!(s = (n = o.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
                } catch (e) {
                    c = !0, a = e;
                } finally {
                    try {
                        if (!s && null != r.return && (i = r.return(), Object(i) !== i)) return;
                    } finally {
                        if (c) throw a;
                    }
                }
                return u;
            }
        }(e, t) || xe(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function me(e, t, r, n, a, o, i) {
        try {
            var u = e[o](i), s = u.value;
        } catch (e) {
            return void r(e);
        }
        u.done ? t(s) : Promise.resolve(s).then(n, a);
    }
    function be(e) {
        return function() {
            var t = this, r = arguments;
            return new Promise((function(n, a) {
                var o = e.apply(t, r);
                function i(e) {
                    me(o, n, a, i, u, "next", e);
                }
                function u(e) {
                    me(o, n, a, i, u, "throw", e);
                }
                i(void 0);
            }));
        };
    }
    function we(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
            if (Array.isArray(e) || (r = xe(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0, a = function() {};
                return {
                    s: a,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        };
                    },
                    e: function(e) {
                        throw e;
                    },
                    f: a
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, i = !0, u = !1;
        return {
            s: function() {
                r = r.call(e);
            },
            n: function() {
                var e = r.next();
                return i = e.done, e;
            },
            e: function(e) {
                u = !0, o = e;
            },
            f: function() {
                try {
                    i || null == r.return || r.return();
                } finally {
                    if (u) throw o;
                }
            }
        };
    }
    function xe(e, t) {
        if (e) {
            if ("string" == typeof e) return ke(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ke(e, t) : void 0;
        }
    }
    function ke(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
    }
    var _e = function(e, t) {
        var r, n = we(t);
        try {
            for (n.s(); !(r = n.n()).done; ) {
                var a = r.value;
                !1 !== a.endsWith(e) && a !== e && "." === a.at(-e.length - 1) && t.delete(a);
            }
        } catch (e) {
            n.e(e);
        } finally {
            n.f();
        }
    }, je = function(e, t) {
        for (var r = e; t.delete(r), "*" !== (r = ce(r)); ) ;
    }, Oe = function(e, t) {
        var r, n = we(t);
        try {
            for (n.s(); !(r = n.n()).done; ) {
                var a = r.value;
                if (!1 === e.has(a)) return !1;
            }
        } catch (e) {
            n.e(e);
        } finally {
            n.f();
        }
        var o, i = we(e);
        try {
            for (i.s(); !(o = i.n()).done; ) {
                var u = o.value;
                if (!1 === t.has(u)) return !1;
            }
        } catch (e) {
            i.e(e);
        } finally {
            i.f();
        }
        return !0;
    }, Ae = function(e) {
        return {
            none: Array.from(e.none),
            basic: Array.from(e.basic),
            optimal: Array.from(e.optimal),
            complete: Array.from(e.complete)
        };
    }, Pe = function(e) {
        var t, r, n;
        return {
            none: new Set(e.none),
            basic: new Set(null !== (t = e.basic) && void 0 !== t ? t : e.network),
            optimal: new Set(null !== (r = e.optimal) && void 0 !== r ? r : e.extendedSpecific),
            complete: new Set(null !== (n = e.complete) && void 0 !== n ? n : e.extendedGeneric)
        };
    };
    function Ie(e, t) {
        var r = e.none, n = e.basic, a = e.optimal, o = e.complete;
        return "all-urls" === t ? e.none.has("all-urls") ? 0 : e.basic.has("all-urls") ? 1 : e.optimal.has("all-urls") ? 2 : (e.complete.has("all-urls"), 
        3) : r.has(t) || !1 === r.has("all-urls") && le(t, r) ? 0 : n.has(t) || !1 === n.has("all-urls") && le(t, n) ? 1 : a.has(t) || !1 === a.has("all-urls") && le(t, a) ? 2 : o.has(t) || !1 === o.has("all-urls") && le(t, o) ? 3 : Ie(e, "all-urls");
    }
    function Ce(e, t, r) {
        var n = Ie(e, "all-urls");
        if ("all-urls" === t) {
            if (r === n) return r;
            switch (r) {
              case 0:
                e.none.clear(), e.none.add("all-urls");
                break;

              case 1:
                e.basic.clear(), e.basic.add("all-urls");
                break;

              case 2:
                e.optimal.clear(), e.optimal.add("all-urls");
                break;

              case 3:
                e.complete.clear(), e.complete.add("all-urls");
            }
            switch (n) {
              case 0:
                e.none.delete("all-urls");
                break;

              case 1:
                e.basic.delete("all-urls");
                break;

              case 2:
                e.optimal.delete("all-urls");
                break;

              case 3:
                e.complete.delete("all-urls");
            }
            return Ie(e, "all-urls");
        }
        var a = Ie(e, t);
        if (r === a) return r;
        var o = e.none, i = e.basic, u = e.optimal, s = e.complete;
        switch (a) {
          case 0:
            je(t, o);
            break;

          case 1:
            je(t, i);
            break;

          case 2:
            je(t, u);
            break;

          case 3:
            je(t, s);
        }
        if (r !== n) switch (r) {
          case 0:
            !1 === le(t, o) && (e.none.add(t), _e(t, o));
            break;

          case 1:
            !1 === le(t, i) && (e.basic.add(t), _e(t, i));
            break;

          case 2:
            !1 === le(t, u) && (e.optimal.add(t), _e(t, u));
            break;

          case 3:
            !1 === le(t, s) && (e.complete.add(t), _e(t, s));
        }
        return Ie(e, t);
    }
    function Te() {
        return Ne.apply(this, arguments);
    }
    function Ne() {
        return (Ne = be(ye().mark((function e() {
            var t, r, n, a, o, i, u, c;
            return ye().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!Te.cache) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", Te.cache);

                  case 2:
                    return e.next = 4, d("filteringModeDetails");

                  case 4:
                    if (!((t = e.sent) instanceof Object)) {
                        e.next = 8;
                        break;
                    }
                    return Te.cache = Pe(t), e.abrupt("return", Te.cache);

                  case 8:
                    return e.next = 10, Promise.all([ s("filteringModeDetails"), s("adminNoFiltering") ]);

                  case 10:
                    if (r = e.sent, n = ge(r, 2), a = n[0], o = n[1], void 0 === a && (a = {
                        complete: [ "all-urls" ]
                    }), a = Pe(a), Array.isArray(o)) {
                        i = we(o);
                        try {
                            for (i.s(); !(u = i.n()).done; ) c = u.value, Ce(a, c, 0);
                        } catch (e) {
                            i.e(e);
                        } finally {
                            i.f();
                        }
                    }
                    return De(a), y("filteringModeDetails", Ae(a)), Te.cache = a, m("noFiltering").then((function(e) {
                        e ? l("adminNoFiltering", e) : p("adminNoFiltering");
                    })), e.abrupt("return", a);

                  case 22:
                  case "end":
                    return e.stop();
                }
            }), e);
        })))).apply(this, arguments);
    }
    function Fe(e) {
        return Me.apply(this, arguments);
    }
    function Me() {
        return (Me = be(ye().mark((function e(t) {
            var r;
            return ye().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, De(t);

                  case 2:
                    l("filteringModeDetails", r = Ae(t)), y("filteringModeDetails", r), Te.cache = Pe(r);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }), e);
        })))).apply(this, arguments);
    }
    function De(e) {
        return Ge.apply(this, arguments);
    }
    function Ge() {
        return (Ge = be(ye().mark((function e(t) {
            var r, n, a, o, u, s, c;
            return ye().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, q();

                  case 2:
                    if (r = e.sent, n = r.get(B), a = new Set(n && n.condition.requestDomains), !Oe(a, t.none)) {
                        e.next = 7;
                        break;
                    }
                    return e.abrupt("return");

                  case 7:
                    return o = [], void 0 !== n && (o.push(B), r.delete(B)), u = [], 0 !== t.none.size && (s = {
                        id: B,
                        action: {
                            type: "allowAllRequests"
                        },
                        condition: {
                            resourceTypes: [ "main_frame" ]
                        },
                        priority: 100
                    }, 1 === t.none.size && !1 !== t.none.has("all-urls") || (s.condition.requestDomains = Array.from(t.none)), 
                    u.push(s), r.set(B, s)), c = {}, u.length && (c.addRules = u), o.length && (c.removeRuleIds = o), 
                    e.next = 16, i.updateDynamicRules(c);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }), e);
        })))).apply(this, arguments);
    }
    function Be() {
        return Ue.apply(this, arguments);
    }
    function Ue() {
        return (Ue = be(ye().mark((function e() {
            var t;
            return ye().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, Te();

                  case 2:
                    return t = e.sent, e.abrupt("return", {
                        none: new Set(t.none),
                        basic: new Set(t.basic),
                        optimal: new Set(t.optimal),
                        complete: new Set(t.complete)
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }), e);
        })))).apply(this, arguments);
    }
    function qe(e) {
        return ze.apply(this, arguments);
    }
    function ze() {
        return (ze = be(ye().mark((function e(t) {
            var r;
            return ye().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, Be();

                  case 2:
                    return r = e.sent, e.abrupt("return", Ie(r, t));

                  case 4:
                  case "end":
                    return e.stop();
                }
            }), e);
        })))).apply(this, arguments);
    }
    function We(e, t) {
        return Ye.apply(this, arguments);
    }
    function Ye() {
        return (Ye = be(ye().mark((function e(t, r) {
            var n, a;
            return ye().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, Be();

                  case 2:
                    return n = e.sent, a = Ce(n, t, r), e.next = 6, Fe(n);

                  case 6:
                    return e.abrupt("return", a);

                  case 7:
                  case "end":
                    return e.stop();
                }
            }), e);
        })))).apply(this, arguments);
    }
    function He() {
        return qe("all-urls");
    }
    function $e(e) {
        return We("all-urls", e);
    }
    function Je() {
        return Ve.apply(this, arguments);
    }
    function Ve() {
        return (Ve = be(ye().mark((function e() {
            var t, r, n, a, i, u, s, c;
            return ye().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, Promise.all([ o.permissions.getAll(), He() ]);

                  case 2:
                    if (t = e.sent, r = ge(t, 2), n = r[0], a = r[1], i = new Set(de(n.origins || [])), 
                    u = !1, !(a > 1 && !1 === i.has("all-urls"))) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, $e(1);

                  case 11:
                    u = !0;

                  case 12:
                    return e.next = 14, He();

                  case 14:
                    if (!(e.sent > 1)) {
                        e.next = 17;
                        break;
                    }
                    return e.abrupt("return", !1);

                  case 17:
                    return e.next = 19, Be();

                  case 19:
                    return e.sent, c = Pe({
                        basic: [],
                        complete: [ "all-urls" ],
                        none: [],
                        optimal: []
                    }), s = c, e.next = 24, Fe(s);

                  case 24:
                    return e.abrupt("return", u);

                  case 25:
                  case "end":
                    return e.stop();
                }
            }), e);
        })))).apply(this, arguments);
    }
    function Ke(e) {
        return (Ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    function Xe() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Xe = function() {
            return e;
        };
        var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function(e, t, r) {
            e[t] = r.value;
        }, a = "function" == typeof Symbol ? Symbol : {}, o = a.iterator || "@@iterator", i = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";
        function s(e, t, r) {
            return Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t];
        }
        try {
            s({}, "");
        } catch (e) {
            s = function(e, t, r) {
                return e[t] = r;
            };
        }
        function c(e, t, r, a) {
            var o = t && t.prototype instanceof p ? t : p, i = Object.create(o.prototype), u = new E(a || []);
            return n(i, "_invoke", {
                value: x(e, r, u)
            }), i;
        }
        function l(e, t, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, r)
                };
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                };
            }
        }
        e.wrap = c;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        s(v, o, (function() {
            return this;
        }));
        var y = Object.getPrototypeOf, g = y && y(y(R([])));
        g && g !== t && r.call(g, o) && (v = g);
        var m = d.prototype = p.prototype = Object.create(v);
        function b(e) {
            [ "next", "throw", "return" ].forEach((function(t) {
                s(e, t, (function(e) {
                    return this._invoke(t, e);
                }));
            }));
        }
        function w(e, t) {
            function a(n, o, i, u) {
                var s = l(e[n], e, o);
                if ("throw" !== s.type) {
                    var c = s.arg, f = c.value;
                    return f && "object" == Ke(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                        a("next", e, i, u);
                    }), (function(e) {
                        a("throw", e, i, u);
                    })) : t.resolve(f).then((function(e) {
                        c.value = e, i(c);
                    }), (function(e) {
                        return a("throw", e, i, u);
                    }));
                }
                u(s.arg);
            }
            var o;
            n(this, "_invoke", {
                value: function(e, r) {
                    function n() {
                        return new t((function(t, n) {
                            a(e, r, t, n);
                        }));
                    }
                    return o = o ? o.then(n, n) : n();
                }
            });
        }
        function x(e, t, r) {
            var n = "suspendedStart";
            return function(a, o) {
                if ("executing" === n) throw new Error("Generator is already running");
                if ("completed" === n) {
                    if ("throw" === a) throw o;
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                for (r.method = a, r.arg = o; ;) {
                    var i = r.delegate;
                    if (i) {
                        var u = k(i, r);
                        if (u) {
                            if (u === f) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                        if ("suspendedStart" === n) throw n = "completed", r.arg;
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var s = l(e, t, r);
                    if ("normal" === s.type) {
                        if (n = r.done ? "completed" : "suspendedYield", s.arg === f) continue;
                        return {
                            value: s.arg,
                            done: r.done
                        };
                    }
                    "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg);
                }
            };
        }
        function k(e, t) {
            var r = t.method, n = e.iterator[r];
            if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", 
            t.arg = void 0, k(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", 
            t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
            var a = l(n, e.iterator, t.arg);
            if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, 
            f;
            var o = a.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
            t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
            t.delegate = null, f);
        }
        function L(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
            this.tryEntries.push(t);
        }
        function S(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t;
        }
        function E(e) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], e.forEach(L, this), this.reset(!0);
        }
        function R(e) {
            if (e) {
                var t = e[o];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1, a = function t() {
                        for (;++n < e.length; ) if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                        return t.value = void 0, t.done = !0, t;
                    };
                    return a.next = a;
                }
            }
            return {
                next: _
            };
        }
        function _() {
            return {
                value: void 0,
                done: !0
            };
        }
        return h.prototype = d, n(m, "constructor", {
            value: d,
            configurable: !0
        }), n(d, "constructor", {
            value: h,
            configurable: !0
        }), h.displayName = s(d, u, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name));
        }, e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, u, "GeneratorFunction")), 
            e.prototype = Object.create(m), e;
        }, e.awrap = function(e) {
            return {
                __await: e
            };
        }, b(w.prototype), s(w.prototype, i, (function() {
            return this;
        })), e.AsyncIterator = w, e.async = function(t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new w(c(t, r, n, a), o);
            return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                return e.done ? e.value : i.next();
            }));
        }, b(m), s(m, u, "Generator"), s(m, o, (function() {
            return this;
        })), s(m, "toString", (function() {
            return "[object Generator]";
        })), e.keys = function(e) {
            var t = Object(e), r = [];
            for (var n in t) r.push(n);
            return r.reverse(), function e() {
                for (;r.length; ) {
                    var n = r.pop();
                    if (n in t) return e.value = n, e.done = !1, e;
                }
                return e.done = !0, e;
            };
        }, e.values = R, E.prototype = {
            constructor: E,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), 
                !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;
                function n(r, n) {
                    return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), 
                    !!n;
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var o = this.tryEntries[a], i = o.completion;
                    if ("root" === o.tryLoc) return n("end");
                    if (o.tryLoc <= this.prev) {
                        var u = r.call(o, "catchLoc"), s = r.call(o, "finallyLoc");
                        if (u && s) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                        } else if (u) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var a = this.tryEntries[n];
                    if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                        var o = a;
                        break;
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
                f) : this.complete(i);
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                f;
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), S(r), f;
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var a = n.arg;
                            S(r);
                        }
                        return a;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
                return this.delegate = {
                    iterator: R(e),
                    resultName: t,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), f;
            }
        }, e;
    }
    function Qe(e, t, r, n, a, o, i) {
        try {
            var u = e[o](i), s = u.value;
        } catch (e) {
            return void r(e);
        }
        u.done ? t(s) : Promise.resolve(s).then(n, a);
    }
    function Ze(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
                var n, a, o, i, u = [], s = !0, c = !1;
                try {
                    if (o = (r = r.call(e)).next, 0 === t) {
                        if (Object(r) !== r) return;
                        s = !1;
                    } else for (;!(s = (n = o.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
                } catch (e) {
                    c = !0, a = e;
                } finally {
                    try {
                        if (!s && null != r.return && (i = r.return(), Object(i) !== i)) return;
                    } finally {
                        if (c) throw a;
                    }
                }
                return u;
            }
        }(e, t) || rt(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function et(e) {
        return function(e) {
            if (Array.isArray(e)) return nt(e);
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || rt(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function tt(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
            if (Array.isArray(e) || (r = rt(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0, a = function() {};
                return {
                    s: a,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        };
                    },
                    e: function(e) {
                        throw e;
                    },
                    f: a
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, i = !0, u = !1;
        return {
            s: function() {
                r = r.call(e);
            },
            n: function() {
                var e = r.next();
                return i = e.done, e;
            },
            e: function(e) {
                u = !0, o = e;
            },
            f: function() {
                try {
                    i || null == r.return || r.return();
                } finally {
                    if (u) throw o;
                }
            }
        };
    }
    function rt(e, t) {
        if (e) {
            if ("string" == typeof e) return nt(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? nt(e, t) : void 0;
        }
    }
    function nt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
    }
    var at = o.runtime.getURL("").startsWith("moz-extension://"), ot = new Map;
    function it() {
        var e = ot.get("generic");
        return void 0 !== e || (e = k("/rulesets/generic-details").then((function(e) {
            return new Map(e);
        })), ot.set("generic", e)), e;
    }
    var ut = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], n = e.length;
        if (n !== t.length) return !1;
        r && (e.sort(), t.sort());
        for (var a = 0; a < n; a++) if (e[a] !== t[a]) return !1;
        return !0;
    }, st = function(e) {
        var t, r = tt(e);
        try {
            for (r.s(); !(t = r.n()).done; ) {
                for (var n = t.value, a = n.css, o = void 0 === a ? [] : a, i = n.js, u = void 0 === i ? [] : i, s = 0; s < o.length; s++) {
                    var c = o[s];
                    c.startsWith("/") || (o[s] = "/".concat(c));
                }
                for (var l = 0; l < u.length; l++) {
                    var f = u[l];
                    f.startsWith("/") || (u[l] = "/".concat(f));
                }
            }
        } catch (e) {
            r.e(e);
        } finally {
            r.f();
        }
        return e;
    };
    function ct(e, t) {
        var r, n = e.before, a = e.filteringModeDetails, o = [], i = [], u = tt(e.rulesetsDetails);
        try {
            for (u.s(); !(r = u.n()).done; ) {
                var s, c = r.value, l = t.get(c.id);
                void 0 !== l && o.push.apply(o, et(l)), 0 !== ((null === (s = c.css) || void 0 === s ? void 0 : s.generichigh) || 0) && i.push("/rulesets/scripting/generichigh/".concat(c.id, ".css"));
            }
        } catch (e) {
            u.e(e);
        } finally {
            u.f();
        }
        if (0 !== i.length) {
            var f = a.none, p = a.basic, h = a.optimal, d = a.complete, v = [], y = [];
            if (d.has("all-urls") ? (y.push.apply(y, et(he(f))), y.push.apply(y, et(he(p))), 
            y.push.apply(y, et(he(h))), y.push.apply(y, et(he(o))), v.push("<all_urls>")) : v.push.apply(v, et(he(pe(Array.from(d), o)))), 
            0 !== v.length) {
                var g = n.get("css-generichigh");
                n.delete("css-generichigh");
                var m = {
                    id: "css-generichigh",
                    css: i,
                    matches: v,
                    excludeMatches: y,
                    runAt: "document_end"
                };
                void 0 !== g ? !1 !== ut(g.css, i, !1) && !1 !== ut(g.matches, v) && !1 !== ut(g.excludeMatches, y) || (e.toRemove.push("css-generichigh"), 
                e.toAdd.push(m)) : e.toAdd.push(m);
            }
        }
    }
    function lt(e, t) {
        var r, n = e.before, a = e.filteringModeDetails, o = [], i = [], u = tt(e.rulesetsDetails);
        try {
            for (u.s(); !(r = u.n()).done; ) {
                var s, c = r.value, l = t.get(c.id);
                void 0 !== l && o.push.apply(o, et(l)), 0 !== ((null === (s = c.css) || void 0 === s ? void 0 : s.generic) || 0) && i.push("/rulesets/scripting/generic/".concat(c.id, ".js"));
            }
        } catch (e) {
            u.e(e);
        } finally {
            u.f();
        }
        if (0 !== i.length) {
            i.push("/js/scripting/css-generic.js");
            var f = a.none, p = a.basic, h = a.optimal, d = a.complete, v = [], y = [];
            if (d.has("all-urls") ? (y.push.apply(y, et(he(f))), y.push.apply(y, et(he(p))), 
            y.push.apply(y, et(he(h))), y.push.apply(y, et(he(o))), v.push("<all_urls>")) : v.push.apply(v, et(he(pe(Array.from(d), o)))), 
            0 !== v.length) {
                var g = n.get("css-generic");
                n.delete("css-generic");
                var m = {
                    id: "css-generic",
                    js: i,
                    matches: v,
                    excludeMatches: y,
                    runAt: "document_idle"
                };
                void 0 !== g ? !1 !== ut(g.js, i, !1) && !1 !== ut(g.matches, v) && !1 !== ut(g.excludeMatches, y) || (e.toRemove.push("css-generic"), 
                e.toAdd.push(m)) : e.toAdd.push(m);
            }
        }
    }
    function ft(e) {
        var t, r = e.before, n = e.filteringModeDetails, a = [], o = tt(e.rulesetsDetails);
        try {
            for (o.s(); !(t = o.n()).done; ) {
                var i, u = t.value;
                0 !== ((null === (i = u.css) || void 0 === i ? void 0 : i.procedural) || 0) && a.push("/rulesets/scripting/procedural/".concat(u.id, ".js"));
            }
        } catch (e) {
            o.e(e);
        } finally {
            o.f();
        }
        if (0 !== a.length) {
            var s = n.none, c = n.basic, l = n.optimal, f = n.complete, p = [].concat(et(he(l)), et(he(f)));
            if (0 !== p.length) {
                a.push("/js/scripting/css-procedural.js");
                var h = [];
                !1 === s.has("all-urls") && h.push.apply(h, et(he(s))), !1 === c.has("all-urls") && h.push.apply(h, et(he(c)));
                var d = r.get("css-procedural");
                r.delete("css-procedural");
                var v = {
                    id: "css-procedural",
                    js: a,
                    allFrames: !0,
                    matches: p,
                    excludeMatches: h,
                    runAt: "document_end"
                };
                void 0 !== d ? !1 !== ut(d.js, a, !1) && !1 !== ut(d.matches, p) && !1 !== ut(d.excludeMatches, h) || (e.toRemove.push("css-procedural"), 
                e.toAdd.push(v)) : e.toAdd.push(v);
            }
        }
    }
    function pt(e) {
        var t, r = e.before, n = e.filteringModeDetails, a = [], o = tt(e.rulesetsDetails);
        try {
            for (o.s(); !(t = o.n()).done; ) {
                var i, u = t.value;
                0 !== ((null === (i = u.css) || void 0 === i ? void 0 : i.declarative) || 0) && a.push("/rulesets/scripting/declarative/".concat(u.id, ".js"));
            }
        } catch (e) {
            o.e(e);
        } finally {
            o.f();
        }
        if (0 !== a.length) {
            var s = n.none, c = n.basic, l = n.optimal, f = n.complete, p = [].concat(et(he(l)), et(he(f)));
            if (0 !== p.length) {
                a.push("/js/scripting/css-declarative.js");
                var h = [];
                !1 === s.has("all-urls") && h.push.apply(h, et(he(s))), !1 === c.has("all-urls") && h.push.apply(h, et(he(c)));
                var d = r.get("css-declarative");
                r.delete("css-declarative");
                var v = {
                    id: "css-declarative",
                    js: a,
                    allFrames: !0,
                    matches: p,
                    excludeMatches: h,
                    runAt: "document_start"
                };
                void 0 !== d ? !1 !== ut(d.js, a, !1) && !1 !== ut(d.matches, p) && !1 !== ut(d.excludeMatches, h) || (e.toRemove.push("css-declarative"), 
                e.toAdd.push(v)) : e.toAdd.push(v);
            }
        }
    }
    function ht(e) {
        var t, r = e.before, n = e.filteringModeDetails, a = [], o = tt(e.rulesetsDetails);
        try {
            for (o.s(); !(t = o.n()).done; ) {
                var i, u = t.value;
                0 !== ((null === (i = u.css) || void 0 === i ? void 0 : i.specific) || 0) && a.push("/rulesets/scripting/specific/".concat(u.id, ".js"));
            }
        } catch (e) {
            o.e(e);
        } finally {
            o.f();
        }
        if (0 !== a.length) {
            var s = n.none, c = n.basic, l = n.optimal, f = n.complete, p = [].concat(et(he(l)), et(he(f)));
            if (0 !== p.length) {
                a.push("/js/scripting/css-specific.js");
                var h = [];
                !1 === s.has("all-urls") && h.push.apply(h, et(he(s))), !1 === c.has("all-urls") && h.push.apply(h, et(he(c)));
                var d = r.get("css-specific");
                r.delete("css-specific");
                var v = {
                    id: "css-specific",
                    js: a,
                    allFrames: !0,
                    matches: p,
                    excludeMatches: h,
                    runAt: "document_start"
                };
                void 0 !== d ? !1 !== ut(d.js, a, !1) && !1 !== ut(d.matches, p) && !1 !== ut(d.excludeMatches, h) || (e.toRemove.push("css-specific"), 
                e.toAdd.push(v)) : e.toAdd.push(v);
            }
        }
    }
    function dt(e, t) {
        var r, n = e.before, a = e.filteringModeDetails, o = e.rulesetsDetails, i = a.optimal.has("all-urls") || a.complete.has("all-urls"), u = [].concat(et(he(a.none)), et(he(a.basic))), s = [].concat(et(a.optimal), et(a.complete)), c = tt(o.map((function(e) {
            return e.id;
        })));
        try {
            for (c.s(); !(r = c.n()).done; ) {
                var l = r.value, f = t.get(l);
                if (void 0 !== f) {
                    var p, h = tt(f);
                    try {
                        for (h.s(); !(p = h.n()).done; ) {
                            var d = Ze(p.value, 2), v = d[0], y = d[1], g = "".concat(l, ".").concat(v), m = n.get(g), b = [], w = [], x = [];
                            if (i ? (w.push.apply(w, et(u)), x = y.length > 100 ? [ "*" ] : y) : 0 !== s.length && (x = y.includes("*") ? s : fe(s, y)), 
                            0 !== x.length) {
                                b.push.apply(b, et(he(x))), n.delete(g);
                                var k = {
                                    id: g,
                                    js: [ "/rulesets/scripting/scriptlet/".concat(g, ".js") ],
                                    allFrames: !0,
                                    matches: b,
                                    excludeMatches: w,
                                    runAt: "document_start"
                                };
                                !1 === at && (k.world = "MAIN"), void 0 !== m ? !1 !== ut(m.matches, b) && !1 !== ut(m.excludeMatches, w) || (e.toRemove.push(g), 
                                e.toAdd.push(k)) : e.toAdd.push(k);
                            }
                        }
                    } catch (e) {
                        h.e(e);
                    } finally {
                        h.f();
                    }
                }
            }
        } catch (e) {
            c.e(e);
        } finally {
            c.f();
        }
    }
    function vt(e) {
        return yt.apply(this, arguments);
    }
    function yt() {
        var e;
        return e = Xe().mark((function e(t) {
            var r, n, a, i, u, s, c, l, f, p, h;
            return Xe().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (void 0 !== o.scripting) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return", !1);

                  case 3:
                    return e.next = 5, Promise.all([ Be(), oe(), (t = void 0, t = ot.get("scriptlet"), 
                    void 0 !== t || (t = k("/rulesets/scriptlet-details").then((function(e) {
                        return new Map(e);
                    })), ot.set("scriptlet", t)), t), it(), o.scripting.getRegisteredContentScripts() ]);

                  case 5:
                    if (r = e.sent, n = Ze(r, 5), a = n[0], i = n[1], u = n[2], s = n[3], c = n[4], 
                    l = new Map(st(c).map((function(e) {
                        return [ e.id, e ];
                    }))), pt(h = {
                        filteringModeDetails: a,
                        rulesetsDetails: i,
                        before: l,
                        toAdd: f = [],
                        toRemove: p = []
                    }), ft(h), dt(h, u), ht(h), lt(h, s), ct(h, s), p.push.apply(p, et(Array.from(l.keys()))), 
                    0 === p.length) {
                        e.next = 25;
                        break;
                    }
                    return e.next = 25, o.scripting.unregisterContentScripts({
                        ids: p
                    }).catch((function(e) {}));

                  case 25:
                    if (0 === f.length) {
                        e.next = 28;
                        break;
                    }
                    return e.next = 28, o.scripting.registerContentScripts(f).catch((function(e) {}));

                  case 28:
                    return e.abrupt("return", !0);

                  case 29:
                  case "end":
                    return e.stop();
                }
                var t;
            }), e);
        })), (yt = function() {
            var t = this, r = arguments;
            return new Promise((function(n, a) {
                var o = e.apply(t, r);
                function i(e) {
                    Qe(o, n, a, i, u, "next", e);
                }
                function u(e) {
                    Qe(o, n, a, i, u, "throw", e);
                }
                i(void 0);
            }));
        }).apply(this, arguments);
    }
    function gt(e) {
        return (gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    function mt() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ mt = function() {
            return e;
        };
        var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function(e, t, r) {
            e[t] = r.value;
        }, a = "function" == typeof Symbol ? Symbol : {}, o = a.iterator || "@@iterator", i = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";
        function s(e, t, r) {
            return Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t];
        }
        try {
            s({}, "");
        } catch (e) {
            s = function(e, t, r) {
                return e[t] = r;
            };
        }
        function c(e, t, r, a) {
            var o = t && t.prototype instanceof p ? t : p, i = Object.create(o.prototype), u = new E(a || []);
            return n(i, "_invoke", {
                value: x(e, r, u)
            }), i;
        }
        function l(e, t, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, r)
                };
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                };
            }
        }
        e.wrap = c;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        s(v, o, (function() {
            return this;
        }));
        var y = Object.getPrototypeOf, g = y && y(y(R([])));
        g && g !== t && r.call(g, o) && (v = g);
        var m = d.prototype = p.prototype = Object.create(v);
        function b(e) {
            [ "next", "throw", "return" ].forEach((function(t) {
                s(e, t, (function(e) {
                    return this._invoke(t, e);
                }));
            }));
        }
        function w(e, t) {
            function a(n, o, i, u) {
                var s = l(e[n], e, o);
                if ("throw" !== s.type) {
                    var c = s.arg, f = c.value;
                    return f && "object" == gt(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                        a("next", e, i, u);
                    }), (function(e) {
                        a("throw", e, i, u);
                    })) : t.resolve(f).then((function(e) {
                        c.value = e, i(c);
                    }), (function(e) {
                        return a("throw", e, i, u);
                    }));
                }
                u(s.arg);
            }
            var o;
            n(this, "_invoke", {
                value: function(e, r) {
                    function n() {
                        return new t((function(t, n) {
                            a(e, r, t, n);
                        }));
                    }
                    return o = o ? o.then(n, n) : n();
                }
            });
        }
        function x(e, t, r) {
            var n = "suspendedStart";
            return function(a, o) {
                if ("executing" === n) throw new Error("Generator is already running");
                if ("completed" === n) {
                    if ("throw" === a) throw o;
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                for (r.method = a, r.arg = o; ;) {
                    var i = r.delegate;
                    if (i) {
                        var u = k(i, r);
                        if (u) {
                            if (u === f) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                        if ("suspendedStart" === n) throw n = "completed", r.arg;
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var s = l(e, t, r);
                    if ("normal" === s.type) {
                        if (n = r.done ? "completed" : "suspendedYield", s.arg === f) continue;
                        return {
                            value: s.arg,
                            done: r.done
                        };
                    }
                    "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg);
                }
            };
        }
        function k(e, t) {
            var r = t.method, n = e.iterator[r];
            if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", 
            t.arg = void 0, k(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", 
            t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
            var a = l(n, e.iterator, t.arg);
            if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, 
            f;
            var o = a.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
            t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
            t.delegate = null, f);
        }
        function L(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
            this.tryEntries.push(t);
        }
        function S(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t;
        }
        function E(e) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], e.forEach(L, this), this.reset(!0);
        }
        function R(e) {
            if (e) {
                var t = e[o];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1, a = function t() {
                        for (;++n < e.length; ) if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                        return t.value = void 0, t.done = !0, t;
                    };
                    return a.next = a;
                }
            }
            return {
                next: _
            };
        }
        function _() {
            return {
                value: void 0,
                done: !0
            };
        }
        return h.prototype = d, n(m, "constructor", {
            value: d,
            configurable: !0
        }), n(d, "constructor", {
            value: h,
            configurable: !0
        }), h.displayName = s(d, u, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name));
        }, e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, u, "GeneratorFunction")), 
            e.prototype = Object.create(m), e;
        }, e.awrap = function(e) {
            return {
                __await: e
            };
        }, b(w.prototype), s(w.prototype, i, (function() {
            return this;
        })), e.AsyncIterator = w, e.async = function(t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new w(c(t, r, n, a), o);
            return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                return e.done ? e.value : i.next();
            }));
        }, b(m), s(m, u, "Generator"), s(m, o, (function() {
            return this;
        })), s(m, "toString", (function() {
            return "[object Generator]";
        })), e.keys = function(e) {
            var t = Object(e), r = [];
            for (var n in t) r.push(n);
            return r.reverse(), function e() {
                for (;r.length; ) {
                    var n = r.pop();
                    if (n in t) return e.value = n, e.done = !1, e;
                }
                return e.done = !0, e;
            };
        }, e.values = R, E.prototype = {
            constructor: E,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), 
                !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;
                function n(r, n) {
                    return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), 
                    !!n;
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var o = this.tryEntries[a], i = o.completion;
                    if ("root" === o.tryLoc) return n("end");
                    if (o.tryLoc <= this.prev) {
                        var u = r.call(o, "catchLoc"), s = r.call(o, "finallyLoc");
                        if (u && s) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                        } else if (u) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var a = this.tryEntries[n];
                    if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                        var o = a;
                        break;
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
                f) : this.complete(i);
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                f;
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), S(r), f;
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var a = n.arg;
                            S(r);
                        }
                        return a;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
                return this.delegate = {
                    iterator: R(e),
                    resultName: t,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), f;
            }
        }, e;
    }
    function bt(e, t, r, n, a, o, i) {
        try {
            var u = e[o](i), s = u.value;
        } catch (e) {
            return void r(e);
        }
        u.done ? t(s) : Promise.resolve(s).then(n, a);
    }
    function wt(e) {
        return function() {
            var t = this, r = arguments;
            return new Promise((function(n, a) {
                var o = e.apply(t, r);
                function i(e) {
                    bt(o, n, a, i, u, "next", e);
                }
                function u(e) {
                    bt(o, n, a, i, u, "throw", e);
                }
                i(void 0);
            }));
        };
    }
    function kt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
    }
    function Lt(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, (void 0, o = function(e, t) {
                if ("object" !== gt(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t);
                    if ("object" !== gt(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
            }(n.key, "string"), "symbol" === gt(o) ? o : String(o)), n);
        }
        var o;
    }
    new (function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), this.rulesetConfig = {
                version: "",
                enabledRulesets: [ "default", "deu-0", "fra-0", "rus-0", "spa-0", "spa-1", "block-lan", "dpollock-0", "annoyances-cookies", "annoyances-overlays", "annoyances-social", "annoyances-widgets", "annoyances-others", "stevenblack-hosts", "alb-0", "bgr-0", "chn-0", "cze-0", "fin-0", "grc-0", "hrv-0", "hun-0", "idn-0", "ind-0", "irn-0", "isl-0", "isr-0", "ita-0", "jpn-1", "kor-1", "ltu-0", "lva-0", "mkd-0", "nld-0", "nor-0", "pol-0", "rou-1", "svn-0", "swe-1", "tha-0", "tur-0", "vie-1" ],
                autoReload: 1
            }, this.blockedCount = [], this.firstRun = !1, this.wakeupRun = !1, this.initListener();
        }
        var t, r, a, u, c, f, p;
        return t = e, (r = [ {
            key: "getBlockedCount",
            value: function() {
                var e = this;
                s("blockedRequestsCount").then((function(t) {
                    e.blockedCount = t;
                }));
            }
        }, {
            key: "initListener",
            value: function() {
                var e = null, t = this;
                o.runtime.onInstalled.addListener((function(e) {
                    "install" === e.reason ? (o.storage.local.set({
                        darkTheme: !1
                    }), o.storage.local.set({
                        modeLevel: 1
                    }), o.storage.local.set({
                        userRules: []
                    }), o.storage.local.set({
                        allowlist: []
                    }), l("blockedRequestsCount", []).then((function() {
                        t.getBlockedCount();
                    }))) : "update" === e.reason && l("blockedRequestsCount", []).then((function() {
                        t.getBlockedCount();
                    }));
                })), o.runtime.onMessage.addListener((function(r, n, a) {
                    var u = r.type, c = r.ruleText, f = r.host, p = r.page;
                    switch (u) {
                      case "addUserRule":
                        s("userRules").then((function(e) {
                            var r = e;
                            r.push({
                                active: !0,
                                ruleText: c,
                                id: (new Date).getTime()
                            }), l("userRules", r), t.setBlockedRequestsCount(n.tab, 1);
                        }));
                        break;

                      case "getSiteStatusInRules":
                        s("allowlist").then((function(e) {
                            var r = e.find((function(e) {
                                return e === f;
                            }));
                            s("userRules").then((function(e) {
                                if (!r) {
                                    var o = [];
                                    e.forEach((function(e) {
                                        var t = e.ruleText.split("##")[0];
                                        f.includes(t) && o.push(e);
                                    })), t.setBlockedRequestsCount(n.tab, o.length), a(o);
                                }
                            })), r && qe(f).then((function(e) {
                                return 0 === e ? e : We(f, 0);
                            })).then((function() {
                                vt();
                            }));
                        }));
                        break;

                      case "openSettingsPage":
                        e = p, t.openSettingsPage();
                        break;

                      case "iAmReady":
                        a(e), e = null;
                        break;

                      case "pageReload":
                        t.resetTabCount(n.tab);
                    }
                    switch (r.what) {
                      case "insertCSS":
                        var h, d, v, y = null !== (h = null == n || null === (d = n.tab) || void 0 === d ? void 0 : d.id) && void 0 !== h && h, g = null !== (v = null == n ? void 0 : n.frameId) && void 0 !== v && v;
                        if (!1 === y || !1 === g) return;
                        return void o.scripting.insertCSS({
                            css: r.css,
                            origin: "USER",
                            target: {
                                tabId: y,
                                frameIds: [ g ]
                            }
                        }, (function() {
                            return a();
                        }));

                      case "applyRulesets":
                        return ne(r.enabledRulesets).then((function() {
                            return t.rulesetConfig.enabledRulesets = r.enabledRulesets, t.saveRulesetConfig();
                        })).then((function() {
                            vt(), a();
                        })), !0;

                      case "getOptionsPageData":
                        return Promise.all([ He(), U(), i.getEnabledRulesets() ]).then((function(e) {
                            var r = function(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != r) {
                                        var n, a, o, i, u = [], s = !0, c = !1;
                                        try {
                                            if (o = (r = r.call(e)).next, 0 === t) {
                                                if (Object(r) !== r) return;
                                                s = !1;
                                            } else for (;!(s = (n = o.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!s && null != r.return && (i = r.return(), Object(i) !== i)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return u;
                                    }
                                }(e, t) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return kt(e, t);
                                        var r = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? kt(e, t) : void 0;
                                    }
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }(e, 3), n = r[0], o = r[1], u = r[2];
                            a({
                                defaultFilteringMode: n,
                                enabledRulesets: u,
                                maxNumberOfEnabledRulesets: i.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS,
                                rulesetDetails: Array.from(o.values()),
                                autoReload: 1 === t.rulesetConfig.autoReload,
                                firstRun: t.firstRun
                            }), t.firstRun = !1;
                        })), !0;

                      case "setAutoReload":
                        return t.rulesetConfig.autoReload = r.state ? 1 : 0, t.saveRulesetConfig().then((function() {
                            a();
                        })), !0;

                      case "popupPanelData":
                        return Promise.all([ qe(r.hostname), t.hasOmnipotence(), t.hasGreatPowers(r.origin), oe() ]).then((function(e) {
                            a({
                                level: e[0],
                                autoReload: 1 === t.rulesetConfig.autoReload,
                                hasOmnipotence: e[1],
                                hasGreatPowers: e[2],
                                rulesetDetails: e[3]
                            });
                        })), !0;

                      case "setFilteringMode":
                        return qe(r.hostname).then((function(e) {
                            return r.level === e ? e : We(r.hostname, r.level);
                        })).then((function(e) {
                            vt(), a(e);
                        })), !0;

                      case "openAssistant":
                        x.ui.openAssistant((function() {
                            return a();
                        }));
                    }
                    return !0;
                })), o.tabs.onActivated.addListener((function(e) {
                    var r = e.tabId;
                    o.tabs.query({}, (function(e) {
                        e.forEach((function(e) {
                            e.id === r && t.setBrowsIcon(e);
                        }));
                    }));
                })), o.tabs.onUpdated.addListener((function(e, r, n) {
                    n.id < 0 || t.setBrowsIcon(n);
                })), o.webRequest.onErrorOccurred.addListener((function(e) {
                    e.tabId < 0 || (e.error.includes("ERR_BLOCKED_BY_CLIENT") || e.error.includes("NS_ERROR_ABORT")) && t.setBlockedRequestsCount(e, 1);
                }), {
                    urls: [ "<all_urls>" ]
                }), o.tabs.onRemoved.addListener((function(e) {
                    s("blockedRequestsCount").then((function(r) {
                        var n = r.filter((function(t) {
                            return t.id !== e;
                        }));
                        t.blockedCount = n, l("blockedRequestsCount", n);
                    }));
                })), o.runtime.setUninstallURL("https://adblox.org/uninstall"), this.getBlockedCount(), 
                this.start();
            }
        }, {
            key: "setBlockedRequestsCount",
            value: function(e, t) {
                var r = this, n = e.tabId || e.id;
                this.blockedCount.find((function(e) {
                    return e.id === n;
                })) ? this.blockedCount.map((function(a) {
                    if (a.id === n) return a.count = a.count + t, r.setCountToBrowseIcon(e, a.count), 
                    a;
                })) : (this.blockedCount.push({
                    id: n,
                    count: t
                }), this.setCountToBrowseIcon(e, t)), l("blockedRequestsCount", this.blockedCount);
            }
        }, {
            key: "resetTabCount",
            value: function(e) {
                var t = this;
                this.blockedCount.map((function(r) {
                    if (r.id === e.id) return r.count = 0, t.setCountToBrowseIcon(e, 0), r;
                })), l("blockedRequestsCount", this.blockedCount);
            }
        }, {
            key: "setCountToBrowseIcon",
            value: function(e, t) {
                var r = e.initiator || e.url, n = new URL(r);
                qe(this.normalizedHostname(n.hostname)).then((function(r) {
                    if (r > 0) {
                        var n, a = e.tabId || e.id;
                        n = t > 999 ? "999+" : 0 === t ? "" : "".concat(t), o.action.setBadgeText({
                            tabId: a,
                            text: n
                        }), o.action.setBadgeTextColor({
                            color: "#ffffff"
                        }), o.action.setBadgeBackgroundColor({
                            color: "#09b326"
                        });
                    }
                }));
            }
        }, {
            key: "setBrowsIcon",
            value: function(e) {
                if (e.url) {
                    var t = new URL(e.url);
                    qe(this.normalizedHostname(t.hostname)).then((function(t) {
                        var r = {
                            16: "/img/icon_16.png",
                            32: "/img/icon_32.png",
                            64: "/img/icon_64.png",
                            128: "/img/icon_128.png"
                        };
                        0 === t && (r = {
                            16: "/img/icon_16_gray.png",
                            32: "/img/icon_32_gray.png",
                            64: "/img/icon_64_gray.png",
                            128: "/img/icon_128_gray.png"
                        }), o.action.setIcon({
                            tabId: e.id,
                            path: r
                        });
                    }));
                }
            }
        }, {
            key: "start",
            value: (p = wt(mt().mark((function e() {
                var t, r, n = this;
                return mt().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.loadRulesetConfig();

                      case 2:
                        if (!1 !== this.wakeupRun) {
                            e.next = 5;
                            break;
                        }
                        return e.next = 5, ne(this.rulesetConfig.enabledRulesets);

                      case 5:
                        return !1 === this.wakeupRun && (t = this.getCurrentVersion()) !== this.rulesetConfig.version && Z().then((function() {
                            n.rulesetConfig.version = t, n.saveRulesetConfig();
                        })), e.next = 8, this.onPermissionsRemoved();

                      case 8:
                        if (r = e.sent, (!1 === this.wakeupRun || r) && vt(), !1 === this.wakeupRun && i.setExtensionActionOptions && i.setExtensionActionOptions({
                            displayActionCountAsBadgeText: !1
                        }), o.permissions.onRemoved.addListener((function() {
                            n.onPermissionsRemoved();
                        })), !this.firstRun) {
                            e.next = 17;
                            break;
                        }
                        return e.next = 15, m("disableFirstRunPage");

                      case 15:
                        !0 !== e.sent && this.openSettingsPage();

                      case 17:
                      case "end":
                        return e.stop();
                    }
                }), e, this);
            }))), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "loadRulesetConfig",
            value: (f = wt(mt().mark((function e() {
                var t;
                return mt().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, d("rulesetConfig");

                      case 2:
                        if (!(t = e.sent)) {
                            e.next = 9;
                            break;
                        }
                        return this.rulesetConfig.version = t.version, this.rulesetConfig.enabledRulesets = t.enabledRulesets, 
                        this.rulesetConfig.autoReload = 1, this.wakeupRun = !0, e.abrupt("return");

                      case 9:
                        return e.next = 11, s("rulesetConfig");

                      case 11:
                        if (!(t = e.sent)) {
                            e.next = 18;
                            break;
                        }
                        return this.rulesetConfig.version = t.version, this.rulesetConfig.enabledRulesets = t.enabledRulesets, 
                        this.rulesetConfig.autoReload = 1, y("rulesetConfig", this.rulesetConfig), e.abrupt("return");

                      case 18:
                        return e.next = 20, te();

                      case 20:
                        return this.rulesetConfig.enabledRulesets = e.sent, y("rulesetConfig", this.rulesetConfig), 
                        l("rulesetConfig", this.rulesetConfig), this.firstRun = !0, e.next = 26, $e(3);

                      case 26:
                      case "end":
                        return e.stop();
                    }
                }), e, this);
            }))), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "getCurrentVersion",
            value: function() {
                return o.runtime.getManifest().version;
            }
        }, {
            key: "saveRulesetConfig",
            value: (c = wt(mt().mark((function e() {
                return mt().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return y("rulesetConfig", this.rulesetConfig), e.abrupt("return", l("rulesetConfig", this.rulesetConfig));

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }), e, this);
            }))), function() {
                return c.apply(this, arguments);
            })
        }, {
            key: "onPermissionsRemoved",
            value: (u = wt(mt().mark((function e() {
                var t, r;
                return mt().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, He();

                      case 2:
                        return t = e.sent, e.next = 5, Je();

                      case 5:
                        if (!1 !== e.sent) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 8:
                        return e.next = 10, He();

                      case 10:
                        return r = e.sent, t > 1 && r <= 1 && Z(), vt(), e.abrupt("return", !0);

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }), e);
            }))), function() {
                return u.apply(this, arguments);
            })
        }, {
            key: "hasOmnipotence",
            value: function() {
                return o.permissions.contains({
                    origins: [ "<all_urls>" ]
                });
            }
        }, {
            key: "hasGreatPowers",
            value: (a = wt(mt().mark((function e(t) {
                return mt().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!1 !== /^https?:\/\//.test(t)) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 2:
                        return e.abrupt("return", o.permissions.contains({
                            origins: [ "".concat(t, "/*") ]
                        }));

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }), e);
            }))), function(e) {
                return a.apply(this, arguments);
            })
        }, {
            key: "normalizedHostname",
            value: function(e) {
                return e.replace(/^www\./, "");
            }
        }, {
            key: "openSettingsPage",
            value: function() {
                o.tabs.create({
                    url: o.runtime.getURL("options.html")
                });
            }
        } ]) && Lt(t.prototype, r), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e;
    }());
})();