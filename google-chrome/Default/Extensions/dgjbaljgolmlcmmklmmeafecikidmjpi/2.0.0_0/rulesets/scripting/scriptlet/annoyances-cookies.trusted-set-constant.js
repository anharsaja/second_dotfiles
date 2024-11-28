"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "dataLayer", '{"value":[{"signals":["remixd"]},{"event":"remixd_gtm_fire"}]}' ] ], r = new Map([ [ "radiox.co.uk", 0 ] ]), n = new Map([]), o = new Map([]);
        function i(...e) {
            !function(e = !1, t = "", r = "") {
                if ("" === t) return;
                const n = s(), o = n.makeLogPrefix("set-constant", t, r), i = n.getExtraArgs(Array.from(arguments), 3);
                function c(t, r) {
                    const i = (() => {
                        const e = t.lastIndexOf(".");
                        return -1 === e ? t : t.slice(e + 1);
                    })();
                    if ("" === i) return;
                    const a = document.currentScript;
                    let u = function(e, t) {
                        const r = s(), n = r.getExtraArgs(Array.from(arguments), 2);
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
                                o = r.JSON_parse(t).value;
                            } catch (e) {
                                return;
                            }
                        }
                        if (void 0 !== n.as) {
                            if ("function" === n.as) return () => o;
                            if ("callback" === n.as) return () => () => o;
                            if ("resolved" === n.as) return Promise.resolve(o);
                            if ("rejected" === n.as) return Promise.reject(o);
                        }
                        return o;
                    }(e, r);
                    "noopFunc" !== r && "trueFunc" !== r && "falseFunc" !== r || (u = (e => (n.Object_defineProperty(e, "name", {
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
                    })))(u));
                    let l = !1;
                    const f = function(t) {
                        return !e && (!!l || (l = null != t && null != u && typeof t != typeof u, l && n.uboLog(o, `Aborted because value set to ${t}`), 
                        l));
                    }, d = function(e, t, r, i) {
                        if (!1 === i.init(r ? e[t] : u)) return;
                        const s = n.Object_getOwnPropertyDescriptor(e, t);
                        let c, a;
                        s instanceof n.Object && (e[t] = u, s.get instanceof Function && (c = s.get), s.set instanceof Function && (a = s.set));
                        try {
                            n.Object_defineProperty(e, t, {
                                configurable: r,
                                get: () => (void 0 !== c && c(), i.getter()),
                                set(e) {
                                    void 0 !== a && a(e), i.setter(e);
                                }
                            }), n.uboLog(o, "Trap installed");
                        } catch (e) {
                            n.uboErr(o, e);
                        }
                    }, p = function(e, t) {
                        const r = t.indexOf(".");
                        if (-1 === r) return void d(e, t, !1, {
                            v: void 0,
                            init: function(e) {
                                return !f(e) && (this.v = e, !0);
                            },
                            getter: function() {
                                return document.currentScript === a ? this.v : (n.uboLog(o, "Property read"), u);
                            },
                            setter: function(e) {
                                !1 !== f(e) && (u = e);
                            }
                        });
                        const i = t.slice(0, r), s = e[i];
                        t = t.slice(r + 1), s instanceof n.Object || "object" == typeof s && null !== s ? p(s, t) : d(e, i, !0, {
                            v: void 0,
                            init: function(e) {
                                return this.v = e, !0;
                            },
                            getter: function() {
                                return this.v;
                            },
                            setter: function(e) {
                                this.v = e, e instanceof n.Object && p(e, t);
                            }
                        });
                    };
                    p(window, t);
                }
                !function(e, t) {
                    const r = e => {
                        const t = {
                            loading: 1,
                            interactive: 2,
                            end: 2,
                            2: 2,
                            complete: 3,
                            idle: 3,
                            3: 3
                        }, r = Array.isArray(e) ? e : [ e ];
                        for (const e of r) {
                            const r = `${e}`;
                            if (!1 !== t.hasOwnProperty(r)) return t[r];
                        }
                        return 0;
                    }, n = r(t);
                    if (r(document.readyState) >= n) return void e();
                    const i = s(), c = [ "readystatechange", () => {
                        r(document.readyState) < n || (e(), i.removeEventListener.apply(document, c));
                    }, {
                        capture: !0
                    } ];
                    i.addEventListener.apply(document, c);
                }((() => {
                    c(t, r);
                }), i.runAt);
            }(!0, ...e);
        }
        function s() {
            if (e.safeSelf) return e.safeSelf;
            const t = globalThis, r = {
                Array_from: Array.from,
                Error: t.Error,
                Function_toStringFn: t.Function.prototype.toString,
                Function_toString: e => r.Function_toStringFn.call(e),
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
                JSON_parse: (...e) => r.JSON_parseFn.call(r.JSON, ...e),
                JSON_stringify: (...e) => r.JSON_stringifyFn.call(r.JSON, ...e),
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
                    const r = !0 !== t.canNegate || !1 === e.startsWith("!");
                    !1 === r && (e = e.slice(1));
                    const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== n ? {
                        re: new this.RegExp(n[1], n[2] || t.flags),
                        expect: r
                    } : void 0 !== t.flags ? {
                        re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                        expect: r
                    } : {
                        pattern: e,
                        expect: r
                    };
                },
                testPattern(e, t) {
                    return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
                },
                patternToRegex(e, t, r = !1) {
                    if ("" === e) return /^/;
                    const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === n) {
                        const n = this.escapeRegexChars(e);
                        return new RegExp(r ? `^${n}$` : n, t);
                    }
                    try {
                        return new RegExp(n[1], n[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const r = e.slice(t).reduce(((e, t, r, n) => {
                        if (0 == (1 & r)) {
                            const t = n[r + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ n[r], o ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(r);
                },
                onIdle: (e, r) => t.requestIdleCallback ? t.requestIdleCallback(e, r) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = r, void 0 === e.bcSecret) return r;
            const n = new t.BroadcastChannel(e.bcSecret);
            let o = [];
            return r.logLevel = e.logLevel || 1, r.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const r = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === o) return n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: r
                });
                o.push({
                    type: e,
                    text: r
                });
            }, n.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: e, text: t}) => n.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), o = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    r.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    r.logLevel = 2;
                }
            }, n.postMessage("areyouready?"), r;
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
                const t = c.slice(e).join("."), r = o.get(t);
                r && l.push(...r);
            }
            o.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || u.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(c.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== n.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = c.slice(t, r).join(".");
                let o = n.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) l.includes(e) || u.add(e);
                }
            }
            n.clear();
        }
        for (const e of u) try {
            i(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, n;
        try {
            t.uBOL_trustedSetConstant = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_trustedSetConstant);
            n = t.URL.createObjectURL(o);
            const i = t.document;
            r = i.createElement("script"), r.async = !1, r.src = n, (i.head || i.documentElement || i).append(r);
        } catch (e) {}
        n && (r && r.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_trustedSetConstant;
    }
})();