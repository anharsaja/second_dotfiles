"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "block_ads" ], [ "setNptTechAdblockerCookie" ], [ "possivelAdblockDetectado" ], [ "eazyAdUnBlockerHttp" ], [ "antiAdBlockerStyle" ], [ "adBlockFunction" ], [ "Object.prototype.autoRecov" ], [ "ad_nodes" ], [ "hb_now" ], [ "adblock" ], [ "adsBlocked" ], [ "adblockDetected" ], [ "gothamBatAdblock" ], [ "Bl0ckAdBl0ckCo" ], [ "ppAdblocks" ], [ "mMCheckAgainBlock" ], [ "userout" ], [ "initPu" ], [ "cJsEdge" ], [ "lolaop" ], [ "adk_pdisp" ], [ "redirectpage" ], [ "initPopunder" ], [ "_cpp" ], [ "popurl" ], [ "the_crakien" ], [ "allclick_Public" ], [ "zoneSett" ], [ "checkCookieClick" ], [ "_0x4e52" ], [ "Redirecionar" ], [ "scriptwz_url" ], [ "smrtSB" ], [ "asgPopScript" ], [ "Object.prototype.Focm" ], [ "smrtSP" ], [ "adbClick" ], [ "pub" ], [ "Pub2" ] ], o = new Map([ [ "luratoon.com", 0 ], [ "elespanol.com", 1 ], [ "mundodevalor.me", 2 ], [ "aquiyahorajuegos.net", 3 ], [ "visorcrab.com", 4 ], [ "httpmangacrab2.com", 4 ], [ "manga-crab.com", 4 ], [ "mangacrab.com", 4 ], [ "hinatasoul.com", 5 ], [ "pcworld.es", 6 ], [ "tunovelaligera.com", 7 ], [ "20minutos.es", 8 ], [ "comando.to", 9 ], [ "porno-japones.top", 10 ], [ "tvplusgratis.com", 11 ], [ "hobbugs.com", 11 ], [ "seriesretro.com", 12 ], [ "cozinha.minhasdelicias.com", 13 ], [ "diariodegoias.com.br", 14 ], [ "outerspace.com.br", 14 ], [ "1i1.in", 15 ], [ "packsmega.info", 16 ], [ "embedder.net", 17 ], [ "poseidonhd2.co", 18 ], [ "fiuxy2.com", 19 ], [ "pelispop.me", 20 ], [ "baixartorrents.org", [ 21, 22 ] ], [ "pctmix1.com", 23 ], [ "aquariumgays.com", 23 ], [ "allfeeds.live", 24 ], [ "grantorrent.nl", 27 ], [ "hentaistube.com", 28 ], [ "libertinga.net", 29 ], [ "mrpiracy.top", 30 ], [ "seireshd.com", 31 ], [ "cinetux.to", [ 32, 33 ] ], [ "holanime.com", 34 ], [ "pirlotv.es", 35 ], [ "repelisplus.vip", 36 ], [ "descargaranimehentai.com", 37 ], [ "tuhentaionline.com", 38 ] ]), r = new Map([ [ "cuevana2espanol", 18 ], [ "cuevana", 18 ], [ "cinecalidad2", 25 ], [ "cine-calidad", 26 ] ]), n = new Map([]);
        function c(e = "") {
            if ("string" != typeof e) return;
            if ("" === e) return;
            const t = i(), o = t.makeLogPrefix("abort-on-property-read", e), r = function() {
                const e = i(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), o = self.onerror;
                return self.onerror = function(e, ...r) {
                    return !("string" != typeof e || !e.includes(t)) || (o instanceof Function ? o.call(this, e, ...r) : void 0);
                }.bind(), t;
            }(), n = function() {
                throw t.uboLog(o, "Aborted"), new ReferenceError(r);
            }, c = function(e, t) {
                const o = t.indexOf(".");
                if (-1 === o) {
                    const o = Object.getOwnPropertyDescriptor(e, t);
                    return void (o && o.get === n || Object.defineProperty(e, t, {
                        get: n,
                        set: function() {}
                    }));
                }
                const r = t.slice(0, o);
                let i = e[r];
                if (t = t.slice(o + 1), i) return void c(i, t);
                const a = Object.getOwnPropertyDescriptor(e, r);
                a && void 0 !== a.set || Object.defineProperty(e, r, {
                    get: function() {
                        return i;
                    },
                    set: function(e) {
                        i = e, e instanceof Object && c(e, t);
                    }
                });
            }, a = window;
            c(a, e);
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
        const s = a.length;
        if (0 === s) return;
        const l = new Set, p = [];
        if (0 !== n.size) {
            for (let e = 0; e < s; e++) {
                const t = a.slice(e).join("."), o = n.get(t);
                o && p.push(...o);
            }
            n.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) p.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < s; t++) e(a.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== r.size) {
            const e = s - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = a.slice(t, o).join(".");
                let n = r.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) p.includes(e) || l.add(e);
                }
            }
            r.clear();
        }
        for (const e of l) try {
            c(...t[e]);
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
            const c = t.document;
            o = c.createElement("script"), o.async = !1, o.src = r, (c.head || c.documentElement || c).append(o);
        } catch (e) {}
        r && (o && o.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_abortOnPropertyRead;
    }
})();