"use strict";

!function() {
    const e = {}, t = [ [ "force_ad", "2" ], [ "visited", "1" ], [ "Ads", "2" ], [ "clicked_ads", "2" ], [ "modal_promo", "1" ], [ "visited", "yes" ], [ "CLI_02_Dxxxxxxxxxxxxxxx", "1" ] ], o = new Map([ [ "techdiniz.com", 0 ], [ "trueliketop.org", 0 ], [ "sabornutritivo.com", 1 ], [ "financasdeouro.com", 1 ], [ "guiacripto.online", 1 ], [ "guiasaude.info", 2 ], [ "1i1.in", 3 ], [ "estacio.br", 4 ], [ "megacurioso.net", 5 ], [ "receitasoncaseiras.online", 5 ], [ "nutricaohoje.website", 5 ], [ "automotivocarros.com", 6 ], [ "portecnologia.com", 6 ], [ "cartaocreditoplatinum.org", 6 ] ]), r = new Map([]), n = new Map([]);
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
        }(), s = n.makeLogPrefix("set-cookie", t, o, r), c = o.toLowerCase(), a = /^("?)(.+)\1$/.exec(c), l = a && a[2] || c;
        if (!1 === [ "accept", "reject", "accepted", "rejected", "notaccepted", "allow", "deny", "allowed", "disallow", "enable", "disable", "enabled", "disabled", "ok", "on", "off", "true", "t", "false", "f", "yes", "y", "no", "n", "necessary", "required", "approved", "disapproved" ].includes(l)) {
            if (!1 === /^\d+$/.test(l)) return;
            if (parseInt(o, 10) > 32767) return;
        }
        const d = function(e = !1, t = "", o = "", r = "", n = "", s = {}) {
            !1 === e && /[^!#$%&'*+\-.0-9A-Z[\]^_`a-z|~]/.test(t) && (t = encodeURIComponent(t)), 
            /[^ -:<-[\]-~]/.test(o) && (o = encodeURIComponent(o));
            const c = i(t);
            if (void 0 !== c && s.dontOverwrite) return;
            if (c === o && s.reload) return;
            const a = [ t, "=", o ];
            if ("" !== r && a.push("; expires=", r), "" === n ? n = "/" : "none" === n && (n = ""), 
            "" !== n && "/" !== n) return;
            "/" === n && a.push("; path=/"), e && (s.domain && a.push(`; domain=${s.domain}`), 
            a.push("; Secure"));
            try {
                document.cookie = a.join("");
            } catch (e) {}
            const l = i(t) === o;
            return l && s.reload && window.location.reload(), l;
        }(!1, t, o, "", r, n.getExtraArgs(Array.from(arguments), 3));
        d && n.uboLog(s, "Done");
    }
    function i(e = "") {
        for (const t of document.cookie.split(/\s*;\s*/)) {
            const o = t.indexOf("=");
            if (-1 !== o && t.slice(0, o) === e) return t.slice(o + 1).trim();
        }
    }
    const c = [];
    try {
        c.push(...document.location.hostname.split("."));
    } catch (e) {}
    const a = c.length;
    if (0 === a) return;
    const l = new Set, d = [];
    if (0 !== n.size) {
        for (let e = 0; e < a; e++) {
            const t = c.slice(e).join("."), o = n.get(t);
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
        for (let t = 0; t < a; t++) e(c.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== r.size) {
        const e = a - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = c.slice(t, o).join(".");
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
}();