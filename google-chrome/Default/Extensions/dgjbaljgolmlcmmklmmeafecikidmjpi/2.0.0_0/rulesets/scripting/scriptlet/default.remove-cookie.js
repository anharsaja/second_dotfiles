"use strict";

!function() {
    const e = {}, t = [ [ "da325" ], [ "ref_cookie" ], [ "video_view_count" ], [ "/^/" ], [ "PageCount" ], [], [ "/vs|to|vs_spon|tgpOut|current_click/" ], [ "realm.cookiesAndJavascript" ], [ "kt_qparams" ], [ "kt_ips" ], [ "kt_referer" ], [ "blaize_tracking_id" ], [ "akaclientip" ], [ "hive_geoloc" ], [ "MicrosoftApplicationsTelemetryDeviceId" ], [ "/articlesRead|previousPage/" ] ], o = new Map([ [ "zootube1.com", 0 ], [ "subdivx.com", 1 ], [ "buktube.com", 2 ], [ "fullxh.com", 2 ], [ "megaxh.com", 2 ], [ "movingxh.world", 2 ], [ "seexh.com", 2 ], [ "taoxh.life", 2 ], [ "unlockxh4.com", 2 ], [ "xhaccess.com", 2 ], [ "xhadult2.com", 2 ], [ "xhadult3.com", 2 ], [ "xhadult4.com", 2 ], [ "xhadult5.com", 2 ], [ "xhamster46.com", 2 ], [ "xhbig.com", 2 ], [ "xhday.com", 2 ], [ "xhday1.com", 2 ], [ "xhmoon5.com", 2 ], [ "xhplanet1.com", 2 ], [ "xhplanet2.com", 2 ], [ "xhreal2.com", 2 ], [ "xhreal3.com", 2 ], [ "xhtab2.com", 2 ], [ "xhtree.com", 2 ], [ "xhvictory.com", 2 ], [ "xhwebsite.com", 2 ], [ "xhwebsite2.com", 2 ], [ "xhwide1.com", 2 ], [ "adultasianporn.com", 3 ], [ "jetpunk.com", 4 ], [ "xxxxsx.com", 5 ], [ "sexvideos.host", 6 ], [ "beaumontenterprise.com", 7 ], [ "chron.com", 7 ], [ "ctinsider.com", 7 ], [ "ctpost.com", 7 ], [ "expressnews.com", 7 ], [ "houstonchronicle.com", 7 ], [ "lmtonline.com", 7 ], [ "middletownpress.com", 7 ], [ "mrt.com", 7 ], [ "newstimes.com", 7 ], [ "nhregister.com", 7 ], [ "registercitizen.com", 7 ], [ "sfchronicle.com", 7 ], [ "stamfordadvocate.com", 7 ], [ "thehour.com", 7 ], [ "timesunion.com", 7 ], [ "heavyfetish.com", [ 8, 9, 10 ] ], [ "watchporn.to", 9 ], [ "columbian.com", 11 ], [ "nypost.com", 11 ], [ "pagesix.com", 11 ], [ "factable.com", [ 12, 13 ] ], [ "bing.com", 14 ], [ "msn.com", 14 ], [ "androidpolice.com", 15 ], [ "makeuseof.com", 15 ], [ "movieweb.com", 15 ], [ "xda-developers.com", 15 ] ]), r = new Map([ [ "hamsterix", 2 ], [ "xhamster", 2 ], [ "xhamster1", 2 ], [ "xhamster10", 2 ], [ "xhamster11", 2 ], [ "xhamster12", 2 ], [ "xhamster13", 2 ], [ "xhamster14", 2 ], [ "xhamster15", 2 ], [ "xhamster16", 2 ], [ "xhamster17", 2 ], [ "xhamster18", 2 ], [ "xhamster19", 2 ], [ "xhamster20", 2 ], [ "xhamster2", 2 ], [ "xhamster3", 2 ], [ "xhamster4", 2 ], [ "xhamster42", 2 ], [ "xhamster5", 2 ], [ "xhamster7", 2 ], [ "xhamster8", 2 ] ]), n = new Map([]);
    function c(t = "") {
        if ("string" != typeof t) return;
        const o = function() {
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
        }(), r = o.patternToRegex(t), n = o.getExtraArgs(Array.from(arguments), 1), c = (e, t = 500) => {
            void 0 === c.timer && (c.timer = setTimeout((() => {
                c.timer = void 0, e();
            }), t));
        }, s = () => {
            document.cookie.split(";").forEach((e => {
                const t = e.indexOf("=");
                if (-1 === t) return;
                const o = e.slice(0, t).trim();
                if (!1 === r.test(o)) return;
                const n = o + "=", c = "; domain=" + document.location.hostname, s = "; domain=." + document.location.hostname;
                let i, a;
                const m = document.domain;
                m && (m !== document.location.hostname && (i = "; domain=." + m), m.startsWith("www.") && (a = "; domain=" + m.replace("www", "")));
                const l = "; path=/", h = "; Max-Age=-1000; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                document.cookie = n + h, document.cookie = n + c + h, document.cookie = n + s + h, 
                document.cookie = n + l + h, document.cookie = n + c + l + h, document.cookie = n + s + l + h, 
                void 0 !== i && (document.cookie = n + i + l + h), void 0 !== a && (document.cookie = n + a + l + h);
            }));
        };
        if (s(), window.addEventListener("beforeunload", s), "string" != typeof n.when) return;
        const i = [ "scroll", "keydown" ], a = n.when.split(/\s/);
        for (const e of a) !1 !== i.includes(e) && document.addEventListener(e, (() => {
            c(s);
        }), {
            passive: !0
        });
    }
    const s = [];
    try {
        s.push(...document.location.hostname.split("."));
    } catch (e) {}
    const i = s.length;
    if (0 === i) return;
    const a = new Set, m = [];
    if (0 !== n.size) {
        for (let e = 0; e < i; e++) {
            const t = s.slice(e).join("."), o = n.get(t);
            o && m.push(...o);
        }
        n.clear();
    }
    if (0 !== o.size) {
        const e = e => {
            let t = o.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) m.includes(e) || a.add(e);
            }
        };
        for (let t = 0; t < i; t++) e(s.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== r.size) {
        const e = i - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = s.slice(t, o).join(".");
            let n = r.get(e);
            if (void 0 !== n) {
                "number" == typeof n && (n = [ n ]);
                for (const e of n) m.includes(e) || a.add(e);
            }
        }
        r.clear();
    }
    for (const e of a) try {
        c(...t[e]);
    } catch (e) {}
    t.length = 0;
}();