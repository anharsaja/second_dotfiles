"use strict";

!function() {
    const e = {}, t = [ [ "#text", "/スポンサードリンク：?|楽天広告：/" ], [ "#text", "PR:" ], [ "#text", "関連動画" ], [ "#text", "【広告】" ], [ "#text", "/\\[vkExUnit_ad area=(after|before)\\]/" ], [ "#text", "【PR】" ], [ "#text", "/スポンサード?リンク/" ] ], o = new Map([ [ "kasegeru.blog.jp", 0 ], [ "betweenjpandkr.blog", 1 ], [ "dvdrev.com", 2 ], [ "fm.sekkaku.net", 3 ], [ "lifematome.blog", 4 ], [ "free-avx.jp", 5 ], [ "ideal2ch.livedoor.biz", 6 ], [ "seikeidouga.blog.jp", 6 ], [ "tcg-bloglife.com", 6 ], [ "ch-review.net", 6 ], [ "gametohkenranbu.sakuraweb.com", 6 ], [ "jisakuhibi.jp", 6 ], [ "rank1-media.com", 6 ], [ "resizer.myct.jp", 6 ] ]), r = new Map([]), n = new Map([]);
    function s(e, t, ...o) {
        !function(e = "", t = "", o = "") {
            const r = i(), n = r.makeLogPrefix("replace-node-text.fn", ...Array.from(arguments)), s = r.patternToRegex(e, "i", !0), a = r.patternToRegex(t, "gms"), c = r.getExtraArgs(Array.from(arguments), 3), l = r.patternToRegex(c.condition || "", "ms"), g = (e = !0) => {
                e && u(p.takeRecords()), p.disconnect(), r.logLevel > 1 && r.uboLog(n, "Quitting");
            };
            let d = c.sedCount || 0;
            const f = e => {
                const s = e.textContent;
                if (l.lastIndex = 0, !1 === r.RegExp_test.call(l, s)) return !0;
                if (a.lastIndex = 0, !1 === r.RegExp_test.call(a, s)) return !0;
                a.lastIndex = 0;
                const i = "" !== t ? s.replace(a, o) : o;
                return e.textContent = i, r.logLevel > 1 && r.uboLog(n, `Text before:\n${s.trim()}`), 
                r.uboLog(n, `Text after:\n${i.trim()}`), 0 === d || 0 != (d -= 1);
            }, u = e => {
                for (const t of e) for (const e of t.addedNodes) if (!1 !== s.test(e.nodeName) && !f(e)) return void g(!1);
            }, p = new MutationObserver(u);
            if (p.observe(document, {
                childList: !0,
                subtree: !0
            }), document.documentElement) {
                const e = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
                let t = 0;
                for (;;) {
                    const o = e.nextNode();
                    if (t += 1, null === o) break;
                    if (!1 !== s.test(o.nodeName) && !f(o)) {
                        g();
                        break;
                    }
                }
                r.uboLog(n, `${t} nodes present before installing mutation observer`);
            }
            c.stay || function(e, t) {
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
                }, r = o("interactive");
                if (o(document.readyState) >= r) return void e();
                const s = i(), a = [ "readystatechange", () => {
                    o(document.readyState) < r || (e(), s.removeEventListener.apply(document, a));
                }, {
                    capture: !0
                } ];
                s.addEventListener.apply(document, a);
            }((() => {
                const e = c.quitAfter || 0;
                0 !== e ? setTimeout((() => {
                    g();
                }), e) : g();
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
    const c = a.length;
    if (0 === c) return;
    const l = new Set, g = [];
    if (0 !== n.size) {
        for (let e = 0; e < c; e++) {
            const t = a.slice(e).join("."), o = n.get(t);
            o && g.push(...o);
        }
        n.clear();
    }
    if (0 !== o.size) {
        const e = e => {
            let t = o.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) g.includes(e) || l.add(e);
            }
        };
        for (let t = 0; t < c; t++) e(a.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== r.size) {
        const e = c - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = a.slice(t, o).join(".");
            let n = r.get(e);
            if (void 0 !== n) {
                "number" == typeof n && (n = [ n ]);
                for (const e of n) g.includes(e) || l.add(e);
            }
        }
        r.clear();
    }
    for (const e of l) try {
        s(...t[e]);
    } catch (e) {}
    t.length = 0;
}();