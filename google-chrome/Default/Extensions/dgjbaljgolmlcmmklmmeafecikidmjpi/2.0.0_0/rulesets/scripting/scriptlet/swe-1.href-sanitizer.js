"use strict";

!function() {
    const e = {}, t = [ [ 'a[href*="/t?a="]', "?url" ], [ 'a[href*=".io/c/"]', "?u" ], [ 'a[href*="/idg.digidip.net/"]', "?url" ], [ 'a[href*="metromode.se/bouncer"]', "?url" ] ], r = new Map([ [ "aftonbladet.se", 0 ], [ "livsstil.se", 0 ], [ "godare.se", 0 ], [ "byggahus.se", 0 ], [ "expressen.se", 0 ], [ "elle.se", [ 0, 1 ] ], [ "femina.se", [ 0, 1 ] ], [ "svenskdam.se", [ 0, 1 ] ], [ "galamagasin.se", 0 ], [ "rodeo.net", 0 ], [ "familjeliv.se", 0 ], [ "vitaestilo.se", 0 ], [ "allas.se", 1 ], [ "hant.se", 1 ], [ "mabra.com", 1 ], [ "residencemagazine.se", 1 ], [ "motherhood.se", 1 ], [ "m3.se", 2 ], [ "pcforalla.se", 2 ], [ "macworld.se", 2 ], [ "metromode.se", 3 ] ]), n = new Map([]), o = new Map([]);
    function s(e = "", t = "") {
        if ("string" != typeof e) return;
        if ("" === e) return;
        const r = i(), n = r.makeLogPrefix("href-sanitizer", e, t);
        "" === t && (t = "text");
        const o = (e, t) => {
            let r = [];
            try {
                r = document.querySelectorAll(`a[href="${e}"`);
            } catch (e) {}
            for (const e of r) e.setAttribute("href", t);
            return r.length;
        }, s = e => {
            if ("" === e) return "";
            if (/[^\x21-\x7e]/.test(e)) return "";
            try {
                return new URL(e, document.location).href;
            } catch (e) {}
            return "";
        }, a = (e, t) => {
            if (/^\[.*\]$/.test(t)) return e.getAttribute(t.slice(1, -1).trim()) || "";
            if (t.startsWith("?")) {
                try {
                    return new URL(e.href, document.location).searchParams.get(t.slice(1)) || "";
                } catch (e) {}
                return "";
            }
            return "text" === t ? e.textContent.replace(/^[^\x21-\x7e]+/, "").replace(/[^\x21-\x7e]+$/, "") : "";
        }, c = () => {
            let i = [];
            try {
                i = document.querySelectorAll(e);
            } catch (e) {
                return !1;
            }
            for (const e of i) {
                if ("a" !== e.localName) continue;
                if (!1 === e.hasAttribute("href")) continue;
                const i = e.getAttribute("href"), c = a(e, t), l = s(c);
                if ("" === l) continue;
                if (l === i) continue;
                e.setAttribute("href", l);
                const f = o(i, l);
                r.uboLog(n, `Sanitized ${f + 1} links to\n${l}`);
            }
            return !0;
        };
        let l, f;
        const u = e => {
            if (void 0 !== f) return;
            let t = !1;
            for (const r of e) if (0 !== r.addedNodes.length) {
                for (const e of r.addedNodes) if (1 === e.nodeType) {
                    t = !0;
                    break;
                }
                if (t) break;
            }
            !1 !== t && (f = r.onIdle((() => {
                f = void 0, c();
            })));
        };
        !function(e, t) {
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
            }, n = r("interactive");
            if (r(document.readyState) >= n) return void e();
            const s = i(), a = [ "readystatechange", () => {
                r(document.readyState) < n || (e(), s.removeEventListener.apply(document, a));
            }, {
                capture: !0
            } ];
            s.addEventListener.apply(document, a);
        }((() => {
            !1 !== c() && (l = new MutationObserver(u), l.observe(document.body, {
                subtree: !0,
                childList: !0
            }));
        }));
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
    const a = [];
    try {
        a.push(...document.location.hostname.split("."));
    } catch (e) {}
    const c = a.length;
    if (0 === c) return;
    const l = new Set, f = [];
    if (0 !== o.size) {
        for (let e = 0; e < c; e++) {
            const t = a.slice(e).join("."), r = o.get(t);
            r && f.push(...r);
        }
        o.clear();
    }
    if (0 !== r.size) {
        const e = e => {
            let t = r.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) f.includes(e) || l.add(e);
            }
        };
        for (let t = 0; t < c; t++) e(a.slice(t).join("."));
        e("*"), r.clear();
    }
    if (0 !== n.size) {
        const e = c - 1;
        for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
            const e = a.slice(t, r).join(".");
            let o = n.get(e);
            if (void 0 !== o) {
                "number" == typeof o && (o = [ o ]);
                for (const e of o) f.includes(e) || l.add(e);
            }
        }
        n.clear();
    }
    for (const e of l) try {
        s(...t[e]);
    } catch (e) {}
    t.length = 0;
}();