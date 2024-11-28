"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "reelWatchSequenceResponse.entries.[-].command.reelWatchEndpoint.adClientParams.isAd entries.[-].command.reelWatchEndpoint.adClientParams.isAd", "", "propsToMatch", "url:/reel_watch_sequence?" ], [ "overlay", "overlay.shortsAdsRenderer", "propsToMatch", "url:/reel_item_watch?" ], [ "properties.componentConfigs.slideshowConfigs.slideshowSettings.interstitialNativeAds", "", "propsToMatch", "url:consumptionpage/gallery_windows/config.json" ], [ "*", "list.*.link.ad list.*.link.kicker", "propsToMatch", "url:content/v1/cms/api/amp" ], [ "breaks pause_ads video_metadata.end_credits_time", "pause_ads" ], [ "breaks pause_ads video_metadata.end_credits_time", "breaks" ], [ "data.device.adsParams data.device.adSponsorshipTemplate", "", "propsToMatch", "url:/appconfig" ], [ "ads.[].imageUrl", "", "propsToMatch", "url:api/meta" ], [ "adDetails", "", "propsToMatch", "/secure?" ], [ "data.search.products.[-].sponsored_ad.ad_source", "", "propsToMatch", "url:/plp_search_v2?" ], [ "response.timeline.elements.[-].advertiserId", "", "propsToMatch", "url:/api/v2/tabs/for_you" ], [ "avails" ], [ "response.ads" ], [ "plugins.adService" ] ], r = new Map([ [ "m.youtube.com", [ 0, 1 ] ], [ "music.youtube.com", [ 0, 1 ] ], [ "tv.youtube.com", [ 0, 1 ] ], [ "www.youtube.com", [ 0, 1 ] ], [ "youtubekids.com", [ 0, 1 ] ], [ "youtube-nocookie.com", [ 0, 1 ] ], [ "www.msn.com", [ 2, 3 ] ], [ "hulu.com", [ 4, 5 ] ], [ "crackle.com", 6 ], [ "misskey.io", 7 ], [ "misskey.oga.ninja", 7 ], [ "mk.yopo.work", 7 ], [ "sushi.ski", 7 ], [ "trpger.us", 7 ], [ "warpday.net", 7 ], [ "zadankai.club", 7 ], [ "zee5.com", 8 ], [ "target.com", 9 ], [ "tumblr.com", 10 ], [ "nbc.com", 11 ], [ "player.pop.co.uk", 12 ], [ "player.popfun.co.uk", 12 ], [ "iprima.cz", 13 ] ]), o = new Map([]), n = new Map([]);
        function s(...e) {
            !function(e = "", t = "") {
                const r = a(), o = r.makeLogPrefix("json-prune-fetch-response", e, t), n = r.getExtraArgs(Array.from(arguments), 2), s = function(e, t = "") {
                    const r = a(), o = new Map;
                    if (void 0 === e || "" === e) return o;
                    const n = {
                        canNegate: !0
                    };
                    for (const s of e.split(/\s+/)) {
                        const [e, c] = s.split(":");
                        "" !== e && (void 0 !== c ? o.set(e, r.initPattern(c, n)) : "" !== t && o.set(t, r.initPattern(e, n)));
                    }
                    return o;
                }(n.propsToMatch, "url"), l = r.initPattern(n.stackToMatch || "", {
                    canNegate: !0
                }), p = "" === e, u = function(a, u, f) {
                    const d = Reflect.apply(a, u, f);
                    let h = p ? "nomatch" : "match";
                    if (0 !== s.size) {
                        const e = [ f[0] instanceof Object ? f[0] : {
                            url: f[0]
                        } ];
                        if (e[0] instanceof Request) try {
                            e[0] = r.Request_clone.call(e[0]);
                        } catch (e) {
                            r.uboErr(o, "Error:", e);
                        }
                        f[1] instanceof Object && e.push(f[1]), !1 === c(s, ...e) && (h = "nomatch");
                    }
                    return !1 === p && "nomatch" === h ? d : (r.logLevel > 1 && "nomatch" !== h && 0 !== s.size && r.uboLog(o, `Matched optional "propsToMatch"\n${n.propsToMatch}`), 
                    d.then((s => s.clone().json().then((c => {
                        if ("object" != typeof c) return s;
                        if (p) return r.uboLog(o, r.JSON_stringify(c, null, 2)), s;
                        const a = i(c, e, t, l, n);
                        if ("object" != typeof a) return s;
                        r.uboLog(o, "Pruned");
                        const u = Response.json(a, {
                            status: s.status,
                            statusText: s.statusText,
                            headers: s.headers
                        });
                        return Object.defineProperties(u, {
                            ok: {
                                value: s.ok
                            },
                            redirected: {
                                value: s.redirected
                            },
                            type: {
                                value: s.type
                            },
                            url: {
                                value: s.url
                            }
                        }), u;
                    })).catch((e => (r.uboErr(o, "Error:", e), s))))).catch((e => (r.uboErr(o, "Error:", e), 
                    d))));
                };
                self.fetch = new Proxy(self.fetch, {
                    apply: u
                });
            }(...e);
        }
        function c(e, ...t) {
            void 0 === c.extractProperties && (c.extractProperties = (e, t, r) => {
                for (const o of r) void 0 !== e[o] && (t[o] = e[o]);
            });
            const r = a(), o = {}, n = r.Array_from(e.keys());
            for (const e of t) e instanceof Object != 0 && c.extractProperties(e, o, n);
            for (const [t, n] of e) {
                let e = o[t];
                if (void 0 !== e) {
                    if ("string" != typeof e) {
                        try {
                            e = r.JSON_stringify(e);
                        } catch (e) {}
                        if ("string" != typeof e) continue;
                    }
                    if (!r.testPattern(n, e)) return !1;
                }
            }
            return !0;
        }
        function i(e, t, r, o = {
            matchAll: !0
        }, n = {}) {
            if ("string" != typeof t) return;
            const s = "" !== t ? t.split(/ +/) : [], c = 0 !== s.length && "" !== r ? r.split(/ +/) : [];
            if (!0 !== o.matchAll && !1 === function(e, t = "") {
                const r = a(), o = function() {
                    const e = a(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), r = self.onerror;
                    return self.onerror = function(e, ...o) {
                        return !("string" != typeof e || !e.includes(t)) || (r instanceof Function ? r.call(this, e, ...o) : void 0);
                    }.bind(), t;
                }(), n = new r.Error(o), s = new URL(self.location.href);
                s.hash = "";
                const c = /(.*?@)?(\S+)(:\d+):\d+\)?$/, i = [];
                for (let e of n.stack.split(/[\n\r]+/)) {
                    if (e.includes(o)) continue;
                    e = e.trim();
                    const t = r.RegExp_exec.call(c, e);
                    if (null === t) continue;
                    let n = t[2];
                    n.startsWith("(") && (n = n.slice(1)), n === s.href ? n = "inlineScript" : n.startsWith("<anonymous>") && (n = "injectedScript");
                    let a = void 0 !== t[1] ? t[1].slice(0, -1) : e.slice(0, t.index).trim();
                    a.startsWith("at") && (a = a.slice(2).trim());
                    let l = t[3];
                    i.push(" " + `${a} ${n}${l}:1`.trim());
                }
                i[0] = "stackDepth:" + (i.length - 1);
                const l = i.join("\t"), p = !0 !== e.matchAll && r.testPattern(e, l);
                return ("all" === t || "match" === t && p || "nomatch" === t && !p) && r.uboLog(l.replace(/\t/g, "\n")), 
                p;
            }(o, n.logstack)) return;
            if (void 0 === i.mustProcess && (i.mustProcess = (e, t) => {
                for (const r of t) if (!1 === l(e, r)) return !1;
                return !0;
            }), 0 === s.length) return;
            let p = "nomatch";
            if (i.mustProcess(e, c)) for (const t of s) l(e, t, !0) && (p = "match");
            return "match" === p ? e : void 0;
        }
        function a() {
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
        function l(e, t, r = !1) {
            let o = e, n = t;
            for (;;) {
                if ("object" != typeof o || null === o) return !1;
                const e = n.indexOf(".");
                if (-1 === e) {
                    if (!1 === r) return o.hasOwnProperty(n);
                    let e = !1;
                    if ("*" === n) for (const t in o) !1 !== o.hasOwnProperty(t) && (delete o[t], e = !0); else o.hasOwnProperty(n) && (delete o[n], 
                    e = !0);
                    return e;
                }
                const t = n.slice(0, e), s = n.slice(e + 1);
                let c = !1;
                if ("[-]" === t && Array.isArray(o)) {
                    let e = o.length;
                    for (;e--; ) !1 !== l(o[e], s) && (o.splice(e, 1), c = !0);
                    return c;
                }
                if ("{-}" === t && o instanceof Object) {
                    for (const e of Object.keys(o)) !1 !== l(o[e], s) && (delete o[e], c = !0);
                    return c;
                }
                if ("[]" === t && Array.isArray(o) || "{}" === t && o instanceof Object || "*" === t && o instanceof Object) {
                    for (const e of Object.keys(o)) !1 !== l(o[e], s, r) && (c = !0);
                    return c;
                }
                if (!1 === o.hasOwnProperty(t)) return !1;
                o = o[t], n = n.slice(e + 1);
            }
        }
        const p = [];
        try {
            p.push(...document.location.hostname.split("."));
        } catch (e) {}
        const u = p.length;
        if (0 === u) return;
        const f = new Set, d = [];
        if (0 !== n.size) {
            for (let e = 0; e < u; e++) {
                const t = p.slice(e).join("."), r = n.get(t);
                r && d.push(...r);
            }
            n.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) d.includes(e) || f.add(e);
                }
            };
            for (let t = 0; t < u; t++) e(p.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== o.size) {
            const e = u - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = p.slice(t, r).join(".");
                let n = o.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) d.includes(e) || f.add(e);
                }
            }
            o.clear();
        }
        for (const e of f) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, o;
        try {
            t.uBOL_jsonPruneFetchResponse = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_jsonPruneFetchResponse);
            o = t.URL.createObjectURL(n);
            const s = t.document;
            r = s.createElement("script"), r.async = !1, r.src = o, (s.head || s.documentElement || s).append(r);
        } catch (e) {}
        o && (r && r.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_jsonPruneFetchResponse;
    }
})();