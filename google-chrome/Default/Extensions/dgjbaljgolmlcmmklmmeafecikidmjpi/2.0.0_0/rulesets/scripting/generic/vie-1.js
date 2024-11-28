"use strict";

!function() {
    const e = [ [ 3075652, "#ads-preload" ], [ 11083042, "#banner-top" ], [ 14424411, "#mobileCatfish" ], [ 14727432, "#pmadv" ], [ 4238981, ".aanetwork-ads-box" ], [ 15434546, ".ad_location" ], [ 11090577, ".banner-bottom" ], [ 4159676, ".close-ads" ], [ 3079339, ".jw-cue" ], [ 14738640, ".midroll-marker" ], [ 16672551, ".quangcao" ], [ 4723804, ".right-box.top-block" ] ], o = self.genericSelectorMap || new Map;
    if (0 !== o.size) {
        for (const a of e) {
            const e = o.get(a[0]);
            o.set(a[0], void 0 === e ? a[1] : `${e},${a[1]}`);
        }
        self.genericSelectorMap = o;
    } else self.genericSelectorMap = new Map(e);
}();