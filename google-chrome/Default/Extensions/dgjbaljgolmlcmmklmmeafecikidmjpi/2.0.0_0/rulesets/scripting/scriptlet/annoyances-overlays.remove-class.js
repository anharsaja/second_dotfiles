"use strict";

!function() {
    const e = {}, t = [ [ "js-page-scroll-lock", "body", "stay" ], [ "pum-open-overlay", "body", "stay" ], [ "root-modal-container-open", "body", "stay" ], [ "interstitial", "aside", "stay" ], [ "zephr-modal-open", "body", "stay" ], [ "js-show-newsletter-popup", "", "stay" ], [ "modal-open", "body", "stay" ], [ "hasAdAlert", "header" ], [ "click-to-scroll", "body" ], [ "disable-selection", "body" ] ], o = new Map([ [ "cityam.com", 0 ], [ "securityweek.com", 1 ], [ "all3dp.com", 2 ], [ "cityandstateny.com", 3 ], [ "forbes.com", 4 ], [ "dgb.de", 5 ], [ "mightyape.co.nz", 6 ], [ "novelza.com", 8 ], [ "postype.com", 9 ] ]), r = new Map([ [ "pornhub", 7 ] ]), n = new Map([]);
    function s(e = "", t = "", o = "") {
        if ("string" != typeof e) return;
        if ("" === e) return;
        const r = c(), n = r.makeLogPrefix("remove-class", e, t, o), s = e.split(/\s*\|\s*/), a = s.map((e => `${t}.${CSS.escape(e)}`)).join(",");
        r.logLevel > 1 && r.uboLog(n, `Target selector:\n\t${a}`);
        const i = /\bstay\b/.test(o);
        let l;
        const d = () => {
            l = void 0;
            try {
                const e = document.querySelectorAll(a);
                for (const t of e) t.classList.remove(...s), r.uboLog(n, "Removed class(es)");
            } catch (e) {}
            i || "complete" === document.readyState && p.disconnect();
        }, p = new MutationObserver((e => {
            if (void 0 !== l) return;
            let t = !0;
            for (let o = 0; o < e.length && t; o++) {
                const {type: r, addedNodes: n, removedNodes: s} = e[o];
                "attributes" === r && (t = !1);
                for (let e = 0; e < n.length && t; e++) if (1 === n[e].nodeType) {
                    t = !1;
                    break;
                }
                for (let e = 0; e < s.length && t; e++) if (1 === s[e].nodeType) {
                    t = !1;
                    break;
                }
            }
            t || (l = r.onIdle(d, {
                timeout: 67
            }));
        }));
        !function(e, t) {
            const o = e => {
                const t = {
                    loading: 1,
                    interactive: 2,
                    end: 2,
                    2: 2,
                    complete: 3,
                    idle: 3,
                    3: 3
                }, o = Array.isArray(e) ? e : [ e ];
                for (const e of o) {
                    const o = `${e}`;
                    if (!1 !== t.hasOwnProperty(o)) return t[o];
                }
                return 0;
            }, r = o(t);
            if (o(document.readyState) >= r) return void e();
            const s = c(), a = [ "readystatechange", () => {
                o(document.readyState) < r || (e(), s.removeEventListener.apply(document, a));
            }, {
                capture: !0
            } ];
            s.addEventListener.apply(document, a);
        }((() => {
            d(), p.observe(document, {
                attributes: !0,
                attributeFilter: [ "class" ],
                childList: !0,
                subtree: !0
            });
        }), /\bcomplete\b/.test(o) ? "idle" : "loading");
    }
    function c() {
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
    }
    const a = [];
    try {
        a.push(...document.location.hostname.split("."));
    } catch (e) {}
    const i = a.length;
    if (0 === i) return;
    const l = new Set, d = [];
    if (0 !== n.size) {
        for (let e = 0; e < i; e++) {
            const t = a.slice(e).join("."), o = n.get(t);
            o && d.push(...o);
        }
        n.clear();
    }
    if (0 !== o.size) {
        const e = e => {
            let t = o.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) d.includes(e) || l.add(e);
            }
        };
        for (let t = 0; t < i; t++) e(a.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== r.size) {
        const e = i - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = a.slice(t, o).join(".");
            let n = r.get(e);
            if (void 0 !== n) {
                "number" == typeof n && (n = [ n ]);
                for (const e of n) d.includes(e) || l.add(e);
            }
        }
        r.clear();
    }
    for (const e of l) try {
        s(...t[e]);
    } catch (e) {}
    t.length = 0;
}();