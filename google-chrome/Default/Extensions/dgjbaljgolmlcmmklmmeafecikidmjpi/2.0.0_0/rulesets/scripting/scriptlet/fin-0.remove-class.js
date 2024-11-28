"use strict";

!function() {
    const e = {}, t = [ [ "st__hidden", "#gamewrapper" ], [ "Profile__TopCard--advertisement", "", "stay" ], [ "SearchResultList--advertisement", "", "stay" ], [ "SearchResultList__Row--advertisement", "", "stay" ] ], r = new Map([ [ "ap-cdn.sanomagames.com", 0 ], [ "finder.fi", [ 1, 2, 3 ] ] ]), o = new Map([]), n = new Map([]);
    function s(e = "", t = "", r = "") {
        if ("string" != typeof e) return;
        if ("" === e) return;
        const o = i(), n = o.makeLogPrefix("remove-class", e, t, r), s = e.split(/\s*\|\s*/), a = s.map((e => `${t}.${CSS.escape(e)}`)).join(",");
        o.logLevel > 1 && o.uboLog(n, `Target selector:\n\t${a}`);
        const c = /\bstay\b/.test(r);
        let l;
        const d = () => {
            l = void 0;
            try {
                const e = document.querySelectorAll(a);
                for (const t of e) t.classList.remove(...s), o.uboLog(n, "Removed class(es)");
            } catch (e) {}
            c || "complete" === document.readyState && g.disconnect();
        }, g = new MutationObserver((e => {
            if (void 0 !== l) return;
            let t = !0;
            for (let r = 0; r < e.length && t; r++) {
                const {type: o, addedNodes: n, removedNodes: s} = e[r];
                "attributes" === o && (t = !1);
                for (let e = 0; e < n.length && t; e++) if (1 === n[e].nodeType) {
                    t = !1;
                    break;
                }
                for (let e = 0; e < s.length && t; e++) if (1 === s[e].nodeType) {
                    t = !1;
                    break;
                }
            }
            t || (l = o.onIdle(d, {
                timeout: 67
            }));
        }));
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
            }, o = r(t);
            if (r(document.readyState) >= o) return void e();
            const s = i(), a = [ "readystatechange", () => {
                r(document.readyState) < o || (e(), s.removeEventListener.apply(document, a));
            }, {
                capture: !0
            } ];
            s.addEventListener.apply(document, a);
        }((() => {
            d(), g.observe(document, {
                attributes: !0,
                attributeFilter: [ "class" ],
                childList: !0,
                subtree: !0
            });
        }), /\bcomplete\b/.test(r) ? "idle" : "loading");
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
    const a = [];
    try {
        a.push(...document.location.hostname.split("."));
    } catch (e) {}
    const c = a.length;
    if (0 === c) return;
    const l = new Set, d = [];
    if (0 !== n.size) {
        for (let e = 0; e < c; e++) {
            const t = a.slice(e).join("."), r = n.get(t);
            r && d.push(...r);
        }
        n.clear();
    }
    if (0 !== r.size) {
        const e = e => {
            let t = r.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) d.includes(e) || l.add(e);
            }
        };
        for (let t = 0; t < c; t++) e(a.slice(t).join("."));
        e("*"), r.clear();
    }
    if (0 !== o.size) {
        const e = c - 1;
        for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
            const e = a.slice(t, r).join(".");
            let n = o.get(e);
            if (void 0 !== n) {
                "number" == typeof n && (n = [ n ]);
                for (const e of n) d.includes(e) || l.add(e);
            }
        }
        o.clear();
    }
    for (const e of l) try {
        s(...t[e]);
    } catch (e) {}
    t.length = 0;
}();