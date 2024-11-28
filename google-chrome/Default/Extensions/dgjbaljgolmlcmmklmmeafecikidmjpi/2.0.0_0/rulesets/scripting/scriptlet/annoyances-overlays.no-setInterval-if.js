"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "height" ], [ "0x" ], [ "debugger" ], [ "visibility", "1000" ], [ "pushAd" ], [ "removeChild" ], [ "modal" ], [ "_0x" ], [ "clearInterval(loginReady)" ], [ "offsetHeight" ], [ "adsbygoogle" ], [ "dfgh-adsbygoogle" ], [ "/_0x|devtools/" ], [ "debug" ], [ "potato" ], [ "detect" ], [ "console.clear" ], [ "/DevTools|_0x/" ], [ "ads" ], [ "devtoolsDetector" ], [ "DevToolsOpen" ], [ "devtool" ], [ "getComputedStyle" ], [ "devtools" ] ], o = new Map([ [ "smashboards.com", 0 ], [ "mobilarena.hu", 1 ], [ "avdelphi.com", 2 ], [ "pornhd8k.net", 2 ], [ "masuit.com", 2 ], [ "iphonecake.com", 3 ], [ "ziperto.com", 3 ], [ "compartiendofull.net", 3 ], [ "themeparktourist.com", 3 ], [ "magnet-novels.com", 4 ], [ "bluemoon-mcfc.co.uk", 5 ], [ "bendigoadvertiser.com.au", 6 ], [ "lvturbo.com", 7 ], [ "sbbrisk.com", 7 ], [ "sbface.com", 7 ], [ "sbspeed.com", 7 ], [ "streamsb.net", 7 ], [ "wouterplanet.com", 7 ], [ "actvid.com", 7 ], [ "vipstreams.in", 7 ], [ "699pic.com", 8 ], [ "thinkamericana.com", 9 ], [ "menrec.com", 9 ], [ "mocah.org", 10 ], [ "coolwallpapers.me", 11 ], [ "sflix.to", 12 ], [ "webnovel.com", 13 ], [ "freemcserver.net", 14 ], [ "vgembed.com", 15 ], [ "braflix.app", 15 ], [ "sbot.cf", 16 ], [ "bluphim.com", 16 ], [ "cdnmoviking.tech", 16 ], [ "movie4kto.net", 17 ], [ "alfred.camera", 18 ], [ "vidstreaming.xyz", 19 ], [ "choosingnothing.com", 19 ], [ "ngelmat.net", 20 ], [ "bembed.net", 21 ], [ "embedv.net", 21 ], [ "fslinks.org", 21 ], [ "listeamed.net", 21 ], [ "v6embed.xyz", 21 ], [ "vgplayer.xyz", 21 ], [ "vid-guard.com", 21 ], [ "fightful.com", 22 ], [ "player.melaniezettofrais.online", 23 ] ]), n = new Map([ [ "vidsrc", 21 ], [ "vembed", 21 ] ]), r = new Map([]);
        function s(t = "", o = "") {
            if ("string" != typeof t) return;
            const n = function() {
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
            }(), r = n.makeLogPrefix("prevent-setInterval", t, o), s = "!" === t.charAt(0);
            s && (t = t.slice(1)), "" === o && (o = void 0);
            let c = !1;
            void 0 !== o && (c = "!" === o.charAt(0), c && (o = o.slice(1)), o = parseInt(o, 10));
            const i = n.patternToRegex(t);
            self.setInterval = new Proxy(self.setInterval, {
                apply: function(e, a, l) {
                    const g = l[0] instanceof Function ? String(n.Function_toString(l[0])) : String(l[0]), p = l[1];
                    if ("" === t && void 0 === o) return n.uboLog(r, `Called:\n${g}\n${p}`), Reflect.apply(e, a, l);
                    let d;
                    return "" !== t && (d = i.test(g) !== s), !1 !== d && void 0 !== o && (d = (p === o || isNaN(p) && isNaN(o)) !== c), 
                    d && (l[0] = function() {}, n.uboLog(r, `Prevented:\n${g}\n${p}`)), Reflect.apply(e, a, l);
                },
                get: (e, t, o) => "toString" === t ? e.toString.bind(e) : Reflect.get(e, t, o)
            });
        }
        const c = [];
        try {
            c.push(...document.location.hostname.split("."));
        } catch (e) {}
        const i = c.length;
        if (0 === i) return;
        const a = new Set, l = [];
        if (0 !== r.size) {
            for (let e = 0; e < i; e++) {
                const t = c.slice(e).join("."), o = r.get(t);
                o && l.push(...o);
            }
            r.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || a.add(e);
                }
            };
            for (let t = 0; t < i; t++) e(c.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== n.size) {
            const e = i - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = c.slice(t, o).join(".");
                let r = n.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) l.includes(e) || a.add(e);
                }
            }
            n.clear();
        }
        for (const e of a) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, n;
        try {
            t.uBOL_noSetIntervalIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_noSetIntervalIf);
            n = t.URL.createObjectURL(r);
            const s = t.document;
            o = s.createElement("script"), o.async = !1, o.src = n, (s.head || s.documentElement || s).append(o);
        } catch (e) {}
        n && (o && o.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_noSetIntervalIf;
    }
})();