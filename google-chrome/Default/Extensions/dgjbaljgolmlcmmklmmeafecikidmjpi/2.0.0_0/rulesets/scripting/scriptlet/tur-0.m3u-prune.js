"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "/daioncdn\\.net\\/.*\\/ad\\//", "/daioncdn\\.net\\/.*\\.m3u8/" ] ], r = new Map([ [ "tv8bucuk.com", 0 ], [ "tabii.com", 0 ], [ "trtizle.com", 0 ], [ "ntv.com.tr", 0 ], [ "tlctv.com.tr", 0 ], [ "dmax.com.tr", 0 ], [ "haberturk.com", 0 ], [ "bloomberght.com", 0 ], [ "aspor.com.tr", 0 ], [ "atv.com.tr", 0 ], [ "beyaztv.com.tr", 0 ], [ "kanal7.com", 0 ], [ "kanald.com.tr", 0 ], [ "showtv.com.tr", 0 ], [ "startv.com.tr", 0 ], [ "teve2.com.tr", 0 ], [ "tv8.com.tr", 0 ] ]), n = new Map([]), o = new Map([]);
        function s(t = "", r = "") {
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
            }(), o = n.makeLogPrefix("m3u-prune", t, r), s = [], i = e => {
                if ("" === e) return /^/;
                const t = /^\/(.+)\/([gms]*)$/.exec(e);
                if (null !== t) {
                    let e = t[2] || "";
                    return e.includes("m") && (e += "s"), new RegExp(t[1], e);
                }
                return new RegExp(e.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*+/g, ".*?"));
            }, c = i(t), a = i(r), l = (e, t) => !1 !== e[t].startsWith('#EXT-X-CUE:TYPE="SpliceOut"') && (s.push(`\t${e[t]}`), 
            e[t] = void 0, e[t += 1].startsWith("#EXT-X-ASSET:CAID") && (s.push(`\t${e[t]}`), 
            e[t] = void 0, t += 1), e[t].startsWith("#EXT-X-SCTE35:") && (s.push(`\t${e[t]}`), 
            e[t] = void 0, t += 1), e[t].startsWith("#EXT-X-CUE-IN") && (s.push(`\t${e[t]}`), 
            e[t] = void 0, t += 1), e[t].startsWith("#EXT-X-SCTE35:") && (s.push(`\t${e[t]}`), 
            e[t] = void 0, t += 1), !0), p = (e, t) => !1 !== e[t].startsWith("#EXTINF") && !1 !== c.test(e[t + 1]) && (s.push("Discarding", `\t${e[t]}, \t${e[t + 1]}`), 
            e[t] = e[t + 1] = void 0, e[t += 2].startsWith("#EXT-X-DISCONTINUITY") && (s.push(`\t${e[t]}`), 
            e[t] = void 0, t += 1), !0), u = e => {
                if (!1 === /^\s*#EXTM3U/.test(e)) return e;
                if ("" === t) return n.uboLog(` Content:\n${e}`), e;
                if (c.multiline) {
                    for (c.lastIndex = 0; ;) {
                        const t = c.exec(e);
                        if (null === t) break;
                        let r = t[0], n = e.slice(0, t.index);
                        if (!1 === /^[\n\r]+/.test(r) && !1 === /[\n\r]+$/.test(n)) {
                            const e = /[^\n\r]+$/.exec(n);
                            null !== e && (n = n.slice(0, e.index), r = e[0] + r);
                        }
                        let o = e.slice(t.index + t[0].length);
                        if (!1 === /[\n\r]+$/.test(r) && !1 === /^[\n\r]+/.test(o)) {
                            const e = /^[^\n\r]+/.exec(o);
                            null !== e && (o = o.slice(e.index), r += r + e[0]);
                        }
                        if (e = n.trim() + "\n" + o.trim(), c.lastIndex = n.length + 1, s.push("Discarding", ...r.split(/\n+/).map((e => `\t${e}`))), 
                        !1 === c.global) break;
                    }
                    return e;
                }
                const r = e.split(/\n\r|\n|\r/);
                for (let e = 0; e < r.length; e++) void 0 !== r[e] && (l(r, e) || p(r, e));
                return r.filter((e => void 0 !== e)).join("\n");
            }, f = e => "string" == typeof e ? e : e instanceof Request ? e.url : String(e), g = self.fetch;
            self.fetch = new Proxy(self.fetch, {
                apply: function(e, t, r) {
                    return !1 === a.test(f(r[0])) ? Reflect.apply(e, t, r) : g(...r).then((e => e.text().then((t => {
                        const r = new Response(u(t), {
                            status: e.status,
                            statusText: e.statusText,
                            headers: e.headers
                        });
                        return 0 !== s.length && (s.unshift(o), n.uboLog(s.join("\n"))), r;
                    }))));
                }
            }), self.XMLHttpRequest.prototype.open = new Proxy(self.XMLHttpRequest.prototype.open, {
                apply: async (e, t, r) => (!1 === a.test(f(r[1])) || t.addEventListener("readystatechange", (function() {
                    if (4 !== t.readyState) return;
                    const e = t.responseType;
                    if ("" !== e && "text" !== e) return;
                    const r = t.responseText, i = u(r);
                    i !== r && (Object.defineProperty(t, "response", {
                        value: i
                    }), Object.defineProperty(t, "responseText", {
                        value: i
                    }), 0 !== s.length && (s.unshift(o), n.uboLog(s.join("\n"))));
                })), Reflect.apply(e, t, r))
            });
        }
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = i.length;
        if (0 === c) return;
        const a = new Set, l = [];
        if (0 !== o.size) {
            for (let e = 0; e < c; e++) {
                const t = i.slice(e).join("."), r = o.get(t);
                r && l.push(...r);
            }
            o.clear();
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
        if (0 !== n.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = i.slice(t, r).join(".");
                let o = n.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) l.includes(e) || a.add(e);
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
        let r, n;
        try {
            t.uBOL_m3uPrune = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_m3uPrune);
            n = t.URL.createObjectURL(o);
            const s = t.document;
            r = s.createElement("script"), r.async = !1, r.src = n, (s.head || s.documentElement || s).append(r);
        } catch (e) {}
        n && (r && r.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_m3uPrune;
    }
})();