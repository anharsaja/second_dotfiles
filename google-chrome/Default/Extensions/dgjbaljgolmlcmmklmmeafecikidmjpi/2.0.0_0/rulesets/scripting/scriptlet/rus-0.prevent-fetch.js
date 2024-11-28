"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "/buzzoola\\.com|plrjs\\.org/" ], [ "/\\/res\\//" ] ], r = new Map([ [ "volley.ru", 0 ], [ "mail.ru", 1 ] ]), o = new Map([]), n = new Map([ [ "3igames.mail.ru", [ 1 ] ], [ "account.mail.ru", [ 1 ] ], [ "auto.mail.ru", [ 1 ] ], [ "biz.mail.ru", [ 1 ] ], [ "blog.mail.ru", [ 1 ] ], [ "bonus.mail.ru", [ 1 ] ], [ "calendar.mail.ru", [ 1 ] ], [ "calls.mail.ru", [ 1 ] ], [ "cloud.mail.ru", [ 1 ] ], [ "connect.mail.ru", [ 1 ] ], [ "deti.mail.ru", [ 1 ] ], [ "dobro.mail.ru", [ 1 ] ], [ "e.mail.ru", [ 1 ] ], [ "gibdd.mail.ru", [ 1 ] ], [ "health.mail.ru", [ 1 ] ], [ "help.mail.ru", [ 1 ] ], [ "hi-tech.mail.ru", [ 1 ] ], [ "horo.mail.ru", [ 1 ] ], [ "kino.mail.ru", [ 1 ] ], [ "lady.mail.ru", [ 1 ] ], [ "love.mail.ru", [ 1 ] ], [ "mcs.mail.ru", [ 1 ] ], [ "minigames.mail.ru", [ 1 ] ], [ "my.mail.ru", [ 1 ] ], [ "news.mail.ru", [ 1 ] ], [ "o2.mail.ru", [ 1 ] ], [ "octavius.mail.ru", [ 1 ] ], [ "okminigames.mail.ru", [ 1 ] ], [ "otvet.mail.ru", [ 1 ] ], [ "pets.mail.ru", [ 1 ] ], [ "player-smotri.mail.ru", [ 1 ] ], [ "pogoda.mail.ru", [ 1 ] ], [ "top.mail.ru", [ 1 ] ], [ "touch.mail.ru", [ 1 ] ], [ "tv.mail.ru", [ 1 ] ] ]);
        function i(t = "", r = "") {
            if ("string" != typeof t) return;
            const o = s(), n = o.makeLogPrefix("prevent-fetch", t, r), i = [];
            for (const e of t.split(/\s+/)) {
                if ("" === e) continue;
                const t = e.indexOf(":");
                let r, n;
                -1 !== t ? (r = e.slice(0, t), n = e.slice(t + 1)) : (r = "url", n = e), i.push({
                    key: r,
                    re: o.patternToRegex(n)
                });
            }
            self.fetch = new Proxy(self.fetch, {
                apply: function(a, c, l) {
                    const u = l[0] instanceof self.Request ? l[0] : Object.assign({
                        url: l[0]
                    }, l[1]);
                    let p = !0;
                    try {
                        const e = new Map;
                        for (const t in u) {
                            let r = u[t];
                            if ("string" != typeof r) try {
                                r = o.JSON_stringify(r);
                            } catch (e) {}
                            "string" == typeof r && e.set(t, r);
                        }
                        if ("" === t && "" === r) {
                            const t = Array.from(e).map((e => `${e[0]}:${e[1]}`));
                            return o.uboLog(n, `Called: ${t.join("\n")}`), Reflect.apply(a, c, l);
                        }
                        p = 0 === i.length;
                        for (const {key: t, re: r} of i) if (!1 === e.has(t) || !1 === r.test(e.get(t))) {
                            p = !0;
                            break;
                        }
                    } catch (e) {}
                    if (p) return Reflect.apply(a, c, l);
                    let f = "";
                    if (void 0 === u.mode || "cors" === u.mode) try {
                        const e = new URL(u.url);
                        f = e.origin !== document.location.origin ? "cors" : "basic";
                    } catch (e) {
                        o.uboErr(n, `Error: ${e}`);
                    }
                    return function(t) {
                        const r = s(), o = e => {
                            const t = [];
                            let o = 0;
                            do {
                                const e = r.Math_random().toString(36).slice(2);
                                t.push(e), o += e.length;
                            } while (o < e);
                            return t.join(" ").slice(0, e);
                        };
                        if ("true" === t) return Promise.resolve(o(10));
                        if ("emptyObj" === t) return Promise.resolve("{}");
                        if ("emptyArr" === t) return Promise.resolve("[]");
                        if ("emptyStr" === t) return Promise.resolve("");
                        if (t.startsWith("length:")) {
                            const e = /^length:(\d+)(?:-(\d+))?$/.exec(t);
                            if (e) {
                                const t = parseInt(e[1], 10), n = r.Math_max(parseInt(e[2], 10) || 0, t) - t, i = r.Math_min(t + n * r.Math_random(), 5e5);
                                return Promise.resolve(o(0 | i));
                            }
                        }
                        return t.startsWith("war:") && e.warOrigin ? new Promise((o => {
                            const n = [ e.warOrigin, "/", t.slice(4) ], i = e.warSecret;
                            void 0 !== i && n.push("?secret=", i);
                            const s = new r.XMLHttpRequest;
                            s.responseType = "text", s.onloadend = e => {
                                o(e.target.responseText || "");
                            }, s.open("GET", n.join("")), s.send();
                        })) : Promise.resolve("");
                    }(r).then((e => {
                        o.uboLog(n, `Prevented with response "${e}"`);
                        const t = new Response(e, {
                            statusText: "OK",
                            headers: {
                                "Content-Length": e.length
                            }
                        });
                        return o.Object_defineProperty(t, "url", {
                            value: u.url
                        }), "" !== f && o.Object_defineProperty(t, "type", {
                            value: f
                        }), t;
                    }));
                }
            });
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
        const a = [];
        try {
            a.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = a.length;
        if (0 === c) return;
        const l = new Set, u = [];
        if (0 !== n.size) {
            for (let e = 0; e < c; e++) {
                const t = a.slice(e).join("."), r = n.get(t);
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
            for (let t = 0; t < c; t++) e(a.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== o.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = a.slice(t, r).join(".");
                let n = o.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) u.includes(e) || l.add(e);
                }
            }
            o.clear();
        }
        for (const e of l) try {
            i(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, o;
        try {
            t.uBOL_noFetchIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_noFetchIf);
            o = t.URL.createObjectURL(n);
            const i = t.document;
            r = i.createElement("script"), r.async = !1, r.src = o, (i.head || i.documentElement || i).append(r);
        } catch (e) {}
        o && (r && r.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_noFetchIf;
    }
})();