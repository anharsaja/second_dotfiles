"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "btoa" ], [ "isMobileasokita" ], [ "googletag.cmd" ], [ "mdp_deblocker" ] ], o = new Map([ [ "6days.walla.co.il", 0 ], [ "animals.walla.co.il", 0 ], [ "astrology.walla.co.il", 0 ], [ "b.walla.co.il", 0 ], [ "buzzit.walla.co.il", 0 ], [ "cars.walla.co.il", 0 ], [ "celebs.walla.co.il", 0 ], [ "e.walla.co.il", 0 ], [ "elections.walla.co.il", 0 ], [ "euro.walla.co.il", 0 ], [ "fashion.walla.co.il", 0 ], [ "finance.walla.co.il", 0 ], [ "food.walla.co.il", 0 ], [ "healthy.walla.co.il", 0 ], [ "home.walla.co.il", 0 ], [ "judaism.walla.co.il", 0 ], [ "kids.walla.co.il", 0 ], [ "mag.walla.co.il", 0 ], [ "movies.walla.co.il", 0 ], [ "mundial.walla.co.il", 0 ], [ "nadlan.walla.co.il", 0 ], [ "news.walla.co.il", 0 ], [ "nick.walla.co.il", 0 ], [ "olympics.walla.co.il", 0 ], [ "sports.walla.co.il", 0 ], [ "tags.walla.co.il", 0 ], [ "tech.walla.co.il", 0 ], [ "travel.walla.co.il", 0 ], [ "tv-guide.walla.co.il", 0 ], [ "usaelections.walla.co.il", 0 ], [ "viva.walla.co.il", 0 ], [ "vod.walla.co.il", 0 ], [ "weather.walla.co.il", 0 ], [ "www.walla.co.il", 0 ], [ "walla.co.il", [ 1, 2 ] ], [ "sheee.co.il", 2 ], [ "jmusic.me", 3 ] ]), r = new Map([]), n = new Map([ [ "mail.walla.co.il", [ 2 ] ] ]);
        function a(e = "") {
            if ("string" != typeof e) return;
            if ("" === e) return;
            const t = l(), o = t.makeLogPrefix("abort-on-property-read", e), r = function() {
                const e = l(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), o = self.onerror;
                return self.onerror = function(e, ...r) {
                    return !("string" != typeof e || !e.includes(t)) || (o instanceof Function ? o.call(this, e, ...r) : void 0);
                }.bind(), t;
            }(), n = function() {
                throw t.uboLog(o, "Aborted"), new ReferenceError(r);
            }, a = function(e, t) {
                const o = t.indexOf(".");
                if (-1 === o) {
                    const o = Object.getOwnPropertyDescriptor(e, t);
                    return void (o && o.get === n || Object.defineProperty(e, t, {
                        get: n,
                        set: function() {}
                    }));
                }
                const r = t.slice(0, o);
                let l = e[r];
                if (t = t.slice(o + 1), l) return void a(l, t);
                const i = Object.getOwnPropertyDescriptor(e, r);
                i && void 0 !== i.set || Object.defineProperty(e, r, {
                    get: function() {
                        return l;
                    },
                    set: function(e) {
                        l = e, e instanceof Object && a(e, t);
                    }
                });
            }, i = window;
            a(i, e);
        }
        function l() {
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
        const s = new Set, g = [];
        if (0 !== n.size) {
            for (let e = 0; e < c; e++) {
                const t = i.slice(e).join("."), o = n.get(t);
                o && g.push(...o);
            }
            n.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) g.includes(e) || s.add(e);
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
                    for (const e of n) g.includes(e) || s.add(e);
                }
            }
            r.clear();
        }
        for (const e of s) try {
            a(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, r;
        try {
            t.uBOL_abortOnPropertyRead = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_abortOnPropertyRead);
            r = t.URL.createObjectURL(n);
            const a = t.document;
            o = a.createElement("script"), o.async = !1, o.src = r, (a.head || a.documentElement || a).append(o);
        } catch (e) {}
        r && (o && o.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_abortOnPropertyRead;
    }
})();