"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "adBlockerOn" ], [ "load", "banner-ads" ], [ "load", "detect-modal" ], [ "", "_0x" ], [ "detectAdBlock" ], [ "load", "daadb_get_data" ], [ "DOMContentLoaded", "document.write" ], [ "", "popunder" ], [ "click", "loadXMLDoc" ], [ "mousedown", "touchend" ], [ "load", "/_0x[\\s\\S]*?parentNode[\\s\\S]*?appendChild/" ], [ "DOMContentLoaded", "videoTag" ] ], n = new Map([ [ "canal12.com.sv", 0 ], [ "depor.com", 1 ], [ "softwareany.net", 2 ], [ "xerifetech.com", 3 ], [ "guideautoweb.com", 4 ], [ "elquintobeatle.com", 5 ], [ "empregoestagios.com", 5 ], [ "satcesc.com", 5 ], [ "g37.com.br", 6 ], [ "desenhosanimados.site", 7 ], [ "descargarhentaimf.xyz", 8 ], [ "superflix.net", 9 ], [ "irmaosdotados.net", 10 ], [ "comandotorrents.org", 11 ], [ "lapumia.org", 11 ] ]), o = new Map([]), r = new Map([]);
        function s(t = "", n = "") {
            const o = a(), r = o.getExtraArgs(Array.from(arguments), 2), s = o.makeLogPrefix("prevent-addEventListener", t, n), c = o.patternToRegex(t, void 0, !0), i = o.patternToRegex(n), l = (function(t) {
                if (t instanceof Object == 0) return !1;
                e.canDebug && t.debug;
            }(r), r.elements || void 0), d = e => {
                if (e instanceof Window) return "window";
                if (e instanceof Document) return "document";
                if (e instanceof Element == 0) return "?";
                const t = [];
                "" !== e.id && t.push(`#${CSS.escape(e.id)}`);
                for (let n = 0; n < e.classList.length; n++) t.push(`.${CSS.escape(e.classList.item(n))}`);
                for (let n = 0; n < e.attributes.length; n++) {
                    const o = e.attributes.item(n);
                    "id" !== o.name && "class" !== o.name && t.push(`[${CSS.escape(o.name)}="${o.value}"]`);
                }
                return t.join("");
            }, p = (e, t, n) => {
                const r = o.RegExp_test.call(c, t), s = o.RegExp_test.call(i, n), a = r && s;
                return (!a || void 0 === l || !1 !== (!!((d = e) && d.matches && d.matches(l)) || Array.from(document.querySelectorAll(l)).includes(d))) && a;
                var d;
            };
            !function(e, t) {
                const n = e => {
                    const t = {
                        loading: 1,
                        interactive: 2,
                        end: 2,
                        2: 2,
                        complete: 3,
                        idle: 3,
                        3: 3
                    }, n = Array.isArray(e) ? e : [ e ];
                    for (const e of n) {
                        const n = `${e}`;
                        if (!1 !== t.hasOwnProperty(n)) return t[n];
                    }
                    return 0;
                }, o = n(t);
                if (n(document.readyState) >= o) return void e();
                const s = a(), c = [ "readystatechange", () => {
                    n(document.readyState) < o || (e(), s.removeEventListener.apply(document, c));
                }, {
                    capture: !0
                } ];
                s.addEventListener.apply(document, c);
            }((() => {
                (() => {
                    const e = {
                        apply: function(e, r, a) {
                            let c, i;
                            try {
                                c = String(a[0]), "function" == typeof a[1] ? i = String(o.Function_toString(a[1])) : "object" == typeof a[1] && null !== a[1] ? "function" == typeof a[1].handleEvent && (i = String(o.Function_toString(a[1].handleEvent))) : i = String(a[1]);
                            } catch (e) {}
                            if ("" === t && "" === n) o.uboLog(s, `Called: ${c}\n${i}\n${d(r)}`); else if (p(r, c, i)) return o.uboLog(s, `Prevented: ${c}\n${i}\n${d(r)}`);
                            return Reflect.apply(e, r, a);
                        },
                        get: (e, t, n) => "toString" === t ? e.toString.bind(e) : Reflect.get(e, t, n)
                    };
                    self.EventTarget.prototype.addEventListener = new Proxy(self.EventTarget.prototype.addEventListener, e);
                })();
            }), r.runAt);
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
        const c = [];
        try {
            c.push(...document.location.hostname.split("."));
        } catch (e) {}
        const i = c.length;
        if (0 === i) return;
        const l = new Set, d = [];
        if (0 !== r.size) {
            for (let e = 0; e < i; e++) {
                const t = c.slice(e).join("."), n = r.get(t);
                n && d.push(...n);
            }
            r.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) d.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < i; t++) e(c.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== o.size) {
            const e = i - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = c.slice(t, n).join(".");
                let r = o.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) d.includes(e) || l.add(e);
                }
            }
            o.clear();
        }
        for (const e of l) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, o;
        try {
            t.uBOL_addEventListenerDefuser = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_addEventListenerDefuser);
            o = t.URL.createObjectURL(r);
            const s = t.document;
            n = s.createElement("script"), n.async = !1, n.src = o, (s.head || s.documentElement || s).append(n);
        } catch (e) {}
        o && (n && n.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_addEventListenerDefuser;
    }
})();