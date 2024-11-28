"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "$", "#modal-consent" ], [ "spanLinkClick", "#cookiebanner" ], [ "alertCookie" ], [ "doOnce" ], [ "$", "#kuk" ], [ "$", "#contentwrap" ], [ "jQuery", "synchronizeCookieNoteCookie" ], [ "document.createElement", "consent.cookiebot.com" ], [ "document.createElement", "delivery/cmp" ], [ "$j", "acceptTOS" ], [ "document.createElement", "admiral" ] ], r = new Map([ [ "vorteilshop.com", 0 ], [ "hagengrote.de", 0 ], [ "sanha-shop.com", 1 ], [ "wizardshop.su", 2 ], [ "aphorisma.de", 3 ], [ "aphorisma-verlag.eu", 3 ], [ "aphorisma.org", 3 ], [ "romshub.com", 4 ], [ "stadtundgruen.de", 5 ], [ "tredy-fashion.de", 6 ], [ "hildegardis-krankenhaus.de", 7 ], [ "st-agatha-krankenhaus.de", 7 ], [ "connect.de", 8 ], [ "archiveofourown.org", 9 ], [ "titantv.com", 10 ], [ "musicfeeds.com.au", 10 ], [ "minecraftalpha.net", 10 ], [ "worldpopulationreview.com", 10 ], [ "boston.com", 10 ], [ "britannica.com", 10 ], [ "download.mokeedev.com", 10 ], [ "freep.com", 10 ], [ "ijr.com", 10 ], [ "inquirer.net", 10 ], [ "legacy.com", 10 ], [ "nationalreview.com", 10 ], [ "nofilmschool.com", 10 ], [ "order-order.com", 10 ], [ "savvytime.com", 10 ], [ "techlicious.com", 10 ], [ "technicpack.net", 10 ], [ "thedraftnetwork.com", 10 ], [ "wrestlezone.com", 10 ] ]), o = new Map([]), n = new Map([]);
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
                !function(t = "", r = "", o = "") {
                    if ("string" != typeof t) return;
                    if ("" === t) return;
                    const n = i(), c = n.makeLogPrefix("abort-current-script", t, r, o), s = n.patternToRegex(r), a = n.patternToRegex(o), l = n.getExtraArgs(Array.from(arguments), 3), u = document.currentScript, f = t.split(".");
                    let d, p, g = window;
                    for (;d = f.shift(), 0 !== f.length && d in g != 0; ) if (g = g[d], g instanceof Object == 0) return;
                    let m = Object.getOwnPropertyDescriptor(g, d);
                    m instanceof Object != 0 && m.get instanceof Function != 0 || (p = g[d], m = void 0), 
                    function(t) {
                        if (t instanceof Object == 0) return !1;
                        e.canDebug && t.debug;
                    }(l);
                    const h = function() {
                        const e = i(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), r = self.onerror;
                        return self.onerror = function(e, ...o) {
                            return !("string" != typeof e || !e.includes(t)) || (r instanceof Function ? r.call(this, e, ...o) : void 0);
                        }.bind(), t;
                    }(), b = new WeakMap, v = e => {
                        let t = e.textContent;
                        if ("" !== t.trim()) return t;
                        if (b.has(e)) return b.get(e);
                        const [, r, o] = /^data:([^,]*),(.+)$/.exec(e.src.trim()) || [ "", "", "" ];
                        try {
                            t = !0 === r.endsWith(";base64") ? self.atob(o) : self.decodeURIComponent(o);
                        } catch (e) {}
                        return b.set(e, t), t;
                    }, y = () => {
                        const e = document.currentScript;
                        if (e instanceof HTMLScriptElement == 0) return;
                        if (e === u) return;
                        if ("" !== o && !1 === a.test(e.src)) return;
                        n.logLevel > 1 && "" !== o && n.uboLog(c, `Matched src\n${e.src}`);
                        const t = v(e);
                        if (!1 !== s.test(t)) throw n.logLevel > 1 && n.uboLog(c, `Matched text\n${t}`), 
                        n.uboLog(c, "Aborted"), new ReferenceError(h);
                    };
                    try {
                        Object.defineProperty(g, d, {
                            get: function() {
                                return y(), m instanceof Object ? m.get.call(g) : p;
                            },
                            set: function(e) {
                                y(), m instanceof Object ? m.set.call(g, e) : p = e;
                            }
                        });
                    } catch (e) {
                        n.uboErr(c, `Error: ${e}`);
                    }
                }(...t);
            }));
        }
        function i() {
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
        const a = s.length;
        if (0 === a) return;
        const l = new Set, u = [];
        if (0 !== n.size) {
            for (let e = 0; e < a; e++) {
                const t = s.slice(e).join("."), r = n.get(t);
                r && u.push(...r);
            }
            n.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) u.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(s.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== o.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = s.slice(t, r).join(".");
                let n = o.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) u.includes(e) || l.add(e);
                }
            }
            o.clear();
        }
        for (const e of l) try {
            c(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, o;
        try {
            t.uBOL_abortCurrentScript = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_abortCurrentScript);
            o = t.URL.createObjectURL(n);
            const c = t.document;
            r = c.createElement("script"), r.async = !1, r.src = o, (c.head || c.documentElement || c).append(r);
        } catch (e) {}
        o && (r && r.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_abortCurrentScript;
    }
})();