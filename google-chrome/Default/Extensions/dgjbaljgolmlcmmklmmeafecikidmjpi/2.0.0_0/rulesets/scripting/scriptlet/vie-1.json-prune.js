"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "0.time_mobile 0.time 0.link_video 0.link_video_mobile 0.link 0.link_mobile 1.time_mobile 1.time 1.link_video 1.link_video_mobile 1.link 1.link_mobile" ], [ "ads" ] ], n = new Map([ [ "luotphim1.net", 0 ], [ "webphim2.com", 0 ], [ "cdnwp.icu", 0 ], [ "phimmoi4s.com", 1 ] ]), r = new Map([]), o = new Map([]);
        function i(e = "", t = "", n = "") {
            const r = c(), o = r.makeLogPrefix("json-prune", e, t, n), i = r.initPattern(n, {
                canNegate: !0
            }), l = r.getExtraArgs(Array.from(arguments), 3);
            JSON.parse = new Proxy(JSON.parse, {
                apply: function(n, c, a) {
                    const f = Reflect.apply(n, c, a);
                    "" === e && r.uboLog(o, r.JSON_stringify(f, null, 2));
                    const u = s(f, e, t, i, l);
                    return void 0 === u ? f : (r.uboLog(o, "Pruned"), r.logLevel > 1 && r.uboLog(o, `After pruning:\n${r.JSON_stringify(u, null, 2)}`), 
                    u);
                }
            });
        }
        function s(e, t, n, r = {
            matchAll: !0
        }, o = {}) {
            if ("string" != typeof t) return;
            const i = "" !== t ? t.split(/ +/) : [], a = 0 !== i.length && "" !== n ? n.split(/ +/) : [];
            if (!0 !== r.matchAll && !1 === function(e, t = "") {
                const n = c(), r = function() {
                    const e = c(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), n = self.onerror;
                    return self.onerror = function(e, ...r) {
                        return !("string" != typeof e || !e.includes(t)) || (n instanceof Function ? n.call(this, e, ...r) : void 0);
                    }.bind(), t;
                }(), o = new n.Error(r), i = new URL(self.location.href);
                i.hash = "";
                const s = /(.*?@)?(\S+)(:\d+):\d+\)?$/, l = [];
                for (let e of o.stack.split(/[\n\r]+/)) {
                    if (e.includes(r)) continue;
                    e = e.trim();
                    const t = n.RegExp_exec.call(s, e);
                    if (null === t) continue;
                    let o = t[2];
                    o.startsWith("(") && (o = o.slice(1)), o === i.href ? o = "inlineScript" : o.startsWith("<anonymous>") && (o = "injectedScript");
                    let c = void 0 !== t[1] ? t[1].slice(0, -1) : e.slice(0, t.index).trim();
                    c.startsWith("at") && (c = c.slice(2).trim());
                    let a = t[3];
                    l.push(" " + `${c} ${o}${a}:1`.trim());
                }
                l[0] = "stackDepth:" + (l.length - 1);
                const a = l.join("\t"), f = !0 !== e.matchAll && n.testPattern(e, a);
                return ("all" === t || "match" === t && f || "nomatch" === t && !f) && n.uboLog(a.replace(/\t/g, "\n")), 
                f;
            }(r, o.logstack)) return;
            if (void 0 === s.mustProcess && (s.mustProcess = (e, t) => {
                for (const n of t) if (!1 === l(e, n)) return !1;
                return !0;
            }), 0 === i.length) return;
            let f = "nomatch";
            if (s.mustProcess(e, a)) for (const t of i) l(e, t, !0) && (f = "match");
            return "match" === f ? e : void 0;
        }
        function c() {
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
                            const t = r[n + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ r[n], o ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(n);
                },
                onIdle: (e, n) => t.requestIdleCallback ? t.requestIdleCallback(e, n) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = n, void 0 === e.bcSecret) return n;
            const r = new t.BroadcastChannel(e.bcSecret);
            let o = [];
            return n.logLevel = e.logLevel || 1, n.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === o) return r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: n
                });
                o.push({
                    type: e,
                    text: n
                });
            }, r.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: e, text: t}) => r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), o = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    n.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    n.logLevel = 2;
                }
            }, r.postMessage("areyouready?"), n;
        }
        function l(e, t, n = !1) {
            let r = e, o = t;
            for (;;) {
                if ("object" != typeof r || null === r) return !1;
                const e = o.indexOf(".");
                if (-1 === e) {
                    if (!1 === n) return r.hasOwnProperty(o);
                    let e = !1;
                    if ("*" === o) for (const t in r) !1 !== r.hasOwnProperty(t) && (delete r[t], e = !0); else r.hasOwnProperty(o) && (delete r[o], 
                    e = !0);
                    return e;
                }
                const t = o.slice(0, e), i = o.slice(e + 1);
                let s = !1;
                if ("[-]" === t && Array.isArray(r)) {
                    let e = r.length;
                    for (;e--; ) !1 !== l(r[e], i) && (r.splice(e, 1), s = !0);
                    return s;
                }
                if ("{-}" === t && r instanceof Object) {
                    for (const e of Object.keys(r)) !1 !== l(r[e], i) && (delete r[e], s = !0);
                    return s;
                }
                if ("[]" === t && Array.isArray(r) || "{}" === t && r instanceof Object || "*" === t && r instanceof Object) {
                    for (const e of Object.keys(r)) !1 !== l(r[e], i, n) && (s = !0);
                    return s;
                }
                if (!1 === r.hasOwnProperty(t)) return !1;
                r = r[t], o = o.slice(e + 1);
            }
        }
        const a = [];
        try {
            a.push(...document.location.hostname.split("."));
        } catch (e) {}
        const f = a.length;
        if (0 === f) return;
        const u = new Set, p = [];
        if (0 !== o.size) {
            for (let e = 0; e < f; e++) {
                const t = a.slice(e).join("."), n = o.get(t);
                n && p.push(...n);
            }
            o.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) p.includes(e) || u.add(e);
                }
            };
            for (let t = 0; t < f; t++) e(a.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== r.size) {
            const e = f - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = a.slice(t, n).join(".");
                let o = r.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) p.includes(e) || u.add(e);
                }
            }
            r.clear();
        }
        for (const e of u) try {
            i(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, r;
        try {
            t.uBOL_jsonPrune = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_jsonPrune);
            r = t.URL.createObjectURL(o);
            const i = t.document;
            n = i.createElement("script"), n.async = !1, n.src = r, (i.head || i.documentElement || i).append(n);
        } catch (e) {}
        r && (n && n.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_jsonPrune;
    }
})();