"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ '[id="aswift_0_host"], [id="aswift_1_host"], [id="aswift_2_host"], [id="aswift_3_host"], [id="aswift_4_host"], [id="aswift_5_host"]', "clip-path", "none" ], [ "#btx1, #btx2, #wg-genx > .mediafire", "visibility", "visible" ], [ '[id*="div-gpt-ad-"], [id*="google_ads_"], #featuredimage, [href*="random-affiliate.atimaze.com"]', "clip-path", "none" ], [ 'a img:not([src="images/main_logo_inverted.png"])', "visibility", "visible" ] ], o = new Map([ [ "decrypt.day", 0 ], [ "techcyan.com", 1 ], [ "kiktu.com", 1 ], [ "upshrink.com", 1 ], [ "trangchu.news", 1 ], [ "banaraswap.in", 1 ], [ "jytechs.in", 2 ], [ "dev.miuiflash.com", 2 ], [ "djxmaza.in", 2 ], [ "thecubexguide.com", 2 ], [ "download.megaup.net", 3 ] ]), n = new Map([]), r = new Map([]);
        function i(t, ...o) {
            if ("string" != typeof t) return;
            if ("" === t) return;
            const n = e => e.replace(/-[a-z]/g, (e => e.charAt(1).toUpperCase())), r = new Map;
            for (let e = 0; e < o.length && "string" == typeof o[e + 0] && "" !== o[e + 0] && "string" == typeof o[e + 1]; e += 2) r.set(n(o[e + 0]), o[e + 1]);
            const i = function() {
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
            }(), s = i.makeLogPrefix("spoof-css", t, ...o), c = (e.canDebug && r.get("debug"), 
            [ "cssText", "length", "parentRule" ]), a = (e, t) => {
                const o = n(e), c = r.has(o), a = c ? r.get(o) : t;
                return c && i.uboLog(s, `Spoofing ${e} to ${a}`), a;
            }, l = (e, t, o) => {
                const n = e.bind(t);
                return Object.defineProperty(n, "name", {
                    value: o
                }), Object.defineProperty(n, "toString", {
                    value: () => `function ${o}() { [native code] }`
                }), n;
            };
            self.getComputedStyle = new Proxy(self.getComputedStyle, {
                apply: function(e, o, n) {
                    const i = Reflect.apply(e, o, n);
                    if (!1 === new WeakSet(document.querySelectorAll(t)).has(n[0])) return i;
                    return new Proxy(i, {
                        get: (e, t, o) => "function" == typeof e[t] ? "getPropertyValue" === t ? l((function(t) {
                            return a(t, e[t]);
                        }), e, "getPropertyValue") : l(e[t], e, t) : c.includes(t) ? Reflect.get(e, t) : a(t, Reflect.get(e, t, o)),
                        getOwnPropertyDescriptor: (e, t) => r.has(t) ? {
                            configurable: !0,
                            enumerable: !0,
                            value: r.get(t),
                            writable: !0
                        } : Reflect.getOwnPropertyDescriptor(e, t)
                    });
                },
                get: (e, t, o) => "toString" === t ? e.toString.bind(e) : Reflect.get(e, t, o)
            }), Element.prototype.getBoundingClientRect = new Proxy(Element.prototype.getBoundingClientRect, {
                apply: function(e, o, n) {
                    const i = Reflect.apply(e, o, n);
                    if (!1 === new WeakSet(document.querySelectorAll(t)).has(o)) return i;
                    let {height: s, width: c} = i;
                    return r.has("width") && (c = parseFloat(r.get("width"))), r.has("height") && (s = parseFloat(r.get("height"))), 
                    new self.DOMRect(i.x, i.y, c, s);
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
            t.uBOL_spoofCSS = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_spoofCSS);
            n = t.URL.createObjectURL(r);
            const i = t.document;
            o = i.createElement("script"), o.async = !1, o.src = n, (i.head || i.documentElement || i).append(o);
        } catch (e) {}
        n && (o && o.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_spoofCSS;
    }
})();