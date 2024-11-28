"use strict";

!function() {
    const s = new Map([ [ "haaretz.co.il", 0 ], [ "www-haaretz-co-il.eu1.proxy.openathens.net", 0 ], [ "www.kikar.co.il", 1 ], [ "morfix.co.il", 2 ], [ "sheee.co.il", 3 ], [ "walla.co.il", 3 ] ]), e = new Map(void 0), t = new Map(void 0);
    self.proceduralImports = self.proceduralImports || [], self.proceduralImports.push({
        argsList: [ [ '{"selector":"span:has([href*=\\"promo\\"])","tasks":[["xpath",".."]]}' ], [ '{"selector":"div[aria-label*=\\"המחלקה המסחרית\\"]","tasks":[["upward",5]]}' ], [ '{"selector":"script","tasks":[["has-text","admiral"]]}' ], [ '{"selector":"script","tasks":[["has-text","(window)}catch"]]}', '{"selector":"script","tasks":[["has-text","200==="]]}', '{"selector":"script","tasks":[["has-text","responseText"]]}' ] ],
        hostnamesMap: s,
        entitiesMap: e,
        exceptionsMap: t
    });
}();