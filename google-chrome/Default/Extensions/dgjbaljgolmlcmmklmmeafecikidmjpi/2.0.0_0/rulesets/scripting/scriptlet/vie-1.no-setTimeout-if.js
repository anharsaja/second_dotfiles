"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "DisplayAHTML", "5000" ], [ "callback", "4003" ] ], n = new Map([ [ "linkneverdie.net", [ 0, 1 ] ] ]), o = new Map([]), r = new Map([]);
        function s(t = "", n = "") {
            if ("string" != typeof t) return;
            const o = function() {
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
            }(), r = o.makeLogPrefix("prevent-setTimeout", t, n), s = "!" === t.charAt(0);
            s && (t = t.slice(1)), "" === n && (n = void 0);
            let i = !1;
            void 0 !== n && (i = "!" === n.charAt(0), i && (n = n.slice(1)), n = parseInt(n, 10));
            const c = o.patternToRegex(t);
            self.setTimeout = new Proxy(self.setTimeout, {
                apply: function(e, a, l) {
                    const g = l[0] instanceof Function ? String(o.Function_toString(l[0])) : String(l[0]), p = l[1];
                    if ("" === t && void 0 === n) return o.uboLog(r, `Called:\n${g}\n${p}`), Reflect.apply(e, a, l);
                    let f;
                    return "" !== t && (f = c.test(g) !== s), !1 !== f && void 0 !== n && (f = (p === n || isNaN(p) && isNaN(n)) !== i), 
                    f && (l[0] = function() {}, o.uboLog(r, `Prevented:\n${g}\n${p}`)), Reflect.apply(e, a, l);
                },
                get: (e, t, n) => "toString" === t ? e.toString.bind(e) : Reflect.get(e, t, n)
            });
        }
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = i.length;
        if (0 === c) return;
        const a = new Set, l = [];
        if (0 !== r.size) {
            for (let e = 0; e < c; e++) {
                const t = i.slice(e).join("."), n = r.get(t);
                n && l.push(...n);
            }
            r.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || a.add(e);
                }
            };
            for (let t = 0; t < c; t++) e(i.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== o.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = i.slice(t, n).join(".");
                let r = o.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) l.includes(e) || a.add(e);
                }
            }
            o.clear();
        }
        for (const e of a) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, o;
        try {
            t.uBOL_noSetTimeoutIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_noSetTimeoutIf);
            o = t.URL.createObjectURL(r);
            const s = t.document;
            n = s.createElement("script"), n.async = !1, n.src = o, (s.head || s.documentElement || s).append(n);
        } catch (e) {}
        o && (n && n.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_noSetTimeoutIf;
    }
})();