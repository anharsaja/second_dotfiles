"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "autoplay players.*.ga acl.ads players.*.autoplay" ], [ "payload.ads campaigns.*" ], [ "autoplay" ] ], n = new Map([ [ "lwcdn.com", 0 ], [ "alingsastidning.se", 0 ], [ "bohuslaningen.se", 0 ], [ "gp.se", 0 ], [ "hallandsposten.se", 0 ], [ "hn.se", 0 ], [ "stromstadstidning.se", 0 ], [ "ttela.se", 0 ], [ "kungsbackaposten.se", 0 ], [ "kungalvsposten.se", 0 ], [ "molndalsposten.se", 0 ], [ "partilletidning.se", 0 ], [ "sttidningen.se", 0 ], [ "markposten.se", 0 ], [ "harrydaposten.se", 0 ], [ "matspar.se", 1 ], [ "youplay.se", 2 ], [ "expressen.se", 2 ], [ "di.se", 2 ], [ "nsk.se", 2 ], [ "skd.se", 2 ], [ "nvp.se", 2 ], [ "barometern.se", 2 ], [ "blt.se", 2 ], [ "bt.se", 2 ], [ "kristianstadsbladet.se", 2 ], [ "olandsbladet.se", 2 ], [ "smp.se", 2 ], [ "sydostran.se", 2 ], [ "trelleborgsallehanda.se", 2 ], [ "ut.se", 2 ], [ "ystadsallehanda.se", 2 ], [ "kalmarposten.se", 2 ], [ "corren.se", 2 ], [ "folkbladet.se", 2 ], [ "mvt.se", 2 ], [ "nt.se", 2 ], [ "vt.se", 2 ], [ "klt.nu", 2 ], [ "vimmerbytidning.se", 2 ], [ "kuriren.nu", 2 ], [ "nsd.se", 2 ], [ "norran.se", 2 ], [ "pt.se", 2 ], [ "ekuriren.se", 2 ], [ "strengnastidning.se", 2 ], [ "kkuriren.se", 2 ], [ "sn.se", 2 ], [ "eposten.se", 2 ], [ "unt.se", 2 ], [ "helagotland.se", 2 ], [ "kindaposten.se", 2 ], [ "folkbladet.nu", 2 ], [ "vk.se", 2 ], [ "vasterbottningen.se", 2 ], [ "mellanbygden.nu", 2 ], [ "nordsverige.se", 2 ], [ "lokaltidningen.nu", 2 ], [ "vasterastidning.se", 2 ], [ "mitti.se", 2 ], [ "thelocal.se", 2 ], [ "byrum.se", 2 ], [ "sverigespringer.se", 2 ], [ "recept.se", 2 ], [ "viivilla.se", 2 ], [ "mestmotor.se", 2 ], [ "babyhjalp.se", 2 ], [ "fragbite.se", 2 ], [ "ibnytt.se", 2 ], [ "realtid.se", 2 ], [ "cafe.se", 2 ], [ "kingmagazine.se", 2 ], [ "vxonews.se", 2 ], [ "vaxjobladet.se", 2 ], [ "alekuriren.se", 2 ], [ "nyheter24.se", 2 ], [ "svenskgolf.se", 2 ], [ "golfing.se", 2 ], [ "gotlandjustnu.se", 2 ], [ "familjeliv.se", 2 ], [ "praktisktbatagande.se", 2 ], [ "norrahalland.se", 2 ], [ "lokalti.se", 2 ], [ "lchfarkivet.se", 2 ], [ "alltforforaldrar.se", 2 ], [ "idrottensaffarer.se", 2 ], [ "vf.se", 2 ], [ "hjotidning.se", 2 ], [ "kt.se", 2 ], [ "kt-kuriren.se", 2 ], [ "sla.se", 2 ], [ "mariestadstidningen.se", 2 ], [ "filipstadstidning.se", 2 ], [ "fryksdalsbygden.se", 2 ], [ "nwt.se", 2 ], [ "arvikanyheter.se", 2 ], [ "nkp.se", 2 ], [ "saffletidningen.se", 2 ], [ "provinstidningen.se", 2 ], [ "dalslanningen.se", 2 ], [ "nlt.se", 2 ] ]), s = new Map([]), r = new Map([]);
        function o(e = "", t = "", n = "") {
            const s = a(), r = s.makeLogPrefix("json-prune", e, t, n), o = s.initPattern(n, {
                canNegate: !0
            }), l = s.getExtraArgs(Array.from(arguments), 3);
            JSON.parse = new Proxy(JSON.parse, {
                apply: function(n, a, c) {
                    const f = Reflect.apply(n, a, c);
                    "" === e && s.uboLog(r, s.JSON_stringify(f, null, 2));
                    const g = i(f, e, t, o, l);
                    return void 0 === g ? f : (s.uboLog(r, "Pruned"), s.logLevel > 1 && s.uboLog(r, `After pruning:\n${s.JSON_stringify(g, null, 2)}`), 
                    g);
                }
            });
        }
        function i(e, t, n, s = {
            matchAll: !0
        }, r = {}) {
            if ("string" != typeof t) return;
            const o = "" !== t ? t.split(/ +/) : [], c = 0 !== o.length && "" !== n ? n.split(/ +/) : [];
            if (!0 !== s.matchAll && !1 === function(e, t = "") {
                const n = a(), s = function() {
                    const e = a(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), n = self.onerror;
                    return self.onerror = function(e, ...s) {
                        return !("string" != typeof e || !e.includes(t)) || (n instanceof Function ? n.call(this, e, ...s) : void 0);
                    }.bind(), t;
                }(), r = new n.Error(s), o = new URL(self.location.href);
                o.hash = "";
                const i = /(.*?@)?(\S+)(:\d+):\d+\)?$/, l = [];
                for (let e of r.stack.split(/[\n\r]+/)) {
                    if (e.includes(s)) continue;
                    e = e.trim();
                    const t = n.RegExp_exec.call(i, e);
                    if (null === t) continue;
                    let r = t[2];
                    r.startsWith("(") && (r = r.slice(1)), r === o.href ? r = "inlineScript" : r.startsWith("<anonymous>") && (r = "injectedScript");
                    let a = void 0 !== t[1] ? t[1].slice(0, -1) : e.slice(0, t.index).trim();
                    a.startsWith("at") && (a = a.slice(2).trim());
                    let c = t[3];
                    l.push(" " + `${a} ${r}${c}:1`.trim());
                }
                l[0] = "stackDepth:" + (l.length - 1);
                const c = l.join("\t"), f = !0 !== e.matchAll && n.testPattern(e, c);
                return ("all" === t || "match" === t && f || "nomatch" === t && !f) && n.uboLog(c.replace(/\t/g, "\n")), 
                f;
            }(s, r.logstack)) return;
            if (void 0 === i.mustProcess && (i.mustProcess = (e, t) => {
                for (const n of t) if (!1 === l(e, n)) return !1;
                return !0;
            }), 0 === o.length) return;
            let f = "nomatch";
            if (i.mustProcess(e, c)) for (const t of o) l(e, t, !0) && (f = "match");
            return "match" === f ? e : void 0;
        }
        function a() {
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
                    const s = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== s ? {
                        re: new this.RegExp(s[1], s[2] || t.flags),
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
                    const s = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === s) {
                        const s = this.escapeRegexChars(e);
                        return new RegExp(n ? `^${s}$` : s, t);
                    }
                    try {
                        return new RegExp(s[1], s[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const n = e.slice(t).reduce(((e, t, n, s) => {
                        if (0 == (1 & n)) {
                            const t = s[n + 1], r = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ s[n], r ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(n);
                },
                onIdle: (e, n) => t.requestIdleCallback ? t.requestIdleCallback(e, n) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = n, void 0 === e.bcSecret) return n;
            const s = new t.BroadcastChannel(e.bcSecret);
            let r = [];
            return n.logLevel = e.logLevel || 1, n.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === r) return s.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: n
                });
                r.push({
                    type: e,
                    text: n
                });
            }, s.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === r) break;
                    r.forEach((({type: e, text: t}) => s.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), r = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    n.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    n.logLevel = 2;
                }
            }, s.postMessage("areyouready?"), n;
        }
        function l(e, t, n = !1) {
            let s = e, r = t;
            for (;;) {
                if ("object" != typeof s || null === s) return !1;
                const e = r.indexOf(".");
                if (-1 === e) {
                    if (!1 === n) return s.hasOwnProperty(r);
                    let e = !1;
                    if ("*" === r) for (const t in s) !1 !== s.hasOwnProperty(t) && (delete s[t], e = !0); else s.hasOwnProperty(r) && (delete s[r], 
                    e = !0);
                    return e;
                }
                const t = r.slice(0, e), o = r.slice(e + 1);
                let i = !1;
                if ("[-]" === t && Array.isArray(s)) {
                    let e = s.length;
                    for (;e--; ) !1 !== l(s[e], o) && (s.splice(e, 1), i = !0);
                    return i;
                }
                if ("{-}" === t && s instanceof Object) {
                    for (const e of Object.keys(s)) !1 !== l(s[e], o) && (delete s[e], i = !0);
                    return i;
                }
                if ("[]" === t && Array.isArray(s) || "{}" === t && s instanceof Object || "*" === t && s instanceof Object) {
                    for (const e of Object.keys(s)) !1 !== l(s[e], o, n) && (i = !0);
                    return i;
                }
                if (!1 === s.hasOwnProperty(t)) return !1;
                s = s[t], r = r.slice(e + 1);
            }
        }
        const c = [];
        try {
            c.push(...document.location.hostname.split("."));
        } catch (e) {}
        const f = c.length;
        if (0 === f) return;
        const g = new Set, p = [];
        if (0 !== r.size) {
            for (let e = 0; e < f; e++) {
                const t = c.slice(e).join("."), n = r.get(t);
                n && p.push(...n);
            }
            r.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) p.includes(e) || g.add(e);
                }
            };
            for (let t = 0; t < f; t++) e(c.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== s.size) {
            const e = f - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = c.slice(t, n).join(".");
                let r = s.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) p.includes(e) || g.add(e);
                }
            }
            s.clear();
        }
        for (const e of g) try {
            o(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, s;
        try {
            t.uBOL_jsonPrune = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_jsonPrune);
            s = t.URL.createObjectURL(r);
            const o = t.document;
            n = o.createElement("script"), n.async = !1, n.src = s, (o.head || o.documentElement || o).append(n);
        } catch (e) {}
        s && (n && n.remove(), t.URL.revokeObjectURL(s)), delete t.uBOL_jsonPrune;
    }
})();