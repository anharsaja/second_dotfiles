"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "ads.google.com" ], [ "adsbygoogle" ], [ "clarity.ms" ] ], r = new Map([ [ "mudah.my", 0 ], [ "cloud.majalahhewan.com", 1 ], [ "info.gambar.pro", 1 ], [ "info.mapsaddress.com", 1 ], [ "info.vebma.com", 1 ], [ "thejakartapost.com", 1 ], [ "netq.me", 2 ] ]), o = new Map([]), n = new Map([]);
        function s(t = "", r = "") {
            if ("string" != typeof t) return;
            const o = c(), n = o.makeLogPrefix("prevent-fetch", t, r), s = [];
            for (const e of t.split(/\s+/)) {
                if ("" === e) continue;
                const t = e.indexOf(":");
                let r, n;
                -1 !== t ? (r = e.slice(0, t), n = e.slice(t + 1)) : (r = "url", n = e), s.push({
                    key: r,
                    re: o.patternToRegex(n)
                });
            }
            self.fetch = new Proxy(self.fetch, {
                apply: function(i, a, l) {
                    const p = l[0] instanceof self.Request ? l[0] : Object.assign({
                        url: l[0]
                    }, l[1]);
                    let f = !0;
                    try {
                        const e = new Map;
                        for (const t in p) {
                            let r = p[t];
                            if ("string" != typeof r) try {
                                r = o.JSON_stringify(r);
                            } catch (e) {}
                            "string" == typeof r && e.set(t, r);
                        }
                        if ("" === t && "" === r) {
                            const t = Array.from(e).map((e => `${e[0]}:${e[1]}`));
                            return o.uboLog(n, `Called: ${t.join("\n")}`), Reflect.apply(i, a, l);
                        }
                        f = 0 === s.length;
                        for (const {key: t, re: r} of s) if (!1 === e.has(t) || !1 === r.test(e.get(t))) {
                            f = !0;
                            break;
                        }
                    } catch (e) {}
                    if (f) return Reflect.apply(i, a, l);
                    let g = "";
                    if (void 0 === p.mode || "cors" === p.mode) try {
                        const e = new URL(p.url);
                        g = e.origin !== document.location.origin ? "cors" : "basic";
                    } catch (e) {
                        o.uboErr(n, `Error: ${e}`);
                    }
                    return function(t) {
                        const r = c(), o = e => {
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
                                const t = parseInt(e[1], 10), n = r.Math_max(parseInt(e[2], 10) || 0, t) - t, s = r.Math_min(t + n * r.Math_random(), 5e5);
                                return Promise.resolve(o(0 | s));
                            }
                        }
                        return t.startsWith("war:") && e.warOrigin ? new Promise((o => {
                            const n = [ e.warOrigin, "/", t.slice(4) ], s = e.warSecret;
                            void 0 !== s && n.push("?secret=", s);
                            const c = new r.XMLHttpRequest;
                            c.responseType = "text", c.onloadend = e => {
                                o(e.target.responseText || "");
                            }, c.open("GET", n.join("")), c.send();
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
                            value: p.url
                        }), "" !== g && o.Object_defineProperty(t, "type", {
                            value: g
                        }), t;
                    }));
                }
            });
        }
        function c() {
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
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = i.length;
        if (0 === a) return;
        const l = new Set, p = [];
        if (0 !== n.size) {
            for (let e = 0; e < a; e++) {
                const t = i.slice(e).join("."), r = n.get(t);
                r && p.push(...r);
            }
            n.clear();
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
        if (0 !== o.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = i.slice(t, r).join(".");
                let n = o.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) p.includes(e) || l.add(e);
                }
            }
            o.clear();
        }
        for (const e of l) try {
            s(...t[e]);
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
            const s = t.document;
            r = s.createElement("script"), r.async = !1, r.src = o, (s.head || s.documentElement || s).append(r);
        } catch (e) {}
        o && (r && r.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_noFetchIf;
    }
})();