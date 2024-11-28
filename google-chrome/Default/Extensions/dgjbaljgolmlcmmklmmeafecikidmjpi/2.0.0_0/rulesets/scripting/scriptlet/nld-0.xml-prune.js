"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ 'Period[id*="-ad-"]', "", ".mpd" ] ], r = new Map([ [ "goplay.be", 0 ] ]), n = new Map([]), o = new Map([]);
        function s(t = "", r = "", n = "") {
            if ("string" != typeof t) return;
            if ("" === t) return;
            const o = function() {
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
            }(), s = o.makeLogPrefix("xml-prune", t, r, n), c = o.patternToRegex(n), i = o.getExtraArgs(Array.from(arguments), 3), a = e => {
                try {
                    if ("" !== r && null === e.querySelector(r)) return e;
                    if (i.logdoc) {
                        const t = new XMLSerializer;
                        o.uboLog(s, `Document is\n\t${t.serializeToString(e)}`);
                    }
                    const n = ((e, t) => {
                        if (!1 === /^xpath\(.+\)$/.test(t)) return Array.from(e.querySelectorAll(t));
                        const r = e.evaluate(t.slice(6, -1), e, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null), n = [];
                        for (let e = 0; e < r.snapshotLength; e++) {
                            const t = r.snapshotItem(e);
                            n.push(t);
                        }
                        return n;
                    })(e, t);
                    if (0 === n.length) return e;
                    o.uboLog(s, `Removing ${n.length} items`);
                    for (const e of n) 1 === e.nodeType ? e.remove() : 2 === e.nodeType && e.ownerElement.removeAttribute(e.nodeName), 
                    o.uboLog(s, `${e.constructor.name}.${e.nodeName} removed`);
                } catch (e) {
                    o.uboErr(s, `Error: ${e}`);
                }
                return e;
            }, l = e => {
                if (!1 === (/^\s*</.test(e) && />\s*$/.test(e))) return e;
                try {
                    const t = (new DOMParser).parseFromString(e, "text/xml");
                    a(t), e = (new XMLSerializer).serializeToString(t);
                } catch (e) {}
                return e;
            }, p = e => "string" == typeof e ? e : e instanceof Request ? e.url : String(e);
            self.fetch = new Proxy(self.fetch, {
                apply: function(e, t, r) {
                    const n = Reflect.apply(e, t, r);
                    return !1 === c.test(p(r[0])) ? n : n.then((e => e.clone().text().then((t => {
                        const r = new Response(l(t), {
                            status: e.status,
                            statusText: e.statusText,
                            headers: e.headers
                        });
                        return Object.defineProperties(r, {
                            ok: {
                                value: e.ok
                            },
                            redirected: {
                                value: e.redirected
                            },
                            type: {
                                value: e.type
                            },
                            url: {
                                value: e.url
                            }
                        }), r;
                    })).catch((() => e))));
                }
            }), self.XMLHttpRequest.prototype.open = new Proxy(self.XMLHttpRequest.prototype.open, {
                apply: async (e, t, r) => (!1 === c.test(p(r[1])) || t.addEventListener("readystatechange", (function() {
                    if (4 !== t.readyState) return;
                    const e = t.responseType;
                    if ("document" === e || "" === e && t.responseXML instanceof XMLDocument) {
                        a(t.responseXML);
                        const e = (new XMLSerializer).serializeToString(t.responseXML);
                        Object.defineProperty(t, "responseText", {
                            value: e
                        });
                    } else if ("text" === e || "" === e && "string" == typeof t.responseText) {
                        const e = t.responseText, r = l(e);
                        if (r === e) return;
                        return Object.defineProperty(t, "response", {
                            value: r
                        }), void Object.defineProperty(t, "responseText", {
                            value: r
                        });
                    }
                })), Reflect.apply(e, t, r))
            });
        }
        const c = [];
        try {
            c.push(...document.location.hostname.split("."));
        } catch (e) {}
        const i = c.length;
        if (0 === i) return;
        const a = new Set, l = [];
        if (0 !== o.size) {
            for (let e = 0; e < i; e++) {
                const t = c.slice(e).join("."), r = o.get(t);
                r && l.push(...r);
            }
            o.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || a.add(e);
                }
            };
            for (let t = 0; t < i; t++) e(c.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== n.size) {
            const e = i - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = c.slice(t, r).join(".");
                let o = n.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) l.includes(e) || a.add(e);
                }
            }
            n.clear();
        }
        for (const e of a) try {
            s(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let r, n;
        try {
            t.uBOL_xmlPrune = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const o = new t.Blob(...t.uBOL_xmlPrune);
            n = t.URL.createObjectURL(o);
            const s = t.document;
            r = s.createElement("script"), r.async = !1, r.src = n, (s.head || s.documentElement || s).append(r);
        } catch (e) {}
        n && (r && r.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_xmlPrune;
    }
})();