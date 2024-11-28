"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "style", "#episode" ], [ "data-money", "div[data-money]" ], [ "data-href", 'span[data-href^="https://ensonhaber.me/"]' ], [ "placeholder", 'input[id="search-textbox"]' ], [ "data-front", "#tv-spoox2" ], [ "data-time", ".video-skip[data-time]" ] ], n = new Map([ [ "asyadiziizle.com", 0 ], [ "dizipal73.cloud", 1 ], [ "dizipal74.cloud", 1 ], [ "dizipal132.cloud", 1 ], [ "dizipal133.cloud", 1 ], [ "dizipal134.cloud", 1 ], [ "dizipal135.cloud", 1 ], [ "dizipal140.cloud", 1 ], [ "hdsinemax.com", 1 ], [ "elzemfilm.org", 1 ], [ "ensonhaber.com", 2 ], [ "eksisozluk.com", 3 ], [ "izlekolik.org", 4 ], [ "inattvhd188.xyz", 5 ], [ "inattvhd189.xyz", 5 ], [ "inattvhd190.xyz", 5 ], [ "inattvhd191.xyz", 5 ], [ "inattvhd192.xyz", 5 ], [ "inattvhd193.xyz", 5 ], [ "inattvhd194.xyz", 5 ], [ "inattvhd195.xyz", 5 ], [ "inattvhd196.xyz", 5 ], [ "inattvhd197.xyz", 5 ], [ "inattvhd198.xyz", 5 ], [ "inattvhd199.xyz", 5 ], [ "inattvhd200.xyz", 5 ], [ "inattvhd201.xyz", 5 ], [ "inattvhd202.xyz", 5 ], [ "inattvhd203.xyz", 5 ], [ "inattvhd204.xyz", 5 ], [ "inattvhd205.xyz", 5 ], [ "inattvhd206.xyz", 5 ], [ "inattvhd207.xyz", 5 ], [ "inattvhd208.xyz", 5 ], [ "inattvhd209.xyz", 5 ], [ "inattvhd210.xyz", 5 ], [ "inattvhd211.xyz", 5 ], [ "inattvhd212.xyz", 5 ], [ "inattvhd213.xyz", 5 ], [ "inattvhd214.xyz", 5 ], [ "inattvhd215.xyz", 5 ], [ "inattvhd216.xyz", 5 ], [ "inattvhd217.xyz", 5 ], [ "inattvhd218.xyz", 5 ], [ "inattvhd219.xyz", 5 ], [ "inattvhd220.xyz", 5 ], [ "inattvhd221.xyz", 5 ] ]), o = new Map([ [ "siyahfilmizle", 1 ], [ "sinepal", 1 ] ]), r = new Map([]);
        function i(e = "", t = "", n = "") {
            if ("string" != typeof e) return;
            if ("" === e) return;
            const o = a(), r = o.makeLogPrefix("remove-attr", e, t, n), i = e.split(/\s*\|\s*/), s = i.map((e => `${t}[${CSS.escape(e)}]`)).join(",");
            let c;
            o.logLevel > 1 && o.uboLog(r, `Target selector:\n\t${s}`);
            const d = () => {
                c = void 0;
                try {
                    const e = document.querySelectorAll(s);
                    for (const t of e) for (const e of i) !1 !== t.hasAttribute(e) && (t.removeAttribute(e), 
                    o.uboLog(r, `Removed attribute '${e}'`));
                } catch (e) {}
            }, l = e => {
                if (void 0 !== c) return;
                let t = !0;
                for (let n = 0; n < e.length && t; n++) {
                    const {type: o, addedNodes: r, removedNodes: i} = e[n];
                    "attributes" === o && (t = !1);
                    for (let e = 0; e < r.length && t; e++) if (1 === r[e].nodeType) {
                        t = !1;
                        break;
                    }
                    for (let e = 0; e < i.length && t; e++) if (1 === i[e].nodeType) {
                        t = !1;
                        break;
                    }
                }
                t || (c = o.onIdle(d, {
                    timeout: 67
                }));
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
                const i = a(), s = [ "readystatechange", () => {
                    n(document.readyState) < o || (e(), i.removeEventListener.apply(document, s));
                }, {
                    capture: !0
                } ];
                i.addEventListener.apply(document, s);
            }((() => {
                d(), !1 !== /\bstay\b/.test(n) && new MutationObserver(l).observe(document, {
                    attributes: !0,
                    attributeFilter: i,
                    childList: !0,
                    subtree: !0
                });
            }), /\bcomplete\b/.test(n) ? "idle" : "interactive");
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
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = s.length;
        if (0 === c) return;
        const d = new Set, l = [];
        if (0 !== r.size) {
            for (let e = 0; e < c; e++) {
                const t = s.slice(e).join("."), n = r.get(t);
                n && l.push(...n);
            }
            r.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || d.add(e);
                }
            };
            for (let t = 0; t < c; t++) e(s.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== o.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = s.slice(t, n).join(".");
                let r = o.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) l.includes(e) || d.add(e);
                }
            }
            o.clear();
        }
        for (const e of d) try {
            i(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, o;
        try {
            t.uBOL_removeAttr = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_removeAttr);
            o = t.URL.createObjectURL(r);
            const i = t.document;
            n = i.createElement("script"), n.async = !1, n.src = o, (i.head || i.documentElement || i).append(n);
        } catch (e) {}
        o && (n && n.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_removeAttr;
    }
})();