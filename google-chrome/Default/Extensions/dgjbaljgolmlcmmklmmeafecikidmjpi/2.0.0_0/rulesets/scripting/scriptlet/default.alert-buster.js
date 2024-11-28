"use strict";

(() => {
    const t = function() {
        const t = [ [] ], e = new Map([ [ "1001tracklists.com", 0 ], [ "66ccff.work", 0 ] ]), o = new Map([]), c = new Map([]);
        function n() {
            window.alert = new Proxy(window.alert, {
                apply: function(t) {},
                get: (t, e, o) => "toString" === e ? t.toString.bind(t) : Reflect.get(t, e, o)
            });
        }
        const r = [];
        try {
            r.push(...document.location.hostname.split("."));
        } catch (t) {}
        const s = r.length;
        if (0 === s) return;
        const i = new Set, l = [];
        if (0 !== c.size) {
            for (let t = 0; t < s; t++) {
                const e = r.slice(t).join("."), o = c.get(e);
                o && l.push(...o);
            }
            c.clear();
        }
        if (0 !== e.size) {
            const t = t => {
                let o = e.get(t);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const t of o) l.includes(t) || i.add(t);
                }
            };
            for (let e = 0; e < s; e++) t(r.slice(e).join("."));
            t("*"), e.clear();
        }
        if (0 !== o.size) {
            const t = s - 1;
            for (let e = 0; e < t; e++) for (let c = t; c > e; c--) {
                const t = r.slice(e, c).join(".");
                let n = o.get(t);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const t of n) l.includes(t) || i.add(t);
                }
            }
            o.clear();
        }
        for (const e of i) try {
            n(...t[e]);
        } catch (t) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return t();
    {
        const e = self.wrappedJSObject;
        let o, c;
        try {
            e.uBOL_alertBuster = cloneInto([ [ "(", t.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const n = new e.Blob(...e.uBOL_alertBuster);
            c = e.URL.createObjectURL(n);
            const r = e.document;
            o = r.createElement("script"), o.async = !1, o.src = c, (r.head || r.documentElement || r).append(o);
        } catch (t) {}
        c && (o && o.remove(), e.URL.revokeObjectURL(c)), delete e.uBOL_alertBuster;
    }
})();