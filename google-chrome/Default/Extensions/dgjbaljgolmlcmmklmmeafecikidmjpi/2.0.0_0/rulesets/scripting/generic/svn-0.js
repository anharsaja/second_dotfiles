"use strict";

!function() {
    const e = [ [ 11160899, ".cookie-screen" ], [ 6717121, ".friendly.notice" ], [ 8173925, "#eu-cookies-consent" ], [ 5196796, "#eu-okno" ] ], o = self.genericSelectorMap || new Map;
    if (0 !== o.size) {
        for (const c of e) {
            const e = o.get(c[0]);
            o.set(c[0], void 0 === e ? c[1] : `${e},${c[1]}`);
        }
        self.genericSelectorMap = o;
    } else self.genericSelectorMap = new Map(e);
}();