"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "_AdBlockInit", "noopFunc" ], [ "google_tag_data", "{}" ], [ "killAdKiller", "noopFunc" ], [ "AD_SURVEY_Add_AdPos", "noopFunc" ], [ "AD_SURVEY_Add_AdPos_Simple", "noopFunc" ], [ "killads", "true" ], [ "all520dddaaa2022ccc", "true" ], [ "isAdsDisplayed", "true" ], [ "fuzqingAdPlus", "{}" ], [ "all520dddaaa2022aaa", "undefined" ], [ "canRunAds", "true" ], [ "adblock", "0" ], [ "can_run_ads", "true" ], [ "ga", "noopFunc" ], [ "google_empty_script_included", "true" ], [ "adsbygoogle", "noopFunc" ], [ "adblock", "false" ], [ "Object.prototype.cnobpreroll_", "true" ], [ "Object.prototype.canobpreroll_", "true" ], [ "ads", "" ], [ "NativeAd", "noopFunc" ], [ "__jsadsuccess", "true" ], [ "onload", "null" ], [ "adbk", "false" ], [ "preBid", "{}" ], [ "preBid.displayAd", "noopFunc" ], [ "preBid.getPrerollVASTUrl", "noopFunc" ], [ "player.VastADPlugin", "noopFunc" ], [ "ADSOBJET", "{}" ], [ "myPlayer.adDisplay", "undefined" ], [ "NEWS_FEED", "noopFunc" ], [ "conone_lmg", "noopFunc" ], [ "Object.prototype.ad_switch", "0" ], [ "dy_card_dyrun", "undefined" ], [ "poped", "true" ], [ "Object.prototype.adData", "{}" ], [ "Object.prototype._adData", "{}" ], [ "adsbygoogle.loaded", "true" ], [ "MM_openBrWindow", "noopFunc" ], [ "lists", "undefined" ], [ "is_show", "false" ], [ "CreativePlayerwebPlugin.AD_EVENT.AD_DESTROY", "" ], [ "CreativePlayerwebPlugin.AD_EVENT.AD_LOAD_START", "" ], [ "pageData.__banners.0.commercial.mediaUrl", "" ], [ "pageData.__banners.0.commercial.jumpUrl", "" ], [ "pageData.__banners.0.commercial.title", "" ], [ "pageData.__banners.1.commercial.mediaUrl", "" ], [ "pageData.__banners.1.commercial.jumpUrl", "" ], [ "pageData.__banners.1.commercial.title", "" ], [ "detailParams.is_ad_play", "false" ] ], n = new Map([ [ "nodejs.cn", 0 ], [ "docsmall.com", 0 ], [ "hmoeh.com", 1 ], [ "api.guailie.com", 2 ], [ "huanqiu.com", [ 3, 4 ] ], [ "itbaoku.cn", 5 ], [ "yaociyuan.bid", 5 ], [ "bigpixel.cn", 5 ], [ "jkpan.cc", 5 ], [ "520cc.cc", 6 ], [ "520call.me", [ 6, 9 ] ], [ "ekamus.info", 7 ], [ "koyi.pub", 8 ], [ "bde4.icu", 10 ], [ "tingfm.com", [ 10, 12 ] ], [ "linovelib.com", 11 ], [ "ebb.io", [ 13, 14 ] ], [ "wenxuecity.com", 15 ], [ "lnk2.cc", 16 ], [ "ddrk.me", [ 17, 18 ] ], [ "sssam.com", 19 ], [ "cocomanga.com", [ 20, 21 ] ], [ "ohmanhua.com", [ 20, 21 ] ], [ "onemanhua.com", [ 20, 21 ] ], [ "hboav.com", [ 22, 23 ] ], [ "now.com", [ 24, 25, 26 ] ], [ "player.hboav.com", 27 ], [ "x99av.com", 28 ], [ "hamivideo.hinet.net", 29 ], [ "jianshu.com", 30 ], [ "xkyn.com", 31 ], [ "tangdoucdn.com", 32 ], [ "dianyingim.com", 33 ], [ "xvideo.cc", 34 ], [ "v-wb.youku.com", 35 ], [ "m.youku.com", 36 ], [ "v.youku.com", 36 ], [ "myptt.cc", 37 ], [ "edc1014070.pixnet.net", 38 ], [ "m.biqiugege8.com", 39 ], [ "theav.xyz", 40 ], [ "69xx.one", 40 ], [ "theporn.cc", 40 ], [ "lpl.qq.com", [ 41, 42 ] ], [ "v.qq.com", [ 41, 42 ] ], [ "nivod9.tv", [ 43, 44, 45, 46, 47, 48, 49 ] ], [ "nivod8.tv", [ 43, 44, 45, 46, 47, 48, 49 ] ], [ "nivod7.tv", [ 43, 44, 45, 46, 47, 48, 49 ] ], [ "nivod5.tv", [ 43, 44, 45, 46, 47, 48, 49 ] ], [ "nivod4.tv", [ 43, 44, 45, 46, 47, 48, 49 ] ] ]), o = new Map([ [ "ddys", [ 17, 18 ] ] ]), r = new Map([]);
        function c(...e) {
            !function(e = !1, t = "", n = "") {
                if ("" === t) return;
                const o = i(), r = o.makeLogPrefix("set-constant", t, n), c = o.getExtraArgs(Array.from(arguments), 3);
                function a(t, n) {
                    const c = (() => {
                        const e = t.lastIndexOf(".");
                        return -1 === e ? t : t.slice(e + 1);
                    })();
                    if ("" === c) return;
                    const s = document.currentScript;
                    let l = function(e, t) {
                        const n = i(), o = n.getExtraArgs(Array.from(arguments), 2);
                        let r;
                        if ("undefined" === t) r = void 0; else if ("false" === t) r = !1; else if ("true" === t) r = !0; else if ("null" === t) r = null; else if ("''" === t || "" === t) r = ""; else if ("[]" === t || "emptyArr" === t) r = []; else if ("{}" === t || "emptyObj" === t) r = {}; else if ("noopFunc" === t) r = function() {}; else if ("trueFunc" === t) r = function() {
                            return !0;
                        }; else if ("falseFunc" === t) r = function() {
                            return !1;
                        }; else if (/^-?\d+$/.test(t)) {
                            if (r = parseInt(t), isNaN(t)) return;
                            if (Math.abs(t) > 32767) return;
                        } else {
                            if (!e) return;
                            if (t.startsWith("{") && t.endsWith("}")) try {
                                r = n.JSON_parse(t).value;
                            } catch (e) {
                                return;
                            }
                        }
                        if (void 0 !== o.as) {
                            if ("function" === o.as) return () => r;
                            if ("callback" === o.as) return () => () => r;
                            if ("resolved" === o.as) return Promise.resolve(r);
                            if ("rejected" === o.as) return Promise.reject(r);
                        }
                        return r;
                    }(e, n);
                    "noopFunc" !== n && "trueFunc" !== n && "falseFunc" !== n || (l = (e => (o.Object_defineProperty(e, "name", {
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
                    const d = function(t) {
                        return !e && (!!u || (u = null != t && null != l && typeof t != typeof l, u && o.uboLog(r, `Aborted because value set to ${t}`), 
                        u));
                    }, p = function(e, t, n, c) {
                        if (!1 === c.init(n ? e[t] : l)) return;
                        const i = o.Object_getOwnPropertyDescriptor(e, t);
                        let a, s;
                        i instanceof o.Object && (e[t] = l, i.get instanceof Function && (a = i.get), i.set instanceof Function && (s = i.set));
                        try {
                            o.Object_defineProperty(e, t, {
                                configurable: n,
                                get: () => (void 0 !== a && a(), c.getter()),
                                set(e) {
                                    void 0 !== s && s(e), c.setter(e);
                                }
                            }), o.uboLog(r, "Trap installed");
                        } catch (e) {
                            o.uboErr(r, e);
                        }
                    }, f = function(e, t) {
                        const n = t.indexOf(".");
                        if (-1 === n) return void p(e, t, !1, {
                            v: void 0,
                            init: function(e) {
                                return !d(e) && (this.v = e, !0);
                            },
                            getter: function() {
                                return document.currentScript === s ? this.v : (o.uboLog(r, "Property read"), l);
                            },
                            setter: function(e) {
                                !1 !== d(e) && (l = e);
                            }
                        });
                        const c = t.slice(0, n), i = e[c];
                        t = t.slice(n + 1), i instanceof o.Object || "object" == typeof i && null !== i ? f(i, t) : p(e, c, !0, {
                            v: void 0,
                            init: function(e) {
                                return this.v = e, !0;
                            },
                            getter: function() {
                                return this.v;
                            },
                            setter: function(e) {
                                this.v = e, e instanceof o.Object && f(e, t);
                            }
                        });
                    };
                    f(window, t);
                }
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
                    }, o = n(t);
                    if (n(document.readyState) >= o) return void e();
                    const c = i(), a = [ "readystatechange", () => {
                        n(document.readyState) < o || (e(), c.removeEventListener.apply(document, a));
                    }, {
                        capture: !0
                    } ];
                    c.addEventListener.apply(document, a);
                }((() => {
                    a(t, n);
                }), c.runAt);
            }(!1, ...e);
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
        const a = [];
        try {
            a.push(...document.location.hostname.split("."));
        } catch (e) {}
        const s = a.length;
        if (0 === s) return;
        const l = new Set, u = [];
        if (0 !== r.size) {
            for (let e = 0; e < s; e++) {
                const t = a.slice(e).join("."), n = r.get(t);
                n && u.push(...n);
            }
            r.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) u.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < s; t++) e(a.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== o.size) {
            const e = s - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = a.slice(t, n).join(".");
                let r = o.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) u.includes(e) || l.add(e);
                }
            }
            o.clear();
        }
        for (const e of l) try {
            c(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, o;
        try {
            t.uBOL_setConstant = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_setConstant);
            o = t.URL.createObjectURL(r);
            const c = t.document;
            n = c.createElement("script"), n.async = !1, n.src = o, (c.head || c.documentElement || c).append(n);
        } catch (e) {}
        o && (n && n.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_setConstant;
    }
})();