"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "parseInt" ], [ "adpiaListUrl" ], [ "Math.round" ], [ "pushOnPageGala" ], [ "sp" ], [ "adsRedirectPopups" ], [ "localStorage" ], [ "ads" ], [ "adsPlayer" ], [ "adsPopupPlayer" ], [ "adsTvc" ], [ "keyPlayer" ], [ "sessionStorage" ], [ "document.cookie" ], [ "nFNcksmwU" ], [ "open" ], [ "oneClick" ], [ "atob" ], [ "adtimaConfig" ] ], n = new Map([ [ "aoe.vn", 0 ], [ "audiotruyenfull.com", 1 ], [ "javnong.cc", 2 ], [ "linkneverdie.net", 3 ], [ "nettruyenus.net", 4 ], [ "opendatafrance.net", 5 ], [ "phimmoi4s.com", 6 ], [ "phimdinhcao.net", 6 ], [ "phimlongtieng.net", 6 ], [ "phimdinhcao.com", 6 ], [ "plvb.xyz", [ 7, 8, 9, 10, 11 ] ], [ "rk.plcdn.xyz", [ 7, 8, 9, 10, 11 ] ], [ "tinsoikeo.ink", 12 ], [ "truyensieuhay.com", 13 ], [ "phimvietsub.pro", 13 ], [ "quangcaoyenbai.com", 13 ], [ "sieudamtv.mobi", 13 ], [ "ephimchill.com", 13 ], [ "ophimhdvn3.net", 13 ], [ "thuvienhd.xyz", 13 ], [ "xemtv.tvhayhd.tv", 13 ], [ "www.khophim88s.com", 13 ], [ "nhentaivn.online", 13 ], [ "motphimtrung.net", 13 ], [ "mv.dailyphimz.com", 13 ], [ "mv.phimbathu.one", 13 ], [ "veryfiles.com", 14 ], [ "viettoons.tv", 15 ], [ "mv.phimmoiaz.cc", 15 ], [ "dood.pm", 15 ], [ "ytstv.me", 15 ], [ "animet1.net", 15 ], [ "anh.moe", 15 ], [ "truyenhentaivn.org", 15 ], [ "maclife.io", 15 ], [ "javfc2.net", 15 ], [ "hoctot.hocmai.vn", 15 ], [ "vinaurl.net", 16 ], [ "yts.do", 17 ], [ "yts.mx", 17 ], [ "yts.rs", 17 ], [ "znews.vn", 18 ] ]), o = new Map([]), r = new Map([]);
        function i(e = "") {
            if ("string" != typeof e) return;
            if ("" === e) return;
            const t = s(), n = t.makeLogPrefix("abort-on-property-read", e), o = function() {
                const e = s(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), n = self.onerror;
                return self.onerror = function(e, ...o) {
                    return !("string" != typeof e || !e.includes(t)) || (n instanceof Function ? n.call(this, e, ...o) : void 0);
                }.bind(), t;
            }(), r = function() {
                throw t.uboLog(n, "Aborted"), new ReferenceError(o);
            }, i = function(e, t) {
                const n = t.indexOf(".");
                if (-1 === n) {
                    const n = Object.getOwnPropertyDescriptor(e, t);
                    return void (n && n.get === r || Object.defineProperty(e, t, {
                        get: r,
                        set: function() {}
                    }));
                }
                const o = t.slice(0, n);
                let s = e[o];
                if (t = t.slice(n + 1), s) return void i(s, t);
                const c = Object.getOwnPropertyDescriptor(e, o);
                c && void 0 !== c.set || Object.defineProperty(e, o, {
                    get: function() {
                        return s;
                    },
                    set: function(e) {
                        s = e, e instanceof Object && i(e, t);
                    }
                });
            }, c = window;
            i(c, e);
        }
        function s() {
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
                    const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== o ? {
                        re: new this.RegExp(o[1], o[2] || t.flags),
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
                    const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === o) {
                        const o = this.escapeRegexChars(e);
                        return new RegExp(n ? `^${o}$` : o, t);
                    }
                    try {
                        return new RegExp(o[1], o[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const n = e.slice(t).reduce(((e, t, n, o) => {
                        if (0 == (1 & n)) {
                            const t = o[n + 1], r = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ o[n], r ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(n);
                },
                onIdle: (e, n) => t.requestIdleCallback ? t.requestIdleCallback(e, n) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = n, void 0 === e.bcSecret) return n;
            const o = new t.BroadcastChannel(e.bcSecret);
            let r = [];
            return n.logLevel = e.logLevel || 1, n.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === r) return o.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: n
                });
                r.push({
                    type: e,
                    text: n
                });
            }, o.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === r) break;
                    r.forEach((({type: e, text: t}) => o.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), r = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    n.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    n.logLevel = 2;
                }
            }, o.postMessage("areyouready?"), n;
        }
        const c = [];
        try {
            c.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = c.length;
        if (0 === a) return;
        const p = new Set, l = [];
        if (0 !== r.size) {
            for (let e = 0; e < a; e++) {
                const t = c.slice(e).join("."), n = r.get(t);
                n && l.push(...n);
            }
            r.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || p.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(c.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== o.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = c.slice(t, n).join(".");
                let r = o.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) l.includes(e) || p.add(e);
                }
            }
            o.clear();
        }
        for (const e of p) try {
            i(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, o;
        try {
            t.uBOL_abortOnPropertyRead = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_abortOnPropertyRead);
            o = t.URL.createObjectURL(r);
            const i = t.document;
            n = i.createElement("script"), n.async = !1, n.src = o, (i.head || i.documentElement || i).append(n);
        } catch (e) {}
        o && (n && n.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_abortOnPropertyRead;
    }
})();