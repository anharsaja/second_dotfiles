"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "()", "1500" ], [ "offsetHeight" ], [ "popup" ], [ "mdpDeBlocker" ] ], o = new Map([ [ "walla.co.il", 0 ], [ "ynet.co.il", 1 ], [ "inn.co.il", 2 ], [ "jmusic.me", 3 ] ]), n = new Map([]), r = new Map([]);
        function s(t = "", o = "") {
            if ("string" != typeof t) return;
            const n = function() {
                if (e.safeSelf) return e.safeSelf;
                const t = globalThis, o = {
                    Array_from: Array.from,
                    Error: t.Error,
                    Function_toStringFn: t.Function.prototype.toString,
                    Function_toString: e => o.Function_toStringFn.call(e),
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
                    JSON_parse: (...e) => o.JSON_parseFn.call(o.JSON, ...e),
                    JSON_stringify: (...e) => o.JSON_stringifyFn.call(o.JSON, ...e),
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
                        const o = !0 !== t.canNegate || !1 === e.startsWith("!");
                        !1 === o && (e = e.slice(1));
                        const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                        return null !== n ? {
                            re: new this.RegExp(n[1], n[2] || t.flags),
                            expect: o
                        } : void 0 !== t.flags ? {
                            re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                            expect: o
                        } : {
                            pattern: e,
                            expect: o
                        };
                    },
                    testPattern(e, t) {
                        return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
                    },
                    patternToRegex(e, t, o = !1) {
                        if ("" === e) return /^/;
                        const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                        if (null === n) {
                            const n = this.escapeRegexChars(e);
                            return new RegExp(o ? `^${n}$` : n, t);
                        }
                        try {
                            return new RegExp(n[1], n[2] || void 0);
                        } catch (e) {}
                        return /^/;
                    },
                    getExtraArgs(e, t = 0) {
                        const o = e.slice(t).reduce(((e, t, o, n) => {
                            if (0 == (1 & o)) {
                                const t = n[o + 1], r = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                                e.push([ n[o], r ]);
                            }
                            return e;
                        }), []);
                        return this.Object_fromEntries(o);
                    },
                    onIdle: (e, o) => t.requestIdleCallback ? t.requestIdleCallback(e, o) : t.requestAnimationFrame(e)
                };
                if (e.safeSelf = o, void 0 === e.bcSecret) return o;
                const n = new t.BroadcastChannel(e.bcSecret);
                let r = [];
                return o.logLevel = e.logLevel || 1, o.sendToLogger = (e, ...t) => {
                    if (0 === t.length) return;
                    const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                    if (void 0 === r) return n.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: o
                    });
                    r.push({
                        type: e,
                        text: o
                    });
                }, n.onmessage = e => {
                    switch (e.data) {
                      case "iamready!":
                        if (void 0 === r) break;
                        r.forEach((({type: e, text: t}) => n.postMessage({
                            what: "messageToLogger",
                            type: e,
                            text: t
                        }))), r = void 0;
                        break;

                      case "setScriptletLogLevelToOne":
                        o.logLevel = 1;
                        break;

                      case "setScriptletLogLevelToTwo":
                        o.logLevel = 2;
                    }
                }, n.postMessage("areyouready?"), o;
            }(), r = n.makeLogPrefix("prevent-setTimeout", t, o), s = "!" === t.charAt(0);
            s && (t = t.slice(1)), "" === o && (o = void 0);
            let i = !1;
            void 0 !== o && (i = "!" === o.charAt(0), i && (o = o.slice(1)), o = parseInt(o, 10));
            const c = n.patternToRegex(t);
            self.setTimeout = new Proxy(self.setTimeout, {
                apply: function(e, a, l) {
                    const p = l[0] instanceof Function ? String(n.Function_toString(l[0])) : String(l[0]), g = l[1];
                    if ("" === t && void 0 === o) return n.uboLog(r, `Called:\n${p}\n${g}`), Reflect.apply(e, a, l);
                    let f;
                    return "" !== t && (f = c.test(p) !== s), !1 !== f && void 0 !== o && (f = (g === o || isNaN(g) && isNaN(o)) !== i), 
                    f && (l[0] = function() {}, n.uboLog(r, `Prevented:\n${p}\n${g}`)), Reflect.apply(e, a, l);
                },
                get: (e, t, o) => "toString" === t ? e.toString.bind(e) : Reflect.get(e, t, o)
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
                const t = i.slice(e).join("."), o = r.get(t);
                o && l.push(...o);
            }
            r.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || a.add(e);
                }
            };
            for (let t = 0; t < c; t++) e(i.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== n.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = i.slice(t, o).join(".");
                let r = n.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) l.includes(e) || a.add(e);
                }
            }
            n.clear();
        }
        for (const e of a) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, n;
        try {
            t.uBOL_noSetTimeoutIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_noSetTimeoutIf);
            n = t.URL.createObjectURL(r);
            const s = t.document;
            o = s.createElement("script"), o.async = !1, o.src = n, (s.head || s.documentElement || s).append(o);
        } catch (e) {}
        n && (o && o.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_noSetTimeoutIf;
    }
})();