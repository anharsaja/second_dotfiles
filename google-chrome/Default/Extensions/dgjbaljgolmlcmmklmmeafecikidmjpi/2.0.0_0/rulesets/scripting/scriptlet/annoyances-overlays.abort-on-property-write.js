"use strict";

(() => {
    const e = function() {
        const e = {}, o = [ [ "document.oncontextmenu" ], [ "hasAdblock" ], [ "adBlockDetected" ], [ "nocontext" ], [ "clickIE4" ], [ "disableSelection" ], [ "CheckAdLoad" ], [ "addLink" ], [ "_sp_" ], [ "document.onselectstart" ], [ "document.ondragstart" ], [ "disableEnterKey" ], [ "adMessage" ], [ "adBlockEnabled" ], [ "$adframe" ], [ "XF" ], [ "hidekeep" ], [ "ABDSettings" ], [ "clickIE" ], [ "disable_copy" ], [ "disable_hot_keys" ], [ "loadOutbrain" ], [ "killCopy" ], [ "intializemarquee" ], [ "document.oncopy" ], [ "document.onkeydown" ], [ "addLinkToCopy" ], [ "stopPrntScr" ], [ "disable_keystrokes" ], [ "stopSelect" ], [ "reEnable" ], [ "ABD" ], [ "ondragstart" ], [ "ai_adb_overlay" ], [ "ai_adb" ], [ "initimg" ], [ "gdpr_popin_path" ], [ "generatePopup" ], [ "FuckAdBlock" ], [ "ai_front" ], [ "disableselect" ], [ "onload" ], [ "disable_ext_code" ], [ "journeyCompilerGateway" ], [ "document.onkeypress" ], [ "admrlWpJsonP" ], [ "document.onmousedown" ], [ "document.body.oncopy" ], [ "check" ], [ "mensagem" ], [ "ABB_config" ] ], t = new Map([ [ "m4ufree.com", 0 ], [ "cristoiublog.ro", [ 0, 9 ] ], [ "cittadinanza.biz", 0 ], [ "glistranieri.it", 0 ], [ "sabishiidesu.com", 0 ], [ "xiaomi4mi.com", 0 ], [ "cmg24.pl", 0 ], [ "jobsbotswana.info", 0 ], [ "djelfa.info", 0 ], [ "gordiando.com.br", 0 ], [ "wader.toys", 0 ], [ "tecnotutoshd.net", 0 ], [ "l2gamers.cl", [ 0, 25 ] ], [ "luoghidavedere.it", 0 ], [ "voxc.org", 0 ], [ "ac-mo.com", 0 ], [ "eoreuni.com", 0 ], [ "tistory.com", 0 ], [ "gamegame.kr", 0 ], [ "jootc.com", 0 ], [ "wikibious.com", 0 ], [ "mbs.jp", 0 ], [ "texte.work", 0 ], [ "koreanaddict.net", 0 ], [ "englishlands.net", 0 ], [ "fruit01.xyz", 0 ], [ "clipartmax.com", 0 ], [ "planetagibi.com.br", [ 0, 9 ] ], [ "planetagibiblog.com.br", [ 0, 9 ] ], [ "alltechnerd.com", 0 ], [ "generationamiga.com", 0 ], [ "watchmdh.to", 0 ], [ "world4.eu", [ 0, 42 ] ], [ "ggulpass.com", 0 ], [ "chessimprover.com", [ 0, 9 ] ], [ "baixedetudo.net.br", 0 ], [ "epitesti.ro", [ 0, 4 ] ], [ "csid.ro", 0 ], [ "onna.kr", [ 0, 9, 10 ] ], [ "savoriurbane.com", 0 ], [ "ilife97.com", [ 0, 10 ] ], [ "romprovider.com", 0 ], [ "habuteru.com", 0 ], [ "hdrez.com", 0 ], [ "esaral.com", 0 ], [ "classnotes.org.in", 0 ], [ "agar.io", 1 ], [ "surviv.io", 2 ], [ "esercizinglese.com", 2 ], [ "pelisfull.tv", 2 ], [ "halotracker.com", 2 ], [ "102bank.com", 2 ], [ "80beyond.spacestation-online.com", 2 ], [ "b4usa.com", 2 ], [ "badgerandblade.com", 2 ], [ "mzk.starachowice.eu", 2 ], [ "gay69.stream", 3 ], [ "timponline.ro", [ 3, 5, 19 ] ], [ "republicadecuritiba.net", 3 ], [ "dialectsarchive.com", 3 ], [ "resourcepack.net", [ 4, 5 ] ], [ "kurazone.net", [ 4, 5 ] ], [ "peliculas24.me", 5 ], [ "techtrickseo.com", [ 5, 19 ] ], [ "randomstory.org", 5 ], [ "booksmedicos.org", 5 ], [ "kirannewsagency.com", 5 ], [ "starsunfolded.com", 5 ], [ "satcesc.com", [ 5, 25 ] ], [ "amlesson.ru", [ 5, 28 ] ], [ "hebrew4christians.com", 5 ], [ "manianomikata.com", 5 ], [ "iosgods.com", 6 ], [ "uol.com.br", 7 ], [ "elheraldo.hn", 7 ], [ "tekstowo.pl", 7 ], [ "warringtonguardian.co.uk", 8 ], [ "legionprogramas.org", 9 ], [ "selfstudyhistory.com", [ 9, 11 ] ], [ "youmath.it", [ 9, 46 ] ], [ "7fyd.com", 9 ], [ "arti-definisi-pengertian.info", [ 9, 10 ] ], [ "mkv-pastes.com", 9 ], [ "tinyppt.com", [ 10, 11 ] ], [ "droidtekno.com", [ 10, 11 ] ], [ "businessemailetiquette.com", [ 10, 11 ] ], [ "newsbook.pl", [ 10, 11 ] ], [ "relet365.com", 10 ], [ "empregoestagios.com", 10 ], [ "elektrikmen.com", 10 ], [ "hitproversion.com", 10 ], [ "lazytranslations.com", [ 10, 11 ] ], [ "jobskaro.com", 10 ], [ "appd.at", 10 ], [ "apk1s.com", 10 ], [ "audiobookcup.com", 10 ], [ "atlas-geografic.net", [ 10, 11 ] ], [ "sdewery.me", [ 10, 11 ] ], [ "projektowanie-wnetrz-online.pl", 10 ], [ "hindi-gk.com", [ 11, 19, 20 ] ], [ "qualityfilehosting.com", 11 ], [ "openfinanza.it", 11 ], [ "naaree.com", 11 ], [ "gourmetscans.net", 11 ], [ "bingotingo.com", 11 ], [ "7misr4day.com", 11 ], [ "guidingliterature.com", 11 ], [ "kollyinsider.com", 12 ], [ "ewrc-results.com", 13 ], [ "raven-mythic.com", 14 ], [ "cafesaxophone.com", 15 ], [ "alisbach.com", 16 ], [ "linuxslaves.com", 16 ], [ "nakblogz.top", 16 ], [ "juancarlosmolinos.net", 17 ], [ "xhardhempus.com", 18 ], [ "calorielijst.nl", 18 ], [ "truyenbanquyen.com", [ 19, 20 ] ], [ "tunovelaligera.com", 20 ], [ "zdravenportal.eu", 20 ], [ "clujust.ro", 20 ], [ "polygon.com", 21 ], [ "apornstories.com", 22 ], [ "cmjornal.pt", 24 ], [ "aicesu.cn", 24 ], [ "racevpn.com", 25 ], [ "media.framu.world", 25 ], [ "gaz.com.br", 25 ], [ "pancreas.ro", 25 ], [ "bloombergquint.com", 26 ], [ "kpopjjang.com", 27 ], [ "bigulnews.tv", 27 ], [ "jpopsingles.eu", 27 ], [ "skidrowcodex.net", 27 ], [ "darktranslation.com", 27 ], [ "hulnews.top", 27 ], [ "boke112.com", 27 ], [ "janvissersweer.nl", 27 ], [ "adpres.ro", 27 ], [ "the-masters-voice.com", 27 ], [ "postcourier.com.pg", [ 27, 32 ] ], [ "privivkainfo.ru", 28 ], [ "targetstudy.com", 29 ], [ "mtbtutoriales.com", 30 ], [ "nakedcapitalism.com", 31 ], [ "hedgeaccordingly.com", 31 ], [ "nfltraderumors.co", 32 ], [ "fanprojseries.com", 33 ], [ "sfweekly.com", 33 ], [ "magyarhang.org", 34 ], [ "ryuryuko.blog90.fc2.com", 35 ], [ "airfrance.co.jp", 36 ], [ "fxstreet.com", 37 ], [ "jeu2048.fr", 38 ], [ "androidpolice.com", 39 ], [ "solotrend.net", 39 ], [ "tutoganga.blogspot.com", 40 ], [ "hentaialtadefinizione.it", 41 ], [ "wired.com", 43 ], [ "citroen.pl", 44 ], [ "peugeot.pl", 44 ], [ "theblaze.com", 45 ], [ "nbcsports.com", 45 ], [ "nbcsportsedge.com", 45 ], [ "ciweimao.com", 47 ], [ "360doc.com", 47 ], [ "encurtandourl.com", 49 ], [ "mineskin.org", 50 ] ]), r = new Map([ [ "pelispedia", 0 ], [ "mimaletamusical", 0 ], [ "tabonitobrasil", 0 ], [ "daotranslate", [ 0, 9 ] ], [ "putlocker", 0 ], [ "anisubindo", 5 ], [ "hukmatpro", 16 ], [ "theartofnakedwoman", 23 ], [ "oploverz", 48 ] ]), n = new Map([]);
        function a(e = "") {
            if ("string" != typeof e) return;
            if ("" === e) return;
            const o = c(), t = o.makeLogPrefix("abort-on-property-write", e), r = function() {
                const e = c(), o = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), t = self.onerror;
                return self.onerror = function(e, ...r) {
                    return !("string" != typeof e || !e.includes(o)) || (t instanceof Function ? t.call(this, e, ...r) : void 0);
                }.bind(), o;
            }();
            let n = window;
            for (;;) {
                const o = e.indexOf(".");
                if (-1 === o) break;
                if (n = n[e.slice(0, o)], n instanceof Object == 0) return;
                e = e.slice(o + 1);
            }
            delete n[e], Object.defineProperty(n, e, {
                set: function() {
                    throw o.uboLog(t, "Aborted"), new ReferenceError(r);
                }
            });
        }
        function c() {
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
                            const o = r[t + 1], n = /^\d+$/.test(o) ? parseInt(o, 10) : o;
                            e.push([ r[t], n ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(t);
                },
                onIdle: (e, t) => o.requestIdleCallback ? o.requestIdleCallback(e, t) : o.requestAnimationFrame(e)
            };
            if (e.safeSelf = t, void 0 === e.bcSecret) return t;
            const r = new o.BroadcastChannel(e.bcSecret);
            let n = [];
            return t.logLevel = e.logLevel || 1, t.sendToLogger = (e, ...o) => {
                if (0 === o.length) return;
                const t = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
                if (void 0 === n) return r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: t
                });
                n.push({
                    type: e,
                    text: t
                });
            }, r.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === n) break;
                    n.forEach((({type: e, text: o}) => r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: o
                    }))), n = void 0;
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
        const s = i.length;
        if (0 === s) return;
        const l = new Set, m = [];
        if (0 !== n.size) {
            for (let e = 0; e < s; e++) {
                const o = i.slice(e).join("."), t = n.get(o);
                t && m.push(...t);
            }
            n.clear();
        }
        if (0 !== t.size) {
            const e = e => {
                let o = t.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) m.includes(e) || l.add(e);
                }
            };
            for (let o = 0; o < s; o++) e(i.slice(o).join("."));
            e("*"), t.clear();
        }
        if (0 !== r.size) {
            const e = s - 1;
            for (let o = 0; o < e; o++) for (let t = e; t > o; t--) {
                const e = i.slice(o, t).join(".");
                let n = r.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) m.includes(e) || l.add(e);
                }
            }
            r.clear();
        }
        for (const e of l) try {
            a(...o[e]);
        } catch (e) {}
        o.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const o = self.wrappedJSObject;
        let t, r;
        try {
            o.uBOL_abortOnPropertyWrite = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new o.Blob(...o.uBOL_abortOnPropertyWrite);
            r = o.URL.createObjectURL(n);
            const a = o.document;
            t = a.createElement("script"), t.async = !1, t.src = r, (a.head || a.documentElement || a).append(t);
        } catch (e) {}
        r && (t && t.remove(), o.URL.revokeObjectURL(r)), delete o.uBOL_abortOnPropertyWrite;
    }
})();