"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "type=ad", ".m3u8" ] ], n = new Map([ [ "vix.com", 0 ] ]), r = new Map([]), s = new Map([]);
        function o(t = "", n = "") {
            if ("string" != typeof t) return;
            const r = function() {
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
                        const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                        return null !== r ? {
                            re: new this.RegExp(r[1], r[2] || t.flags),
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
                        const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                        if (null === r) {
                            const r = this.escapeRegexChars(e);
                            return new RegExp(n ? `^${r}$` : r, t);
                        }
                        try {
                            return new RegExp(r[1], r[2] || void 0);
                        } catch (e) {}
                        return /^/;
                    },
                    getExtraArgs(e, t = 0) {
                        const n = e.slice(t).reduce(((e, t, n, r) => {
                            if (0 == (1 & n)) {
                                const t = r[n + 1], s = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                                e.push([ r[n], s ]);
                            }
                            return e;
                        }), []);
                        return this.Object_fromEntries(n);
                    },
                    onIdle: (e, n) => t.requestIdleCallback ? t.requestIdleCallback(e, n) : t.requestAnimationFrame(e)
                };
                if (e.safeSelf = n, void 0 === e.bcSecret) return n;
                const r = new t.BroadcastChannel(e.bcSecret);
                let s = [];
                return n.logLevel = e.logLevel || 1, n.sendToLogger = (e, ...t) => {
                    if (0 === t.length) return;
                    const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                    if (void 0 === s) return r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: n
                    });
                    s.push({
                        type: e,
                        text: n
                    });
                }, r.onmessage = e => {
                    switch (e.data) {
                      case "iamready!":
                        if (void 0 === s) break;
                        s.forEach((({type: e, text: t}) => r.postMessage({
                            what: "messageToLogger",
                            type: e,
                            text: t
                        }))), s = void 0;
                        break;

                      case "setScriptletLogLevelToOne":
                        n.logLevel = 1;
                        break;

                      case "setScriptletLogLevelToTwo":
                        n.logLevel = 2;
                    }
                }, r.postMessage("areyouready?"), n;
            }(), s = r.makeLogPrefix("m3u-prune", t, n), o = [], i = e => {
                if ("" === e) return /^/;
                const t = /^\/(.+)\/([gms]*)$/.exec(e);
                if (null !== t) {
                    let e = t[2] || "";
                    return e.includes("m") && (e += "s"), new RegExp(t[1], e);
                }
                return new RegExp(e.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*+/g, ".*?"));
            }, c = i(t), a = i(n), l = (e, t) => !1 !== e[t].startsWith('#EXT-X-CUE:TYPE="SpliceOut"') && (o.push(`\t${e[t]}`), 
            e[t] = void 0, e[t += 1].startsWith("#EXT-X-ASSET:CAID") && (o.push(`\t${e[t]}`), 
            e[t] = void 0, t += 1), e[t].startsWith("#EXT-X-SCTE35:") && (o.push(`\t${e[t]}`), 
            e[t] = void 0, t += 1), e[t].startsWith("#EXT-X-CUE-IN") && (o.push(`\t${e[t]}`), 
            e[t] = void 0, t += 1), e[t].startsWith("#EXT-X-SCTE35:") && (o.push(`\t${e[t]}`), 
            e[t] = void 0, t += 1), !0), p = (e, t) => !1 !== e[t].startsWith("#EXTINF") && !1 !== c.test(e[t + 1]) && (o.push("Discarding", `\t${e[t]}, \t${e[t + 1]}`), 
            e[t] = e[t + 1] = void 0, e[t += 2].startsWith("#EXT-X-DISCONTINUITY") && (o.push(`\t${e[t]}`), 
            e[t] = void 0, t += 1), !0), u = e => {
                if (!1 === /^\s*#EXTM3U/.test(e)) return e;
                if ("" === t) return r.uboLog(` Content:\n${e}`), e;
                if (c.multiline) {
                    for (c.lastIndex = 0; ;) {
                        const t = c.exec(e);
                        if (null === t) break;
                        let n = t[0], r = e.slice(0, t.index);
                        if (!1 === /^[\n\r]+/.test(n) && !1 === /[\n\r]+$/.test(r)) {
                            const e = /[^\n\r]+$/.exec(r);
                            null !== e && (r = r.slice(0, e.index), n = e[0] + n);
                        }
                        let s = e.slice(t.index + t[0].length);
                        if (!1 === /[\n\r]+$/.test(n) && !1 === /^[\n\r]+/.test(s)) {
                            const e = /^[^\n\r]+/.exec(s);
                            null !== e && (s = s.slice(e.index), n += n + e[0]);
                        }
                        if (e = r.trim() + "\n" + s.trim(), c.lastIndex = r.length + 1, o.push("Discarding", ...n.split(/\n+/).map((e => `\t${e}`))), 
                        !1 === c.global) break;
                    }
                    return e;
                }
                const n = e.split(/\n\r|\n|\r/);
                for (let e = 0; e < n.length; e++) void 0 !== n[e] && (l(n, e) || p(n, e));
                return n.filter((e => void 0 !== e)).join("\n");
            }, f = e => "string" == typeof e ? e : e instanceof Request ? e.url : String(e), g = self.fetch;
            self.fetch = new Proxy(self.fetch, {
                apply: function(e, t, n) {
                    return !1 === a.test(f(n[0])) ? Reflect.apply(e, t, n) : g(...n).then((e => e.text().then((t => {
                        const n = new Response(u(t), {
                            status: e.status,
                            statusText: e.statusText,
                            headers: e.headers
                        });
                        return 0 !== o.length && (o.unshift(s), r.uboLog(o.join("\n"))), n;
                    }))));
                }
            }), self.XMLHttpRequest.prototype.open = new Proxy(self.XMLHttpRequest.prototype.open, {
                apply: async (e, t, n) => (!1 === a.test(f(n[1])) || t.addEventListener("readystatechange", (function() {
                    if (4 !== t.readyState) return;
                    const e = t.responseType;
                    if ("" !== e && "text" !== e) return;
                    const n = t.responseText, i = u(n);
                    i !== n && (Object.defineProperty(t, "response", {
                        value: i
                    }), Object.defineProperty(t, "responseText", {
                        value: i
                    }), 0 !== o.length && (o.unshift(s), r.uboLog(o.join("\n"))));
                })), Reflect.apply(e, t, n))
            });
        }
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = i.length;
        if (0 === c) return;
        const a = new Set, l = [];
        if (0 !== s.size) {
            for (let e = 0; e < c; e++) {
                const t = i.slice(e).join("."), n = s.get(t);
                n && l.push(...n);
            }
            s.clear();
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
        if (0 !== r.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = i.slice(t, n).join(".");
                let s = r.get(e);
                if (void 0 !== s) {
                    "number" == typeof s && (s = [ s ]);
                    for (const e of s) l.includes(e) || a.add(e);
                }
            }
            r.clear();
        }
        for (const e of a) try {
            o(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, r;
        try {
            t.uBOL_m3uPrune = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const s = new t.Blob(...t.uBOL_m3uPrune);
            r = t.URL.createObjectURL(s);
            const o = t.document;
            n = o.createElement("script"), n.async = !1, n.src = r, (o.head || o.documentElement || o).append(n);
        } catch (e) {}
        r && (n && n.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_m3uPrune;
    }
})();