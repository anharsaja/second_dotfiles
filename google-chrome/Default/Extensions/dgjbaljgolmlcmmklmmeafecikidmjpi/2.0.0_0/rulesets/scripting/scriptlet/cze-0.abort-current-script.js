"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "$", "Ads" ], [ "$", "fancyBanner" ], [ "$", "PartnerRedirectAction" ], [ "window.addEventListener", ":visible" ], [ "document.createElement", "adbDetect" ], [ "HTMLIFrameElement.prototype.contentWindow" ] ], n = new Map([ [ "csfd.cz", 0 ], [ "csfd.sk", 0 ], [ "drbna.cz", 1 ], [ "onlajny.com", 2 ], [ "zive.cz", [ 3, 4 ] ], [ "idnes.cz", [ 4, 5 ] ], [ "novinky.cz", 4 ], [ "aktualne.cz", 4 ], [ "reflex.cz", 4 ], [ "e15.cz", 4 ], [ "blesk.cz", 4 ], [ "ahaonline.cz", 4 ], [ "super.cz", 4 ], [ "auto.cz", 4 ], [ "maminka.cz", 4 ], [ "autorevue.cz", 4 ], [ "osobnosti.cz", 4 ], [ "lidovky.cz", 4 ], [ "iprima.cz", 4 ], [ "kupi.cz", 4 ], [ "kinobox.cz", 4 ], [ "cnews.cz", 4 ], [ "zeny.cz", 4 ], [ "expres.cz", 4 ], [ "tiscali.cz", 4 ], [ "extra.cz", 4 ], [ "onetv.cz", 4 ], [ "dama.cz", 4 ], [ "g.cz", 4 ], [ "mojecelebrity.cz", 4 ], [ "spisovatele.cz", 4 ], [ "modnipeklo.cz", 4 ], [ "karaoketexty.cz", 4 ], [ "hnonline.sk", 4 ], [ "emimino.cz", 4 ], [ "vitalion.cz", 4 ], [ "mojezdravi.cz", 4 ], [ "abicko.cz", 4 ], [ "arome.cz", 4 ], [ "labuznik.cz", 4 ], [ "fights.cz", 4 ], [ "nasepenize.cz", 4 ] ]), r = new Map([]), o = new Map([]);
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
                !function(t = "", n = "", r = "") {
                    if ("string" != typeof t) return;
                    if ("" === t) return;
                    const o = i(), c = o.makeLogPrefix("abort-current-script", t, n, r), s = o.patternToRegex(n), a = o.patternToRegex(r), l = o.getExtraArgs(Array.from(arguments), 3), f = document.currentScript, u = t.split(".");
                    let p, g, d = window;
                    for (;p = u.shift(), 0 !== u.length && p in d != 0; ) if (d = d[p], d instanceof Object == 0) return;
                    let h = Object.getOwnPropertyDescriptor(d, p);
                    h instanceof Object != 0 && h.get instanceof Function != 0 || (g = d[p], h = void 0), 
                    function(t) {
                        if (t instanceof Object == 0) return !1;
                        e.canDebug && t.debug;
                    }(l);
                    const b = function() {
                        const e = i(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), n = self.onerror;
                        return self.onerror = function(e, ...r) {
                            return !("string" != typeof e || !e.includes(t)) || (n instanceof Function ? n.call(this, e, ...r) : void 0);
                        }.bind(), t;
                    }(), m = new WeakMap, v = e => {
                        let t = e.textContent;
                        if ("" !== t.trim()) return t;
                        if (m.has(e)) return m.get(e);
                        const [, n, r] = /^data:([^,]*),(.+)$/.exec(e.src.trim()) || [ "", "", "" ];
                        try {
                            t = !0 === n.endsWith(";base64") ? self.atob(r) : self.decodeURIComponent(r);
                        } catch (e) {}
                        return m.set(e, t), t;
                    }, y = () => {
                        const e = document.currentScript;
                        if (e instanceof HTMLScriptElement == 0) return;
                        if (e === f) return;
                        if ("" !== r && !1 === a.test(e.src)) return;
                        o.logLevel > 1 && "" !== r && o.uboLog(c, `Matched src\n${e.src}`);
                        const t = v(e);
                        if (!1 !== s.test(t)) throw o.logLevel > 1 && o.uboLog(c, `Matched text\n${t}`), 
                        o.uboLog(c, "Aborted"), new ReferenceError(b);
                    };
                    try {
                        Object.defineProperty(d, p, {
                            get: function() {
                                return y(), h instanceof Object ? h.get.call(d) : g;
                            },
                            set: function(e) {
                                y(), h instanceof Object ? h.set.call(d, e) : g = e;
                            }
                        });
                    } catch (e) {
                        o.uboErr(c, `Error: ${e}`);
                    }
                }(...t);
            }));
        }
        function i() {
            if (e.safeSelf) return e.safeSelf;
            const t = globalThis, n = {
                Array_from: Array.from,
                Error: t.Error,
                Function_toStringFn: t.Function.prototype.toString,
                Function_toString: e => n.Function_toStringFn.call(e),
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
                JSON_parse: (...e) => n.JSON_parseFn.call(n.JSON, ...e),
                JSON_stringify: (...e) => n.JSON_stringifyFn.call(n.JSON, ...e),
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
                    const n = !0 !== t.canNegate || !1 === e.startsWith("!");
                    !1 === n && (e = e.slice(1));
                    const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== r ? {
                        re: new this.RegExp(r[1], r[2] || t.flags),
                        expect: n
                    } : void 0 !== t.flags ? {
                        re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                        expect: n
                    } : {
                        pattern: e,
                        expect: n
                    };
                },
                testPattern(e, t) {
                    return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
                },
                patternToRegex(e, t, n = !1) {
                    if ("" === e) return /^/;
                    const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === r) {
                        const r = this.escapeRegexChars(e);
                        return new RegExp(n ? `^${r}$` : r, t);
                    }
                    try {
                        return new RegExp(r[1], r[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const n = e.slice(t).reduce(((e, t, n, r) => {
                        if (0 == (1 & n)) {
                            const t = r[n + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ r[n], o ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(n);
                },
                onIdle: (e, n) => t.requestIdleCallback ? t.requestIdleCallback(e, n) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = n, void 0 === e.bcSecret) return n;
            const r = new t.BroadcastChannel(e.bcSecret);
            let o = [];
            return n.logLevel = e.logLevel || 1, n.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === o) return r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: n
                });
                o.push({
                    type: e,
                    text: n
                });
            }, r.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: e, text: t}) => r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), o = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    n.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    n.logLevel = 2;
                }
            }, r.postMessage("areyouready?"), n;
        }
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = s.length;
        if (0 === a) return;
        const l = new Set, f = [];
        if (0 !== o.size) {
            for (let e = 0; e < a; e++) {
                const t = s.slice(e).join("."), n = o.get(t);
                n && f.push(...n);
            }
            o.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) f.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(s.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== r.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = s.slice(t, n).join(".");
                let o = r.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) f.includes(e) || l.add(e);
                }
            }
            r.clear();
        }
        for (const e of l) try {
            c(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, r;
        try {
            t.uBOL_abortCurrentScript = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_abortCurrentScript);
            r = t.URL.createObjectURL(o);
            const c = t.document;
            n = c.createElement("script"), n.async = !1, n.src = r, (c.head || c.documentElement || c).append(n);
        } catch (e) {}
        r && (n && n.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_abortCurrentScript;
    }
})();