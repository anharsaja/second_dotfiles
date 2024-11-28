"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "api/avods/v1/advertisement" ], [ "/^https.\\/\\/videoads\\.kakao\\.com\\/adserver\\/api\\/v[0-9]{1", "2}\\/vmap$/" ], [ "imasdk.googleapis.com/js/sdkloader/ima3.js" ], [ "pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" ], [ "adsbygoogle" ], [ "/compass.adop.cc|adsbygoogle/" ] ], r = new Map([ [ "laftel.net", 0 ], [ "tv.kakao.com", 1 ], [ "play-tv.kakao.com", 1 ], [ "kakaotv.daum.net", 1 ], [ "spotvnow.co.kr", [ 2, 3 ] ], [ "noonnu.cc", 3 ], [ "luckyquiz3.blogspot.com", 4 ], [ "3dpchip.com", 5 ] ]), o = new Map([]), n = new Map([]);
        function s(t = "", r = "") {
            if ("string" != typeof t) return;
            const o = i(), n = o.makeLogPrefix("prevent-xhr", t, r), s = new WeakMap, c = function(e, t = "") {
                const r = i(), o = new Map;
                if (void 0 === e || "" === e) return o;
                const n = {
                    canNegate: !0
                };
                for (const s of e.split(/\s+/)) {
                    const [e, a] = s.split(":");
                    "" !== e && (void 0 !== a ? o.set(e, r.initPattern(a, n)) : "" !== t && o.set(t, r.initPattern(e, n)));
                }
                return o;
            }(t, "url"), p = e.warOrigin, l = {
                date: "",
                "content-type": "",
                "content-length": ""
            };
            self.XMLHttpRequest = class extends self.XMLHttpRequest {
                open(e, i, ...u) {
                    if (s.delete(this), void 0 !== p && i.startsWith(p)) return super.open(e, i, ...u);
                    const d = {
                        method: e,
                        url: i
                    };
                    return "" === t && "" === r ? (o.uboLog(n, `Called: ${o.JSON_stringify(d, null, 2)}`), 
                    super.open(e, i, ...u)) : (a(c, d) && s.set(this, d), d.headers = Object.assign({}, l), 
                    super.open(e, i, ...u));
                }
                send(...t) {
                    const a = s.get(this);
                    if (void 0 === a) return super.send(...t);
                    a.headers.date = (new Date).toUTCString();
                    let c = Promise.resolve({
                        xhr: this,
                        directive: r,
                        props: {
                            readyState: {
                                value: 4
                            },
                            response: {
                                value: ""
                            },
                            responseText: {
                                value: ""
                            },
                            responseXML: {
                                value: null
                            },
                            responseURL: {
                                value: a.url
                            },
                            status: {
                                value: 200
                            },
                            statusText: {
                                value: "OK"
                            }
                        }
                    });
                    switch (this.responseType) {
                      case "arraybuffer":
                        c = c.then((e => (e.props.response.value = new ArrayBuffer(0), e))), a.headers["content-type"] = "application/octet-stream";
                        break;

                      case "blob":
                        c = c.then((e => (e.props.response.value = new Blob([]), e))), a.headers["content-type"] = "application/octet-stream";
                        break;

                      case "document":
                        c = c.then((e => {
                            const t = (new DOMParser).parseFromString("", "text/html");
                            return e.props.response.value = t, e.props.responseXML.value = t, e;
                        })), a.headers["content-type"] = "text/html";
                        break;

                      case "json":
                        c = c.then((e => (e.props.response.value = {}, e.props.responseText.value = "{}", 
                        e))), a.headers["content-type"] = "application/json";
                        break;

                      default:
                        if ("" === r) break;
                        c = c.then((t => function(t) {
                            const r = i(), o = e => {
                                const t = [];
                                let o = 0;
                                do {
                                    const e = r.Math_random().toString(36).slice(2);
                                    t.push(e), o += e.length;
                                } while (o < e);
                                return t.join(" ").slice(0, e);
                            };
                            if ("true" === t) return Promise.resolve(o(10));
                            if ("emptyObj" === t) return Promise.resolve("{}");
                            if ("emptyArr" === t) return Promise.resolve("[]");
                            if ("emptyStr" === t) return Promise.resolve("");
                            if (t.startsWith("length:")) {
                                const e = /^length:(\d+)(?:-(\d+))?$/.exec(t);
                                if (e) {
                                    const t = parseInt(e[1], 10), n = r.Math_max(parseInt(e[2], 10) || 0, t) - t, s = r.Math_min(t + n * r.Math_random(), 5e5);
                                    return Promise.resolve(o(0 | s));
                                }
                            }
                            return t.startsWith("war:") && e.warOrigin ? new Promise((o => {
                                const n = [ e.warOrigin, "/", t.slice(4) ], s = e.warSecret;
                                void 0 !== s && n.push("?secret=", s);
                                const a = new r.XMLHttpRequest;
                                a.responseType = "text", a.onloadend = e => {
                                    o(e.target.responseText || "");
                                }, a.open("GET", n.join("")), a.send();
                            })) : Promise.resolve("");
                        }(t.directive).then((e => (t.props.response.value = e, t.props.responseText.value = e, 
                        t))))), a.headers["content-type"] = "text/plain";
                    }
                    c.then((e => {
                        a.headers["content-length"] = `${e.props.response.value}`.length, Object.defineProperties(e.xhr, e.props), 
                        e.xhr.dispatchEvent(new Event("readystatechange")), e.xhr.dispatchEvent(new Event("load")), 
                        e.xhr.dispatchEvent(new Event("loadend")), o.uboLog(n, `Prevented with response:\n${e.xhr.response}`);
                    }));
                }
                getResponseHeader(e) {
                    const t = s.get(this);
                    if (void 0 === t || this.readyState < this.HEADERS_RECEIVED) return super.getResponseHeader(e);
                    const r = t.headers[e.toLowerCase()];
                    return void 0 !== r && "" !== r ? r : null;
                }
                getAllResponseHeaders() {
                    const e = s.get(this);
                    if (void 0 === e || this.readyState < this.HEADERS_RECEIVED) return super.getAllResponseHeaders();
                    const t = [];
                    for (const [r, o] of Object.entries(e.headers)) o && t.push(`${r}: ${o}`);
                    return 0 !== t.length && t.push(""), t.join("\r\n");
                }
            };
        }
        function a(e, ...t) {
            void 0 === a.extractProperties && (a.extractProperties = (e, t, r) => {
                for (const o of r) void 0 !== e[o] && (t[o] = e[o]);
            });
            const r = i(), o = {}, n = r.Array_from(e.keys());
            for (const e of t) e instanceof Object != 0 && a.extractProperties(e, o, n);
            for (const [t, n] of e) {
                let e = o[t];
                if (void 0 !== e) {
                    if ("string" != typeof e) {
                        try {
                            e = r.JSON_stringify(e);
                        } catch (e) {}
                        if ("string" != typeof e) continue;
                    }
                    if (!r.testPattern(n, e)) return !1;
                }
            }
            return !0;
        }
        function i() {
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
        const c = [];
        try {
            c.push(...document.location.hostname.split("."));
        } catch (e) {}
        const p = c.length;
        if (0 === p) return;
        const l = new Set, u = [];
        if (0 !== n.size) {
            for (let e = 0; e < p; e++) {
                const t = c.slice(e).join("."), r = n.get(t);
                r && u.push(...r);
            }
            n.clear();
        }
        if (0 !== r.size) {
            const e = e => {
                let t = r.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) u.includes(e) || l.add(e);
                }
            };
            for (let t = 0; t < p; t++) e(c.slice(t).join("."));
            e("*"), r.clear();
        }
        if (0 !== o.size) {
            const e = p - 1;
            for (let t = 0; t < e; t++) for (let r = e; r > t; r--) {
                const e = c.slice(t, r).join(".");
                let n = o.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) u.includes(e) || l.add(e);
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
            t.uBOL_noXhrIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new t.Blob(...t.uBOL_noXhrIf);
            o = t.URL.createObjectURL(n);
            const s = t.document;
            r = s.createElement("script"), r.async = !1, r.src = o, (s.head || s.documentElement || s).append(r);
        } catch (e) {}
        o && (r && r.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_noXhrIf;
    }
})();