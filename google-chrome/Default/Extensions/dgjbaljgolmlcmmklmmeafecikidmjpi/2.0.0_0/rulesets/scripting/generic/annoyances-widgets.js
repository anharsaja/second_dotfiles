"use strict";

!function() {
    const e = [ [ 16431973, "#WACLauncher__Button" ], [ 16120016, "#popin-salescontact" ], [ 14414991, ".b24-widget-button-wrapper" ], [ 13433282, ".chat_hammerbot-iframe-wrapper__outer" ], [ 7725274, ".drift-facade" ], [ 10548027, ".intercom-launcher" ], [ 4324221, ".intercom-lightweight-app" ], [ 14063673, ".joinchat--chatbox" ], [ 8491567, ".m-chat-toggler" ], [ 12739565, ".sticky-button--whatsapp" ], [ 13004488, ".wix-blog-hide-in-print.SITE_FOOTER_WRAPPER" ] ], t = self.genericSelectorMap || new Map;
    if (0 !== t.size) {
        for (const c of e) {
            const e = t.get(c[0]);
            t.set(c[0], void 0 === e ? c[1] : `${e},${c[1]}`);
        }
        self.genericSelectorMap = t;
    } else self.genericSelectorMap = new Map(e);
}();