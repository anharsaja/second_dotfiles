"use strict";

!function() {
    const e = [ [ 1774173, ".ad_wrapper" ], [ 10330050, "._popIn_recommend_article_ad" ], [ 13642955, "#admaru" ], [ 4542809, ".revenue_unit_item.tenping,.revenue_unit_item.dable,.revenue_unit_item.adfit" ], [ 327848, "ins.viewus-ad" ], [ 3683313, "#livereAdWrapper" ], [ 186570, "ins.fastview-ad" ], [ 2201688, "ins.adsbyadop" ], [ 16153475, "ins.adsbygoogle[data-ad-slot]" ], [ 15922369, "ins.kakao_ad_area" ] ], a = self.genericSelectorMap || new Map;
    if (0 !== a.size) {
        for (const i of e) {
            const e = a.get(i[0]);
            a.set(i[0], void 0 === e ? i[1] : `${e},${i[1]}`);
        }
        self.genericSelectorMap = a;
    } else self.genericSelectorMap = new Map(e);
}();