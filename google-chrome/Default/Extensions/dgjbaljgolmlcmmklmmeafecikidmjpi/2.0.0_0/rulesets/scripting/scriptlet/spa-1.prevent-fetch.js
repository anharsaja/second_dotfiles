"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "adskeeper.com" ], [ "/mopinion\\.com|iubenda\\.com|bannersnack\\.com|unblockia\\.com|googlesyndication\\.com/" ], [ "pagead2.googlesyndication.com" ], [ "/googlesyndication\\.com|iubenda\\.com|unblockia\\.com|bannersnack\\.com|mopinion\\.com/" ], [ "imasdk.googleapis.com" ], [ "method:HEAD" ], [ "securepubads.g.doubleclick.net/pagead/ppub_config" ], [ "adsbygoogle" ], [ "call-zone-adxs" ], [ "/pagead2\\.googlesyndication\\.com|ads-api\\.twitter\\.com/" ], [ "/^(?!.*(chrome-extension:)).*$/ method:HEAD" ], [ "ads-twitter.com" ], [ "static.ads-twitter.com" ], [ "www3.doubleclick.net" ], [ "/adsbygoogle.js" ] ], o = new Map([ [ "sinensistoon.com", 0 ], [ "packsmega.info", 1 ], [ "megacurioso.net", 2 ], [ "tudonoticiasbr.com", 2 ], [ "ggames.com.br", 2 ], [ "mundodonghua.com", 2 ], [ "receitasoncaseiras.online", 2 ], [ "receitasdochico.life", 2 ], [ "dicasdefinancas.net", 2 ], [ "dicasfinanceirasbr.com", 2 ], [ "expertplay.net", 2 ], [ "alarmadefraude.com", 2 ], [ "modescanlator.com", 2 ], [ "sabornutritivo.com", 2 ], [ "financasdeouro.com", 2 ], [ "animeszone.net", 2 ], [ "megacanaisonline.me", 2 ], [ "animesonline.nz", 2 ], [ "los40.com", 2 ], [ "negociosecommerce.com", [ 2, 8 ] ], [ "puromarketing.com", [ 2, 8 ] ], [ "todostartups.com", [ 2, 8 ] ], [ "pobre.wtf", 2 ], [ "acortalo.net", 2 ], [ "link-descarga.site", 2 ], [ "meutimao.com.br", 2 ], [ "discografias.net", 2 ], [ "listas.pro", 2 ], [ "emperorscan.com", 2 ], [ "lawebdelprogramador.com", 2 ], [ "dicasgostosas.com", 2 ], [ "peliculas8k.com", 3 ], [ "southparkstudios.com.br", 4 ], [ "southpark.lat", 4 ], [ "todoandroid.live", 5 ], [ "gadgetzona.net", 5 ], [ "qwanturankpro.com", 5 ], [ "desbloquea.me", 5 ], [ "mega-enlace.com", 5 ], [ "enlacito.com", 5 ], [ "acortame-esto.com", 5 ], [ "monumental.co.cr", 6 ], [ "elcomercio.com", 6 ], [ "antena7.com.do", 6 ], [ "rqp.com.bo", 6 ], [ "canal12.com.sv", 6 ], [ "chapintv.com", 6 ], [ "vtv.com.hn", 6 ], [ "tn23.tv", 6 ], [ "canal13mexico.com", 6 ], [ "c9n.com.py", 6 ], [ "repretel.com", 6 ], [ "redbolivision.tv.bo", 6 ], [ "independentespanol.com", 6 ], [ "teleculinaria.pt", 7 ], [ "nptmedia.tv", 9 ], [ "suaads.com", 10 ], [ "reidoplacar.com", 10 ], [ "suaurl.com", 10 ], [ "costumbresmexico.com", 11 ], [ "desbloqueador.site", 11 ], [ "notipostingt.com", 12 ], [ "tivify.tv", 13 ], [ "netmovies.com.br", 14 ] ]), n = new Map([]), r = new Map([]);
        function s(t = "", o = "") {
            if ("string" != typeof t) return;
            const n = c(), r = n.makeLogPrefix("prevent-fetch", t, o), s = [];
            for (const e of t.split(/\s+/)) {
                if ("" === e) continue;
                const t = e.indexOf(":");
                let o, r;
                -1 !== t ? (o = e.slice(0, t), r = e.slice(t + 1)) : (o = "url", r = e), s.push({
                    key: o,
                    re: n.patternToRegex(r)
                });
            }
            self.fetch = new Proxy(self.fetch, {
                apply: function(i, a, l) {
                    const m = l[0] instanceof self.Request ? l[0] : Object.assign({
                        url: l[0]
                    }, l[1]);
                    let p = !0;
                    try {
                        const e = new Map;
                        for (const t in m) {
                            let o = m[t];
                            if ("string" != typeof o) try {
                                o = n.JSON_stringify(o);
                            } catch (e) {}
                            "string" == typeof o && e.set(t, o);
                        }
                        if ("" === t && "" === o) {
                            const t = Array.from(e).map((e => `${e[0]}:${e[1]}`));
                            return n.uboLog(r, `Called: ${t.join("\n")}`), Reflect.apply(i, a, l);
                        }
                        p = 0 === s.length;
                        for (const {key: t, re: o} of s) if (!1 === e.has(t) || !1 === o.test(e.get(t))) {
                            p = !0;
                            break;
                        }
                    } catch (e) {}
                    if (p) return Reflect.apply(i, a, l);
                    let g = "";
                    if (void 0 === m.mode || "cors" === m.mode) try {
                        const e = new URL(m.url);
                        g = e.origin !== document.location.origin ? "cors" : "basic";
                    } catch (e) {
                        n.uboErr(r, `Error: ${e}`);
                    }
                    return function(t) {
                        const o = c(), n = e => {
                            const t = [];
                            let n = 0;
                            do {
                                const e = o.Math_random().toString(36).slice(2);
                                t.push(e), n += e.length;
                            } while (n < e);
                            return t.join(" ").slice(0, e);
                        };
                        if ("true" === t) return Promise.resolve(n(10));
                        if ("emptyObj" === t) return Promise.resolve("{}");
                        if ("emptyArr" === t) return Promise.resolve("[]");
                        if ("emptyStr" === t) return Promise.resolve("");
                        if (t.startsWith("length:")) {
                            const e = /^length:(\d+)(?:-(\d+))?$/.exec(t);
                            if (e) {
                                const t = parseInt(e[1], 10), r = o.Math_max(parseInt(e[2], 10) || 0, t) - t, s = o.Math_min(t + r * o.Math_random(), 5e5);
                                return Promise.resolve(n(0 | s));
                            }
                        }
                        return t.startsWith("war:") && e.warOrigin ? new Promise((n => {
                            const r = [ e.warOrigin, "/", t.slice(4) ], s = e.warSecret;
                            void 0 !== s && r.push("?secret=", s);
                            const c = new o.XMLHttpRequest;
                            c.responseType = "text", c.onloadend = e => {
                                n(e.target.responseText || "");
                            }, c.open("GET", r.join("")), c.send();
                        })) : Promise.resolve("");
                    }(o).then((e => {
                        n.uboLog(r, `Prevented with response "${e}"`);
                        const t = new Response(e, {
                            statusText: "OK",
                            headers: {
                                "Content-Length": e.length
                            }
                        });
                        return n.Object_defineProperty(t, "url", {
                            value: m.url
                        }), "" !== g && n.Object_defineProperty(t, "type", {
                            value: g
                        }), t;
                    }));
                }
            });
        }
        function c() {
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
        const a = i.length;
        if (0 === a) return;
        const l = new Set, m = [];
        if (0 !== r.size) {
            for (let e = 0; e < a; e++) {
                const t = i.slice(e).join("."), o = r.get(t);
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
            for (let t = 0; t < a; t++) e(i.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== n.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = i.slice(t, o).join(".");
                let r = n.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) m.includes(e) || l.add(e);
                }
            }
            n.clear();
        }
        for (const e of l) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, n;
        try {
            t.uBOL_noFetchIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_noFetchIf);
            n = t.URL.createObjectURL(r);
            const s = t.document;
            o = s.createElement("script"), o.async = !1, o.src = n, (s.head || s.documentElement || s).append(o);
        } catch (e) {}
        n && (o && o.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_noFetchIf;
    }
})();