"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "fetch", "/alert|bloqueador|\\.catch|\\.type/" ], [ "document.createElement", "adsbygoogle.js" ], [ "EventTarget.prototype.addEventListener", "adsbygoogle.js" ], [ "jQuery", "AdblockDetector" ], [ "jQuery", "/adblock/i" ], [ "addEventListener", "displayMessage" ], [ "document.getElementsByTagName", "adsbygoogle.js" ], [ "document.createElement", "Adblock" ], [ "document.createElement", "adblock" ], [ "$", "blockWall" ], [ "document.addEventListener", ".innerHTML" ], [ "$", "!document.getElementById(" ], [ "jQuery", "/Adblock|dummy|detect/" ], [ "EventTarget.prototype.addEventListener", "adblock" ], [ "onload", "AdBlock" ], [ "EventTarget.prototype.addEventListener", "blocker_detector" ], [ "$", "Adblock" ], [ "document.addEventListener", "/;return \\{clear:function\\(\\)\\{/" ], [ "String.prototype.concat", "popup" ], [ "EventTarget.prototype.addEventListener", "window.open" ], [ "$", "window.open" ], [ "enlace", "document.write" ], [ "document.oncontextmenu", "location.replace" ], [ "$", "notficationAd" ], [ "open", "document.getElementById" ], [ "document.addEventListener", "create_" ], [ "onbeforeunload", "popit" ], [ "document.getElementsByTagName", "onclick" ], [ "$", "ads_enabled" ], [ "host", "window.btoa" ], [ "$", '.one("click"' ] ], o = new Map([ [ "luratoon.com", 0 ], [ "playertv.org", 1 ], [ "tvembed.net", 1 ], [ "tv0800.zip", 1 ], [ "gamesteelstudioplus.blogspot.com", 2 ], [ "gamesteelstudio.blogspot.com", 2 ], [ "infohojeonline.blogspot.com", 2 ], [ "dicasdevalor.net", 3 ], [ "animeszone.net", 4 ], [ "canalnatelinhaonline.blogspot.com", 5 ], [ "hinatasoul.com", 6 ], [ "buscalinks.xyz", 7 ], [ "gamesviatorrent.top", 7 ], [ "inuyashadowns.com.br", 8 ], [ "link.baixedetudo.net.br", 8 ], [ "oliberal.com", 9 ], [ "suaads.com", 10 ], [ "reidoplacar.com", 10 ], [ "suaurl.com", [ 10, 23, 24 ] ], [ "csrevo.com", 11 ], [ "guianoticiario.net", 12 ], [ "oceans14.com.br", 13 ], [ "illamadas.es", 14 ], [ "audiotools.in", 15 ], [ "ecartelera.com", 16 ], [ "animeshouse.net", 17 ], [ "packsmega.info", 18 ], [ "futbollibre.pe", 19 ], [ "embedder.net", 19 ], [ "playpaste.com", [ 20, 21 ] ], [ "pasfox.com", [ 21, 28 ] ], [ "directvxx.com", 22 ], [ "tiohentai.xyz", 25 ], [ "palaygo.site", 26 ], [ "seireshd.com", 29 ], [ "hentai-id.tv", 30 ] ]), n = new Map([ [ "movidy", 27 ] ]), r = new Map([]);
        function c(...t) {
            !function(e) {
                if (document.documentElement) return void e();
                const t = new MutationObserver((() => {
                    t.disconnect(), e();
                }));
                t.observe(document, {
                    childList: !0
                });
            }((() => {
                !function(t = "", o = "", n = "") {
                    if ("string" != typeof t) return;
                    if ("" === t) return;
                    const r = s(), c = r.makeLogPrefix("abort-current-script", t, o, n), a = r.patternToRegex(o), i = r.patternToRegex(n), l = r.getExtraArgs(Array.from(arguments), 3), d = document.currentScript, u = t.split(".");
                    let p, g, f = window;
                    for (;p = u.shift(), 0 !== u.length && p in f != 0; ) if (f = f[p], f instanceof Object == 0) return;
                    let m = Object.getOwnPropertyDescriptor(f, p);
                    m instanceof Object != 0 && m.get instanceof Function != 0 || (g = f[p], m = void 0), 
                    function(t) {
                        if (t instanceof Object == 0) return !1;
                        e.canDebug && t.debug;
                    }(l);
                    const b = function() {
                        const e = s(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), o = self.onerror;
                        return self.onerror = function(e, ...n) {
                            return !("string" != typeof e || !e.includes(t)) || (o instanceof Function ? o.call(this, e, ...n) : void 0);
                        }.bind(), t;
                    }(), h = new WeakMap, y = e => {
                        let t = e.textContent;
                        if ("" !== t.trim()) return t;
                        if (h.has(e)) return h.get(e);
                        const [, o, n] = /^data:([^,]*),(.+)$/.exec(e.src.trim()) || [ "", "", "" ];
                        try {
                            t = !0 === o.endsWith(";base64") ? self.atob(n) : self.decodeURIComponent(n);
                        } catch (e) {}
                        return h.set(e, t), t;
                    }, v = () => {
                        const e = document.currentScript;
                        if (e instanceof HTMLScriptElement == 0) return;
                        if (e === d) return;
                        if ("" !== n && !1 === i.test(e.src)) return;
                        r.logLevel > 1 && "" !== n && r.uboLog(c, `Matched src\n${e.src}`);
                        const t = y(e);
                        if (!1 !== a.test(t)) throw r.logLevel > 1 && r.uboLog(c, `Matched text\n${t}`), 
                        r.uboLog(c, "Aborted"), new ReferenceError(b);
                    };
                    try {
                        Object.defineProperty(f, p, {
                            get: function() {
                                return v(), m instanceof Object ? m.get.call(f) : g;
                            },
                            set: function(e) {
                                v(), m instanceof Object ? m.set.call(f, e) : g = e;
                            }
                        });
                    } catch (e) {
                        r.uboErr(c, `Error: ${e}`);
                    }
                }(...t);
            }));
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
        const a = [];
        try {
            a.push(...document.location.hostname.split("."));
        } catch (e) {}
        const i = a.length;
        if (0 === i) return;
        const l = new Set, d = [];
        if (0 !== r.size) {
            for (let e = 0; e < i; e++) {
                const t = a.slice(e).join("."), o = r.get(t);
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
            for (let t = 0; t < i; t++) e(a.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== n.size) {
            const e = i - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = a.slice(t, o).join(".");
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
            t.uBOL_abortCurrentScript = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_abortCurrentScript);
            n = t.URL.createObjectURL(r);
            const c = t.document;
            o = c.createElement("script"), o.async = !1, o.src = n, (c.head || c.documentElement || c).append(o);
        } catch (e) {}
        n && (o && o.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_abortCurrentScript;
    }
})();