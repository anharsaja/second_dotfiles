"use strict";

!function() {
    const e = [ [ 12341963, ".adsbox" ], [ 1786351, "DIV.agores300" ], [ 8886709, "TABLE.advright" ] ], s = self.genericSelectorMap || new Map;
    if (0 !== s.size) {
        for (const o of e) {
            const e = s.get(o[0]);
            s.set(o[0], void 0 === e ? o[1] : `${e},${o[1]}`);
        }
        self.genericSelectorMap = s;
    } else self.genericSelectorMap = new Map(e);
}();