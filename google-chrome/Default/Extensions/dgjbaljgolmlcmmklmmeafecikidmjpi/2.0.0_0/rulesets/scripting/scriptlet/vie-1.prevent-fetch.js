"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "method:HEAD" ] ], r = new Map([ [ "giavang.net", 0 ] ]), n = new Map([]), o = new Map([]);
        function s(t = "", r = "") {
            if ("string" != typeof t) return;
            const n = i(), o = n.makeLogPrefix("prevent-fetch", t, r), s = [];
            for (const e of t.split(/\s+/)) {
                if ("" === e) continue;
                const t = e.indexOf(":");
                let r, o;
                -1 !== t ? (r = e.slice(0, t), o = e.slice(t + 1)) : (r = "url", o = e), s.push({
                    key: r,
                    re: n.patternToRegex(o)
                });
            }
            self.fetch = new Proxy(self.fetch, {
                apply: function(c, a, l) {
                    const p = l[0] instanceof self.Request ? l[0] : Object.assign({
                        url: l[0]
                    }, l[1]);
                    let f = !0;
                    try {
                        const e = new Map;
                        for (const t in p) {
                            let r = p[t];
                            if ("string" != typeof r) try {
                                r = n.JSON_stringify(r);
                            } catch (e) {}
                            "string" == typeof r && e.set(t, r);
                        }
                        if ("" === t && "" === r) {
                            const t = Array.from(e).map((e => `${e[0]}:${e[1]}`));
                            return n.uboLog(o, `Called: ${t.join("\n")}`), Reflect.apply(c, a, l);
                        }
                        f = 0 === s.length;
                        for (const {key: t, re: r} of s) if (!1 === e.has(t) || !1 === r.test(e.get(t))) {
                            f = !0;
                            break;
                        }
                    } catch (e) {}
                    if (f) return Reflect.apply(c, a, l);
                    let g = "";
                    if (void 0 === p.mode || "cors" === p.mode) try {
                        const e = new URL(p.url);
                        g = e.origin !== document.location.origin ? "cors" : "basic";
                    } catch (e) {
                        n.uboErr(o, `Error: ${e}`);
                    }
                    return function(t) {
                        const r = i(), n = e => {
                            const t = [];
                            let n = 0;
                            do {
                                const e = r.Math_random().toString(36).slice(2);
                                t.push(e), n += e.length;
                            } while (n < e);
                            return t.join(" ").slice(0, e);
                        };
                        if ("true" === t) return Promise.resolve(n(10));
                        if ("emptyObj" === t) return Promise.resolve("{}");
                        if ("emptyArr" === t) return Promise.resolve("[]");
                        if ("emptyStr" === t) return Promise.resolve("");
                        if (t.startsWith("length:")) {
                            const e = /^length:(\d+)(?:-(\d+))?$/.exec(t);
                            if (e) {
                                const t = parseInt(e[1], 10), o = r.Math_max(parseInt(e[2], 10) || 0, t) - t, s = r.Math_min(t + o * r.Math_random(), 5e5);
                                return Promise.resolve(n(0 | s));
                            }
                        }
                        return t.startsWith("war:") && e.warOrigin ? new Promise((n => {
                            const o = [ e.warOrigin, "/", t.slice(4) ], s = e.warSecret;
                            void 0 !== s && o.push("?secret=", s);
                            const i = new r.XMLHttpRequest;
                            i.responseType = "text", i.onloadend = e => {
                                n(e.target.responseText || "");
                            }, i.open("GET", o.join("")), i.send();
                        })) : Promise.resolve("");
                    }(r).then((e => {
                        n.uboLog(o, `Prevented with response "${e}"`);
                        const t = new Response(e, {
                            statusText: "OK",
                            headers: {
                                "Content-Length": e.length
                            }
                        });
                        return n.Object_defineProperty(t, "url", {
                            value: p.url
                        }), "" !== g && n.Object_defineProperty(t, "type", {
                            value: g
                        }), t;
                    }));
                }
            });
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
        const c = [];
        try {
            c.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = c.length;
        if (0 === a) return;
        const l = new Set, p = [];
        if (0 !== o.size) {
            for (let e = 0; e < a; e++) {
                const t = c.slice(e).join("."), r = o.get(t);
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
            for (let t = 0; t < a; t++) e(c.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== n.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = c.slice(t, r).join(".");
                let o = n.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) p.includes(e) || l.add(e);
                }
            }
            n.clear();
        }
        for (const e of l) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, n;
        try {
            t.uBOL_noFetchIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_noFetchIf);
            n = t.URL.createObjectURL(o);
            const s = t.document;
            r = s.createElement("script"), r.async = !1, r.src = n, (s.head || s.documentElement || s).append(r);
        } catch (e) {}
        n && (r && r.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_noFetchIf;
    }
})();