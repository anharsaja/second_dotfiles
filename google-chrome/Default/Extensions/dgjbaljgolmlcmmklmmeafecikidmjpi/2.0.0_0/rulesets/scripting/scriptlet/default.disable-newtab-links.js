"use strict";

(() => {
    const e = function() {
        const e = [ [] ], t = new Map([ [ "porntrex.com", 0 ], [ "fembed.com", 0 ], [ "xrares.com", 0 ], [ "uploadbox.cc", 0 ], [ "daftporn.com", 0 ], [ "boost.ink", 0 ], [ "wootly.ch", 0 ], [ "sexlist.tv", 0 ], [ "player.theplatform.com", 0 ], [ "cine24.online", 0 ] ]), o = new Map([ [ "europixhd", 0 ], [ "hdeuropix", 0 ], [ "hindipix", 0 ], [ "topeuropix", 0 ], [ "pelisplay", 0 ], [ "earnload", 0 ] ]), n = new Map([]);
        function c() {
            document.addEventListener("click", (function(e) {
                for (var t = e.target; null !== t; ) {
                    if ("a" === t.localName && t.hasAttribute("target")) {
                        e.stopPropagation(), e.preventDefault();
                        break;
                    }
                    t = t.parentNode;
                }
            }));
        }
        const r = [];
        try {
            r.push(...document.location.hostname.split("."));
        } catch (e) {}
        const i = r.length;
        if (0 === i) return;
        const a = new Set, s = [];
        if (0 !== n.size) {
            for (let e = 0; e < i; e++) {
                const t = r.slice(e).join("."), o = n.get(t);
                o && s.push(...o);
            }
            n.clear();
        }
        if (0 !== t.size) {
            const e = e => {
                let o = t.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) s.includes(e) || a.add(e);
                }
            };
            for (let t = 0; t < i; t++) e(r.slice(t).join("."));
            e("*"), t.clear();
        }
        if (0 !== o.size) {
            const e = i - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = r.slice(t, n).join(".");
                let c = o.get(e);
                if (void 0 !== c) {
                    "number" == typeof c && (c = [ c ]);
                    for (const e of c) s.includes(e) || a.add(e);
                }
            }
            o.clear();
        }
        for (const t of a) try {
            c(...e[t]);
        } catch (e) {}
        e.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let o, n;
        try {
            t.uBOL_disableNewtabLinks = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const c = new t.Blob(...t.uBOL_disableNewtabLinks);
            n = t.URL.createObjectURL(c);
            const r = t.document;
            o = r.createElement("script"), o.async = !1, o.src = n, (r.head || r.documentElement || r).append(o);
        } catch (e) {}
        n && (o && o.remove(), t.URL.revokeObjectURL(n)), delete t.uBOL_disableNewtabLinks;
    }
})();