"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [], [ "bit.ly" ], [ "google.com/url?" ] ], o = new Map([ [ "rcjza2fzqyr4.buzz", 0 ], [ "d3xg9jm5zucs.buzz", 0 ], [ "fwlcqyxc88qx.buzz", 0 ], [ "lgrmdr8asu8l.buzz", 0 ], [ "kc2uta38qg2t.buzz", 0 ], [ "agb3nquu6rzw.buzz", 0 ], [ "yvt2bm7hzgtt.cloud", 0 ], [ "elzemfilm.org", 0 ], [ "movietube32.xyz", 0 ], [ "turkerotikfilm.com", 0 ], [ "diziwatch.net", 0 ], [ "hdizlefilmleri.com", 0 ], [ "izleorg3.org", 0 ], [ "youtubemp3.us", 0 ], [ "pchocasi.com.tr", 1 ], [ "sinema.cc", 2 ] ]), n = new Map([ [ "erosfilmizle", 0 ], [ "breakingbadizle", 0 ], [ "jetfilmizle", 0 ], [ "4kfilmizlesene", 0 ] ]), r = new Map([]);
        function i(t = "", o = "", n = "") {
            const r = function() {
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
            }(), i = r.makeLogPrefix("no-window-open-if", t, o, n), s = !1 === t.startsWith("!");
            !1 === s && (t = t.slice(1));
            const c = r.patternToRegex(t);
            let l = parseInt(o);
            isNaN(l) && (l = -1);
            const a = function(e, t, o) {
                const n = document.createElement(e);
                return n[t] = o, n.style.setProperty("height", "1px", "important"), n.style.setProperty("position", "fixed", "important"), 
                n.style.setProperty("top", "-1px", "important"), n.style.setProperty("width", "1px", "important"), 
                document.body.appendChild(n), setTimeout((() => {
                    n.remove();
                }), 1e3 * l), n;
            };
            window.open = new Proxy(window.open, {
                apply: function(e, t, o) {
                    const p = o.join(" ");
                    if (c.test(p) !== s) return r.logLevel > 1 && r.uboLog(i, `Allowed (${o.join(", ")})`), 
                    Reflect.apply(e, t, o);
                    if (r.uboLog(i, `Prevented (${o.join(", ")})`), l < 0) return null;
                    let u = ("obj" === n ? a("object", "data", ...o) : a("iframe", "src", ...o)).contentWindow;
                    if ("object" == typeof u && null !== u) Object.defineProperty(u, "closed", {
                        value: !1
                    }); else {
                        const e = function() {}.bind(self);
                        u = new Proxy(self, {
                            get: function(t, o) {
                                return "closed" !== o && ("function" == typeof Reflect.get(...arguments) ? e : t[o]);
                            },
                            set: function() {
                                return Reflect.set(...arguments);
                            }
                        });
                    }
                    return 0 !== r.logLevel && (u = new Proxy(u, {
                        get: function(e, t) {
                            return r.uboLog(i, "window.open / get", t, "===", e[t]), Reflect.get(...arguments);
                        },
                        set: function(e, t, o) {
                            return r.uboLog(i, "window.open / set", t, "=", o), Reflect.set(...arguments);
                        }
                    })), u;
                }
            });
        }
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = s.length;
        if (0 === c) return;
        const l = new Set, a = [];
        if (0 !== r.size) {
            for (let e = 0; e < c; e++) {
                const t = s.slice(e).join("."), o = r.get(t);
                o && a.push(...o);
            }
            r.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) a.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < c; t++) e(s.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== n.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = s.slice(t, o).join(".");
                let r = n.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) a.includes(e) || l.add(e);
                }
            }
            n.clear();
        }
        for (const e of l) try {
            i(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, n;
        try {
            t.uBOL_noWindowOpenIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_noWindowOpenIf);
            n = t.URL.createObjectURL(r);
            const i = t.document;
            o = i.createElement("script"), o.async = !1, o.src = n, (i.head || i.documentElement || i).append(o);
        } catch (e) {}
        n && (o && o.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_noWindowOpenIf;
    }
})();