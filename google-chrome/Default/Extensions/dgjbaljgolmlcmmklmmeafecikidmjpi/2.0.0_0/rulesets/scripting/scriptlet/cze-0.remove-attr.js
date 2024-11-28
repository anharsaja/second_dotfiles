"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "style", "body" ] ], r = new Map([ [ "super.cz", 0 ] ]), o = new Map([]), n = new Map([]);
        function s(e = "", t = "", r = "") {
            if ("string" != typeof e) return;
            if ("" === e) return;
            const o = c(), n = o.makeLogPrefix("remove-attr", e, t, r), s = e.split(/\s*\|\s*/), i = s.map((e => `${t}[${CSS.escape(e)}]`)).join(",");
            let a;
            o.logLevel > 1 && o.uboLog(n, `Target selector:\n\t${i}`);
            const l = () => {
                a = void 0;
                try {
                    const e = document.querySelectorAll(i);
                    for (const t of e) for (const e of s) !1 !== t.hasAttribute(e) && (t.removeAttribute(e), 
                    o.uboLog(n, `Removed attribute '${e}'`));
                } catch (e) {}
            }, p = e => {
                if (void 0 !== a) return;
                let t = !0;
                for (let r = 0; r < e.length && t; r++) {
                    const {type: o, addedNodes: n, removedNodes: s} = e[r];
                    "attributes" === o && (t = !1);
                    for (let e = 0; e < n.length && t; e++) if (1 === n[e].nodeType) {
                        t = !1;
                        break;
                    }
                    for (let e = 0; e < s.length && t; e++) if (1 === s[e].nodeType) {
                        t = !1;
                        break;
                    }
                }
                t || (a = o.onIdle(l, {
                    timeout: 67
                }));
            };
            !function(e, t) {
                const r = e => {
                    const t = {
                        loading: 1,
                        interactive: 2,
                        end: 2,
                        2: 2,
                        complete: 3,
                        idle: 3,
                        3: 3
                    }, r = Array.isArray(e) ? e : [ e ];
                    for (const e of r) {
                        const r = `${e}`;
                        if (!1 !== t.hasOwnProperty(r)) return t[r];
                    }
                    return 0;
                }, o = r(t);
                if (r(document.readyState) >= o) return void e();
                const s = c(), i = [ "readystatechange", () => {
                    r(document.readyState) < o || (e(), s.removeEventListener.apply(document, i));
                }, {
                    capture: !0
                } ];
                s.addEventListener.apply(document, i);
            }((() => {
                l(), !1 !== /\bstay\b/.test(r) && new MutationObserver(p).observe(document, {
                    attributes: !0,
                    attributeFilter: s,
                    childList: !0,
                    subtree: !0
                });
            }), /\bcomplete\b/.test(r) ? "idle" : "interactive");
        }
        function c() {
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
        }
        const i = [];
        try {
            i.push(...document.location.hostname.split("."));
        } catch (e) {}
        const a = i.length;
        if (0 === a) return;
        const l = new Set, p = [];
        if (0 !== n.size) {
            for (let e = 0; e < a; e++) {
                const t = i.slice(e).join("."), r = n.get(t);
                r && p.push(...r);
            }
            n.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) p.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < a; t++) e(i.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== o.size) {
            const e = a - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = i.slice(t, r).join(".");
                let n = o.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) p.includes(e) || l.add(e);
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
        let r, o;
        try {
            t.uBOL_removeAttr = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_removeAttr);
            o = t.URL.createObjectURL(n);
            const s = t.document;
            r = s.createElement("script"), r.async = !1, r.src = o, (s.head || s.documentElement || s).append(r);
        } catch (e) {}
        o && (r && r.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_removeAttr;
    }
})();