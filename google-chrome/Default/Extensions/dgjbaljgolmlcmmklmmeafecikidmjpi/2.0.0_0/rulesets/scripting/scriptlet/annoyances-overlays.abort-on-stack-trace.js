"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "encodeURIComponent", "inlineScript" ], [ "String.prototype.charCodeAt", "ai_" ], [ "Drupal.CTools.Modal.show", "/(^(?!.*(injectedScript|makeProxy).*))/" ], [ "getSelection", "quoty-public" ], [ "document.createElement", "createAdblockFallbackSubscribeToProtopageAdDiv" ], [ "document.getElementById", "nouplaod" ], [ "document.oncontextmenu" ], [ "Object", "/(?=^(?!.*(jquery|inlineScript)))/" ], [ "document.createElement", "admiral" ], [ "eval", "build.js" ], [ "navigator.userAgent", "phimv" ], [ "console.clear" ], [ "document.addEventListener", "preventDeleteDialog" ], [ "Promise", "/isEnable|isOpen/" ] ], o = new Map([ [ "secondlifetranslations.com", 0 ], [ "waves4you.com", 1 ], [ "timeshighereducation.com", 2 ], [ "ilovefreesoftware.com", 3 ], [ "protopage.com", 4 ], [ "fantasytagtree.com", 5 ], [ "jamilacuisine.ro", [ 6, 7 ] ], [ "golfdigest.com", 8 ], [ "ophim.vip", 10 ], [ "animesuge.to", 11 ], [ "aniwave.to", 11 ], [ "bflix.io", 11 ], [ "f2movies.ru", 11 ], [ "hdtoday.so", 11 ], [ "hurawatch.bz", 11 ], [ "movies2watch.ru", 11 ], [ "putlockernew.vc", 11 ], [ "swatchseries.ru", 11 ], [ "vidplay.site", 11 ], [ "vidstream.pro", 11 ], [ "mcloud.to", 11 ], [ "team-octavi.com", 12 ], [ "embtaku.pro", 13 ] ]), r = new Map([ [ "pobre", 9 ], [ "flixhq", 11 ], [ "fmovies", 11 ], [ "fmoviesz", 11 ] ]), n = new Map([]);
        function i(e = "", t = "") {
            if ("string" != typeof e) return;
            const o = a(), r = o.initPattern(t, {
                canNegate: !0
            }), n = o.getExtraArgs(Array.from(arguments), 2);
            "" === t && (n.log = "all");
            const i = function(e, t) {
                const o = t.indexOf(".");
                if (-1 === o) {
                    let o = e[t];
                    return void Object.defineProperty(e, t, {
                        get: function() {
                            if (s(r, n.log)) throw new ReferenceError(c());
                            return o;
                        },
                        set: function(e) {
                            if (s(r, n.log)) throw new ReferenceError(c());
                            o = e;
                        }
                    });
                }
                const a = t.slice(0, o);
                let l = e[a];
                if (t = t.slice(o + 1), l) return void i(l, t);
                const p = Object.getOwnPropertyDescriptor(e, a);
                p && void 0 !== p.set || Object.defineProperty(e, a, {
                    get: function() {
                        return l;
                    },
                    set: function(e) {
                        l = e, e instanceof Object && i(e, t);
                    }
                });
            }, l = window;
            i(l, e);
        }
        function c() {
            const e = a(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), o = self.onerror;
            return self.onerror = function(e, ...r) {
                return !("string" != typeof e || !e.includes(t)) || (o instanceof Function ? o.call(this, e, ...r) : void 0);
            }.bind(), t;
        }
        function s(e, t = "") {
            const o = a(), r = c(), n = new o.Error(r), i = new URL(self.location.href);
            i.hash = "";
            const s = /(.*?@)?(\S+)(:\d+):\d+\)?$/, l = [];
            for (let e of n.stack.split(/[\n\r]+/)) {
                if (e.includes(r)) continue;
                e = e.trim();
                const t = o.RegExp_exec.call(s, e);
                if (null === t) continue;
                let n = t[2];
                n.startsWith("(") && (n = n.slice(1)), n === i.href ? n = "inlineScript" : n.startsWith("<anonymous>") && (n = "injectedScript");
                let c = void 0 !== t[1] ? t[1].slice(0, -1) : e.slice(0, t.index).trim();
                c.startsWith("at") && (c = c.slice(2).trim());
                let a = t[3];
                l.push(" " + `${c} ${n}${a}:1`.trim());
            }
            l[0] = "stackDepth:" + (l.length - 1);
            const p = l.join("\t"), u = !0 !== e.matchAll && o.testPattern(e, p);
            return ("all" === t || "match" === t && u || "nomatch" === t && !u) && o.uboLog(p.replace(/\t/g, "\n")), 
            u;
        }
        function a() {
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
        }
        const l = [];
        try {
            l.push(...document.location.hostname.split("."));
        } catch (e) {}
        const p = l.length;
        if (0 === p) return;
        const u = new Set, f = [];
        if (0 !== n.size) {
            for (let e = 0; e < p; e++) {
                const t = l.slice(e).join("."), o = n.get(t);
                o && f.push(...o);
            }
            n.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) f.includes(e) || u.add(e);
                }
            };
            for (let t = 0; t < p; t++) e(l.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== r.size) {
            const e = p - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = l.slice(t, o).join(".");
                let n = r.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) f.includes(e) || u.add(e);
                }
            }
            r.clear();
        }
        for (const e of u) try {
            i(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, r;
        try {
            t.uBOL_abortOnStackTrace = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_abortOnStackTrace);
            r = t.URL.createObjectURL(n);
            const i = t.document;
            o = i.createElement("script"), o.async = !1, o.src = r, (i.head || i.documentElement || i).append(o);
        } catch (e) {}
        r && (o && o.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_abortOnStackTrace;
    }
})();