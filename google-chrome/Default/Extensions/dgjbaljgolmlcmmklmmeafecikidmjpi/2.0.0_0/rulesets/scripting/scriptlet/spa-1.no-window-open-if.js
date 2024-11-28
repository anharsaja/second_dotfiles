"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [], [ "", "10" ], [ "!/download\\/|link|atomtt\\.com\\//" ], [ "?sid=" ], [ "passeura" ], [ "/^https?:\\/\\/movieknowing\\.com\\/$/", "trueFunc" ], [ "redirdx.in/go/" ] ], o = new Map([ [ "darkmahou.org", 0 ], [ "movidy.lat", 0 ], [ "warezstream.net", 0 ], [ "embedder.net", 0 ], [ "beautyskincarebrasil.com", 0 ], [ "poseidonhd2.co", 0 ], [ "geeknetic.es", 0 ], [ "animeblix.com", [ 0, 4 ] ], [ "servertwo.xyz", 0 ], [ "megaseriesonline.pro", 0 ], [ "chinesetubex.com.es", 0 ], [ "playnewserie.xyz", 0 ], [ "desenhosanimados.site", 0 ], [ "pelispedia-v2.wtf", 0 ], [ "paky3.me", 0 ], [ "pelismart.com", 0 ], [ "pelismarthd.com", 0 ], [ "pelispedia-v1.wtf", 0 ], [ "cuevana-3.wtf", 0 ], [ "muyzorras.com", 0 ], [ "vernaruto.tv", 0 ], [ "clickhouse.xyz", 0 ], [ "deportealdia.live", 0 ], [ "repelis.io", 0 ], [ "verdragonball.online", 0 ], [ "otakustv.com", 0 ], [ "repelisgt.net", 0 ], [ "playpaste.com", 0 ], [ "pulpulyy.club", 1 ], [ "atomohd.com", 2 ], [ "atomtt.com", 2 ], [ "maxitorrent.com", 3 ], [ "movieknowing.com", 5 ], [ "redirdx.in", 6 ] ]), n = new Map([ [ "cuevana2espanol", 0 ], [ "cuevana", 0 ], [ "netcine", 0 ], [ "atomixhq", 2 ] ]), r = new Map([]);
        function s(t = "", o = "", n = "") {
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
            }(), s = r.makeLogPrefix("no-window-open-if", t, o, n), i = !1 === t.startsWith("!");
            !1 === i && (t = t.slice(1));
            const c = r.patternToRegex(t);
            let a = parseInt(o);
            isNaN(a) && (a = -1);
            const l = function(e, t, o) {
                const n = document.createElement(e);
                return n[t] = o, n.style.setProperty("height", "1px", "important"), n.style.setProperty("position", "fixed", "important"), 
                n.style.setProperty("top", "-1px", "important"), n.style.setProperty("width", "1px", "important"), 
                document.body.appendChild(n), setTimeout((() => {
                    n.remove();
                }), 1e3 * a), n;
            };
            window.open = new Proxy(window.open, {
                apply: function(e, t, o) {
                    const p = o.join(" ");
                    if (c.test(p) !== i) return r.logLevel > 1 && r.uboLog(s, `Allowed (${o.join(", ")})`), 
                    Reflect.apply(e, t, o);
                    if (r.uboLog(s, `Prevented (${o.join(", ")})`), a < 0) return null;
                    let u = ("obj" === n ? l("object", "data", ...o) : l("iframe", "src", ...o)).contentWindow;
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
                            return r.uboLog(s, "window.open / get", t, "===", e[t]), Reflect.get(...arguments);
                        },
                        set: function(e, t, o) {
                            return r.uboLog(s, "window.open / set", t, "=", o), Reflect.set(...arguments);
                        }
                    })), u;
                }
            });
        }
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = i.length;
        if (0 === c) return;
        const a = new Set, l = [];
        if (0 !== r.size) {
            for (let e = 0; e < c; e++) {
                const t = i.slice(e).join("."), o = r.get(t);
                o && l.push(...o);
            }
            r.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || a.add(e);
                }
            };
            for (let t = 0; t < c; t++) e(i.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== n.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = i.slice(t, o).join(".");
                let r = n.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) l.includes(e) || a.add(e);
                }
            }
            n.clear();
        }
        for (const e of a) try {
            s(...t[e]);
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
            const s = t.document;
            o = s.createElement("script"), o.async = !1, o.src = n, (s.head || s.documentElement || s).append(o);
        } catch (e) {}
        n && (o && o.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_noWindowOpenIf;
    }
})();