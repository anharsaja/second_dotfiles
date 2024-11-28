"use strict";

!function() {
    const e = {}, o = [ [ "contextual-sign-in-modal-cool-off-hidden", "$now$" ], [ "lo-non-moc-membership-upsell|dismissed-at", "$now$" ], [ "201805-policy|accepted", "1" ], [ "halfSheetAppBannerDismissed", '{"halfSheetAppBannerDismissed":{"expiration":2000000000000,"data":true}}' ] ], t = new Map([ [ "linkedin.com", 0 ], [ "500ish.com", 1 ], [ "artplusmarketing.com", 1 ], [ "atrium.co", 1 ], [ "backchannel.com", 1 ], [ "backstage.1blocker.com", 1 ], [ "badootech.badoo.com", 1 ], [ "baharudinyusuf.com", 1 ], [ "bitcointechtalk.com", 1 ], [ "blog.bitsrc.io", 1 ], [ "blog.inkdrop.app", [ 1, 2 ] ], [ "bitwarden.com", 1 ], [ "blog.coinbase.com", 1 ], [ "blog.confiant.com", 1 ], [ "blog.devcolor.org", 1 ], [ "blog.growthhackers.com", 1 ], [ "blog.hiri.com", 1 ], [ "blog.ltse.com", 1 ], [ "blog.statebox.org", 1 ], [ "blog.twitch.tv", 1 ], [ "blog.waffle.io", 1 ], [ "bluerockpublicradio.com", 1 ], [ "bolt.io", 1 ], [ "boomsupersonic.com", 1 ], [ "bradfieldcs.com", 1 ], [ "brightthemag.com", 1 ], [ "broadcast.listennotes.com", 1 ], [ "checkio.org", 1 ], [ "citizen428.net", 1 ], [ "coach.me", 1 ], [ "codeburst.io", 1 ], [ "dave-bailey.com", 1 ], [ "discordapp.com", 1 ], [ "doist.com", 1 ], [ "doit-intl.com", 1 ], [ "dotandline.net", 1 ], [ "doublepulsar.com", 1 ], [ "economist.com", 1 ], [ "electricliterature.com", 1 ], [ "elidourado.com", 1 ], [ "esciencecenter.nl", 1 ], [ "faun.pub", 1 ], [ "fossa.io", 1 ], [ "freecodecamp.org", 1 ], [ "fritz.ai", 1 ], [ "getadblock.com", 1 ], [ "levelup.gitconnected.com", 1 ], [ "greylock.com", 1 ], [ "headmelted.com", 1 ], [ "helium.com", 1 ], [ "howwegettonext.com", 1 ], [ "iheart.com", 1 ], [ "injusticetoday.com", 1 ], [ "insightdatascience.com", 1 ], [ "iota.org", 1 ], [ "itnext.io", 1 ], [ "itsyourturnblog.com", 1 ], [ "jupyter.org", 1 ], [ "keepingstock.net", 1 ], [ "kiwi.com", 1 ], [ "learngoprogramming.com", 1 ], [ "learningbyshipping.com", 1 ], [ "ledwards.com", 1 ], [ "legalist.com", 1 ], [ "logrocket.com", 1 ], [ "mapbox.com", 1 ], [ "medium.com", 1 ], [ "melmagazine.com", 1 ], [ "mondaynote.com", 1 ], [ "newco.co", 1 ], [ "news.smugmug.com", 1 ], [ "nyulocal.com", 1 ], [ "ofdollarsanddata.com", 1 ], [ "okmeter.io", 1 ], [ "open.nytimes.com", 1 ], [ "javascript.plainenglish.io", 1 ], [ "postlight.com", 1 ], [ "proandroiddev.com", 1 ], [ "prototypr.io", 1 ], [ "rainway.io", 1 ], [ "sagefy.org", 1 ], [ "signalvnoise.com", 1 ], [ "slack.engineering", 1 ], [ "slackhq.com", 1 ], [ "springboard.com", 1 ], [ "standardnotes.org", 1 ], [ "startupsventurecapital.com", 1 ], [ "stoplight.io", 1 ], [ "tech.buzzfeed.com", 1 ], [ "theabacus.io", 1 ], [ "theawl.com", 1 ], [ "thebigroundtable.com", 1 ], [ "thebillfold.com", 1 ], [ "thebolditalic.com", 1 ], [ "thecontrol.co", 1 ], [ "theringer.com", 1 ], [ "thinkprogress.org", 1 ], [ "thriveglobal.com", 1 ], [ "timeline.com", 1 ], [ "towardsdatascience.com", 1 ], [ "udacity.com", 1 ], [ "unpatent.co", 1 ], [ "usejournal.com", 1 ], [ "uxdesign.cc", 1 ], [ "uxplanet.org", 1 ], [ "warisboring.com", 1 ], [ "wearemel.com", 1 ], [ "whatahowler.com", 1 ], [ "x.company", 1 ], [ "blog.canopas.com", 1 ], [ "blog.dp6.com.br", 1 ], [ "blog.angular.io", 1 ], [ "thetaoist.online", 1 ], [ "writingcooperative.com", 1 ], [ "tech.ahrefs.com", 1 ], [ "patreon.com", 3 ] ]), c = new Map([]), r = new Map([]);
    function n(o = "", t = "") {
        !function(o = "local", t = !1, c = "", r = "") {
            if ("" === c) return;
            "emptyArr" === r ? r = "[]" : "emptyObj" === r && (r = "{}");
            const n = [ "", "undefined", "null", "false", "true", "on", "off", "yes", "no", "accept", "reject", "accepted", "rejected", "{}", "[]", '""', "$remove$" ];
            if (t) r.includes("$now$") && (r = r.replaceAll("$now$", Date.now())), r.includes("$currentDate$") && (r = r.replaceAll("$currentDate$", `${Date()}`)), 
            r.includes("$currentISODate$") && (r = r.replaceAll("$currentISODate$", (new Date).toISOString())); else {
                const e = r.toLowerCase(), o = /^("?)(.+)\1$/.exec(e), t = o && o[2] || e;
                if (!1 === n.includes(t)) {
                    if (!1 === /^\d+$/.test(t)) return;
                    if (parseInt(t, 10) > 32767) return;
                }
            }
            try {
                const t = self[`${o}Storage`];
                if ("$remove$" === r) {
                    const r = function() {
                        if (e.safeSelf) return e.safeSelf;
                        const o = globalThis, t = {
                            Array_from: Array.from,
                            Error: o.Error,
                            Function_toStringFn: o.Function.prototype.toString,
                            Function_toString: e => t.Function_toStringFn.call(e),
                            Math_floor: Math.floor,
                            Math_max: Math.max,
                            Math_min: Math.min,
                            Math_random: Math.random,
                            Object: Object,
                            Object_defineProperty: Object.defineProperty.bind(Object),
                            Object_fromEntries: Object.fromEntries.bind(Object),
                            Object_getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor.bind(Object),
                            RegExp: o.RegExp,
                            RegExp_test: o.RegExp.prototype.test,
                            RegExp_exec: o.RegExp.prototype.exec,
                            Request_clone: o.Request.prototype.clone,
                            XMLHttpRequest: o.XMLHttpRequest,
                            addEventListener: o.EventTarget.prototype.addEventListener,
                            removeEventListener: o.EventTarget.prototype.removeEventListener,
                            fetch: o.fetch,
                            JSON: o.JSON,
                            JSON_parseFn: o.JSON.parse,
                            JSON_stringifyFn: o.JSON.stringify,
                            JSON_parse: (...e) => t.JSON_parseFn.call(t.JSON, ...e),
                            JSON_stringify: (...e) => t.JSON_stringifyFn.call(t.JSON, ...e),
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
                            initPattern(e, o = {}) {
                                if ("" === e) return {
                                    matchAll: !0
                                };
                                const t = !0 !== o.canNegate || !1 === e.startsWith("!");
                                !1 === t && (e = e.slice(1));
                                const c = /^\/(.+)\/([gimsu]*)$/.exec(e);
                                return null !== c ? {
                                    re: new this.RegExp(c[1], c[2] || o.flags),
                                    expect: t
                                } : void 0 !== o.flags ? {
                                    re: new this.RegExp(this.escapeRegexChars(e), o.flags),
                                    expect: t
                                } : {
                                    pattern: e,
                                    expect: t
                                };
                            },
                            testPattern(e, o) {
                                return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, o) === e.expect : o.includes(e.pattern) === e.expect);
                            },
                            patternToRegex(e, o, t = !1) {
                                if ("" === e) return /^/;
                                const c = /^\/(.+)\/([gimsu]*)$/.exec(e);
                                if (null === c) {
                                    const c = this.escapeRegexChars(e);
                                    return new RegExp(t ? `^${c}$` : c, o);
                                }
                                try {
                                    return new RegExp(c[1], c[2] || void 0);
                                } catch (e) {}
                                return /^/;
                            },
                            getExtraArgs(e, o = 0) {
                                const t = e.slice(o).reduce(((e, o, t, c) => {
                                    if (0 == (1 & t)) {
                                        const o = c[t + 1], r = /^\d+$/.test(o) ? parseInt(o, 10) : o;
                                        e.push([ c[t], r ]);
                                    }
                                    return e;
                                }), []);
                                return this.Object_fromEntries(t);
                            },
                            onIdle: (e, t) => o.requestIdleCallback ? o.requestIdleCallback(e, t) : o.requestAnimationFrame(e)
                        };
                        if (e.safeSelf = t, void 0 === e.bcSecret) return t;
                        const c = new o.BroadcastChannel(e.bcSecret);
                        let r = [];
                        return t.logLevel = e.logLevel || 1, t.sendToLogger = (e, ...o) => {
                            if (0 === o.length) return;
                            const t = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
                            if (void 0 === r) return c.postMessage({
                                what: "messageToLogger",
                                type: e,
                                text: t
                            });
                            r.push({
                                type: e,
                                text: t
                            });
                        }, c.onmessage = e => {
                            switch (e.data) {
                              case "iamready!":
                                if (void 0 === r) break;
                                r.forEach((({type: e, text: o}) => c.postMessage({
                                    what: "messageToLogger",
                                    type: e,
                                    text: o
                                }))), r = void 0;
                                break;

                              case "setScriptletLogLevelToOne":
                                t.logLevel = 1;
                                break;

                              case "setScriptletLogLevelToTwo":
                                t.logLevel = 2;
                            }
                        }, c.postMessage("areyouready?"), t;
                    }().patternToRegex(c, void 0, !0), n = [];
                    for (let e = 0, o = t.length; e < o; e++) {
                        const o = t.key(e);
                        r.test(o) && n.push(o);
                    }
                    for (const e of n) t.removeItem(e);
                } else t.setItem(c, `${r}`);
            } catch (e) {}
        }("local", !0, o, t);
    }
    const i = [];
    try {
        i.push(...document.location.hostname.split("."));
    } catch (e) {}
    const a = i.length;
    if (0 === a) return;
    const s = new Set, l = [];
    if (0 !== r.size) {
        for (let e = 0; e < a; e++) {
            const o = i.slice(e).join("."), t = r.get(o);
            t && l.push(...t);
        }
        r.clear();
    }
    if (0 !== t.size) {
        const e = e => {
            let o = t.get(e);
            if (void 0 !== o) {
                "number" == typeof o && (o = [ o ]);
                for (const e of o) l.includes(e) || s.add(e);
            }
        };
        for (let o = 0; o < a; o++) e(i.slice(o).join("."));
        e("*"), t.clear();
    }
    if (0 !== c.size) {
        const e = a - 1;
        for (let o = 0; o < e; o++) for (let t = e; t > o; t--) {
            const e = i.slice(o, t).join(".");
            let r = c.get(e);
            if (void 0 !== r) {
                "number" == typeof r && (r = [ r ]);
                for (const e of r) l.includes(e) || s.add(e);
            }
        }
        c.clear();
    }
    for (const e of s) try {
        n(...o[e]);
    } catch (e) {}
    o.length = 0;
}();