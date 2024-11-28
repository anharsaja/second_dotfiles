"use strict";

!function() {
    const e = {}, t = [ [ "script", "document.oncontextmenu =" ], [ "script", "ads_app_name" ], [ "script", "document.oncontextmenu=" ], [ "script", "/popTimes_|document\\.onkeydown|'contextmenu'/" ], [ "script", "window.location=" ], [ "script", "popTimes_" ], [ "script", "ad.setAttribute" ] ], o = new Map([ [ "delta3da.cam", 0 ], [ "public-psychology.ir", 0 ], [ "sclinic.ir", 0 ], [ "farsroid.com", 1 ], [ "kihanb.ir", 2 ], [ "musiceman.net", 3 ], [ "najiremix.ir", 4 ], [ "iran-music.com", 5 ], [ "tgju.org", 6 ] ]), n = new Map([]), r = new Map([]);
    function s(e, t, ...o) {
        !function(e = "", t = "", o = "") {
            const n = i(), r = n.makeLogPrefix("replace-node-text.fn", ...Array.from(arguments)), s = n.patternToRegex(e, "i", !0), c = n.patternToRegex(t, "gms"), a = n.getExtraArgs(Array.from(arguments), 3), l = n.patternToRegex(a.condition || "", "ms"), d = (e = !0) => {
                e && u(f.takeRecords()), f.disconnect(), n.logLevel > 1 && n.uboLog(r, "Quitting");
            };
            let g = a.sedCount || 0;
            const p = e => {
                const s = e.textContent;
                if (l.lastIndex = 0, !1 === n.RegExp_test.call(l, s)) return !0;
                if (c.lastIndex = 0, !1 === n.RegExp_test.call(c, s)) return !0;
                c.lastIndex = 0;
                const i = "" !== t ? s.replace(c, o) : o;
                return e.textContent = i, n.logLevel > 1 && n.uboLog(r, `Text before:\n${s.trim()}`), 
                n.uboLog(r, `Text after:\n${i.trim()}`), 0 === g || 0 != (g -= 1);
            }, u = e => {
                for (const t of e) for (const e of t.addedNodes) if (!1 !== s.test(e.nodeName) && !p(e)) return void d(!1);
            }, f = new MutationObserver(u);
            if (f.observe(document, {
                childList: !0,
                subtree: !0
            }), document.documentElement) {
                const e = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
                let t = 0;
                for (;;) {
                    const o = e.nextNode();
                    if (t += 1, null === o) break;
                    if (!1 !== s.test(o.nodeName) && !p(o)) {
                        d();
                        break;
                    }
                }
                n.uboLog(r, `${t} nodes present before installing mutation observer`);
            }
            a.stay || function(e, t) {
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
                }, n = o("interactive");
                if (o(document.readyState) >= n) return void e();
                const s = i(), c = [ "readystatechange", () => {
                    o(document.readyState) < n || (e(), s.removeEventListener.apply(document, c));
                }, {
                    capture: !0
                } ];
                s.addEventListener.apply(document, c);
            }((() => {
                const e = a.quitAfter || 0;
                0 !== e ? setTimeout((() => {
                    d();
                }), e) : d();
            }));
        }(e, "", "", "condition", t || "", ...o);
    }
    function i() {
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
    }
    const c = [];
    try {
        c.push(...document.location.hostname.split("."));
    } catch (e) {}
    const a = c.length;
    if (0 === a) return;
    const l = new Set, d = [];
    if (0 !== r.size) {
        for (let e = 0; e < a; e++) {
            const t = c.slice(e).join("."), o = r.get(t);
            o && d.push(...o);
        }
        r.clear();
    }
    if (0 !== o.size) {
        const e = e => {
            let t = o.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) d.includes(e) || l.add(e);
            }
        };
        for (let t = 0; t < a; t++) e(c.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== n.size) {
        const e = a - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = c.slice(t, o).join(".");
            let r = n.get(e);
            if (void 0 !== r) {
                "number" == typeof r && (r = [ r ]);
                for (const e of r) d.includes(e) || l.add(e);
            }
        }
        n.clear();
    }
    for (const e of l) try {
        s(...t[e]);
    } catch (e) {}
    t.length = 0;
}();