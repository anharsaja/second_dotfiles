"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "sec--", "*", "0.001" ], [ "money--skip", "", "0.02" ], [ "after-ads", "*", "0.001" ], [ "#rekgecyen", "*", "0.02" ], [ "reklam", "*", "0.02" ], [ "timeleft", "*", "0.02" ], [ "timer" ], [], [ "advert", "*", "0.001" ] ], r = new Map([ [ "filmizlehdfilm.com", 0 ], [ "hdfilmizlesene.org", 0 ], [ "hdsinemax.com", 1 ], [ "elzemfilm.org", 1 ], [ "tafdi3.com", 2 ], [ "tafdi4.com", 2 ], [ "tafdi5.com", 2 ], [ "filmizletv2.com", 3 ], [ "filmizletv18.com", 3 ], [ "fullhdfilm.pro", 4 ], [ "hdfilmifullizle.com", 4 ], [ "yabancidizi.pro", 5 ], [ "hdfilmfullizle.com", 6 ], [ "turkturk.org", 7 ], [ "turkturk.net", 7 ], [ "itemci.com", 8 ] ]), o = new Map([ [ "filmizletv", [ 0, 3 ] ], [ "hdfilmcehennemi", 0 ], [ "fullhdfilmizle", 4 ] ]), n = new Map([]);
        function i(t = "", r = "", o = "") {
            if ("string" != typeof t) return;
            const n = function() {
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
                        const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                        return null !== o ? {
                            re: new this.RegExp(o[1], o[2] || t.flags),
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
                        const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                        if (null === o) {
                            const o = this.escapeRegexChars(e);
                            return new RegExp(r ? `^${o}$` : o, t);
                        }
                        try {
                            return new RegExp(o[1], o[2] || void 0);
                        } catch (e) {}
                        return /^/;
                    },
                    getExtraArgs(e, t = 0) {
                        const r = e.slice(t).reduce(((e, t, r, o) => {
                            if (0 == (1 & r)) {
                                const t = o[r + 1], n = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                                e.push([ o[r], n ]);
                            }
                            return e;
                        }), []);
                        return this.Object_fromEntries(r);
                    },
                    onIdle: (e, r) => t.requestIdleCallback ? t.requestIdleCallback(e, r) : t.requestAnimationFrame(e)
                };
                if (e.safeSelf = r, void 0 === e.bcSecret) return r;
                const o = new t.BroadcastChannel(e.bcSecret);
                let n = [];
                return r.logLevel = e.logLevel || 1, r.sendToLogger = (e, ...t) => {
                    if (0 === t.length) return;
                    const r = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                    if (void 0 === n) return o.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: r
                    });
                    n.push({
                        type: e,
                        text: r
                    });
                }, o.onmessage = e => {
                    switch (e.data) {
                      case "iamready!":
                        if (void 0 === n) break;
                        n.forEach((({type: e, text: t}) => o.postMessage({
                            what: "messageToLogger",
                            type: e,
                            text: t
                        }))), n = void 0;
                        break;

                      case "setScriptletLogLevelToOne":
                        r.logLevel = 1;
                        break;

                      case "setScriptletLogLevelToTwo":
                        r.logLevel = 2;
                    }
                }, o.postMessage("areyouready?"), r;
            }().patternToRegex(t);
            let i = "*" !== r ? parseInt(r, 10) : -1;
            (isNaN(i) || !1 === isFinite(i)) && (i = 1e3);
            let s = parseFloat(o);
            s = !1 === isNaN(s) && isFinite(s) ? Math.min(Math.max(s, .001), 50) : .05, self.setInterval = new Proxy(self.setInterval, {
                apply: function(e, t, r) {
                    const [o, c] = r;
                    return -1 !== i && c !== i || !n.test(o.toString()) || (r[1] = c * s), e.apply(t, r);
                }
            });
        }
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = s.length;
        if (0 === c) return;
        const a = new Set, l = [];
        if (0 !== n.size) {
            for (let e = 0; e < c; e++) {
                const t = s.slice(e).join("."), r = n.get(t);
                r && l.push(...r);
            }
            n.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || a.add(e);
                }
            };
            for (let t = 0; t < c; t++) e(s.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== o.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = s.slice(t, r).join(".");
                let n = o.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) l.includes(e) || a.add(e);
                }
            }
            o.clear();
        }
        for (const e of a) try {
            i(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, o;
        try {
            t.uBOL_adjustSetInterval = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_adjustSetInterval);
            o = t.URL.createObjectURL(n);
            const i = t.document;
            r = i.createElement("script"), r.async = !1, r.src = o, (i.head || i.documentElement || i).append(r);
        } catch (e) {}
        o && (r && r.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_adjustSetInterval;
    }
})();