"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "entity.commercial" ] ], r = new Map([ [ "m.nivod9.tv", 0 ], [ "m.nivod8.tv", 0 ], [ "m.nivod7.tv", 0 ], [ "m.nivod5.tv", 0 ], [ "m1.nivod.tv", 0 ], [ "m.nivod4.tv", 0 ] ]), n = new Map([]), o = new Map([]);
        function s(e = "", t = "") {
            self.eval = new Proxy(self.eval, {
                apply(r, n, o) {
                    const s = Reflect.apply(r, n, o);
                    return "object" == typeof s && i(s, e, t) || s;
                }
            });
        }
        function i(e, t, r, n = {
            matchAll: !0
        }, o = {}) {
            if ("string" != typeof t) return;
            const s = "" !== t ? t.split(/ +/) : [], l = 0 !== s.length && "" !== r ? r.split(/ +/) : [];
            if (!0 !== n.matchAll && !1 === function(e, t = "") {
                const r = a(), n = function() {
                    const e = a(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), r = self.onerror;
                    return self.onerror = function(e, ...n) {
                        return !("string" != typeof e || !e.includes(t)) || (r instanceof Function ? r.call(this, e, ...n) : void 0);
                    }.bind(), t;
                }(), o = new r.Error(n), s = new URL(self.location.href);
                s.hash = "";
                const i = /(.*?@)?(\S+)(:\d+):\d+\)?$/, c = [];
                for (let e of o.stack.split(/[\n\r]+/)) {
                    if (e.includes(n)) continue;
                    e = e.trim();
                    const t = r.RegExp_exec.call(i, e);
                    if (null === t) continue;
                    let o = t[2];
                    o.startsWith("(") && (o = o.slice(1)), o === s.href ? o = "inlineScript" : o.startsWith("<anonymous>") && (o = "injectedScript");
                    let a = void 0 !== t[1] ? t[1].slice(0, -1) : e.slice(0, t.index).trim();
                    a.startsWith("at") && (a = a.slice(2).trim());
                    let l = t[3];
                    c.push(" " + `${a} ${o}${l}:1`.trim());
                }
                c[0] = "stackDepth:" + (c.length - 1);
                const l = c.join("\t"), f = !0 !== e.matchAll && r.testPattern(e, l);
                return ("all" === t || "match" === t && f || "nomatch" === t && !f) && r.uboLog(l.replace(/\t/g, "\n")), 
                f;
            }(n, o.logstack)) return;
            if (void 0 === i.mustProcess && (i.mustProcess = (e, t) => {
                for (const r of t) if (!1 === c(e, r)) return !1;
                return !0;
            }), 0 === s.length) return;
            let f = "nomatch";
            if (i.mustProcess(e, l)) for (const t of s) c(e, t, !0) && (f = "match");
            return "match" === f ? e : void 0;
        }
        function c(e, t, r = !1) {
            let n = e, o = t;
            for (;;) {
                if ("object" != typeof n || null === n) return !1;
                const e = o.indexOf(".");
                if (-1 === e) {
                    if (!1 === r) return n.hasOwnProperty(o);
                    let e = !1;
                    if ("*" === o) for (const t in n) !1 !== n.hasOwnProperty(t) && (delete n[t], e = !0); else n.hasOwnProperty(o) && (delete n[o], 
                    e = !0);
                    return e;
                }
                const t = o.slice(0, e), s = o.slice(e + 1);
                let i = !1;
                if ("[-]" === t && Array.isArray(n)) {
                    let e = n.length;
                    for (;e--; ) !1 !== c(n[e], s) && (n.splice(e, 1), i = !0);
                    return i;
                }
                if ("{-}" === t && n instanceof Object) {
                    for (const e of Object.keys(n)) !1 !== c(n[e], s) && (delete n[e], i = !0);
                    return i;
                }
                if ("[]" === t && Array.isArray(n) || "{}" === t && n instanceof Object || "*" === t && n instanceof Object) {
                    for (const e of Object.keys(n)) !1 !== c(n[e], s, r) && (i = !0);
                    return i;
                }
                if (!1 === n.hasOwnProperty(t)) return !1;
                n = n[t], o = o.slice(e + 1);
            }
        }
        function a() {
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
        const l = [];
        try {
            l.push(...document.location.hostname.split("."));
        } catch (e) {}
        const f = l.length;
        if (0 === f) return;
        const p = new Set, u = [];
        if (0 !== o.size) {
            for (let e = 0; e < f; e++) {
                const t = l.slice(e).join("."), r = o.get(t);
                r && u.push(...r);
            }
            o.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) u.includes(e) || p.add(e);
                }
            };
            for (let t = 0; t < f; t++) e(l.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== n.size) {
            const e = f - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = l.slice(t, r).join(".");
                let o = n.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) u.includes(e) || p.add(e);
                }
            }
            n.clear();
        }
        for (const e of p) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, n;
        try {
            t.uBOL_evaldataPrune = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_evaldataPrune);
            n = t.URL.createObjectURL(o);
            const s = t.document;
            r = s.createElement("script"), r.async = !1, r.src = n, (s.head || s.documentElement || s).append(r);
        } catch (e) {}
        n && (r && r.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_evaldataPrune;
    }
})();