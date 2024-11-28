"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "ADV_DISABLED", "true" ], [ "Clicks._test_meta_referer", "null" ], [ "Object.prototype.AdvObject", "noopFunc" ], [ "Object.prototype.AdvertisementManager", "undefined" ], [ "Object.prototype.IS_CHECK_REGISTRATION", "false" ], [ "Object.prototype.MediaReady", "noopFunc" ], [ "Object.prototype.PLAYED", "null" ], [ "Object.prototype._currentAgeRestriction", "null" ], [ "Object.prototype.adUsageStorageVars", "undefined" ], [ "Object.prototype.adblockSettings", "undefined" ], [ "Object.prototype.advert", "null" ], [ "Object.prototype.advertObject", "null" ], [ "Object.prototype.afg", "true" ], [ "Object.prototype.amp", "noopFunc" ], [ "Object.prototype.autoPlay", "false" ], [ "Object.prototype.autoPlay", "null" ], [ "Object.prototype.autoPopups", "undefined" ], [ "Object.prototype.autoplay", "false" ], [ "Object.prototype.autoplay", "null" ], [ "Object.prototype.autostart", "noopFunc" ], [ "Object.prototype.branding", "undefined" ], [ "Object.prototype.changeVisible", "noopFunc" ], [ "Object.prototype.createBannerItem", "null" ], [ "Object.prototype.detect", "noopFunc" ], [ "Object.prototype.detectAdb", "noopFunc" ], [ "Object.prototype.detectAdblock", "noopFunc" ], [ "Object.prototype.disableAutoplay", "true" ], [ "Object.prototype.disablePaste", "false" ], [ "Object.prototype.disableSeek", "noopFunc" ], [ "Object.prototype.disableSelection", "noopFunc" ], [ "Object.prototype.getAutoplay", "noopFunc" ], [ "Object.prototype.getUaasConfig", "undefined" ], [ "Object.prototype.initialAutoplay", "null" ], [ "Object.prototype.livetv-state", "true" ], [ "Object.prototype.manualAutoplay_", "null" ], [ "Object.prototype.minPlayingVisibleHeight", "noopFunc" ], [ "Object.prototype.onIntersected", "noopFunc" ], [ "Object.prototype.openstatCb", "undefined" ], [ "Object.prototype.partnerId", "{}" ], [ "Object.prototype.playVideo", "noopFunc" ], [ "Object.prototype.utm", "false" ], [ "Object.prototype.utm_campaign", "false" ], [ "Object.prototype.utm_medium", "false" ], [ "Object.prototype.utm_source", "false" ], [ "Object.prototype.utm_space", "false" ], [ "Object.prototype.utm_term", "false" ], [ "PageBottomBanners", "undefined" ], [ "String.fromCharCode", "trueFunc" ], [ "Unauthorized2", "undefined" ], [ "adBlock", "false" ], [ "app.book.external", "null" ], [ "cadb", "false" ], [ "clicks", "2" ], [ "frames.innerWidth", "{}" ], [ "g_GazetaNoExchange", "true" ], [ "isAdFree", "noopFunc" ], [ "localStorage.localstorageGameData", "" ], [ "main_air_closed", "true" ], [ "noAdsAtAll", "{}" ], [ "pl.getParams.isPlay", "null" ], [ "player.options.scroll", "false" ], [ "playerOptions.behaviour.autoPlay", "false" ], [ "player_options.autoplay", "false" ], [ "timeEnd", "1" ], [ "top100Counter", "false" ], [ "window.EUMP.plugins.antiblock", "noopFunc" ], [ "window.ab", "false" ], [ "Object.prototype.preroll", "undefined" ], [ "biads.initCli", "undefined" ], [ "NO_ADV", "1" ], [ "Object.prototype._Mimic", "undefined" ], [ "Object.prototype.autoPlayParams", "false" ], [ "Object.prototype.autoplayScrollHandler", "noopFunc" ], [ "Object.prototype.mimic", "undefined" ], [ "Object.prototype.obfuscate", "noopFunc" ], [ "Object.prototype.onLinkClick", "noopFunc" ], [ "Object.prototype.onLinkMouseDown", "noopFunc" ], [ "Object.prototype.runMimic", "noopFunc" ], [ "Object.prototype.useMimic", "noopFunc" ], [ "document.title", "null" ], [ "mr._mimic.locator.transform", "undefined" ], [ "Object.prototype.hasAdBlockWhiteList", "false" ], [ "Object.prototype.AdvertisingManager", "noopFunc" ], [ "Object.prototype._requestIframeData", "noopFunc" ] ], r = new Map([ [ "peers.tv", 0 ], [ "www.ukr.net", 1 ], [ "ivi.ru", [ 2, 11 ] ], [ "ictv.ua", 3 ], [ "inter.ua", 3 ], [ "k1.ua", 3 ], [ "novy.tv", 3 ], [ "ntn.ua", 3 ], [ "starlight.digital", 3 ], [ "stb.ua", 3 ], [ "teleportal.ua", 3 ], [ "player.vgtrk.com", 4 ], [ "tv-gubernia.ru", [ 5, 57 ] ], [ "xsport.ua", 6 ], [ "1tv.ru", [ 7, 28, 65 ] ], [ "music.yandex.by", 8 ], [ "music.yandex.kz", 8 ], [ "music.yandex.ru", 8 ], [ "music.yandex.uz", 8 ], [ "api-video.khl.ru", 9 ], [ "razlozhi.ru", [ 10, 51 ] ], [ "igroutka.ru", 12 ], [ "kinonews.ru", 13 ], [ "cdnvideo.ru", 14 ], [ "eda.ru", 14 ], [ "mania.gcdn.co", 14 ], [ "vp.rambler.ru", [ 14, 35 ] ], [ "www.rambler.ru", 14 ], [ "afisha.ru", 15 ], [ "partnerkin.com", 16 ], [ "frontend.vh.yandex.ru", [ 17, 30, 32, 38 ] ], [ "eagleplatform.com", [ 18, 60 ] ], [ "embed.dugout.com", 19 ], [ "sports.ru", 20 ], [ "kp.kg", 21 ], [ "kp.kz", 21 ], [ "kp.md", 21 ], [ "kp.ru", 21 ], [ "mk.ru", 21 ], [ "ohotniki.ru", 21 ], [ "portalvirtualreality.ru", 21 ], [ "radiokp.ru", 21 ], [ "sportkp.ru", 21 ], [ "wday.ru", 21 ], [ "woman.ru", 21 ], [ "www.fontanka.ru", 21 ], [ "ati.su", 22 ], [ "24smi.org", 23 ], [ "russia-tv.online", 24 ], [ "examenpdd.com", 25 ], [ "embed.twitch.tv", 26 ], [ "player.twitch.tv", 26 ], [ "www.mos.ru", 27 ], [ "kinokong.pro", 29 ], [ "dzen.ru", [ 30, 31, 38 ] ], [ "rbc.ru", 33 ], [ "sportrbc.ru", 33 ], [ "tenews.org.ua", 34 ], [ "rg.ru", [ 36, 37 ] ], [ "naydex.net", 38 ], [ "widgets.kinopoisk.ru", 38 ], [ "www.kinopoisk.ru", 38 ], [ "yastatic.net", 38 ], [ "3dnews.kz", 39 ], [ "3dnews.ru", 39 ], [ "vm.ru", 39 ], [ "forbes.ru", [ 40, 41, 42, 43, 44, 45 ] ], [ "vk.com", [ 46, 48, 58 ] ], [ "vk.ru", [ 46, 48, 58 ] ], [ "free-tor.info", 47 ], [ "korsars.info", 47 ], [ "hentai-share.one", 49 ], [ "gdz-putina.fun", 50 ], [ "gdz.ninja", 50 ], [ "gdz.ru", 50 ], [ "gdzotputina.club", 50 ], [ "gdzputina.net", 50 ], [ "megaresheba.com", 50 ], [ "megaresheba.ru", 50 ], [ "resheba.me", 50 ], [ "spishi.fun", 50 ], [ "zoobrilka.net", 50 ], [ "audioportal.su", 52 ], [ "tass.ru", 53 ], [ "gazeta.ru", [ 54, 55 ] ], [ "playground.ru", 56 ], [ "player.smotrim.ru", 59 ], [ "kinescope.io", 61 ], [ "m24.ru", 62 ], [ "softportal.com", 63 ], [ "rambler.ru", 64 ], [ "remont-aud.net", 66 ], [ "okminigames.mail.ru", 69 ], [ "otvet.mail.ru", 70 ], [ "player-smotri.mail.ru", 71 ], [ "ok.ru", [ 72, 74 ] ], [ "mail.ru", [ 73, 79, 80 ] ], [ "sportmail.ru", [ 73, 78 ] ], [ "e.mail.ru", [ 75, 76, 81 ] ], [ "octavius.mail.ru", [ 75, 76, 81 ] ], [ "my.mail.ru", 77 ], [ "news.mail.ru", 78 ], [ "pogoda.mail.ru", 78 ], [ "mail.ukr.net", 82 ], [ "116.ru", 83 ], [ "14.ru", 83 ], [ "161.ru", 83 ], [ "164.ru", 83 ], [ "173.ru", 83 ], [ "178.ru", 83 ], [ "26.ru", 83 ], [ "29.ru", 83 ], [ "35.ru", 83 ], [ "43.ru", 83 ], [ "45.ru", 83 ], [ "48.ru", 83 ], [ "51.ru", 83 ], [ "53.ru", 83 ], [ "56.ru", 83 ], [ "59.ru", 83 ], [ "60.ru", 83 ], [ "62.ru", 83 ], [ "63.ru", 83 ], [ "68.ru", 83 ], [ "71.ru", 83 ], [ "72.ru", 83 ], [ "74.ru", 83 ], [ "76.ru", 83 ], [ "86.ru", 83 ], [ "89.ru", 83 ], [ "93.ru", 83 ], [ "chita.ru", 83 ], [ "e1.ru", 83 ], [ "ircity.ru", 83 ], [ "mgorsk.ru", 83 ], [ "msk1.ru", 83 ], [ "ngs.ru", 83 ], [ "ngs22.ru", 83 ], [ "ngs24.ru", 83 ], [ "ngs42.ru", 83 ], [ "ngs55.ru", 83 ], [ "ngs70.ru", 83 ], [ "nn.ru", 83 ], [ "proizhevsk.ru", 83 ], [ "sochi1.ru", 83 ], [ "sterlitamak1.ru", 83 ], [ "tolyatty.ru", 83 ], [ "ufa1.ru", 83 ], [ "v1.ru", 83 ], [ "vladivostok1.ru", 83 ], [ "voronezh1.ru", 83 ] ]), o = new Map([ [ "hdrezka", 67 ], [ "rezka", 67 ], [ "mult-porno", 68 ], [ "sex-studentki", 68 ], [ "cosplay-porn", 68 ] ]), n = new Map([ [ "calls.mail.ru", [ 73, 79, 80 ] ], [ "e.mail.ru", [ 73, 79, 80 ] ], [ "my.mail.ru", [ 73, 79, 80 ] ], [ "o2.mail.ru", [ 73, 79, 80 ] ], [ "octavius.mail.ru", [ 73, 79, 80 ] ], [ "touch.mail.ru", [ 73, 79, 80 ] ], [ "3igames.mail.ru", [ 79, 80 ] ], [ "account.mail.ru", [ 79, 80 ] ], [ "auto.mail.ru", [ 79, 80 ] ], [ "biz.mail.ru", [ 79, 80 ] ], [ "bonus.mail.ru", [ 79, 80 ] ], [ "calendar.mail.ru", [ 79, 80 ] ], [ "cloud.mail.ru", [ 79, 80 ] ], [ "connect.mail.ru", [ 79, 80 ] ], [ "deti.mail.ru", [ 79, 80 ] ], [ "dobro.mail.ru", [ 79, 80 ] ], [ "gibdd.mail.ru", [ 79, 80 ] ], [ "health.mail.ru", [ 79, 80 ] ], [ "help.mail.ru", [ 79, 80 ] ], [ "hi-tech.mail.ru", [ 79, 80 ] ], [ "horo.mail.ru", [ 79, 80 ] ], [ "kino.mail.ru", [ 79, 80 ] ], [ "lady.mail.ru", [ 79, 80 ] ], [ "love.mail.ru", [ 79, 80 ] ], [ "mcs.mail.ru", [ 79, 80 ] ], [ "minigames.mail.ru", [ 79, 80 ] ], [ "news.mail.ru", [ 79, 80 ] ], [ "okminigames.mail.ru", [ 79, 80 ] ], [ "otvet.mail.ru", [ 79, 80 ] ], [ "pets.mail.ru", [ 79, 80 ] ], [ "player-smotri.mail.ru", [ 79, 80 ] ], [ "pogoda.mail.ru", [ 79, 80 ] ], [ "top.mail.ru", [ 79, 80 ] ], [ "tv.mail.ru", [ 79, 80 ] ], [ "blog.mail.ru", [ 80 ] ] ]);
        function a(...e) {
            !function(e = !1, t = "", r = "") {
                if ("" === t) return;
                const o = i(), n = o.makeLogPrefix("set-constant", t, r), a = o.getExtraArgs(Array.from(arguments), 3);
                function u(t, r) {
                    const a = (() => {
                        const e = t.lastIndexOf(".");
                        return -1 === e ? t : t.slice(e + 1);
                    })();
                    if ("" === a) return;
                    const c = document.currentScript;
                    let s = function(e, t) {
                        const r = i(), o = r.getExtraArgs(Array.from(arguments), 2);
                        let n;
                        if ("undefined" === t) n = void 0; else if ("false" === t) n = !1; else if ("true" === t) n = !0; else if ("null" === t) n = null; else if ("''" === t || "" === t) n = ""; else if ("[]" === t || "emptyArr" === t) n = []; else if ("{}" === t || "emptyObj" === t) n = {}; else if ("noopFunc" === t) n = function() {}; else if ("trueFunc" === t) n = function() {
                            return !0;
                        }; else if ("falseFunc" === t) n = function() {
                            return !1;
                        }; else if (/^-?\d+$/.test(t)) {
                            if (n = parseInt(t), isNaN(t)) return;
                            if (Math.abs(t) > 32767) return;
                        } else {
                            if (!e) return;
                            if (t.startsWith("{") && t.endsWith("}")) try {
                                n = r.JSON_parse(t).value;
                            } catch (e) {
                                return;
                            }
                        }
                        if (void 0 !== o.as) {
                            if ("function" === o.as) return () => n;
                            if ("callback" === o.as) return () => () => n;
                            if ("resolved" === o.as) return Promise.resolve(n);
                            if ("rejected" === o.as) return Promise.reject(n);
                        }
                        return n;
                    }(e, r);
                    "noopFunc" !== r && "trueFunc" !== r && "falseFunc" !== r || (s = (e => (o.Object_defineProperty(e, "name", {
                        value: a
                    }), new Proxy(e, {
                        defineProperty(e, t) {
                            return "toString" === t || Reflect.defineProperty(...arguments);
                        },
                        deleteProperty(e, t) {
                            return "toString" === t || Reflect.deleteProperty(...arguments);
                        },
                        get(e, t) {
                            return "toString" === t ? function() {
                                return `function ${a}() { [native code] }`;
                            }.bind(null) : Reflect.get(...arguments);
                        }
                    })))(s));
                    let l = !1;
                    const p = function(t) {
                        return !e && (!!l || (l = null != t && null != s && typeof t != typeof s, l && o.uboLog(n, `Aborted because value set to ${t}`), 
                        l));
                    }, d = function(e, t, r, a) {
                        if (!1 === a.init(r ? e[t] : s)) return;
                        const i = o.Object_getOwnPropertyDescriptor(e, t);
                        let u, c;
                        i instanceof o.Object && (e[t] = s, i.get instanceof Function && (u = i.get), i.set instanceof Function && (c = i.set));
                        try {
                            o.Object_defineProperty(e, t, {
                                configurable: r,
                                get: () => (void 0 !== u && u(), a.getter()),
                                set(e) {
                                    void 0 !== c && c(e), a.setter(e);
                                }
                            }), o.uboLog(n, "Trap installed");
                        } catch (e) {
                            o.uboErr(n, e);
                        }
                    }, f = function(e, t) {
                        const r = t.indexOf(".");
                        if (-1 === r) return void d(e, t, !1, {
                            v: void 0,
                            init: function(e) {
                                return !p(e) && (this.v = e, !0);
                            },
                            getter: function() {
                                return document.currentScript === c ? this.v : (o.uboLog(n, "Property read"), s);
                            },
                            setter: function(e) {
                                !1 !== p(e) && (s = e);
                            }
                        });
                        const a = t.slice(0, r), i = e[a];
                        t = t.slice(r + 1), i instanceof o.Object || "object" == typeof i && null !== i ? f(i, t) : d(e, a, !0, {
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
                    }, o = r(t);
                    if (r(document.readyState) >= o) return void e();
                    const a = i(), u = [ "readystatechange", () => {
                        r(document.readyState) < o || (e(), a.removeEventListener.apply(document, u));
                    }, {
                        capture: !0
                    } ];
                    a.addEventListener.apply(document, u);
                }((() => {
                    u(t, r);
                }), a.runAt);
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
                    const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== o ? {
                        re: new this.RegExp(o[1], o[2] || t.flags),
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
                    const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === o) {
                        const o = this.escapeRegexChars(e);
                        return new RegExp(r ? `^${o}$` : o, t);
                    }
                    try {
                        return new RegExp(o[1], o[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const r = e.slice(t).reduce(((e, t, r, o) => {
                        if (0 == (1 & r)) {
                            const t = o[r + 1], n = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ o[r], n ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(r);
                },
                onIdle: (e, r) => t.requestIdleCallback ? t.requestIdleCallback(e, r) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = r, void 0 === e.bcSecret) return r;
            const o = new t.BroadcastChannel(e.bcSecret);
            let n = [];
            return r.logLevel = e.logLevel || 1, r.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const r = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === n) return o.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: r
                });
                n.push({
                    type: e,
                    text: r
                });
            }, o.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === n) break;
                    n.forEach((({type: e, text: t}) => o.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), n = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    r.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    r.logLevel = 2;
                }
            }, o.postMessage("areyouready?"), r;
        }
        const u = [];
        try {
            u.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = u.length;
        if (0 === c) return;
        const s = new Set, l = [];
        if (0 !== n.size) {
            for (let e = 0; e < c; e++) {
                const t = u.slice(e).join("."), r = n.get(t);
                r && l.push(...r);
            }
            n.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || s.add(e);
                }
            };
            for (let t = 0; t < c; t++) e(u.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== o.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = u.slice(t, r).join(".");
                let n = o.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) l.includes(e) || s.add(e);
                }
            }
            o.clear();
        }
        for (const e of s) try {
            a(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, o;
        try {
            t.uBOL_setConstant = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_setConstant);
            o = t.URL.createObjectURL(n);
            const a = t.document;
            r = a.createElement("script"), r.async = !1, r.src = o, (a.head || a.documentElement || a).append(r);
        } catch (e) {}
        o && (r && r.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_setConstant;
    }
})();