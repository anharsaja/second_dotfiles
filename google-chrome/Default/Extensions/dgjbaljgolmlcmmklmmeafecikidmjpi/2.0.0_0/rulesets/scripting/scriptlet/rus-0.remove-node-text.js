"use strict";

!function() {
    const e = {}, t = [ [ "#text", "РЕКЛАМН��Й БЛОК:" ], [ "#text", "Реклама" ], [ "#text", "Реклама:" ], [ "script", "/adblog|tick/" ], [ "script", "/gtag\\('event'/" ], [ "script", "AdBlocker" ], [ "script", "addPlaceholder" ], [ "script", "message_ads" ], [ "script", '"Shadow' ] ], o = new Map([ [ "online-fix.me", 0 ], [ "farposst.ru", 1 ], [ "filmitorrent.net", 2 ], [ "utorr.cc", 2 ], [ "game4you.top", 3 ], [ "games-pc.top", 3 ], [ "innal.top", 3 ], [ "naylo.top", 3 ], [ "rustorka.com", 3 ], [ "rustorka.net", 3 ], [ "rustorka.top", 3 ], [ "rustorkacom.lib", 3 ], [ "inforesist.org", [ 4, 8 ] ], [ "sports.ru", 5 ], [ "pikabu.ru", 6 ], [ "gsm.in.ua", 7 ], [ "24boxing.com.ua", 8 ], [ "avtovod.com.ua", 8 ], [ "bigmir.net", 8 ], [ "buhgalter.com.ua", 8 ], [ "buhgalter911.com", 8 ], [ "businessua.com", 8 ], [ "censor.net", 8 ], [ "dengi.ua", 8 ], [ "ditey.com", 8 ], [ "epravda.com.ua", 8 ], [ "eurointegration.com.ua", 8 ], [ "f1analytic.com", 8 ], [ "facenews.ua", 8 ], [ "factor.ua", 8 ], [ "gazeta.ua", 8 ], [ "gorod.dp.ua", 8 ], [ "hvylya.net", 8 ], [ "i.ua", 8 ], [ "isport.ua", 8 ], [ "ivona.ua", 8 ], [ "kolobok.ua", 8 ], [ "kriminal.tv", 8 ], [ "liga.net", 8 ], [ "meteo.ua", 8 ], [ "meteofor.com.ua", 8 ], [ "nnovosti.info", 8 ], [ "nv.ua", 8 ], [ "panno4ka.net", 8 ], [ "pogodaua.com", 8 ], [ "pravda.com.ua", 8 ], [ "real-vin.com", 8 ], [ "smak.ua", 8 ], [ "stravy.net", 8 ], [ "tochka.net", 8 ], [ "tv.ua", 8 ], [ "viva.ua", 8 ], [ "vsetv.com", 8 ], [ "www.ukr.net", 8 ], [ "zdorovia.com.ua", 8 ] ]), r = new Map([]), n = new Map([]);
    function a(e, t, ...o) {
        !function(e = "", t = "", o = "") {
            const r = s(), n = r.makeLogPrefix("replace-node-text.fn", ...Array.from(arguments)), a = r.patternToRegex(e, "i", !0), i = r.patternToRegex(t, "gms"), c = r.getExtraArgs(Array.from(arguments), 3), u = r.patternToRegex(c.condition || "", "ms"), l = (e = !0) => {
                e && p(f.takeRecords()), f.disconnect(), r.logLevel > 1 && r.uboLog(n, "Quitting");
            };
            let g = c.sedCount || 0;
            const d = e => {
                const a = e.textContent;
                if (u.lastIndex = 0, !1 === r.RegExp_test.call(u, a)) return !0;
                if (i.lastIndex = 0, !1 === r.RegExp_test.call(i, a)) return !0;
                i.lastIndex = 0;
                const s = "" !== t ? a.replace(i, o) : o;
                return e.textContent = s, r.logLevel > 1 && r.uboLog(n, `Text before:\n${a.trim()}`), 
                r.uboLog(n, `Text after:\n${s.trim()}`), 0 === g || 0 != (g -= 1);
            }, p = e => {
                for (const t of e) for (const e of t.addedNodes) if (!1 !== a.test(e.nodeName) && !d(e)) return void l(!1);
            }, f = new MutationObserver(p);
            if (f.observe(document, {
                childList: !0,
                subtree: !0
            }), document.documentElement) {
                const e = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
                let t = 0;
                for (;;) {
                    const o = e.nextNode();
                    if (t += 1, null === o) break;
                    if (!1 !== a.test(o.nodeName) && !d(o)) {
                        l();
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
                const a = s(), i = [ "readystatechange", () => {
                    o(document.readyState) < r || (e(), a.removeEventListener.apply(document, i));
                }, {
                    capture: !0
                } ];
                a.addEventListener.apply(document, i);
            }((() => {
                const e = c.quitAfter || 0;
                0 !== e ? setTimeout((() => {
                    l();
                }), e) : l();
            }));
        }(e, "", "", "condition", t || "", ...o);
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
    const i = [];
    try {
        i.push(...document.location.hostname.split("."));
    } catch (e) {}
    const c = i.length;
    if (0 === c) return;
    const u = new Set, l = [];
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
                for (const e of t) l.includes(e) || u.add(e);
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
                for (const e of n) l.includes(e) || u.add(e);
            }
        }
        r.clear();
    }
    for (const e of u) try {
        a(...t[e]);
    } catch (e) {}
    t.length = 0;
}();