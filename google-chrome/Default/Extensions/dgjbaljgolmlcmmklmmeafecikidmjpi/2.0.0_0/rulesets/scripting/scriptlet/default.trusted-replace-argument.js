"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "document.getElementById", "0", "null", "condition", "adsense-container" ], [ "document.getElementById", "0", "null", "condition", "modal" ], [ "document.querySelector", "0", "noopFunc", "condition", "adblock" ] ], r = new Map([ [ "copyseeker.net", 0 ], [ "zonebourse.com", 1 ], [ "autosport.com", 2 ], [ "motorsport.com", 2 ], [ "motorsport.uol.com.br", 2 ] ]), n = new Map([]), o = new Map([]);
        function s(e = "", t = "", r = "") {
            if ("" === e) return;
            if ("" === t) return;
            if ("" === r) return;
            const n = c(), o = n.makeLogPrefix("trusted-replace-argument", e, t, r), s = n.getExtraArgs(Array.from(arguments), 3), i = function(e, t) {
                const r = c(), n = r.getExtraArgs(Array.from(arguments), 2);
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
            }(!0, r), a = s.condition ? n.patternToRegex(s.condition) : /^/, l = function(e = "", t = "") {
                let r = globalThis, n = e;
                for (;;) {
                    const e = n.indexOf(".");
                    if (-1 === e) break;
                    if (r = r[n.slice(0, e)], r instanceof Object == 0) return;
                    n = n.slice(e + 1);
                }
                const o = r[n];
                if ("function" == typeof o) return o.prototype && o.prototype.constructor === o ? (r[n] = new Proxy(o, {
                    construct: t
                }), (...e) => Reflect.construct(...e)) : (r[n] = new Proxy(o, {
                    apply: t
                }), (...e) => Reflect.apply(...e));
            }(e, (function(...e) {
                const r = e[e.length - 1];
                if (!1 === Array.isArray(r)) return l(...e);
                const s = r[t];
                return !1 === a.test(s) || (r[t] = i, n.uboLog(o, `Replaced argument:\nBefore: ${JSON.stringify(s)}\nAfter: ${i}`)), 
                l(...e);
            }));
        }
        function c() {
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
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = i.length;
        if (0 === a) return;
        const l = new Set, u = [];
        if (0 !== o.size) {
            for (let e = 0; e < a; e++) {
                const t = i.slice(e).join("."), r = o.get(t);
                r && u.push(...r);
            }
            o.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) u.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(i.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== n.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = i.slice(t, r).join(".");
                let o = n.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) u.includes(e) || l.add(e);
                }
            }
            n.clear();
        }
        for (const e of l) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, n;
        try {
            t.uBOL_trustedReplaceArgument = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_trustedReplaceArgument);
            n = t.URL.createObjectURL(o);
            const s = t.document;
            r = s.createElement("script"), r.async = !1, r.src = n, (s.head || s.documentElement || s).append(r);
        } catch (e) {}
        n && (r && r.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_trustedReplaceArgument;
    }
})();