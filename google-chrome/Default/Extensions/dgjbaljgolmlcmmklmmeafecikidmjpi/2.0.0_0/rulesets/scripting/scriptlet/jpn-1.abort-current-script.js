"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "addEventListener", "AdBlock" ], [ "onload", "google_esf" ], [ "atob", "/documentEl[\\s\\S]*?_0x/" ], [ "onload", "adsCount" ], [ "navigator.brave" ], [ "document.getElementById", "_0x" ], [ "document.querySelector", "_0x" ], [ "jQuery", "decodeURIComponent" ], [ "Math.floor", "amazon" ], [ "document.createElement", "overview" ], [ "$", "google_ads_iframe_" ], [ "onload", "puHref" ], [ "document.referrer", "gmo_bb" ], [ "document.write", "LinkURL" ], [ "document.currentScript", "insertAdjacentHTML" ], [ "jQuery", "floatingAd" ], [ "tag", "Math.random" ], [ "addEventListener", "style.display" ], [ "jmp", "Math" ], [ "document.getElementById", "lists" ], [ "document.write", "sitejack" ], [ "__htapop" ] ], o = new Map([ [ "bm.best-hit.tv", 0 ], [ "h178.com", 0 ], [ "qa.crefan.jp", 1 ], [ "ssbsblg.blogspot.com", 2 ], [ "blog-and-destroy.com", 3 ], [ "musenboya.com", 4 ], [ "kledgeb.blogspot.com", 5 ], [ "connect.coron.tech", 7 ], [ "blog.livedoor.jp", [ 8, 15, 18, 20 ] ], [ "erommd-street.com", 9 ], [ "ac-illust.com", 10 ], [ "photo-ac.com", 10 ], [ "javple.com", 11 ], [ "realsound.jp", 12 ], [ "h1g.jp", 12 ], [ "russianbeauties.jp", 13 ], [ "agora-web.jp", 14 ], [ "2chblog.jp", 15 ], [ "yugioh-starlight.com", 15 ], [ "kijomatomelog.com", 15 ], [ "gundamlog.com", 15 ], [ "doorblog.jp", 15 ], [ "digital-thread.com", 15 ], [ "livedoor.blog", 15 ], [ "blog.jp", 15 ], [ "majikichi.com", 16 ], [ "xn--gmq92kd2rm1kx34a.com", 17 ], [ "dtiblog.com", 18 ], [ "momoiroadult.com", 19 ], [ "avgle.com", 21 ] ]), r = new Map([ [ "manga1001", 6 ], [ "javmix", 17 ] ]), n = new Map([]);
        function c(...t) {
            !function(e) {
                if (document.documentElement) return void e();
                const t = new MutationObserver((() => {
                    t.disconnect(), e();
                }));
                t.observe(document, {
                    childList: !0
                });
            }((() => {
                !function(t = "", o = "", r = "") {
                    if ("string" != typeof t) return;
                    if ("" === t) return;
                    const n = s(), c = n.makeLogPrefix("abort-current-script", t, o, r), i = n.patternToRegex(o), a = n.patternToRegex(r), l = n.getExtraArgs(Array.from(arguments), 3), g = document.currentScript, u = t.split(".");
                    let d, p, f = window;
                    for (;d = u.shift(), 0 !== u.length && d in f != 0; ) if (f = f[d], f instanceof Object == 0) return;
                    let m = Object.getOwnPropertyDescriptor(f, d);
                    m instanceof Object != 0 && m.get instanceof Function != 0 || (p = f[d], m = void 0), 
                    function(t) {
                        if (t instanceof Object == 0) return !1;
                        e.canDebug && t.debug;
                    }(l);
                    const b = function() {
                        const e = s(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), o = self.onerror;
                        return self.onerror = function(e, ...r) {
                            return !("string" != typeof e || !e.includes(t)) || (o instanceof Function ? o.call(this, e, ...r) : void 0);
                        }.bind(), t;
                    }(), h = new WeakMap, v = e => {
                        let t = e.textContent;
                        if ("" !== t.trim()) return t;
                        if (h.has(e)) return h.get(e);
                        const [, o, r] = /^data:([^,]*),(.+)$/.exec(e.src.trim()) || [ "", "", "" ];
                        try {
                            t = !0 === o.endsWith(";base64") ? self.atob(r) : self.decodeURIComponent(r);
                        } catch (e) {}
                        return h.set(e, t), t;
                    }, y = () => {
                        const e = document.currentScript;
                        if (e instanceof HTMLScriptElement == 0) return;
                        if (e === g) return;
                        if ("" !== r && !1 === a.test(e.src)) return;
                        n.logLevel > 1 && "" !== r && n.uboLog(c, `Matched src\n${e.src}`);
                        const t = v(e);
                        if (!1 !== i.test(t)) throw n.logLevel > 1 && n.uboLog(c, `Matched text\n${t}`), 
                        n.uboLog(c, "Aborted"), new ReferenceError(b);
                    };
                    try {
                        Object.defineProperty(f, d, {
                            get: function() {
                                return y(), m instanceof Object ? m.get.call(f) : p;
                            },
                            set: function(e) {
                                y(), m instanceof Object ? m.set.call(f, e) : p = e;
                            }
                        });
                    } catch (e) {
                        n.uboErr(c, `Error: ${e}`);
                    }
                }(...t);
            }));
        }
        function s() {
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
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = i.length;
        if (0 === a) return;
        const l = new Set, g = [];
        if (0 !== n.size) {
            for (let e = 0; e < a; e++) {
                const t = i.slice(e).join("."), o = n.get(t);
                o && g.push(...o);
            }
            n.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) g.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(i.slice(t).join("."));
            e("*"), o.clear();
        }
        if (0 !== r.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = i.slice(t, o).join(".");
                let n = r.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) g.includes(e) || l.add(e);
                }
            }
            r.clear();
        }
        for (const e of l) try {
            c(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, r;
        try {
            t.uBOL_abortCurrentScript = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_abortCurrentScript);
            r = t.URL.createObjectURL(n);
            const c = t.document;
            o = c.createElement("script"), o.async = !1, o.src = r, (c.head || c.documentElement || c).append(o);
        } catch (e) {}
        r && (o && o.remove(), t.URL.revokeObjectURL(r)), delete t.uBOL_abortCurrentScript;
    }
})();