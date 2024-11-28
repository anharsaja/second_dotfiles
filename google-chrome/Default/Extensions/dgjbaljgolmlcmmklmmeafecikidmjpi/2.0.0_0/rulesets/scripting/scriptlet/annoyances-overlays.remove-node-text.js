"use strict";

!function() {
    const e = {}, t = [ [ "script", "copyprotect" ], [ "script", "/parseInt.*push.*setTimeout.*try.*catch/" ], [ "script", "/setTimeout.*style/" ], [ "script", "reEnable" ], [ "script", "stopRefreshSite" ], [ "script", "nocontextmenu" ], [ "script", "devtoolsDetector" ], [ "script", "debugger" ], [ "script", "contextmenu" ], [ "script", "console.clear" ], [ "script", "wccp_pro" ], [ "script", "initPopup" ], [ "style", "user-select" ], [ "script", "/contextmenu|devtool/" ], [ "script", "preventDefault" ], [ "script", "wccp" ], [ "script", "isadb" ], [ "script", "e.preventDefault();" ], [ "script", "document.oncontextmenu" ], [ "script", "btnHtml" ], [ "script", "document.onselectstart" ], [ "script", "/$.*ready.*setInterval/" ], [ "script", "disable_show_error" ], [ "script", "disable_copy" ], [ "script", "nocontext" ], [ "script", "ConsoleBan" ], [ "script", "XF" ], [ "script", "disable-devtool" ], [ "script", "/document.onkeydown|document.ondragstart/" ], [ "script", "oncontextmenu" ], [ "script", "ctrlKey" ], [ "script", "fetch" ], [ "script", "devtools" ], [ "script", "while(!![]){try{var" ], [ "script", "/closeWindow\\(\\)|clickIE\\(\\)|reEnable\\(\\)/" ], [ "script", "ab927c49cf1b" ], [ "script", "detectDevTool" ], [ "script", "/Clipboard|oncontextmenu|wpcp|keyCode/" ], [ "style", "/-webkit-user-select|webkit-appearance/" ], [ "script", "loc.hostname" ], [ "script", "adblock" ], [ "script", "disableselect" ] ], o = new Map([ [ "skidrowreloaded.com", 0 ], [ "valid.x86.fr", 2 ], [ "bolugundem.com", 3 ], [ "jpost.com", 4 ], [ "teamkong.tk", 5 ], [ "sekaikomik.bio", 5 ], [ "animesaga.in", 6 ], [ "moviesapi.club", 6 ], [ "bestx.stream", 6 ], [ "watchx.top", 6 ], [ "camcaps.io", 7 ], [ "nicekkk.com", 7 ], [ "dev.miuiflash.com", [ 7, 27 ] ], [ "djxmaza.in", [ 7, 27 ] ], [ "thecubexguide.com", [ 7, 27 ] ], [ "streamvid.net", 7 ], [ "tips97tech.blogspot.com", 7 ], [ "seriesperu.com", 8 ], [ "klartext-ne.de", 8 ], [ "iptvromania.ro", 8 ], [ "cespun.eu", 8 ], [ "sbot.cf", 9 ], [ "fjordd.com", 11 ], [ "playertv.net", 13 ], [ "warungkomik.com", 14 ], [ "themeslide.com", 14 ], [ "terramirabilis.ro", 15 ], [ "161.97.70.5", 16 ], [ "gdrivedescarga.com", 17 ], [ "audiologyresearch.org", 18 ], [ "aventurainromania.ro", 18 ], [ "appimagehub.com", 19 ], [ "gnome-look.org", 19 ], [ "store.kde.org", 19 ], [ "linux-apps.com", 19 ], [ "opendesktop.org", 19 ], [ "pling.com", 19 ], [ "xfce-look.org", 19 ], [ "zipcode.com.ng", 20 ], [ "thejakartapost.com", 21 ], [ "mathcrave.com", 22 ], [ "brokensilenze.net", [ 23, 24 ] ], [ "newsrade.com", 25 ], [ "broncoshq.com", 26 ], [ "anascrie.ro", 28 ], [ "streambuddy.net", 29 ], [ "smartkhabrinews.com", 30 ], [ "cheersandgears.com", 31 ], [ "blog.cryptowidgets.net", 32 ], [ "blog.insurancegold.in", 32 ], [ "blog.wiki-topia.com", 32 ], [ "blog.coinsvalue.net", 32 ], [ "blog.cookinguide.net", 32 ], [ "blog.freeoseocheck.com", 32 ], [ "stblion.xyz", 33 ], [ "xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b", 34 ], [ "xn--90afacv0clj6ac0dxa.xn--p1ai", 34 ], [ "xn--90afacv0cu2a3cr.xn--p1ai", 34 ], [ "puzzle-loop.com", 35 ], [ "puzzle-words.com", 35 ], [ "puzzle-chess.com", 35 ], [ "puzzle-thermometers.com", 35 ], [ "puzzle-norinori.com", 35 ], [ "puzzle-minesweeper.com", 35 ], [ "puzzle-slant.com", 35 ], [ "puzzle-lits.com", 35 ], [ "puzzle-galaxies.com", 35 ], [ "puzzle-tents.com", 35 ], [ "puzzle-battleships.com", 35 ], [ "puzzle-pipes.com", 35 ], [ "puzzle-hitori.com", 35 ], [ "puzzle-heyawake.com", 35 ], [ "puzzle-shingoki.com", 35 ], [ "puzzle-masyu.com", 35 ], [ "puzzle-stitches.com", 35 ], [ "puzzle-aquarium.com", 35 ], [ "puzzle-tapa.com", 35 ], [ "puzzle-star-battle.com", 35 ], [ "puzzle-kakurasu.com", 35 ], [ "puzzle-skyscrapers.com", 35 ], [ "puzzle-futoshiki.com", 35 ], [ "puzzle-shakashaka.com", 35 ], [ "puzzle-kakuro.com", 35 ], [ "puzzle-jigsaw-sudoku.com", 35 ], [ "puzzle-killer-sudoku.com", 35 ], [ "puzzle-binairo.com", 35 ], [ "puzzle-nonograms.com", 35 ], [ "puzzle-sudoku.com", 35 ], [ "puzzle-light-up.com", 35 ], [ "puzzle-bridges.com", 35 ], [ "puzzle-shikaku.com", 35 ], [ "puzzle-nurikabe.com", 35 ], [ "puzzle-dominosa.com", 35 ], [ "inattvcom117.xyz", 36 ], [ "mrbenne.com", [ 37, 38 ] ], [ "www-liverpoolecho-co-uk.translate.goog", 39 ], [ "xanimu.com", 40 ], [ "cosxplay.com", 40 ], [ "noicetranslations.blogspot.com", 41 ] ]), r = new Map([ [ "strtape", 1 ], [ "streamtape", 1 ], [ "vidmoly", 6 ], [ "oploverz", [ 8, 12 ] ], [ "tvhay", 10 ], [ "bg-gledai", 18 ], [ "vembed", 32 ], [ "redecanais", 34 ], [ "redecanaistv", 34 ], [ "redisex", 34 ] ]), n = new Map([]);
    function c(e, t, ...o) {
        !function(e = "", t = "", o = "") {
            const r = s(), n = r.makeLogPrefix("replace-node-text.fn", ...Array.from(arguments)), c = r.patternToRegex(e, "i", !0), i = r.patternToRegex(t, "gms"), a = r.getExtraArgs(Array.from(arguments), 3), l = r.patternToRegex(a.condition || "", "ms"), p = (e = !0) => {
                e && d(g.takeRecords()), g.disconnect(), r.logLevel > 1 && r.uboLog(n, "Quitting");
            };
            let u = a.sedCount || 0;
            const m = e => {
                const c = e.textContent;
                if (l.lastIndex = 0, !1 === r.RegExp_test.call(l, c)) return !0;
                if (i.lastIndex = 0, !1 === r.RegExp_test.call(i, c)) return !0;
                i.lastIndex = 0;
                const s = "" !== t ? c.replace(i, o) : o;
                return e.textContent = s, r.logLevel > 1 && r.uboLog(n, `Text before:\n${c.trim()}`), 
                r.uboLog(n, `Text after:\n${s.trim()}`), 0 === u || 0 != (u -= 1);
            }, d = e => {
                for (const t of e) for (const e of t.addedNodes) if (!1 !== c.test(e.nodeName) && !m(e)) return void p(!1);
            }, g = new MutationObserver(d);
            if (g.observe(document, {
                childList: !0,
                subtree: !0
            }), document.documentElement) {
                const e = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
                let t = 0;
                for (;;) {
                    const o = e.nextNode();
                    if (t += 1, null === o) break;
                    if (!1 !== c.test(o.nodeName) && !m(o)) {
                        p();
                        break;
                    }
                }
                r.uboLog(n, `${t} nodes present before installing mutation observer`);
            }
            a.stay || function(e, t) {
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
                }, r = o("interactive");
                if (o(document.readyState) >= r) return void e();
                const c = s(), i = [ "readystatechange", () => {
                    o(document.readyState) < r || (e(), c.removeEventListener.apply(document, i));
                }, {
                    capture: !0
                } ];
                c.addEventListener.apply(document, i);
            }((() => {
                const e = a.quitAfter || 0;
                0 !== e ? setTimeout((() => {
                    p();
                }), e) : p();
            }));
        }(e, "", "", "condition", t || "", ...o);
    }
    function s() {
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
    const i = [];
    try {
        i.push(...document.location.hostname.split("."));
    } catch (e) {}
    const a = i.length;
    if (0 === a) return;
    const l = new Set, p = [];
    if (0 !== n.size) {
        for (let e = 0; e < a; e++) {
            const t = i.slice(e).join("."), o = n.get(t);
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
        for (let t = 0; t < a; t++) e(i.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== r.size) {
        const e = a - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = i.slice(t, o).join(".");
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
}();