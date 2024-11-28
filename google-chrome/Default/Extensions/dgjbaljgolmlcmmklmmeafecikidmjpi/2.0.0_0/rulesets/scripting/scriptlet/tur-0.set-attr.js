"use strict";

!function() {
    const t = {}, e = [ [ ".video-skip", "data-time", "0" ] ], n = new Map([ [ "inattvhd188.xyz", 0 ], [ "inattvhd189.xyz", 0 ], [ "inattvhd190.xyz", 0 ], [ "inattvhd191.xyz", 0 ], [ "inattvhd192.xyz", 0 ], [ "inattvhd193.xyz", 0 ], [ "inattvhd194.xyz", 0 ], [ "inattvhd195.xyz", 0 ], [ "inattvhd196.xyz", 0 ], [ "inattvhd197.xyz", 0 ], [ "inattvhd198.xyz", 0 ], [ "inattvhd199.xyz", 0 ], [ "inattvhd200.xyz", 0 ], [ "inattvhd201.xyz", 0 ], [ "inattvhd202.xyz", 0 ], [ "inattvhd203.xyz", 0 ], [ "inattvhd204.xyz", 0 ], [ "inattvhd205.xyz", 0 ], [ "inattvhd206.xyz", 0 ], [ "inattvhd207.xyz", 0 ], [ "inattvhd208.xyz", 0 ], [ "inattvhd209.xyz", 0 ], [ "inattvhd210.xyz", 0 ], [ "inattvhd211.xyz", 0 ], [ "inattvhd212.xyz", 0 ], [ "inattvhd213.xyz", 0 ], [ "inattvhd214.xyz", 0 ], [ "inattvhd215.xyz", 0 ], [ "inattvhd216.xyz", 0 ], [ "inattvhd217.xyz", 0 ], [ "inattvhd218.xyz", 0 ], [ "inattvhd219.xyz", 0 ], [ "inattvhd220.xyz", 0 ], [ "inattvhd221.xyz", 0 ] ]), r = new Map([]), o = new Map([]);
    function i(t = "", e = "", n = "") {
        if ("" === t) return;
        if ("" === e) return;
        const r = s(), o = r.makeLogPrefix("set-attr", e, n);
        let i = "";
        if (!1 === [ "", "false", "true" ].includes(n.toLowerCase())) if (/^\d+$/.test(n)) {
            const t = parseInt(n, 10);
            if (t >= 32768) return;
            n = `${t}`;
        } else {
            if (!/^\[.+\]$/.test(n)) return;
            i = n.slice(1, -1);
        }
        const a = t => "" !== i ? t.getAttribute(i) || "" : n, c = () => {
            const n = [];
            try {
                n.push(...document.querySelectorAll(t));
            } catch (t) {
                return !1;
            }
            for (const t of n) {
                const n = t.getAttribute(e), i = a(t);
                i !== n && ("" !== i && /^on/i.test(e) && e.toLowerCase() in t || (t.setAttribute(e, i), 
                r.uboLog(o, `${e}="${i}"`)));
            }
            return !0;
        };
        let d, l;
        const h = t => {
            if (void 0 !== l) return;
            let e = !1;
            for (const n of t) if (0 !== n.addedNodes.length) {
                for (const t of n.addedNodes) if (1 === t.nodeType) {
                    e = !0;
                    break;
                }
                if (e) break;
            }
            !1 !== e && (l = self.requestAnimationFrame((() => {
                l = void 0, c();
            })));
        };
        !function(t, e) {
            const n = t => {
                const e = {
                    loading: 1,
                    interactive: 2,
                    end: 2,
                    2: 2,
                    complete: 3,
                    idle: 3,
                    3: 3
                }, n = Array.isArray(t) ? t : [ t ];
                for (const t of n) {
                    const n = `${t}`;
                    if (!1 !== e.hasOwnProperty(n)) return e[n];
                }
                return 0;
            }, r = n("idle");
            if (n(document.readyState) >= r) return void t();
            const i = s(), a = [ "readystatechange", () => {
                n(document.readyState) < r || (t(), i.removeEventListener.apply(document, a));
            }, {
                capture: !0
            } ];
            i.addEventListener.apply(document, a);
        }((() => {
            !1 !== c() && (d = new MutationObserver(h), d.observe(document.body, {
                subtree: !0,
                childList: !0
            }));
        }));
    }
    function s() {
        if (t.safeSelf) return t.safeSelf;
        const e = globalThis, n = {
            Array_from: Array.from,
            Error: e.Error,
            Function_toStringFn: e.Function.prototype.toString,
            Function_toString: t => n.Function_toStringFn.call(t),
            Math_floor: Math.floor,
            Math_max: Math.max,
            Math_min: Math.min,
            Math_random: Math.random,
            Object: Object,
            Object_defineProperty: Object.defineProperty.bind(Object),
            Object_fromEntries: Object.fromEntries.bind(Object),
            Object_getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor.bind(Object),
            RegExp: e.RegExp,
            RegExp_test: e.RegExp.prototype.test,
            RegExp_exec: e.RegExp.prototype.exec,
            Request_clone: e.Request.prototype.clone,
            XMLHttpRequest: e.XMLHttpRequest,
            addEventListener: e.EventTarget.prototype.addEventListener,
            removeEventListener: e.EventTarget.prototype.removeEventListener,
            fetch: e.fetch,
            JSON: e.JSON,
            JSON_parseFn: e.JSON.parse,
            JSON_stringifyFn: e.JSON.stringify,
            JSON_parse: (...t) => n.JSON_parseFn.call(n.JSON, ...t),
            JSON_stringify: (...t) => n.JSON_stringifyFn.call(n.JSON, ...t),
            log: void 0,
            logLevel: 0,
            makeLogPrefix(...t) {
                return this.sendToLogger && `[${t.join(" ⁝ ")}]` || "";
            },
            uboLog(...t) {
                if (void 0 !== this.sendToLogger && void 0 !== t && "" !== t[0]) return this.sendToLogger("info", ...t);
            },
            uboErr(...t) {
                if (void 0 !== this.sendToLogger && void 0 !== t && "" !== t[0]) return this.sendToLogger("error", ...t);
            },
            escapeRegexChars: t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            initPattern(t, e = {}) {
                if ("" === t) return {
                    matchAll: !0
                };
                const n = !0 !== e.canNegate || !1 === t.startsWith("!");
                !1 === n && (t = t.slice(1));
                const r = /^\/(.+)\/([gimsu]*)$/.exec(t);
                return null !== r ? {
                    re: new this.RegExp(r[1], r[2] || e.flags),
                    expect: n
                } : void 0 !== e.flags ? {
                    re: new this.RegExp(this.escapeRegexChars(t), e.flags),
                    expect: n
                } : {
                    pattern: t,
                    expect: n
                };
            },
            testPattern(t, e) {
                return !!t.matchAll || (t.re ? this.RegExp_test.call(t.re, e) === t.expect : e.includes(t.pattern) === t.expect);
            },
            patternToRegex(t, e, n = !1) {
                if ("" === t) return /^/;
                const r = /^\/(.+)\/([gimsu]*)$/.exec(t);
                if (null === r) {
                    const r = this.escapeRegexChars(t);
                    return new RegExp(n ? `^${r}$` : r, e);
                }
                try {
                    return new RegExp(r[1], r[2] || void 0);
                } catch (t) {}
                return /^/;
            },
            getExtraArgs(t, e = 0) {
                const n = t.slice(e).reduce(((t, e, n, r) => {
                    if (0 == (1 & n)) {
                        const e = r[n + 1], o = /^\d+$/.test(e) ? parseInt(e, 10) : e;
                        t.push([ r[n], o ]);
                    }
                    return t;
                }), []);
                return this.Object_fromEntries(n);
            },
            onIdle: (t, n) => e.requestIdleCallback ? e.requestIdleCallback(t, n) : e.requestAnimationFrame(t)
        };
        if (t.safeSelf = n, void 0 === t.bcSecret) return n;
        const r = new e.BroadcastChannel(t.bcSecret);
        let o = [];
        return n.logLevel = t.logLevel || 1, n.sendToLogger = (t, ...e) => {
            if (0 === e.length) return;
            const n = `[${document.location.hostname || document.location.href}]${e.join(" ")}`;
            if (void 0 === o) return r.postMessage({
                what: "messageToLogger",
                type: t,
                text: n
            });
            o.push({
                type: t,
                text: n
            });
        }, r.onmessage = t => {
            switch (t.data) {
              case "iamready!":
                if (void 0 === o) break;
                o.forEach((({type: t, text: e}) => r.postMessage({
                    what: "messageToLogger",
                    type: t,
                    text: e
                }))), o = void 0;
                break;

              case "setScriptletLogLevelToOne":
                n.logLevel = 1;
                break;

              case "setScriptletLogLevelToTwo":
                n.logLevel = 2;
            }
        }, r.postMessage("areyouready?"), n;
    }
    const a = [];
    try {
        a.push(...document.location.hostname.split("."));
    } catch (t) {}
    const c = a.length;
    if (0 === c) return;
    const d = new Set, l = [];
    if (0 !== o.size) {
        for (let t = 0; t < c; t++) {
            const e = a.slice(t).join("."), n = o.get(e);
            n && l.push(...n);
        }
        o.clear();
    }
    if (0 !== n.size) {
        const t = t => {
            let e = n.get(t);
            if (void 0 !== e) {
                "number" == typeof e && (e = [ e ]);
                for (const t of e) l.includes(t) || d.add(t);
            }
        };
        for (let e = 0; e < c; e++) t(a.slice(e).join("."));
        t("*"), n.clear();
    }
    if (0 !== r.size) {
        const t = c - 1;
        for (let e = 0; e < t; e++) for (let n = t; n > e; n--) {
            const t = a.slice(e, n).join(".");
            let o = r.get(t);
            if (void 0 !== o) {
                "number" == typeof o && (o = [ o ]);
                for (const t of o) l.includes(t) || d.add(t);
            }
        }
        r.clear();
    }
    for (const t of d) try {
        i(...e[t]);
    } catch (t) {}
    e.length = 0;
}();