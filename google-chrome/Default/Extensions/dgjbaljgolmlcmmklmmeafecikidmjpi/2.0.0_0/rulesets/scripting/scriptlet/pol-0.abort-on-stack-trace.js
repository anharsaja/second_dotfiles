"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "WP", "r https" ], [ "WP.prebid", "onLoad" ] ], r = new Map([ [ "www.wp.pl", [ 0, 1 ] ], [ "abczdrowie.pl", 1 ], [ "autokult.pl", 1 ], [ "echirurgia.pl", 1 ], [ "film.wp.pl", 1 ], [ "fotoblogia.pl", 1 ], [ "gadzetomania.pl", 1 ], [ "gry.wp.pl", 1 ], [ "horoskop.wp.pl", 1 ], [ "kobieta.wp.pl", 1 ], [ "komorkomania.pl", 1 ], [ "medycyna24.pl", 1 ], [ "money.pl", 1 ], [ "parenting.pl", 1 ], [ "pogoda.wp.pl", 1 ], [ "tech.wp.pl", 1 ], [ "tv.wp.pl", 1 ], [ "twojeip.wp.pl", 1 ], [ "wiadomosci.wp.pl", 1 ], [ "wideo.wp.pl", 1 ], [ "sportowefakty.wp.pl", 1 ], [ "fitness.wp.pl", 1 ], [ "wawalove.wp.pl", 1 ], [ "gwiazdy.wp.pl", 1 ], [ "teleshow.wp.pl", 1 ] ]), o = new Map([]), n = new Map([]);
        function i(e = "", t = "") {
            if ("string" != typeof e) return;
            const r = a(), o = r.initPattern(t, {
                canNegate: !0
            }), n = r.getExtraArgs(Array.from(arguments), 2);
            "" === t && (n.log = "all");
            const i = function(e, t) {
                const r = t.indexOf(".");
                if (-1 === r) {
                    let r = e[t];
                    return void Object.defineProperty(e, t, {
                        get: function() {
                            if (c(o, n.log)) throw new ReferenceError(s());
                            return r;
                        },
                        set: function(e) {
                            if (c(o, n.log)) throw new ReferenceError(s());
                            r = e;
                        }
                    });
                }
                const a = t.slice(0, r);
                let l = e[a];
                if (t = t.slice(r + 1), l) return void i(l, t);
                const p = Object.getOwnPropertyDescriptor(e, a);
                p && void 0 !== p.set || Object.defineProperty(e, a, {
                    get: function() {
                        return l;
                    },
                    set: function(e) {
                        l = e, e instanceof Object && i(e, t);
                    }
                });
            }, l = window;
            i(l, e);
        }
        function s() {
            const e = a(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), r = self.onerror;
            return self.onerror = function(e, ...o) {
                return !("string" != typeof e || !e.includes(t)) || (r instanceof Function ? r.call(this, e, ...o) : void 0);
            }.bind(), t;
        }
        function c(e, t = "") {
            const r = a(), o = s(), n = new r.Error(o), i = new URL(self.location.href);
            i.hash = "";
            const c = /(.*?@)?(\S+)(:\d+):\d+\)?$/, l = [];
            for (let e of n.stack.split(/[\n\r]+/)) {
                if (e.includes(o)) continue;
                e = e.trim();
                const t = r.RegExp_exec.call(c, e);
                if (null === t) continue;
                let n = t[2];
                n.startsWith("(") && (n = n.slice(1)), n === i.href ? n = "inlineScript" : n.startsWith("<anonymous>") && (n = "injectedScript");
                let s = void 0 !== t[1] ? t[1].slice(0, -1) : e.slice(0, t.index).trim();
                s.startsWith("at") && (s = s.slice(2).trim());
                let a = t[3];
                l.push(" " + `${s} ${n}${a}:1`.trim());
            }
            l[0] = "stackDepth:" + (l.length - 1);
            const p = l.join("\t"), f = !0 !== e.matchAll && r.testPattern(e, p);
            return ("all" === t || "match" === t && f || "nomatch" === t && !f) && r.uboLog(p.replace(/\t/g, "\n")), 
            f;
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
        }
        const l = [];
        try {
            l.push(...document.location.hostname.split("."));
        } catch (e) {}
        const p = l.length;
        if (0 === p) return;
        const f = new Set, g = [];
        if (0 !== n.size) {
            for (let e = 0; e < p; e++) {
                const t = l.slice(e).join("."), r = n.get(t);
                r && g.push(...r);
            }
            n.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) g.includes(e) || f.add(e);
                }
            };
            for (let t = 0; t < p; t++) e(l.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== o.size) {
            const e = p - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = l.slice(t, r).join(".");
                let n = o.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) g.includes(e) || f.add(e);
                }
            }
            o.clear();
        }
        for (const e of f) try {
            i(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, o;
        try {
            t.uBOL_abortOnStackTrace = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_abortOnStackTrace);
            o = t.URL.createObjectURL(n);
            const i = t.document;
            r = i.createElement("script"), r.async = !1, r.src = o, (i.head || i.documentElement || i).append(r);
        } catch (e) {}
        o && (r && r.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_abortOnStackTrace;
    }
})();