"use strict";

!function() {
    const a = [ [ 4850939, "#ad_popup" ], [ 190491, "#adRectangle" ], [ 11594592, "#onlajny-stickers" ], [ 3287424, "#promo-box" ], [ 6638946, "#reklama-etarget" ], [ 7145755, "#reklamni-box" ], [ 14958049, "#reklamy" ], [ 15973616, "#sklik" ], [ 14449163, "#slevomat_ad" ], [ 7561587, "#topbanner" ], [ 12677803, "#zivefirmy" ], [ 5222737, ".adform-adbox" ], [ 538689, ".bx-leaderboard" ], [ 9377180, ".cnc-ads" ], [ 15666973, ".etarget" ], [ 16343543, ".hp-advert" ], [ 8253701, ".jobscz" ], [ 9296789, ".lsads-banner" ], [ 10025090, ".nativead" ], [ 5251448, ".ownad" ], [ 1583392, ".perex-adblock-warning" ], [ 16756924, ".r-main" ], [ 5167085, ".reklama-3" ], [ 15630592, ".reklama-bottom" ], [ 1845318, ".reklama-box" ], [ 2054609, ".reklama-left" ], [ 6048836, ".reklama-lista" ], [ 10656789, ".reklama-megaboard" ], [ 6038619, ".reklama-right" ], [ 1844504, ".reklama-top" ], [ 6049708, ".reklamaBottom" ], [ 10676714, ".reklamaHorniLista" ], [ 6061274, ".reklama_ahead" ], [ 15615469, ".reklama_square" ], [ 1938610, ".rklm" ], [ 11480061, ".sklik" ], [ 6017495, ".sklik-block" ], [ 6170985, ".sklik-box" ], [ 16632090, ".sklik_left" ], [ 5999824, ".sklik_right" ], [ 14526852, ".topreklama" ], [ 5302317, ".vreklama" ] ], e = self.genericSelectorMap || new Map;
    if (0 !== e.size) {
        for (const r of a) {
            const a = e.get(r[0]);
            e.set(r[0], void 0 === a ? r[1] : `${a},${r[1]}`);
        }
        self.genericSelectorMap = e;
    } else self.genericSelectorMap = new Map(a);
}();