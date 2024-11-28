"use strict";

!function() {
    const e = {}, t = [ [ "modalViewed", "true" ] ], r = new Map([ [ "fantasyfootballhub.co.uk", 0 ] ]), o = new Map([]), n = new Map([]);
    function s(t = "", r = "") {
        !function(t = "local", r = !1, o = "", n = "") {
            if ("" === o) return;
            "emptyArr" === n ? n = "[]" : "emptyObj" === n && (n = "{}");
            const s = [ "", "undefined", "null", "false", "true", "on", "off", "yes", "no", "accept", "reject", "accepted", "rejected", "{}", "[]", '""', "$remove$" ];
            if (r) n.includes("$now$") && (n = n.replaceAll("$now$", Date.now())), n.includes("$currentDate$") && (n = n.replaceAll("$currentDate$", `${Date()}`)), 
            n.includes("$currentISODate$") && (n = n.replaceAll("$currentISODate$", (new Date).toISOString())); else {
                const e = n.toLowerCase(), t = /^("?)(.+)\1$/.exec(e), r = t && t[2] || e;
                if (!1 === s.includes(r)) {
                    if (!1 === /^\d+$/.test(r)) return;
                    if (parseInt(r, 10) > 32767) return;
                }
            }
            try {
                const r = self[`${t}Storage`];
                if ("$remove$" === n) {
                    const n = function() {
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
                    }().patternToRegex(o, void 0, !0), s = [];
                    for (let e = 0, t = r.length; e < t; e++) {
                        const t = r.key(e);
                        n.test(t) && s.push(t);
                    }
                    for (const e of s) r.removeItem(e);
                } else r.setItem(o, `${n}`);
            } catch (e) {}
        }("session", !1, t, r);
    }
    const c = [];
    try {
        c.push(...document.location.hostname.split("."));
    } catch (e) {}
    const i = c.length;
    if (0 === i) return;
    const a = new Set, l = [];
    if (0 !== n.size) {
        for (let e = 0; e < i; e++) {
            const t = c.slice(e).join("."), r = n.get(t);
            r && l.push(...r);
        }
        n.clear();
    }
    if (0 !== r.size) {
        const e = e => {
            let t = r.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) l.includes(e) || a.add(e);
            }
        };
        for (let t = 0; t < i; t++) e(c.slice(t).join("."));
        e("*"), r.clear();
    }
    if (0 !== o.size) {
        const e = i - 1;
        for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
            const e = c.slice(t, r).join(".");
            let n = o.get(e);
            if (void 0 !== n) {
                "number" == typeof n && (n = [ n ]);
                for (const e of n) l.includes(e) || a.add(e);
            }
        }
        o.clear();
    }
    for (const e of a) try {
        s(...t[e]);
    } catch (e) {}
    t.length = 0;
}();