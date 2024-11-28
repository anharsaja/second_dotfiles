"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "oncontextmenu" ], [ "oncopy" ], [ "onselectstart" ], [ "oncontextmenu|ondragstart|onselectstart" ], [ "oncontextmenu|ondragstart|onselectstart|onkeydown" ], [ "oncontextmenu|onselectstart" ], [ "oncontextmenu|onselectstart|ondragstart" ], [ "oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart" ], [ "oncontextmenu|onselectstart|onselect|oncopy" ], [ "oncontextmenu|onkeydown|onmousedown" ], [ "oncontextmenu|onselectstart|ondragstart|oncopy|oncut|onpaste|onbeforecopy" ], [ "onselectstart|ondragstart" ], [ "oncontextmenu", "body", "complete" ], [ "oncontextmenu|onCopy" ], [ "oncontextmenu|onmousedown|onselectstart" ], [ "oncontextmenu|ondragstart|onselectstart|onkeydown|onmousedown" ], [ "oncontextmenu|onkeydown" ], [ "onkeydown" ], [ "ondragstart|onselectstart" ], [ "ondrop|ondragstart" ], [ "onselectstart|ondragstart|oncontextmenu" ], [ "oncontextmenu|ondragstart" ], [ "onmousemove|ondragstart|onselectstart|oncontextmenu", "body" ], [ "oncontextmenu", "body" ], [ "onselectstart|ondragstart|onmousedown|onkeydown|oncontextmenu", "body" ], [ "oncontextmenu|onselectstart|ondragstart|onclick" ], [ "style", "div#novelBoby", "stay" ], [ "oncontextmenu|onMouseDown|style" ], [ "ondragstart|oncontextmenu" ], [ "onContextMenu", "body" ], [ "onkeydown|oncontextmenu", "body" ], [ "oncontextmenu|oncopy" ], [ "oncontextmenu|onselectstart|ondragstart|oncut|oncopy", "div.contentContainer, div.content", "stay" ], [ "oncontextmenu|onselectstart|style", "#body_game" ], [ "oncontextmenu|oncopy|ontouchstart", "body" ], [ "oncontextmenu|onselectstart|onselect|ondragstart|ondrag", "body" ], [ "oncontextmenu|ondragstart|onselectstart", "body" ], [ "oncontextmenu|onselectstart|onmousedown", "body" ], [ "oncopy|oncontextmenu|onselectstart|onselect|ondragstart|ondrag|onbeforeprint|onafterprint", "body" ], [ "oncontextmenu|ondragstart|ondrop|onselectstart" ], [ "oncontextmenu|onselectstart", "body" ], [ "oncontextmenu|onDragStart|onSelectStart" ], [ "oncontextmenu|ondragstart|onselectstart|onkeydown|oncopy|oncut" ], [ "oncopy|oncontextmenu", "body" ], [ "oncontextmenu|ondragstart|oncopy|oncut", ".select-none", "stay" ], [ "oncontextmenu|ondragstart|onselectstart|onselect|oncopy|onbeforecopy|onkeydown|onunload" ], [ "oncontextmenu|onDragStart|onselectstart" ], [ "onselectstart|oncontextmenu", "body" ], [ "oncontextmenu|onkeydown|onselectstart", "body" ], [ "oncopy|oncontextmenu|oncut|onpaste", "input" ], [ "oncontextmenu|oncopy|onselectstart" ], [ "onbeforecopy|oncontextmenu|oncopy|ondragstart|onmouseup|onselect|onselectstart" ], [ "oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|style", "body" ], [ "style", 'body[style="user-select: none;"]', "stay" ], [ "oncopy|oncut|onselectstart|style|unselectable", "body", "stay" ], [ "oncontextmenu|onselectstart|oncut|oncopy" ], [ "oncontextmenu|ondragstart|onselect" ], [ "onpaste", "#tr_mesaj > td > .text-input.validate\\[required\\]" ], [ "oncontextmenu|onkeydown|onselectstart" ], [ "oncontextmenu", "#VdoPlayerDiv" ], [ "oncontextmenu", "a#download_link", "stay" ], [ "oncontextmenu", "html" ], [ "oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|onselect|oncopy|onbeforecopy|onmouseup" ], [ "onContextmenu|onMouseDown|onSelectStart" ], [ "oncontextmenu|onmousedown|onselectstart", ".all-lyrics" ], [ "oncontextmenu|ondragstart|onselectstart", "body", "complete" ], [ "oncontextmenu", 'img[oncontextmenu="return false;"]', "stay" ], [ "onselectstart", "body" ], [ "onclick", '[onclick="myFunction()"]' ], [ "oncontextmenu", '[oncontextmenu="return false;"]' ], [ "oncontextmenu|ondragstart|onselectstart|onload|onblur" ], [ "oncopy|oncut" ] ], o = new Map([ [ "nulled.life", 0 ], [ "liveonsat.com", 0 ], [ "ligowiec.net", 0 ], [ "radio5.com.pl", 0 ], [ "romet.pl", 0 ], [ "sat-charts.eu", 0 ], [ "skionline.pl", 0 ], [ "trentino.pl", 0 ], [ "pcpobierz.pl", 0 ], [ "animeunity.it", 0 ], [ "megawypas.com", 0 ], [ "meteo.org.pl", 0 ], [ "banglainsider.com", 0 ], [ "listatv.pl", 0 ], [ "megatube.xxx", 0 ], [ "elektro-plast.com.pl", 0 ], [ "pluspremieres.nz", 0 ], [ "sp.uta-net.com", 0 ], [ "adnan-tech.com", 0 ], [ "nzbstars.com", 0 ], [ "nogizaka46.com", 0 ], [ "suedkurier.de", 0 ], [ "utamap.com", 0 ], [ "hienzo.com", 0 ], [ "debeste.de", 0 ], [ "courseware.cemc.uwaterloo.ca", 0 ], [ "sekai-kabuka.com", 0 ], [ "daum.net", 0 ], [ "fraudnavi.com", 0 ], [ "zdravenportal.eu", 0 ], [ "wasza-farma.pl", 0 ], [ "wouterplanet.com", 0 ], [ "goalup.live", 0 ], [ "promotor-poz.kylos.pl", 0 ], [ "img999.com", 0 ], [ "wattpad.com", 0 ], [ "articlesmania.me", 0 ], [ "aksensei.com", 0 ], [ "aepos.ap.gov.in", 0 ], [ "mocah.org", 0 ], [ "matzoo.pl", 0 ], [ "dropgalaxy.com", 0 ], [ "warning.or.kr", 0 ], [ "terramirabilis.ro", 0 ], [ "smartkhabrinews.com", 0 ], [ "sportsupa.com", 0 ], [ "hoca4u.com", 0 ], [ "ebc.com.br", 1 ], [ "pandurul.ro", 1 ], [ "livetennis.it", 2 ], [ "djelfa.info", 2 ], [ "virpe.com", 2 ], [ "seoul.cs.land.to", 2 ], [ "utorrentgamesps2.blogspot.com", 2 ], [ "book.zongheng.com", 2 ], [ "shumilou.com", 2 ], [ "virpe.cc", 2 ], [ "singingdalong.blogspot.com", 3 ], [ "neobux.com", 3 ], [ "dba-oracle.com", 3 ], [ "giromarilia.com.br", 3 ], [ "northumberland-walks.co.uk", 3 ], [ "foodviva.com", 3 ], [ "shushan.zhangyue.net", 3 ], [ "elahmad.com", 3 ], [ "novelpia.com", 3 ], [ "epitesti.ro", 3 ], [ "uwayapply.com", 3 ], [ "apornstories.com", 4 ], [ "filmesonlinex.co", 4 ], [ "j-lyric.net", 5 ], [ "utaten.com", 5 ], [ "as-selection.net", 5 ], [ "tohkaishimpo.com", 5 ], [ "iwanichi.co.jp", 5 ], [ "runningnews.gr", 6 ], [ "zerodot1.gitlab.io", 6 ], [ "mainframegurukul.com", 6 ], [ "clasicotas.org", 6 ], [ "nostracasa.com.br", 6 ], [ "enjoytaiwan.co.kr", 6 ], [ "tercihiniyap.net", 6 ], [ "gukjenews.com", 6 ], [ "ohli365.vip", 6 ], [ "insurance-corporate.blogspot.com", 7 ], [ "gezimanya.com", 8 ], [ "quadrinhoseroticos.net", 8 ], [ "cepuluh.com", 9 ], [ "ke-1.com", 9 ], [ "tekloggers.com", 9 ], [ "theitaliantimes.it", 10 ], [ "hebrew4christians.com", 11 ], [ "musixmatch.com", 12 ], [ "ryuryuko.blog90.fc2.com", 13 ], [ "mdpr.jp", 14 ], [ "japan-academy-prize.jp", 14 ], [ "citpekalongan.com", 15 ], [ "gembel9.xyz", 15 ], [ "atribuna.com.br", 16 ], [ "newsforbolly.org", 17 ], [ "coinurl.net", 17 ], [ "diariodoiguacu.com.br", 18 ], [ "metropoliaztm.pl", 19 ], [ "quotev.com", 20 ], [ "nekopoi.web.id", 21 ], [ "animefire.plus", 21 ], [ "sopot.net", 22 ], [ "tv-asahi.co.jp", 23 ], [ "erovideoseek.com", 23 ], [ "kyonyuquest.com", 23 ], [ "katosatoshi.jp", 23 ], [ "techoreels.com", 23 ], [ "kuroko-analyze.com", 23 ], [ "gats.io", 23 ], [ "promotor.pl", 23 ], [ "bikesell.co.kr", 23 ], [ "news.dwango.jp", 23 ], [ "urbharat.xyz", 23 ], [ "animatedshows.to", 23 ], [ "miraculous.to", 23 ], [ "cdn.gamemonetize.com", 23 ], [ "aztravels.net", 23 ], [ "downfile.site", 23 ], [ "memangbau.com", 23 ], [ "trangchu.news", 23 ], [ "umk.co.jp", 23 ], [ "streamservicehd.click", 23 ], [ "eplayer.click", 23 ], [ "olacast.live", 23 ], [ "kamerabudaya.com", 24 ], [ "visaonoticias.com", 25 ], [ "alphapolis.co.jp", 26 ], [ "money-sense.club", 27 ], [ "kanjukulive.com", 28 ], [ "radichubu.jp", 29 ], [ "texte.work", 30 ], [ "railf.jp", 31 ], [ "spectank.jp", 31 ], [ "magnet-novels.com", 32 ], [ "mhwg.org", 33 ], [ "j-island.net", 34 ], [ "anauk.net", 35 ], [ "bonobono.com", 36 ], [ "rdsong.com", 36 ], [ "poplinks.idolmaster-official.jp", 37 ], [ "bdb.com.pl", 38 ], [ "cablegratis.online", 39 ], [ "kijyomatome-ch.com", 40 ], [ "globaledu.jp", 40 ], [ "loveplay123.com", 41 ], [ "th-world.com", 42 ], [ "korona.co.jp", 43 ], [ "novelism.jp", 44 ], [ "myhtebooks.com", 45 ], [ "pixnet.net", 46 ], [ "apk1s.com", 47 ], [ "foxaholic.com", 48 ], [ "auth.alipay.com", 49 ], [ "30edu.com.cn", 50 ], [ "doc.mbalib.com", 51 ], [ "perangkatguruku.com", 52 ], [ "naaree.com", 53 ], [ "gardenia.net", 54 ], [ "c315.cn", 55 ], [ "uemeds.cn", 56 ], [ "pttws.ptt.gov.tr", 57 ], [ "leeyiding.com", 58 ], [ "veblr.com", 59 ], [ "thememypc.net", 60 ], [ "gakki.me", 62 ], [ "tunegate.me", 63 ], [ "oricon.co.jp", 64 ], [ "lover93.net", 65 ], [ "fantasytagtree.com", 66 ], [ "selfstudys.com", 67 ], [ "myfreemp3juices.cc", 68 ], [ "welovemanga.one", 69 ], [ "mrbenne.com", 70 ], [ "xossipy.com", 71 ] ]), n = new Map([ [ "pelispedia", 0 ], [ "vinaurl", 17 ], [ "ask4movie", 61 ] ]), r = new Map([]);
        function c(e = "", t = "", o = "") {
            if ("string" != typeof e) return;
            if ("" === e) return;
            const n = a(), r = n.makeLogPrefix("remove-attr", e, t, o), c = e.split(/\s*\|\s*/), s = c.map((e => `${t}[${CSS.escape(e)}]`)).join(",");
            let i;
            n.logLevel > 1 && n.uboLog(r, `Target selector:\n\t${s}`);
            const l = () => {
                i = void 0;
                try {
                    const e = document.querySelectorAll(s);
                    for (const t of e) for (const e of c) !1 !== t.hasAttribute(e) && (t.removeAttribute(e), 
                    n.uboLog(r, `Removed attribute '${e}'`));
                } catch (e) {}
            }, m = e => {
                if (void 0 !== i) return;
                let t = !0;
                for (let o = 0; o < e.length && t; o++) {
                    const {type: n, addedNodes: r, removedNodes: c} = e[o];
                    "attributes" === n && (t = !1);
                    for (let e = 0; e < r.length && t; e++) if (1 === r[e].nodeType) {
                        t = !1;
                        break;
                    }
                    for (let e = 0; e < c.length && t; e++) if (1 === c[e].nodeType) {
                        t = !1;
                        break;
                    }
                }
                t || (i = n.onIdle(l, {
                    timeout: 67
                }));
            };
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
                const c = a(), s = [ "readystatechange", () => {
                    o(document.readyState) < n || (e(), c.removeEventListener.apply(document, s));
                }, {
                    capture: !0
                } ];
                c.addEventListener.apply(document, s);
            }((() => {
                l(), !1 !== /\bstay\b/.test(o) && new MutationObserver(m).observe(document, {
                    attributes: !0,
                    attributeFilter: c,
                    childList: !0,
                    subtree: !0
                });
            }), /\bcomplete\b/.test(o) ? "idle" : "interactive");
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
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const i = s.length;
        if (0 === i) return;
        const l = new Set, m = [];
        if (0 !== r.size) {
            for (let e = 0; e < i; e++) {
                const t = s.slice(e).join("."), o = r.get(t);
                o && m.push(...o);
            }
            r.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) m.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < i; t++) e(s.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== n.size) {
            const e = i - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = s.slice(t, o).join(".");
                let r = n.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) m.includes(e) || l.add(e);
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
            t.uBOL_removeAttr = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_removeAttr);
            n = t.URL.createObjectURL(r);
            const c = t.document;
            o = c.createElement("script"), o.async = !1, o.src = n, (c.head || c.documentElement || c).append(o);
        } catch (e) {}
        n && (o && o.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_removeAttr;
    }
})();