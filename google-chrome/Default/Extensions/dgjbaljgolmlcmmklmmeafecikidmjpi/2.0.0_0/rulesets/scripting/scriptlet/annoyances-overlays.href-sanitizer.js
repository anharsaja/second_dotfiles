"use strict";

!function() {
    const e = {}, t = [ [ 'a[href^="https://www.youtube.com/redirect?event=video_description"][href*="&q=http"]', "?q" ] ], r = new Map([ [ "m.youtube.com", 0 ], [ "music.youtube.com", 0 ], [ "tv.youtube.com", 0 ], [ "www.youtube.com", 0 ], [ "youtubekids.com", 0 ], [ "youtube-nocookie.com", 0 ] ]), o = new Map([]), n = new Map([]);
    function i(e = "", t = "") {
        if ("string" != typeof e) return;
        if ("" === e) return;
        const r = s(), o = r.makeLogPrefix("href-sanitizer", e, t);
        "" === t && (t = "text");
        const n = (e, t) => {
            let r = [];
            try {
                r = document.querySelectorAll(`a[href="${e}"`);
            } catch (e) {}
            for (const e of r) e.setAttribute("href", t);
            return r.length;
        }, i = e => {
            if ("" === e) return "";
            if (/[^\x21-\x7e]/.test(e)) return "";
            try {
                return new URL(e, document.location).href;
            } catch (e) {}
            return "";
        }, c = (e, t) => {
            if (/^\[.*\]$/.test(t)) return e.getAttribute(t.slice(1, -1).trim()) || "";
            if (t.startsWith("?")) {
                try {
                    return new URL(e.href, document.location).searchParams.get(t.slice(1)) || "";
                } catch (e) {}
                return "";
            }
            return "text" === t ? e.textContent.replace(/^[^\x21-\x7e]+/, "").replace(/[^\x21-\x7e]+$/, "") : "";
        }, a = () => {
            let s = [];
            try {
                s = document.querySelectorAll(e);
            } catch (e) {
                return !1;
            }
            for (const e of s) {
                if ("a" !== e.localName) continue;
                if (!1 === e.hasAttribute("href")) continue;
                const s = e.getAttribute("href"), a = c(e, t), u = i(a);
                if ("" === u) continue;
                if (u === s) continue;
                e.setAttribute("href", u);
                const l = n(s, u);
                r.uboLog(o, `Sanitized ${l + 1} links to\n${u}`);
            }
            return !0;
        };
        let u, l;
        const f = e => {
            if (void 0 !== l) return;
            let t = !1;
            for (const r of e) if (0 !== r.addedNodes.length) {
                for (const e of r.addedNodes) if (1 === e.nodeType) {
                    t = !0;
                    break;
                }
                if (t) break;
            }
            !1 !== t && (l = r.onIdle((() => {
                l = void 0, a();
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
            }, o = r("interactive");
            if (r(document.readyState) >= o) return void e();
            const i = s(), c = [ "readystatechange", () => {
                r(document.readyState) < o || (e(), i.removeEventListener.apply(document, c));
            }, {
                capture: !0
            } ];
            i.addEventListener.apply(document, c);
        }((() => {
            !1 !== a() && (u = new MutationObserver(f), u.observe(document.body, {
                subtree: !0,
                childList: !0
            }));
        }));
    }
    function s() {
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
    const u = new Set, l = [];
    if (0 !== n.size) {
        for (let e = 0; e < a; e++) {
            const t = c.slice(e).join("."), r = n.get(t);
            r && l.push(...r);
        }
        n.clear();
    }
    if (0 !== r.size) {
        const e = e => {
            let t = r.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) l.includes(e) || u.add(e);
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
                for (const e of n) l.includes(e) || u.add(e);
            }
        }
        o.clear();
    }
    for (const e of u) try {
        i(...t[e]);
    } catch (e) {}
    t.length = 0;
}();