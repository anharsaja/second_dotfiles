"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "ai_set_cookie", "noopFunc" ], [ "square_array1", "null" ], [ "square_arraytop", "null" ], [ "getAdblockerStatus", "noopFunc" ], [ "dovideostuffAD", "noopFunc" ], [ "testPrebid", "noopFunc" ], [ "adblock", "false" ], [ "adblockEnabled", "falseFunc" ], [ "eazy_ad_unblocker", "null" ], [ "showAds", "false" ], [ "trap", "noopFunc" ], [ "checkAdblocker", "noopFunc" ], [ "checkAdsBlocked", "noopFunc" ], [ "premium", "trueFunc" ], [ "p", "true" ], [ "NWS.config.enableAdblockerDetection", "false" ], [ "ai_run_scripts", "noopFunc" ], [ "ab_disp", "noopFunc" ], [ "googletag", "1" ], [ "window.WURFL", "1" ], [ "canShowAds", "true" ], [ "em_track_user", "false" ], [ "exactmetrics_frontend", "undefined" ], [ "detect", "noopFunc" ], [ "mi_track_user", "false" ] ], n = new Map([ [ "byggipedia.se", 0 ], [ "conpot.se", [ 1, 2 ] ], [ "di.se", 3 ], [ "feber.se", 4 ], [ "tjock.se", 4 ], [ "findit.se", 5 ], [ "fz.se", 6 ], [ "fssweden.se", 6 ], [ "gamereactor.se", 7 ], [ "jobsinsweden.se", 8 ], [ "kamrat.com", [ 9, 10 ] ], [ "kritiker.se", [ 11, 12, 13, 14 ] ], [ "swedroid.se", 12 ], [ "mitti.se", 15 ], [ "mobilanyheter.net", 16 ], [ "ordbokpro.se", 17 ], [ "spray.se", [ 18, 19 ] ], [ "vinochmatguiden.se", 19 ], [ "thatsup.se", 20 ], [ "thorengruppen.se", [ 21, 22 ] ], [ "utslappsratt.se", [ 21, 22 ] ], [ "heleneholmsif.se", [ 21, 22 ] ], [ "trafikskola.se", [ 21, 22 ] ], [ "melodifestivalklubben.se", [ 21, 22 ] ], [ "morotsliv.com", [ 21, 22 ] ], [ "www.expressen.se", 23 ], [ "zeinaskitchen.se", 24 ], [ "trafiksakerhet.se", 24 ], [ "boktugg.se", 24 ], [ "lakartidningen.se", 24 ], [ "villalivet.se", 24 ], [ "matsafari.nu", 24 ], [ "forexgruppen.se", 24 ], [ "fastighetsvarlden.se", 24 ] ]), r = new Map([]), o = new Map([]);
        function s(...e) {
            !function(e = !1, t = "", n = "") {
                if ("" === t) return;
                const r = i(), o = r.makeLogPrefix("set-constant", t, n), s = r.getExtraArgs(Array.from(arguments), 3);
                function c(t, n) {
                    const s = (() => {
                        const e = t.lastIndexOf(".");
                        return -1 === e ? t : t.slice(e + 1);
                    })();
                    if ("" === s) return;
                    const a = document.currentScript;
                    let u = function(e, t) {
                        const n = i(), r = n.getExtraArgs(Array.from(arguments), 2);
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
                    "noopFunc" !== n && "trueFunc" !== n && "falseFunc" !== n || (u = (e => (r.Object_defineProperty(e, "name", {
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
                    })))(u));
                    let l = !1;
                    const f = function(t) {
                        return !e && (!!l || (l = null != t && null != u && typeof t != typeof u, l && r.uboLog(o, `Aborted because value set to ${t}`), 
                        l));
                    }, p = function(e, t, n, s) {
                        if (!1 === s.init(n ? e[t] : u)) return;
                        const i = r.Object_getOwnPropertyDescriptor(e, t);
                        let c, a;
                        i instanceof r.Object && (e[t] = u, i.get instanceof Function && (c = i.get), i.set instanceof Function && (a = i.set));
                        try {
                            r.Object_defineProperty(e, t, {
                                configurable: n,
                                get: () => (void 0 !== c && c(), s.getter()),
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
                                return document.currentScript === a ? this.v : (r.uboLog(o, "Property read"), u);
                            },
                            setter: function(e) {
                                !1 !== f(e) && (u = e);
                            }
                        });
                        const s = t.slice(0, n), i = e[s];
                        t = t.slice(n + 1), i instanceof r.Object || "object" == typeof i && null !== i ? d(i, t) : p(e, s, !0, {
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
                    const s = i(), c = [ "readystatechange", () => {
                        n(document.readyState) < r || (e(), s.removeEventListener.apply(document, c));
                    }, {
                        capture: !0
                    } ];
                    s.addEventListener.apply(document, c);
                }((() => {
                    c(t, n);
                }), s.runAt);
            }(!1, ...e);
        }
        function i() {
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
        const c = [];
        try {
            c.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = c.length;
        if (0 === a) return;
        const u = new Set, l = [];
        if (0 !== o.size) {
            for (let e = 0; e < a; e++) {
                const t = c.slice(e).join("."), n = o.get(t);
                n && l.push(...n);
            }
            o.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || u.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(c.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== r.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = c.slice(t, n).join(".");
                let o = r.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) l.includes(e) || u.add(e);
                }
            }
            r.clear();
        }
        for (const e of u) try {
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