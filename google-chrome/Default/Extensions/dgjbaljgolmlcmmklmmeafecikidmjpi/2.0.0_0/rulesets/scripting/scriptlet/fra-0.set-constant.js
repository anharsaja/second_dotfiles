"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "integrityObserver.corrupted", "0" ], [ "checkAdsBlocked", "noopFunc" ], [ "dAp", "true" ], [ "navigator.brave", "undefined" ], [ "checkDiv", "noopFunc" ], [ "moneyAbovePrivacy", "true" ], [ "bAdBlocker", "false" ], [ "noPub", "1" ], [ "canRunAds", "true" ], [ "adClasses", "[]" ], [ "adblockdetected", "false" ], [ "integrityObserver.corrupted", "false" ], [ "window.adsapp", "true" ], [ "ujloijdkhjkwus", "false" ], [ "wIsAdBlocked", "false" ], [ "adBlockDetected", "false" ], [ "google_jobrunner", "noopFunc" ], [ "ptv.Data.uniroll", "{}" ], [ "pmd.Data.uniroll", "{}" ], [ "OAS_AD", "noopFunc" ], [ "Object.prototype.isBlockerDetected", "false" ], [ "__TF1_CONFIG__.featureFlag.contentAccess.isAdblockCheckRequired", "false" ], [ "__TF1_CONFIG__.adblock.display", "false" ], [ "__TF1_CONFIG__.adblock.serverRequest", "false" ], [ "advanced_ads_ready", "noopFunc" ], [ "FastClick", "noopFunc" ], [ "FastClick.attach", "noopFunc" ], [ "adsConfig", "[]" ], [ "isSetupAccess", "true" ], [ "Object.prototype.withAds", "false" ], [ "AC.config.ads", "{}" ], [ "getAudioAdUrl", "noopFunc" ], [ "aEteAffiche", "true" ], [ "__data.application.settings.featPlayerAds", "false" ], [ "tv.freewheel.SDK.Util.pingURLWithForm", "trueFunc" ], [ "tv.freewheel.SDK.Util.pingURLWithImage", "trueFunc" ], [ "tv.freewheel.SDK.Util.pingURLWithScript", "trueFunc" ], [ "tv.freewheel.SDK.Util.pingURLWithXMLHTTPRequest", "trueFunc" ], [ "tv.freewheel.SDK.Util.sendAdRequestWithXMLHTTPRequest", "trueFunc" ], [ "__NEXT_DATA__.runtimeConfig.playerTF1.ads.enable", "false" ] ], r = new Map([ [ "journaldesfemmes.fr", 0 ], [ "rustica.fr", 1 ], [ "cookomix.com", 2 ], [ "empire-stream.net", 3 ], [ "cinefil.com", 4 ], [ "signal-arnaques.com", 5 ], [ "dhnet.be", 6 ], [ "sudinfo.be", 6 ], [ "7sur7.be", 6 ], [ "rtl.be", 6 ], [ "pianoweb.fr", 7 ], [ "parlons-basket.com", 8 ], [ "mac4ever.com", 8 ], [ "jaitoutcompris.com", 9 ], [ "varmatin.com", 10 ], [ "nicematin.com", 10 ], [ "commentcamarche.net", 11 ], [ "20minutes.fr", 12 ], [ "hollywoodpq.com", 13 ], [ "jardiner-malin.fr", 14 ], [ "hack-life.net", 15 ], [ "jtrouver.com", 16 ], [ "playtv.fr", [ 17, 18 ] ], [ "skyrock.com", 19 ], [ "skyrock.fr", 19 ], [ "6play.fr", [ 20, 34, 35, 36, 37, 38 ] ], [ "tf1.fr", [ 21, 22, 23, 34, 35, 36, 37, 38 ] ], [ "justarrived.lu", 24 ], [ "occasions.decathlon.fr", [ 25, 26 ] ], [ "e-player-stream.app", 28 ], [ "maxisciences.com", 29 ], [ "gentside.com", 29 ], [ "femmeactuelle.fr", 29 ], [ "geo.fr", 29 ], [ "voici.fr", 29 ], [ "programme-tv.net", 29 ], [ "gala.fr", 29 ], [ "capital.fr", 29 ], [ "allocine.fr", 30 ], [ "funradio.fr", 31 ], [ "rtl2.fr", 31 ], [ "rtl.fr", 31 ], [ "reflectim.fr", 32 ], [ "e-sushi.fr", 32 ], [ "canalplus.com", 33 ], [ "tf1info.fr", 39 ] ]), n = new Map([ [ "empire-streaming", 3 ], [ "e-player-stream", 27 ] ]), o = new Map([]);
        function c(...e) {
            !function(e = !1, t = "", r = "") {
                if ("" === t) return;
                const n = i(), o = n.makeLogPrefix("set-constant", t, r), c = n.getExtraArgs(Array.from(arguments), 3);
                function s(t, r) {
                    const c = (() => {
                        const e = t.lastIndexOf(".");
                        return -1 === e ? t : t.slice(e + 1);
                    })();
                    if ("" === c) return;
                    const a = document.currentScript;
                    let l = function(e, t) {
                        const r = i(), n = r.getExtraArgs(Array.from(arguments), 2);
                        let o;
                        if ("undefined" === t) o = void 0; else if ("false" === t) o = !1; else if ("true" === t) o = !0; else if ("null" === t) o = null; else if ("''" === t || "" === t) o = ""; else if ("[]" === t || "emptyArr" === t) o = []; else if ("{}" === t || "emptyObj" === t) o = {}; else if ("noopFunc" === t) o = function() {}; else if ("trueFunc" === t) o = function() {
                            return !0;
                        }; else if ("falseFunc" === t) o = function() {
                            return !1;
                        }; else if (/^-?\d+$/.test(t)) {
                            if (o = parseInt(t), isNaN(t)) return;
                            if (Math.abs(t) > 32767) return;
                        } else {
                            if (!e) return;
                            if (t.startsWith("{") && t.endsWith("}")) try {
                                o = r.JSON_parse(t).value;
                            } catch (e) {
                                return;
                            }
                        }
                        if (void 0 !== n.as) {
                            if ("function" === n.as) return () => o;
                            if ("callback" === n.as) return () => () => o;
                            if ("resolved" === n.as) return Promise.resolve(o);
                            if ("rejected" === n.as) return Promise.reject(o);
                        }
                        return o;
                    }(e, r);
                    "noopFunc" !== r && "trueFunc" !== r && "falseFunc" !== r || (l = (e => (n.Object_defineProperty(e, "name", {
                        value: c
                    }), new Proxy(e, {
                        defineProperty(e, t) {
                            return "toString" === t || Reflect.defineProperty(...arguments);
                        },
                        deleteProperty(e, t) {
                            return "toString" === t || Reflect.deleteProperty(...arguments);
                        },
                        get(e, t) {
                            return "toString" === t ? function() {
                                return `function ${c}() { [native code] }`;
                            }.bind(null) : Reflect.get(...arguments);
                        }
                    })))(l));
                    let u = !1;
                    const f = function(t) {
                        return !e && (!!u || (u = null != t && null != l && typeof t != typeof l, u && n.uboLog(o, `Aborted because value set to ${t}`), 
                        u));
                    }, d = function(e, t, r, c) {
                        if (!1 === c.init(r ? e[t] : l)) return;
                        const i = n.Object_getOwnPropertyDescriptor(e, t);
                        let s, a;
                        i instanceof n.Object && (e[t] = l, i.get instanceof Function && (s = i.get), i.set instanceof Function && (a = i.set));
                        try {
                            n.Object_defineProperty(e, t, {
                                configurable: r,
                                get: () => (void 0 !== s && s(), c.getter()),
                                set(e) {
                                    void 0 !== a && a(e), c.setter(e);
                                }
                            }), n.uboLog(o, "Trap installed");
                        } catch (e) {
                            n.uboErr(o, e);
                        }
                    }, p = function(e, t) {
                        const r = t.indexOf(".");
                        if (-1 === r) return void d(e, t, !1, {
                            v: void 0,
                            init: function(e) {
                                return !f(e) && (this.v = e, !0);
                            },
                            getter: function() {
                                return document.currentScript === a ? this.v : (n.uboLog(o, "Property read"), l);
                            },
                            setter: function(e) {
                                !1 !== f(e) && (l = e);
                            }
                        });
                        const c = t.slice(0, r), i = e[c];
                        t = t.slice(r + 1), i instanceof n.Object || "object" == typeof i && null !== i ? p(i, t) : d(e, c, !0, {
                            v: void 0,
                            init: function(e) {
                                return this.v = e, !0;
                            },
                            getter: function() {
                                return this.v;
                            },
                            setter: function(e) {
                                this.v = e, e instanceof n.Object && p(e, t);
                            }
                        });
                    };
                    p(window, t);
                }
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
                    const c = i(), s = [ "readystatechange", () => {
                        r(document.readyState) < n || (e(), c.removeEventListener.apply(document, s));
                    }, {
                        capture: !0
                    } ];
                    c.addEventListener.apply(document, s);
                }((() => {
                    s(t, r);
                }), c.runAt);
            }(!1, ...e);
        }
        function i() {
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
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = s.length;
        if (0 === a) return;
        const l = new Set, u = [];
        if (0 !== o.size) {
            for (let e = 0; e < a; e++) {
                const t = s.slice(e).join("."), r = o.get(t);
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
            for (let t = 0; t < a; t++) e(s.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== n.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = s.slice(t, r).join(".");
                let o = n.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) u.includes(e) || l.add(e);
                }
            }
            n.clear();
        }
        for (const e of l) try {
            c(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, n;
        try {
            t.uBOL_setConstant = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_setConstant);
            n = t.URL.createObjectURL(o);
            const c = t.document;
            r = c.createElement("script"), r.async = !1, r.src = n, (c.head || c.documentElement || c).append(r);
        } catch (e) {}
        n && (r && r.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_setConstant;
    }
})();