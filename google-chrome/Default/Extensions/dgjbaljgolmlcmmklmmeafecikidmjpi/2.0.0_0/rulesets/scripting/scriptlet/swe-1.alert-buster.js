"use strict";

(() => {
    const t = function() {
        const t = [ [] ], e = new Map([ [ "stallet.se", 0 ] ]), n = new Map([]), o = new Map([]);
        function c() {
            window.alert = new Proxy(window.alert, {
                apply: function(t) {},
                get: (t, e, n) => "toString" === e ? t.toString.bind(t) : Reflect.get(t, e, n)
            });
        }
        const r = [];
        try {
            r.push(...document.location.hostname.split("."));
        } catch (t) {}
        const s = r.length;
        if (0 === s) return;
        const l = new Set, i = [];
        if (0 !== o.size) {
            for (let t = 0; t < s; t++) {
                const e = r.slice(t).join("."), n = o.get(e);
                n && i.push(...n);
            }
            o.clear();
        }
        if (0 !== e.size) {
            const t = t => {
                let n = e.get(t);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const t of n) i.includes(t) || l.add(t);
                }
            };
            for (let e = 0; e < s; e++) t(r.slice(e).join("."));
            t("*"), e.clear();
        }
        if (0 !== n.size) {
            const t = s - 1;
            for (let e = 0; e < t; e++) for (let o = t; o > e; o--) {
                const t = r.slice(e, o).join(".");
                let c = n.get(t);
                if (void 0 !== c) {
                    "number" == typeof c && (c = [ c ]);
                    for (const t of c) i.includes(t) || l.add(t);
                }
            }
            n.clear();
        }
        for (const e of l) try {
            c(...t[e]);
        } catch (t) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return t();
    {
        const e = self.wrappedJSObject;
        let n, o;
        try {
            e.uBOL_alertBuster = cloneInto([ [ "(", t.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const c = new e.Blob(...e.uBOL_alertBuster);
            o = e.URL.createObjectURL(c);
            const r = e.document;
            n = r.createElement("script"), n.async = !1, n.src = o, (r.head || r.documentElement || r).append(n);
        } catch (t) {}
        o && (n && n.remove(), e.URL.revokeObjectURL(o)), delete e.uBOL_alertBuster;
    }
})();