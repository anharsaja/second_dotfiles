"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "decodeURIComponent", "newAdblockBoardDisplayed" ], [ "addEventListener", "/faBar[\\s\\S]*?insertAdjacentElement/" ], [ "$", "/loadData|halfpage|welcome|screening|placement|adtitle/" ], [ "billboard750" ], [ "jQuery", "#sdWelcomeScreen" ], [ "$", "#AdPopup" ], [ "document.querySelectorAll", "popMagic" ], [ "Math.random" ], [ "$", "alert" ], [ "document.addEventListener", "adblocka" ], [ "atob", "decodeURIComponent" ], [ "document.getElementById", "block" ], [ "parseInt", "adblock" ], [ "String.fromCharCode", "/(?:Math|btoa)/" ], [ "parseInt", "/adBlock/" ], [ "showAdblockImage" ], [ "IRI", "Adblock" ] ], r = new Map([ [ "filmweb.pl", [ 0, 1, 16 ] ], [ "naekranie.pl", 2 ], [ "czasdzieci.pl", 3 ], [ "hdtvpolska.com", 4 ], [ "tubagliwic.pl", 5 ], [ "tubawyszkowa.pl", 5 ], [ "filmy69.pl", 6 ], [ "otube.pl", 7 ], [ "skript.pl", [ 8, 9 ] ], [ "twojetv.ws", 10 ], [ "zambrow.org", 11 ], [ "weszlo.com", 12 ], [ "prnews.pl", 12 ], [ "mambiznes.pl", 12 ], [ "kresy.pl", 12 ], [ "natemat.pl", 12 ], [ "dziennik.pl", 12 ], [ "cdahd.co", 13 ], [ "sadeczanin.info", 14 ], [ "karmopedia.pl", 15 ], [ "smartage.pl", 14 ] ]), n = new Map([]), o = new Map([]);
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
                !function(t = "", r = "", n = "") {
                    if ("string" != typeof t) return;
                    if ("" === t) return;
                    const o = s(), c = o.makeLogPrefix("abort-current-script", t, r, n), i = o.patternToRegex(r), a = o.patternToRegex(n), l = o.getExtraArgs(Array.from(arguments), 3), p = document.currentScript, d = t.split(".");
                    let f, u, g = window;
                    for (;f = d.shift(), 0 !== d.length && f in g != 0; ) if (g = g[f], g instanceof Object == 0) return;
                    let m = Object.getOwnPropertyDescriptor(g, f);
                    m instanceof Object != 0 && m.get instanceof Function != 0 || (u = g[f], m = void 0), 
                    function(t) {
                        if (t instanceof Object == 0) return !1;
                        e.canDebug && t.debug;
                    }(l);
                    const b = function() {
                        const e = s(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), r = self.onerror;
                        return self.onerror = function(e, ...n) {
                            return !("string" != typeof e || !e.includes(t)) || (r instanceof Function ? r.call(this, e, ...n) : void 0);
                        }.bind(), t;
                    }(), h = new WeakMap, y = e => {
                        let t = e.textContent;
                        if ("" !== t.trim()) return t;
                        if (h.has(e)) return h.get(e);
                        const [, r, n] = /^data:([^,]*),(.+)$/.exec(e.src.trim()) || [ "", "", "" ];
                        try {
                            t = !0 === r.endsWith(";base64") ? self.atob(n) : self.decodeURIComponent(n);
                        } catch (e) {}
                        return h.set(e, t), t;
                    }, v = () => {
                        const e = document.currentScript;
                        if (e instanceof HTMLScriptElement == 0) return;
                        if (e === p) return;
                        if ("" !== n && !1 === a.test(e.src)) return;
                        o.logLevel > 1 && "" !== n && o.uboLog(c, `Matched src\n${e.src}`);
                        const t = y(e);
                        if (!1 !== i.test(t)) throw o.logLevel > 1 && o.uboLog(c, `Matched text\n${t}`), 
                        o.uboLog(c, "Aborted"), new ReferenceError(b);
                    };
                    try {
                        Object.defineProperty(g, f, {
                            get: function() {
                                return v(), m instanceof Object ? m.get.call(g) : u;
                            },
                            set: function(e) {
                                v(), m instanceof Object ? m.set.call(g, e) : u = e;
                            }
                        });
                    } catch (e) {
                        o.uboErr(c, `Error: ${e}`);
                    }
                }(...t);
            }));
        }
        function s() {
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
                    const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== n ? {
                        re: new this.RegExp(n[1], n[2] || t.flags),
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
                    const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === n) {
                        const n = this.escapeRegexChars(e);
                        return new RegExp(r ? `^${n}$` : n, t);
                    }
                    try {
                        return new RegExp(n[1], n[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const r = e.slice(t).reduce(((e, t, r, n) => {
                        if (0 == (1 & r)) {
                            const t = n[r + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ n[r], o ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(r);
                },
                onIdle: (e, r) => t.requestIdleCallback ? t.requestIdleCallback(e, r) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = r, void 0 === e.bcSecret) return r;
            const n = new t.BroadcastChannel(e.bcSecret);
            let o = [];
            return r.logLevel = e.logLevel || 1, r.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const r = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === o) return n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: r
                });
                o.push({
                    type: e,
                    text: r
                });
            }, n.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: e, text: t}) => n.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), o = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    r.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    r.logLevel = 2;
                }
            }, n.postMessage("areyouready?"), r;
        }
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = i.length;
        if (0 === a) return;
        const l = new Set, p = [];
        if (0 !== o.size) {
            for (let e = 0; e < a; e++) {
                const t = i.slice(e).join("."), r = o.get(t);
                r && p.push(...r);
            }
            o.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) p.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(i.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== n.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = i.slice(t, r).join(".");
                let o = n.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) p.includes(e) || l.add(e);
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
        let r, n;
        try {
            t.uBOL_abortCurrentScript = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_abortCurrentScript);
            n = t.URL.createObjectURL(o);
            const c = t.document;
            r = c.createElement("script"), r.async = !1, r.src = n, (c.head || c.documentElement || c).append(r);
        } catch (e) {}
        n && (r && r.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_abortCurrentScript;
    }
})();