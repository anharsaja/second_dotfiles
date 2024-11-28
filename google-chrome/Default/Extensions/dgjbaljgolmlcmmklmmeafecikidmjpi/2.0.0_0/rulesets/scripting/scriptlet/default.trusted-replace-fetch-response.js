"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ '/"adPlacements.*?([A-Z]"\\}|"\\}{2,4})\\}\\],/', "", "player?" ], [ '/\\"adSlots.*?\\}\\]\\}\\}\\],/', "", "player?" ], [ '/\\{"id":\\d{9,11}(?:(?!"ads":\\{"id":"").)+?"ads":\\{"id":"\\d+".+?"__typename":"ProductCarouselV2"\\},?/g', "", "/graphql/InspirationCarousel" ], [ '/\\{"category_id"(?:(?!"ads":\\{"id":"").)+?"ads":\\{"id":"\\d+".+?"__typename":"ProductCarouselV2"\\},?/g', "", "/graphql/InspirationalCarousel" ], [ '/\\{"id":\\d{9,11}(?:(?!"isTopads":false).)+?"isTopads":true.+?"__typename":"recommendationItem"\\},/g', "", "/\\/graphql\\/productRecommendation/i" ], [ '/,\\{"id":\\d{9,11}(?:(?!"isTopads":false).)+?"isTopads":true(?:(?!"__typename":"recommendationItem").)+?"__typename":"recommendationItem"\\}(?=\\])/', "", "/\\/graphql\\/productRecommendation/i" ], [ '/\\{"(?:productS|s)lashedPrice"(?:(?!"isTopads":false).)+?"isTopads":true.+?"__typename":"recommendationItem"\\},?/g', "", "/graphql/RecomWidget" ], [ '/\\{"appUrl"(?:(?!"isTopads":false).)+?"isTopads":true.+?"__typename":"recommendationItem"\\},?/g', "", "/graphql/ProductRecommendationQuery" ] ], o = new Map([ [ "www.youtube.com", [ 0, 1 ] ], [ "tokopedia.com", [ 2, 3, 4, 5, 6, 7 ] ] ]), r = new Map([]), n = new Map([]);
        function s(...e) {
            !function(e = !1, t = "", o = "", r = "") {
                if (!0 !== e) return;
                const n = c(), s = n.makeLogPrefix("replace-fetch-response", t, o, r);
                "*" === t && (t = ".*");
                const i = n.patternToRegex(t), p = function(e, t = "") {
                    const o = c(), r = new Map;
                    if (void 0 === e || "" === e) return r;
                    const n = {
                        canNegate: !0
                    };
                    for (const s of e.split(/\s+/)) {
                        const [e, a] = s.split(":");
                        "" !== e && (void 0 !== a ? r.set(e, o.initPattern(a, n)) : "" !== t && r.set(t, o.initPattern(e, n)));
                    }
                    return r;
                }(r, "url");
                self.fetch = new Proxy(self.fetch, {
                    apply: function(e, c, l) {
                        const d = Reflect.apply(e, c, l);
                        if ("" === t) return d;
                        let u = "match";
                        if (0 !== p.size) {
                            const e = [ l[0] instanceof Object ? l[0] : {
                                url: l[0]
                            } ];
                            if (e[0] instanceof Request) try {
                                e[0] = n.Request_clone.call(e[0]);
                            } catch (e) {
                                n.uboErr(s, e);
                            }
                            l[1] instanceof Object && e.push(l[1]), !1 === a(p, ...e) && (u = "nomatch");
                        }
                        return "nomatch" === u ? d : (n.logLevel > 1 && n.uboLog(s, `Matched "propsToMatch"\n${r}`), 
                        d.then((e => e.clone().text().then((t => {
                            const r = t.replace(i, o);
                            if ("nomatch" == (r !== t ? "match" : "nomatch")) return e;
                            n.uboLog(s, "Replaced");
                            const a = new Response(r, {
                                status: e.status,
                                statusText: e.statusText,
                                headers: e.headers
                            });
                            return Object.defineProperties(a, {
                                ok: {
                                    value: e.ok
                                },
                                redirected: {
                                    value: e.redirected
                                },
                                type: {
                                    value: e.type
                                },
                                url: {
                                    value: e.url
                                }
                            }), a;
                        })).catch((t => (n.uboErr(s, t), e))))).catch((e => (n.uboErr(s, e), d))));
                    }
                });
            }(!0, ...e);
        }
        function a(e, ...t) {
            void 0 === a.extractProperties && (a.extractProperties = (e, t, o) => {
                for (const r of o) void 0 !== e[r] && (t[r] = e[r]);
            });
            const o = c(), r = {}, n = o.Array_from(e.keys());
            for (const e of t) e instanceof Object != 0 && a.extractProperties(e, r, n);
            for (const [t, n] of e) {
                let e = r[t];
                if (void 0 !== e) {
                    if ("string" != typeof e) {
                        try {
                            e = o.JSON_stringify(e);
                        } catch (e) {}
                        if ("string" != typeof e) continue;
                    }
                    if (!o.testPattern(n, e)) return !1;
                }
            }
            return !0;
        }
        function c() {
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
        }
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const p = i.length;
        if (0 === p) return;
        const l = new Set, d = [];
        if (0 !== n.size) {
            for (let e = 0; e < p; e++) {
                const t = i.slice(e).join("."), o = n.get(t);
                o && d.push(...o);
            }
            n.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) d.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < p; t++) e(i.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== r.size) {
            const e = p - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = i.slice(t, o).join(".");
                let n = r.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) d.includes(e) || l.add(e);
                }
            }
            r.clear();
        }
        for (const e of l) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, r;
        try {
            t.uBOL_trustedReplaceFetchResponse = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_trustedReplaceFetchResponse);
            r = t.URL.createObjectURL(n);
            const s = t.document;
            o = s.createElement("script"), o.async = !1, o.src = r, (s.head || s.documentElement || s).append(o);
        } catch (e) {}
        r && (o && o.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_trustedReplaceFetchResponse;
    }
})();