"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "jQuery", "adblockdetect" ], [ "document.onkeydown", "e" ], [ "document.onkeypress" ], [ "frames", "oncontextmenu" ], [ "jQuery", "contextmenu" ], [ "disableEnterKey" ], [ "document.ondragstart" ], [ "$", "banner_loader" ], [ "advads_passive_placements" ], [ "show_msg" ], [ "$", "shuffle" ], [ "checkCampaignCookie" ], [ "$", "e.preventDefault" ], [ "document.oncontextmenu" ], [ "monsterinsights_frontend" ] ], n = new Map([ [ "affarsstaden.se", 0 ], [ "byggipedia.se", [ 1, 2, 3, 4 ] ], [ "discoveringtheplanet.com", [ 5, 6 ] ], [ "evertiq.se", 7 ], [ "hejaolika.se", 8 ], [ "medibok.se", 9 ], [ "nasdaqomxnordic.com", 10 ], [ "sakochliv.se", 11 ], [ "skrattsajten.com", 12 ], [ "norpan.se", 12 ], [ "spelhubben.se", 13 ], [ "husbilsplats.se", 13 ], [ "zeinaskitchen.se", 14 ], [ "trafiksakerhet.se", 14 ], [ "boktugg.se", 14 ], [ "lakartidningen.se", 14 ], [ "villalivet.se", 14 ], [ "matsafari.nu", 14 ], [ "forexgruppen.se", 14 ], [ "fastighetsvarlden.se", 14 ] ]), r = new Map([]), o = new Map([]);
        function s(...t) {
            !function(e) {
                if (document.documentElement) return void e();
                const t = new MutationObserver((() => {
                    t.disconnect(), e();
                }));
                t.observe(document, {
                    childList: !0
                });
            }((() => {
                !function(t = "", n = "", r = "") {
                    if ("string" != typeof t) return;
                    if ("" === t) return;
                    const o = c(), s = o.makeLogPrefix("abort-current-script", t, n, r), i = o.patternToRegex(n), a = o.patternToRegex(r), l = o.getExtraArgs(Array.from(arguments), 3), u = document.currentScript, f = t.split(".");
                    let g, p, d = window;
                    for (;g = f.shift(), 0 !== f.length && g in d != 0; ) if (d = d[g], d instanceof Object == 0) return;
                    let h = Object.getOwnPropertyDescriptor(d, g);
                    h instanceof Object != 0 && h.get instanceof Function != 0 || (p = d[g], h = void 0), 
                    function(t) {
                        if (t instanceof Object == 0) return !1;
                        e.canDebug && t.debug;
                    }(l);
                    const m = function() {
                        const e = c(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), n = self.onerror;
                        return self.onerror = function(e, ...r) {
                            return !("string" != typeof e || !e.includes(t)) || (n instanceof Function ? n.call(this, e, ...r) : void 0);
                        }.bind(), t;
                    }(), b = new WeakMap, v = e => {
                        let t = e.textContent;
                        if ("" !== t.trim()) return t;
                        if (b.has(e)) return b.get(e);
                        const [, n, r] = /^data:([^,]*),(.+)$/.exec(e.src.trim()) || [ "", "", "" ];
                        try {
                            t = !0 === n.endsWith(";base64") ? self.atob(r) : self.decodeURIComponent(r);
                        } catch (e) {}
                        return b.set(e, t), t;
                    }, x = () => {
                        const e = document.currentScript;
                        if (e instanceof HTMLScriptElement == 0) return;
                        if (e === u) return;
                        if ("" !== r && !1 === a.test(e.src)) return;
                        o.logLevel > 1 && "" !== r && o.uboLog(s, `Matched src\n${e.src}`);
                        const t = v(e);
                        if (!1 !== i.test(t)) throw o.logLevel > 1 && o.uboLog(s, `Matched text\n${t}`), 
                        o.uboLog(s, "Aborted"), new ReferenceError(m);
                    };
                    try {
                        Object.defineProperty(d, g, {
                            get: function() {
                                return x(), h instanceof Object ? h.get.call(d) : p;
                            },
                            set: function(e) {
                                x(), h instanceof Object ? h.set.call(d, e) : p = e;
                            }
                        });
                    } catch (e) {
                        o.uboErr(s, `Error: ${e}`);
                    }
                }(...t);
            }));
        }
        function c() {
            if (e.safeSelf) return e.safeSelf;
            const t = globalThis, n = {
                Array_from: Array.from,
                Error: t.Error,
                Function_toStringFn: t.Function.prototype.toString,
                Function_toString: e => n.Function_toStringFn.call(e),
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
                JSON_parse: (...e) => n.JSON_parseFn.call(n.JSON, ...e),
                JSON_stringify: (...e) => n.JSON_stringifyFn.call(n.JSON, ...e),
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
                    const n = !0 !== t.canNegate || !1 === e.startsWith("!");
                    !1 === n && (e = e.slice(1));
                    const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== r ? {
                        re: new this.RegExp(r[1], r[2] || t.flags),
                        expect: n
                    } : void 0 !== t.flags ? {
                        re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                        expect: n
                    } : {
                        pattern: e,
                        expect: n
                    };
                },
                testPattern(e, t) {
                    return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
                },
                patternToRegex(e, t, n = !1) {
                    if ("" === e) return /^/;
                    const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === r) {
                        const r = this.escapeRegexChars(e);
                        return new RegExp(n ? `^${r}$` : r, t);
                    }
                    try {
                        return new RegExp(r[1], r[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const n = e.slice(t).reduce(((e, t, n, r) => {
                        if (0 == (1 & n)) {
                            const t = r[n + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ r[n], o ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(n);
                },
                onIdle: (e, n) => t.requestIdleCallback ? t.requestIdleCallback(e, n) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = n, void 0 === e.bcSecret) return n;
            const r = new t.BroadcastChannel(e.bcSecret);
            let o = [];
            return n.logLevel = e.logLevel || 1, n.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === o) return r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: n
                });
                o.push({
                    type: e,
                    text: n
                });
            }, r.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: e, text: t}) => r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), o = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    n.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    n.logLevel = 2;
                }
            }, r.postMessage("areyouready?"), n;
        }
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = i.length;
        if (0 === a) return;
        const l = new Set, u = [];
        if (0 !== o.size) {
            for (let e = 0; e < a; e++) {
                const t = i.slice(e).join("."), n = o.get(t);
                n && u.push(...n);
            }
            o.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) u.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(i.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== r.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = i.slice(t, n).join(".");
                let o = r.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) u.includes(e) || l.add(e);
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
        let n, r;
        try {
            t.uBOL_abortCurrentScript = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_abortCurrentScript);
            r = t.URL.createObjectURL(o);
            const s = t.document;
            n = s.createElement("script"), n.async = !1, n.src = r, (s.head || s.documentElement || s).append(n);
        } catch (e) {}
        r && (n && n.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_abortCurrentScript;
    }
})();