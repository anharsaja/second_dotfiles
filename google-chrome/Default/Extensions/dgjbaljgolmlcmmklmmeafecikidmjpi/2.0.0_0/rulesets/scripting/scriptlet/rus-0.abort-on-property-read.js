"use strict";

(() => {
    const e = function() {
        const e = {}, o = [ [ "ABNS" ], [ "AdbBanner" ], [ "CTRManager.host3" ], [ "ClickUndercookie" ], [ "Date.prototype.toUTCString" ], [ "Groups.showDisclaimer" ], [ "Light.Popup" ], [ "MarketFeed" ], [ "Object.prototype.AdfoxXhrRequestPrepared" ], [ "Object.prototype.Metrika" ], [ "Object.prototype.YA_TURBO_PAGES" ], [ "Object.prototype._getBanner" ], [ "Object.prototype._isAutostartQueueSet" ], [ "Object.prototype.bannerOptions" ], [ "Object.prototype.direct" ], [ "Object.prototype.fakeDetect" ], [ "Object.prototype.getAdUsageStorage" ], [ "Object.prototype.initOnPlay" ], [ "Object.prototype.isApplySticky" ], [ "Object.prototype.loadBanner" ], [ "Object.prototype.render" ], [ "Object.prototype.scriptsViaXhr" ], [ "Object.prototype.yaContextCb" ], [ "PUM.getPopup" ], [ "SIN.AdsLoader" ], [ "TotemToolsObject" ], [ "WebSocket" ], [ "XMLHttpRequest" ], [ "Ya" ], [ "__vasActiveTestIds" ], [ "a_urls" ], [ "aab" ], [ "abl" ], [ "adblock_availability_check" ], [ "adcashMacros" ], [ "admiral" ], [ "ads" ], [ "advFirstClickOpenNewTab" ], [ "advanced_ads_ready" ], [ "anOptions" ], [ "antiadblockCallback" ], [ "app_vars.force_disable_adblock" ], [ "atob" ], [ "bannersBillboard" ], [ "bdy" ], [ "blocked_action" ], [ "clickNS4" ], [ "console.clear" ], [ "createAds" ], [ "disable_copy" ], [ "disable_hot_keys" ], [ "document.addEventListener" ], [ "document.body.oncopy" ], [ "document.getElementById", "mdl_adb" ], [ "document.oncontextmenu" ], [ "document.oncopy" ], [ "document.ondragend" ], [ "document.ondragstart" ], [ "document.ondrop" ], [ "document.onkeydown" ], [ "document.onpaste" ], [ "document.onselectstart" ], [ "eaglePlayerPlugins.autoplay_position" ], [ "echelon" ], [ "forTheFreeVideo.css" ], [ "fpm_attr" ], [ "getSelection" ], [ "get_ya_browser" ], [ "goTolink" ], [ "helpUsImproveSite" ], [ "initsnow" ], [ "kav_cn" ], [ "lftrght" ], [ "localStorage" ], [ "m205" ], [ "mdpDeBlocker" ], [ "move_string" ], [ "myatu_bgm" ], [ "nocontext" ], [ "onload" ], [ "open" ], [ "preventSelection" ], [ "scrollw" ], [ "setsnow" ], [ "sparkle" ], [ "stopPrntScr" ], [ "t364_initPopup" ], [ "target_script" ], [ "td_ad_background_click_target" ], [ "tingle" ], [ "tnAdditionalParams" ], [ "unSelect" ], [ "updateDownloadLinks" ], [ "utarget_script" ], [ "video.preroll" ], [ "vpb" ], [ "web_script" ], [ "weekCallbacks" ], [ "window.alert" ], [ "window.block" ], [ "wrapper.addEventListener" ], [ "yaContextCb" ], [ "zfgformats" ], [ "bc_blocks" ], [ "globalAuthLoginPopupCounter" ], [ "u_global_data" ] ], t = new Map([ [ "liveball.cc", 0 ], [ "liveball.uno", 0 ], [ "htmlweb.ru", 1 ], [ "fapreactor.com", 2 ], [ "joyreactor.cc", 2 ], [ "pornreactor.cc", 2 ], [ "reactor.cc", 2 ], [ "anifap.com", 3 ], [ "anipoisk.org", 3 ], [ "anitokyo.org", 3 ], [ "anitokyo.tv", 3 ], [ "hcdn.online", 3 ], [ "kinofilm.co", 3 ], [ "comedy-radio.ru", [ 4, 29 ] ], [ "radioromantika.ru", [ 4, 29 ] ], [ "relax-fm.ru", [ 4, 29 ] ], [ "rg.ru", [ 4, 101 ] ], [ "sm.news", [ 4, 28, 31, 81 ] ], [ "ura.news", [ 4, 101 ] ], [ "veseloeradio.ru", [ 4, 29 ] ], [ "www.e1.ru", 4 ], [ "vk.com", 5 ], [ "vk.ru", 5 ], [ "rutor.org", 6 ], [ "ya.ru", 7 ], [ "drive2.ru", [ 8, 22 ] ], [ "liveinternet.ru", [ 9, 10 ] ], [ "yap.ru", 9 ], [ "yaplakal.com", 9 ], [ "lena-miro.ru", 11 ], [ "levik.blog", 11 ], [ "livejournal.com", 11 ], [ "olegmakarenko.ru", 11 ], [ "periskop.su", 11 ], [ "shakko.ru", 11 ], [ "shiro-kino.ru", 11 ], [ "vadimrazumov.ru", 11 ], [ "rbc.ru", [ 12, 18 ] ], [ "www.kinopoisk.ru", 13 ], [ "gorodrabot.by", 14 ], [ "gorodrabot.ru", 14 ], [ "fishki.net", 15 ], [ "reshu.by", 16 ], [ "reshuent.kz", 16 ], [ "reshuolymp.ru", 16 ], [ "sdamgia.ru", 16 ], [ "gdespaces.com", 17 ], [ "gdespaces.net", 17 ], [ "google-cloud.services", 17 ], [ "spac.me", 17 ], [ "spac.run", 17 ], [ "spac.wtf", 17 ], [ "spac1.com", 17 ], [ "spac1.info", 17 ], [ "spac1.me", 17 ], [ "spac1.net", 17 ], [ "spac1.org", 17 ], [ "spac1.ru", 17 ], [ "spaces-blogs.com", 17 ], [ "spaces.im", 17 ], [ "spcs-files.xyz", 17 ], [ "spcs.bio", 17 ], [ "spcs.global", 17 ], [ "spcs.life", 17 ], [ "spcs.me", 17 ], [ "spcs.network", 17 ], [ "spcs.news", 17 ], [ "spcs.pro", 17 ], [ "spcs.pub", 17 ], [ "spcs.reviews", 17 ], [ "spcs.social", 17 ], [ "strip2.in", 17 ], [ "strip2.xxx", 17 ], [ "usersporn.com", 17 ], [ "e1.ru", 19 ], [ "nova.rambler.ru", 19 ], [ "pikabu.ru", [ 19, 28 ] ], [ "24smi.org", 20 ], [ "gismeteo.by", 21 ], [ "gismeteo.kz", 21 ], [ "gismeteo.ru", 21 ], [ "razlozhi.ru", 22 ], [ "f1comp.ru", 23 ], [ "tagaev.com", 23 ], [ "times.zt.ua", 23 ], [ "sinoptik.ua", [ 24, 95 ] ], [ "porngames.su", 25 ], [ "rintor.info", 25 ], [ "rintor.net", 25 ], [ "castle-tv.com", 26 ], [ "100popugaev.ru", 27 ], [ "coderlessons.com", 27 ], [ "fixx.one", 27 ], [ "its-kids.ru", 27 ], [ "molitvy.guru", 27 ], [ "nizhny.ru", 27 ], [ "pro100hobbi.ru", 27 ], [ "publy.ru", 27 ], [ "samelectric.ru", 27 ], [ "svadba.expert", 27 ], [ "tehnobzor.ru", [ 27, 75 ] ], [ "vibir.ru", 27 ], [ "3dnews.kz", 28 ], [ "3dnews.ru", 28 ], [ "avtovzglyad.ru", 28 ], [ "baby.ru", 28 ], [ "dni.ru", 28 ], [ "mamba.ru", 28 ], [ "pogoda.onliner.by", 28 ], [ "selflib.me", 28 ], [ "sports.ru", [ 28, 40 ] ], [ "tech.onliner.by", 28 ], [ "www.goha.ru", 28 ], [ "forum.overclockers.ua", 30 ], [ "kufar.by", 31 ], [ "bstudy.net", 32 ], [ "ozlib.com", 32 ], [ "studbooks.net", 32 ], [ "studme.org", 32 ], [ "studref.com", 32 ], [ "studwood.net", 32 ], [ "vuzlit.com", 32 ], [ "xstud.org", 32 ], [ "vgtimes.ru", 33 ], [ "upload.ee", 34 ], [ "footboom.com", [ 35, 63 ] ], [ "footboom.kz", [ 35, 63 ] ], [ "electric-house.ru", 36 ], [ "freehat.cc", [ 37, 80 ] ], [ "agroreview.com", 38 ], [ "amazinghis.ru", 39 ], [ "moj-pes.ru", 39 ], [ "shrlink.top", 41 ], [ "friends.in.ua", [ 42, 51 ] ], [ "gidonline.eu", [ 42, 87 ] ], [ "vprognoze.ru", 43 ], [ "terrikon.com", 44 ], [ "medicina.ua", 45 ], [ "zaruba.fun", 46 ], [ "fm-app.ru", 47 ], [ "ritsatv.ru", 47 ], [ "tvapp.su", 47 ], [ "yootv.ru", 47 ], [ "vesti.ua", 48 ], [ "kolizhanka.com.ua", [ 49, 50, 78 ] ], [ "gra-prestoliv.in.ua", 51 ], [ "simpsonsua.tv", 51 ], [ "pravvest.ru", 52 ], [ "dclans.ru", 53 ], [ "animevost.org", 54 ], [ "animevost.site", 54 ], [ "animevost.top", 54 ], [ "doefiratv.info", 54 ], [ "payeer-gift.ru", 54 ], [ "smotret-anime-365.ru", 54 ], [ "turkish-tv-series.ru", [ 54, 59, 66 ] ], [ "ufchgu.ru", 54 ], [ "vost.pw", 54 ], [ "xn--b1aew.xn--p1ai", [ 54, 55, 56, 57, 58, 60, 61 ] ], [ "my-expert.ru", 57 ], [ "gazeta.ru", [ 62, 68 ] ], [ "kinozapas.co", 64 ], [ "livesx.online", 64 ], [ "xn--80aikhbrhr.xn--j1amh", 64 ], [ "7ogorod.ru", 65 ], [ "autonevod.ru", 65 ], [ "shtrafsud.ru", 65 ], [ "tophallclub.ru", 65 ], [ "zazloo.ru", 65 ], [ "championat.com", 66 ], [ "doramy.club", 66 ], [ "musify.club", 67 ], [ "dota2.ru", 69 ], [ "elitesnooker.com", 70 ], [ "astrakhan.ru", 71 ], [ "myjane.ru", 71 ], [ "omskpress.ru", 71 ], [ "tambovnet.org", 71 ], [ "daz3d.ru", 72 ], [ "players.com.ua", 73 ], [ "studizba.com", 74 ], [ "asteriatm.ru", 75 ], [ "sudya-dredd.ru", [ 75, 85 ] ], [ "anime-chan.me", [ 76, 84 ] ], [ "city.ogo.ua", 77 ], [ "it-actual.ru", 79 ], [ "hlamer.ru", 80 ], [ "lostpix.com", 80 ], [ "potokcdn.com", 80 ], [ "prostoporno.help", 80 ], [ "saltday.ru", 80 ], [ "uploadimagex.com", 80 ], [ "wowskill.ru", 80 ], [ "xittv.net", 80 ], [ "zab.ru", 82 ], [ "tapochek.net", [ 83, 96 ] ], [ "bryansknovosti.ru", 85 ], [ "novozybkov.su", 85 ], [ "moremania.info", 86 ], [ "kinogo.eu", 87 ], [ "1informer.com", 88 ], [ "fainaidea.com", 88 ], [ "itech.co.ua", 88 ], [ "mediasat.info", 88 ], [ "root-nation.com", 88 ], [ "fssp.gov.ru", 89 ], [ "liveforums.ru", 90 ], [ "onlineclass.space", 91 ], [ "nsportal.ru", 92 ], [ "animekun.ru", 93 ], [ "doramakun.ru", 93 ], [ "vestivrn.ru", 94 ], [ "www.ukr.net", 95 ], [ "4studio.com.ua", 97 ], [ "cikavosti.com", 97 ], [ "dialogs.org.ua", 97 ], [ "fakty.ua", 97 ], [ "gorodkiev.com.ua", 97 ], [ "informator.ua", 97 ], [ "kriminal.tv", 97 ], [ "pingvin.pro", 97 ], [ "technoportal.com.ua", 97 ], [ "u-news.com.ua", 97 ], [ "uanews.org.ua", 97 ], [ "versii.if.ua", 97 ], [ "volynpost.com", 97 ], [ "bombardir.ru", 98 ], [ "comp-service.kiev.ua", 98 ], [ "inforesist.org", 98 ], [ "softportal.com", 99 ], [ "tornado.3dn.ru", 100 ], [ "80-e.ru", 101 ], [ "doramatv.live", 101 ], [ "examenpdd.com", 101 ], [ "animedia.tv", 102 ], [ "animedub.ru", 102 ], [ "vsetut.su", 102 ], [ "ok.ru", 104 ], [ "3dn.ru", 105 ], [ "a-point.info", 105 ], [ "addfiles.ru", 105 ], [ "akkordam.ru", 105 ], [ "all-for-kompa.ru", 105 ], [ "asia-tv.su", 105 ], [ "at.ua", 105 ], [ "autosimgames.ru", 105 ], [ "clan.su", 105 ], [ "db-energo.ru", 105 ], [ "devdrivers.ru", 105 ], [ "do.am", 105 ], [ "elegos.ru", 105 ], [ "elektronika56.ru", 105 ], [ "elektrosat.ru", 105 ], [ "fon-ki.com", 105 ], [ "for-gsm.ru", 105 ], [ "free-dream.ru", 105 ], [ "ftechedu.ru", 105 ], [ "fukushima-news.ru", 105 ], [ "gals.md", 105 ], [ "gloria-cedric.ru", 105 ], [ "goldformat.ru", 105 ], [ "greenflash.su", 105 ], [ "igrul-ka.ru", 105 ], [ "krasnickij.ru", 105 ], [ "krolmen.ru", 105 ], [ "megaclips.net", 105 ], [ "mow-portal.ru", 105 ], [ "moy.su", 105 ], [ "my1.ru", 105 ], [ "narod.ru", 105 ], [ "newgames.com.ua", 105 ], [ "novospasskoe-city.ru", 105 ], [ "omsimclub.ru", 105 ], [ "online-supernatural.ru", 105 ], [ "only-paper.ru", 105 ], [ "others.name", 105 ], [ "pidru4nik.com", 105 ], [ "pkrc.ru", 105 ], [ "play-force.ru", 105 ], [ "pohoronnoe-byuro.com", 105 ], [ "pokatushki-pmr.ru", 105 ], [ "pro-zakupki.ru", 105 ], [ "project-ss.ru", 105 ], [ "psxworld.ru", 105 ], [ "radiodom.org", 105 ], [ "rocketdockfree.ru", 105 ], [ "sdr-deluxe.com", 105 ], [ "soft-game.net", 105 ], [ "stalker-gsc.ru", 105 ], [ "stalker-zone.info", 105 ], [ "stalkermods.ru", 105 ], [ "svadbatomsk.ru", 105 ], [ "techmusic.ru", 105 ], [ "tes-game.ru", 105 ], [ "torfiles.ru", 105 ], [ "ucoz.club", 105 ], [ "ucoz.com", 105 ], [ "ucoz.net", 105 ], [ "ucoz.org", 105 ], [ "ucoz.ru", 105 ], [ "ucoz.ua", 105 ], [ "usite.pro", 105 ], [ "vodopads.ru", 105 ], [ "vsthouse.ru", 105 ], [ "xakevsoft.ru", 105 ], [ "xn--80aeshkkbdj.xn--p1ai", 105 ], [ "yaminecraft.ru", 105 ], [ "zona-stalkera.ru", 105 ] ]), r = new Map([ [ "porno365", 103 ] ]), a = new Map([]);
        function n(e = "") {
            if ("string" != typeof e) return;
            if ("" === e) return;
            const o = s(), t = o.makeLogPrefix("abort-on-property-read", e), r = function() {
                const e = s(), o = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), t = self.onerror;
                return self.onerror = function(e, ...r) {
                    return !("string" != typeof e || !e.includes(o)) || (t instanceof Function ? t.call(this, e, ...r) : void 0);
                }.bind(), o;
            }(), a = function() {
                throw o.uboLog(t, "Aborted"), new ReferenceError(r);
            }, n = function(e, o) {
                const t = o.indexOf(".");
                if (-1 === t) {
                    const t = Object.getOwnPropertyDescriptor(e, o);
                    return void (t && t.get === a || Object.defineProperty(e, o, {
                        get: a,
                        set: function() {}
                    }));
                }
                const r = o.slice(0, t);
                let s = e[r];
                if (o = o.slice(t + 1), s) return void n(s, o);
                const i = Object.getOwnPropertyDescriptor(e, r);
                i && void 0 !== i.set || Object.defineProperty(e, r, {
                    get: function() {
                        return s;
                    },
                    set: function(e) {
                        s = e, e instanceof Object && n(e, o);
                    }
                });
            }, i = window;
            n(i, e);
        }
        function s() {
            if (e.safeSelf) return e.safeSelf;
            const o = globalThis, t = {
                Array_from: Array.from,
                Error: o.Error,
                Function_toStringFn: o.Function.prototype.toString,
                Function_toString: e => t.Function_toStringFn.call(e),
                Math_floor: Math.floor,
                Math_max: Math.max,
                Math_min: Math.min,
                Math_random: Math.random,
                Object: Object,
                Object_defineProperty: Object.defineProperty.bind(Object),
                Object_fromEntries: Object.fromEntries.bind(Object),
                Object_getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor.bind(Object),
                RegExp: o.RegExp,
                RegExp_test: o.RegExp.prototype.test,
                RegExp_exec: o.RegExp.prototype.exec,
                Request_clone: o.Request.prototype.clone,
                XMLHttpRequest: o.XMLHttpRequest,
                addEventListener: o.EventTarget.prototype.addEventListener,
                removeEventListener: o.EventTarget.prototype.removeEventListener,
                fetch: o.fetch,
                JSON: o.JSON,
                JSON_parseFn: o.JSON.parse,
                JSON_stringifyFn: o.JSON.stringify,
                JSON_parse: (...e) => t.JSON_parseFn.call(t.JSON, ...e),
                JSON_stringify: (...e) => t.JSON_stringifyFn.call(t.JSON, ...e),
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
                initPattern(e, o = {}) {
                    if ("" === e) return {
                        matchAll: !0
                    };
                    const t = !0 !== o.canNegate || !1 === e.startsWith("!");
                    !1 === t && (e = e.slice(1));
                    const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== r ? {
                        re: new this.RegExp(r[1], r[2] || o.flags),
                        expect: t
                    } : void 0 !== o.flags ? {
                        re: new this.RegExp(this.escapeRegexChars(e), o.flags),
                        expect: t
                    } : {
                        pattern: e,
                        expect: t
                    };
                },
                testPattern(e, o) {
                    return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, o) === e.expect : o.includes(e.pattern) === e.expect);
                },
                patternToRegex(e, o, t = !1) {
                    if ("" === e) return /^/;
                    const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === r) {
                        const r = this.escapeRegexChars(e);
                        return new RegExp(t ? `^${r}$` : r, o);
                    }
                    try {
                        return new RegExp(r[1], r[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, o = 0) {
                    const t = e.slice(o).reduce(((e, o, t, r) => {
                        if (0 == (1 & t)) {
                            const o = r[t + 1], a = /^\d+$/.test(o) ? parseInt(o, 10) : o;
                            e.push([ r[t], a ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(t);
                },
                onIdle: (e, t) => o.requestIdleCallback ? o.requestIdleCallback(e, t) : o.requestAnimationFrame(e)
            };
            if (e.safeSelf = t, void 0 === e.bcSecret) return t;
            const r = new o.BroadcastChannel(e.bcSecret);
            let a = [];
            return t.logLevel = e.logLevel || 1, t.sendToLogger = (e, ...o) => {
                if (0 === o.length) return;
                const t = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
                if (void 0 === a) return r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: t
                });
                a.push({
                    type: e,
                    text: t
                });
            }, r.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === a) break;
                    a.forEach((({type: e, text: o}) => r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: o
                    }))), a = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    t.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    t.logLevel = 2;
                }
            }, r.postMessage("areyouready?"), t;
        }
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = i.length;
        if (0 === c) return;
        const u = new Set, p = [];
        if (0 !== a.size) {
            for (let e = 0; e < c; e++) {
                const o = i.slice(e).join("."), t = a.get(o);
                t && p.push(...t);
            }
            a.clear();
        }
        if (0 !== t.size) {
            const e = e => {
                let o = t.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) p.includes(e) || u.add(e);
                }
            };
            for (let o = 0; o < c; o++) e(i.slice(o).join("."));
            e("*"), t.clear();
        }
        if (0 !== r.size) {
            const e = c - 1;
            for (let o = 0; o < e; o++) for (let t = e; t > o; t--) {
                const e = i.slice(o, t).join(".");
                let a = r.get(e);
                if (void 0 !== a) {
                    "number" == typeof a && (a = [ a ]);
                    for (const e of a) p.includes(e) || u.add(e);
                }
            }
            r.clear();
        }
        for (const e of u) try {
            n(...o[e]);
        } catch (e) {}
        o.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const o = self.wrappedJSObject;
        let t, r;
        try {
            o.uBOL_abortOnPropertyRead = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const a = new o.Blob(...o.uBOL_abortOnPropertyRead);
            r = o.URL.createObjectURL(a);
            const n = o.document;
            t = n.createElement("script"), t.async = !1, t.src = r, (n.head || n.documentElement || n).append(t);
        } catch (e) {}
        r && (t && t.remove(), o.URL.revokeObjectURL(r)), delete o.uBOL_abortOnPropertyRead;
    }
})();