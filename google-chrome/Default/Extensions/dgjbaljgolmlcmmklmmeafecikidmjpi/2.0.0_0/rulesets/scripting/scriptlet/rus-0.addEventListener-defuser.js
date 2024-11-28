"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "/^(?:contextmenu|keydown)$/" ], [ "/click|load/", "popMagic" ], [ "/click|mousedown/", "popunder" ], [ "/contextmenu|copy|keydown|selectstart/" ], [ "/mouse/", "cursorVisible" ], [ "DOMContentLoaded", ".j-mini-player__video" ], [ "DOMContentLoaded", "/smartweek/" ], [ "DOMContentLoaded", "0x" ], [ "DOMContentLoaded", "banners" ], [ "click", "", "elements", 'a[href*="utm_campaign"]' ], [ "click", "[native code]" ], [ "click", "matches" ], [ "copy", "extra" ], [ "copy", "getSelection" ], [ "copy", "pagelink" ], [ "getexoloader" ], [ "load", "AdBlock" ], [ "load", "mamydirect" ], [ "loadstart", "isImmediatePropagationStopped" ], [ "scroll", "getBoundingClientRect" ], [ "scroll", "players" ], [ "scroll", "window.history.pushState" ], [ "visibilitychange", "captureContext" ] ], r = new Map([ [ "7days.ru", [ 0, 22 ] ], [ "fastpic.org", [ 1, 15 ] ], [ "biqle.org", 2 ], [ "biqle.ru", 2 ], [ "autonews.co.ua", 3 ], [ "liveball.cc", 3 ], [ "liveball.uno", 3 ], [ "ukrainianwall.com", 3 ], [ "fm-app.ru", 4 ], [ "tvapp.su", 4 ], [ "yootv.ru", 4 ], [ "rambler.ru", [ 5, 12 ] ], [ "sibnet.ru", 6 ], [ "sports.ru", 7 ], [ "cq.ru", 8 ], [ "regnum.news", 9 ], [ "regnum.ru", 9 ], [ "softonic.ru", 10 ], [ "smotrim.ru", 11 ], [ "rbc.ru", 13 ], [ "sportrbc.ru", 13 ], [ "carservic.ru", 14 ], [ "iptv.org.ua", 14 ], [ "tva.org.ua", 14 ], [ "ufchgu.ru", 14 ], [ "romakatya.ru", 16 ], [ "overclockers.ru", 17 ], [ "bonus-tv.ru", 18 ], [ "m.lenta.ru", 19 ], [ "www.vesti.ru", 20 ], [ "lenta.ru", 21 ], [ "cdn.viqeo.tv", 22 ], [ "kinonews.ru", 22 ], [ "kp.kg", 22 ], [ "kp.kz", 22 ], [ "kp.md", 22 ], [ "kp.ru", 22 ], [ "mk.ru", 22 ], [ "ohotniki.ru", 22 ], [ "portalvirtualreality.ru", 22 ], [ "radiokp.ru", 22 ], [ "sportkp.ru", 22 ], [ "wday.ru", 22 ], [ "woman.ru", 22 ], [ "www.fontanka.ru", 22 ] ]), n = new Map([]), o = new Map([ [ "new.fastpic.org", [ 1, 15 ] ], [ "id.rambler.ru", [ 5, 12 ] ], [ "vp.rambler.ru", [ 5, 12 ] ], [ "player.smotrim.ru", [ 11 ] ], [ "mail.rambler.ru", [ 12 ] ] ]);
        function a(t = "", r = "") {
            const n = s(), o = n.getExtraArgs(Array.from(arguments), 2), a = n.makeLogPrefix("prevent-addEventListener", t, r), i = n.patternToRegex(t, void 0, !0), c = n.patternToRegex(r), l = (function(t) {
                if (t instanceof Object == 0) return !1;
                e.canDebug && t.debug;
            }(o), o.elements || void 0), u = e => {
                if (e instanceof Window) return "window";
                if (e instanceof Document) return "document";
                if (e instanceof Element == 0) return "?";
                const t = [];
                "" !== e.id && t.push(`#${CSS.escape(e.id)}`);
                for (let r = 0; r < e.classList.length; r++) t.push(`.${CSS.escape(e.classList.item(r))}`);
                for (let r = 0; r < e.attributes.length; r++) {
                    const n = e.attributes.item(r);
                    "id" !== n.name && "class" !== n.name && t.push(`[${CSS.escape(n.name)}="${n.value}"]`);
                }
                return t.join("");
            }, p = (e, t, r) => {
                const o = n.RegExp_test.call(i, t), a = n.RegExp_test.call(c, r), s = o && a;
                return (!s || void 0 === l || !1 !== (!!((u = e) && u.matches && u.matches(l)) || Array.from(document.querySelectorAll(l)).includes(u))) && s;
                var u;
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
                }, n = r(t);
                if (r(document.readyState) >= n) return void e();
                const a = s(), i = [ "readystatechange", () => {
                    r(document.readyState) < n || (e(), a.removeEventListener.apply(document, i));
                }, {
                    capture: !0
                } ];
                a.addEventListener.apply(document, i);
            }((() => {
                (() => {
                    const e = {
                        apply: function(e, o, s) {
                            let i, c;
                            try {
                                i = String(s[0]), "function" == typeof s[1] ? c = String(n.Function_toString(s[1])) : "object" == typeof s[1] && null !== s[1] ? "function" == typeof s[1].handleEvent && (c = String(n.Function_toString(s[1].handleEvent))) : c = String(s[1]);
                            } catch (e) {}
                            if ("" === t && "" === r) n.uboLog(a, `Called: ${i}\n${c}\n${u(o)}`); else if (p(o, i, c)) return n.uboLog(a, `Prevented: ${i}\n${c}\n${u(o)}`);
                            return Reflect.apply(e, o, s);
                        },
                        get: (e, t, r) => "toString" === t ? e.toString.bind(e) : Reflect.get(e, t, r)
                    };
                    self.EventTarget.prototype.addEventListener = new Proxy(self.EventTarget.prototype.addEventListener, e);
                })();
            }), o.runAt);
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
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = i.length;
        if (0 === c) return;
        const l = new Set, u = [];
        if (0 !== o.size) {
            for (let e = 0; e < c; e++) {
                const t = i.slice(e).join("."), r = o.get(t);
                r && u.push(...r);
            }
            o.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) u.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < c; t++) e(i.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== n.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = i.slice(t, r).join(".");
                let o = n.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) u.includes(e) || l.add(e);
                }
            }
            n.clear();
        }
        for (const e of l) try {
            a(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, n;
        try {
            t.uBOL_addEventListenerDefuser = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_addEventListenerDefuser);
            n = t.URL.createObjectURL(o);
            const a = t.document;
            r = a.createElement("script"), r.async = !1, r.src = n, (a.head || a.documentElement || a).append(r);
        } catch (e) {}
        n && (r && r.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_addEventListenerDefuser;
    }
})();