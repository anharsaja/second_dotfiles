"use strict";

!function() {
    const e = {}, t = [ [ "/^_?adb/" ] ], o = new Map([ [ "idnes.cz", 0 ], [ "novinky.cz", 0 ], [ "aktualne.cz", 0 ], [ "reflex.cz", 0 ], [ "zive.cz", 0 ], [ "e15.cz", 0 ], [ "blesk.cz", 0 ], [ "ahaonline.cz", 0 ], [ "super.cz", 0 ], [ "auto.cz", 0 ], [ "maminka.cz", 0 ], [ "autorevue.cz", 0 ], [ "osobnosti.cz", 0 ], [ "lidovky.cz", 0 ], [ "iprima.cz", 0 ], [ "kupi.cz", 0 ], [ "kinobox.cz", 0 ], [ "cnews.cz", 0 ], [ "zeny.cz", 0 ], [ "expres.cz", 0 ], [ "tiscali.cz", 0 ], [ "extra.cz", 0 ], [ "onetv.cz", 0 ], [ "dama.cz", 0 ], [ "g.cz", 0 ], [ "mojecelebrity.cz", 0 ], [ "spisovatele.cz", 0 ], [ "modnipeklo.cz", 0 ], [ "karaoketexty.cz", 0 ], [ "hnonline.sk", 0 ], [ "emimino.cz", 0 ], [ "vitalion.cz", 0 ], [ "mojezdravi.cz", 0 ], [ "abicko.cz", 0 ], [ "arome.cz", 0 ], [ "labuznik.cz", 0 ], [ "fights.cz", 0 ], [ "nasepenize.cz", 0 ] ]), n = new Map([]), r = new Map([]);
    function c(t = "") {
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
        }(), n = o.patternToRegex(t), r = o.getExtraArgs(Array.from(arguments), 1), c = (e, t = 500) => {
            void 0 === c.timer && (c.timer = setTimeout((() => {
                c.timer = void 0, e();
            }), t));
        }, i = () => {
            document.cookie.split(";").forEach((e => {
                const t = e.indexOf("=");
                if (-1 === t) return;
                const o = e.slice(0, t).trim();
                if (!1 === n.test(o)) return;
                const r = o + "=", c = "; domain=" + document.location.hostname, i = "; domain=." + document.location.hostname;
                let s, a;
                const l = document.domain;
                l && (l !== document.location.hostname && (s = "; domain=." + l), l.startsWith("www.") && (a = "; domain=" + l.replace("www", "")));
                const d = "; path=/", g = "; Max-Age=-1000; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                document.cookie = r + g, document.cookie = r + c + g, document.cookie = r + i + g, 
                document.cookie = r + d + g, document.cookie = r + c + d + g, document.cookie = r + i + d + g, 
                void 0 !== s && (document.cookie = r + s + d + g), void 0 !== a && (document.cookie = r + a + d + g);
            }));
        };
        if (i(), window.addEventListener("beforeunload", i), "string" != typeof r.when) return;
        const s = [ "scroll", "keydown" ], a = r.when.split(/\s/);
        for (const e of a) !1 !== s.includes(e) && document.addEventListener(e, (() => {
            c(i);
        }), {
            passive: !0
        });
    }
    const i = [];
    try {
        i.push(...document.location.hostname.split("."));
    } catch (e) {}
    const s = i.length;
    if (0 === s) return;
    const a = new Set, l = [];
    if (0 !== r.size) {
        for (let e = 0; e < s; e++) {
            const t = i.slice(e).join("."), o = r.get(t);
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
        for (let t = 0; t < s; t++) e(i.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== n.size) {
        const e = s - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = i.slice(t, o).join(".");
            let r = n.get(e);
            if (void 0 !== r) {
                "number" == typeof r && (r = [ r ]);
                for (const e of r) l.includes(e) || a.add(e);
            }
        }
        n.clear();
    }
    for (const e of a) try {
        c(...t[e]);
    } catch (e) {}
    t.length = 0;
}();