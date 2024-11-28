"use strict";

!function() {
    const e = {}, t = [ [ "adTakeOver", "seen" ], [ "wallpaper", "click" ], [ "WPdp", "gqcHFMkMCFBXQpBBBpBXUNPRRIQARgHRUtBPCxBS1MAFAEKA1NZRSpSOlNPRRcTRUtSS1MOFVNZVl1BCgVBXUJPRQUQRUtSUEFTUkBUUkJVUUVSGl1BMyFBXQpBBBpBXUBPRRIQARgHRUtBPCxBS1MAFAEKA1NZRSo+RV1BAQFBXUBPRRwRRUtSS1MOE1NZVF1BEwJBXUBUV0FWVkZWVEdVU0AeS1M0NzxBXQpBBBpBXUNPRRIQARgHRUtBPCxBS1MAFAEKA1NZRSpSOlNPRRcTRUtSS1MOFVNZVl1BCgVBXUJPRQUQRUtSUEFTUkBUUkJVUUVSS1MWBlNZVgwe" ], [ "WPtcs2", "CP1ik8AP1ik8ABIACDPLAbEgAAAAAEPgAB5YAABBqhmgAIgAUABcADgAPgAoACoAFwAOQAeACAAEgALoAYABlADQANQAeAA_ACIAEcAJgAUIApACmAFWALgAugBiADMAGgAN4AegA_ACEAENAIgAiQBHACWAE0AJwAUYAwABhwDKAMsAZoA0QBsgDkAHPAO4A7wB7AD4gH2AfsA_wEAgIOAhABEQCKQEWARgAjUBHAEdAJEASUAlIBOwCfgFBgKgAqIBVwCxAFzALrAXkBegC-gGKANEAa8A2gBuADiAHHAOkAdQA7YB7QD7AH_ARMAi8BHsCRAJFASoAlYBMUCZAJlATaAnYBQ8CjwKRAUnApoCmwFPgKhgVIBUoCqgFWAK5AV2AsKBYgFigLKAWiAtQBbEC3ALdAXAAuQBdAC7QF3wLyAvMBfQC_wGCAMGAYaAxABiwDHgGQwMjAySBkwGTgMqAZYAzMBnIDPAGiANGAaaA1MBqsDVwNZAa8A2iBtwG3wN0A3UBwADggHFgOPAcnA5YDlwHPgOsAeKA8eB5IHlAPigfIB8oD6QH1wPtA-6B-wH7gQBAgIBAwCB4EEQIJgQYAg2BCECFAEK4IWghcBDECGcEOQQ6gh4CHoEPwIpgRgAjSBGsCN4EcQI6AR2Aj2BH0CP4EhAJFASNgkgCScEmASZglQCVIEsAJZwS3BLiCXQJdgS-gmACYIEwwJiwTMBM4CagE2IJtgm5BN4E3wJwhBqAAAA.YAAAAAAAAAAA" ], [ "WPcbadcp", "$now$" ] ], o = new Map([ [ "govtech.com", 0 ], [ "theporndude.com", 1 ], [ "wp.pl", [ 2, 3, 4 ] ], [ "money.pl", [ 2, 3, 4 ] ], [ "pysznosci.pl", [ 2, 3, 4 ] ], [ "pudelek.pl", [ 2, 3, 4 ] ], [ "gadzetomania.pl", [ 2, 3, 4 ] ], [ "fotoblogia.pl", [ 2, 3, 4 ] ], [ "komorkomania.pl", [ 2, 3, 4 ] ], [ "dobreprogramy.pl", [ 2, 3, 4 ] ], [ "autokult.pl", [ 2, 3, 4 ] ], [ "genialne.pl", [ 2, 3, 4 ] ], [ "o2.pl", 4 ], [ "parenting.pl", 4 ], [ "polygamia.pl", 4 ], [ "abczdrowie.pl", 4 ], [ "open.fm", 4 ], [ "benchmark.pl", 4 ], [ "kafeteria.pl", 4 ], [ "autocentrum.pl", 4 ], [ "jastrzabpost.pl", 4 ] ]), r = new Map([]), n = new Map([ [ "www.wp.pl", [ 2, 3 ] ] ]);
    function A(e = "", t = "", o = "", r = "") {
        if ("" === e) return;
        const n = s(), A = n.makeLogPrefix("set-cookie", e, t, r), a = new Date;
        "$now$" === t ? t = Date.now() : "$currentDate$" === t && (t = a.toUTCString());
        let c = "";
        if ("" !== o) {
            if ("1day" === o) a.setDate(a.getDate() + 1); else if ("1year" === o) a.setFullYear(a.getFullYear() + 1); else {
                if (!1 === /^\d+$/.test(o)) return;
                a.setSeconds(a.getSeconds() + parseInt(o, 10));
            }
            c = a.toUTCString();
        }
        const g = function(e = !1, t = "", o = "", r = "", n = "", A = {}) {
            !1 === e && /[^!#$%&'*+\-.0-9A-Z[\]^_`a-z|~]/.test(t) && (t = encodeURIComponent(t)), 
            /[^ -:<-[\]-~]/.test(o) && (o = encodeURIComponent(o));
            const s = i(t);
            if (void 0 !== s && A.dontOverwrite) return;
            if (s === o && A.reload) return;
            const a = [ t, "=", o ];
            if ("" !== r && a.push("; expires=", r), "" === n ? n = "/" : "none" === n && (n = ""), 
            "" !== n && "/" !== n) return;
            "/" === n && a.push("; path=/"), e && (A.domain && a.push(`; domain=${A.domain}`), 
            a.push("; Secure"));
            try {
                document.cookie = a.join("");
            } catch (e) {}
            const c = i(t) === o;
            return c && A.reload && window.location.reload(), c;
        }(!0, e, t, c, r, s().getExtraArgs(Array.from(arguments), 4));
        g && n.uboLog(A, "Done");
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
    function i(e = "") {
        for (const t of document.cookie.split(/\s*;\s*/)) {
            const o = t.indexOf("=");
            if (-1 !== o && t.slice(0, o) === e) return t.slice(o + 1).trim();
        }
    }
    const a = [];
    try {
        a.push(...document.location.hostname.split("."));
    } catch (e) {}
    const c = a.length;
    if (0 === c) return;
    const g = new Set, l = [];
    if (0 !== n.size) {
        for (let e = 0; e < c; e++) {
            const t = a.slice(e).join("."), o = n.get(t);
            o && l.push(...o);
        }
        n.clear();
    }
    if (0 !== o.size) {
        const e = e => {
            let t = o.get(e);
            if (void 0 !== t) {
                "number" == typeof t && (t = [ t ]);
                for (const e of t) l.includes(e) || g.add(e);
            }
        };
        for (let t = 0; t < c; t++) e(a.slice(t).join("."));
        e("*"), o.clear();
    }
    if (0 !== r.size) {
        const e = c - 1;
        for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
            const e = a.slice(t, o).join(".");
            let n = r.get(e);
            if (void 0 !== n) {
                "number" == typeof n && (n = [ n ]);
                for (const e of n) l.includes(e) || g.add(e);
            }
        }
        r.clear();
    }
    for (const e of g) try {
        A(...t[e]);
    } catch (e) {}
    t.length = 0;
}();