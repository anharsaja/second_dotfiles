"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "/advert.js" ], [ "static.doubleclick.net/instream/ad_status.js" ], [ "pagead2.googlesyndication.com" ], [ "spotxchange.com" ] ], n = new Map([ [ "kuponuna170.top", 0 ], [ "kuponuna171.top", 0 ], [ "kuponuna172.top", 0 ], [ "kuponuna173.top", 0 ], [ "kuponuna174.top", 0 ], [ "kuponuna175.top", 0 ], [ "kuponuna176.top", 0 ], [ "kuponuna177.top", 0 ], [ "kuponuna178.top", 0 ], [ "kuponuna179.top", 0 ], [ "kuponuna180.top", 0 ], [ "kuponuna181.top", 0 ], [ "kuponuna182.top", 0 ], [ "kuponuna183.top", 0 ], [ "kuponuna184.top", 0 ], [ "kuponuna185.top", 0 ], [ "kuponuna186.top", 0 ], [ "kuponuna187.top", 0 ], [ "kuponuna188.top", 0 ], [ "kuponuna189.top", 0 ], [ "kuponuna190.top", 0 ], [ "kuponuna191.top", 0 ], [ "kuponuna192.top", 0 ], [ "kuponuna193.top", 0 ], [ "kuponuna194.top", 0 ], [ "kuponuna195.top", 0 ], [ "kuponuna196.top", 0 ], [ "kuponuna197.top", 0 ], [ "kuponuna198.top", 0 ], [ "kuponuna199.top", 0 ], [ "kuponuna200.top", 0 ], [ "kuponuna201.top", 0 ], [ "kuponuna202.top", 0 ], [ "kuponuna203.top", 0 ], [ "kuponuna204.top", 0 ], [ "kuponuna205.top", 0 ], [ "kuponuna206.top", 0 ], [ "kuponuna207.top", 0 ], [ "kuponuna208.top", 0 ], [ "kuponuna209.top", 0 ], [ "kuponuna210.top", 0 ], [ "kuponuna211.top", 0 ], [ "kuponuna212.top", 0 ], [ "kuponuna213.top", 0 ], [ "kuponuna214.top", 0 ], [ "kuponuna215.top", 0 ], [ "kuponuna216.top", 0 ], [ "kuponuna217.top", 0 ], [ "kuponuna218.top", 0 ], [ "kuponuna219.top", 0 ], [ "kuponuna220.top", 0 ], [ "kuponuna221.top", 0 ], [ "kuponuna222.top", 0 ], [ "kuponuna223.top", 0 ], [ "kuponuna224.top", 0 ], [ "kuponuna225.top", 0 ], [ "kuponuna226.top", 0 ], [ "kuponuna227.top", 0 ], [ "kuponuna228.top", 0 ], [ "kuponuna229.top", 0 ], [ "kuponuna230.top", 0 ], [ "kuponuna231.top", 0 ], [ "kuponuna232.top", 0 ], [ "kuponuna233.top", 0 ], [ "kuponuna234.top", 0 ], [ "kuponuna235.top", 0 ], [ "kuponuna236.top", 0 ], [ "kuponuna237.top", 0 ], [ "kuponuna238.top", 0 ], [ "kuponuna239.top", 0 ], [ "kuponuna240.top", 0 ], [ "kuponuna241.top", 0 ], [ "kuponuna242.top", 0 ], [ "kuponuna243.top", 0 ], [ "kuponuna244.top", 0 ], [ "kuponuna245.top", 0 ], [ "kuponuna246.top", 0 ], [ "kuponuna247.top", 0 ], [ "kuponuna248.top", 0 ], [ "kuponuna249.top", 0 ], [ "kuponuna250.top", 0 ], [ "canlitribun53.com", 0 ], [ "canlitribun54.com", 0 ], [ "canlitribun55.com", 0 ], [ "canlitribun56.com", 0 ], [ "canlitribun57.com", 0 ], [ "canlitribun58.com", 0 ], [ "canlitribun59.com", 0 ], [ "canlitribun60.com", 0 ], [ "canlitribun61.com", 0 ], [ "canlitribun62.com", 0 ], [ "canlitribun63.com", 0 ], [ "canlitribun64.com", 0 ], [ "canlitribun65.com", 0 ], [ "canlitribun66.com", 0 ], [ "canlitribun67.com", 0 ], [ "canlitribun68.com", 0 ], [ "canlitribun69.com", 0 ], [ "canlitribun70.com", 0 ], [ "mangawt.com", 1 ], [ "uzaymanga.com", 2 ], [ "ruyamanga.com", 2 ], [ "tv8.com.tr", 3 ] ]), o = new Map([]), r = new Map([]);
        function p(t = "", n = "") {
            if ("string" != typeof t) return;
            const o = s(), r = o.makeLogPrefix("prevent-xhr", t, n), p = new WeakMap, u = function(e, t = "") {
                const n = s(), o = new Map;
                if (void 0 === e || "" === e) return o;
                const r = {
                    canNegate: !0
                };
                for (const p of e.split(/\s+/)) {
                    const [e, a] = p.split(":");
                    "" !== e && (void 0 !== a ? o.set(e, n.initPattern(a, r)) : "" !== t && o.set(t, n.initPattern(e, r)));
                }
                return o;
            }(t, "url"), i = e.warOrigin, c = {
                date: "",
                "content-type": "",
                "content-length": ""
            };
            self.XMLHttpRequest = class extends self.XMLHttpRequest {
                open(e, s, ...l) {
                    if (p.delete(this), void 0 !== i && s.startsWith(i)) return super.open(e, s, ...l);
                    const d = {
                        method: e,
                        url: s
                    };
                    return "" === t && "" === n ? (o.uboLog(r, `Called: ${o.JSON_stringify(d, null, 2)}`), 
                    super.open(e, s, ...l)) : (a(u, d) && p.set(this, d), d.headers = Object.assign({}, c), 
                    super.open(e, s, ...l));
                }
                send(...t) {
                    const a = p.get(this);
                    if (void 0 === a) return super.send(...t);
                    a.headers.date = (new Date).toUTCString();
                    let u = Promise.resolve({
                        xhr: this,
                        directive: n,
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
                        u = u.then((e => (e.props.response.value = new ArrayBuffer(0), e))), a.headers["content-type"] = "application/octet-stream";
                        break;

                      case "blob":
                        u = u.then((e => (e.props.response.value = new Blob([]), e))), a.headers["content-type"] = "application/octet-stream";
                        break;

                      case "document":
                        u = u.then((e => {
                            const t = (new DOMParser).parseFromString("", "text/html");
                            return e.props.response.value = t, e.props.responseXML.value = t, e;
                        })), a.headers["content-type"] = "text/html";
                        break;

                      case "json":
                        u = u.then((e => (e.props.response.value = {}, e.props.responseText.value = "{}", 
                        e))), a.headers["content-type"] = "application/json";
                        break;

                      default:
                        if ("" === n) break;
                        u = u.then((t => function(t) {
                            const n = s(), o = e => {
                                const t = [];
                                let o = 0;
                                do {
                                    const e = n.Math_random().toString(36).slice(2);
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
                                    const t = parseInt(e[1], 10), r = n.Math_max(parseInt(e[2], 10) || 0, t) - t, p = n.Math_min(t + r * n.Math_random(), 5e5);
                                    return Promise.resolve(o(0 | p));
                                }
                            }
                            return t.startsWith("war:") && e.warOrigin ? new Promise((o => {
                                const r = [ e.warOrigin, "/", t.slice(4) ], p = e.warSecret;
                                void 0 !== p && r.push("?secret=", p);
                                const a = new n.XMLHttpRequest;
                                a.responseType = "text", a.onloadend = e => {
                                    o(e.target.responseText || "");
                                }, a.open("GET", r.join("")), a.send();
                            })) : Promise.resolve("");
                        }(t.directive).then((e => (t.props.response.value = e, t.props.responseText.value = e, 
                        t))))), a.headers["content-type"] = "text/plain";
                    }
                    u.then((e => {
                        a.headers["content-length"] = `${e.props.response.value}`.length, Object.defineProperties(e.xhr, e.props), 
                        e.xhr.dispatchEvent(new Event("readystatechange")), e.xhr.dispatchEvent(new Event("load")), 
                        e.xhr.dispatchEvent(new Event("loadend")), o.uboLog(r, `Prevented with response:\n${e.xhr.response}`);
                    }));
                }
                getResponseHeader(e) {
                    const t = p.get(this);
                    if (void 0 === t || this.readyState < this.HEADERS_RECEIVED) return super.getResponseHeader(e);
                    const n = t.headers[e.toLowerCase()];
                    return void 0 !== n && "" !== n ? n : null;
                }
                getAllResponseHeaders() {
                    const e = p.get(this);
                    if (void 0 === e || this.readyState < this.HEADERS_RECEIVED) return super.getAllResponseHeaders();
                    const t = [];
                    for (const [n, o] of Object.entries(e.headers)) o && t.push(`${n}: ${o}`);
                    return 0 !== t.length && t.push(""), t.join("\r\n");
                }
            };
        }
        function a(e, ...t) {
            void 0 === a.extractProperties && (a.extractProperties = (e, t, n) => {
                for (const o of n) void 0 !== e[o] && (t[o] = e[o]);
            });
            const n = s(), o = {}, r = n.Array_from(e.keys());
            for (const e of t) e instanceof Object != 0 && a.extractProperties(e, o, r);
            for (const [t, r] of e) {
                let e = o[t];
                if (void 0 !== e) {
                    if ("string" != typeof e) {
                        try {
                            e = n.JSON_stringify(e);
                        } catch (e) {}
                        if ("string" != typeof e) continue;
                    }
                    if (!n.testPattern(r, e)) return !1;
                }
            }
            return !0;
        }
        function s() {
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
        const u = [];
        try {
            u.push(...document.location.hostname.split("."));
        } catch (e) {}
        const i = u.length;
        if (0 === i) return;
        const c = new Set, l = [];
        if (0 !== r.size) {
            for (let e = 0; e < i; e++) {
                const t = u.slice(e).join("."), n = r.get(t);
                n && l.push(...n);
            }
            r.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) l.includes(e) || c.add(e);
                }
            };
            for (let t = 0; t < i; t++) e(u.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== o.size) {
            const e = i - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = u.slice(t, n).join(".");
                let r = o.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) l.includes(e) || c.add(e);
                }
            }
            o.clear();
        }
        for (const e of c) try {
            p(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, o;
        try {
            t.uBOL_noXhrIf = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_noXhrIf);
            o = t.URL.createObjectURL(r);
            const p = t.document;
            n = p.createElement("script"), n.async = !1, n.src = o, (p.head || p.documentElement || p).append(n);
        } catch (e) {}
        o && (n && n.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_noXhrIf;
    }
})();