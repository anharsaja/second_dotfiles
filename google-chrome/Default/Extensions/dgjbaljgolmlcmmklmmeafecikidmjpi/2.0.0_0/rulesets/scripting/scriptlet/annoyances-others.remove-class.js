"use strict";

!function() {
    const e = {}, t = [ [ "js-no-scroll", "html", "stay" ], [ "blocked", "body", "stay" ], [ "mfp-popup-exit-quiz-v2", "", "stay" ], [ "stickyBanner", "", "stay" ], [ "not_scroll", "", "stay" ], [ "float-player", "", "stay" ], [ "vp-docked", "", "stay" ], [ "vp-docked-mode", "", "stay" ], [ "styles_stuck__gtILi", "", "stay" ], [ "desktop-floating-player", "", "stay" ], [ "sticky", "", "stay" ], [ "jw-flag-floating", "", "stay" ], [ "video-flyout--fixed", "", "stay" ], [ "powa-sticky", "", "stay" ], [ "video__docker_state_docked", "", "stay" ], [ "dock", "", "stay" ], [ "floating", "", "stay" ] ], o = new Map([ [ "opensecrets.org", 0 ], [ "inquinte.ca", 1 ], [ "neilpatel.com", 2 ], [ "redfin.com", 3 ], [ "democracynow.org", 4 ], [ "texasmonthly.com", 5 ], [ "yahoo.com", [ 6, 7 ] ], [ "msnbc.com", 8 ], [ "today.com", 8 ], [ "nbcnews.com", 8 ], [ "thehill.com", 9 ], [ "nbc4i.com", 9 ], [ "ktla.com", 9 ], [ "ktsm.com", 9 ], [ "kark.com", 9 ], [ "myarklamiss.com", 9 ], [ "nwahomepage.com", 9 ], [ "mytwintiers.com", 9 ], [ "news10.com", 9 ], [ "wavy.com", 9 ], [ "independent.co.uk", [ 10, 11 ] ], [ "allrecipes.com", 11 ], [ "telemundopr.com", 12 ], [ "nbcchicago.com", 12 ], [ "nbcdfw.com", 12 ], [ "nbcboston.com", 12 ], [ "nbcconnecticut.com", 12 ], [ "nbcphiladelphia.com", 12 ], [ "nbcsandiego.com", 12 ], [ "nbclosangeles.com", 12 ], [ "nbcnewyork.com", 12 ], [ "nbcbayarea.com", 12 ], [ "kbtx.com", 13 ], [ "kptv.com", 13 ], [ "wfaa.com", 14 ], [ "wkyc.com", 14 ], [ "9news.com", 14 ], [ "11alive.com", 14 ], [ "6abc.com", 15 ], [ "abc11.com", 15 ], [ "abc13.com", 15 ], [ "abc30.com", 15 ], [ "abc7.com", 15 ], [ "abc7chicago.com", 15 ], [ "abc7news.com", 15 ], [ "abc7ny.com", 15 ], [ "cbsnews.com", 16 ] ]), n = new Map([]), c = new Map([]);
    function r(e = "", t = "", o = "") {
        if ("string" != typeof e) return;
        if ("" === e) return;
        const n = s(), c = n.makeLogPrefix("remove-class", e, t, o), r = e.split(/\s*\|\s*/), a = r.map((e => `${t}.${CSS.escape(e)}`)).join(",");
        n.logLevel > 1 && n.uboLog(c, `Target selector:\n\t${a}`);
        const i = /\bstay\b/.test(o);
        let l;
        const d = () => {
            l = void 0;
            try {
                const e = document.querySelectorAll(a);
                for (const t of e) t.classList.remove(...r), n.uboLog(c, "Removed class(es)");
            } catch (e) {}
            i || "complete" === document.readyState && m.disconnect();
        }, m = new MutationObserver((e => {
            if (void 0 !== l) return;
            let t = !0;
            for (let o = 0; o < e.length && t; o++) {
                const {type: n, addedNodes: c, removedNodes: r} = e[o];
                "attributes" === n && (t = !1);
                for (let e = 0; e < c.length && t; e++) if (1 === c[e].nodeType) {
                    t = !1;
                    break;
                }
                for (let e = 0; e < r.length && t; e++) if (1 === r[e].nodeType) {
                    t = !1;
                    break;
                }
            }
            t || (l = n.onIdle(d, {
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
            }, n = o(t);
            if (o(document.readyState) >= n) return void e();
            const r = s(), a = [ "readystatechange", () => {
                o(document.readyState) < n || (e(), r.removeEventListener.apply(document, a));
            }, {
                capture: !0
            } ];
            r.addEventListener.apply(document, a);
        }((() => {
            d(), m.observe(document, {
                attributes: !0,
                attributeFilter: [ "class" ],
                childList: !0,
                subtree: !0
            });
        }), /\bcomplete\b/.test(o) ? "idle" : "loading");
    }
    function s() {
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
                        const t = n[o + 1], c = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ n[o], c ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(o);
            },
            onIdle: (e, o) => t.requestIdleCallback ? t.requestIdleCallback(e, o) : t.requestAnimationFrame(e)
        };
        if (e.safeSelf = o, void 0 === e.bcSecret) return o;
        const n = new t.BroadcastChannel(e.bcSecret);
        let c = [];
        return o.logLevel = e.logLevel || 1, o.sendToLogger = (e, ...t) => {
            if (0 === t.length) return;
            const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            if (void 0 === c) return n.postMessage({
                what: "messageToLogger",
                type: e,
                text: o
            });
            c.push({
                type: e,
                text: o
            });
        }, n.onmessage = e => {
            switch (e.data) {
              case "iamready!":
                if (void 0 === c) break;
                c.forEach((({type: e, text: t}) => n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: t
                }))), c = void 0;
                break;

              case "setScriptletLogLevelToOne":
                o.logLevel = 1;
                break;

              case "setScriptletLogLevelToTwo":
                o.logLevel = 2;
            }
        }, n.postMessage("areyouready?"), o;
    }
    const a = [];
    try {
        a.push(...document.location.hostname.split("."));
    } catch (e) {}
    const i = a.length;
    if (0 === i) return;
    const l = new Set, d = [];
    if (0 !== c.size) {
        for (let e = 0; e < i; e++) {
            const t = a.slice(e).join("."), o = c.get(t);
            o && d.push(...o);
        }
        c.clear();
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
    if (0 !== n.size) {
        const e = i - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = a.slice(t, o).join(".");
            let c = n.get(e);
            if (void 0 !== c) {
                "number" == typeof c && (c = [ c ]);
                for (const e of c) d.includes(e) || l.add(e);
            }
        }
        n.clear();
    }
    for (const e of l) try {
        r(...t[e]);
    } catch (e) {}
    t.length = 0;
}();