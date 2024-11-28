"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "hasAdblocker", "false" ], [ "antiAdBlockerHandler", "noopFunc" ], [ "detectAdBlock", "noopFunc" ], [ "googletag", "{}" ], [ "googletag._loaded_", "true" ], [ "AdblockDetector", "{}" ], [ "canRunAds", "true" ], [ "blockAdBlock._options", "noopFunc" ], [ "adManagerBlocked", "undefined" ], [ "$MICROSITE_INFO.blockAdBlock", "false" ], [ "adblock.check", "noopFunc" ], [ "adBlockerActive", "false" ], [ "cdo", "0" ], [ "eazy_ad_unblocker_msg_var", "" ], [ "DeRunAds", "true" ], [ "Object.prototype.adblockerEnabled", "false" ], [ "adsbygoogle.loaded", "true" ], [ "adBlockCheck", "true" ], [ "pp_show_popupmessage", "noopFunc" ], [ "easySettings.adblock", "0" ], [ "onload", "null" ], [ "adblockDetector.init", "noopFunc" ], [ "adsbygoogle.length", "undefined" ], [ "WSL2.config.enableAdblockEcommerce", "0" ], [ "ads_unblocked", "true" ], [ "adblock", "true" ], [ "better_ads_adblock", "true" ], [ "adBlockDetected", "false" ], [ "isAdsDisplayed", "true" ], [ "ATESTADO", "1" ], [ "Lata", "1" ], [ "loadingAds", "true" ], [ "runningAdsAllowed", "true" ], [ "initPopunder", "noopFunc" ], [ "__configuredDFPTags", "{}" ], [ "contadorClics", "1" ], [ "Object.prototype.adSlot", "" ], [ "google.ima.OmidVerificationVendor", "{}" ], [ "ads", "false" ], [ "acdl", "noopFunc" ], [ "global.noobMaxTry", "0" ], [ "player.preroll", "noopFunc" ], [ "anunciotag", "noopFunc" ], [ "loadingAds", "undefined" ], [ "click", "1" ], [ "clickd", "1" ], [ "xxxStore", "undefined" ], [ "vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads", "" ], [ "a_consola", "noopFunc" ] ], o = new Map([ [ "3djuegos.com", 0 ], [ "3djuegosguias.com", 0 ], [ "3djuegospc.com", 0 ], [ "applesfera.com", 0 ], [ "compradiccion.com", 0 ], [ "directoalpaladar.com", [ 0, 23 ] ], [ "elblogsalmon.com", [ 0, 23 ] ], [ "espinof.com", 0 ], [ "genbeta.com", 0 ], [ "mundoxiaomi.com", 0 ], [ "trendencias.com", 0 ], [ "trendenciashombre.com", 0 ], [ "vidaextra.com", 0 ], [ "vitonica.com", 0 ], [ "xataka.com", 0 ], [ "xatakaciencia.com", 0 ], [ "xatakafoto.com", 0 ], [ "xatakahome.com", 0 ], [ "xatakamovil.com", 0 ], [ "xatakandroid.com", 0 ], [ "xatakawindows.com", 0 ], [ "financasdeouro.com", 1 ], [ "animeszone.net", 2 ], [ "monumental.co.cr", [ 3, 4 ] ], [ "elcomercio.com", [ 3, 4 ] ], [ "antena7.com.do", [ 3, 4 ] ], [ "rqp.com.bo", [ 3, 4 ] ], [ "canal12.com.sv", [ 3, 4 ] ], [ "chapintv.com", [ 3, 4 ] ], [ "vtv.com.hn", [ 3, 4 ] ], [ "tn23.tv", [ 3, 4 ] ], [ "canal13mexico.com", [ 3, 4 ] ], [ "c9n.com.py", [ 3, 4 ] ], [ "repretel.com", [ 3, 4 ] ], [ "redbolivision.tv.bo", [ 3, 4 ] ], [ "animesonline.nz", 5 ], [ "mdr.ar", 6 ], [ "impactoespananoticias.com", 6 ], [ "skynovels.net", 6 ], [ "botinnifit.com", 6 ], [ "minhasdelicias.com", 6 ], [ "luchaonline.com", 6 ], [ "meocloud.pt", 7 ], [ "fichajes.com", 8 ], [ "niusdiario.es", [ 9, 37 ] ], [ "xerifetech.com", 10 ], [ "pobre.wtf", [ 11, 38 ] ], [ "suaads.com", 12 ], [ "reidoplacar.com", [ 12, 39 ] ], [ "suaurl.com", [ 12, 39 ] ], [ "legendei.net", 13 ], [ "documaniatv.com", 14 ], [ "cadenaser.com", 15 ], [ "texto.kom.gt", 16 ], [ "infojobs.com.br", 17 ], [ "maringapost.com.br", 18 ], [ "bandab.com.br", 18 ], [ "ouniversodatv.com", 19 ], [ "tribunaavila.com", 20 ], [ "deportealdia.live", 21 ], [ "elquintobeatle.com", 22 ], [ "empregoestagios.com", 22 ], [ "satcesc.com", 22 ], [ "bebesymas.com", 23 ], [ "diariodelviajero.com", 23 ], [ "motorpasion.com", 23 ], [ "motorpasionmoto.com", 23 ], [ "pymesyautonomos.com", 23 ], [ "docer.com.ar", 24 ], [ "doceru.com", 24 ], [ "docero.com.br", 24 ], [ "comandotorrents.org", 25 ], [ "adslayuda.com", 26 ], [ "outerspace.com.br", 27 ], [ "doramasmp4.com", 28 ], [ "file4go.net", 30 ], [ "seriesdonghua.com", 31 ], [ "mundodonghua.com", 31 ], [ "playview.io", 32 ], [ "3xyaoi.com", 33 ], [ "uol.com.br", 34 ], [ "megafire.net", 35 ], [ "elmundo.es", 36 ], [ "gourlpro.com", 40 ], [ "adclic.es", 40 ], [ "adclic.org", 40 ], [ "mundopolo.net", 40 ], [ "jurisfera.com", 40 ], [ "adclicker.info", 40 ], [ "adclicker.io", 40 ], [ "safepc.online", 40 ], [ "solopc.net", 40 ], [ "player.hentaistube.com", 41 ], [ "playnewserie.xyz", 42 ], [ "tiohentai.xyz", 43 ], [ "otakustv.com", [ 44, 45 ] ], [ "pornolandia.xxx", 46 ], [ "hentaiporno.xxx", 47 ], [ "fakings.com", 48 ] ]), n = new Map([ [ "anitube", 29 ] ]), r = new Map([]);
        function c(...e) {
            !function(e = !1, t = "", o = "") {
                if ("" === t) return;
                const n = a(), r = n.makeLogPrefix("set-constant", t, o), c = n.getExtraArgs(Array.from(arguments), 3);
                function i(t, o) {
                    const c = (() => {
                        const e = t.lastIndexOf(".");
                        return -1 === e ? t : t.slice(e + 1);
                    })();
                    if ("" === c) return;
                    const s = document.currentScript;
                    let l = function(e, t) {
                        const o = a(), n = o.getExtraArgs(Array.from(arguments), 2);
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
                                r = o.JSON_parse(t).value;
                            } catch (e) {
                                return;
                            }
                        }
                        if (void 0 !== n.as) {
                            if ("function" === n.as) return () => r;
                            if ("callback" === n.as) return () => () => r;
                            if ("resolved" === n.as) return Promise.resolve(r);
                            if ("rejected" === n.as) return Promise.reject(r);
                        }
                        return r;
                    }(e, o);
                    "noopFunc" !== o && "trueFunc" !== o && "falseFunc" !== o || (l = (e => (n.Object_defineProperty(e, "name", {
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
                    let d = !1;
                    const u = function(t) {
                        return !e && (!!d || (d = null != t && null != l && typeof t != typeof l, d && n.uboLog(r, `Aborted because value set to ${t}`), 
                        d));
                    }, f = function(e, t, o, c) {
                        if (!1 === c.init(o ? e[t] : l)) return;
                        const a = n.Object_getOwnPropertyDescriptor(e, t);
                        let i, s;
                        a instanceof n.Object && (e[t] = l, a.get instanceof Function && (i = a.get), a.set instanceof Function && (s = a.set));
                        try {
                            n.Object_defineProperty(e, t, {
                                configurable: o,
                                get: () => (void 0 !== i && i(), c.getter()),
                                set(e) {
                                    void 0 !== s && s(e), c.setter(e);
                                }
                            }), n.uboLog(r, "Trap installed");
                        } catch (e) {
                            n.uboErr(r, e);
                        }
                    }, m = function(e, t) {
                        const o = t.indexOf(".");
                        if (-1 === o) return void f(e, t, !1, {
                            v: void 0,
                            init: function(e) {
                                return !u(e) && (this.v = e, !0);
                            },
                            getter: function() {
                                return document.currentScript === s ? this.v : (n.uboLog(r, "Property read"), l);
                            },
                            setter: function(e) {
                                !1 !== u(e) && (l = e);
                            }
                        });
                        const c = t.slice(0, o), a = e[c];
                        t = t.slice(o + 1), a instanceof n.Object || "object" == typeof a && null !== a ? m(a, t) : f(e, c, !0, {
                            v: void 0,
                            init: function(e) {
                                return this.v = e, !0;
                            },
                            getter: function() {
                                return this.v;
                            },
                            setter: function(e) {
                                this.v = e, e instanceof n.Object && m(e, t);
                            }
                        });
                    };
                    m(window, t);
                }
                !function(e, t) {
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
                    }, n = o(t);
                    if (o(document.readyState) >= n) return void e();
                    const c = a(), i = [ "readystatechange", () => {
                        o(document.readyState) < n || (e(), c.removeEventListener.apply(document, i));
                    }, {
                        capture: !0
                    } ];
                    c.addEventListener.apply(document, i);
                }((() => {
                    i(t, o);
                }), c.runAt);
            }(!1, ...e);
        }
        function a() {
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
        }
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const s = i.length;
        if (0 === s) return;
        const l = new Set, d = [];
        if (0 !== r.size) {
            for (let e = 0; e < s; e++) {
                const t = i.slice(e).join("."), o = r.get(t);
                o && d.push(...o);
            }
            r.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) d.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < s; t++) e(i.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== n.size) {
            const e = s - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = i.slice(t, o).join(".");
                let r = n.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) d.includes(e) || l.add(e);
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
        let o, n;
        try {
            t.uBOL_setConstant = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_setConstant);
            n = t.URL.createObjectURL(r);
            const c = t.document;
            o = c.createElement("script"), o.async = !1, o.src = n, (c.head || c.documentElement || c).append(o);
        } catch (e) {}
        n && (o && o.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_setConstant;
    }
})();