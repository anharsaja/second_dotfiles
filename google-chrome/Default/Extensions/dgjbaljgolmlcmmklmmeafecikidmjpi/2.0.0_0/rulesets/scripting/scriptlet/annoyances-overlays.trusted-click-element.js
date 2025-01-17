"use strict";

!function() {
    const e = {}, t = [ [ '.chakra-portal .chakra-modal__content-container > section.chakra-modal__content > .chakra-modal__header:has(> .chakra-stack > a[href^="https://www.deezer.com/payment/go.php?origin=paywall_pressure"]) + button.chakra-modal__close-btn' ], [ '[data-automation="continue-to-ads-btn"]', "", "10000" ], [ ".z_share_popover div.gap_2 > button.mt_24px.rounded_100vh + button.text_tint.disabled\\:opacity_0\\.4.h_50px" ], [ '[data-testid="consentBanner"] > button[data-testid="banner-button"]', "", "1000" ], [ '[data-testid="consentBanner"] > button[data-testid="banner-button"]', "", "1100" ], [ '[data-testid="consentBanner"] > button[data-testid="banner-button"]', "", "1200" ], [ '[data-testid="consentBanner"] > button[data-testid="banner-button"]', "", "1300" ] ], o = new Map([ [ "deezer.com", 0 ], [ "moovitapp.com", 1 ], [ "teller.jp", 2 ], [ "bbc.com", [ 3, 4, 5, 6 ] ] ]), r = new Map([]), n = new Map([]);
    function s(t = "", o = "", r = "") {
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
                    const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== r ? {
                        re: new this.RegExp(r[1], r[2] || t.flags),
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
                    const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === r) {
                        const r = this.escapeRegexChars(e);
                        return new RegExp(o ? `^${r}$` : r, t);
                    }
                    try {
                        return new RegExp(r[1], r[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const o = e.slice(t).reduce(((e, t, o, r) => {
                        if (0 == (1 & o)) {
                            const t = r[o + 1], n = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ r[o], n ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(o);
                },
                onIdle: (e, o) => t.requestIdleCallback ? t.requestIdleCallback(e, o) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = o, void 0 === e.bcSecret) return o;
            const r = new t.BroadcastChannel(e.bcSecret);
            let n = [];
            return o.logLevel = e.logLevel || 1, o.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === n) return r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: o
                });
                n.push({
                    type: e,
                    text: o
                });
            }, r.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === n) break;
                    n.forEach((({type: e, text: t}) => r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), n = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    o.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    o.logLevel = 2;
                }
            }, r.postMessage("areyouready?"), o;
        }(), s = n.makeLogPrefix("trusted-click-element", t, o, r);
        if ("" !== o) {
            const e = o.split(",").map((e => {
                const t = e.indexOf(":"), o = -1 !== t ? e.slice(0, t) : e, r = o.startsWith("!"), n = r ? o.slice(1) : o, s = -1 !== t ? e.slice(t + 1).trim() : "";
                if ("" === s) return;
                const i = {
                    not: r,
                    type: n
                }, c = /^\/(.+)\/(i?)$/.exec(s);
                if (null !== c) return i.re = new RegExp(c[1], c[2] || void 0), i;
                const a = s.indexOf("="), l = -1 !== a ? s.slice(0, a).trim() : s, d = -1 !== a ? s.slice(a + 1).trim() : "";
                return i.re = new RegExp(`^${this.escapeRegexChars(l)}=${this.escapeRegexChars(d)}`), 
                i;
            })).filter((e => void 0 !== e)), t = e.some((e => "cookie" === e.type)) ? document.cookie.split(/\s*;\s*/).map((e => {
                const t = e.indexOf("=");
                if (0 !== t) return -1 === t ? `${e.trim()}=` : {
                    key: e.slice(0, t).trim(),
                    value: e.slice(t + 1).trim()
                };
            })).filter((e => void 0 !== e)) : [], r = e.some((e => "localStorage" === e.type)) ? function(e = "localStorage") {
                const t = self[e];
                for (let e = 0; e < t.length; e++) {
                    const o = t.key(e);
                    return {
                        key: o,
                        value: t.getItem(o)
                    };
                }
                return [];
            }() : [], n = (e, t) => {
                for (const {key: o, value: r} of e) if (t.test(`${o}=${r}`)) return !0;
                return !1;
            };
            for (const {not: o, type: s, re: i} of e) switch (s) {
              case "cookie":
                if (n(t, i) === o) return;
                break;

              case "localStorage":
                if (n(r, i) === o) return;
            }
        }
        const i = (e, t = document) => {
            const o = e.indexOf(" >>> ");
            if (-1 === o) return t.querySelector(e);
            const r = e.slice(0, o).trim(), n = e.slice(o + 5).trim(), s = t.querySelector(r);
            if (null === s) return null;
            const c = (e => e.openOrClosedShadowRoot ? e.openOrClosedShadowRoot : "object" == typeof chrome && chrome.dom && chrome.dom.openOrClosedShadowRoot ? chrome.dom.openOrClosedShadowRoot(e) : null)(s);
            return c && i(n, c);
        }, c = t.split(/\s*,\s*/).filter((e => {
            try {
                i(e);
            } catch (e) {
                return !1;
            }
            return !0;
        }));
        if (0 === c.length) return;
        const a = parseInt(r, 10) || 1, l = Date.now(), d = l + 1e4;
        let u = 1 !== c.length ? l : l + a;
        const p = () => {
            c.length = 0, f.stop(), g.stop();
        }, f = e => {
            if (0 === c.length) return n.uboLog(s, "Completed"), p();
            const t = Date.now();
            if (t >= d) return n.uboLog(s, "Timed out"), p();
            e && g();
            const o = Math.max(e ? d - t : u - t, 1);
            f.timer = setTimeout((() => {
                f.timer = void 0, m();
            }), o), n.uboLog(s, `Waiting for ${c[0]}...`);
        };
        f.stop = () => {
            void 0 !== f.timer && (clearTimeout(f.timer), f.timer = void 0);
        };
        const g = () => {
            void 0 === g.observer && (g.observer = new MutationObserver((() => {
                void 0 === g.timer && (g.timer = setTimeout((() => {
                    g.timer = void 0, m();
                }), 20));
            })), g.observer.observe(document, {
                attributes: !0,
                childList: !0,
                subtree: !0
            }));
        };
        g.stop = () => {
            void 0 !== g.timer && (clearTimeout(g.timer), g.timer = void 0), g.observer && (g.observer.disconnect(), 
            g.observer = void 0);
        };
        const m = () => {
            if (f.stop(), Date.now() < u) return f();
            const e = c.shift();
            if (void 0 === e) return p();
            const t = i(e);
            if (null === t) return c.unshift(e), f(!0);
            n.uboLog(s, `Clicked ${e}`), t.click(), u += a, f();
        };
        !function(e) {
            if (document.documentElement) return void e();
            const t = new MutationObserver((() => {
                t.disconnect(), e();
            }));
            t.observe(document, {
                childList: !0
            });
        }(m);
    }
    const i = [];
    try {
        i.push(...document.location.hostname.split("."));
    } catch (e) {}
    const c = i.length;
    if (0 === c) return;
    const a = new Set, l = [];
    if (0 !== n.size) {
        for (let e = 0; e < c; e++) {
            const t = i.slice(e).join("."), o = n.get(t);
            o && l.push(...o);
        }
        n.clear();
    }
    if (0 !== o.size) {
        const e = e => {
            let t = o.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) l.includes(e) || a.add(e);
            }
        };
        for (let t = 0; t < c; t++) e(i.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== r.size) {
        const e = c - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = i.slice(t, o).join(".");
            let n = r.get(e);
            if (void 0 !== n) {
                "number" == typeof n && (n = [ n ]);
                for (const e of n) l.includes(e) || a.add(e);
            }
        }
        r.clear();
    }
    for (const e of a) try {
        s(...t[e]);
    } catch (e) {}
    t.length = 0;
}();