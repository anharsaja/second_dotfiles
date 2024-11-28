"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "data.home.home_timeline_urt.instructions.[].entries.[-].content.itemContent.promotedMetadata", "", "propsToMatch", "url:/Home" ], [ "data.search_by_raw_query.search_timeline.timeline.instructions.[].entries.[-].content.itemContent.promotedMetadata", "", "propsToMatch", "url:/SearchTimeline" ], [ "data.threaded_conversation_with_injections_v2.instructions.[].entries.[-].content.items.[].item.itemContent.promotedMetadata", "", "propsToMatch", "url:/TweetDetail" ], [ "data.user.result.timeline_v2.timeline.instructions.[].entries.[-].content.itemContent.promotedMetadata", "", "propsToMatch", "url:/UserTweets" ] ], r = new Map([ [ "twitter.com", [ 0, 1, 2, 3 ] ], [ "x.com", [ 0, 1, 2, 3 ] ] ]), n = new Map([]), o = new Map([]);
        function s(e = "", t = "") {
            const r = a(), n = r.makeLogPrefix("json-prune-xhr-response", e, t), o = new WeakMap, s = r.getExtraArgs(Array.from(arguments), 2), l = function(e, t = "") {
                const r = a(), n = new Map;
                if (void 0 === e || "" === e) return n;
                const o = {
                    canNegate: !0
                };
                for (const s of e.split(/\s+/)) {
                    const [e, i] = s.split(":");
                    "" !== e && (void 0 !== i ? n.set(e, r.initPattern(i, o)) : "" !== t && n.set(t, r.initPattern(e, o)));
                }
                return n;
            }(s.propsToMatch, "url"), p = r.initPattern(s.stackToMatch || "", {
                canNegate: !0
            });
            self.XMLHttpRequest = class extends self.XMLHttpRequest {
                open(e, t, ...c) {
                    const a = {
                        method: e,
                        url: t
                    };
                    let p = "match";
                    return 0 !== l.size && !1 === i(l, a) && (p = "nomatch"), "match" === p && (r.logLevel > 1 && r.uboLog(n, `Matched optional "propsToMatch", "${s.propsToMatch}"`), 
                    o.set(this, a)), super.open(e, t, ...c);
                }
                get response() {
                    const i = super.response, a = o.get(this);
                    if (void 0 === a) return i;
                    const l = "string" == typeof i ? i.length : void 0;
                    if (a.lastResponseLength !== l && (a.response = void 0, a.lastResponseLength = l), 
                    void 0 !== a.response) return a.response;
                    let f;
                    if ("object" == typeof i) f = i; else if ("string" == typeof i) try {
                        f = r.JSON_parse(i);
                    } catch (e) {}
                    if ("object" != typeof f) return a.response = i;
                    const u = c(f, e, t, p, s);
                    let g;
                    return "object" == typeof u ? (g = "string" == typeof i ? r.JSON_stringify(u) : u, 
                    r.uboLog(n, "Pruned")) : g = i, a.response = g;
                }
                get responseText() {
                    const e = this.response;
                    return "string" != typeof e ? super.responseText : e;
                }
            };
        }
        function i(e, ...t) {
            void 0 === i.extractProperties && (i.extractProperties = (e, t, r) => {
                for (const n of r) void 0 !== e[n] && (t[n] = e[n]);
            });
            const r = a(), n = {}, o = r.Array_from(e.keys());
            for (const e of t) e instanceof Object != 0 && i.extractProperties(e, n, o);
            for (const [t, o] of e) {
                let e = n[t];
                if (void 0 !== e) {
                    if ("string" != typeof e) {
                        try {
                            e = r.JSON_stringify(e);
                        } catch (e) {}
                        if ("string" != typeof e) continue;
                    }
                    if (!r.testPattern(o, e)) return !1;
                }
            }
            return !0;
        }
        function c(e, t, r, n = {
            matchAll: !0
        }, o = {}) {
            if ("string" != typeof t) return;
            const s = "" !== t ? t.split(/ +/) : [], i = 0 !== s.length && "" !== r ? r.split(/ +/) : [];
            if (!0 !== n.matchAll && !1 === function(e, t = "") {
                const r = a(), n = function() {
                    const e = a(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), r = self.onerror;
                    return self.onerror = function(e, ...n) {
                        return !("string" != typeof e || !e.includes(t)) || (r instanceof Function ? r.call(this, e, ...n) : void 0);
                    }.bind(), t;
                }(), o = new r.Error(n), s = new URL(self.location.href);
                s.hash = "";
                const i = /(.*?@)?(\S+)(:\d+):\d+\)?$/, c = [];
                for (let e of o.stack.split(/[\n\r]+/)) {
                    if (e.includes(n)) continue;
                    e = e.trim();
                    const t = r.RegExp_exec.call(i, e);
                    if (null === t) continue;
                    let o = t[2];
                    o.startsWith("(") && (o = o.slice(1)), o === s.href ? o = "inlineScript" : o.startsWith("<anonymous>") && (o = "injectedScript");
                    let a = void 0 !== t[1] ? t[1].slice(0, -1) : e.slice(0, t.index).trim();
                    a.startsWith("at") && (a = a.slice(2).trim());
                    let l = t[3];
                    c.push(" " + `${a} ${o}${l}:1`.trim());
                }
                c[0] = "stackDepth:" + (c.length - 1);
                const l = c.join("\t"), p = !0 !== e.matchAll && r.testPattern(e, l);
                return ("all" === t || "match" === t && p || "nomatch" === t && !p) && r.uboLog(l.replace(/\t/g, "\n")), 
                p;
            }(n, o.logstack)) return;
            if (void 0 === c.mustProcess && (c.mustProcess = (e, t) => {
                for (const r of t) if (!1 === l(e, r)) return !1;
                return !0;
            }), 0 === s.length) return;
            let p = "nomatch";
            if (c.mustProcess(e, i)) for (const t of s) l(e, t, !0) && (p = "match");
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
                    const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== n ? {
                        re: new this.RegExp(n[1], n[2] || t.flags),
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
                    const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === n) {
                        const n = this.escapeRegexChars(e);
                        return new RegExp(r ? `^${n}$` : n, t);
                    }
                    try {
                        return new RegExp(n[1], n[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const r = e.slice(t).reduce(((e, t, r, n) => {
                        if (0 == (1 & r)) {
                            const t = n[r + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ n[r], o ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(r);
                },
                onIdle: (e, r) => t.requestIdleCallback ? t.requestIdleCallback(e, r) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = r, void 0 === e.bcSecret) return r;
            const n = new t.BroadcastChannel(e.bcSecret);
            let o = [];
            return r.logLevel = e.logLevel || 1, r.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const r = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === o) return n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: r
                });
                o.push({
                    type: e,
                    text: r
                });
            }, n.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: e, text: t}) => n.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), o = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    r.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    r.logLevel = 2;
                }
            }, n.postMessage("areyouready?"), r;
        }
        function l(e, t, r = !1) {
            let n = e, o = t;
            for (;;) {
                if ("object" != typeof n || null === n) return !1;
                const e = o.indexOf(".");
                if (-1 === e) {
                    if (!1 === r) return n.hasOwnProperty(o);
                    let e = !1;
                    if ("*" === o) for (const t in n) !1 !== n.hasOwnProperty(t) && (delete n[t], e = !0); else n.hasOwnProperty(o) && (delete n[o], 
                    e = !0);
                    return e;
                }
                const t = o.slice(0, e), s = o.slice(e + 1);
                let i = !1;
                if ("[-]" === t && Array.isArray(n)) {
                    let e = n.length;
                    for (;e--; ) !1 !== l(n[e], s) && (n.splice(e, 1), i = !0);
                    return i;
                }
                if ("{-}" === t && n instanceof Object) {
                    for (const e of Object.keys(n)) !1 !== l(n[e], s) && (delete n[e], i = !0);
                    return i;
                }
                if ("[]" === t && Array.isArray(n) || "{}" === t && n instanceof Object || "*" === t && n instanceof Object) {
                    for (const e of Object.keys(n)) !1 !== l(n[e], s, r) && (i = !0);
                    return i;
                }
                if (!1 === n.hasOwnProperty(t)) return !1;
                n = n[t], o = o.slice(e + 1);
            }
        }
        const p = [];
        try {
            p.push(...document.location.hostname.split("."));
        } catch (e) {}
        const f = p.length;
        if (0 === f) return;
        const u = new Set, g = [];
        if (0 !== o.size) {
            for (let e = 0; e < f; e++) {
                const t = p.slice(e).join("."), r = o.get(t);
                r && g.push(...r);
            }
            o.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) g.includes(e) || u.add(e);
                }
            };
            for (let t = 0; t < f; t++) e(p.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== n.size) {
            const e = f - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = p.slice(t, r).join(".");
                let o = n.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) g.includes(e) || u.add(e);
                }
            }
            n.clear();
        }
        for (const e of u) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, n;
        try {
            t.uBOL_jsonPruneXhrResponse = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_jsonPruneXhrResponse);
            n = t.URL.createObjectURL(o);
            const s = t.document;
            r = s.createElement("script"), r.async = !1, r.src = n, (s.head || s.documentElement || s).append(r);
        } catch (e) {}
        n && (r && r.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_jsonPruneXhrResponse;
    }
})();