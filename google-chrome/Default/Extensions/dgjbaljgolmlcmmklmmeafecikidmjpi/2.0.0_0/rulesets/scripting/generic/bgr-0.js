"use strict";

!function() {
    const e = [ [ 14648089, "#ea_intext_div" ], [ 8451109, "td#freenet_table_ads" ], [ 11017215, ".lapni-pop-over" ], [ 16662940, "#xenium_hot_offers" ] ], t = self.genericSelectorMap || new Map;
    if (0 !== t.size) {
        for (const n of e) {
            const e = t.get(n[0]);
            t.set(n[0], void 0 === e ? n[1] : `${e},${n[1]}`);
        }
        self.genericSelectorMap = t;
    } else self.genericSelectorMap = new Map(e);
}();