"use strict";

!function() {
    const e = {}, t = [ [ "pay_ent_pass" ], [ "pay_ent_msmp" ], [ "kpwc" ], [ "articlesRead", "when", "scroll keydown" ], [ "_ngViCo-SupporterPromo" ] ], o = new Map([ [ "bonappetit.com", [ 0, 1 ] ], [ "technologyreview.jp", 2 ], [ "androidpolice.com", 3 ], [ "makeuseof.com", 3 ], [ "movieweb.com", 3 ], [ "xda-developers.com", 3 ], [ "thegamer.com", 3 ], [ "cbr.com", 3 ], [ "gamerant.com", 3 ], [ "screenrant.com", 3 ], [ "howtogeek.com", 3 ], [ "thethings.com", 3 ], [ "simpleflying.com", 3 ], [ "dualshockers.com", 3 ], [ "newgrounds.com", 4 ] ]), n = new Map([]), r = new Map([]);
    function s(t = "") {
        if ("string" != typeof t) return;
        const o = function() {
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
        }(), n = o.patternToRegex(t), r = o.getExtraArgs(Array.from(arguments), 1), s = (e, t = 500) => {
            void 0 === s.timer && (s.timer = setTimeout((() => {
                s.timer = void 0, e();
            }), t));
        }, c = () => {
            document.cookie.split(";").forEach((e => {
                const t = e.indexOf("=");
                if (-1 === t) return;
                const o = e.slice(0, t).trim();
                if (!1 === n.test(o)) return;
                const r = o + "=", s = "; domain=" + document.location.hostname, c = "; domain=." + document.location.hostname;
                let i, a;
                const l = document.domain;
                l && (l !== document.location.hostname && (i = "; domain=." + l), l.startsWith("www.") && (a = "; domain=" + l.replace("www", "")));
                const d = "; path=/", g = "; Max-Age=-1000; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                document.cookie = r + g, document.cookie = r + s + g, document.cookie = r + c + g, 
                document.cookie = r + d + g, document.cookie = r + s + d + g, document.cookie = r + c + d + g, 
                void 0 !== i && (document.cookie = r + i + d + g), void 0 !== a && (document.cookie = r + a + d + g);
            }));
        };
        if (c(), window.addEventListener("beforeunload", c), "string" != typeof r.when) return;
        const i = [ "scroll", "keydown" ], a = r.when.split(/\s/);
        for (const e of a) !1 !== i.includes(e) && document.addEventListener(e, (() => {
            s(c);
        }), {
            passive: !0
        });
    }
    const c = [];
    try {
        c.push(...document.location.hostname.split("."));
    } catch (e) {}
    const i = c.length;
    if (0 === i) return;
    const a = new Set, l = [];
    if (0 !== r.size) {
        for (let e = 0; e < i; e++) {
            const t = c.slice(e).join("."), o = r.get(t);
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
        for (let t = 0; t < i; t++) e(c.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== n.size) {
        const e = i - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = c.slice(t, o).join(".");
            let r = n.get(e);
            if (void 0 !== r) {
                "number" == typeof r && (r = [ r ]);
                for (const e of r) l.includes(e) || a.add(e);
            }
        }
        n.clear();
    }
    for (const e of a) try {
        s(...t[e]);
    } catch (e) {}
    t.length = 0;
}();