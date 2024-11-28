"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [], [ "()=>r(t)", "15000" ], [ "", "30000", "0.0001" ], [ "js-article-check-visibility", "2000" ], [ "timer" ], [ "zat_tick" ] ], r = new Map([ [ "autoinfo24.ru", 0 ], [ "dp73.spb.ru", 0 ], [ "dropmefiles.com.ua", 0 ], [ "dropmefiles.net", 0 ], [ "gtavicecity.ru", 0 ], [ "pes-files.ru", 0 ], [ "dzen.ru", 1 ], [ "tv-kanali.online", 2 ], [ "rbc.ru", 3 ], [ "freetp.org", 4 ], [ "freetp.ru", 4 ], [ "online-fix.me", 4 ], [ "4pda.to", 5 ] ]), o = new Map([]), n = new Map([]);
        function s(t = "", r = "", o = "") {
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
            let s = "*" !== r ? parseInt(r, 10) : -1;
            (isNaN(s) || !1 === isFinite(s)) && (s = 1e3);
            let i = parseFloat(o);
            i = !1 === isNaN(i) && isFinite(i) ? Math.min(Math.max(i, .001), 50) : .05, self.setTimeout = new Proxy(self.setTimeout, {
                apply: function(e, t, r) {
                    const [o, c] = r;
                    return -1 !== s && c !== s || !n.test(o.toString()) || (r[1] = c * i), e.apply(t, r);
                }
            });
        }
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = i.length;
        if (0 === c) return;
        const a = new Set, l = [];
        if (0 !== n.size) {
            for (let e = 0; e < c; e++) {
                const t = i.slice(e).join("."), r = n.get(t);
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
            for (let t = 0; t < c; t++) e(i.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== o.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = i.slice(t, r).join(".");
                let n = o.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) l.includes(e) || a.add(e);
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
        let r, o;
        try {
            t.uBOL_adjustSetTimeout = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_adjustSetTimeout);
            o = t.URL.createObjectURL(n);
            const s = t.document;
            r = s.createElement("script"), r.async = !1, r.src = o, (s.head || s.documentElement || s).append(r);
        } catch (e) {}
        o && (r && r.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_adjustSetTimeout;
    }
})();