"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [], [ "/tutad\\.ru/" ], [ "about:blank" ] ], o = new Map([ [ "08sportbar.com", 0 ], [ "08sportbar.online", 0 ], [ "777sportba.com", 0 ], [ "777sportba.org", 0 ], [ "777streams.pro", 0 ], [ "7streams.pro", 0 ], [ "assiatv.com", 0 ], [ "barsportbar.com", 0 ], [ "boom365hd.com", 0 ], [ "cdnneedtv.ru", 0 ], [ "cdnpotok.com", 0 ], [ "cdntvpotok.com", 0 ], [ "channels247.net", 0 ], [ "goool7.ws", 0 ], [ "hd24.pro", 0 ], [ "hd24.watch", 0 ], [ "hd365.ws", 0 ], [ "hdstream365.com", 0 ], [ "limetvv.com", 0 ], [ "live-stream365.com", 0 ], [ "live365tv.site", 0 ], [ "mc.today", 0 ], [ "oneliketv.com", 0 ], [ "oxax.tv", 0 ], [ "raes.tech", 0 ], [ "s7yours.com", 0 ], [ "sbautumn.com", 0 ], [ "sblive.online", 0 ], [ "sbsports.pro", 0 ], [ "sbstreams.ws", 0 ], [ "shd247.com", 0 ], [ "sport365hd.com", 0 ], [ "sport365hd.net", 0 ], [ "sport7.biz", 0 ], [ "sportabar01.com", 0 ], [ "sportbar.biz", 0 ], [ "sportbar.pm", 0 ], [ "sportbarchik88.com", 0 ], [ "sportbox.ws", 0 ], [ "sporting7.pw", 0 ], [ "sporting77.com", 0 ], [ "sportsite777.com", 0 ], [ "spotless365.net", 0 ], [ "stream365.pro", 0 ], [ "telecdn.net", 0 ], [ "tivix.co", 0 ], [ "tv-assia.org", 0 ], [ "vecdn.pw", 0 ], [ "vip7stream.pw", 0 ], [ "whd365.pro", 0 ], [ "vmusi.ru", 1 ], [ "ontivi.net", 2 ] ]), r = new Map([]), n = new Map([]);
        function s(t = "", o = "", r = "") {
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
            }(), s = n.makeLogPrefix("no-window-open-if", t, o, r), c = !1 === t.startsWith("!");
            !1 === c && (t = t.slice(1));
            const i = n.patternToRegex(t);
            let a = parseInt(o);
            isNaN(a) && (a = -1);
            const p = function(e, t, o) {
                const r = document.createElement(e);
                return r[t] = o, r.style.setProperty("height", "1px", "important"), r.style.setProperty("position", "fixed", "important"), 
                r.style.setProperty("top", "-1px", "important"), r.style.setProperty("width", "1px", "important"), 
                document.body.appendChild(r), setTimeout((() => {
                    r.remove();
                }), 1e3 * a), r;
            };
            window.open = new Proxy(window.open, {
                apply: function(e, t, o) {
                    const l = o.join(" ");
                    if (i.test(l) !== c) return n.logLevel > 1 && n.uboLog(s, `Allowed (${o.join(", ")})`), 
                    Reflect.apply(e, t, o);
                    if (n.uboLog(s, `Prevented (${o.join(", ")})`), a < 0) return null;
                    let d = ("obj" === r ? p("object", "data", ...o) : p("iframe", "src", ...o)).contentWindow;
                    if ("object" == typeof d && null !== d) Object.defineProperty(d, "closed", {
                        value: !1
                    }); else {
                        const e = function() {}.bind(self);
                        d = new Proxy(self, {
                            get: function(t, o) {
                                return "closed" !== o && ("function" == typeof Reflect.get(...arguments) ? e : t[o]);
                            },
                            set: function() {
                                return Reflect.set(...arguments);
                            }
                        });
                    }
                    return 0 !== n.logLevel && (d = new Proxy(d, {
                        get: function(e, t) {
                            return n.uboLog(s, "window.open / get", t, "===", e[t]), Reflect.get(...arguments);
                        },
                        set: function(e, t, o) {
                            return n.uboLog(s, "window.open / set", t, "=", o), Reflect.set(...arguments);
                        }
                    })), d;
                }
            });
        }
        const c = [];
        try {
            c.push(...document.location.hostname.split("."));
        } catch (e) {}
        const i = c.length;
        if (0 === i) return;
        const a = new Set, p = [];
        if (0 !== n.size) {
            for (let e = 0; e < i; e++) {
                const t = c.slice(e).join("."), o = n.get(t);
                o && p.push(...o);
            }
            n.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) p.includes(e) || a.add(e);
                }
            };
            for (let t = 0; t < i; t++) e(c.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== r.size) {
            const e = i - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = c.slice(t, o).join(".");
                let n = r.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) p.includes(e) || a.add(e);
                }
            }
            r.clear();
        }
        for (const e of a) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, r;
        try {
            t.uBOL_noWindowOpenIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_noWindowOpenIf);
            r = t.URL.createObjectURL(n);
            const s = t.document;
            o = s.createElement("script"), o.async = !1, o.src = r, (s.head || s.documentElement || s).append(o);
        } catch (e) {}
        r && (o && o.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_noWindowOpenIf;
    }
})();