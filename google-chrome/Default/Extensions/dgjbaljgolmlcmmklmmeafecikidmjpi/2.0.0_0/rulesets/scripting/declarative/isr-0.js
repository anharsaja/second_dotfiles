"use strict";

!function() {
    const t = new Map([ [ "bhol.co.il", 0 ], [ "haaretz.co.il", 1 ], [ "www-haaretz-co-il.eu1.proxy.openathens.net", 1 ], [ "koozi.info", 2 ] ]), e = new Map(void 0), o = new Map(void 0);
    self.declarativeImports = self.declarativeImports || [], self.declarativeImports.push({
        argsList: [ [ '{"selector":"body","action":["style","overflow: auto !important;"]}' ], [ '{"selector":"html","action":["style","height: auto !important; overflow: auto !important"]}' ], [ '{"selector":".tien-ads-video > div#player","action":["style","visibility: visible!important;"]}', '{"selector":".tien-ads-video","action":["style","background: none!important;"]}' ] ],
        hostnamesMap: t,
        entitiesMap: e,
        exceptionsMap: o
    });
}();