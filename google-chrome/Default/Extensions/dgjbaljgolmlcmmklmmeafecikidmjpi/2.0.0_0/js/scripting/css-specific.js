!function() {
    const e = self.specificImports || [];
    self.specificImports = void 0, delete self.specificImports;
    const t = [];
    try {
        t.push(...document.location.hostname.split("."));
    } catch (e) {}
    const o = t.length;
    if (0 === o) return;
    const s = [];
    for (const {argsList: n, exceptionsMap: i, hostnamesMap: c, entitiesMap: f} of e) {
        const e = new Set, l = [];
        if (0 !== i.size) {
            for (let e = 0; e < o; e++) {
                const o = t.slice(e).join("."), s = i.get(o);
                s && l.push(...s);
            }
            i.clear();
        }
        if (0 !== c.size) {
            const s = t => {
                let o = c.get(t);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const t of o) l.includes(t) || e.add(t);
                }
            };
            for (let e = 0; e < o; e++) s(t.slice(e).join("."));
            s("*"), c.clear();
        }
        if (0 !== f.size) {
            const s = o - 1;
            for (let o = 0; o < s; o++) for (let n = s; n > o; n--) {
                const s = t.slice(o, n).join(".");
                let i = f.get(s);
                if (void 0 !== i) {
                    "number" == typeof i && (i = [ i ]);
                    for (const t of i) l.includes(t) || e.add(t);
                }
            }
            f.clear();
        }
        for (const t of e) s.push(n[t]);
        n.length = 0;
    }
    e.length = 0, 0 !== s.length && function e(t, o = 10) {
        chrome.runtime.sendMessage({
            what: "insertCSS",
            css: t
        }).catch((() => {
            0 != (o -= 1) && e(t, o - 1);
        }));
    }(`${s.join(",")}{display:none!important;}`);
}();