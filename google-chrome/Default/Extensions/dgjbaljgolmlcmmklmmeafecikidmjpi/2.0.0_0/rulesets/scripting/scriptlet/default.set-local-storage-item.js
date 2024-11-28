"use strict";

!function() {
    const e = {}, t = [ [ "PageCount", "$remove$" ], [ "a_render", "true" ], [ "adf_plays", "2" ], [ "email", "true" ], [ "adshield-analytics-uuid", "$remove$" ], [ "/_fa_dXVpZA==$/", "$remove$" ], [ "/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/", "$remove$" ], [ "/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/", "$remove$" ], [ "/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/", "$remove$" ], [ "segmentDeviceId", "$remove$" ], [ "IIElevenLabsDubbingResult", "$remove$" ], [ "fdx_enable_new_detail_page", "true" ] ], o = new Map([ [ "jetpunk.com", 0 ], [ "bravedown.com", 1 ], [ "adultdeepfakes.com", 2 ], [ "freewsad.com", 3 ], [ "loawa.com", [ 4, 5, 6, 7, 8 ] ], [ "ygosu.com", [ 4, 5, 6, 7, 8 ] ], [ "sportalkorea.com", [ 4, 5, 6, 7, 8 ] ], [ "enetnews.co.kr", [ 4, 5, 6, 7, 8 ] ], [ "edaily.co.kr", [ 4, 5, 6, 7, 8 ] ], [ "economist.co.kr", [ 4, 5, 6, 7, 8 ] ], [ "etoday.co.kr", [ 4, 5, 6, 7, 8 ] ], [ "hankyung.com", [ 4, 5, 6, 7, 8 ] ], [ "isplus.com", [ 4, 5, 6, 7, 8 ] ], [ "hometownstation.com", [ 4, 5, 6, 7, 8 ] ], [ "inven.co.kr", [ 4, 5, 6, 7, 8 ] ], [ "honkailab.com", [ 4, 5, 6, 7, 8 ] ], [ "warcraftrumbledeck.com", [ 4, 5, 6, 7, 8 ] ], [ "genshinlab.com", [ 4, 5, 6, 7, 8 ] ], [ "thestockmarketwatch.com", [ 4, 5, 6, 7, 8 ] ], [ "thephoblographer.com", [ 4, 5, 6, 7, 8 ] ], [ "issuya.com", [ 4, 5, 6, 7, 8 ] ], [ "worldhistory.org", [ 4, 5, 6, 7, 8 ] ], [ "meeco.kr", [ 4, 5, 6, 7, 8 ] ], [ "etnews.com", [ 4, 5, 6, 7, 8 ] ], [ "iusm.co.kr", [ 4, 5, 6, 7, 8 ] ], [ "dogdrip.net", [ 4, 5, 6, 7, 8 ] ], [ "etoland.co.kr", [ 4, 5, 6, 7, 8 ] ], [ "picrew.me", [ 4, 5, 6, 7, 8 ] ], [ "uttranews.com", [ 4, 5, 6, 7, 8 ] ], [ "text-compare.com", [ 4, 5, 6, 7, 8 ] ], [ "fntimes.com", [ 4, 5, 6, 7, 8 ] ], [ "javatpoint.com", [ 4, 5, 6, 7, 8 ] ], [ "vipotv.com", [ 4, 5, 6, 7, 8 ] ], [ "lamire.jp", [ 4, 5, 6, 7, 8 ] ], [ "bamgosu.site", [ 4, 5, 6, 7, 8 ] ], [ "etnewskorea.com", [ 4, 5, 6, 7, 8 ] ], [ "allthekingz.com", [ 4, 5, 6, 7, 8 ] ], [ "gadgets360.com", [ 4, 5, 6, 7, 8 ] ], [ "automobile-catalog.com", [ 4, 5, 6, 7, 8 ] ], [ "maketecheasier.com", [ 4, 5, 6, 7, 8 ] ], [ "thesaurus.net", [ 4, 5, 6, 7, 8 ] ], [ "wfmz.com", [ 4, 5, 6, 7, 8 ] ], [ "thestar.co.uk", [ 4, 5, 6, 7, 8 ] ], [ "yorkshirepost.co.uk", [ 4, 5, 6, 7, 8 ] ], [ "mydaily.co.kr", [ 4, 5, 6, 7, 8 ] ], [ "raenonx.cc", [ 4, 5, 6, 7, 8 ] ], [ "ndtvprofit.com", [ 4, 5, 6, 7, 8 ] ], [ "mindbodygreen.com", 9 ], [ "elevenlabs.io", 10 ], [ "fedex.com", 11 ] ]), r = new Map([]), n = new Map([]);
    function c(t = "", o = "") {
        !function(t = "local", o = !1, r = "", n = "") {
            if ("" === r) return;
            "emptyArr" === n ? n = "[]" : "emptyObj" === n && (n = "{}");
            const c = [ "", "undefined", "null", "false", "true", "on", "off", "yes", "no", "accept", "reject", "accepted", "rejected", "{}", "[]", '""', "$remove$" ];
            if (o) n.includes("$now$") && (n = n.replaceAll("$now$", Date.now())), n.includes("$currentDate$") && (n = n.replaceAll("$currentDate$", `${Date()}`)), 
            n.includes("$currentISODate$") && (n = n.replaceAll("$currentISODate$", (new Date).toISOString())); else {
                const e = n.toLowerCase(), t = /^("?)(.+)\1$/.exec(e), o = t && t[2] || e;
                if (!1 === c.includes(o)) {
                    if (!1 === /^\d+$/.test(o)) return;
                    if (parseInt(o, 10) > 32767) return;
                }
            }
            try {
                const o = self[`${t}Storage`];
                if ("$remove$" === n) {
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
                    }().patternToRegex(r, void 0, !0), c = [];
                    for (let e = 0, t = o.length; e < t; e++) {
                        const t = o.key(e);
                        n.test(t) && c.push(t);
                    }
                    for (const e of c) o.removeItem(e);
                } else o.setItem(r, `${n}`);
            } catch (e) {}
        }("local", !1, t, o);
    }
    const s = [];
    try {
        s.push(...document.location.hostname.split("."));
    } catch (e) {}
    const a = s.length;
    if (0 === a) return;
    const i = new Set, l = [];
    if (0 !== n.size) {
        for (let e = 0; e < a; e++) {
            const t = s.slice(e).join("."), o = n.get(t);
            o && l.push(...o);
        }
        n.clear();
    }
    if (0 !== o.size) {
        const e = e => {
            let t = o.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) l.includes(e) || i.add(e);
            }
        };
        for (let t = 0; t < a; t++) e(s.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== r.size) {
        const e = a - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = s.slice(t, o).join(".");
            let n = r.get(e);
            if (void 0 !== n) {
                "number" == typeof n && (n = [ n ]);
                for (const e of n) l.includes(e) || i.add(e);
            }
        }
        r.clear();
    }
    for (const e of i) try {
        c(...t[e]);
    } catch (e) {}
    t.length = 0;
}();