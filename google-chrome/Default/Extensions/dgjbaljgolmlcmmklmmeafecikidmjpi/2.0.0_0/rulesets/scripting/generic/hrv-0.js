"use strict";

!function() {
    const e = [ [ 12989194, ".fold_home__pasica_banner:not(html, body, :empty)" ], [ 15451211, "#googleglava" ], [ 10680956, "#googledesnovertikalna" ], [ 5855077, "#googleispodteksta" ], [ 15445665, "#googledolje" ], [ 10652823, ".reklama-na-indexu:not(html, body, :empty)" ], [ 6879724, ".homepage-top-google-banner:not(html, body, :empty)" ], [ 13987257, ".js-gpt-ad:not(html, body, :empty)" ], [ 2689874, ".banner-izdvojeno:not(html, body, :empty)" ], [ 8608347, ".elementor-widget-smartmag-codes:not(html, body, :empty)" ], [ 14656153, ".banner__placeholder:not(html, body, :empty)" ], [ 1377122, ".cxenseignore:not(html, body, :empty, [id])" ] ], o = self.genericSelectorMap || new Map;
    if (0 !== o.size) {
        for (const t of e) {
            const e = o.get(t[0]);
            o.set(t[0], void 0 === e ? t[1] : `${e},${t[1]}`);
        }
        self.genericSelectorMap = o;
    } else self.genericSelectorMap = new Map(e);
}();