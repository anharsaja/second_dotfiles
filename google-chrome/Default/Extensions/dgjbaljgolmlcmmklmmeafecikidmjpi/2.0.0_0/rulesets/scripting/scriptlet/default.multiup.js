"use strict";

!function() {
    const t = [ [] ], e = new Map([ [ "multiup.eu", 0 ], [ "multiup.io", 0 ], [ "multiup.org", 0 ] ]), n = new Map([]), o = new Map([]);
    function c() {
        document.addEventListener("click", (t => {
            const e = t.target;
            if (!1 === e.matches("button[link]")) return;
            const n = e.closest("form");
            if (null === n) return;
            if (n !== e.parentElement) return;
            const o = (e.getAttribute("link") || "").trim();
            "" !== o && (t.preventDefault(), t.stopPropagation(), document.location.href = o);
        }), {
            capture: !0
        });
    }
    const i = [];
    try {
        i.push(...document.location.hostname.split("."));
    } catch (t) {}
    const r = i.length;
    if (0 === r) return;
    const s = new Set, l = [];
    if (0 !== o.size) {
        for (let t = 0; t < r; t++) {
            const e = i.slice(t).join("."), n = o.get(e);
            n && l.push(...n);
        }
        o.clear();
    }
    if (0 !== e.size) {
        const t = t => {
            let n = e.get(t);
            if (void 0 !== n) {
                "number" == typeof n && (n = [ n ]);
                for (const t of n) l.includes(t) || s.add(t);
            }
        };
        for (let e = 0; e < r; e++) t(i.slice(e).join("."));
        t("*"), e.clear();
    }
    if (0 !== n.size) {
        const t = r - 1;
        for (let e = 0; e < t; e++) for (let o = t; o > e; o--) {
            const t = i.slice(e, o).join(".");
            let c = n.get(t);
            if (void 0 !== c) {
                "number" == typeof c && (c = [ c ]);
                for (const t of c) l.includes(t) || s.add(t);
            }
        }
        n.clear();
    }
    for (const e of s) try {
        c(...t[e]);
    } catch (t) {}
    t.length = 0;
}();