"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "document.createElement", "pagead2.googlesyndication.com" ], [ "document.dispatchEvent", "/getexoloader/" ], [ "decodeURIComponent", "pagead" ], [ "document.write", "adbyunion" ], [ "document.querySelector", "window.getComputedStyle" ], [ "alert", "typeof(ad)" ], [ "jQuery", "\\u" ], [ "document.writeln", "\\u" ], [ "$", "#adisblock" ], [ "document.getElementById", "/#myModal'\\)\\.modal/" ], [ "setTimeout", "COOKIE_NAME" ], [ "$", "adskilltest" ], [ "document.getElementById", "/!document\\.getElementById\\([\\s\\S]*?\\.style\\.display=/" ], [ "$", "!document.getElementById(btoa" ], [ "eval", "_0x" ], [ "document.write", "_0x" ], [ "jQuery", "injectPops" ], [ "$", "infoid" ], [ "document.write", "document.write(ad);" ], [ "document.write", "tips" ], [ "document.write", '/getCookie[\\s\\S]*?\\("\\\\x/' ], [ "document.write", "/\\.(gif|php)/" ], [ "window.leave" ], [ "$", "popunder" ] ], n = new Map([ [ "bilinovel.com", 0 ], [ "18comic.org", 1 ], [ "18comic.vip", 1 ], [ "18-comic.work", 1 ], [ "vxetable.cn", 2 ], [ "h-ciyuan.com", 3 ], [ "1keydata.com", 4 ], [ "slit.cn", 5 ], [ "jkpan.cc", [ 6, 7 ] ], [ "getrelax.cc", 8 ], [ "poedb.tw", 9 ], [ "bingfeng.tw", 10 ], [ "youranshare.com", 11 ], [ "getitfree.cn", 12 ], [ "pg-wuming.com", 13 ], [ "m.lwxs.com", [ 14, 15 ] ], [ "pornbest.org", 16 ], [ "nunuyy3.org", 17 ], [ "dogfight360.com", 18 ], [ "o8tv.com", 19 ], [ "javlibrary.com", 20 ], [ "wnacg1.cc", 21 ], [ "pixnet.net", 22 ], [ "ggjav.com", 23 ], [ "porn87.com", 23 ] ]), o = new Map([ [ "hentaicomic", 21 ], [ "wnacg", 21 ] ]), r = new Map([]);
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
                !function(t = "", n = "", o = "") {
                    if ("string" != typeof t) return;
                    if ("" === t) return;
                    const r = i(), c = r.makeLogPrefix("abort-current-script", t, n, o), s = r.patternToRegex(n), a = r.patternToRegex(o), l = r.getExtraArgs(Array.from(arguments), 3), u = document.currentScript, g = t.split(".");
                    let d, p, f = window;
                    for (;d = g.shift(), 0 !== g.length && d in f != 0; ) if (f = f[d], f instanceof Object == 0) return;
                    let m = Object.getOwnPropertyDescriptor(f, d);
                    m instanceof Object != 0 && m.get instanceof Function != 0 || (p = f[d], m = void 0), 
                    function(t) {
                        if (t instanceof Object == 0) return !1;
                        e.canDebug && t.debug;
                    }(l);
                    const h = function() {
                        const e = i(), t = String.fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36), n = self.onerror;
                        return self.onerror = function(e, ...o) {
                            return !("string" != typeof e || !e.includes(t)) || (n instanceof Function ? n.call(this, e, ...o) : void 0);
                        }.bind(), t;
                    }(), b = new WeakMap, y = e => {
                        let t = e.textContent;
                        if ("" !== t.trim()) return t;
                        if (b.has(e)) return b.get(e);
                        const [, n, o] = /^data:([^,]*),(.+)$/.exec(e.src.trim()) || [ "", "", "" ];
                        try {
                            t = !0 === n.endsWith(";base64") ? self.atob(o) : self.decodeURIComponent(o);
                        } catch (e) {}
                        return b.set(e, t), t;
                    }, v = () => {
                        const e = document.currentScript;
                        if (e instanceof HTMLScriptElement == 0) return;
                        if (e === u) return;
                        if ("" !== o && !1 === a.test(e.src)) return;
                        r.logLevel > 1 && "" !== o && r.uboLog(c, `Matched src\n${e.src}`);
                        const t = y(e);
                        if (!1 !== s.test(t)) throw r.logLevel > 1 && r.uboLog(c, `Matched text\n${t}`), 
                        r.uboLog(c, "Aborted"), new ReferenceError(h);
                    };
                    try {
                        Object.defineProperty(f, d, {
                            get: function() {
                                return v(), m instanceof Object ? m.get.call(f) : p;
                            },
                            set: function(e) {
                                v(), m instanceof Object ? m.set.call(f, e) : p = e;
                            }
                        });
                    } catch (e) {
                        r.uboErr(c, `Error: ${e}`);
                    }
                }(...t);
            }));
        }
        function i() {
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
                    const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== o ? {
                        re: new this.RegExp(o[1], o[2] || t.flags),
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
                    const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === o) {
                        const o = this.escapeRegexChars(e);
                        return new RegExp(n ? `^${o}$` : o, t);
                    }
                    try {
                        return new RegExp(o[1], o[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const n = e.slice(t).reduce(((e, t, n, o) => {
                        if (0 == (1 & n)) {
                            const t = o[n + 1], r = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ o[n], r ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(n);
                },
                onIdle: (e, n) => t.requestIdleCallback ? t.requestIdleCallback(e, n) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = n, void 0 === e.bcSecret) return n;
            const o = new t.BroadcastChannel(e.bcSecret);
            let r = [];
            return n.logLevel = e.logLevel || 1, n.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === r) return o.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: n
                });
                r.push({
                    type: e,
                    text: n
                });
            }, o.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === r) break;
                    r.forEach((({type: e, text: t}) => o.postMessage({
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
            }, o.postMessage("areyouready?"), n;
        }
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = s.length;
        if (0 === a) return;
        const l = new Set, u = [];
        if (0 !== r.size) {
            for (let e = 0; e < a; e++) {
                const t = s.slice(e).join("."), n = r.get(t);
                n && u.push(...n);
            }
            r.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) u.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(s.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== o.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = s.slice(t, n).join(".");
                let r = o.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) u.includes(e) || l.add(e);
                }
            }
            o.clear();
        }
        for (const e of l) try {
            c(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, o;
        try {
            t.uBOL_abortCurrentScript = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_abortCurrentScript);
            o = t.URL.createObjectURL(r);
            const c = t.document;
            n = c.createElement("script"), n.async = !1, n.src = o, (c.head || c.documentElement || c).append(n);
        } catch (e) {}
        o && (n && n.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_abortCurrentScript;
    }
})();