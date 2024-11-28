"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "load", "delayCheckAdBlock" ], [ "DOMContentLoaded", "interstitialAd" ], [ "load", "adsCount" ], [ "error", "adscript-error" ], [ "load", "interstitialAd" ], [ "", "setTrigger" ], [ "scroll", "b.type" ], [ "click", "event" ], [ "playing", "VAST_TARGET" ], [ "DOMContentLoaded", "window[" ], [ "DOMContentLoaded", "showPopUpBanner" ], [ "click", "event.triggered" ] ], n = new Map([ [ "jukenbbs.com", 0 ], [ "blog.housinkai.com", 1 ], [ "kakenhi.net", 1 ], [ "seesaa.net", 1 ], [ "blog-and-destroy.com", 2 ], [ "coolpan.net", 3 ], [ "twivideo.net", 4 ], [ "twidouga.net", 5 ], [ "anacap.doorblog.jp", 6 ], [ "anianierosuki.work", 7 ], [ "uraaka-joshi.com", 8 ], [ "tokyomotion.net", 9 ], [ "ero-video.net", 10 ], [ "jp-xvideos.info", 11 ] ]), r = new Map([]), o = new Map([]);
        function s(t = "", n = "") {
            const r = i(), o = r.getExtraArgs(Array.from(arguments), 2), s = r.makeLogPrefix("prevent-addEventListener", t, n), a = r.patternToRegex(t, void 0, !0), c = r.patternToRegex(n), l = (function(t) {
                if (t instanceof Object == 0) return !1;
                e.canDebug && t.debug;
            }(o), o.elements || void 0), d = e => {
                if (e instanceof Window) return "window";
                if (e instanceof Document) return "document";
                if (e instanceof Element == 0) return "?";
                const t = [];
                "" !== e.id && t.push(`#${CSS.escape(e.id)}`);
                for (let n = 0; n < e.classList.length; n++) t.push(`.${CSS.escape(e.classList.item(n))}`);
                for (let n = 0; n < e.attributes.length; n++) {
                    const r = e.attributes.item(n);
                    "id" !== r.name && "class" !== r.name && t.push(`[${CSS.escape(r.name)}="${r.value}"]`);
                }
                return t.join("");
            }, p = (e, t, n) => {
                const o = r.RegExp_test.call(a, t), s = r.RegExp_test.call(c, n), i = o && s;
                return (!i || void 0 === l || !1 !== (!!((d = e) && d.matches && d.matches(l)) || Array.from(document.querySelectorAll(l)).includes(d))) && i;
                var d;
            };
            !function(e, t) {
                const n = e => {
                    const t = {
                        loading: 1,
                        interactive: 2,
                        end: 2,
                        2: 2,
                        complete: 3,
                        idle: 3,
                        3: 3
                    }, n = Array.isArray(e) ? e : [ e ];
                    for (const e of n) {
                        const n = `${e}`;
                        if (!1 !== t.hasOwnProperty(n)) return t[n];
                    }
                    return 0;
                }, r = n(t);
                if (n(document.readyState) >= r) return void e();
                const s = i(), a = [ "readystatechange", () => {
                    n(document.readyState) < r || (e(), s.removeEventListener.apply(document, a));
                }, {
                    capture: !0
                } ];
                s.addEventListener.apply(document, a);
            }((() => {
                (() => {
                    const e = {
                        apply: function(e, o, i) {
                            let a, c;
                            try {
                                a = String(i[0]), "function" == typeof i[1] ? c = String(r.Function_toString(i[1])) : "object" == typeof i[1] && null !== i[1] ? "function" == typeof i[1].handleEvent && (c = String(r.Function_toString(i[1].handleEvent))) : c = String(i[1]);
                            } catch (e) {}
                            if ("" === t && "" === n) r.uboLog(s, `Called: ${a}\n${c}\n${d(o)}`); else if (p(o, a, c)) return r.uboLog(s, `Prevented: ${a}\n${c}\n${d(o)}`);
                            return Reflect.apply(e, o, i);
                        },
                        get: (e, t, n) => "toString" === t ? e.toString.bind(e) : Reflect.get(e, t, n)
                    };
                    self.EventTarget.prototype.addEventListener = new Proxy(self.EventTarget.prototype.addEventListener, e);
                })();
            }), o.runAt);
        }
        function i() {
            if (e.safeSelf) return e.safeSelf;
            const t = globalThis, n = {
                Array_from: Array.from,
                Error: t.Error,
                Function_toStringFn: t.Function.prototype.toString,
                Function_toString: e => n.Function_toStringFn.call(e),
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
                JSON_parse: (...e) => n.JSON_parseFn.call(n.JSON, ...e),
                JSON_stringify: (...e) => n.JSON_stringifyFn.call(n.JSON, ...e),
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
                    const n = !0 !== t.canNegate || !1 === e.startsWith("!");
                    !1 === n && (e = e.slice(1));
                    const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== r ? {
                        re: new this.RegExp(r[1], r[2] || t.flags),
                        expect: n
                    } : void 0 !== t.flags ? {
                        re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                        expect: n
                    } : {
                        pattern: e,
                        expect: n
                    };
                },
                testPattern(e, t) {
                    return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
                },
                patternToRegex(e, t, n = !1) {
                    if ("" === e) return /^/;
                    const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === r) {
                        const r = this.escapeRegexChars(e);
                        return new RegExp(n ? `^${r}$` : r, t);
                    }
                    try {
                        return new RegExp(r[1], r[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const n = e.slice(t).reduce(((e, t, n, r) => {
                        if (0 == (1 & n)) {
                            const t = r[n + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ r[n], o ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(n);
                },
                onIdle: (e, n) => t.requestIdleCallback ? t.requestIdleCallback(e, n) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = n, void 0 === e.bcSecret) return n;
            const r = new t.BroadcastChannel(e.bcSecret);
            let o = [];
            return n.logLevel = e.logLevel || 1, n.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === o) return r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: n
                });
                o.push({
                    type: e,
                    text: n
                });
            }, r.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: e, text: t}) => r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
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
        } catch (e) {}
        const c = a.length;
        if (0 === c) return;
        const l = new Set, d = [];
        if (0 !== o.size) {
            for (let e = 0; e < c; e++) {
                const t = a.slice(e).join("."), n = o.get(t);
                n && d.push(...n);
            }
            o.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) d.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < c; t++) e(a.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== r.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = a.slice(t, n).join(".");
                let o = r.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) d.includes(e) || l.add(e);
                }
            }
            r.clear();
        }
        for (const e of l) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, r;
        try {
            t.uBOL_addEventListenerDefuser = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_addEventListenerDefuser);
            r = t.URL.createObjectURL(o);
            const s = t.document;
            n = s.createElement("script"), n.async = !1, n.src = r, (s.head || s.documentElement || s).append(n);
        } catch (e) {}
        r && (n && n.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_addEventListenerDefuser;
    }
})();