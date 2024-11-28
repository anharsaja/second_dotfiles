"use strict";

!function() {
    const e = {}, t = [ [ "popunder_stop", "1" ], [ "ts_popunder", "true", "", "reload", "1" ], [ "__pf", "1" ], [ "npabp", "1" ], [ "popunder", "yes" ], [ "__gads", "1" ], [ "clictune_pop", "off" ], [ "WHITELISTED_CLOSED", "1" ], [ "popunder", "1" ], [ "softonic-r2d2-view-state", "1" ], [ "modal_cookie", "yes" ], [ "__gads", "OK", "", "reload", "1" ], [ "visits", "1" ], [ "ad_opened", "true" ], [ "customscript0", "1" ], [ "visited", "1" ], [ "inter", "1", "", "reload", "1" ], [ "Ads", "1" ], [ "Ads", "2" ], [ "Geo", "OK" ], [ "bitmovin_analytics_uuid", "OK" ] ], o = new Map([ [ "tnaflix.com", 0 ], [ "buktube.com", 1 ], [ "fullxh.com", 1 ], [ "megaxh.com", 1 ], [ "movingxh.world", 1 ], [ "seexh.com", 1 ], [ "taoxh.life", 1 ], [ "unlockxh4.com", 1 ], [ "xhaccess.com", 1 ], [ "xhadult2.com", 1 ], [ "xhadult3.com", 1 ], [ "xhadult4.com", 1 ], [ "xhadult5.com", 1 ], [ "xhamster46.com", 1 ], [ "xhbig.com", 1 ], [ "xhday.com", 1 ], [ "xhday1.com", 1 ], [ "xhmoon5.com", 1 ], [ "xhplanet1.com", 1 ], [ "xhplanet2.com", 1 ], [ "xhreal2.com", 1 ], [ "xhreal3.com", 1 ], [ "xhtab2.com", 1 ], [ "xhtree.com", 1 ], [ "xhvictory.com", 1 ], [ "xhwebsite.com", 1 ], [ "xhwebsite2.com", 1 ], [ "xhwide1.com", 1 ], [ "animesuge.to", 2 ], [ "aniwave.to", 2 ], [ "anix.to", 2 ], [ "bflix.to", 2 ], [ "flixtorz.to", 2 ], [ "fmoviesz.to", 2 ], [ "hurawatch.bz", 2 ], [ "mangafire.to", 2 ], [ "moviestowatch.id", 2 ], [ "soap2dayx.to", 2 ], [ "twitchmetrics.net", 3 ], [ "andhrafriends.com", 4 ], [ "rsadnetworkinfo.com", 5 ], [ "rsinsuranceinfo.com", 5 ], [ "rsfinanceinfo.com", 5 ], [ "rsgamer.app", 5 ], [ "rssoftwareinfo.com", 5 ], [ "rshostinginfo.com", 5 ], [ "rseducationinfo.com", 5 ], [ "dlink2.net", 6 ], [ "imgur.com", 7 ], [ "imgur-com.translate.goog", 7 ], [ "xcity.org", 8 ], [ "top16.net", [ 8, 15 ] ], [ "coolrom.com.au", 10 ], [ "gourmetscans.net", 11 ], [ "smartkhabrinews.com", 12 ], [ "sharedisk.me", 13 ], [ "shrdsk.me", 13 ], [ "iporntoo.com", 14 ], [ "hentai.tv", 16 ], [ "noticiasdehoje.biz", 17 ], [ "jornaldigital.org", 18 ], [ "fandom.com", 19 ], [ "clickorlando.com", 20 ] ]), r = new Map([ [ "hamsterix", 1 ], [ "xhamster", 1 ], [ "xhamster1", 1 ], [ "xhamster10", 1 ], [ "xhamster11", 1 ], [ "xhamster12", 1 ], [ "xhamster13", 1 ], [ "xhamster14", 1 ], [ "xhamster15", 1 ], [ "xhamster16", 1 ], [ "xhamster17", 1 ], [ "xhamster18", 1 ], [ "xhamster19", 1 ], [ "xhamster20", 1 ], [ "xhamster2", 1 ], [ "xhamster3", 1 ], [ "xhamster4", 1 ], [ "xhamster42", 1 ], [ "xhamster5", 1 ], [ "xhamster7", 1 ], [ "xhamster8", 1 ], [ "softonic", 9 ] ]), n = new Map([]);
    function s(t = "", o = "", r = "") {
        if ("" === t) return;
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
        }(), s = n.makeLogPrefix("set-cookie", t, o, r), i = o.toLowerCase(), c = /^("?)(.+)\1$/.exec(i), l = c && c[2] || i;
        if (!1 === [ "accept", "reject", "accepted", "rejected", "notaccepted", "allow", "deny", "allowed", "disallow", "enable", "disable", "enabled", "disabled", "ok", "on", "off", "true", "t", "false", "f", "yes", "y", "no", "n", "necessary", "required", "approved", "disapproved" ].includes(l)) {
            if (!1 === /^\d+$/.test(l)) return;
            if (parseInt(o, 10) > 32767) return;
        }
        const m = function(e = !1, t = "", o = "", r = "", n = "", s = {}) {
            !1 === e && /[^!#$%&'*+\-.0-9A-Z[\]^_`a-z|~]/.test(t) && (t = encodeURIComponent(t)), 
            /[^ -:<-[\]-~]/.test(o) && (o = encodeURIComponent(o));
            const i = a(t);
            if (void 0 !== i && s.dontOverwrite) return;
            if (i === o && s.reload) return;
            const c = [ t, "=", o ];
            if ("" !== r && c.push("; expires=", r), "" === n ? n = "/" : "none" === n && (n = ""), 
            "" !== n && "/" !== n) return;
            "/" === n && c.push("; path=/"), e && (s.domain && c.push(`; domain=${s.domain}`), 
            c.push("; Secure"));
            try {
                document.cookie = c.join("");
            } catch (e) {}
            const l = a(t) === o;
            return l && s.reload && window.location.reload(), l;
        }(!1, t, o, "", r, n.getExtraArgs(Array.from(arguments), 3));
        m && n.uboLog(s, "Done");
    }
    function a(e = "") {
        for (const t of document.cookie.split(/\s*;\s*/)) {
            const o = t.indexOf("=");
            if (-1 !== o && t.slice(0, o) === e) return t.slice(o + 1).trim();
        }
    }
    const i = [];
    try {
        i.push(...document.location.hostname.split("."));
    } catch (e) {}
    const c = i.length;
    if (0 === c) return;
    const l = new Set, m = [];
    if (0 !== n.size) {
        for (let e = 0; e < c; e++) {
            const t = i.slice(e).join("."), o = n.get(t);
            o && m.push(...o);
        }
        n.clear();
    }
    if (0 !== o.size) {
        const e = e => {
            let t = o.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) m.includes(e) || l.add(e);
            }
        };
        for (let t = 0; t < c; t++) e(i.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== r.size) {
        const e = c - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = i.slice(t, o).join(".");
            let n = r.get(e);
            if (void 0 !== n) {
                "number" == typeof n && (n = [ n ]);
                for (const e of n) m.includes(e) || l.add(e);
            }
        }
        r.clear();
    }
    for (const e of l) try {
        s(...t[e]);
    } catch (e) {}
    t.length = 0;
}();