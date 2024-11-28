"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "request=adb" ], [ "doubleclick" ], [ "googlesyndication" ], [ "/adsbygoogle|doubleclick/" ], [ "homad-global-configs" ], [ "/enthusiastgaming|googleoptimize|googletagmanager/" ], [ "/doubleclick|googlesyndication/" ], [ "/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/" ], [ "/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com/" ], [ "ad_" ], [ "/redirector\\.googlevideo\\.com\\/videoplayback[\\s\\S]*?dclk_video_ads/" ], [ "/\\/ad\\/g\\/1/" ], [ "ads" ], [ "svonm" ], [ "/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/" ], [ "inklinkor.com" ], [ "fwmrm.net" ], [ "damoh" ], [ "/youboranqs01|spotx|springserve/" ], [ "adsbygoogle" ], [ "/doubleclick|googlesyndication/", "length:10" ], [ "adsbygoogle", "length:10" ], [ "adinplay.com" ], [ "popunder" ], [ "/pagead2\\.googlesyndication\\.com|inklinkor\\.com/" ], [ "/^/" ], [ "/ad" ], [ "prebid" ], [ "wpadmngr" ], [ "/ads" ], [ "pub.network" ], [ "url:googlesyndication" ], [ "/analytics|livestats/" ], [ "mahimeta" ], [ "notifier" ], [ "/ad-" ], [ "/coinzillatag|czilladx/" ], [ "/thaudray\\.com|putchumt\\.com/" ], [ "php" ], [ "czilladx" ], [ "/googlesyndication|doubleclick/" ], [ "bmcdn6" ], [ "adx" ], [ "cls_report?" ], [ "adswizz.com" ], [ "tag" ], [ "googletagmanager" ], [ "pagead2.googlesyndication.com" ], [ "time-events" ], [ "/_Ad_|_ad/" ], [ "googlesyndication", "length:10" ], [ "/googlesyndication|nitropay/" ], [ "method:POST url:/logImpressions" ], [ "method:POST" ], [ "utreon.com/pl/api/event method:POST" ], [ "log-sdk.ksapisrv.com/rest/wd/common/log/collect method:POST" ], [ "/VisitorAPI|AppMeasurement/" ], [ "analytics/bulk-pixel" ], [ "/(trace|beacon)\\.qq\\.com/" ], [ "mobileanalytics" ], [ "cloudflare.com/cdn-cgi/trace" ], [ "/recommendations." ], [ "/api/analytics" ], [ "api" ], [ "lr-ingest.io" ], [ "/gtm.js" ], [ "ip-api" ], [ "1.1.1.1/cdn-cgi/trace" ], [ "stella" ] ], o = new Map([ [ "handelsblatt.com", 0 ], [ "moviepilot.de", 1 ], [ "journaldemontreal.com", 1 ], [ "minhaconexao.com.br", 1 ], [ "videolyrics.in", 1 ], [ "sportshub.to", [ 1, 2 ] ], [ "topsporter.net", 1 ], [ "meteoetradar.com", 1 ], [ "gala.fr", 1 ], [ "geo.fr", 1 ], [ "voici.fr", 1 ], [ "sankaku.app", 2 ], [ "zigforums.com", 2 ], [ "ge-map-overlays.appspot.com", 2 ], [ "freegogpcgames.com", 2 ], [ "hollaforums.com", 2 ], [ "powforums.com", 2 ], [ "supforums.com", 2 ], [ "toolkitspro.com", 2 ], [ "meteopool.org", 2 ], [ "ssstik.io", 2 ], [ "animefever.cc", 2 ], [ "postazap.com", 2 ], [ "informaxonline.com", [ 2, 26 ] ], [ "cambb.xxx", 2 ], [ "routech.ro", 2 ], [ "rontechtips.com", 2 ], [ "edealinfo.com", 2 ], [ "homeairquality.org", 2 ], [ "techtrim.tech", 2 ], [ "pigeonburger.xyz", 2 ], [ "askpaccosi.com", 2 ], [ "crypto4tun.com", 2 ], [ "fusedgt.com", 2 ], [ "apkowner.org", 2 ], [ "appsmodz.com", 2 ], [ "bingotingo.com", 2 ], [ "superpsx.com", 2 ], [ "stringreveals.com", 2 ], [ "fox.com", 2 ], [ "obutecodanet.ig.com.br", 2 ], [ "firmwarex.net", 2 ], [ "softwaretotal.net", 2 ], [ "freecodezilla.net", 2 ], [ "iconmonstr.com", 2 ], [ "rbxscripts.net", 2 ], [ "rimworldbase.com", 2 ], [ "ewrc-results.com", 2 ], [ "adslink.pw", 2 ], [ "comentariodetexto.com", 2 ], [ "wordpredia.com", 2 ], [ "livsavr.co", 2 ], [ "sportnews.to", 2 ], [ "gsmhamza.com", 2 ], [ "38.242.194.12", 2 ], [ "bi-girl.net", 2 ], [ "idealfollow.in", 2 ], [ "medeberiyaa.com", 2 ], [ "samuraiscan.org", 2 ], [ "shinobijawi.id", 2 ], [ "snbc13.com", 2 ], [ "webmatrices.com", 2 ], [ "adelsfun.com", 2 ], [ "advantien.com", 2 ], [ "bailbondsfinder.com", 2 ], [ "bigpiecreative.com", 2 ], [ "childrenslibrarylady.com", 2 ], [ "classifarms.com", 2 ], [ "comtasq.ca", 2 ], [ "crone.es", 2 ], [ "ctrmarketingsolutions.com", 2 ], [ "dropnudes.com", 2 ], [ "ftuapps.dev", 2 ], [ "genzsport.com", 2 ], [ "grsprotection.com", 2 ], [ "gruporafa.com.br", 2 ], [ "inmatefindcalifornia.com", 2 ], [ "inmatesearchidaho.com", 2 ], [ "itsonsitetv.com", 2 ], [ "mfmfinancials.com", 2 ], [ "myproplugins.com", 2 ], [ "onehack.us", 2 ], [ "ovester.com", 2 ], [ "paste.bin.sx", 2 ], [ "privatenudes.com", 2 ], [ "renoconcrete.ca", 2 ], [ "richieashbeck.com", 2 ], [ "short1ink.com", 2 ], [ "stpm.co.uk", 2 ], [ "wegotcookies.co", 2 ], [ "fordownloader.com", 2 ], [ "di.fm", 2 ], [ "jazzradio.com", 2 ], [ "animehub.ac", 2 ], [ "yottachess.com", 2 ], [ "infidrive.net", 2 ], [ "animefreak.to", 2 ], [ "9animes.ru", 2 ], [ "couponscorpion.com", 2 ], [ "pinsystem.co.uk", 3 ], [ "wetter.de", 4 ], [ "thesimsresource.com", 5 ], [ "gnomio.com", 6 ], [ "trangchu.news", 6 ], [ "techacode.com", 6 ], [ "cybermania.ws", 6 ], [ "techhelpbd.com", 6 ], [ "youmath.it", 8 ], [ "frkn64modding.com", 9 ], [ "sbs.com.au", 10 ], [ "channel4.com", 11 ], [ "gearingcommander.com", 12 ], [ "gameszap.com", 12 ], [ "differenceprimitive85p.shop", 12 ], [ "novelmultiverse.com", 12 ], [ "taming.io", 12 ], [ "cekip.site", 12 ], [ "snlookup.com", 12 ], [ "globfone.com", 12 ], [ "chimicamo.org", 12 ], [ "webforefront.com", 12 ], [ "apkmagic.com.ar", 12 ], [ "reaperscans.id", 12 ], [ "freecoursesonline.me", 12 ], [ "short1.site", 12 ], [ "telewizja-streamer.xyz", 12 ], [ "filmisub.cc", 12 ], [ "filmesdostorrenthd.net", 12 ], [ "play-games.com", 12 ], [ "vox.de", 13 ], [ "vip.de", 13 ], [ "rtl.de", 13 ], [ "fitforfun.de", 13 ], [ "desired.de", 13 ], [ "kino.de", 13 ], [ "cinema.de", 13 ], [ "nationalgeographic.fr", 14 ], [ "oko.sh", [ 15, 24 ] ], [ "uktvplay.co.uk", 16 ], [ "golem.de", 17 ], [ "player.pcgameshardware.de", 17 ], [ "rakuten.tv", 18 ], [ "hausbau-forum.de", 19 ], [ "hipsonyc.com", 19 ], [ "theforyou.in", 19 ], [ "gyanitheme.com", 19 ], [ "hostadviser.net", 19 ], [ "texture-packs.com", 19 ], [ "manyakan.com", 19 ], [ "persianhive.com", 19 ], [ "boainformacao.com.br", 19 ], [ "gcertificationcourse.com", 19 ], [ "portaliz.site", 19 ], [ "tech-story.net", 19 ], [ "visalist.io", 19 ], [ "litecoin.host", 19 ], [ "alliptvlinks.com", 20 ], [ "pomofocus.io", 21 ], [ "royaledudes.io", 22 ], [ "aiimgvlog.fun", 23 ], [ "bestclaimtrx.xyz", 23 ], [ "freebinance.top", 23 ], [ "tii.la", 24 ], [ "ckk.ai", 24 ], [ "oei.la", 24 ], [ "pasend.link", 25 ], [ "freewp.io", 25 ], [ "hiraethtranslation.com", 26 ], [ "jetpunk.com", 27 ], [ "mcrypto.club", 28 ], [ "coinsparty.com", 28 ], [ "simplebits.io", 29 ], [ "flightsim.to", 30 ], [ "stardeos.com", 31 ], [ "goduke.com", 32 ], [ "1apple.xyz", 33 ], [ "lavanguardia.com", 34 ], [ "foodsdictionary.co.il", 35 ], [ "freesolana.top", 36 ], [ "farescd.com", 38 ], [ "claim.fun", 39 ], [ "faucetcrypto.net", 39 ], [ "btc25.org", 39 ], [ "doge25.in", 39 ], [ "cashbux.work", 39 ], [ "getintoway.com", 40 ], [ "bitcotasks.com", 41 ], [ "freelitecoin.top", 42 ], [ "freetron.top", 42 ], [ "earncrypto.co.in", 42 ], [ "citi.com", 43 ], [ "hotfm.audio", 44 ], [ "luffytra.xyz", 45 ], [ "maxt.church", 46 ], [ "history.com", 48 ], [ "pluto.tv", 49 ], [ "osuskinner.com", 51 ], [ "osuskins.net", 51 ], [ "docs.google.com", 52 ], [ "endbasic.dev", 53 ], [ "jmmv.dev", 53 ], [ "fingerprint.com", 53 ], [ "utreon.com", 54 ], [ "zhihu.com", 55 ], [ "natgeotv.com", 56 ], [ "airtel.in", 57 ], [ "meeting.tencent.com", 58 ], [ "viu.com", 59 ], [ "myair2.resmed.com", 60 ], [ "travelerdoor.com", 60 ], [ "azby.fmworld.net", 61 ], [ "unrealengine.com", 62 ], [ "wco.tv", 63 ], [ "dark-gaming.com", 64 ], [ "securegames.iwin.com", 65 ], [ "neilpatel.com", 66 ], [ "myair.resmed.com", 67 ], [ "nicovideo.jp", 68 ] ]), r = new Map([ [ "nsw2u", 2 ], [ "cinemakottaga", 2 ], [ "asiaon", 2 ], [ "apkmaven", 2 ], [ "blurayufr", 2 ], [ "teluguflix", 2 ], [ "bg-gledai", 2 ], [ "gledaitv", 2 ], [ "kissanime", 2 ], [ "einthusan", 7 ], [ "khatrimaza", 12 ], [ "moviegan", 12 ], [ "writedroid", 12 ], [ "streamingcommunity", 37 ], [ "empire-stream", 47 ], [ "brotherfox91", 50 ], [ "customsfencei3", 50 ], [ "fencethoughgdrt", 50 ], [ "fencethroughout642", 50 ], [ "foxwent6ot", 50 ], [ "homebasis4d", 50 ], [ "includingbreath5ku", 50 ], [ "linelocatemfsn", 50 ], [ "littlesound6c", 50 ], [ "live-streamfootball", 50 ], [ "mindmotion93y8", 50 ], [ "monkeynecktj4w", 50 ], [ "neighbormajorkex", 50 ], [ "rbtv77", 50 ], [ "saddletopg3tk", 50 ], [ "superabbit", 50 ], [ "wholecommonrrvp", 50 ], [ "wintertold7nq", 50 ] ]), n = new Map([ [ "dev.fingerprint.com", [ 53 ] ] ]);
        function s(t = "", o = "") {
            if ("string" != typeof t) return;
            const r = a(), n = r.makeLogPrefix("prevent-xhr", t, o), s = new WeakMap, c = function(e, t = "") {
                const o = a(), r = new Map;
                if (void 0 === e || "" === e) return r;
                const n = {
                    canNegate: !0
                };
                for (const s of e.split(/\s+/)) {
                    const [e, i] = s.split(":");
                    "" !== e && (void 0 !== i ? r.set(e, o.initPattern(i, n)) : "" !== t && r.set(t, o.initPattern(e, n)));
                }
                return r;
            }(t, "url"), l = e.warOrigin, m = {
                date: "",
                "content-type": "",
                "content-length": ""
            };
            self.XMLHttpRequest = class extends self.XMLHttpRequest {
                open(e, a, ...p) {
                    if (s.delete(this), void 0 !== l && a.startsWith(l)) return super.open(e, a, ...p);
                    const d = {
                        method: e,
                        url: a
                    };
                    return "" === t && "" === o ? (r.uboLog(n, `Called: ${r.JSON_stringify(d, null, 2)}`), 
                    super.open(e, a, ...p)) : (i(c, d) && s.set(this, d), d.headers = Object.assign({}, m), 
                    super.open(e, a, ...p));
                }
                send(...t) {
                    const i = s.get(this);
                    if (void 0 === i) return super.send(...t);
                    i.headers.date = (new Date).toUTCString();
                    let c = Promise.resolve({
                        xhr: this,
                        directive: o,
                        props: {
                            readyState: {
                                value: 4
                            },
                            response: {
                                value: ""
                            },
                            responseText: {
                                value: ""
                            },
                            responseXML: {
                                value: null
                            },
                            responseURL: {
                                value: i.url
                            },
                            status: {
                                value: 200
                            },
                            statusText: {
                                value: "OK"
                            }
                        }
                    });
                    switch (this.responseType) {
                      case "arraybuffer":
                        c = c.then((e => (e.props.response.value = new ArrayBuffer(0), e))), i.headers["content-type"] = "application/octet-stream";
                        break;

                      case "blob":
                        c = c.then((e => (e.props.response.value = new Blob([]), e))), i.headers["content-type"] = "application/octet-stream";
                        break;

                      case "document":
                        c = c.then((e => {
                            const t = (new DOMParser).parseFromString("", "text/html");
                            return e.props.response.value = t, e.props.responseXML.value = t, e;
                        })), i.headers["content-type"] = "text/html";
                        break;

                      case "json":
                        c = c.then((e => (e.props.response.value = {}, e.props.responseText.value = "{}", 
                        e))), i.headers["content-type"] = "application/json";
                        break;

                      default:
                        if ("" === o) break;
                        c = c.then((t => function(t) {
                            const o = a(), r = e => {
                                const t = [];
                                let r = 0;
                                do {
                                    const e = o.Math_random().toString(36).slice(2);
                                    t.push(e), r += e.length;
                                } while (r < e);
                                return t.join(" ").slice(0, e);
                            };
                            if ("true" === t) return Promise.resolve(r(10));
                            if ("emptyObj" === t) return Promise.resolve("{}");
                            if ("emptyArr" === t) return Promise.resolve("[]");
                            if ("emptyStr" === t) return Promise.resolve("");
                            if (t.startsWith("length:")) {
                                const e = /^length:(\d+)(?:-(\d+))?$/.exec(t);
                                if (e) {
                                    const t = parseInt(e[1], 10), n = o.Math_max(parseInt(e[2], 10) || 0, t) - t, s = o.Math_min(t + n * o.Math_random(), 5e5);
                                    return Promise.resolve(r(0 | s));
                                }
                            }
                            return t.startsWith("war:") && e.warOrigin ? new Promise((r => {
                                const n = [ e.warOrigin, "/", t.slice(4) ], s = e.warSecret;
                                void 0 !== s && n.push("?secret=", s);
                                const i = new o.XMLHttpRequest;
                                i.responseType = "text", i.onloadend = e => {
                                    r(e.target.responseText || "");
                                }, i.open("GET", n.join("")), i.send();
                            })) : Promise.resolve("");
                        }(t.directive).then((e => (t.props.response.value = e, t.props.responseText.value = e, 
                        t))))), i.headers["content-type"] = "text/plain";
                    }
                    c.then((e => {
                        i.headers["content-length"] = `${e.props.response.value}`.length, Object.defineProperties(e.xhr, e.props), 
                        e.xhr.dispatchEvent(new Event("readystatechange")), e.xhr.dispatchEvent(new Event("load")), 
                        e.xhr.dispatchEvent(new Event("loadend")), r.uboLog(n, `Prevented with response:\n${e.xhr.response}`);
                    }));
                }
                getResponseHeader(e) {
                    const t = s.get(this);
                    if (void 0 === t || this.readyState < this.HEADERS_RECEIVED) return super.getResponseHeader(e);
                    const o = t.headers[e.toLowerCase()];
                    return void 0 !== o && "" !== o ? o : null;
                }
                getAllResponseHeaders() {
                    const e = s.get(this);
                    if (void 0 === e || this.readyState < this.HEADERS_RECEIVED) return super.getAllResponseHeaders();
                    const t = [];
                    for (const [o, r] of Object.entries(e.headers)) r && t.push(`${o}: ${r}`);
                    return 0 !== t.length && t.push(""), t.join("\r\n");
                }
            };
        }
        function i(e, ...t) {
            void 0 === i.extractProperties && (i.extractProperties = (e, t, o) => {
                for (const r of o) void 0 !== e[r] && (t[r] = e[r]);
            });
            const o = a(), r = {}, n = o.Array_from(e.keys());
            for (const e of t) e instanceof Object != 0 && i.extractProperties(e, r, n);
            for (const [t, n] of e) {
                let e = r[t];
                if (void 0 !== e) {
                    if ("string" != typeof e) {
                        try {
                            e = o.JSON_stringify(e);
                        } catch (e) {}
                        if ("string" != typeof e) continue;
                    }
                    if (!o.testPattern(n, e)) return !1;
                }
            }
            return !0;
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
        const c = [];
        try {
            c.push(...document.location.hostname.split("."));
        } catch (e) {}
        const l = c.length;
        if (0 === l) return;
        const m = new Set, p = [];
        if (0 !== n.size) {
            for (let e = 0; e < l; e++) {
                const t = c.slice(e).join("."), o = n.get(t);
                o && p.push(...o);
            }
            n.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) p.includes(e) || m.add(e);
                }
            };
            for (let t = 0; t < l; t++) e(c.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== r.size) {
            const e = l - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = c.slice(t, o).join(".");
                let n = r.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) p.includes(e) || m.add(e);
                }
            }
            r.clear();
        }
        for (const e of m) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, r;
        try {
            t.uBOL_noXhrIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_noXhrIf);
            r = t.URL.createObjectURL(n);
            const s = t.document;
            o = s.createElement("script"), o.async = !1, o.src = r, (s.head || s.documentElement || s).append(o);
        } catch (e) {}
        r && (o && o.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_noXhrIf;
    }
})();