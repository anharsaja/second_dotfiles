"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "showAd", "false" ], [ "adblock", "false" ], [ "adblockEnabled", "noopFunc" ], [ "trackAdblock", "noopFunc" ], [ "adblockerAlert", "noopFunc" ], [ "__INITIAL_STATE__.features.should-show-snow", "false" ], [ "ads", "emptyObj" ] ], n = new Map([ [ "blogg.no", 0 ], [ "techstart.dk", 1 ], [ "connery.dk", 4 ], [ "spleis.no", 5 ], [ "gamer.no", 6 ] ]), r = new Map([ [ "gamereactor", [ 2, 3 ] ] ]), o = new Map([]);
        function s(...e) {
            !function(e = !1, t = "", n = "") {
                if ("" === t) return;
                const r = c(), o = r.makeLogPrefix("set-constant", t, n), s = r.getExtraArgs(Array.from(arguments), 3);
                function i(t, n) {
                    const s = (() => {
                        const e = t.lastIndexOf(".");
                        return -1 === e ? t : t.slice(e + 1);
                    })();
                    if ("" === s) return;
                    const a = document.currentScript;
                    let l = function(e, t) {
                        const n = c(), r = n.getExtraArgs(Array.from(arguments), 2);
                        let o;
                        if ("undefined" === t) o = void 0; else if ("false" === t) o = !1; else if ("true" === t) o = !0; else if ("null" === t) o = null; else if ("''" === t || "" === t) o = ""; else if ("[]" === t || "emptyArr" === t) o = []; else if ("{}" === t || "emptyObj" === t) o = {}; else if ("noopFunc" === t) o = function() {}; else if ("trueFunc" === t) o = function() {
                            return !0;
                        }; else if ("falseFunc" === t) o = function() {
                            return !1;
                        }; else if (/^-?\d+$/.test(t)) {
                            if (o = parseInt(t), isNaN(t)) return;
                            if (Math.abs(t) > 32767) return;
                        } else {
                            if (!e) return;
                            if (t.startsWith("{") && t.endsWith("}")) try {
                                o = n.JSON_parse(t).value;
                            } catch (e) {
                                return;
                            }
                        }
                        if (void 0 !== r.as) {
                            if ("function" === r.as) return () => o;
                            if ("callback" === r.as) return () => () => o;
                            if ("resolved" === r.as) return Promise.resolve(o);
                            if ("rejected" === r.as) return Promise.reject(o);
                        }
                        return o;
                    }(e, n);
                    "noopFunc" !== n && "trueFunc" !== n && "falseFunc" !== n || (l = (e => (r.Object_defineProperty(e, "name", {
                        value: s
                    }), new Proxy(e, {
                        defineProperty(e, t) {
                            return "toString" === t || Reflect.defineProperty(...arguments);
                        },
                        deleteProperty(e, t) {
                            return "toString" === t || Reflect.deleteProperty(...arguments);
                        },
                        get(e, t) {
                            return "toString" === t ? function() {
                                return `function ${s}() { [native code] }`;
                            }.bind(null) : Reflect.get(...arguments);
                        }
                    })))(l));
                    let u = !1;
                    const f = function(t) {
                        return !e && (!!u || (u = null != t && null != l && typeof t != typeof l, u && r.uboLog(o, `Aborted because value set to ${t}`), 
                        u));
                    }, p = function(e, t, n, s) {
                        if (!1 === s.init(n ? e[t] : l)) return;
                        const c = r.Object_getOwnPropertyDescriptor(e, t);
                        let i, a;
                        c instanceof r.Object && (e[t] = l, c.get instanceof Function && (i = c.get), c.set instanceof Function && (a = c.set));
                        try {
                            r.Object_defineProperty(e, t, {
                                configurable: n,
                                get: () => (void 0 !== i && i(), s.getter()),
                                set(e) {
                                    void 0 !== a && a(e), s.setter(e);
                                }
                            }), r.uboLog(o, "Trap installed");
                        } catch (e) {
                            r.uboErr(o, e);
                        }
                    }, d = function(e, t) {
                        const n = t.indexOf(".");
                        if (-1 === n) return void p(e, t, !1, {
                            v: void 0,
                            init: function(e) {
                                return !f(e) && (this.v = e, !0);
                            },
                            getter: function() {
                                return document.currentScript === a ? this.v : (r.uboLog(o, "Property read"), l);
                            },
                            setter: function(e) {
                                !1 !== f(e) && (l = e);
                            }
                        });
                        const s = t.slice(0, n), c = e[s];
                        t = t.slice(n + 1), c instanceof r.Object || "object" == typeof c && null !== c ? d(c, t) : p(e, s, !0, {
                            v: void 0,
                            init: function(e) {
                                return this.v = e, !0;
                            },
                            getter: function() {
                                return this.v;
                            },
                            setter: function(e) {
                                this.v = e, e instanceof r.Object && d(e, t);
                            }
                        });
                    };
                    d(window, t);
                }
                !function(e, t) {
                    const n = e => {
                        const t = {
                            loading: 1,
                            interactive: 2,
                            end: 2,
                            2: 2,
                            complete: 3,
                            idle: 3,
                            3: 3
                        }, n = Array.isArray(e) ? e : [ e ];
                        for (const e of n) {
                            const n = `${e}`;
                            if (!1 !== t.hasOwnProperty(n)) return t[n];
                        }
                        return 0;
                    }, r = n(t);
                    if (n(document.readyState) >= r) return void e();
                    const s = c(), i = [ "readystatechange", () => {
                        n(document.readyState) < r || (e(), s.removeEventListener.apply(document, i));
                    }, {
                        capture: !0
                    } ];
                    s.addEventListener.apply(document, i);
                }((() => {
                    i(t, n);
                }), s.runAt);
            }(!1, ...e);
        }
        function c() {
            if (e.safeSelf) return e.safeSelf;
            const t = globalThis, n = {
                Array_from: Array.from,
                Error: t.Error,
                Function_toStringFn: t.Function.prototype.toString,
                Function_toString: e => n.Function_toStringFn.call(e),
                Math_floor: Math.floor,
                Math_max: Math.max,
                Math_min: Math.min,
                Math_random: Math.random,
                Object: Object,
                Object_defineProperty: Object.defineProperty.bind(Object),
                Object_fromEntries: Object.fromEntries.bind(Object),
                Object_getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor.bind(Object),
                RegExp: t.RegExp,
                RegExp_test: t.RegExp.prototype.test,
                RegExp_exec: t.RegExp.prototype.exec,
                Request_clone: t.Request.prototype.clone,
                XMLHttpRequest: t.XMLHttpRequest,
                addEventListener: t.EventTarget.prototype.addEventListener,
                removeEventListener: t.EventTarget.prototype.removeEventListener,
                fetch: t.fetch,
                JSON: t.JSON,
                JSON_parseFn: t.JSON.parse,
                JSON_stringifyFn: t.JSON.stringify,
                JSON_parse: (...e) => n.JSON_parseFn.call(n.JSON, ...e),
                JSON_stringify: (...e) => n.JSON_stringifyFn.call(n.JSON, ...e),
                log: void 0,
                logLevel: 0,
                makeLogPrefix(...e) {
                    return this.sendToLogger && `[${e.join(" ⁝ ")}]` || "";
                },
                uboLog(...e) {
                    if (void 0 !== this.sendToLogger && void 0 !== e && "" !== e[0]) return this.sendToLogger("info", ...e);
                },
                uboErr(...e) {
                    if (void 0 !== this.sendToLogger && void 0 !== e && "" !== e[0]) return this.sendToLogger("error", ...e);
                },
                escapeRegexChars: e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                initPattern(e, t = {}) {
                    if ("" === e) return {
                        matchAll: !0
                    };
                    const n = !0 !== t.canNegate || !1 === e.startsWith("!");
                    !1 === n && (e = e.slice(1));
                    const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== r ? {
                        re: new this.RegExp(r[1], r[2] || t.flags),
                        expect: n
                    } : void 0 !== t.flags ? {
                        re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                        expect: n
                    } : {
                        pattern: e,
                        expect: n
                    };
                },
                testPattern(e, t) {
                    return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
                },
                patternToRegex(e, t, n = !1) {
                    if ("" === e) return /^/;
                    const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === r) {
                        const r = this.escapeRegexChars(e);
                        return new RegExp(n ? `^${r}$` : r, t);
                    }
                    try {
                        return new RegExp(r[1], r[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const n = e.slice(t).reduce(((e, t, n, r) => {
                        if (0 == (1 & n)) {
                            const t = r[n + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ r[n], o ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(n);
                },
                onIdle: (e, n) => t.requestIdleCallback ? t.requestIdleCallback(e, n) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = n, void 0 === e.bcSecret) return n;
            const r = new t.BroadcastChannel(e.bcSecret);
            let o = [];
            return n.logLevel = e.logLevel || 1, n.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === o) return r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: n
                });
                o.push({
                    type: e,
                    text: n
                });
            }, r.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: e, text: t}) => r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), o = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    n.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    n.logLevel = 2;
                }
            }, r.postMessage("areyouready?"), n;
        }
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = i.length;
        if (0 === a) return;
        const l = new Set, u = [];
        if (0 !== o.size) {
            for (let e = 0; e < a; e++) {
                const t = i.slice(e).join("."), n = o.get(t);
                n && u.push(...n);
            }
            o.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) u.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(i.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== r.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = i.slice(t, n).join(".");
                let o = r.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) u.includes(e) || l.add(e);
                }
            }
            r.clear();
        }
        for (const e of l) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, r;
        try {
            t.uBOL_setConstant = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_setConstant);
            r = t.URL.createObjectURL(o);
            const s = t.document;
            n = s.createElement("script"), n.async = !1, n.src = r, (s.head || s.documentElement || s).append(n);
        } catch (e) {}
        r && (n && n.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_setConstant;
    }
})();