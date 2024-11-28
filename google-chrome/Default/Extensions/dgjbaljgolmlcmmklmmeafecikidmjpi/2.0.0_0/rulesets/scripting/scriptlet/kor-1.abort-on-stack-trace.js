"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "$.prototype.html", "_boom" ], [ "String.prototype.substring", "/checkCookie.+main\\.do/" ], [ "alert", "chk_adBlock" ] ], r = new Map([ [ "m.humoruniv.com", 0 ], [ "www.cultureland.co.kr", 1 ], [ "errornight.com", 2 ] ]), n = new Map([]), o = new Map([]);
        function c(e = "", t = "") {
            if ("string" != typeof e) return;
            const r = a(), n = r.initPattern(t, {
                canNegate: !0
            }), o = r.getExtraArgs(Array.from(arguments), 2);
            "" === t && (o.log = "all");
            const c = function(e, t) {
                const r = t.indexOf(".");
                if (-1 === r) {
                    let r = e[t];
                    return void Object.defineProperty(e, t, {
                        get: function() {
                            if (s(n, o.log)) throw new ReferenceError(i());
                            return r;
                        },
                        set: function(e) {
                            if (s(n, o.log)) throw new ReferenceError(i());
                            r = e;
                        }
                    });
                }
                const a = t.slice(0, r);
                let l = e[a];
                if (t = t.slice(r + 1), l) return void c(l, t);
                const f = Object.getOwnPropertyDescriptor(e, a);
                f && void 0 !== f.set || Object.defineProperty(e, a, {
                    get: function() {
                        return l;
                    },
                    set: function(e) {
                        l = e, e instanceof Object && c(e, t);
                    }
                });
            }, l = window;
            c(l, e);
        }
        function i() {
            const e = a(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), r = self.onerror;
            return self.onerror = function(e, ...n) {
                return !("string" != typeof e || !e.includes(t)) || (r instanceof Function ? r.call(this, e, ...n) : void 0);
            }.bind(), t;
        }
        function s(e, t = "") {
            const r = a(), n = i(), o = new r.Error(n), c = new URL(self.location.href);
            c.hash = "";
            const s = /(.*?@)?(\S+)(:\d+):\d+\)?$/, l = [];
            for (let e of o.stack.split(/[\n\r]+/)) {
                if (e.includes(n)) continue;
                e = e.trim();
                const t = r.RegExp_exec.call(s, e);
                if (null === t) continue;
                let o = t[2];
                o.startsWith("(") && (o = o.slice(1)), o === c.href ? o = "inlineScript" : o.startsWith("<anonymous>") && (o = "injectedScript");
                let i = void 0 !== t[1] ? t[1].slice(0, -1) : e.slice(0, t.index).trim();
                i.startsWith("at") && (i = i.slice(2).trim());
                let a = t[3];
                l.push(" " + `${i} ${o}${a}:1`.trim());
            }
            l[0] = "stackDepth:" + (l.length - 1);
            const f = l.join("\t"), g = !0 !== e.matchAll && r.testPattern(e, f);
            return ("all" === t || "match" === t && g || "nomatch" === t && !g) && r.uboLog(f.replace(/\t/g, "\n")), 
            g;
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
        const g = new Set, p = [];
        if (0 !== o.size) {
            for (let e = 0; e < f; e++) {
                const t = l.slice(e).join("."), r = o.get(t);
                r && p.push(...r);
            }
            o.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) p.includes(e) || g.add(e);
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
                    for (const e of o) p.includes(e) || g.add(e);
                }
            }
            n.clear();
        }
        for (const e of g) try {
            c(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, n;
        try {
            t.uBOL_abortOnStackTrace = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_abortOnStackTrace);
            n = t.URL.createObjectURL(o);
            const c = t.document;
            r = c.createElement("script"), r.async = !1, r.src = n, (c.head || c.documentElement || c).append(r);
        } catch (e) {}
        n && (r && r.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_abortOnStackTrace;
    }
})();