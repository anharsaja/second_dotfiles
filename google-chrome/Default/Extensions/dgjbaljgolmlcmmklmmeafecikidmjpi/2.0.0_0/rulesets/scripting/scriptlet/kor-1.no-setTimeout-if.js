"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "height && 1 <= height && height <= 20" ], [ "popup_goods" ], [ "piBlock" ], [ "", "15000" ], [ "/\\.displayMessage\\(/" ], [ "banner_book" ], [ "blockCheck2022" ], [ "ad.innerHTML.replace" ], [ "document[_0x" ] ], o = new Map([ [ "m.humoruniv.com", 0 ], [ "10000recipe.com", 1 ], [ "moneytoring.co.kr", 2 ], [ "postincome.co.kr", 2 ], [ "itinformation.kr", 2 ], [ "digitstar77.com", 2 ], [ "filetender.com", 3 ], [ "zuzunza.com", 4 ], [ "klauncher.kr", 4 ], [ "iphonedev.co.kr", 4 ], [ "tistory.com", 4 ], [ "sysnet.pe.kr", 5 ], [ "genshin.gamedot.org", 6 ], [ "stockinfo7.com", 7 ], [ "lover924.net", 8 ], [ "lover925.net", 8 ], [ "lover926.net", 8 ], [ "lover927.net", 8 ], [ "lover928.net", 8 ], [ "lover929.net", 8 ], [ "lover930.net", 8 ], [ "lover931.net", 8 ], [ "lover932.net", 8 ], [ "lover933.net", 8 ] ]), n = new Map([]), r = new Map([]);
        function i(t = "", o = "") {
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
            }(), r = n.makeLogPrefix("prevent-setTimeout", t, o), i = "!" === t.charAt(0);
            i && (t = t.slice(1)), "" === o && (o = void 0);
            let s = !1;
            void 0 !== o && (s = "!" === o.charAt(0), s && (o = o.slice(1)), o = parseInt(o, 10));
            const c = n.patternToRegex(t);
            self.setTimeout = new Proxy(self.setTimeout, {
                apply: function(e, a, l) {
                    const g = l[0] instanceof Function ? String(n.Function_toString(l[0])) : String(l[0]), p = l[1];
                    if ("" === t && void 0 === o) return n.uboLog(r, `Called:\n${g}\n${p}`), Reflect.apply(e, a, l);
                    let f;
                    return "" !== t && (f = c.test(g) !== i), !1 !== f && void 0 !== o && (f = (p === o || isNaN(p) && isNaN(o)) !== s), 
                    f && (l[0] = function() {}, n.uboLog(r, `Prevented:\n${g}\n${p}`)), Reflect.apply(e, a, l);
                },
                get: (e, t, o) => "toString" === t ? e.toString.bind(e) : Reflect.get(e, t, o)
            });
        }
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = s.length;
        if (0 === c) return;
        const a = new Set, l = [];
        if (0 !== r.size) {
            for (let e = 0; e < c; e++) {
                const t = s.slice(e).join("."), o = r.get(t);
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
            for (let t = 0; t < c; t++) e(s.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== n.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = s.slice(t, o).join(".");
                let r = n.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) l.includes(e) || a.add(e);
                }
            }
            n.clear();
        }
        for (const e of a) try {
            i(...t[e]);
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
            const i = t.document;
            o = i.createElement("script"), o.async = !1, o.src = n, (i.head || i.documentElement || i).append(o);
        } catch (e) {}
        n && (o && o.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_noSetTimeoutIf;
    }
})();