"use strict";

!function() {
    const e = {}, t = [ [ "noscript" ], [ "script", "/wccp_pro/" ], [ "script", "cloned.removeAttr" ], [ "#text", "casino" ], [ "script", "chp_adblock_browser" ] ], r = new Map([ [ "dinbyggare.se", [ 0, 1 ] ], [ "elevspel.se", 2 ], [ "garaget.org", 3 ], [ "temadagar.se", 4 ] ]), o = new Map([]), n = new Map([]);
    function s(e, t, ...r) {
        !function(e = "", t = "", r = "") {
            const o = i(), n = o.makeLogPrefix("replace-node-text.fn", ...Array.from(arguments)), s = o.patternToRegex(e, "i", !0), c = o.patternToRegex(t, "gms"), a = o.getExtraArgs(Array.from(arguments), 3), l = o.patternToRegex(a.condition || "", "ms"), g = (e = !0) => {
                e && f(u.takeRecords()), u.disconnect(), o.logLevel > 1 && o.uboLog(n, "Quitting");
            };
            let d = a.sedCount || 0;
            const p = e => {
                const s = e.textContent;
                if (l.lastIndex = 0, !1 === o.RegExp_test.call(l, s)) return !0;
                if (c.lastIndex = 0, !1 === o.RegExp_test.call(c, s)) return !0;
                c.lastIndex = 0;
                const i = "" !== t ? s.replace(c, r) : r;
                return e.textContent = i, o.logLevel > 1 && o.uboLog(n, `Text before:\n${s.trim()}`), 
                o.uboLog(n, `Text after:\n${i.trim()}`), 0 === d || 0 != (d -= 1);
            }, f = e => {
                for (const t of e) for (const e of t.addedNodes) if (!1 !== s.test(e.nodeName) && !p(e)) return void g(!1);
            }, u = new MutationObserver(f);
            if (u.observe(document, {
                childList: !0,
                subtree: !0
            }), document.documentElement) {
                const e = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
                let t = 0;
                for (;;) {
                    const r = e.nextNode();
                    if (t += 1, null === r) break;
                    if (!1 !== s.test(r.nodeName) && !p(r)) {
                        g();
                        break;
                    }
                }
                o.uboLog(n, `${t} nodes present before installing mutation observer`);
            }
            a.stay || function(e, t) {
                const r = e => {
                    const t = {
                        loading: 1,
                        interactive: 2,
                        end: 2,
                        2: 2,
                        complete: 3,
                        idle: 3,
                        3: 3
                    }, r = Array.isArray(e) ? e : [ e ];
                    for (const e of r) {
                        const r = `${e}`;
                        if (!1 !== t.hasOwnProperty(r)) return t[r];
                    }
                    return 0;
                }, o = r("interactive");
                if (r(document.readyState) >= o) return void e();
                const s = i(), c = [ "readystatechange", () => {
                    r(document.readyState) < o || (e(), s.removeEventListener.apply(document, c));
                }, {
                    capture: !0
                } ];
                s.addEventListener.apply(document, c);
            }((() => {
                const e = a.quitAfter || 0;
                0 !== e ? setTimeout((() => {
                    g();
                }), e) : g();
            }));
        }(e, "", "", "condition", t || "", ...r);
    }
    function i() {
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
    const c = [];
    try {
        c.push(...document.location.hostname.split("."));
    } catch (e) {}
    const a = c.length;
    if (0 === a) return;
    const l = new Set, g = [];
    if (0 !== n.size) {
        for (let e = 0; e < a; e++) {
            const t = c.slice(e).join("."), r = n.get(t);
            r && g.push(...r);
        }
        n.clear();
    }
    if (0 !== r.size) {
        const e = e => {
            let t = r.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) g.includes(e) || l.add(e);
            }
        };
        for (let t = 0; t < a; t++) e(c.slice(t).join("."));
        e("*"), r.clear();
    }
    if (0 !== o.size) {
        const e = a - 1;
        for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
            const e = c.slice(t, r).join(".");
            let n = o.get(e);
            if (void 0 !== n) {
                "number" == typeof n && (n = [ n ]);
                for (const e of n) g.includes(e) || l.add(e);
            }
        }
        o.clear();
    }
    for (const e of l) try {
        s(...t[e]);
    } catch (e) {}
    t.length = 0;
}();