"use strict";

!function() {
    const e = {}, t = [ [ 'a[href^="https://azrom.net/"][href*="?url="]', "?url" ], [ 'a[href^="/p/download.html?ntlruby="]', "?ntlruby" ], [ 'a[href^="https://www.adtival.network/"][href*="&url="]', "?url" ], [ 'a[href^="https://linkshortify.com/"][href*="url=http"]', "?url" ], [ 'a[href^="https://www.linkedin.com/redir/redirect?url=http"]', "?url" ], [ 'a[href^="//duckduckgo.com/l/?uddg="]', "?uddg" ], [ 'a[href^="https://androidauth.wpengine.com/wp-json/api/advanced_redirect?ref="]', "?ref" ], [ 'a[href^="https://www.dpbolvw.net/click-"][href*="?url="]', "?url" ], [ 'a[href^="https://greenmangaming.sjv.io/c/"][href*="?u="]', "?u" ], [ 'a[href^="https://go.skimresources.com/"][href*="&url=http"]', "?url" ], [ 'a[href^="https://click.linksynergy.com/deeplink?id="][href*="&murl="]', "?murl" ], [ 'a[href*="?"][href*="&url=http]', "?url" ], [ 'a[href*="?"][href*="&u=http"]', "?u" ], [ 'a[href^="/vp/player/to/?u=http"], a[href^="/vp/download/goto/?u=http"]', "?u" ], [ 'a[href^="https://drivevideo.xyz/link?link=http"]', "?link" ], [ 'a[href^="http://go.redirectingat.com"][href*="&url="]', "?url" ], [ 'a[href^="https://app.adjust.com/"][href*="?fallback=http"]', "?fallback" ], [ 'a[href^="https://go.redirectingat.com?url=http"]', "?url" ], [ 'a[href^="/check.php?"][href*="&url=http"]', "?url" ], [ 'a[href^="https://click.linksynergy.com/deeplink?id="][href*="&murl=http"]', "?murl" ], [ 'a[href^="https://disq.us/url?url="][title^="http"]', "[title]" ], [ 'a[href^="https://disq.us/?url=http"]', "?url" ], [ 'a[href^="https://steamcommunity.com/linkfilter/?url=http"]', "?url" ], [ 'a[href^="https://steamcommunity.com/linkfilter/?u=http"]', "?u" ], [ 'a[href^="https://colab.research.google.com/corgiredirector?site=http"]', "?site" ], [ 'a[href^="https://shop-links.co/link/?"][href*="&url=http"]', "?url" ], [ 'a[href^="http://www.jdoqocy.com/click-"][href*="?URL=http"]', "?URL" ], [ 'a[href^="https://track.adtraction.com/t/t?"][href*="&url=http"]', "?url" ], [ 'a[href^="https://metager.org/partner/r?link=http"]', "?link" ], [ 'a[href*="go.redirectingat.com"][href*="url=http"]', "?url" ], [ 'a[href^="https://slickdeals.net/?"][href*="u2=http"]', "?u2" ], [ 'a[href^="https://online.adservicemedia.dk/"][href*="deeplink=http"]', "?deeplink" ], [ 'a[href*="https://www.chollometro.com/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.dealabs.com/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.hotukdeals.com/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.mydealz.de/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://nl.pepper.com/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.pepper.it/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.pepper.pl/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.pepper.ru/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.preisjaeger.at/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.promodescuentos.com/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.pelando.com.br/api/redirect?url="]', "?url" ] ], r = new Map([ [ "azrom.net", 0 ], [ "taisachonthi.com", 1 ], [ "kazefuri.net", 2 ], [ "linkedin.com", 4 ], [ "html.duckduckgo.com", 5 ], [ "lite.duckduckgo.com", 5 ], [ "androidauthority.com", 6 ], [ "pcgamingwiki.com", [ 7, 8 ] ], [ "starstyle.com", 9 ], [ "insidehook.com", [ 10, 11, 12 ] ], [ "nowinstock.net", [ 10, 12, 15 ] ], [ "fap18.net", 13 ], [ "xxxmom.net", 13 ], [ "fuck55.net", 13 ], [ "gofucker.com", 13 ], [ "sexu.tv", 13 ], [ "vid123.net", 13 ], [ "babe8.net", 13 ], [ "beeg.porn", 13 ], [ "losporn.org", 14 ], [ "streamporn.li", 14 ], [ "pandamovies.org", 14 ], [ "bananamovies.org", 14 ], [ "xopenload.net", 14 ], [ "adultdvdparadise.com", 14 ], [ "speedporn.net", 14 ], [ "mangoporn.net", 14 ], [ "pandamovie.info", 14 ], [ "mangoporn.co", 14 ], [ "mangoparody.com", 14 ], [ "xxxscenes.net", 14 ], [ "pornkino.cc", 14 ], [ "watchxxxfree.pw", 14 ], [ "pandamovie.in", 14 ], [ "speedporn.pw", 14 ], [ "watchfreexxx.net", 14 ], [ "youwatchporn.com", 14 ], [ "watchpornfree.info", 14 ], [ "pandamovies.me", 14 ], [ "xtapes.me", 14 ], [ "netflixporno.net", 14 ], [ "pornwish.org", 14 ], [ "freeomovie.info", 14 ], [ "fullxxxmovies.me", 14 ], [ "watchpornx.com", 14 ], [ "xxxparodyhd.net", 14 ], [ "xxxstream.me", 14 ], [ "pornwatch.ws", 14 ], [ "xopenload.pw", 14 ], [ "onstreams.net", 14 ], [ "playpornfree.xyz", 14 ], [ "pandamovies.pw", 14 ], [ "streamporn.pw", 14 ], [ "xopenload.me", 14 ], [ "paypal.com", 16 ], [ "elotrolado.net", 17 ], [ "tube188.com", 18 ], [ "tomshardware.com", 19 ], [ "disqus.com", [ 20, 21 ] ], [ "steamcommunity.com", [ 22, 23 ] ], [ "colab.research.google.com", 24 ], [ "xda-developers.com", 25 ], [ "isthereanydeal.com", [ 26, 27 ] ], [ "metager.org", 28 ], [ "slickdeals.net", [ 29, 30 ] ], [ "dk.pcpartpicker.com", 31 ], [ "chollometro.com", 32 ], [ "dealabs.com", 33 ], [ "hotukdeals.com", 34 ], [ "mydealz.de", 35 ], [ "nl.pepper.com", 36 ], [ "pepper.it", 37 ], [ "pepper.pl", 38 ], [ "pepper.ru", 39 ], [ "preisjaeger.at", 40 ], [ "promodescuentos.com", 41 ], [ "pelando.com.br", 42 ] ]), o = new Map([ [ "movies4u", 3 ] ]), n = new Map([]);
    function i(e = "", t = "") {
        if ("string" != typeof e) return;
        if ("" === e) return;
        const r = a(), o = r.makeLogPrefix("href-sanitizer", e, t);
        "" === t && (t = "text");
        const n = (e, t) => {
            let r = [];
            try {
                r = document.querySelectorAll(`a[href="${e}"`);
            } catch (e) {}
            for (const e of r) e.setAttribute("href", t);
            return r.length;
        }, i = e => {
            if ("" === e) return "";
            if (/[^\x21-\x7e]/.test(e)) return "";
            try {
                return new URL(e, document.location).href;
            } catch (e) {}
            return "";
        }, s = (e, t) => {
            if (/^\[.*\]$/.test(t)) return e.getAttribute(t.slice(1, -1).trim()) || "";
            if (t.startsWith("?")) {
                try {
                    return new URL(e.href, document.location).searchParams.get(t.slice(1)) || "";
                } catch (e) {}
                return "";
            }
            return "text" === t ? e.textContent.replace(/^[^\x21-\x7e]+/, "").replace(/[^\x21-\x7e]+$/, "") : "";
        }, c = () => {
            let a = [];
            try {
                a = document.querySelectorAll(e);
            } catch (e) {
                return !1;
            }
            for (const e of a) {
                if ("a" !== e.localName) continue;
                if (!1 === e.hasAttribute("href")) continue;
                const a = e.getAttribute("href"), c = s(e, t), l = i(c);
                if ("" === l) continue;
                if (l === a) continue;
                e.setAttribute("href", l);
                const p = n(a, l);
                r.uboLog(o, `Sanitized ${p + 1} links to\n${l}`);
            }
            return !0;
        };
        let l, p;
        const h = e => {
            if (void 0 !== p) return;
            let t = !1;
            for (const r of e) if (0 !== r.addedNodes.length) {
                for (const e of r.addedNodes) if (1 === e.nodeType) {
                    t = !0;
                    break;
                }
                if (t) break;
            }
            !1 !== t && (p = r.onIdle((() => {
                p = void 0, c();
            })));
        };
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
            }, o = r("interactive");
            if (r(document.readyState) >= o) return void e();
            const i = a(), s = [ "readystatechange", () => {
                r(document.readyState) < o || (e(), i.removeEventListener.apply(document, s));
            }, {
                capture: !0
            } ];
            i.addEventListener.apply(document, s);
        }((() => {
            !1 !== c() && (l = new MutationObserver(h), l.observe(document.body, {
                subtree: !0,
                childList: !0
            }));
        }));
    }
    function a() {
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
    const s = [];
    try {
        s.push(...document.location.hostname.split("."));
    } catch (e) {}
    const c = s.length;
    if (0 === c) return;
    const l = new Set, p = [];
    if (0 !== n.size) {
        for (let e = 0; e < c; e++) {
            const t = s.slice(e).join("."), r = n.get(t);
            r && p.push(...r);
        }
        n.clear();
    }
    if (0 !== r.size) {
        const e = e => {
            let t = r.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) p.includes(e) || l.add(e);
            }
        };
        for (let t = 0; t < c; t++) e(s.slice(t).join("."));
        e("*"), r.clear();
    }
    if (0 !== o.size) {
        const e = c - 1;
        for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
            const e = s.slice(t, r).join(".");
            let n = o.get(e);
            if (void 0 !== n) {
                "number" == typeof n && (n = [ n ]);
                for (const e of n) p.includes(e) || l.add(e);
            }
        }
        o.clear();
    }
    for (const e of l) try {
        i(...t[e]);
    } catch (e) {}
    t.length = 0;
}();