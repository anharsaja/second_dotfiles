"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "WP.gaf.loadBunch", "noopFunc" ], [ "Object.prototype.rekids", "undefined" ], [ "Object.prototype.gafSlot", "undefined" ], [ "Object.prototype.advViewability", "undefined" ], [ "Object.prototype.loadBunch", "noopFunc" ], [ "Object.prototype.loadAndRunBunch", "noopFunc" ], [ "displayed", "false" ], [ "loadElement", "noopFunc" ], [ "showAds", "true" ], [ "pp_adblock_is_off", "trueFunc" ], [ "window.google_jobrunner", "noopFunc" ], [ "Inpl.Abd.onDetected", "noopFunc" ], [ "isAdblockDetected", "0" ], [ "adsBlocked", "noopFunc" ], [ "showAddbockerMsg", "noopFunc" ], [ "loadElementBlock", "noopFunc" ] ], n = new Map([ [ "www.wp.pl", 0 ], [ "money.pl", [ 1, 2, 3 ] ], [ "open.fm", 2 ], [ "sportowefakty.wp.pl", 4 ], [ "profil.wp.pl", 5 ], [ "opensubtitles.org", 6 ], [ "www.elektroda.pl", [ 7, 15 ] ], [ "acmilan.com.pl", 8 ], [ "kitsune-subs.anime-odcinki.pl", 8 ], [ "miastakobiet.pl", 9 ], [ "stronazdrowia.pl", 9 ], [ "dniwolne.eu", 10 ], [ "interia.pl", [ 11, 12 ] ], [ "pomponik.pl", [ 11, 12 ] ], [ "cdahd.co", 13 ], [ "synonimy.pl", 14 ] ]), o = new Map([]), r = new Map([ [ "poczta.interia.pl", [ 11 ] ] ]);
        function i(...e) {
            !function(e = !1, t = "", n = "") {
                if ("" === t) return;
                const o = c(), r = o.makeLogPrefix("set-constant", t, n), i = o.getExtraArgs(Array.from(arguments), 3);
                function s(t, n) {
                    const i = (() => {
                        const e = t.lastIndexOf(".");
                        return -1 === e ? t : t.slice(e + 1);
                    })();
                    if ("" === i) return;
                    const a = document.currentScript;
                    let l = function(e, t) {
                        const n = c(), o = n.getExtraArgs(Array.from(arguments), 2);
                        let r;
                        if ("undefined" === t) r = void 0; else if ("false" === t) r = !1; else if ("true" === t) r = !0; else if ("null" === t) r = null; else if ("''" === t || "" === t) r = ""; else if ("[]" === t || "emptyArr" === t) r = []; else if ("{}" === t || "emptyObj" === t) r = {}; else if ("noopFunc" === t) r = function() {}; else if ("trueFunc" === t) r = function() {
                            return !0;
                        }; else if ("falseFunc" === t) r = function() {
                            return !1;
                        }; else if (/^-?\d+$/.test(t)) {
                            if (r = parseInt(t), isNaN(t)) return;
                            if (Math.abs(t) > 32767) return;
                        } else {
                            if (!e) return;
                            if (t.startsWith("{") && t.endsWith("}")) try {
                                r = n.JSON_parse(t).value;
                            } catch (e) {
                                return;
                            }
                        }
                        if (void 0 !== o.as) {
                            if ("function" === o.as) return () => r;
                            if ("callback" === o.as) return () => () => r;
                            if ("resolved" === o.as) return Promise.resolve(r);
                            if ("rejected" === o.as) return Promise.reject(r);
                        }
                        return r;
                    }(e, n);
                    "noopFunc" !== n && "trueFunc" !== n && "falseFunc" !== n || (l = (e => (o.Object_defineProperty(e, "name", {
                        value: i
                    }), new Proxy(e, {
                        defineProperty(e, t) {
                            return "toString" === t || Reflect.defineProperty(...arguments);
                        },
                        deleteProperty(e, t) {
                            return "toString" === t || Reflect.deleteProperty(...arguments);
                        },
                        get(e, t) {
                            return "toString" === t ? function() {
                                return `function ${i}() { [native code] }`;
                            }.bind(null) : Reflect.get(...arguments);
                        }
                    })))(l));
                    let u = !1;
                    const p = function(t) {
                        return !e && (!!u || (u = null != t && null != l && typeof t != typeof l, u && o.uboLog(r, `Aborted because value set to ${t}`), 
                        u));
                    }, f = function(e, t, n, i) {
                        if (!1 === i.init(n ? e[t] : l)) return;
                        const c = o.Object_getOwnPropertyDescriptor(e, t);
                        let s, a;
                        c instanceof o.Object && (e[t] = l, c.get instanceof Function && (s = c.get), c.set instanceof Function && (a = c.set));
                        try {
                            o.Object_defineProperty(e, t, {
                                configurable: n,
                                get: () => (void 0 !== s && s(), i.getter()),
                                set(e) {
                                    void 0 !== a && a(e), i.setter(e);
                                }
                            }), o.uboLog(r, "Trap installed");
                        } catch (e) {
                            o.uboErr(r, e);
                        }
                    }, d = function(e, t) {
                        const n = t.indexOf(".");
                        if (-1 === n) return void f(e, t, !1, {
                            v: void 0,
                            init: function(e) {
                                return !p(e) && (this.v = e, !0);
                            },
                            getter: function() {
                                return document.currentScript === a ? this.v : (o.uboLog(r, "Property read"), l);
                            },
                            setter: function(e) {
                                !1 !== p(e) && (l = e);
                            }
                        });
                        const i = t.slice(0, n), c = e[i];
                        t = t.slice(n + 1), c instanceof o.Object || "object" == typeof c && null !== c ? d(c, t) : f(e, i, !0, {
                            v: void 0,
                            init: function(e) {
                                return this.v = e, !0;
                            },
                            getter: function() {
                                return this.v;
                            },
                            setter: function(e) {
                                this.v = e, e instanceof o.Object && d(e, t);
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
                    }, o = n(t);
                    if (n(document.readyState) >= o) return void e();
                    const i = c(), s = [ "readystatechange", () => {
                        n(document.readyState) < o || (e(), i.removeEventListener.apply(document, s));
                    }, {
                        capture: !0
                    } ];
                    i.addEventListener.apply(document, s);
                }((() => {
                    s(t, n);
                }), i.runAt);
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
                    const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== o ? {
                        re: new this.RegExp(o[1], o[2] || t.flags),
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
                    const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === o) {
                        const o = this.escapeRegexChars(e);
                        return new RegExp(n ? `^${o}$` : o, t);
                    }
                    try {
                        return new RegExp(o[1], o[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const n = e.slice(t).reduce(((e, t, n, o) => {
                        if (0 == (1 & n)) {
                            const t = o[n + 1], r = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ o[n], r ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(n);
                },
                onIdle: (e, n) => t.requestIdleCallback ? t.requestIdleCallback(e, n) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = n, void 0 === e.bcSecret) return n;
            const o = new t.BroadcastChannel(e.bcSecret);
            let r = [];
            return n.logLevel = e.logLevel || 1, n.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === r) return o.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: n
                });
                r.push({
                    type: e,
                    text: n
                });
            }, o.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === r) break;
                    r.forEach((({type: e, text: t}) => o.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), r = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    n.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    n.logLevel = 2;
                }
            }, o.postMessage("areyouready?"), n;
        }
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = s.length;
        if (0 === a) return;
        const l = new Set, u = [];
        if (0 !== r.size) {
            for (let e = 0; e < a; e++) {
                const t = s.slice(e).join("."), n = r.get(t);
                n && u.push(...n);
            }
            r.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) u.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(s.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== o.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = s.slice(t, n).join(".");
                let r = o.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) u.includes(e) || l.add(e);
                }
            }
            o.clear();
        }
        for (const e of l) try {
            i(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, o;
        try {
            t.uBOL_setConstant = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_setConstant);
            o = t.URL.createObjectURL(r);
            const i = t.document;
            n = i.createElement("script"), n.async = !1, n.src = o, (i.head || i.documentElement || i).append(n);
        } catch (e) {}
        o && (n && n.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_setConstant;
    }
})();