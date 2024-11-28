"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ '"adPlacements"', '"no_ads"', "/playlist\\?list=|player\\?|watch\\?v=|youtubei\\/v1\\/player/" ], [ '/"adPlacements.*?([A-Z]"\\}|"\\}{2,4})\\}\\],/', "", "/playlist\\?list=|player\\?|watch\\?v=|youtubei\\/v1\\/player/" ], [ '/"adPlacements.*?("adSlots"|"adBreakHeartbeatParams")/gms', "$1", "youtubei/v1/player" ], [ '/\\{"brs_content_label":[^,]+,"category":"SPONSORED"[^\\n]+"cursor":"[^}]+\\}/g', "{}", "/api/graphql" ], [ '/\\{"node":\\{"role":"SEARCH_ADS"[^\\n]+?cursor":[^}]+\\}/g', "{}", "/api/graphql" ], [ '/\\{"node":\\{"__typename":"MarketplaceFeedAdStory"[^\\n]+?"cursor":(?:null|"\\{[^\\n]+?\\}"|[^\\n]+?MarketplaceSearchFeedStoriesEdge")\\}/g', "{}", "/api/graphql" ], [ '/\\{"node":\\{"__typename":"VideoHomeFeedUnitSectionComponent"[^\\n]+?"sponsored_data":\\{"ad_id"[^\\n]+?"cursor":null\\}/', "{}", "/api/graphql" ], [ "/.*/", "", "pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?" ], [ '"ads_disabled":false', '"ads_disabled":true', "payments" ] ], o = new Map([ [ "tv.youtube.com", 0 ], [ "www.youtube.com", [ 1, 2 ] ], [ "www.facebook.com", [ 3, 4, 5, 6 ] ], [ "in-jpn.com", 7 ], [ "app.hellovaia.com", 8 ], [ "app.vaia.com", 8 ] ]), r = new Map([]), n = new Map([]);
        function s(e = "", t = "", o = "") {
            const r = c(), n = r.makeLogPrefix("trusted-replace-xhr-response", e, t, o), s = new WeakMap;
            "*" === e && (e = ".*");
            const i = r.patternToRegex(e), p = function(e, t = "") {
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
            }(o, "url");
            self.XMLHttpRequest = class extends self.XMLHttpRequest {
                open(e, t, ...o) {
                    const i = {
                        method: e,
                        url: t
                    };
                    let l = "match";
                    return 0 !== p.size && !1 === a(p, i) && (l = "nomatch"), "match" === l && (r.logLevel > 1 && r.uboLog(n, 'Matched "propsToMatch"'), 
                    s.set(this, i)), super.open(e, t, ...o);
                }
                get response() {
                    const e = super.response, o = s.get(this);
                    if (void 0 === o) return e;
                    const a = "string" == typeof e ? e.length : void 0;
                    if (o.lastResponseLength !== a && (o.response = void 0, o.lastResponseLength = a), 
                    void 0 !== o.response) return o.response;
                    if ("string" != typeof e) return o.response = e;
                    const c = e, p = c.replace(i, t);
                    return p !== c && r.uboLog(n, "Match"), o.response = p;
                }
                get responseText() {
                    const e = this.response;
                    return "string" != typeof e ? super.responseText : e;
                }
            };
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
        const l = new Set, g = [];
        if (0 !== n.size) {
            for (let e = 0; e < p; e++) {
                const t = i.slice(e).join("."), o = n.get(t);
                o && g.push(...o);
            }
            n.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) g.includes(e) || l.add(e);
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
                    for (const e of n) g.includes(e) || l.add(e);
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
            t.uBOL_trustedReplaceXhrResponse = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_trustedReplaceXhrResponse);
            r = t.URL.createObjectURL(n);
            const s = t.document;
            o = s.createElement("script"), o.async = !1, o.src = r, (s.head || s.documentElement || s).append(o);
        } catch (e) {}
        r && (o && o.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_trustedReplaceXhrResponse;
    }
})();