"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "PrebidDamOpen", "800" ], [ "HubAPI", "3000" ], [ '/getComputedStyle[\\s\\S]*?style\\.display="none"[\\s\\S]*?styleBlocked[\\s\\S]*?detected/' ], [ 'function check(){console.log("checked");if($(".adform").children().length>3){console.log("its more");$(".adform").children(".adform-banner").show();clearTimeout(check)}}', "1000" ], [ "ubfix()" ], [ "no-ads-info" ], [ "bioEp.showPopup" ], [ "hasAdblock" ], [ "notDetected" ], [ "Math.round", "5000" ], [ "AdBlock" ], [ "adBanner" ], [ "_actions(a)", "2" ], [ "mdpDeBlocker" ], [ "block", "0" ], [ "detected", "300" ], [ "showAdblockImage", "2000" ], [ "adBlockTest", "100" ] ], o = new Map([ [ "www.dobreprogramy.pl", 0 ], [ "kafeteria.pl", 1 ], [ "polygamia.pl", 1 ], [ "open.fm", 1 ], [ "pudelek.pl", 1 ], [ "wp.pl", 2 ], [ "naekranie.pl", 3 ], [ "purepc.pl", 4 ], [ "calcoolator.pl", 5 ], [ "pl.vpnmentor.com", 6 ], [ "aternos.org", 7 ], [ "filmweb.pl", 8 ], [ "playpuls.pl", 9 ], [ "webinsider.pl", 10 ], [ "start.me", 11 ], [ "techsetter.pl", 12 ], [ "temi.pl", 13 ], [ "film.wp.pl", [ 14, 15 ] ], [ "www.o2.pl", 14 ], [ "uroda.abczdrowie.pl", 14 ], [ "money.pl", 15 ], [ "komorkomania.pl", 15 ], [ "abczdrowie.pl", 15 ], [ "fotoblogia.pl", 15 ], [ "gadzetomania.pl", 15 ], [ "autokult.pl", 15 ], [ "parenting.pl", 15 ], [ "wiadomosci.wp.pl", 15 ], [ "tech.wp.pl", 15 ], [ "dom.wp.pl", 15 ], [ "facet.wp.pl", 15 ], [ "finanse.wp.pl", 15 ], [ "gry.wp.pl", 15 ], [ "gwiazdy.wp.pl", 15 ], [ "kobieta.wp.pl", 15 ], [ "ksiazki.wp.pl", 15 ], [ "kuchnia.wp.pl", 15 ], [ "moto.wp.pl", 15 ], [ "opinie.wp.pl", 15 ], [ "pogoda.wp.pl", 15 ], [ "teleshow.wp.pl", 15 ], [ "turystyka.wp.pl", 15 ], [ "wideo.wp.pl", 15 ], [ "wawalove.wp.pl", 15 ], [ "karmopedia.pl", 16 ], [ "elektroda.pl", 17 ] ]), n = new Map([]), r = new Map([]);
        function i(t = "", o = "") {
            if ("string" != typeof t) return;
            const n = function() {
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
            }(), r = n.makeLogPrefix("prevent-setTimeout", t, o), i = "!" === t.charAt(0);
            i && (t = t.slice(1)), "" === o && (o = void 0);
            let s = !1;
            void 0 !== o && (s = "!" === o.charAt(0), s && (o = o.slice(1)), o = parseInt(o, 10));
            const a = n.patternToRegex(t);
            self.setTimeout = new Proxy(self.setTimeout, {
                apply: function(e, c, l) {
                    const p = l[0] instanceof Function ? String(n.Function_toString(l[0])) : String(l[0]), g = l[1];
                    if ("" === t && void 0 === o) return n.uboLog(r, `Called:\n${p}\n${g}`), Reflect.apply(e, c, l);
                    let d;
                    return "" !== t && (d = a.test(p) !== i), !1 !== d && void 0 !== o && (d = (g === o || isNaN(g) && isNaN(o)) !== s), 
                    d && (l[0] = function() {}, n.uboLog(r, `Prevented:\n${p}\n${g}`)), Reflect.apply(e, c, l);
                },
                get: (e, t, o) => "toString" === t ? e.toString.bind(e) : Reflect.get(e, t, o)
            });
        }
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = s.length;
        if (0 === a) return;
        const c = new Set, l = [];
        if (0 !== r.size) {
            for (let e = 0; e < a; e++) {
                const t = s.slice(e).join("."), o = r.get(t);
                o && l.push(...o);
            }
            r.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || c.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(s.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== n.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = s.slice(t, o).join(".");
                let r = n.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) l.includes(e) || c.add(e);
                }
            }
            n.clear();
        }
        for (const e of c) try {
            i(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, n;
        try {
            t.uBOL_noSetTimeoutIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_noSetTimeoutIf);
            n = t.URL.createObjectURL(r);
            const i = t.document;
            o = i.createElement("script"), o.async = !1, o.src = n, (i.head || i.documentElement || i).append(o);
        } catch (e) {}
        n && (o && o.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_noSetTimeoutIf;
    }
})();